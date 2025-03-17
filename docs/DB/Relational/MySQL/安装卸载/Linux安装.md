# Linux 安装

## Linux 安装检查

如果用rpm安装, 检查一下RPM PACKAGE：

```shell
rpm -qa | grep -i mysql  # -i 忽略大小写
```

检查mysql service：

```shell
systemctl status mysqld.service
```

如果存在mysql-libs的旧版本包，显示如下：

![image-20240930154134966](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202409301541423.png)

如果不存在mysql-lib的版本，显示如下：

![image-20240930154152619](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202409301541347.png) 

## 检查MySQL依赖

### 检查/tmp临时目录权限

由于mysql安装过程中，会通过mysql用户在/tmp目录下新建tmp_db文件，所以请给/tmp较大的权限。执行：

```shell
chmod -R 777 /tmp
```

### 安装前，检查依赖

```shell
rpm -qa | grep libaio
```

如果存在libaio包如下：

![image-20240930204313897](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202409302043394.png) 

```shell
rpm -qa|grep net-tools
```

如果存在net-tools包如下：

![image-20240930204340615](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202409302043077.png) 

## 安装包下载

1. 下载地址：https://www.mysql.com

2. 打开官网，点击DOWNLOADS，点击 `MySQL Community(GPL) Downloads`

   ![image-20240724092759446](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202409301551568.png)

3. 点击 MySQL Community Server

   ![image-20240724092815967](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202409301553859.png)

4. 在General Availability(GA) Releases中选择适合的版本

5. Linux系统下安装MySQL的几种方式：

   <table><tbody><tr><td><p>安装方式</p></td><td><p>特点</p></td></tr><tr><td><p>rpm</p></td><td><p>安装简单，灵活性差，无法灵活选择版本、升级</p></td></tr><tr><td><p>rpm repository</p></td><td><p>安装包极小，版本安装简单灵活，升级方便，需要联网安装</p></td></tr><tr><td><p>通用二进制包</p></td><td><p>安装比较复杂，灵活性高，平台通用性好</p></td></tr><tr><td><p>源码包</p></td><td><p>安装最复杂，时间长，参数设置灵活，性能好</p></td></tr></tbody></table>

## RPM 安装

这里不能直接选择CentOS 7系统的版本，所以选择与之对应的 Red Hat Enterprise Linux

下载链接：[https://downloads.mysql.com/archives/community/](https://downloads.mysql.com/archives/community/)

直接点Download下载RPM Bundle全量包。包括了所有下面的组件。不需要一个一个下载了。

![image-20240724093324163](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202409302044314.png)

下载的tar包，用压缩工具打开

![image-20240724093333835](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202409302044462.png)

解压后rpm安装包 （红框为抽取出来的安装包）

![image-20240724093344421](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202409302044029.png)

依次执行命令：

- rpm 是Redhat Package Manage缩写，通过RPM的管理，用户可以把源代码包装成以rpm为扩展名的文件形式，易于安装。
- -i , --install 安装软件包
- -v , --verbose 提供更多的详细信息输出
- -h , --hash 软件包安装的时候列出哈希标记 (和 -v 一起使用效果更好)，展示进度条

```shell
rpm -ivh mysql-community-common-8.0.25-1.el7.x86_64.rpm
rpm -ivh mysql-community-client-plugins-8.0.25-1.el7.x86_64.rpm
rpm -ivh mysql-community-libs-8.0.25-1.el7.x86_64.rpm
rpm -ivh mysql-community-client-8.0.25-1.el7.x86_64.rpm
rpm -ivh mysql-community-server-8.0.25-1.el7.x86_64.rpm
```

注意：

- 如在检查工作时，没有检查mysql依赖环境在安装mysql-community-server会报错

安装过程中可能的报错信息：

![image-20240724093800392](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202412011759004.png)

解决办法：一个命令：`yum remove mysql-libs` 解决，清除之前安装过的依赖即可

```shell
yum remove mysql-libs
```

安装成功后，执行`mysql --version`查看版本。

### 查看MySQL版本

如果成功表示安装mysql成功。类似java -version如果打出版本等信息

```shell
mysql --version
# 或
mysqladmin --version
```

执行如下命令，查看是否安装成功。需要增加 -i 不用去区分大小写，否则搜索不到。

```shell
rpm -qa | grep -i mysql
```

### 服务初始化

设置`/etc/my.cnf`

```shell
[mysqld]
# 设置大小写不敏感
lower_case_table_names=1
```

为了保证数据库目录与文件的所有者为 mysql 登录用户，如果是以 root 身份运行mysql 服务，需要执行下面的命令初始化： `--initialize` 选项默认以“安全”模式来初始化，则会为 root 用户生成一个密码并将 该密码标记为过期 ，登录后需要设置一个新的密码。生成的 临时密码 会往日志中记录一份。

```shell
mysqld --initialize --user=mysql
```

查看密码：`cat /var/log/mysqld.log` root@localhost: 后面就是初始化的密码

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202412011759307.png)

####  启动MySQL，查看状态

```shell
#加不加.service后缀都可以
启动：systemctl start mysqld.service
关闭：systemctl stop mysqld.service
重启：systemctl restart mysqld.service
查看状态：systemctl status mysqld.service
```

