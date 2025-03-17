# XXL-JOB

xxl-job就是一个中心化管理系统，系统主要通过MySQL管理各种定时任务信息，当到了定时任务的触发时间，就把任务信息从数据库中拉进内存，对任务执行器发起调度请求。

- gitee 地址 https://gitee.com/xuxueli0323/xxl-job?_from=gitee_search

- github 地址：https://github.com/xuxueli/xxl-job

- 文档地址：https://www.xuxueli.com/xxl-job/

下载xxl-job源代码：

```shell
git  clone https://gitee.com/xuxueli0323/xxl-job.git
```

**源代码模块**：

- `xxl-job-admin`：调度中心
  作用：统一管理任务调度平台上调度任务，负责触发调度执行，并且提供任务管理平台
- `xxl-job-core`：公共依赖
- `xxl-job-executor-samples`：执行器Sample示例， 执行器就是业务系统，定时任务要做什么功能。

**运行过程**：xxl-job-admin创建任务的执行时间，时间到了，向xxl-job-executor-samples发起一个调用，执行xxl-job-executor-samples中的某个方法，任务开始执行了。

- 启动xxl-job-admin工程。若无定制化开发，直接启动即可。
- 在xxl-job-excutor中需要引入xxl-job-core依赖，实现定时任务的业务代码，配置xxl-job-admin的地址，主动向xxl-job-admin注册，并建立通讯连接。

## 操作步骤

### 初始化数据库

执行  /xxl-job/doc/db/tables_xxl_job.sql 

数据库表：

| 表名               | 作用                                                         |
| ------------------ | ------------------------------------------------------------ |
| xxl_job_group      | 执行器信息表：维护任务执行器信息                             |
| xxl_job_info       | 调度扩展信息表：用于保存xxl-job调度任务的扩展信息，如任务分组、任务名、机器地址、执行器、执行入参和报警邮件等等 |
| xxl_job_lock       | 任务调度锁表                                                 |
| xxl_job_log        | 调度日志表：用于保存xxl-job调度任务的历史信息，如调度结果、执行结果、调度入参、调度机器和执行器等等 |
| xxl_job_log_report | 调度日志报表：用户存储xxl-job任务调度日志的报表，调度中心报表功能页面会用到 |
| xxl_job_logglue    | 任务GLUE日志：用于保存GLUE更新历史，用于支持GLUE的版本回溯功能 |
| xxl_job_registry   | 执行器注册表：维护在线的执行器和调度中心机器地址信息         |
| xxl_job_user       | 系统用户表                                                   |

### 调整调度中心

xxl-job-admin模块是调度中心， 一个web应用

application.properties配置文件：

```properties
spring.resources.static-locations=classpath:/static/
替换为： spring.web.resources.static-locations=classpath:/static/


management.server.servlet.context-path=/actuator
替换为： management.server.base-path=/actuator

修改端口号为： server.port=8001

修改数据库配置 url ， username ，password 
```

运行调度中心，浏览器访问：http://localhost:8001/xxl-job-admin/jobinfo 

默认用户 admin /  123456

打包项目独立部署

```shell
java -jar  xxx.jar
```

### 执行器

xxl-job-executor-sample-springboot

#### maven引入 xxl-job-core核心依赖

```xml
<!-- xxl-job-core -->
<dependency>
   <groupId>com.xuxueli</groupId>
   <artifactId>xxl-job-core</artifactId>
   <version>${project.parent.version}</version>
</dependency>
```

#### 修改application.properties

```properties
# web port
server.port=8002

### xxl-job admin address list, such as "http://address" or "http://address01,http://address02"
xxl.job.admin.addresses=http://127.0.0.1:8001/xxl-job-admin

# 执行器默认端口号
xxl.job.executor.port=9999
```

#### 初始化 XxlJobConfig

在【XxljobConfig】中初始化一个XxlJobSpringExecutor，该类用于处理xxl-job-admin和xxl-job-excutor之间的通讯以及任务的处理。

