# 公用池化包 Commons Pool 2

Java 中公用的池化包 Commons Pool 2，来了解一下对象池的一般结构。使用这套 API 能够很容易实现对象的池化管理。

```xml
<!-- https://mvnrepository.com/artifact/org.apache.commons/commons-pool2 -->
<dependency>
    <groupId>org.apache.commons</groupId>
    <artifactId>commons-pool2</artifactId>
    <version>2.11.1</version>
</dependency>
```

GenericObjectPool 是对象池的核心类，通过传入一个对象池的配置和一个对象的工厂，即可快速创建对象池。

```java
public GenericObjectPool( 
            final PooledObjectFactory<T> factory, 
            final GenericObjectPoolConfig<T> config)
```

## 案例

Redis 的常用客户端 Jedis，就是使用 Commons Pool 管理连接池的，可以说是一个最佳实践。下图是 Jedis 使用工厂创建对象的主要代码块。

对象工厂类最主要的方法就是makeObject，它的返回值是 PooledObject 类型，可以将对象使用 `new DefaultPooledObject<>(obj)` 进行简单包装返回。

redis.clients.jedis.JedisFactory，使用工厂创建对象。

```java
@Override
public PooledObject<Jedis> makeObject() throws Exception {
  Jedis jedis = null;
  try {
    jedis = new Jedis(jedisSocketFactory, clientConfig);
    //主要的耗时操作
    jedis.connect();
    //返回包装对象
    return new DefaultPooledObject<>(jedis);
  } catch (JedisException je) {
    if (jedis != null) {
      try {
        jedis.quit();
      } catch (RuntimeException e) {
        logger.warn("Error while QUIT", e);
      }
      try {
        jedis.close();
      } catch (RuntimeException e) {
        logger.warn("Error while close", e);
      }
    }
    throw je;
  }
}
```

对象的生成过程：对象在进行获取时，将首先尝试从对象池里拿出一个，如果对象池中没有空闲的对象，就使用工厂类提供的方法，生成一个新的。

```java
public T borrowObject(final Duration borrowMaxWaitDuration) throws Exception {
    //此处省略若干行
    while (p == null) {
        create = false;
        //首先尝试从池子中获取。
        p = idleObjects.pollFirst();
        // 池子里获取不到，才调用工厂内生成新实例
        if (p == null) {
            p = create();
            if (p != null) {
                create = true;
            }
        }
        //此处省略若干行
    }
    //此处省略若干行
}
```

对象存储的职责，就是由一个叫作 LinkedBlockingDeque 的结构来承担的，它是一个双向的队列。

GenericObjectPoolConfig 的主要属性：

```java
// GenericObjectPoolConfig本身的属性
private int maxTotal = DEFAULT_MAX_TOTAL;
private int maxIdle = DEFAULT_MAX_IDLE;
private int minIdle = DEFAULT_MIN_IDLE;
// 其父类BaseObjectPoolConfig的属性
private boolean lifo = DEFAULT_LIFO;
private boolean fairness = DEFAULT_FAIRNESS;
private long maxWaitMillis = DEFAULT_MAX_WAIT_MILLIS;
private long minEvictableIdleTimeMillis = DEFAULT_MIN_EVICTABLE_IDLE_TIME_MILLIS;
private long evictorShutdownTimeoutMillis = DEFAULT_EVICTOR_SHUTDOWN_TIMEOUT_MILLIS;
private long softMinEvictableIdleTimeMillis = DEFAULT_SOFT_MIN_EVICTABLE_IDLE_TIME_MILLIS;
private int numTestsPerEvictionRun = DEFAULT_NUM_TESTS_PER_EVICTION_RUN;
private EvictionPolicy<T> evictionPolicy = null; 
// Only 2.6.0 applications set this 
private String evictionPolicyClassName = DEFAULT_EVICTION_POLICY_CLASS_NAME;
private boolean testOnCreate = DEFAULT_TEST_ON_CREATE;
private boolean testOnBorrow = DEFAULT_TEST_ON_BORROW;
private boolean testOnReturn = DEFAULT_TEST_ON_RETURN;
private boolean testWhileIdle = DEFAULT_TEST_WHILE_IDLE;
private long timeBetweenEvictionRunsMillis = DEFAULT_TIME_BETWEEN_EVICTION_RUNS_MILLIS;
private boolean blockWhenExhausted = DEFAULT_BLOCK_WHEN_EXHAUSTED;
```

