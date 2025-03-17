# 单机部署

## Windows系统中的安装启动

1. 下载安装包
   MongoDB 提供了可用于32 位和64 位系统的预编译二进制包，你可以从MongoDB官网下载安装，MongoDB 预编译二进制包下载地址：https://www.mongodb.com/download-center#community 

   提示：版本的选择：MongoDB的版本命名规范如：x.y.z；

   - y为奇数时表示当前版本为开发版，如：1.5.2、4.1.13；

   - y为偶数时表示当前版本为稳定版，如：1.6.3、4.0.10；

   - z是修正版本号，数字越大越好。

   详情：http://docs.mongodb.org/manual/release-notes/#release-version-numbers 

2. 解压安装启动，将压缩包解压到一个目录中。
   在解压目录中，手动建立一个目录用于存放数据文件，如**data/db**

   1. 方式一：命令行参数方式启动服务：在bin目录中打开命令行提示符，输入如下命令：

      ```shell
      mongod --dbpath=..\data\db
      ```

      在启动信息中可以看到，mongoDB的默认端口是27017 ，如果想改变默认的启动端口，可以通过`--port`来指定端口。
      为了方便每次启动，可以将安装目录的bin目录设置到环境变量的path中，bin目录下是一些常用命令，比如mongod启动服务用的，mongo客户端连接服务用的。

   2. 方式二：配置文件方式启动服务：在解压目录中新建config文件夹，该文件夹中新建配置文件mongod.cfg，内如参考：

      ```shell
      storage:
      	# The directory where the mongod instance stores its data.Default Value is "\data\db" on Windows.
         dbPath: E:\develop_tool\mongodb-win32-x86_64-windows-6.0.6\data
      ```

      详细配置项内容可以参考官方文档：[https://docs.mongodb.com/manual/reference/configuration-options/](https://docs.mongodb.com/manual/reference/configuration-options/)
      注意：

      1. 配置文件中如果使用双引号，比如路径地址，自动会将双引号的内容转义。如果不转义，则会报错：

         ```shell
         error-parsing-yaml-config-file-yaml-cpp-error-at-line-3 - column-15 - unknown-escape-character-d
         ```

         解决：

         - 对\换成/或\
         - 如果路径中没有空格，则无需加引号。

      2. 配置文件中不能以Tab分割字段

         解决：将其转换成空格。

         启动方式：

         ```shell
         mongod - f ../config/mongod.cfg
         或
         mongod --config ../config/mongod.cfg
         ```

mongosh 连接mongodb

```shell
mongosh "mongodb://localhost:27017"
```

## Shell连接(mongo命令)

在命令提示符输入以下shell命令即可完成登陆

```shell
mongo
或
mongo --host= 127.0.0.1 --port= 27017
```

查看已经有的数据库

```shell
>show databases
```

退出mongodb

```shell
exit
```

更多参数可以通过帮助查看：

```shell
mongo --help
```

提示：MongoDB javascript shell是一个基于javascript的解释器，故是支持js程序的。

## Compass-图形化界面客户端

到MongoDB官网下载MongoDB Compass，地址：[https://www.mongodb.com/download-center/v2/compass?initial=true](https://www.mongodb.com/download-center/v2/compass?initial=true)

如果是下载安装版，则按照步骤安装；如果是下载加压缩版，直接解压，执行里面的MongoDBCompassCommunity.exe文件即可。
在打开的界面中，输入主机地址、端口等相关信息，点击连接

## Linux系统中的安装启动和连接

目标：在Linux中部署一个单机的MongoDB，作为生产环境下使用。
提示：和Windows下操作差不多。
步骤如下：

1. 先到官网下载压缩包mongod-linux-x 86 _ 64 -4.0.10 .tgz。

2. 上传压缩包到Linux中，解压到当前目录：

   ```shell
   tar - xvf mongodb-linux-x 86 _ 64 -4.0.10 .tgz
   ```

3. 移动解压后的文件夹到指定的目录中：

```shell
mv mongodb-linux-x 86 _ 64 -4.0.10 /usr/local/mongodb
```

4. 新建几个目录，分别用来存储数据和日志：

   ```shell
   mkdir - p /mongodb/single/data/db
   # 日志存储目录
   mkdir - p /mongodb/single/log
   ```

5. 新建并修改配置文件：

   ```shell
   vi /mongodb/single/mongod.conf
   ```

   配置文件的内容：

   ```yaml
   systemLog:
       # MongoDB发送所有日志输出的目标指定为文件
       ## The path of the log file to which mongod or mongos should send all diagnostic logging information
       destination: file
       # mongod或mongos应向其发送所有诊断日志记录信息的日志文件的路径
       path: "/mongodb/single/log/mongod.log"
       # 当mongos或mongod实例重新启动时，mongos或mongod会将新条目附加到现有日志文件的末尾。
       logAppend: true
   storage:
       # mongod实例存储其数据的目录。storage.dbPath设置仅适用于mongod。
       ## The directory where the mongod instance stores its data.Default Value is "/data/db".
       dbPath: "/mongodb/single/data/db"
       journal:
       # 启用或禁用持久性日志以确保数据文件保持有效和可恢复。
       enabled: true
   processManagement:
       # 启用在后台运行mongos或mongod进程的守护进程模式。
       fork: true
   net:
       # 服务实例绑定的IP，默认是localhost
       bindIp: localhost,192.168.0.2
       # bindIp
       # 绑定的端口，默认是27017
       port: 27017
   ```

6. 启动MongoDB服务：

   ```shell
   [root@bobohost single]# /usr/local/mongodb/bin/mongod -f /mongodb/single/mongod.conf
   about to fork child process, waiting until server is ready for connections.
   forked process: 90384
   child process started successfully, parent exiting
   ```

   注意：如果启动后不是successfully，则是启动失败了。原因基本上就是配置文件有问题。
   通过进程来查看服务是否启动了：

   ```shell
   [root@bobohost single]# ps -ef |grep mongod
   root 90384 1 0 8月26 ? 00:02:13 /usr/local/mongdb/bin/mongod -f /mongodb/single/mongod.conf
   ```

7. 分别使用mongo命令和compass工具来连接测试。
   提示：如果远程连接不上，需要配置防火墙放行，或直接关闭linux防火墙

   ```shell
   #查看防火墙状态
   systemctl status firewalld
   #临时关闭防火墙
   systemctl stop firewalld
   #开机禁止启动防火墙
   systemctl disable firewalld
   ```

8. 停止关闭服务：停止服务的方式有两种：快速关闭和标准关闭

   - 快速关闭方法（快速，简单，数据可能会出错）

     目标：通过系统的kill命令直接杀死进程：杀完要检查一下，避免有的没有杀掉。

     ```shell
     #通过进程编号关闭节点
     kill -2 54410
     ```

     如果一旦是因为数据损坏，则需要进行如下操作：

     1. 删除lock文件：`rm -f /mongodb/single/data/db/*.lock`
     2. 修复数据：`/usr/local/mongdb/bin/mongod --repair --dbpath=/mongodb/single/data/db`

   - 标准的关闭方法 (数据不容易出错，但麻烦)：

     目标：通过mongo客户端中的shutdownServer命令来关闭服务

     主要的操作步骤参考：

     ```shell
     //客户端登录服务，注意，这里通过localhost登录，如果需要远程登录，必须先登录认证才行。
     mongo --port 27017
     //#切换到admin库
     use admin
     //关闭服务
     db.shutdownServer()
     ```

