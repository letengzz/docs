# 将web应用部署到阿里云

## 购买阿里云服务器

### 注册阿里云账号

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222311470.png)

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222311187.png)

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222311326.png)

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222313190.png)

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222313256.png)

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222313473.png)

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222313225.png)

![无标题.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222314669.png)

到此，阿里云账号注册成功，并且进行了个人的实名认证。可以开始使用阿里云了。

### 购买阿里云服务器

进入阿里云首页：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222314865.png)

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222314412.png)

可以选择免费试用，也可以立即购买，根据自己情况而定，这里采用免费试用：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222315759.png)

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222315175.png)

创建的实例是这样的：需要记住这个公网IP。

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222315298.png)

管理员：root，新建的实例需要设置密码：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222317191.png)

## 使用xshell/xftp连接阿里云服务器 

默认情况下阿里云服务器的“密码认证”是没有开启的。需要通过修改相关配置，来开启“密码认证”。

在阿里云服务器实例中找到如下图的VNC连接：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222318619.png)

然后输入用户名root和密码。登录成功之后找到该文件：`/etc/ssh/sshd_config`

使用vim编辑sshd_config文件中的“passwordAuthcation”，将no修改为yes。

重启sshd服务：

```shell
service sshd restart
```

此时采用xshell/xftp就可以使用密码的方式连接阿里云服务器了。

## 使用宝塔面板安装软件及部署项目 

在centos操作系统上安装宝塔面板（这个安装脚本可以在宝塔面板官网获取）：

```shell
yum install -y wget && wget -O install.sh https://download.bt.cn/install/install_6.0.sh && sh install.sh ed8484bec
```

宝塔面板安装成功后，会有如下信息：

```shell
外网面板地址: https://39.105.26.215:10710/718e1e35
内网面板地址: https://172.25.179.225:10710/718e1e35
username: uck3itew
password: 3268d738
```

通过以上宝塔面板地址得知使用的端口是10710，所以需要在阿里云服务器上开放该端口（配置安全组）：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222319453.png)

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222319390.png)

访问宝塔面板：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222319814.png)



输入用户名和密码登录宝塔面板：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222319823.png)

注册宝塔账号并绑定：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222320149.png)



宝塔Linux面板的左侧菜单中找：软件商店

搜索tomcat，安装tomcat9，会自动关联安装JDK8。

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222320419.png)

JDK8也有了：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222320170.png)

搜索mysql，安装mysql：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222320690.png)

注意：阿里云服务器有两个防火墙，一个是阿里云服务器自带的防火墙，在安全组中进行放行设置。阿里云服务器中安装的centos操作系统也会有一个防火墙，要访问tomcat服务器的话，centos操作系统中的防火墙也要放行8080端口：这个需要在宝塔中进行配置：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222321525.png)

这样tomcat服务器就可以访问了：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222321132.png)

mysql数据库的3306端口同样需要在宝塔中放行。这样mysql数据库才可以连接：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222321101.png)

使用navicat for mysql连接mysql数据库，报错信息如下：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222322970.png)

解决办法：

1. 第一步：root身份登录mysql
2. 第二步：`use mysql;`
3. 第三步：`update user set host='%' where user='root';`
4. 第四部：`flush privileges;`

然后使用navicat for mysql就可以连接mysql数据库了：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222322532.png)

