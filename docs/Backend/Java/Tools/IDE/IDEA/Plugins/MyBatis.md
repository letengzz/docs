# MyBatis逆向生成插件

MyBatis逆向工程：使用IDEA插件可以根据数据库表的设计逆向生成MyBatis的Mapper接口 与 MapperXML文件。

## 安装插件`free mybatis tools`

![](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092231980.png)

## 在IDEA中配置数据源

![](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092231830.png)

## 创建数据库，创建表，准备数据

![](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092232953.png)

## 使用脚手架创建SpringBoot项目

![](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092231055.png)

添加依赖：mybatis依赖、mysql驱动、Lombok库：

![](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092231442.png)

## 生成MyBatis代码放到SpringBoot项目中

在表上右键：Mybatis-Generator

![](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092231922.png)

![](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092231312.png)

代码生成后，如果在IDEA中看不到，这样做 (重新从硬盘加载)：

![](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092231934.png)

**<font style="color:#DF2A3F;">注意：生成的</font>**`VipMapper`**<font style="color:#DF2A3F;">接口上自动添加了</font>**`@Repository`**<font style="color:#DF2A3F;">注解，这个注解没用，删除即可。</font>**
