# MyBatisX

MyBatis-Plus为我们提供了强大的mapper和service模板，能够大大的提高开发效率 但是在真正开发过程中，MyBatis-Plus并不能为我们解决所有问题，例如一些复杂的SQL，多表联查，我们就需要自己去编写代码和SQL语句，可以使用MyBatisX插件MyBatisX一款基于 IDEA 的快速开发插件，为效率而生。

- MyBatisX插件用法：https://baomidou.com/pages/ba5b24/

## 安装MyBatisX插件

![1](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092232717.gif)

点击即可自动定位到mapper-xml接口：

![image-20230226123111230](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092233710.png)

点击即可自动定位到mapper接口：

![image-20230226123222520](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092233427.png)

## 快速生成代码

**添加数据源**(高版本需要设置时区)：

![image-20230226123327840](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092233771.png)

![image-20230226123352316](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092233063.png)

**勾选所要操作的库**：

![image-20230226123437180](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092233065.png)

**选择所需要操作的表**：

![image-20230226123529314](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092233622.png)

**生成选项**：

![image-20230226124403768](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092233283.png)

![image-20230226124506709](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092233774.png)

![image-20230226124720257](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092233877.png)

## 快速生成CRUD

只需要写方法名 mybatisX即可根据方法名快速的生成相对应的sql语句

```java
public interface ProductMapper extends BaseMapper<Product> {
    //添加insert，查询select 修改update 删除delete
    //ALT+ENTER生成

    /**
     * insertSelective如果实现添加功能的时候，传输的实体类对象为null 不会存在与添加字段的。
     * @param product l
     * @return l
     */
    int insertSelective(Product product);

    /**
     * delByIdAndName根据id和name删除
     * @param id l
     * @param name l
     * @return l
     */
    int delByIdAndName(@Param("id") Long id, @Param("name") String name);
    
    /**
     * 修改姓名和价格通过id
     * @param name l
     * @param price l
     * @param id l
     * @return l
     */
    int updateNameAndPriceById(@Param("name") String name, @Param("price") Integer price, @Param("id") Long id);

    //查询姓名通过id 区间为id
    int updateNameByIdBetweenAndId(@Param("name") String name, @Param("beginId") Long beginId, @Param("endId") Long endId, @Param("id") Long id);

    //查询所有通过id id为降序
    List<Product> selectByIdOrderByIdDesc(@Param("id") Long id);
}
```