```java
@Configuration
public class XxlJobConfig {
    private Logger logger = LoggerFactory.getLogger(XxlJobConfig.class);

    @Value("${xxl.job.admin.addresses}")
    private String adminAddresses;

    @Value("${xxl.job.accessToken}")
    private String accessToken;

    @Value("${xxl.job.executor.appname}")
    private String appname;

    @Value("${xxl.job.executor.address}")
    private String address;

    @Value("${xxl.job.executor.ip}")
    private String ip;

    @Value("${xxl.job.executor.port}")
    private int port;

    @Value("${xxl.job.executor.logpath}")
    private String logPath;

    @Value("${xxl.job.executor.logretentiondays}")
    private int logRetentionDays;


    @Bean
    public XxlJobSpringExecutor xxlJobExecutor() {
        logger.info(">>>>>>>>>>> xxl-job config init.");
        XxlJobSpringExecutor xxlJobSpringExecutor = new XxlJobSpringExecutor();
        xxlJobSpringExecutor.setAdminAddresses(adminAddresses);
        xxlJobSpringExecutor.setAppname(appname);
        xxlJobSpringExecutor.setAddress(address);
        xxlJobSpringExecutor.setIp(ip);
        xxlJobSpringExecutor.setPort(port);
        xxlJobSpringExecutor.setAccessToken(accessToken);
        xxlJobSpringExecutor.setLogPath(logPath);
        xxlJobSpringExecutor.setLogRetentionDays(logRetentionDays);

        return xxlJobSpringExecutor;
    }

}
```

#### 创建定时任务

在执行器项目中，创建如下类：

```java
@Component
public class JobHandlerPrintDate {

    @XxlJob(value = "jobPrintDate")
    public void printDate() throws InterruptedException {
        for(int i=0;i<10;i++){
            System.out.println("定时开始执行了："+ new Date());
            Thread.sleep(2000);
        }
    }
}
```

#### 配置调度中心-执行任务

启动调度中心， 在启动执行器服务

访问调度中心：浏览器访问： http://localhost:8001/xxl-job-admin/

- 调度中心：查询执行器

  ![image-20230902105141266](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/image-20230902105141266.png)

- 任务管理：新建调度任务，右上角按钮"新增"，配置新任务

  ![image-20230904162727680](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/image-20230904162727680.png)

  **运行模式**：

  - BEAN模式：支持基于类的开发方式，每个任务对应一个Java类。

  - GLUE模式：任务以源码方式维护在调度中心，支持通过`Web IDE`在线更新，实时编译和生效，因此不需要指定JobHandler。

  **路由策略**：当执行器集群部署时，提供丰富的路由策略，包括；

  - FIRST（第一个）：固定选择第一个机器；
  - LAST（最后一个）：固定选择最后一个机器；
  - ROUND（轮询）：；
  - RANDOM（随机）：随机选择在线的机器；
  - CONSISTENT_HASH（一致性HASH）：每个任务按照Hash算法固定选择某一台机器，且所有任务均匀散列在不同机器上。
  - LEAST_FREQUENTLY_USED（最不经常使用）：使用频率最低的机器优先被选举；
  - LEAST_RECENTLY_USED（最近最久未使用）：最久未使用的机器优先被选举；
  - FAILOVER（故障转移）：按照顺序依次进行心跳检测，第一个心跳检测成功的机器选定为目标执行器并发起调度；
  - BUSYOVER（忙碌转移）：按照顺序依次进行空闲检测，第一个空闲检测成功的机器选定为目标执行器并发起调度；
  - SHARDING_BROADCAST(分片广播)：广播触发对应集群中所有机器执行一次任务，同时系统自动传递分片参数；可根据分片参数开发分片任务；

- 启动任务：选择某个任务，右侧"操作"按钮，下拉选择"启动"

  ![image-20230904162905485](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/image-20230904162905485.png)	

- 查询运行日志：选择左侧 "调度日志" 菜单，能查询执行日志。

#### 在业务项目创建定时任务

