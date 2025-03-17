## docker下安装mysql

①下载mysql镜像  docker pull mysql:8.0.33
②启动容器实例

```
docker run -d -p 3306:3306 --privileged=true \
-v /opt/app/mysql/log:/var/log/mysql \
-v /opt/app/mysql/data:/var/lib/mysql \
-v /opt/app/mysql/conf:/etc/mysql/conf.d \
--restart=always \
-e MYSQL_ROOT_PASSWORD=abc123 --name mysql8 mysql:8.0.33 --lower-case-table-names=1

# 如果要设置表名小写，需要在 mysql:8.0.33 添加 --lower-case-table-names=1
```

③在/opt/app/mysql/conf 下创建my.cnf 并写入

```
[client]
default_character_set=utf8
[mysqld]
character_set_server=utf8
lower_case_table_names=1 # 设置表名小写
```

④进入容器实例测试

注意：**当容器不小心删掉，只要容器卷的数据文件夹没有被删除，重新运行一个容器，数据仍然存在。**

#### MySQL主从

**新建主服务器容器实例3307**

```java
docker run -d -p 3307:3306 --name mysql-master --privileged=true \
-v /mydata/mysql-master/log:/var/log/mysql \
-v /mydata/mysql-master/data:/var/lib/mysql \
-v /mydata/mysql-master/conf:/etc/mysql/conf.d \
-e MYSQL_ROOT_PASSWORD=abc123  mysql:8.0.33
```

**在/mysql-master/conf目录下新建my.cnf**

```java
[mysqld]
## 设置server_id，同一局域网中需要唯一
server_id=101
## 指定不需要同步的数据库名称
binlog-ignore-db=mysql  
## 开启二进制日志功能
log-bin=mall-mysql-bin  
## 设置二进制日志使用内存大小（事务）
binlog_cache_size=1M
## 设置使用的二进制日志格式（mixed,statement,row）
binlog_format=mixed  
## 二进制日志过期清理时间。默认值为0，表示不自动清理。
expire_logs_days=7  
## 跳过主从复制中遇到的所有错误或指定类型的错误，避免slave端复制中断。
## 如：1062错误是指一些主键重复，1032错误是因为主从数据库数据不一致
slave_skip_errors=1062
```

添加my.cnf后重启容器
**进入mysql-master容器实例**
`docker exec -it mysql-master /bin/bash`
`mysql -uroot -pabc123`
**在master容器实例中的mysql中创建同步用户**
`create user 'slave'@'%' identified by 'abc123'`
`grant replication slave,replication client on _._to 'slave'@'%';`
**新建从服务器容器实例3308**

```java
docker run -d -p 3308:3306 --name mysql-slave --privileged=true \
-v /mydata/mysql-slave/log:/var/log/mysql \
-v /mydata/mysql-slave/data:/var/lib/mysql \
-v /mydata/mysql-slave/conf:/etc/mysql/conf.d \
-e MYSQL_ROOT_PASSWORD=abc123  mysql:8.0.33
```

**在/mydata/mysqll-slave/conf目录下新建my.cnf**

```java
[mysqld]
## 设置server_id，同一局域网中需要唯一
server_id=102
## 指定不需要同步的数据库名称
binlog-ignore-db=mysql  
## 开启二进制日志功能，以备Slave作为其它数据库实例的Master时使用
log-bin=mall-mysql-slave1-bin  
## 设置二进制日志使用内存大小（事务）
binlog_cache_size=1M  
## 设置使用的二进制日志格式（mixed,statement,row）
binlog_format=mixed  
## 二进制日志过期清理时间。默认值为0，表示不自动清理。
expire_logs_days=7  
## 跳过主从复制中遇到的所有错误或指定类型的错误，避免slave端复制中断。
## 如：1062错误是指一些主键重复，1032错误是因为主从数据库数据不一致
slave_skip_errors=1062  
## relay_log配置中继日志
relay_log=mall-mysql-relay-bin  
## log_slave_updates表示slave将复制事件写进自己的二进制日志
log_slave_updates=1  
## slave设置为只读（具有super权限的用户除外）
read_only=1
```

添加my.cnf后重启容器
**在主机中查看主从同步状态**
`show master status;`

**进去mysql-slave容器**
`docker exec -it mysql-slave /bin/bash`
`mysql -uroot -pabc123`
**在从数据中配置主从同步**
:::info
change master to master_host='192.168.10.190', master_user='slave', master_password='abc123', master_port=3307, master_log_file='mall-mysql-bin.000004', master_log_pos=471, master_connect_retry=30;

参数说明：
master_host：主数据库的IP地址；
master_port：主数据库的运行端口；
master_user：在主数据库创建的用于同步数据的用户账号；
master_password：在主数据库创建的用于同步数据的用户密码；
master_log_file：指定从数据库要复制数据的日志文件，通过查看主数据的状态，获取File参数；
master_log_pos：指定从数据库从哪个位置开始复制数据，通过查看主数据的状态，获取Position参数；
master_connect_retry：连接失败重试的时间间隔，单位为秒。
:::
**在从机中查看主从同步状态**
`show slave status \G;`
**在从机中开启主从同步**
`start slave;`
**再次查看同步状态**
至此，主从同步已完成。

#### install mysql

```
docker pull mysql:8.0.33
docker run -d -p 3306:3306 --privileged=true --restart=always \
-v /develop_env/mysql/log:/var/log/mysql \
-v /develop_env/mysql/data:/var/lib/mysql \
-v /develop_env/mysql/conf:/etc/mysql/conf.d \
-e MYSQL_ROOT_PASSWORD=abc123 --name mysql8 mysql:8.0.33 --lower-case-table-names=1
```

如果要设置表明小写，需要先在conf下创建文件夹，my.cnf写入

```
[mysqld]
lower_case_table_names=1 # 设置表名小写
```

