# Linux 系统命令

## 检查Linux版本

```shell
cat /etc/redhat-release
```

## 修改Hosts文件 

```shell
vim /etc/hosts
```

## 修改主机名 

记得修改hosts文件，修改完成后重启：

```shell
hostnamectl set-hostname new-hostname
```

```shell
vim /etc/hostname
```

## 系统当前时间：date

```shell
date
```

## 显示系统运行时间：uptime

```shell
uptime
```

## 切换用户：su

```shell
su 用户名
```

![image-20240519171029373](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405191710706.png)

`sudo` 命令：表示使用超级管理员身份执行该命令，如果当前不是管理员，希望以管理员身份执行某个命令时，使用sudo，需要输入超级管理员的密码：

![image-20240519171727789](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405191717335.png)

## 在某段内容中搜索：grep

grep 是一个强大的命令行文本搜索工具，用于在文件中查找匹配的字符串或模式，并将匹配行作为输出。

基本用法：

```shell
grep 'pattern' file
```

- `'pattern'`： 表示要匹配的字符串或模式。

- `file`： 表示要搜索的文件名。如果不指定文件名，则 grep 命令会从标准输入中读取数据，等待用户输入并匹配字符串。

在a.txt中搜索0：

```shell
grep 0 a.txt
```

搜索多个文件：file1 和 file2 表示要搜索的多个文件名。也可以使用通配符 *.txt 搜索所有扩展名为 .txt 的文件。

```shell
grep 'pattern' file1 file2
grep 'pattern' *.txt
```

递归搜索目录：

- `-r`： 表示递归搜索目录。

- `dir`： 表示要搜索的目录。

```shell
grep -r 'pattern' dir
```

显示匹配行前的几行或后的几行：

- `-A`： 表示显示匹配行后的几行。

- `-B`： 表示显示匹配行前的几行。

- `-C`： 表示同时显示匹配行前后的几行。这三个选项后面必须跟一个数字，表示要显示的行数。

```shell
grep -A 2 'pattern' file    # 显示匹配行后2行
grep -B 2 'pattern' file    # 显示匹配行前2行
grep -C 2 'pattern' file    # 显示匹配行前后各2行
```

同时输出匹配结果的行号：`-n` 表示只输出匹配结果所在的行号。

```shell
grep -n 'pattern' file
```

忽略大小写：`-i` 表示忽略大小写。

```shell
grep -i 'pattern' file
```

找出不匹配的行：`-v` 输出不匹配模式的行。

```shell
grep -v 'pattern' file
```

使用正则表达式匹配：`-E` 表示使用正则表达式匹配。

```shell
grep -E 'pattern' file
```

## 管道：|

可以将命令的输出作为后面命令的输入，可以叠加：

```
ls -al | grep rwx | grep r-X
```

## 查看系统进程：ps

```shell
ps [命令参数]
```

常用参数：

-  `-e`：显示当前所有进程 

- `-f`：显示 UID,PPID,C 与 STIME 栏位信息

显示内容：

- UID：该进程的所属用户 
- PID：进程id 
- PPID：父进程id 
- C：CPU使用百分比 
- STIME：启动时间 
- TTY：启动该进程的终端设备是哪个 
- TIME：耗费的CPU时间 
- CMD：该进程对应的命令

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405212149113.webp)

## 暂停程序：sleep

在 Linux 中，sleep 是一个常用的命令，用于暂停程序的执行一段时间。

sleep 命令的基本语法：

- NUMBER 为需要暂停的时间，单位是秒

- SUFFIX 可以是以下之一：

  - 秒 (默认)：s
  
  
    - 分：m
  
  
    - 小时：h
  
  
    - 日：d
  


例如：

- 暂停 3 秒

  ```shell
  sleep 3
  ```

- 暂停 1 分钟

  ```shell
  sleep 1m
  ```

- 暂停 2 小时

  ```shell
  sleep 2h
  ```

- 暂停 1 天

  ```shell
  sleep 1d
  ```

- 启动sleep进程，在后台暂停1天：5277是这个sleep进程的id。

  ```shell
  sleep 1d &
  ```

  ![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405220913637.webp)

## 杀掉进程 kill

```shell
kill 进程号
```

强行杀死：

```shell
kill -9 进程号
```

杀死所有进程：

```shell
killall 进程名
```

找到进程：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405221341866.webp)

