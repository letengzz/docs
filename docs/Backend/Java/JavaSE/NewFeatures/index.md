# Java 新特性

## Lambda语法格式

- 无参，无返回值 `()->{}`
- Lambda需要一个参数，但是没有返回值 `(T t)->{}`
- 数据类型可以省略，因为可由编译器推断得出，称为：类型推断 `(t)->{}` 
- Lambda 若只需要一个参数时，参数的小括号可以省略 `t->{}`
- Lambda 需要两个或以上的参数，有多条执行语句，并有返回值 `(t1,t2)->{ ...; return ...; }`
- 若Lambda体只有一条语句时，return与大括号若有，都可以省略 `Comparator<Integer> com = (o1,o2)-> o1.comparaTo(o2) ;`

## 方法引用

```java
* 方法引用的使用
*
* 1.使用情境：当要传递给Lambda体的操作，已经有实现的方法了，可以使用方法引用！
*
* 2.方法引用，本质上就是Lambda表达式，而Lambda表达式作为函数式接口的实例。所以
*   方法引用，也是函数式接口的实例。
*
* 3. 使用格式：  类(或对象) :: 方法名
*
* 4. 具体分为如下的三种情况：
*    情况1     对象 :: 非静态方法
*    情况2     类 :: 静态方法
*    情况3     类 :: 非静态方法
*
* 5. 方法引用使用的要求：要求接口中的抽象方法的形参列表和返回值类型与方法引用的方法的
*    形参列表和返回值类型相同！（针对于情况1和情况2）
*    当函数式接口方法的第一个参数是需要引用方法的调用者，并且第二个参数是需要引用方法的参数（或无参数）时，
     使用第三种引用方式ClassName::methodName
* 6.使用建议：
*    如果给函数式接口提供实例，恰好满足方法引用的使用情境，就可以考虑使用方法引用给函数式接口提供实例。
*    如果大家熟悉方法引用，还可以使用Lambda表达式。
```

## 流操作

```text
* 1.Stream关注的是对数据的运算，与CPU打交道
*    集合关注的是数据的存储，与内存打交道
*
* 2.
* ①Stream 自己不会存储元素。
* ②Stream 不会改变源对象。相反，他们会返回一个持有结果的新Stream。
* ③Stream 流的操作时尽可能惰性执行的，这意味着他们会等到需要结果的时候才执行
*
* 3.Stream 执行流程
* ① Stream的实例化
* ② 一系列的中间操作（过滤、映射、...)
* ③ 终止操作
*
* 4.说明：
* 4.1 一个中间操作链，对数据源的数据进行处理
* 4.2 一旦执行终止操作，就执行中间操作链，并产生结果。之后，不会再被使用再次执行会抛出异常：IllegalStateException
```

> 创建方法

```text
- 通过集合
  - default Stream<E> stream() : 返回一个顺序流
  - default Stream<E> parallelStream() : 返回一个并行流
- 通过数组
  - 调用 Arrays 类的static <T> Stream<T> stream(T[] array): 返回一个流
- 通过Stream的of()
  - Stream<Integer> stream = Stream.of(1, 2, 3, 4, 5, 6);
- 无限流
  - static <T> Stream<T> generate(Supplier<T> s) 产生一个无限流，它的值是通过反复调用函数s而构建的
  - static <T> Stream<T> iterate(T seed,UnaryOperator<T> f) 产生一个无限流，它的元素包含种子，在种子上调用f产生的值、在前一个元素上调用f产生的值
- 合并流
  - Static <T> Stream<T> concat(Stream<? extends T> a, Stream<? extends T> b) 将两个流连接到一起，第一个流不应该是无限的，不然第二个流永远都不会得到处理的机会
```

> 中间操作

