# Docker 安装

安装所需最小配置：内存至少4G

https://docs.gitlab.cn/jh/install/docker.html

1. 添加容器：

   ```shell
   docker run --detach \
     --hostname 192.168.44.103 \
     --publish 443:443 --publish 80:80 \
     --name gitlab \
     --restart always \
     --volume $GITLAB_HOME/config:/etc/gitlab:Z \
     --volume $GITLAB_HOME/logs:/var/log/gitlab:Z \
     --volume $GITLAB_HOME/data:/var/opt/gitlab:Z \
     --shm-size 256m \
     registry.gitlab.cn/omnibus/gitlab-jh:latest
   ```

2. 启动容器：

   ```shell
   docker start gitlab
   ```

3. 查看已存在的容器：

   ```shell
   docker ps -a
   ```

4. 进入容器：

   ```shell
   docker exec -it  gitlab /bin/bash
   ```

5. 访问：http://192.168.44.101

**说明**：当首次运行出现502错误的时候排查两个原因

1. 虚拟机内存至少需要4g
2. 稍微再等等刷新一下可能就好了