> mysqld 这个可执行文件就代表着 MySQL 服务器程序，运行这个可执行文件就可以直接启动一个 服务器进程。

![image-20240724094048272](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202412011759361.png)

查看进程：

```shell
ps -ef | grep -i mysql
```

![image-20240724094106390](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202412011759436.png)

查看MySQL服务是否自启动

```shell
systemctl list-unit-files | grep mysqld.service
```

![image-20240724094131796](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202412011759288.png)

默认是enabled。 

如不是enabled可以运行如下命令设置自启动

```shell
systemctl enable mysqld.service
```

如果希望不进行自启动，运行如下命令设置

```shell
systemctl disable mysqld.service
```

### 修改密码

进入系统 ： 

```shell
mysql -u root -p
```

修改密码：

 ```sql
ALTER USER 'root'@'localhost' IDENTIFIED BY 'new_password' 
```

### 调整密码安全策略

若是出现密码安全策略，可以进行修改

- 修改密码长度：

  ```shell
  set global validate_password.length=1;
  ```

- 修改密码等级：

  ```shell
  set global validate_password.policy=0;
  ```

### 设置远程登录

先在防火墙开放端口 
放行端口：

```shell
firewall-cmd --permanent --zone=public --add-port=3306/tcp 
```

最后刷新：

```shell
firewall-cmd --reload 
```

查看已开放端口：

```shell
firewall-cmd --list-ports --permanent
```

修改mysql数据库下user表的host属性：

 ```sql
use mysql; 
update user set host = '%' where user ='root';
select Host,User from user; 
```

### 使配置立即生效

```sql
flush privileges;
```

### 添加新用户

 ```sql
CREATE USER 用户名 [IDENTIFIED BY '密码'][,用户名 [IDENTIFIED BY '密码']];
```

- 用户名表示新用户的账户，由“用户User”和“主机名Host”构成

- create user 语句可以同时创建多个用户

- 不指定host时默认为‘%’

  示例：创建用户pnz@%密码为abc123，创建用户zhangsan@%密码为abc123

 ```sql
create user 'pnz'@'%' identified by 'abc123', 'zhangsan' identified by 'abc123';
```

### 授权

#### 直接授权

 ```sql
GRANT 权限1,权限2,…权限n ON 数据库名称.表名称 TO 用户名@用户地址 [IDENTIFIED BY '密码']; 
```

如果没有该用户，系统会直接创建一个用户
例如：给zhangsan授予db_poster_collection这个库下所有表的增删改查的权限

```shell
GRANT SELECT,INSERT,DELETE,UPDATE ON db_poster_collection.* TO 'zhangsan'@'%';
```

### Linux重置Root密码

**设置MySQL无密码启动**：

修改**/etc/my.cnf**配置文件

```shell
vim /etc/my.cnf
# 在[mysqld]下添加skip-grant-tables
[mysqld]
...
skip-grant-tables
...


# 设置完成后，重启MySQL服务
systemctl restart mysqld
```

进入MySQL，将mysql.user表的Root账号的密码忘记

```sql
# 不用输入密码 直接回车两次
mysql -uroot -p
# 选择mysql数据库
use mysql;
# 忘记root密码
update user set authentication_string='' where user='root';
```

退出控制台，注释skip-grant-tables

```shell
vim /etc/my.cnf

[mysqld]
...
# skip-grant-tables
...

# 修改配置文件记得重启服务
systemctl restart mysqld
```

重新进入MySQL控制台

```shell
# 密码被清空，直接回车两次，进入控制台
mysql -uroot -p

# 设置root密码  注意 user和host
alter user 'root'@'%' identified by 'abc123';

# 让密码生效
FLUSH PRIVILEGES;
```

### Linux重置MySQL

先停止mysql服务：

```shell
systemctl stop mysqld
```

备份数据目录：

```shell
mv /var/lib/mysql /var/lib/mysql_backup
```

初始化mysql，以及重启服务：

```shell
mysqld --initialize --user=mysql
查看初始密码
cat /var/log/mysqld.log

systemctl start mysqld
```

登录mysql，已经修改root密码

### MySQL修改数据目录

先停止mysql服务：

```shell
systemctl stop mysqld
```

迁移数据目录到自己想要设置的目录：

```shell
sudo mkdir -p /home/mysql/data
sudo mkdir -p /home/mysql/logs

rsync -av /var/lib/mysql/ /home/mysql/data/
```

修改my.cnf配置：

```shell
[mysqld]
datadir = /home/mysql/data
log-error = /home/mysql/logs/error.log
socket=/home/mysql/data/mysql.sock

[client]
socket=/home/mysql/data/mysql.sock
```

更改数据目录权限：

```shell
sudo chown -R mysql:mysql /home/mysql/data
sudo chown -R mysql:mysql /home/mysql/logs
```

更新SELinux配置：

```shell
sudo semanage fcontext -a -t mysqld_db_t "/home/mysql/data(/.*)?"
sudo semanage fcontext -a -t mysqld_log_t "/home/mysql/logs(/.*)?"
sudo restorecon -Rv /home/mysql/data
sudo restorecon -Rv /home/mysql/logs
```

重启服务：

```shell
systemctl start mysqld && systemctl status mysqld
```

