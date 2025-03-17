# Docker 安装

1. 拉取镜像：

   ```shell
   docker pull redis
   ```

2. 启动：

   ```shell
   docker run --name=myredis -d -p 6379:6379  --restart=always redis --requirepass 123123
   ```

