# Oracle 安装

## Windows 安装

安装文件：

- winx64_12102_database_1of2.zip
- winx64_12102_database_2of2.zip

将安装文件解压到同一个目录：

![image-20241114162850020](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202411141628729.png)

右键setup.exe，以管理员身份运行。INS-30131 提示 请使用 `setup.exe -ignorePrereq -J"-Doracle.install.db.validate.supportedOSCheck=false"`

![image-20241114163008664](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202411141630465.png)

因为没有勾选“我希望通过My Oracle Support 接收安全更新”提示的消息，点‘是’下一步

![image-20241114163110898](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202411141631802.png)

选择安装：**为了方便这里选择第一个**

- 选择第一个会安装数据库软件并创建实例
- 选择第二个只会安装数据库软件，创建实例需要在安装完成后手动创建
- 选择第三个是本地已经安装数据库软件，需要升级

![image-20241114163245332](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202411141632961.png)

默认，下一步：

![image-20241114163306365](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202412011810443.png)

根据需要选择用户：

![image-20241114163816457](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202411141638690.png)

Oracle基目录：安装目录
字符集：UTF8
全局数据库名：指的就是数据库实例名或SID名。
管理员口令：这指的是SYSDBA用户的密码。请牢记。
取消“创建为容器数据库”。注：如果勾选此项，则创建用户时需要加c##前缀

![image-20241114164223956](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202411141642801.png)

因为创建的SYSDBA密码过于简单，选择'是'，下一步进行检查，等待，检查确认没有问题，点击"安装"

![image-20241114164338837](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202411141643656.png)

创建完成：

![image-20241114170519291](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202411141705918.png)

关闭：

![image-20241114170545164](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202411141705900.png)

![image-20241114170650675](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202411141706947.png)

使用SQL Plus登录：

```sql
 sqlplus / as sysdba
```

