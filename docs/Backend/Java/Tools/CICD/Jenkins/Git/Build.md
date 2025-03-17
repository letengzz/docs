# Jenkins+Git 构建部署

## 自动构建项目

新建Item：

![image-20240331121121089](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092239709.png)

创建任务：

![image-20240331121302199](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092239673.png)

配置Git地址：

![image-20240331132629507](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092239601.png)

![image-20240331133152293](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092239305.png)

配置POM.xml：

![image-20240402214125686](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092239393.png)

构建项目：

![image-20240331133536178](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092240132.png)

查看控制台输出：

![image-20240331134834350](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092239936.png)

![image-20240331134750182](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092239808.png)

![image-20240331134901777](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092240734.png)

## 自动发布服务器

下载插件：

![image-20240331152518799](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092240082.png)

在全局配置System中添加目标远程服务器地址：

![image-20240331154429620](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092240084.png)

![image-20240331154206214](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092240092.png)

![image-20240331154219543](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092240039.png)

添加运行之后的步骤：

![image-20240331153337016](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092240819.png)

![image-20240331161732354](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092240976.png)

输出命令时一定要注意不要让窗口卡住，不然Jenkins会认为认为一直没完成

**shell的日志输出**：

```sh
#! /bin/bash
BUILD_ID=dontKillMe
nohup /usr/local/java/bin/java -jar /root/test1/demo*.jar >mylog.log 2>&1 &
```

![image-20240331182743063](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092240591.png)

## 超时机制

执行程序如果超过了超时时间，原因：

1. 传输的文件过大
2. 执行的难度较大
3. 发送复杂的计算运算等脚本

默认超时时间为2分钟，修改默认的超时时间即可：

![image-20240331174607646](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092240950.png)

## 运行前清理

添加运行之前的步骤：

![image-20240331185528574](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092240305.png)

![image-20240331202448302](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092240425.png)

配置杀死之前运行的进程：

> clean.sh

```sh
#!/bin/bash

#删除历史数据
rm -rf test1

appname=$1
#获取传入的参数
echo "arg:$1"


#获取正在运行的jar包pid
pid=`ps -ef | grep $1 | grep 'java -jar' | awk '{printf $2}'`

echo $pid

#如果pid为空，提示一下，否则，执行kill命令
if [ -z $pid ];
#使用-z 做空值判断
        then
                echo "$appname not started"

        else
               kill -9 $pid
                echo "$appname stoping...."

check=`ps -ef | grep -w $pid | grep java`
if [ -z $check ];

        then
                echo "$appname pid:$pid is stop"
        else
                echo "$appname stop failed"

fi


fi
```

文件授权：

```
chmod 777 clean.sh
```

