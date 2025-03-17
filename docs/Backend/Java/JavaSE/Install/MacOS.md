# MacOS 安装

双击下载好的.dmg文件进入默认安装程序：

![在这里插入图片描述](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/84fdf0b0f00a736f8996b6ff8536c1ab.png)

打开终端输入命令：Java -version查看是否安装成功：

![在这里插入图片描述](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/9174698e1124d3ab59722927ea2bbc19.png)

安装好后可配置环境变量

终端输入 `open -t ~/.bash_profile`打开配置文件

按i输入添加环境变量：

```shell
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk17.0.5.jdk/Contents/Home
export CLASSPAHT=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
export PATH=$PATH:JAVA_HOME/bin
```

![在这里插入图片描述](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/81768cb1a6ae77b952ef70a9c39dea76.png)

输入`source ~/.bash_profile`让配置生效

![在这里插入图片描述](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/55ff17c9b6254ddc6f49c41465f4e9c5.png)

输入`echo $JAVA_HOME`查看是否打印出java路径

![在这里插入图片描述](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/054c590bb7cb221a1f3b210e1f8eb7cf.png)

`JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_171.jdk/Contents/Home` 就是所有Mac 默认java路径，所有mac都一样只是版本号jdk1.8.0_171.jdk不同。
