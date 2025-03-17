# Linux 软件安装

CentOS安装软件的方式主要包括：

- 源码安装

- rpm安装 (二进制安装)

- yum安装 (在线安装)

## 源码安装 

源码包是指C等语言所开发的源代码文件的一个压缩包，通常压缩为.tar.gz或.tar.bz2。源码通常需要编译器将其编译成二进制文件，如gcc编译器。

优点：

1. 开源，有能力者可以修改源代码；特别是要对某个软件，从头开发时，就特别需要对源码进行解读分析
2. 可自由选择所需功能
3. 卸载方便，直接删除目录即可
4. 对于学习者而言，源码安装更有利于学习者发现软件环境和工具之间所依赖的关系。

缺点：

1. 安装麻烦，需要自行解决工具之间的依赖关系。
2. 某些软件编译过程耗费的时间较长，我曾发生过编译两三天的情况。尤其是在不合适的硬件上，安装大型软件时，最容易折磨人，甚至要考虑系统与硬件的兼容性、配置等问题，系统本身有缺陷，那就更要命了，有时需先修补系统bug【主要是功能不齐全，残缺情况居多】
3. 大型软件编译，对新手来说较为麻烦，所报错误往往超过所能解决的范围，排错过程有可能会把系统给搞崩溃。

## rpm安装

RPM包：由Red Hat公司开发的包管理系统，软件的安装、升级、卸载都非常简单和方便。目前很多Linux发行版都在使用这种包管理机制，包括CentOS、Redhat、Fedora等。软件包文件后缀是".rpm"。

DPKG包：由Debian Linux开发出来的包管理机制，主要应用在Debian和Unbuntu系统中。软件包文件后缀是".deb"。

优点：

1. 包安装与管理简单，往往仅通过几个命令即可实现包的安装、升级、查询和卸载

2. 通常安装速度要比源码安装快很多


缺点：

1. 二进制文件，看不到源码了，修改和分析源码已不太可能

2. 模块功能已经被定制，用户功能选择远不如源码灵活

3. 有时也需要解决依赖性的问题，此时解决依赖性有一定的困难


##  yum安装

yum软件仓库是为了进一步简化RPM管理软件的难度以及自动分析所需软件包及其依赖关系的技术。

yum的关键之处是要有可靠的respository (保证能够连接互联网，还需要保证它是一个互联网上正常可用的仓库)。

它能够从指定服务器自动下载rpm包并安装。yum能够自动解决软件依赖性问题，一次性安装所有依赖的软件包。

**相关命令**：

- 安装命令：

  ```shell
  yum -y  install  软件名
  ```

- 升级命令：

  ```shell
  yum -y  install  软件名
  ```

- 升级所有软件：

  ```shell
  yum -y  install
  ```

- 卸载命令：

  ```shell
  yum  remove  软件名
  ```

- 列出可安装的软件包：

  ```shell
  yum list
  ```

- 列出已安装的软件包：

  ```shell
  yum list installed
  ```

- 查询某个软件包：

  ```shell
  yum  list  软件名
  ```

- 根据关键字搜索软件包：

  ```shell
  yum search  Keyword
  ```

- 清除缓存：

  ```shell
  yum clean all
  ```

##  JDK的安装与配置

1. 从yum仓库中搜索jdk：

   ```shell
   yum search jdk
   ```

2. 安装jdk：

   ```shell
   yum -y install java-17-openjdk-devel.x86_64
   ```

3. 查看jdk的安装目录：

   ```shell
   which java
   ls -l /usr/bin/java
   ls -l /etc/alternatives/java
   ```

4. 在/etc/profile文件中配置环境变量：

   ```shell
   export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-17.0.6.0.10-3.el9.x86_64
   export CLASSPATH=.:$JAVA_HOME/lib
   export PATH=$PATH:$JAVA_HOME/bin
   ```

5. 生效：

   ```shell
   source /etc/profile
   ```

## Tomcat服务器的安装与配置 

Tomcat是Java语言实现的，因此使用Tomcat服务器的前提是：已经安装并配置了Java环境。

下载Tomcat：

- 官网：https://tomcat.apache.org/


- 下载tomcat10：

  ![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222231415.png)

  ![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222233735.png)

  ![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222234130.png)

- 使用FTP工具将以上压缩包上传到CentOS：

  ![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222236333.png)

- 解压到当前目录下：

  ![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222237475.png)

- 第三方软件一般存放在/usr/local目录下，使用mv命令tomcat移动到该目录下：

  ![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222244202.png)

- 为了方便配置环境变量，将目录名重命名：

  ![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222245523.png)

  现在Tomcat服务器的根路径是：/usr/local/tomcat10

- 配置环境变量：

  ![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222245693.png)

