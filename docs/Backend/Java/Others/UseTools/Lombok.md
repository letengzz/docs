# Lombok

Lombok 是一个 Java 库，它可以通过注解的方式减少 Java 代码中的样板代码，简化消除⼀些必须有但显得很臃肿的 Java代码(**通过简单的注解来精简代码达到消除冗长代码的目的**)。Lombok 自动生成构造函数、getter、setter、equals、hashCode、toString 方法等，从而避免了手动编写这些重复性的代码。这不仅减少了出错的机会，还让代码看起来更加简洁。

**<font style="color:#DF2A3F;">Lombok只是一个编译阶段的库，能够自动补充代码，在Java程序运行阶段并不起作用，因此Lombok库并不会影响Java程序的执行效率</font>**

- Lombok官网：https://projectlombok.org/

- GitHub地址：https://github.com/projectlombok/lombok

**Lombok 优点**：

- 提⾼编码效率 

- 使代码更简洁 
- 消除冗长代码 
- 避免修改字段名字时忘记修改方法名

**注意**：使用Lombok时，当有特殊需求时也可定制自己的代码。

**Lombok 实现原理**：

Java的编译过程，它可以分成三个阶段：

![img](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/others/202412100001648.webp)



1. 所有源文件会被解析成语法树。
2. 调用注解处理器。如果注解处理器产生了新的源文件，新文件也要进行编译。
3. 最后，语法树会被分析并转化成类文件。

