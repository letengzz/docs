# Docker 安装

**说明**：基于开源协议下载安装，单机版可能会有数据丢失的情况。

搜索MinIO镜像：

```dockerfile
docker search minio
```

拉取MinIO镜像：

```dockerfile
docker pull minio/minio
```

启动MinIO容器：

```dockerfile
docker run -p 9000:9000 -p 9001:9001 -d --restart=always -e "MINIO_ROOT_USER=admin" -e "MINIO_ROOT_PASSWORD=admin123456" -v /home/data:/data -v /home/config:/root/.minio  --name=docker_minio minio/minio server /data --console-address ":9001"
```

查看已安装镜像：

```dockerfile
docker images
```

删除镜像：

```dockerfile
docker rmi minio/minio
```

浏览器访问：http://IP:9001/minio/login，登录使用自定义账户密码admin/admin123456登录

**注意**：文件上传时，需要调整一下linux 服务器的时间与windows 时间一致！

> 第一步：安装ntp服务
> yum -y install ntp
> 第二步：开启开机启动服务
> systemctl enable ntpd
> 第三步：启动服务
> systemctl start ntpd
> 第四步：更改时区
> timedatectl set-timezone Asia/Shanghai
> 第五步：启用ntp同步
> timedatectl set-ntp yes
> 第六步：同步时间
> ntpq -p

