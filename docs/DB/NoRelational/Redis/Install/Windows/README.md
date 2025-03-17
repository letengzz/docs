# Window 安装

下载地址：https://github.com/dmajkic/redis/downloads

下载到的Redis支持32bit和64bit。根据自己实际情况选择，将64bit的内容cp到自定义盘符安装目录取名redis。 如 C:\reids

打开一个cmd窗口 使用cd命令切换目录到 C:\redis 运行 `redis-server.exe redis.conf` 。

如果想方便的话，可以把redis的路径加到系统的环境变量里，这样就省得再输路径了，后面的那个redis.conf可以省略，如果省略，会启用默认的。

输入之后，会显示如下界面：

![](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202404072305925.png)

这时候另启一个cmd窗口，原来的不要关闭，不然就无法访问服务端了。

- 切换到redis目录下运行 `redis-cli.exe -h 127.0.0.1 -p 6379` 。


- 设置键值对 `set myKey abc`


- 取出键值对 `get myKey`


![](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202404072305935.png)

## 