杀死进程：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405221341802.webp)

杀死所有的sleep进程：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405221341039.webp)

## 查看正在运行的系统进程信息：top

top 命令是用于查看正在运行的系统进程信息的命令。它会**实时**动态地显示系统资源的使用情况，如 CPU 占用率、内存使用情况、进程情况等。通常用于系统监控和性能调优。

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405221342381.webp)

**僵尸进程**：在操作系统中，僵尸进程 (Zombie Process) 是指一个已经执行结束的进程，但其进程描述符仍然留在进程列表中，它不再执行任何其他操作，但仍然占用一定内存空间。

**交换分区** (Swap)，也称虚拟存储器，是一种在计算机内存不足时，为了增加内存所采用的一种技术。当系统内存不足时，操作系统会把暂时不需要的内存数据和程序信息通过交换机制存储到硬盘上的交换分区中，以节省内存的使用，从而保证共享内存的进程正常运行。

q：退出top命令。

## 查看物理内存和交换分区：free

free命令可以用于查看物理内存和交换分区的使用情况：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405221343547.webp)

## 输出：echo

###  输出字符串 

```shell
echo "Hello, world!"
```

这将会输出 Hello, world! 和一个换行符。

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405221343036.webp)

###  输出变量 

```shell
name="John"
echo "My name is $name"
```

这将会输出 My name is John 和一个换行符。在输出字符串时，使用 `$` 符号加上变量名即可。

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405221343195.png)



###  输出多行 

```shell
echo "line 1
line 2
line 3"
```

这将会输出三行文本，每行一条。

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405221344882.webp)

### 输出特殊字符 

```shell
echo -e "Line 1\nLine 2\tTable"
```

这将会输出两行文本，第一行后接一个换行符，第二行中的 Table前有一个制表符。

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405221344652.png)

## 重定向

### 输出重定向

- `>`：以覆盖的形式写到文件中。

- `>>`：以追加的形式写到文件中。

凡是在控制台上能够打印出来的，统一都可以重定向，可以将其打印到控制台的行为重定向到文件或其它设备。例如：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405221345072.png)

将 ls -al的执行结果重定向到 ls.txt 文件中。

ls.txt文件内容如下：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405221345567.png)

以上方式是采用覆盖的方式，所谓覆盖方式指的是，每一次执行时，都会把 ls.txt 文件全部清空，然后重新写入。

如果要以追加的方式，则需要使用 `>>`。

### 输入重定向 

`<`：将文件内容输入给某个命令，这是一种默认的行为，通常 `<` 是可以省略的。例如：

a.txt文件内容如下：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405221346888.png)

将 a.txt 文件中的内容输入给 sort命令：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405221346463.png)

`<<`：可以接收键盘的输入：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405221347577.png)

EOF是一个结束符，随意的，当键盘输入EOF之后，键盘输入则自动结束，然后sort命令将键盘输入的内容进行排序。

## 磁盘空间使用情况查询：df

df 命令是 Linux 系统中的一个磁盘空间使用情况查询命令，用于显示当前文件系统的磁盘空间使用状况，以及文件系统的挂载点、磁盘大小、已用空间、可用空间、使用占比等信息。df命令是 disk free" 的缩写。

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405221351977.png)

对于程序员来说，应该重点关注以上红框中的内容，已用空间超过80%则需要重点注意，以防磁盘已满导致数据无法写入而丢失。

## 磁盘空间占用查询：du

du命令是 Linux 系统中的一个磁盘空间占用查询命令，用于显示文件或目录占用的磁盘空间大小。du命令是 "disk usage" 的缩写，4表示占用4个字节的空间。

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405221355203.png)

## 重启 reboot

reboot

## 关机 shutdown&poweroff

```shell
shutdown -h now
```

```shell
poweroff
```

`shutdown -h now` 和 `poweroff` 都是用于关机的 Linux 命令，区别：

1. `shutdown -h now` 命令会向系统发送信号，通知所有正在运行的进程停止运行，并保存当前的状态，然后关闭系统。通常会在关机前向所有用户发送通知消息。 
2. `poweroff` 命令相较于 `shutdown -h now` 更为强制，它会立即关闭系统电源，不会等待正在运行的进程结束。使用 `poweroff` 命令时需要特别小心，因为它可能会丢失尚未保存的数据。 

