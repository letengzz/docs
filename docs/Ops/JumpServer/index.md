# JumpServer

堡垒机 (Bastion Host)，也称为跳板机 (Jump Server)，是指在计算机网络中，作为一个中介的安全服务器，它位于内外网之间，主要用于集中管理和审计远程访问企业内部重要系统的操作。堡垒机可以对所管控的所有类型的资产，实现事前授权、事中监察、事后审计，满足等保合规要求。

堡垒机可以防止内部服务器直接暴露在公网中的风险，成为防止外部攻击和内部滥用的重要安全防线。

**未添加堡垒机**：

![图片](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/640.png)

**使用堡垒**：

![图片](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/640-17401423940063.png)

**JumpServer 功能**：

- **访问控制**：通过堡垒机，管理员可以使用强身份验证方式 (如多因素认证)来访问内部资源。只有经过授权的用户才能通过堡垒机连接到目标服务器或设备。
- **审计与监控**：堡垒机能够记录所有的访问活动，包括命令执行和数据传输等。这使得管理员可以追踪到谁、何时、做了什么操作，提高了系统的可审计性和安全性。
- **防护外部攻击**：堡垒机通常会部署在内部网络和外部网络之间的DMZ区域 (非军事化区)，对外暴露的端口和服务相对较少，因此减少了潜在的攻击面。
- **集中管理**：通过堡垒机，管理员可以集中管理对多个服务器或设备的访问，简化权限控制和用户管理。
- **隔离与安全性提升**：堡垒机通常会配置严格的网络隔离，限制外部连接只能通过特定协议 (如SSH、RDP等)，并且只能访问有限的资源，确保内部网络的安全性。

## 环境搭建

JumpServer 的安装 (离线安装) 和配置并不复杂，但却能显著提升企业的运维安全性和操作规范化程度。通过合理的权限划分和全面的审计功能。

环境要求：服务器一台（必须，安装 Centos7以上版本系统)

![图片](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/640-17401435407479.png)

- **Ubuntu**：

  ```shell
  -- 安装依赖环境
  apt-get update
  apt-get install -y wget curl tar gettext iptables
  ```

- **CentOS**：

  ```shell
  -- 安装依赖环境
  yum update
  yum install -y wget curl tar gettext iptables
  ```

- **离线安装**：

  下载地址：https://cdn0-download-offline-installer.fit2cloud.com/jumpserver/jumpserver-ce-v4.5.0-x86_64.tar.gz

  ```shell
  -- 安装Jumpserver
  cd /opt
  tar -xf jumpserver-ce-v4.4.1-x86_64.tar.gz
  cd jumpserver-ce-v4.4.1-x86_64
  # 安装./jmsctl.sh install
  # 启动./jmsctl.sh start
  ```

安装成功：

```
>>> 安装完成了
1. 可以使用如下命令启动, 然后访问
 cd /opt/soft/jumpserver/jumpserver-offline-installer-v3.10.9-amd64./jmsctl.sh start 
2. 其它一些管理命令
 ./jmsctl.sh stop
 ./jmsctl.sh restart
 ./jmsctl.sh backup
 ./jmsctl.sh upgrade
 更多还有一些命令, 你可以 ./jmsctl.sh --help 来了解 
3. Web 访问
 http://192.168.61.202:80
 默认用户: admin  默认密码: admin 
4. SSH/SFTP 访问
 ssh -p2222 admin@192.168.61.202
 sftp -P2222 admin@192.168.61.202
```

## 浏览器访问

http://192.168.61.202:80 

输入用户和默认的密码：

- username：admin 

- password：admin