参数很多，要想了解参数的意义，首先来看一下一个池化对象在整个池子中的生命周期。

池子的操作主要有两个：一个是业务线程，一个是检测线程。

![image-20250222171817232](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/image-20250222171817232.png)

对象池在进行初始化时，要指定三个主要的参数：

- maxTotal 对象池中管理的对象上限
- maxIdle 最大空闲数
- minIdle 最小空闲数

其中 maxTotal 和业务线程有关，当业务线程想要获取对象时，会首先检测是否有空闲的对象。

如果有，则返回一个；否则进入创建逻辑。此时，如果池中个数已经达到了最大值，就会创建失败，返回空对象。

对象在获取的时候，有一个非常重要的参数，那就是最大等待时间（maxWaitMillis），这个参数对应用方的性能影响是比较大的。该参数默认为 -1，表示永不超时，直到有对象空闲。

如果对象创建非常缓慢或者使用非常繁忙，业务线程会持续阻塞 （blockWhenExhausted 默认为 true），进而导致正常服务也不能运行。

![image-20250222171854052](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/image-20250222171854052.png)

## 面试题

一般面试官会问：你会把超时参数设置成多大呢？我一般都会把最大等待时间，设置成接口可以忍受的最大延迟。

比如，一个正常服务响应时间 10ms 左右，达到 1 秒钟就会感觉到卡顿，那么这个参数设置成 500~1000ms 都是可以的。

超时之后，会抛出 NoSuchElementException 异常，请求会快速失败，不会影响其他业务线程，这种 Fail Fast 的思想，在互联网应用非常广泛。

带有 evcit 字样的参数，主要是处理对象逐出的。池化对象除了初始化和销毁的时候比较昂贵，在运行时也会占用系统资源。

比如，连接池会占用多条连接，线程池会增加调度开销等。业务在突发流量下，会申请到超出正常情况的对象资源，放在池子中。等这些对象不再被使用，我们就需要把它清理掉。

超出 minEvictableIdleTimeMillis 参数指定值的对象，就会被强制回收掉，这个值默认是 30 分钟；softMinEvictableIdleTimeMillis 参数类似，但它只有在当前对象数量大于 minIdle 的时候才会执行移除，所以前者的动作要更暴力一些。

还有 4 个 test 参数：testOnCreate、testOnBorrow、testOnReturn、testWhileIdle，分别指定了在创建、获取、归还、空闲检测的时候，是否对池化对象进行有效性检测。

开启这些检测，能保证资源的有效性，但它会耗费性能，所以默认为 false。

生产环境上，建议只将 testWhileIdle 设置为 true，并通过调整空闲检测时间间隔（timeBetweenEvictionRunsMillis），比如 1 分钟，来保证资源的可用性，同时也保证效率。

## JMH 测试

使用连接池和不使用连接池，它们之间的性能差距到底有多大呢？

进行一个简单的 set 操作，为 redis 的 key 设置一个随机值：

```java
@Fork(2) 
@State(Scope.Benchmark) 
@Warmup(iterations = 5, time = 1) 
@Measurement(iterations = 5, time = 1) 
@BenchmarkMode(Mode.Throughput) 
public class JedisPoolVSJedisBenchmark { 
   JedisPool pool = new JedisPool("localhost", 6379); 

   @Benchmark 
   public void testPool() { 
       Jedis jedis = pool.getResource(); 
       jedis.set("a", UUID.randomUUID().toString()); 
       jedis.close(); 
   } 

   @Benchmark 
   public void testJedis() { 
       Jedis jedis = new Jedis("localhost", 6379); 
       jedis.set("a", UUID.randomUUID().toString()); 
       jedis.close(); 
   } 
   //此处省略若干行
}
```

将测试结果使用 meta-chart 作图，展示结果如下图所示，可以看到使用了连接池的方式，它的吞吐量是未使用连接池方式的 5 倍！

![image-20250222172045085](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/image-20250222172045085.png)

