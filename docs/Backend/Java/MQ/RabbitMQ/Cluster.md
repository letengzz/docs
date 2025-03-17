# RabbitMQ 集群搭建

搭建一个集群，让RabbitMQ之间进行数据复制（镜像模式）

可能会用到的一些命令：

```bash
sudo rabbitmqctl stop_app
sudo rabbitmqctl join_cluster rabbit@ubuntu-server
sudo rabbitmqctl start_app
```

实现复制即可。
