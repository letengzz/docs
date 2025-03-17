# Vagrant

Vagrant是一个比较流行的虚拟机管理软件，使用Vagrant 可以用命令直接从云上下载虚拟机的镜像，然后进行创建和管理等，vagrant集成了主流的虚拟机管理工具vmvare 和 virtualbox，默认使用virtualbox

vagrant 的精髓在一个 Vagrantfile 里面，和 docker 的 Dockerfile 功能上一样。只需要把需要安装部署的步骤写在 Vagrantfile 里面，便可以实现轻松部署。vagrant 还支持把当前系统做成一个.box 后缀命名的镜像，类似 docker 的 image，可轻松实现环境的移植。

vagrant 可以把配置好的环境打包成一个box，分享给其他人直接使用。在容器流行之前，Vagrant 就是用来编排虚机和自动部署开发环境的，有了 Docker/Kubernetes 之后，直接用容器来编排应用确实更简单。但是还有一些工作，例如容器平台自身的安装，多节点集群的部署测试等，更方便用虚拟机解决。

**官方网站**：https://www.vagrantup.com/

![image-20240131202926317](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202403091822713.png)

## 安装使用

### 安装Vagrant

下载链接：https://www.vagrantup.com/downloads

**注意**：Vagrant没有图形界面，所以安装后也没有桌面快捷方式。 

### 安装Virtual Box

VirtualBox 是一个免费开源的虚拟机，相对 VMware 来说更加小巧

下载链接：https://www.virtualbox.org/wiki/Downloads

### 下载box

可以在 http://www.vagrantbox.es/ 这里下载更多不同系统甚至是已经配置好环境直接可以用的box，虽然可以直接在Vagrant直接使用网址，由Vagrant自动下载安装，但是考虑到网络情况，还是建议自行先下载好。

## 常用命令

### 查看镜像

命令：

```bash
vagrant box list 
```

### 删除镜像

命令：

```bash
vagrant box remove centos
```

### 添加镜像

命令：

```bash
vagrant box add centos ./vagrant-centos-7.2.box
```

### 初始化镜像

命令：

```bash
vagrant init centos
```

### 启动虚拟机

启动全部虚拟机

- 命令： 

  ```bash
  vagrant up
  ```

- 启动名字为test1的虚拟机节点

  - 命令：

    ```bash
     vagrant up test1
    ```

### 关机

命令：

```bash
vagrant halt
```

### 打包

命令：

```bash
vagrant package --output hjc-dev.box
```

### 销毁虚拟机

命令：

```bash
vagrant destroy
```

## 修改配置

### bootstrap.sh

```sh
#!/usr/bin/env bash

# The output of all these installation steps is noisy. With this utility
# the progress report is nice and concise.

echo "Update /etc/hosts"
cat > /etc/hosts <<EOF
127.0.0.1       localhost

192.168.56.181 test1
192.168.56.182 test2
EOF

echo "Disable iptables"
setenforce 0 >/dev/null 2>&1 && iptables -F

### Set env ###
echo "export LC_ALL=en_US.UTF-8"  >>  /etc/profile
cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
```

### Vagrantfile

```bash
# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  (1..2).each do |i|
    config.vm.define vm_name = "test#{i}"  do |config|
        config.vm.provider "virtualbox" do |v|
            v.customize ["modifyvm", :id, "--name", vm_name]
	    v.customize ["modifyvm", :id, "--memory", "8192"]
            v.customize ["modifyvm", :id, "--cpus", "2"]
        end
        config.vm.box = "centos"
        config.vm.hostname =vm_name
        config.ssh.username = "root"
        config.ssh.password = "vagrant"
							#		config.ssh.shell = "powershell"
							#config.ssh.shell = "bash -l"
        config.vm.network :private_network, ip: "192.168.56.18#{i}"
	config.vm.provision :shell, :path => "bootstrap.sh"
    end
  end
end
```

## 使用流程

### 添加流程

新建文件夹存放box --> 执行添加镜像命令 --> 将两个配置文件放入文件夹并根据需求修改  --> 执行启动虚拟机命令 

### 打包分发流程

执行关机命令 --> 执行打包命令 -->  执行添加镜像命令将打包的文件放入vagrant

### 连接虚拟机

使用连接工具，通过SSH连接，账号密码名参照Vagrantfile中配置

