# Redis

- 

**拓展**：

- 缓存使用

## docker下安装redis

①拉去镜像  docker pull redis:latest
②在宿主机上新建目录  /opt/app/redis
③将一份redis.conf文件模板拷贝进/opt/app/redis目录下
④修改redis.conf文件

- 开启验证 requirepass abc123
- 允许redis外地连接 将 bind 127.0.0.1 注释
- 设置redis后台启动 将daemonize设置为no
  在启动容器的时候会使用参数 -d 会与 daemonize yes 冲突
- 取消保护模式 将protected-mode设置为no
  ⑤使用redis:latest镜像创建容器 

```
docker run -p 6379:6379 --name=myredis --privileged=true \
-v /opt/app/redis/redis.conf:/etc/redis/redis.conf \
-v /opt/app/redis/data:/data \
-d redis:latest redis-server /etc/redis/redis.conf
```

⑥使用redis-cli测试  docker exec -it myredis redis-cli

值得注意的是：当关闭宿主机防火墙时，使用docker run -p映射端口会出现失败的情况 错误提示的关键字有iptables

#### Redis集群

新建6个docker容器redis实例

```java
docker run -d --name redis-node-1 --net host --privileged=true -v /mydata/redis/share/redis-node-1:/data redis:7.0.0 --cluster-enabled yes --appendonly yes --port 6381
docker run -d --name redis-node-2 --net host --privileged=true -v /mydata/redis/share/redis-node-2:/data redis:7.0.0 --cluster-enabled yes --appendonly yes --port 6382
docker run -d --name redis-node-3 --net host --privileged=true -v /mydata/redis/share/redis-node-3:/data redis:7.0.0 --cluster-enabled yes --appendonly yes --port 6383
docker run -d --name redis-node-4 --net host --privileged=true -v /mydata/redis/share/redis-node-4:/data redis:7.0.0 --cluster-enabled yes --appendonly yes --port 6384
docker run -d --name redis-node-5 --net host --privileged=true -v /mydata/redis/share/redis-node-5:/data redis:7.0.0 --cluster-enabled yes --appendonly yes --port 6385
docker run -d --name redis-node-6 --net host --privileged=true -v /mydata/redis/share/redis-node-6:/data redis:7.0.0 --cluster-enabled yes --appendonly yes --port 6386
```

进入redis-node-1并为6台容器实例构建集群关系
`docker exec -it redis-node-1 /bin/bash`
`redis-cli --cluster create --cluster-replicas 1 192.168.10.190:6381 192.168.10.190:6382 192.168.10.190:6383 192.168.10.190:6384 192.168.10.190:6385 192.168.10.190:6386`
进入6381查看集群状态
redis-cli -p 6381 -c
cluster info
cluster nodes

#### install redis

```
docker pull redis:7.0.12
docker run \
-p 6379:6379 --restart=always  --name redis7 --privileged=true \
-v /develop_env/redis/redis.conf:/etc/redis/redis.conf \
-v /develop_env/redis/data:/data \
-d redis:7.0.12 redis-server /etc/redis/redis.conf
```

### Windows

#### install redis

```
docker pull redis:7.0.12
docker run -p 6379:6379 --name redis7 --privileged=true -v D:\software\redis\redis.conf:/etc/redis/redis.conf -v D:\software\redis\data:/data -d redis:7.0.12 redis-server /etc/redis/redis.conf
```

