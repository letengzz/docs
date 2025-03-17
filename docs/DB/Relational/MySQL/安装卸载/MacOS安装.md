# MacOS 安装

## 安装包 安装

### 安装MySQL

下载地址：https://dev.mysql.com/downloads/mysql/

**说明**："GA" 是 "General Availability" 的缩写，通常表示软件的正式发布版本，即最新的稳定版本。

![image-20240704201822707](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img/202407042245456.png)

双击mysql8的安装向导：

![1703050965495](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img/202407042200639.png)

安装和密码配置：

![1703051078057](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img/202407042201603.png)

配置信息：

![1703051193588](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img/202407042201527.png)

![1703051261547](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img/202407042202121.png)

### 数据库服务的启动和停止

MySQL软件的服务器端必须先启动，客户端才可以连接和使用使用数据库。

如果接下来天天用，可以设置自动启动。

* 打开Mac系统设置

* 找到mysql服务

  ![1703051722457](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img/202407042202272.png)

### 数据库环境变量的配置

打开终端，输入mysql，下面情况证明MYSQL环境变量问题！

![image-20240704220422547](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img/202407042204138.png)

打开终端配置MySQL环境：[mac环境变量文件在登录用户文件夹下/.bash_profile]

```shell
vim ~/.bash_profile
```

```shell
vim ~/.zshrc
```

按字母 i 键切换至输入状态，添加如下配置：mysql默认安装到/usr/local/mysql文件夹，将其bin，配置到path变量

```shell
export PATH=${PATH}:/usr/local/mysql/bin
```

按ESC键退出输入状态，输入:wq回车即可

然后执行 `source .bash_profile` 使其配置生效。

```shell
source ~/.bash_profile
```

```shell
source ~/.zshrc
```

输入`mysql --version`，出现MySQL版本信息，则表示配置成功。

```shell
mysql --version
```

## Homebrew 安装

Homebrew：Homebrew 是一种包管理器，它能够为系统提供许多软件包的管理能力。

Xcode 命令行工具：Xcode 命令行工具是一种开发工具软件包，它能够为系统提供一些开发工具所需的命令工具。

操作步骤：

1. 打开终端(Terminal)，使用Homebrew安装MySQL：

   ```shell
   brew install mysql
   ```

2. 启动MySQL：

   ```shell
   mysql.server start
   ```

3. 检查MySQL是否已经安装成功：

   ```shell
   mysql --version
   ```

   ![image-20231214224051419](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img/202407042246041.png)

停止mysql服务，在终端输入以下指令：

```shell
cd /usr/local/mysql/bin 
sudo ./mysqld_safe --skip-grant-tables
Password: # 输入 Mac 用户的密码
```

