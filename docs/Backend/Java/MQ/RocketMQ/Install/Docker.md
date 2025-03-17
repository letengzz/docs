# Docker 安装

下载RockerMQ需要的镜像：

- ```shell
  docker pull rocketmqinc/rocketmq
  ```

- ```shell
  docker pull styletang/rocketmq-console-ng
  ```


启动NameServer服务：

- 创建NameServer数据存储路径

  ```shell
  mkdir -p /home/rocketmq/data/namesrv/logs /home/rocketmq/data/namesrv/store
  ```

- 启动NameServer容器

  ```shell
  docker run -d --name rmqnamesrv -p 9876:9876 -v /home/rocketmq/data/namesrv/logs:/root/logs -v /home/rocketmq/data/namesrv/store:/root/store -e "MAX_POSSIBLE_HEAP=100000000" rocketmqinc/rocketmq sh mqnamesrv
  ```

启动Broker服务：

- 创建Broker数据存储路径

  ```shell
  mkdir -p /home/rocketmq/data/broker/logs /home/rocketmq/data/broker/store 
  ```


- 创建conf配置文件目录

  ```shell
  mkdir /home/rocketmq/conf
  ```

- 在配置文件目录下创建broker.conf配置文件：

  ```shell
  # 所属集群名称，如果节点较多可以配置多个
  brokerClusterName = DefaultCluster
  #broker名称，master和slave使用相同的名称，表明他们的主从关系
  brokerName = broker-a
  #0表示Master，大于0表示不同的slave
  brokerId = 0
  #表示几点做消息删除动作，默认是凌晨4点
  deleteWhen = 04
  #在磁盘上保留消息的时长，单位是小时
  fileReservedTime = 48
  #有三个值：SYNC_MASTER，ASYNC_MASTER，SLAVE；同步和异步表示Master和Slave之间同步数据的机制；
  brokerRole = ASYNC_MASTER
  #刷盘策略，取值为：ASYNC_FLUSH，SYNC_FLUSH表示同步刷盘和异步刷盘；SYNC_FLUSH消息写入磁盘后才返回成功状态，ASYNC_FLUSH不需要；
  flushDiskType = ASYNC_FLUSH
  # 设置broker节点所在服务器的ip地址
  brokerIP1 = IP地址
  ```

- 启动Broker容器：

  ```shell
  docker run -d  --name rmqbroker --link rmqnamesrv:namesrv -p 10911:10911 -p 10909:10909 -v  /home/rocketmq/data/broker/logs:/root/logs -v /home/rocketmq/data/broker/store:/root/store -v /home/rocketmq/conf/broker.conf:/opt/rocketmq-4.4.0/conf/broker.conf --privileged=true -e "NAMESRV_ADDR=namesrv:9876" -e "MAX_POSSIBLE_HEAP=200000000" rocketmqinc/rocketmq sh mqbroker -c /opt/rocketmq-4.4.0/conf/broker.conf
  ```

启动控制台：

```shell
docker run -d --name rmqadmin -e "JAVA_OPTS=-Drocketmq.namesrv.addr=你的外网地址:9876 \
-Dcom.rocketmq.sendMessageWithVIPChannel=false \
-Duser.timezone='Asia/Shanghai'" -v /etc/localtime:/etc/localtime -p 9999:8080 styletang/rocketmq-console-ng
```

正常启动后的docker ps：

![](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/java/mq/202412100955426.png)

访问控制台：http://你的服务器外网ip:9999/

![](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/java/mq/202412100955940.png)