```text
- 筛选与切片
   - filter(Predicate p)
   - limit(n)——截断流，使其元素不超过给定数量。
   - skip(n) —— 跳过元素，返回一个扔掉了前 n 个元素的流。若流中元素不足 n 个，则返回一个空流。与 limit(n) 互补
   - distinct()——筛选，通过流所生成元素的 hashCode() 和 equals() 去除重复元素
   - Stream<T> peek(Consumer<? super T> action) -----产生一个流，它与当前流中的元素相同，在获取其中每个元素是，会将其传递给action
- 映射
   - map(Function f)——接收一个函数作为参数，将元素转换成其他形式或提取信息，该函数会被应用到每个元素上，最终映射成一个包含所需元素的新流。
   - flatMap(Function f)——接收一个函数作为参数，将流中的每个值都换成另一个流，然后把所有流连接成一个流。（每个结果都是一个流）
- 排序
   - sorted()——自然排序
   - sorted(Comparator com)——定制排序
```

> 终结操作

```text
- 匹配与查找
   - allMatch(Predicate p)——检查是否匹配所有元素。
   - anyMatch(Predicate p)——检查是否至少匹配一个元素。
   - noneMatch(Predicate p)——检查是否没有匹配的元素。
   - findFirst——返回第一个元素
   - findAny——返回当前流中的任意元素
   - count——返回流中元素的总个数
   - max(Comparator c)——返回流中最大值
   - min(Comparator c)——返回流中最小值
   - forEach(Consumer c)——内部迭代
- 规约
   - reduce(T identity, BinaryOperator)——可以将流中元素反复结合起来，得到一个值。返回 T
   - reduce(BinaryOperator) ——可以将流中元素反复结合起来，得到一个值。返回 Optional<T>
- 收集
   - collect(Collector c)——将流转换为其他形式。接收一个 Collector接口的实现，用于给Stream中元素做汇总的方法
   - Object[] toArray()
   `<A> AIJ toArray(IntFunction<A[]>generator)`
   产生一个对象数组，或者在将引用 A[] :: new 传递给构造器时，返回一个 A类型的数组。
   - static <T> Collector<T,?,List<T>> tolist()
   static <T> Collector<T,?, Set<T>> toset()
   产生一个将元素收集到列表或集中的收集器。
   - static <T,C extends Collection<T>> Collector<T,?,C> toCollection(Supplier<C> collectionFactory)
   产生一个将元素收集到任意集合中的收集器。可以传递一个诸如 Treeset：：new 的构造器引用。
   - static Collector<CharSequence,?,String> joining()
   static Collector<CharSequence,?,String> joining(CharSequence delimiter)
   static Collector<CharSequence, ?,String> joining(CharSequence delimiter,CharSequence prefix, CharSequence suffix)
   产生一个连接字符串的收集器。分隔待会置于字符串之间，而第一个字符串之前可以有前缀，最后一个宇符串之后可以有后级。如果没有指定，那么它们都为空。  
   -  static <T> Collector<T,?,IntSurmarystatistics> summarizingInt ( ToIntFunction<? super T> mapper)
   static <T> Collector<T,?,LongSummaryStatistics> summarizingLong(ToLongFunction<? superT> mapper)
   static <T> Collector<T,?,DoubleSummaryStatistics> summarizingDouble(ToDoubleFunction<? super T> mapper)
   产生能够生成 (Int|Long|Double)SummaryStatistics 对象的收集器，通过它可以获得将mapper 应用于每个元素后所产生的结果的个数、总和、平均值、最大值和最小值。  
   -  long getCount()
   产生汇总后的元素的个数。
   (int | long | double) getSum()
   double getAverage()
   产生汇总后的元素的,总和或平均值，或者在没有任何元素时返回 0。
   (int | long | double) getMax()
   (int | long | double) getMin()
   产生汇总后的元素的最大值和最小值，或者在没有任何元素时，产生 (Integer | Long | Double). (MAX | MIN)_VALUE.  
- 映射表
   - toMap()
- 群组和分区
   - groupingBy()

```

