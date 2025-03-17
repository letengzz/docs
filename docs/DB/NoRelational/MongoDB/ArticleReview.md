# 文章评论

## 需求分析

需要实现以下功能：

1. 基本增删改查API
2. 根据文章id查询评论
3. 评论点赞

## 表结构分析

数据库：articledb

| 专栏文章评论   | comment        |                  |                           |
| -------------- | -------------- | ---------------- | ------------------------- |
| 字段名称       | 字段含义       | 字段类型         | 备注                      |
| _id            | ID             | ObjectId或String | Mongo的主键的字段         |
| articleid      | 文章ID         | String           |                           |
| content        | 评论内容       | String           |                           |
| userid         | 评论人ID       | String           |                           |
| nickname       | 评论人昵称     | String           |                           |
| createdatetime | 评论的日期时间 | Date             |                           |
| likenum        | 点赞数         | Int32            |                           |
| replynum       | 回复数         | Int32            |                           |
| state          | 状态           | String           | 0：不可见；1：可见        |
| parentid       | 上级ID         | String           | 如果为0表示文章的顶级评论 |

## 技术选型

### mongodb-driver

mongodb-driver是mongo官方推出的java连接mongoDB的驱动包，相当于JDBC驱动。

官方驱动说明和下载：[http://mongodb.github.io/mongo-java-driver/](http://mongodb.github.io/mongo-java-driver/)

官方驱动示例文档：[http://mongodb.github.io/mongo-java-driver/3.8/driver/getting-started/quick-start/](http://mongodb.github.io/mongo-java-driver/3.8/driver/getting-started/quick-start/)

### SpringDataMongoDB

SpringData家族成员之一，用于操作MongoDB的持久层框架，封装了底层的mongodb-driver。

官网主页： [https://projects.spring.io/spring-data-mongodb/](https://projects.spring.io/spring-data-mongodb/)

项目的吐槽服务就采用SpringDataMongoDB框架。

## 文章微服务模块搭建

1. 搭建项目工程article，pom.xml引入依赖：

   ```xml
   <?xml version="1.0 " encoding="UTF-8 "?>
   <project xmlns="http://maven.apache.org/POM/4.0.0 "
   xmlns:xsi="http://www.w 3 .org/2001 /XMLSchema-instance"
   xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0 .xsd">
   <modelVersion> 4.0.0 </modelVersion>
   
       <parent>
           <groupId>org.springframework.boot</groupId>
           <artifactId>spring-boot-starter-parent</artifactId>
           <version> 2.1.6 .RELEASE</version>
           <relativePath/> <!-- lookup parent from repository -->
       </parent>
       <groupId>cn.itcast</groupId>
       <artifactId>article</artifactId>
       <version> 1.0 - SNAPSHOT</version>
       
       <dependencies>
           <dependency>
               <groupId>org.springframework.boot</groupId>
               <artifactId>spring-boot-starter-test</artifactId>
               <scope>test</scope>
           </dependency>
           
           <dependency>
               <groupId>org.springframework.boot</groupId>
               <artifactId>spring-boot-starter-data-mongodb</artifactId>
           </dependency>
       </dependencies>
   </project>
   ```

2. 创建application.yml

   ```yaml
   spring:
       #数据源配置	
       data:
           mongodb:
               # 主机地址
               host: 192.168.40.141
               # 数据库
               database: articledb
               # 默认端口是27017
               port: 27017
               #也可以使用uri连接
               #uri: mongodb://192.168.40.134:27017/articledb
   ```

3. 创建启动类

4. 启动项目，看是否能正常启动，控制台没有错误。

## 文章评论实体类的编写

创建实体类 创建package包 po用于存放实体类，创建实体类Comment：

```java
/**
*文章评论实体类
*/
//把一个java类声明为mongodb的文档，可以通过collection参数指定这个类对应的文档。
//@Document(collection="mongodb 对应 collection 名")
//若未加@Document ，该 bean save 到 mongo 的 comment collection
//若添加@Document ，则 save 到 comment collection
@Document(collection="comment")//可以省略，如果省略，则默认使用类名小写映射集合
//复合索引
//@CompoundIndex( def = "{'userid': 1 ,'nickname': -1 }")
public class Comment implements Serializable {
	//主键标识，该属性的值会自动对应mongodb的主键字段"_id"，如果该属性名就叫“id”,则该注解可以省略，否则必须写
    @Id
    private String id;//主键
    //该属性对应mongodb的字段的名字，如果一致，则无需该注解
    @Field("content")
    private String content;//吐槽内容
    private Date publishtime;//发布日期
    //添加了一个单字段的索引
    @Indexed
    private String userid;//发布人ID
    private String nickname;//昵称
    private LocalDateTime createdatetime;//评论的日期时间
    private Integer likenum;//点赞数
    private Integer replynum;//回复数
    private String state;//状态
    private String parentid;//上级ID
    private String articleid;
    //getter and setter.....
}
```

**说明**：索引可以大大提升查询效率，一般在查询字段上添加索引，索引的添加可以通过Mongo的命令来添加，也可以在Java的实体类中通过注解添加。

1. 单字段索引注解`@Indexed`
   org.springframework.data.mongodb.core.index.Indexed.class
   声明该字段需要索引，建索引可以大大的提高查询效率。
   Mongo命令参考：

   ```java
   db.comment.createIndex({"userid":1})
   ```

2. 复合索引注解`[@CompoundIndex ](/CompoundIndex )`
   org.springframework.data.mongodb.core.index.CompoundIndex.class
   复合索引的声明，建复合索引可以有效地提高多字段的查询效率。
   Mongo命令参考：

   ```java
   db.comment.createIndex({"userid":1,"nickname":-1})
   ```

## 文章评论的基本增删改查

1. 创建数据访问接口 创建dao包，包下创建接口CommentRepository

   ```java
   import org.springframework.data.mongodb.repository.MongoRepository;
   //评论的持久层接口
   public interface CommentRepository extends MongoRepository<Comment,String> {
   }
   ```

2. 创建业务逻辑类 创建service包，包下创建类CommentService

   ```java
   //评论的业务层
   @Service
   public class CommentService {
       //注入dao
       @Autowired
       private CommentRepository commentRepository;
       /**
       * 保存一个评论
       * @param comment
       */
       public void saveComment(Comment comment){
           //如果需要自定义主键，可以在这里指定主键；如果不指定主键，MongoDB会自动生成主键
           //设置一些默认初始值。。。
           //调用dao
           commentRepository.save(comment);
       }
       /**
       * 更新评论
       * @param comment
       */
       public void updateComment(Comment comment){
           //调用dao
           commentRepository.save(comment);
       }
       /**
       * 根据id删除评论
       * @param id
       */
       public void deleteCommentById(String id){
           //调用dao
           commentRepository.deleteById(id);
       }
       /**
       * 查询所有评论
       * @return
       */
       public List<Comment> findCommentList(){
           //调用dao
           return commentRepository.findAll();
       }
       /**
       * 根据id查询评论
       * @param id
       * @return
       */
       public Comment findCommentById(String id){
           //调用dao
           return commentRepository.findById(id).get();
       }
   }
   ```

3. 新建Junit测试类，测试保存和查询所有：CommentServiceTest

   ```java
   //SpringBoot的Junit集成测试
   @RunWith(SpringRunner.class)
   //SpringBoot的测试环境初始化，参数：启动类
   @SpringBootTest(classes = ArticleApplication.class)
   public class CommentServiceTest {
       //注入Service
       @Autowired
       private CommentService commentService;
       /**
       * 保存一个评论
       */
       @Test
       public void testSaveComment(){
           Comment comment=new Comment();
           comment.setArticleid("100000");
           comment.setContent("测试添加的数据");
           comment.setCreatedatetime(LocalDateTime.now());
           comment.setUserid("1003");
           comment.setNickname("凯撒大帝");
           comment.setState("1");
           comment.setLikenum(0);
           comment.setReplynum(0);
           commentService.saveComment(comment);
       }
       /**
       * 查询所有数据
       */
       @Test
       public void testFindAll(){
           List<Comment> list = commentService.findCommentList();
           System.out.println(list);
       }
       /**
       * 测试根据id查询
       */
       @Test
       public void testFindCommentById(){
           Comment comment = commentService.findCommentById("5d6a27b81b8d374798cf0b41");
           System.out.println(comment);
       }
   }
   ```

## 根据上级ID查询文章评论的分页列表

1. CommentRepository新增方法定义：

   ```java
   //根据父id，查询子评论的分页列表
   Page<Comment> findByParentid(String parentid, Pageable pageable);
   ```

2. CommentService新增方法：

   ```java
   /**
   * 根据父id查询分页列表
   * @param parentid
   * @param page
   * @param size
   * @return
   */
   public Page<Comment> findCommentListPageByParentid(String parentid,int page ,int size){
       return commentRepository.findByParentid(parentid, PageRequest.of(page-1,size));
   }
   ```

3. junit测试用例：CommentServiceTest

   ```java
   /**
   * 测试根据父id查询子评论的分页列表
   */
   @Test
   public void testFindCommentListPageByParentid(){
       Page<Comment> pageResponse = commentService.findCommentListPageByParentid("3", 1, 2);
       System.out.println("----总记录数："+pageResponse.getTotalElements());
       System.out.println("----当前页数据："+pageResponse.getContent());
   }
   ```

4. 执行测试：使用compass快速插入一条测试数据，数据的内容是对3 号评论内容进行评论。

## MongoTemplate实现评论点赞

看一下以下点赞的临时示例代码： CommentService 新增updateThumbup方法

```java
/**
* 点赞-效率低
* @param id
*/
public void updateCommentThumbupToIncrementingOld(String id){
    Comment comment = CommentRepository.findById(id).get();
    comment.setLikenum(comment.getLikenum()+1);
    CommentRepository.save(comment);
}
```

以上方法虽然实现起来比较简单，但是执行效率并不高，因为只需要将点赞数加1 就可以了，没必要查询出所有字段修改后再更新所有字段。(蝴蝶效应)
可以使用MongoTemplate类来实现对某列的操作：

1. 修改CommentService

   ```java
   //注入MongoTemplate
   @Autowired
   private MongoTemplate mongoTemplate;
   
   /**
   * 点赞数+1
   * @param id
   */
   public void updateCommentLikenum(String id){
       //查询对象
       Query query=Query.query(Criteria.where("_id").is(id));
       //更新对象
       Update update=new Update();
       //局部更新，相当于$set
       // update.set(key,value)
       //递增$inc
       // update.inc("likenum",1);
       update.inc("likenum");
       //参数1：查询对象
       //参数2：更新对象
       //参数3：集合的名字或实体类的类型Comment.class
       mongoTemplate.updateFirst(query,update,"comment");
   }
   ```

2. 测试用例：CommentServiceTest

   ```java
   /**
   * 点赞数+1
   */
   @Test
   public void testUpdateCommentLikenum(){
       //对3号文档的点赞数+1
       commentService.updateCommentLikenum("3");
   }
   ```

执行测试用例后，发现点赞数+1了