在自己的项目中使用定时任务的功能， 需要创建Bean，定义方法，用`@XxlJob`注解声明。 

创建新的spring boot项目，依赖spring-web。

1. 编译xxl-job项目：对xxl-job根目录下的pom.xml执行 "install" 操作。 查看maven仓库生成的xxl-job的依赖。 项目需要xxl-job-core依赖 

   ```xml
    <dependency>
          <groupId>com.xuxueli</groupId>
          <artifactId>xxl-job-core</artifactId>
          <version>2.4.1-SNAPSHOT</version>
   </dependency>
   
   版本号，需要和你的下载的xxl-job匹配。
   ```

2. 拷贝application.properties：拷贝xxl-job-executor-samples/resource/application.properties 到新项目resources目录， 修改端口号， 执行器名称

   ```properties
   # web port
   server.port=8002
   # log config
   logging.config=classpath:logback.xml
   
   
   ### xxl-job admin address list, such as "http://address" or "http://address01,http://address02"
   xxl.job.admin.addresses=http://127.0.0.1:8001/xxl-job-admin
   ### xxl-job, access token
   xxl.job.admin.accessToken=default_token
   ### xxl-job timeout by second, default 3s
   xxl.job.admin.timeout=3
   
   ### xxl-job executor appname
   xxl.job.executor.appname=executor-demo
   ### xxl-job executor registry-address: default use address to registry , otherwise use ip:port if address is null
   xxl.job.executor.address=
   ### xxl-job executor server-info
   xxl.job.executor.ip=
   xxl.job.executor.port=9901
   ### xxl-job executor log-path
   xxl.job.executor.logpath=/data/applogs/xxl-job/jobhandler
   ### xxl-job executor log-retention-days
   xxl.job.executor.logretentiondays=30
   ```

3. 拷贝 logback.xml：拷贝xxl-job-executor-samples/resource/logback.xml到新项目的resources目录

4. 创建XxlJobConfig类：

   ```java
   @Configuration
   public class XxlJobConfig {
       private Logger logger = LoggerFactory.getLogger(XxlJobConfig.class);
   
       @Value("${xxl.job.admin.addresses}")
       private String adminAddresses;
   
       @Value("${xxl.job.accessToken}")
       private String accessToken;
   
       @Value("${xxl.job.executor.appname}")
       private String appname;
   
       @Value("${xxl.job.executor.address}")
       private String address;
   
       @Value("${xxl.job.executor.ip}")
       private String ip;
   
       @Value("${xxl.job.executor.port}")
       private int port;
   
       @Value("${xxl.job.executor.logpath}")
       private String logPath;
   
       @Value("${xxl.job.executor.logretentiondays}")
       private int logRetentionDays;
   
   
       @Bean
       public XxlJobSpringExecutor xxlJobExecutor() {
           logger.info(">>>>>>>>>>> xxl-job config init.");
           XxlJobSpringExecutor xxlJobSpringExecutor = new XxlJobSpringExecutor();
           xxlJobSpringExecutor.setAdminAddresses(adminAddresses);
           xxlJobSpringExecutor.setAppname(appname);
           xxlJobSpringExecutor.setAddress(address);
           xxlJobSpringExecutor.setIp(ip);
           xxlJobSpringExecutor.setPort(port);
           xxlJobSpringExecutor.setAccessToken(accessToken);
           xxlJobSpringExecutor.setLogPath(logPath);
           xxlJobSpringExecutor.setLogRetentionDays(logRetentionDays);
   
           return xxlJobSpringExecutor;
       }
   
   }
   ```

5. 创建Task：

   ```java
   @Component
   public class TaskService {
   
       //第一个方法
       @XxlJob(value = "testJob")
       public void printInfo(){
           System.out.println("定时任务执行了" + new Date() );
       }
   }
   ```

6. 启动项目并新增执行器：

   ![image-20250315160330867](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/image-20250315160330867.png)

7. 配置定时任务， JobHandler名称是"testJob"

   ![image-20250315161133042](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/image-20250315161133042.png)