- 让环境变量生效：

  ![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222246989.png)

- 启动Tomcat：

  ![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222246493.png)

- 查看服务器IP地址：

  ![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222246943.png)

- 关闭防火墙：

  ![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222246383.png)

- 打开windows上的浏览器，输入地址访问：

  ![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222246511.png)

- 关闭tomcat服务器：

  ![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222247531.png)

  服务器关闭之后，重新打开一个全新的浏览器，再次输入访问地址，会发现无法访问了。

## MySQL的安装与配置 

在CentOS Stream系统上安装MySQL8的步骤：

- 更新系统软件包：更新CentOS Stream系统上的软件包

  ```shell
  dnf update
  ```

  安装MySQL8需要更新系统上的软件包是因为MySQL8需要使用一些较新的依赖库和工具，而CentOS Stream默认的软件包版本可能较旧，无法满足MySQL8的要求。更新系统上的软件包可以确保系统中的依赖库和工具版本与MySQL8的要求相匹配，从而保证MySQL8的正常运行。

  dnf和yum都是CentOS中的包管理器，它们的作用是安装、升级、删除软件包以及解决软件包依赖关系。

  区别：

  - 语法不同：dnf命令的语法更加简洁，而yum命令的语法相对较长。 


  - 性能不同：dnf命令在处理软件包时的性能比yum命令更好，因为dnf使用了更高效的算法。 


  - 依赖关系处理不同：dnf命令在处理软件包依赖关系时更加智能，能够自动选择最佳的依赖关系解决方案。 
  - 使用的库不同：dnf命令使用了更加现代化的libdnf库，而yum命令使用了较老的yum库。 
  - 可用插件不同：dnf命令支持更多的插件，可以实现更多的功能。 

  总的来说，dnf命令是yum命令的升级版本，它在性能、依赖关系处理和可用插件等方面都更加优秀。

- 添加MySQL Yum存储库：将MySQL Yum存储库添加到系统中

  ```shell
  dnf install https://dev.mysql.com/get/mysql80-community-release-el9-5.noarch.rpm
  ```

  MySQL Yum存储库从mysql官网获取：

  ![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222303258.png)

  ![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222303907.png)

  鼠标右键单击：

  ![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222303346.png)

- 导入mysql公钥：

  ```shell
  rpm --import https://repo.mysql.com/RPM-GPG-KEY-mysql-2022
  ```

- 安装MySQL 8：

  ```shell
  dnf install mysql-community-server
  ```

- 启动MySQL服务：

  ```shell
  systemctl start mysqld
  ```

- 设置MySQL开机自启：

  ```shell
  systemctl enable mysqld
  ```

- 查看root账户的临时密码：

  ```shell
  grep 'temporary password' /var/log/mysqld.log
  ```

- 配置MySQL安全设置：

  ```shell
  mysql_secure_installation
  ```

  按照提示输入密码并回答问题，完成安全设置。

- 登录MySQL：

  ```shell
  mysql -u root -p
  ```

完成以上步骤后，您就可以在CentOS Stream系统上安装并使用MySQL 8了。

### MySQL8设置字符集 

- 查看MySQL8字符集：在MySQL命令行界面中输入 `show variables like '%character%';` 可以查看MySQL的字符集设置

  ```
  show variables like '%character%';
  ```

  ![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222306020.png)

- 如果字符集不是utf8，可以在/etc/my.cnf文件中进行配置，在[mysqld]下面添加如下配置：/etc/my.cnf是mysql的配置文件：

  ```shell
  [mysqld]
  character-set-server=utf8mb4
  collation-server=utf8mb4_general_ci
  ```

  保存并退出。

- 重启MySQL服务：

  ```shell
  systemctl restart mysqld
  ```

- 再次查看MySQL8的字符集是否为utf8

### 在MySQL8中为Java程序员创建专属的MySQL用户 

- 以root用户身份登录MySQL：

  ```shell
  mysql -u root -p
  ```

- 创建一个新的数据库，例如项目是oa项目，一般创建一个数据库叫做oa：

  ```sql
  create database oa;
  ```

- 创建一个新用户并设置密码：

  ```sql
  CREATE USER 'java_dev'@'%' IDENTIFIED BY 'java_DEV123';
  ```

- 为该用户授予开发者专有的权限：

  ```shell
  GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, ALTER, INDEX, REFERENCES ON oa.* TO 'java_dev'@'%';
  ```

- 刷新权限：

  ```shell
  FLUSH PRIVILEGES;
  ```

- 关闭centos的防火墙：

  ```shell
  systemctl stop firewalld
  ```

现在，Java程序员可以使用用户名和密码连接到MySQL并拥有开发者专有的权限。