综上所述，`shutdown -h now` 命令会逐步关闭进程，允许程序释放资源并保存数据；而 `poweroff` 命令则会立即关闭系统电源，可能会丢失一些尚未保存的数据。因此，在正常关机的情况下，建议使用 `shutdown -h now` 命令；只有在意外情况下，比如系统出现严重故障等情况，才应该使用 `poweroff` 命令。

## 查看网卡的ip地址：ifconfig

查看网卡的ip地址。在windows当中是：`ipconfig`。在linux当中是`ifconfig`。

![image.png](https://cdn.nlark.com/yuque/0/2024/png/21376908/1713858561977-899f3232-bf73-4ffa-bd35-369ee1aac681.png?x-oss-process=image%2Fformat%2Cwebp)

## 查看计算机之间是否可以正常通信：ping

语法： 

```shell
ping ip地址
ping 域名
```

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405221355031.png)

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405221355374.png)

## 模拟用户访问：curl

模拟用户访问，模拟浏览器行为。

可以直接查看百度首页的前端代码：

```shell
curl http://www.baidu.com
```

curl 命令是 Linux 系统中的一个用于发送 HTTP 请求的工具。它支持各种协议，包括 HTTP、HTTPS、FTP、IMAP、SMTP 等，可以用于从网络中获取数据、上传文件等。

curl 命令的基本语法：

```shell
curl [options] <URL>
```

URL 表示要请求的目标地址。

curl 命令的常用选项：

- `-i` ：显示响应头信息。

- `-I` ：只显示响应头信息，不显示响应体。

- `-X` ：设置请求方法，包括 GET、POST、PUT、DELETE 等。

- `-d` ：设置请求体数据（POST 请求）。

- `-H` ：设置请求头信息。

- `-o`/`-O` ：下载文件，并保存到本地。

- `-u` ：设置认证信息。

- `-A` ：设置 User-Agent。

- `-s` ：静默模式，不输出进度信息。

例：

1. 请求一个 URL 并输出响应信息：

   ```shell
   curl www.example.com
   ```

2. 发送 POST 请求：

   ```shell
   curl -X POST -d "name=john&age=30" www.example.com/submit	
   ```

3. 下载一个文件：

   ```shell
   curl -O www.example.com/test.zip
   ```

4. 设置请求头信息：

   ```shell
   curl -H "User-Agent: Mozilla/5.0" www.example.com
   ```

总之，curl 命令是一个非常方便的工具，可以用于从网络中获取数据、上传文件等，并且支持多种协议和请求方式。需要注意的是，在实际使用 curl 命令时，还需要根据具体情况设置相应的选项和参数。

## 下载资源

下载资源，语法：

```shell
wget 资源地址
```

下载tomcat ：wget https://dlcdn.apache.org/tomcat/tomcat-10/v10.1.20/bin/apache-tomcat-10.1.20.tar.gz

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405221400580.png)

下载结果：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405221400315.png)

## 查看网络连接状态及端口：netstat

在实际开发中，netstat最常用的操作是查看网络连接情况。通过使用netstat命令，开发人员可以快速了解当前系统上的所有网络连接，包括正在监听的端口、建立的连接、连接状态等信息。这对于排查网络问题和监控系统状态非常有用。另外，netstat还可以用于检查网络安全，例如查看哪些端口正在被占用，是否有不安全的连接等。

**状态**：

- LISTENING 状态：表示该端口已占用，正在监听，等待客户端的连接。
- CONNECTED状态：表示网络连接已建立，但并没有开始数据传输。
- ESTABLISHED 状态：表示网络已连接，数据正在传输中。
- TIME_WAIT 状态：表示连接已经被终止，在双方都完成数据传输后，该连接会进入`TIME_WAIT`状态，并等待一段时间后关闭。

查看所有的网络连接状态：

```shell
netstat -a
```

不将端口和IP地址转换为名称，而是直接显示数字格式的IP地址和端口号：添加`-n`参数

```shell
netstat -an
```

查看**所有处于监听状态**的连接：

```shell
netstat -l
```

查看所有TCP连接状态：

```shell
netstat -t
```

查看所有UDP连接状态：

```shell
netstat -u
```

查看所有处于CONNECTED状态的连接：

```shell
netstat -o
```

查看指定端口的网络连接状态：

```shell
netstat -an | grep 端口号
```

例如，查看80端口的网络连接状态：

```shell
netstat -an | grep :80
```