Lombok会在上述的第二阶段，执行*[lombok.core.AnnotationProcessor](https://github.com/rzwitserloot/lombok/blob/master/src/core/lombok/core/AnnotationProcessor.java)*，它所做的工作就是修改语法树，并将注解对应需要生成的内容全部添加到类文件中，这样，即使没有在源代码中编写的内容，也会存在于生成出来的class文件中。

## Lombok 常用注解

**常用注解**：

![图片1](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/others/202412100001257.png)

## Lombok 使用

在SpringBoot中添加依赖：

```xml
<dependency>
	<groupId>org.projectlombok</groupId>
	<artifactId>lombok</artifactId>
    <scope>provided</scope>
</dependency>
```

****

在IDEA中安装Lombok插件，安装后重启即可：

![image-20230222164401161](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/others/202412100014720.png)

Lombok既是⼀个IDE插件，也是⼀个项目要依赖的jar包。Lombok是依赖jar包的原因是因为编译时要用它的注解。是插件的原因是他要在编译器编译时通过操作AST(抽象语法树)改变字节码生成。也就是说他可以改变java语法。他不像spring的依赖注⼊或者hibernate的orm⼀样是运行时的特性，而是编译时的特性。

### 类属性相关

#### @Getter 注解

用于自动生成Getter方法。

**注意**：`@Getter`存在一定的命名规则，如果该字段为foo，则将其直接按照字段名称命名为`getFoo`，但是如果字段的类型为boolean，则会命名为`isFoo`。

**注解定义**：

```java
@Target({ElementType.FIELD, ElementType.TYPE}) //此注解可以添加在字段或是类型上
@Retention(RetentionPolicy.SOURCE)
public @interface Getter {
    AccessLevel value() default AccessLevel.PUBLIC;  //自动生成Getter的访问权限级别

    AnyAnnotation[] onMethod() default {}; //用于添加额外的注解

    boolean lazy() default false;  //懒加载功能

	...
}
```

**用法**：

```java
@Getter  //添加到类上时，将为类中所有字段生成getter方法
public class Account {
    private int id;
    @Getter //添加到字段上时，只为该字段生成getter方法
    private String name;
    private int age;
}
```

**调整**：

- 访问权限级别：默认情况下为`public`

  - `AccessLevel.PUBLIC`：对应public关键字
  - `AccessLevel.MODULE`：仅限模块内使用，与PACKAGE类似，相当于不添加任何访问权限关键字
  - `AccessLevel.PROTECTED`：对应protected关键字
  - `AccessLevel.PACKAGE`：相当于不添加任何访问权限关键字
  - `AccessLevel.PRIVATE`：对应private关键字
  - `AccessLevel.NONE`：表示不生成对应的方法，很适合对类中不需要生成的字段进行排除

  ```java
  @Getter(AccessLevel.PRIVATE)
  public class Account {
      private int id;
      private String name;
      private int age;
      private boolean gender;
  }
  ```

- 添加额外的注解：onMethod属性用于添加一些额外的注解到生成的方法上，比如：为Getter方法添加一个额外的 `@Deprecated`表示它不推荐使用：

  ```java
  @Getter
  public class Account {
      private int id;
      @Getter(onMethod = {@Deprecated}) 
      private String name;
      private int age;
      private boolean gender;
  }
  ```

- 懒加载：lazy属性用于控制懒加载，懒加载在一开始的时候此字段没有值，当需要的时候再将值添加到此处。

  要求：字段必须是private且final

  ```java
  @Getter
  public class Account {
      private int id;
      @Getter(lazy = true)
      private final String name = "张三";
      private int age;
      private boolean gender;
  }
  ```

  生成的代码：

  ```java
  public class Account {
      // 自动将字段修改为AtomicReference原子类型，以防止多线程环境下出现问题
      private final AtomicReference<Object> name = new AtomicReference();
  
      //当调用getName才会初始化字段的值，为了保证初始化只进行一次，整个过程与懒汉式单例模式一致
      public String getName() {
          Object value = this.name.get();
          if (value == null) {  //判断值是否为null，如果是则需要进行懒初始化
              synchronized(this.name) {  //对字段加锁，保证同时只能进一个
                  value = this.name.get();
                  if (value == null) {  //再次进行一次判断，因为有可能其他线程后进入
                      String actualValue = "张三";
                      value = "张三" == null ? this.name : "张三";
                      this.name.set(value);
                  }
              }
          }
  		//返回得到的结果
          return (String)(value == this.name ? null : value);
      }
  }
  ```

  作为使用者来说，只需要知道懒加载就是将字段的值延迟赋值给它，适合以下场景：

  ```java
  @Getter
  public class Account {
      @Getter(lazy = true)
      private final String name = initValue();
  
      private String initValue(){
          System.out.println("我不希望在对象创建时就执行");
          return "张三";
      }
  }
  ```

#### @Setter 注解

用于生成字段对应的Setter方法。

**说明**：@Setter 注解同样会根据字段名称来生成Setter方法，其他参数与`@Getter`用法一致。唯一不一样的参数为 `onParam`，它可以在形参上额外添加的自定义注解。

**用法**：

```java
@Setter
public class Account {
    private int id;
    private String name;
    private int age;
    private boolean gender;
}
```

**注意**：如果手动编写了对应字段的Getter或是Setter方法(按照上述命名规则进行判断)，那么Lombok提供的注解将不会生效，也不会覆盖自己编写的方法。

如果需要对原本内容进行覆盖，也可以使用 `@Tolerate` 注解使Lombok忽略它的存在，直接覆盖掉。

### 构造方法相关

Lombok可以自动生成对应的构造方法，它提供了三个用于处理构造方法的注解。

#### 生成所有字段

使用`@AllArgsConstructor`为类中所有字段生成一个构造方法：

**注解定义**：

```java
@Target({ElementType.TYPE})
@Retention(RetentionPolicy.SOURCE)
public @interface AllArgsConstructor {
    //用于生成一个静态构造方法
    String staticName() default "";

    //用于在构造方法上添加额外的注解
    AnyAnnotation[] onConstructor() default {};

    //设置构造方法的访问权限级别
    AccessLevel access() default AccessLevel.PUBLIC;
    ...
}
```

**用法**：

```java
@AllArgsConstructor
public class Account {
    private int id;
    private String name;
    private int age;
    private boolean gender;
}
```

静态构造方法：这种方法非常适合用作泛型的类型推断，简化代码，比如 `MapEntry.of("foo",5)` 而不是更长的`new MapEntry<String,Integer>("foo",5)`

```java
@AllArgsConstructor(staticName = "of")
public class Account {
    private int id;
    private String name;
    private int age;
    private boolean gender;
}
```

```java
Account account = Account.of(1, "zhangsan",2, true);
```

#### 无参构造

使用 `@NoArgsConstructor`来生成无参构造。

```java
@NoArgsConstructor
public class User {
	private String name;
	private Integer age;
}
```

**注意**：当使用 `@NoArgsConstructor` 无参构造时不允许存在final类型的字段，否则会出现错误，可以使用 force属性，可以在创建无参构造时，为final类型的字段给一个默认值

```java
@NoArgsConstructor(force = true) //强制生成无参构造器
public class Account {
    private final int id;   //字段必须初始化
    private String name;
    private int age;
}
```

#### 需要初始化参数

通过 `@RequiredArgsConstructor` 来生成需要初始化的参数的构造方法，也就是说类中哪些字段为final，就针对这些字段来生成对应的构造方法。

```java
@RequiredArgsConstructor //生成包含所有final字段和非final字段（如果存在）的构造器
public class Account {
    private final int id;
    private String name;
    private final int age;
}
```

生成的结果：

```java
public class Account {
    ...

    public Account(int id, int age) {   //只为fianl字段id和age生成了对应的构造方法
        this.id = id;
        this.age = age;
    }
}
```

### 打印对象

在类上添加 `@ToString`注解即可生成`toString()`方法。

**注解定义**：

```java
@Target({ElementType.TYPE})
@Retention(RetentionPolicy.SOURCE)
public @interface ToString {
    //是否在打印的内容中带上对应字段的名字
    boolean includeFieldNames() default true;

    //用于排除不需要打印的字段 (这种用法很快会被移除，不建议使用)
    String[] exclude() default {};

    //和上面相反，设置哪些字段需要打印，默认打印所有(这种用法很快会被移除，不建议使用)
    String[] of() default {};

    //不仅为当前类中所有字段生成，同时还调用父类toString进行拼接
    boolean callSuper() default false;

    //默认情况下生成的toString会尽可能使用get方法获取字段值，也可以手动关闭这个功能
    boolean doNotUseGetters() default false;

    //开启后将只为字段或get方法上添加了@ToString.Include注解的内容生成toString方法，白名单模式
    boolean onlyExplicitlyIncluded() default false;

    /**
    * 用于排除toString中的字段
    */
    @Target({ElementType.FIELD})
    @Retention(RetentionPolicy.SOURCE)
    public @interface Exclude {
    }

    /**
    * 用于手动包含toString中的字段
    */
    @Target({ElementType.FIELD, ElementType.METHOD})
    @Retention(RetentionPolicy.SOURCE)
    public @interface Include {
        //配置字段打印顺序的优先级
        int rank() default 0;

        //配置一个自定义的字段名称进行打印
        String name() default "";
    }
}
```

**用法**：

```java
@AllArgsConstructor
@ToString
public class Account {
    private int id;
    private String name;
    private int age;
}
```

不显示字段的名字：

```java
@AllArgsConstructor
@ToString(includeFieldNames = false)
public class Account {
    private int id;
    private String name;
    private int age;
}
```

![image-20240811151242536](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/others/202412100015754.png)

显示父类toString进行拼接：

```java
@AllArgsConstructor
@ToString(callSuper = true)
public class Account {
    private int id;
    private String name;
    private int age;
}
```

![image-20240811151906038](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/others/202412100015835.png)

`@ToString`对于get方法的特殊机制，会尽可能使用自定义的get方法获取字段的值，命名规则判定和之前一样：配置`doNotUseGetters`，就不会采用getter方法。

```java
@ToString(doNotUseGetters = true)
@AllArgsConstructor
public class Account {
    private int id;
    private String name;

    public String getName() {
        return name + "同学";  //编写一个自定义的getName方法
    }
    
    private int age;
}
```

![image-20240811152348799](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/others/202412100015201.png)

使用 `@ToString.Exclude` 注解排除某些字段：

```java
@ToString
@AllArgsConstructor
public class Account {
    private int id;
    private String name;
    @ToString.Exclude
    private int age;
}
```

![image-20240811154052926](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/others/202412100015996.png)

使用白名单模式：需要使用 `onlyExplicitlyIncluded = true`，将需要打印的字段添加 ` @ToString.Include`：

```java
@ToString(onlyExplicitlyIncluded = true)
@AllArgsConstructor
public class Account {
    private int id;
    @ToString.Include
    private String name;
    @ToString.Include(rank = 1,name = "年龄")
    private int age;
}
```

![image-20240811154501159](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/others/202412100015575.png)

`@ToString.Include`不仅可以对字段生效，还可以对方法生效，可以将某些方法执行后的结果也包含在toString中：

```java
@ToString(onlyExplicitlyIncluded = true)
@AllArgsConstructor
public class Account {
    ...
    
    @ToString.Include
    public String test(){
        return "测试";
    } 
}
```

### 比较相关

Lombok可以为自动生成类属性的比较方法以及对应的HashCode计算。只需要为类添加`@EqualsAndHashCode`注解，即可开启：                   

```java
@EqualsAndHashCode
@AllArgsConstructor
public class Account {
    private int id;
    private String name;
    private int age;
}
```

此时生成的类：

```java
public class Account {
    ...

    public boolean equals(Object o) {   //自动生成的equals重写方法，包含所有参数的比较
        ... 
    }

    protected boolean canEqual(Object other) {
        return other instanceof Account;
    }

    public int hashCode() {   //自动生成的hashCode重写方法
        ...
    }

    ...
}
```

它自动为所有的参数生成了对应的比较方法，可以来测试一下生成的代码是否可以正常运行：

```java
public static void main(String[] args) {
    Account a1 = new Account(1, "小明", 18);
    Account a2 = new Account(1, "小明", 18);
    System.out.println(a1.equals(a2));   //结果为true
}
```

`@EqualsAndHashCode`注解的参数大部分与`@ToString`类似，比如`exclude`、`of`、`callSuper`（默认关闭，开启后调用equals比较前先调用父类的equals进行一次比较）、`doNotUseGetters`以及生成的方法中需要额外携带的注解`onParam`属性等。

它同样可以使用`onlyExplicitlyIncluded`属性来开启白名单模式，可以使用以下注解来自由控制哪些属性会作为比较的目标，哪些需要排除：

- `@EqualsAndHashCode.Exclude`  -  用于排除不需要参与比较的字段。
- `@EqualsAndHashCode.Include`  -  开启白名单模式后，用于标明哪些字段需要参与比较。

```java
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@AllArgsConstructor
public class Account {
    @EqualsAndHashCode.Include
    private int id;   //此时只对id字段进行比较
    private String name;
    private int age;
}
```

```java
public static void main(String[] args) {
    Account a1 = new Account(1, "小明", 18);
    Account a2 = new Account(1, "小红", 17);
    System.out.println(a1.equals(a2));   //由于只比较id字段，因此结果为true
}
```

和`@ToString.Include`一样，也可以将其添加到一个方法上，使其结果也参与到比较中。

```java
@EqualsAndHashCode.Include
public int test() {
    return 1;
}
```

不过，`@EqualsAndHashCode.Include`有一个`replaces`属性，它可以用于将当前方法的结果替代目标字段进行比较，比如像这样编写：

```java
@EqualsAndHashCode.Include(replaces = "id")   //此时id字段的比较不会直接比较其本身，而是改为调用此方法获取对应结果进行比较
public int test() {
    return 1;
}
```

这样，在生成的equals方法中，需要比较id字段时，会直接比较两个对象调用`test`方法的结果。

最后来看看它独特的hashCode缓存机制，可以通过设置`cacheStrategy`属性来控制hashCode结果的缓存，这有助于优化程序的性能，默认情况下缓存为NEVER也就是不启用，也可以开启LAZY模式：

```java
@EqualsAndHashCode(cacheStrategy = EqualsAndHashCode.CacheStrategy.LAZY)
@AllArgsConstructor
public class Account {
    private int id;
    private String name;
    private int age;
}
```

此时，生成的hashCode方法在第一次生成结果后，后续将一直使用同样的结果直接返回，避免二次计算：

```java
public int hashCode() {
    if (this.$hashCodeCache != 0) {  //判断是否生成过hashCode，直接使用缓存
        return this.$hashCodeCache;
    } else {
        ...
        this.$hashCodeCache = result;  //设置缓存
        return result;
    }
}
```

这对于那些属性值不会发生变化的实体类来说，是一个很好的选择，但是如果后续使用中字段值可能会发生变化从而影响HashCode的结果，则不建议使用此功能。

### 生成上述注解

很多情况下可能需要在用作数据传递的实体类上将上述注解一并用上，可以直接使用`@Data`注解，它等价于在类上添加这些注解：`@Getter` `@Setter` `@RequiredArgsConstructor` `@ToString` `@EqualsAndHashCode`

```java
@Data   //一个注解直接把get和set方法、构造方法、toString、equals全包了
public class Account {
    private int id;
    private String name;
    private int age;
}
```

当然，如果希望某个类只作为结果，里面的数据不可进行修改，也可以使用`@Data`的只读版本`@Value`，它等价于添加注解：`@Getter` `@FieldDefaults(makeFinal=true, level=AccessLevel.PRIVATE)` `@AllArgsConstructor` `@ToString` `@EqualsAndHashCode`

```java
@Value
public class Account {  //类会自动变成final类型
    int id;   //在`@FieldDefaults`配置下，会自动将类属性变为private和final的状态，这里无需手动编写
    String name;
    int age;
}
```

只不过在Java17之后，这种类完全可以被记录类型平替，因此使用时IDEA会提示直接使用记录类型。

### 简化日志开发

在项目中可能需要使用到各种日志，Lombok为不同的日志框架提供了一个快速注解。

在项目中常常需要将日志对象创建在类中：  

```java
private static Logger log = Logger.getLogger(Main.class.getName());

public static void main(String[] args) {
    log.info("我是日志");
}
```

而有了Lombok之后可以直接在类上添加`@Log`注解：             

```java
@Log
public class Main {
    public static void main(String[] args) {
        log.info("我是日志");  //自动生成一个log对象，可以直接使用
    }
}
```

Lombok 支持多种日志框架的注解，可以根据使用的日志框架选择合适的注解。针对于不同的日志框架，可以使用不同的注解来创建：

- 创造`private static final org.apache.commons.logging.Log log = org.apache.commons.logging.LogFactory.getLog(LogExample.class);`：

  ```java
  @CommonsLog
  ```

- 创造`private static final com.google.common.flogger.FluentLogger log = com.google.common.flogger.FluentLogger.forEnclosingClass();`：

  ```java
  @Flogger
  ```

- 创造`private static final org.jboss.logging.Logger log = org.jboss.logging.Logger.getLogger(LogExample.class);`：     

  ```java
  @JBossLog
  ```

- 创造`private static final java.util.logging.Logger log = java.util.logging.Logger.getLogger(LogExample.class.getName());`：

  ```
  @Log
  ```

- 创造`private static final org.apache.log4j.Logger log = org.apache.log4j.Logger.getLogger(LogExample.class);`：

  ```
  @Log4j
  ```

- 创造`private static final org.apache.logging.log4j.Logger log = org.apache.logging.log4j.LogManager.getLogger(LogExample.class);`：

  ```java
  @Log4j2
  ```

- 创造`private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(LogExample.class);`：

  ```
  @Slf4j
  ```

- 创造`private static final org.slf4j.ext.XLogger log = org.slf4j.ext.XLoggerFactory.getXLogger(LogExample.class);`：

  ```java
  @XSlf4j
  ```

假设有一个类 `ExampleClass`，并且想要使用 SLF4J 作为日志框架，可以这样使用 `@Slf4j` 注解：

```java
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class UserService {
    public void login(){
        log.info("登录验证...");
    }
    // 测试
    public static void main(String[] args) {
        UserService userService = new UserService();
        userService.login();
    }
}
```

在这个例子中，`log` 是一个静态成员变量，表示一个 `org.slf4j.Logger` 对象。Lombok 自动生成了这个日志对象，并且你可以直接使用它来进行日志记录。

选择哪个注解取决于你使用的日志框架：

+ 如果你使用的是 SLF4J，可以选择 `@Slf4j`。
+ 如果你使用的是 Log4j 1.x，可以选择 `@Log4j`。
+ 如果你使用的是 Log4j 2.x，可以选择 `@Log4j2`。

**注意**：确保在使用这些注解之前，已经在项目中引入了相应的日志框架依赖。例如，如果你使用 SLF4J，你需要在项目中添加 SLF4J 的依赖，以及一个具体的日志实现（如 Logback）。对于其他日志框架，也需要相应地添加依赖。

如果使用 Maven 项目，并且选择了 SLF4J + Logback 的组合，可以添加以下依赖：

```xml
<!--Slf4j日志规范-->
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-api</artifactId>
    <version>2.0.16</version>
</dependency>
<!--Slf4j日志实现：logback-->
<dependency>
    <groupId>ch.qos.logback</groupId>
    <artifactId>logback-classic</artifactId>
    <version>1.5.11</version>
</dependency>
```

通过这些日志注解，你可以方便地在类中使用日志记录功能，而无需手动创建日志对象。

执行结果：

![](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/others/202412100015392.png)

### 建造者模式

Lombok可以快速将一个类转换为建造者模式，只需添加`@Builder`注解即可：

```java
@Builder
@ToString
public class Account {
    int id;
    String name;
    int age;
}
```

接着，就可以直接使用Lombok生成的builder来创建对象：           

```java
public static void main(String[] args) {
    Account account = Account.builder()
            .id(1)
            .name("小明")
            .age(18)
            .build();
    System.out.println(account);
}
```

类中生成的Builder内部类，它就是整个建造者模式的核心：

```java
public static class AccountBuilder {
    private int id;
    private String name;
    private int age;

    AccountBuilder() {
    }

    public AccountBuilder id(int id) {
        this.id = id;
        return this;
    }

    public AccountBuilder name(String name) {
        this.name = name;
        return this;
    }

    public AccountBuilder age(int age) {
        this.age = age;
        return this;
    }

    public Account build() {
        return new Account(this.id, this.name, this.age);
    }

    public String toString() {
        return "Account.AccountBuilder(id=" + this.id + ", name=" + this.name + ", age=" + this.age + ")";
    }
}
```

**相关参数**：

```java
public @interface Builder {
    
  	//用于设置默认值
    @Target(FIELD)
    @Retention(SOURCE)
    public @interface Default {}

    //用于获取builder对象的静态方法，默认情况下名称为builder()
    String builderMethodName() default "builder";
    
    //Builder对象最终构建的方法名称，默认情况下名称为build()
    String buildMethodName() default "build";
    
    //内部生成的Builder类名称，默认为 类名称+Builder
    String builderClassName() default "";
    
    //生成一个用于将对象转回Builder的方法，默认情况下不启用
    boolean toBuilder() default false;
    
    //生成的Builder极其相关方法的访问权限级别
    AccessLevel access() default lombok.AccessLevel.PUBLIC;

    //Builder中各个属性设置器的前缀，默认没有
    String setterPrefix() default "";
    
    //用于配合toBuilder方法使用，指明如何获取指定字段的值
    @Target({FIELD, PARAMETER})
    @Retention(SOURCE)
    public @interface ObtainVia {
       //通过其他字段获取
       String field() default "";
       //通过方法获取
       String method() default "";
       //如果上面通过方法获取，这里可以指明是否为静态方法
       boolean isStatic() default false;
    }
}
```

`@Builder.Default`注解用于设定默认值的：

```java
@Builder
@ToString
public class Account {
    int id;
    @Builder.Default   //默认值必须进行初始化
    String name = "小米";
    int age;
}
```

**注意**：如果只是单纯为name字段初始化而不添加`@Builder.Default`注解，那么设置的初始值并不会作为Builder采用的默认值。

`toBuilder`参数开启后，它会为的类生成一个`toBuilder`方法，能够使得一个构建好的实体类回炉重造：

```java
public static void main(String[] args) {
    Account account = Account.builder()
            .id(1)
            .name("小黑")
            .age(18)
            .build();
    Account.AccountBuilder builder = account.toBuilder();
}
```

`@Builder.ObtainVia`配合使用，它用于告诉Lombok将实体类转换为Builder时，指定的字段值应该如何获取，正常情况下，如果不使用它，那么会直接获取当前实体类的对应属性值。也可以修改：

```java
@Builder(toBuilder = true)
@ToString
public class Account {
    int id;
    String name;
    @Builder.ObtainVia(field = "id")   //当从实体类转换回Builder时，age的值从id字段获取
    int age;
}
```

@Singular注解是辅助@Builder注解的：当被建造的对象的属性是一个集合，这个集合属性使用@Singular注解进行标注的话，可以连续调用集合属性对应的方法完成多个元素的添加。如果没有这个注解，则无法连续调用方法完成多个元素的添加：

```java
import lombok.Builder;
import lombok.Data;
import lombok.Singular;

import java.util.List;

@Data
@Builder
// 建造模式
public class Person {
    // 属性
    private final String name;
    private final int age;
    private final String email;
    // Singular翻译为：单数。表示一条一条添加
    @Singular("addPhone")
    private final List<String> phones;

    public static void main(String[] args) {
        Person person = Person.builder()
                .name("jackson")
                .age(20)
                .email("jackson@123.com")
                .addPhone("15222020214")
                .addPhone("14875421424")
                .addPhone("16855241424")
                .build();
        System.out.println(person);
    }
}

```

执行结果：

![](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/others/202412100015848.png)

### 变量相关

很多语言都有`var`关键字，它用于声明一个变量无需手动确定其类型。在Java10之后，同样支持了`var`关键字，它可以自动推断类型，而不需要像之前那样手动指明变量的类型：  

```java
var a = "";   //自动推断变量a的类型为String
```

在Lombok中也提供了对应的注解类型，使得可以像其他语言那样使用：

- `var`：Java10之前可用，Java10之后会出现无法导入的问题，功能完全一样。
- `val`：与var类似，但是它是不可变的，等价于final变量。          

```java
public static void main(String[] args) {
    val a = "Hello World";   //等价于final变量
    System.out.println(a);
}
```

只不过对于Java来说，这种玩法似乎很少有人愿意接受，大家还是更喜欢直接明确类型。

### 资源释放和异常处理

有些时候，可能会用到一些需要释放资源的对象，比如Stream这类，在Java7的时候推出了try-with-resource语法，它大大减少了编写资源释放语句的成本：

```java
public static void main(String[] args) throws IOException {
  	//使用try-with-resource会自动生成close相关操作的代码
    try (FileInputStream in = new FileInputStream("test.exe")){
        byte[] bytes = in.readAllBytes();
        System.out.println(new String(bytes));
    }
}
```

Lombok为提供了一个更加简单方便的注解，只需要在需要释放资源的变量前添加`@Cleanup`即可：

```java
public static void main(String[] args) throws IOException {
  	//添加即可自动释放资源
    @Cleanup FileInputStream in = new FileInputStream("test.py");
    byte[] bytes = in.readAllBytes();
    System.out.println(new String(bytes));
}
```

生成的代码：

```java
public static void main(String[] args) throws IOException {
    FileInputStream in = new FileInputStream("test.py");
    try {
        byte[] bytes = in.readAllBytes();   //自动将后续操作添加到try语句块中
        System.out.println(new String(bytes));
    } finally {   //在finally中对资源进行释放
        if (Collections.singletonList(in).get(0) != null) {
            in.close();
        }
    }
}
```

也可以自定义需要关闭资源的方法：                   

```java
static class Test {
    public void end() {
        System.out.println("关闭资源");
    }
}

public static void main(String[] args) throws IOException {
    @Cleanup("end") Test test = new Test();
}
```

Lombok提供了一个`@SneakyThrows`注解解决使用Steam时处理IOException，不需要手动指定：

```java
@SneakyThrows
public static void main(String[] args) {
    @Cleanup FileInputStream in = new FileInputStream("test.py");
    byte[] bytes = in.readAllBytes();
    System.out.println(new String(bytes));
}
```

实际上在编译后会生成：

```java
public static void main(String[] args) {
    try {   //自动使用trycatch包裹内部，出现问题直接原样抛出
        ...
    } catch (Throwable var7) {
        Throwable $ex = var7;
        throw $ex;
    }
}
```

官方解释这个注解是为了避免 javac 的异常捕获检查，减少手动编写异常抛出的代码。

### 非空判断

由于Java除了基本类型之外其他类型都有可能存在`null`的情况，因此空指针问题一直困扰着所有人，很多情况下不得不在传递参数时进行校验，以确保传入的参数不是`null`才能安全地进行后续操作。最简单的方法就是开始的时候直接对其进行判定：

```java
/***
 * 测试方法
 * @param text 要求不为null的情况下打印
 */
public static void test(String text){
    if(text == null) return;
    System.out.println(text);
}
```

在Java8之后也可以利用Optional将其写的更加优雅：

```java
//利用Optional和Lambda表达式一行搞定
public static void test(String text){
    Optional.ofNullable(text).ifPresent(System.out::println);
}
```

不过，虽然可以像这样进行一次预先判断，但是它依然不够方便，如果需要对所有参数都进行校验，这简直就是地狱，Lombok提供了一种更好的方式进行空判断，只需要在参数的前面添加`@NonNull`则会自动为其生成对应的判空代码：

```java
public static void test(@NonNull String text){
    System.out.println(text);
}
```

生成结果为：

```java
public static void test(@NonNull String text) {
    if (text == null) {
        throw new NullPointerException("text is marked non-null but is null");
    } else {
        System.out.println(text);
    }
}
```

除了方法的形式参数外，`@NonNull`也可以添加到局部变量上 ，但是只会有一个警告效果。

### 锁处理

可能需要为方法加锁，这可以防止多线程环境下导致的一些并发问题：                   

```java
private static int a = 0;  //如果多个线程同时为a做自增，由于底层指令并不是原子的，可能会出现问题

@SneakyThrows
public static void main(String[] args) {
    for (int i = 0; i < 10; i++) {   //创建10个线程同时为a做自增操作
        new Thread(Main::counter).start();
    }
    Thread.sleep(3000);
    System.out.println(a);
}

public static synchronized void counter() {  //添加synchronized来保证同一时间只有一个线程运行
    for (int i = 0; i < 1000000; i++) a++;
}
```

只不过直接在方法上添加`synchronized`关键字，会导致不同的方法使用同一把锁：                        

```java
public synchronized void test1(){ }
public synchronized void test2(){ }
```

这里`test1`和`test2`都是类的成员方法，并且添加了`synchronized`，默认情况下它们会采用当前对象作为锁，但是有些时候可能并不希望这两个方法是使用同一把锁，让它们的执行互不影响。这个时候可能会采用：                       

```java
final Object lock1 = new Object(); 
final Object lock2 = new Object();

public void test(){
    synchronized (lock1) {
        
    }
}

public void test2(){
    synchronized (lock2) {

    }
}
```

此时为这两个方法分别分配一个锁对象，然后采用同步代码块的方式进行加锁，这样就可以解决上面的问题了，但是这样写着实在是太麻烦了，不仅要写一大堆`synchronized`代码块，还要建很多锁对象。Lombok提供了一个`@Synchronized`注解，它可以自动生成同步代码块：                        

```java
private final Object lock1 = new Object();

@Synchronized("lock1")  //直接指定作为锁的变量名称
public void test() {  }
```

它会自动生成对应的同步代码块：                 

```java
public void test() {
    synchronized(this.lock1) {
        ;
    }
}
```

如果不填写锁名称，那么它会按照方法性质添加一把默认的锁：

- 成员方法：统一使用一个名称为`$lock`的锁作为对象锁。
- 静态方法：统一使用一个名称为`$LOCK`的锁作为类锁。

除了`@Synchronized`之外，Lombok也为提供了一个JUC版本，它采用ReentrantLock作为锁，注解名称为`@Locked`：                 

```java
@Locked
public void test() {

}
```

它采用ReentrantLock，同样在进入方法前加锁，执行完成后解锁：                  

```java
public class Main {
  	//和上面一样，直接添加注解会根据方法使用统一的锁
    private final Lock $lock = new ReentrantLock();

    ...

    public void test() {
        this.$lock.lock();
        this.$lock.unlock();
    }
}
```

它还可以进一步细分为读写锁，可以单独为某个方法添加读锁或是写锁。

## 试验性功能

Lombok提供的试验性功能，不保证在后续的版本中会作为正式功能推出，有可能删除。

### 链式调用

虽然Lombok已经提供了`@Getter`和 `@Setter` 注解快速生成对应的get和set方法，但是Lombok提供了 `@Accessors`注解，用于配置Lombok生成和查找getters和setters。

链式设置属性，set方法直接返回当前对象：

```java
public static void main(String[] args){
    Account account = new Account();
    account.setId(1).setAge(18).setName("小明");
}
```

只需要添加 `@Accessors`注解：

```java
@Accessors(chain = true)
@ToString
@Setter
public class Account {
    int id;
    String name;
    int age;
}
```

注意，开启`fluent`后默认也会启用`chain`属性。

接着来看`makeFinal`属性，它用于将所有生成的方法设置为final，防止子类进行修改：

```java
public final void setId(int id) {
    this.id = id;
}
```

最后还有一个`prefix`属性，这个功能比较特殊，它可以在你有一些特殊命名的情况下使用，比如：

```java
public class Account {
    int userId;   //在命名时，有些人总爱添加点前缀
    String userName;
    int userAge;
}
```

这种情况下生成出来的Getter也会按照这样进行命名，非常不好用：

```java
public void setUserId(int userId) {
    this.userId = userId;
}
```

通过对`@Accessors`添加`prefix`属性，可以指示在生成Getter或Setter时去掉前缀，比如：

```java
@Accessors(prefix = "user")
@ToString
@Setter
public class Account {
    int userId;
    String userName;
    int userAge;
}
```

这样生成的方法就会直接去掉对应的前缀了。只不过，一旦设置了前缀，那么所有不是以此前缀开头的字段，会直接不生成对应的方法。如果各位小伙伴觉得`@Accessors`加到类上直接作用于全部字段，控制得不是很灵活，也可以将其单独放到某个字段上进行控制：

```java
@ToString
@Setter
public class Account {
    int userId;
    @Accessors(prefix = "user")
    String userName;
    int userAge;
}
```

### 添加新方法到现有类

使用Lombok添加一个`@ExtensionMethod`注解，它可以实现扩展函数功能效果，比如现在要给String添加一个扩展的方法，使其根据空格进行划分，变成字符串数组，创建一个新的类来编写：

```java
public class ExtensionObject {
    //这个类用于编写额外的扩展方法
}
```

扩展方法是一种特殊的**静态方法**，它的参数和返回值是有要求的，比如现在想要为String类型添加一个扩展方法，就好像是String所具有的成员方法那样，实际上就是对一个String对象进行操作，所以说，编写对应的静态方法，也需要一个对应类型的参数才可以：

```java
public static void splitByBlank(String text) {
    
}
```

接着，这个方法调用完后会生成一个字符串数组，所以说需要将其返回值改成需要的类型，然后就可以编写对应的处理逻辑了：

```java
public static String[] splitByBlank(String text) {
    return text.split("\\s+");
}
```

好了，现在这个方法已经完全具备成为一个扩展方法的资格了，它实际上就是一个参数完全对应使用方式的静态方法：

```java
@ExtensionMethod({ ExtensionObject.class })   //首先在需要使用这种扩展方法的类上添加编写扩展方法所在类的名字
public class Main {
```

接着就可以直接使用了：

```java
@ExtensionMethod({ ExtensionObject.class })
public class Main {
    public static void main(String[] args) {
        String[] words = "Hello World!".splitByBlank();   //就好像真的是String的方法那样
        System.out.println(Arrays.toString(words));
    }
}
```

扩展方法不仅能为其添加新的方法，甚至还可以直接覆盖已存在的方法：

```java
public static int length(String text) {
    return 0;
}
```

当添加方法后，它刚好对应的就是String类的length方法，这会导致原本的方法被覆盖：

```java
public static void main(String[] args) {
    System.out.println("Hello World!".length());   //结果为0
}
```

为了避免这种情况，要么不要去编写这种会覆盖原方法的方法，要么就需要在接口上添加`suppressBaseMethods`参数来手动阻止覆盖行为：

```java
@ExtensionMethod(value = { ExtensionObject.class }, suppressBaseMethods = false)
```

利用这种特性，实际上JDK中提供的很多工具类都可以作为扩展方法进行使用，比如Arrays就提供了大量工具类，完全可以利用它来实现各种高级操作：

```java
@ExtensionMethod({ Arrays.class })
public class Main {
    public static void main(String[] args) {
        int[] arr = { 1, 3, 5, 6, 7 };
        System.out.println(arr.toString());   //正常情况下数组是没有重写toString的，打印出来就是依托答辩，但是现在使用扩展方法将Arrays的全部引入，就不一样了
    }
}
```

注意，如果编写的扩展方法的参数列表超过1个了，那么后续的参数会作为扩展方法的参数：

```java
public static int length(String text, int x) {  //这里x是多出来的参数
    return 0 + x;
}
```

实际调用就会变成这样：

```java
public static void main(String[] args) {
    System.out.println("Hello World!".length(1));
}
```

官方还有一个非常有趣的例子，结合泛型，还可以编写一个更加牛逼的判空操作：

```java
public static <T> T or(T target, T other) {
    return target == null ? other : target;
}
```

下面这种情况用着是真舒服：

```java
//打印传入字符串长度，如果为null也要打印0
public static void test(String str) {
    int length = str.or("").length();
    System.out.println("传入的字符串长度为: " + length);
}
```

### 默认字段修饰符

默认字段修饰可以为类中字段快速生成对应的修饰符，避免手动编写，只需要添加 `@FieldDefaults`即可：

```java
@FieldDefaults(level= AccessLevel.PRIVATE)
public class Account {
    int id;
    String name;
    int age;
}
```

生成的代码中所有字段就自动变成private：

```java
public class Account {
    private int id;
    private String name;
    private int age;
}
```

### 委托属性

代理类需要保证客户端使用的透明性，也就是说操作起来需要与原本的真实对象相同，比如访问Github只需要输入网址即可访问，而添加代理之后，也是使用同样的方式去访问Github，所以操作起来是一样的。包括Spring框架其实也是依靠代理模式去实现的AOP记录日志等。

```java
public class UtilImplProxy implements Util {   //代理类
    Util util = new UtilImpl();

    @Override
    public int test(String text) {
        return util.test(text);
    }
}

public class UtilImpl implements Util {   //真正的实现类
    @Override
    public int test(String text) {
        return text.length();
    }
}

public interface Util {   //接口定义
    int test(String text);
}
```

无论是真正实现的类还是代理类，都实现了`Util`接口，但是代理类完全没有靠自己去实现，而是内部维护了一个真正的实现类，依靠这个实现类去完成接口定义的方法，就像是替身攻击一样。

Lombok提供了一个`@Delegate`注解，可以自动为代理类生成委托相关的代码：

```java
public class UtilImplProxy implements Util {
    @Delegate   //添加此注解后，会自动根据接口或类定义生成对应的方法，完成委托
    Util util = new UtilImpl();
}

public class UtilImpl implements Util {
    @Override
    public int test(String text) {
        return text.length();
    }
}

public interface Util {
    int test(String text);
}
```

如果直接在某个类中使用`@Delegate`它也会直接生成指定类型所有方法到类中：

```java
public class Account {
    @Delegate  //此时会为当前类生成所有ArrayList的List接口实现方法委托
    List<String> list = new ArrayList<>();
}
```

类甚至可以直接作为接口的实现，变成彻底的代理类：

```java
public class Account implements List<String> {
    @Delegate
    List<String> list = new ArrayList<>();
}
```

注解的参数在生成委托方法时可能并不需要将目标所有的方法全部都实现，这时可以手动指定哪些方法需要实现：

```java
@Target({ElementType.FIELD, ElementType.METHOD})
@Retention(RetentionPolicy.SOURCE)
public @interface Delegate {
    //只有给定类中的方法会被委托
    Class<?>[] types() default {};
    
    //给定类中的方法都不会被委托
    Class<?>[] excludes() default {};
}
```

例：

```java
public class DelegationExample {
  private interface SimpleCollection {   //此时接口只定义了add和remove
    boolean add(String item);
    boolean remove(Object item);
  }
  
  @Delegate(types=SimpleCollection.class)  //即使委托一个ArrayList也只会实现指定接口定义的两个方法
  private final Collection<String> collection = new ArrayList<String>();
}
```

### 工具类

Lombok 提供了一个注解用于快速构建工具类。

在类上添加 `@UtilityClass`，Lombok将自动生成一个私有构造函数来禁止构造，并且所有方法都会自动变成静态方法：

```java
@UtilityClass
public class UtilityClassExample {
  private final int CONSTANT = 5;

  public int addSomething(int in) {
    return in + CONSTANT;
  }
}
```

生成的结果为：

```java
public final class UtilityClassExample {
  private static final int CONSTANT = 5;

  private UtilityClassExample() {
    throw new java.lang.UnsupportedOperationException("This is a utility class and cannot be instantiated");
  }

  public static int addSomething(int in) {
    return in + CONSTANT;
  }
}
```

### 标准异常

在项目中常常需要创建各种各样的自定义类型，便于快速定位问题原因。

异常实际上很多情况下都是固定形式：

```java
public class CustomException extends RuntimeException {
    public CustomException(String message) {   //往往都要实现父类的一些构造方法
        super(message);
    }
}
```

Lombok为了简化这些复杂的过程，提供了@StandardException注解，此注解会在编译时自动生成对应的构造方法实现：

```java
@StandardException
public class CustomException extends Exception {
}
```

生成的结果：

```java
public class CustomException extends Exception {
    public CustomException() {
        this((String)null, (Throwable)null);
    }

    public CustomException(String message) {
        this(message, (Throwable)null);
    }

    public CustomException(Throwable cause) {
        this(cause != null ? cause.getMessage() : null, cause);
    }

    public CustomException(String message, Throwable cause) {
        super(message);
        if (cause != null) {
            super.initCause(cause);
        }

    }
}
```

### 创建不可变对象

该注解会给所有属性添加`final`，给所有属性提供`getter`方法，自动生成`toString`、`hashCode`、`equals`

**通过这个注解可以创建不可变对象。**

```java
import lombok.Value;

@Value
public class Customer {
    Long id;
    String name;
    String password;
}
```

测试程序：

```java
public class CustomerTest {
    public static void main(String[] args) {
        Customer c1 = new Customer(1L, "jackson", "123");
        System.out.println(c1);
        System.out.println(c1.getId());
        System.out.println(c1.getName());
        System.out.println(c1.getPassword());
        System.out.println(c1.hashCode());
        Customer c2 = new Customer(1L, "jackson", "123");
        System.out.println(c1.equals(c2));
    }
}
```

运行结果：

![](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/others/202412100015460.png)

查看字节码发现@Value注解的作用只会生成：全参数构造方法、getter方法、hashCode、equals、toString方法(没有setter方法)。

