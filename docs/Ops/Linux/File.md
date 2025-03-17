# Linux 文件管理与操作

## 文件管理

### 新建目录：mkdir

mkdir是新建目录的命令。

- 创建目录名abc的目录：

  ```shell
  mkdir abc
  ```

- 一次创建多重目录：`-p`参数表示

  ```shell
  mkdir -p a/b/c
  ```

  虽然a已经存在了，但是不会报错，直接在a目录下新建kk目录，kk目录下新建ff目录：

  ```shell
  mkdir -p a/kk/ff
  ```

### 新建文件：touch

**语法**：

```shell
touch 文件名
```

例如：`touch Hello.java` 表示在当前目录下新建一个文件Hello.java

 一次性在当前目录下，新建多个文件，文件名之间采用空格分隔：

```shell
touch a.txt b.txt c.txt
```

### 删除文件：rm

**语法**：

```shell
rm 文件名
```

删除当前目录下的a.txt文件：这种方式会询问，是否删除，输入y表示删除，输入n表示不删除。

```shell
rm a.txt
```

不想让系统询问是否删除，可以添加 `-f` 参数进行强行删除：强行删除a.txt文件，不询问

```shell
rm -f a.txt
```

删除多个文件：

- 删除b.txt和c.txt文件：

  ```shell
  rm -f b.txt c.txt
  ```

- 删除所有.java结尾的文件，模糊匹配的方式

  ```shell
  rm -f *.java
  ```

### 删除目录：rm -r

删除目录的时候，必须添加`-r`参数，这个-r表示删除一个目录，或者递归删除目录下的所有子目录以及子文件。

- 删除当前目录下的x目录，以及x目录下所有的子目录，但是这种方式需要用户自己输入y进行确认删除：

  ```shell
  rm -r x
  ```

- 强行删除x目录以及x目录下所有的子目录，并且不询问。包括子文件也全部删除：

  ```shell
  rm -rf x
  ```

### 文件拷贝：cp

复制当前目录下的a.txt文件，粘贴到当前目录下并且生成新文件aa.txt：

```shell
cp a.txt aa.txt
```

语法如下： 

- `cp file1 file2`
- file1就是被拷贝的文件
- file2就是粘贴之后的文件
- file1和file2可以添加路径。
- cp 被拷贝文件的路径 粘贴到哪里的路径

```shell
cp Hello2.java a/Hello3.java 
```

### 目录拷贝

**语法**：

```shell
cp 目录名1 目录名2
```

- 目录名1 是拷贝源
- 目录名2 是拷贝到哪里

将当前目录下的a目录拷贝到当前目录下的abc目录当中：`-rf` (`-r`递归拷贝，`-f`强行拷贝)：

```shell
cp -rf a abc
```

将/home/a目录拷贝到/home/x目录下：

```shell
cp -rf /home/a /home/x
```

### 移动：mv

将当前目录下的Hello.java文件移动到x目录下：

```shell
mv Hello.java x
```

将/home/Hello2.java 移动到 /home/x目录下：

```shell
mv /home/Hello2.java /home/x
```

将x目录移动到f目录下：

```shell
mv x f
```

### 文件搜索：find&whereis&which

在CentOS中，可以使用以下方式进行文件搜索：

- find命令：使用find命令可以在指定目录下搜索文件。可以使用不同的选项来指定搜索的文件类型、大小、修改时间等条件：

  ```shell
  find /usr/local -name "catalina.out"
  ```

- whereis命令：使用whereis命令可以在系统中搜索指定的命令的位置：

  ```shell
  whereis startup.sh
  ```

- which命令：使用which命令也可以在系统中搜索指定的命令的位置：

  ```shell
  which command
  ```

### 比较文件不同：diff

diff命令可以用来比较两个文件的不同之处。

a.txt文件内容如下：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405221643703.png)

b.txt文件内容如下：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405221643199.png)

比较a.txt和b.txt文件之间的区别：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405221644806.png)

以上的比较结果中：1c1是什么含义？3c3,4是什么含义？

- c 表示 change，改变的意思。


- 1c1表示：第一个文件的第1行 和 第二个文件的第1行 发生了改变。

- 3c3,4表示：第一个文件的第3行 和 第二个文件的第3,4行不同，发生了改变。

### 文件内容排序：sort

sort命令可以对文件中的内容以“行”为单位进行升序和降序排列：

a.txt 文件内容：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405221645681.png)

升序：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405221647461.png)

降序：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405221647718.png)

将文件中的内容当做数字进行排序（不再当做字符串）：

a.txt文件内容：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405221647145.png)

当做数字进行排序：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405221647458.png)

### 文件的inode号：ls -i

在Linux操作系统中，每一个文件都有自己的身份证号：inode号 (index node：索引节点号)

每个文件都有自己的inode号，并且不会重复，在Linux操作系统中通过inode来区分两个文件。

查看文件的inode号：

```shell
ls -i HelloWorld.java
```

![image-20240519164434644](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405191644180.png)

## 软链接与硬链接

### 软连接 ln -s

软链接类似于windows操作系统中的快捷方式。

**软链接的作用**：方便操作。快捷。有些经常被操作的文件，藏的很深，每一次找很麻烦，可以给这些经常操作的文件创建软链接。通过软链接快捷的操作目标文件。

创建软链接：

```shell
ln -s HelloWorld.java HelloWorld.java2
```

- 表示给hello.java文件创建一个hello2.java的快捷方式 (软链接)
- hello.java是目标文件。hello2.java文件是软链接，属于快捷方式

软链接和目标文件实际上是两个文件，在软链接中存储的是目标文件的路径。软链接关联的目标文件如果被删除，软链接这个快捷方式也就失效了。

可以通过查看inode号，来证明软链接是两个不同的文件：

![image-20240519162616961](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405191626612.png)

### 硬链接 ln

创建硬链接的语法：把软链接创建过程中的 -s 去掉就是创建硬链接的语法

```java
ln HelloWorld.java HelloWorld2.java
```

通过测试得知：inode号一致，说明创建的硬链接和原文件是同一个文件。

![image-20240519162923965](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405191629227.png)

 硬链接的特点： 

- 主要是用来做：重要文件备份。
- 目标文件删除之后，硬链接只要在，文件其实就没有被删除。或者说硬链接删除之后，目标文件还在。总结一句话：目标文件或者硬链接只要有一个存在，文件就没有被真正的删除。
- 硬链接机制和复制粘贴还不一样，复制粘贴之后的文件，修改其中之一，另一个不会变，但是硬链接就不一样了。

## 文件压缩与解压缩

tar是在linux系统当中完成压缩和解压缩的命令。
压缩后的文件又被称为归档文件。

### tar命令

tar命令语法格式：

```shell
tar 参数 要压缩的或解压的文件或目录
```

tar命令的常用参数： 

- `z`：指定是否使用gzip压缩方式压缩 (扩展名通常为：tar.gz。特点：速度最快)
- `j`：是否需要用 bzip2 压缩方式压缩 (扩展名通常为：tar.bz2。特点：体积最小)
- `c`：创建压缩 (create)
- `x`：解压缩
- `v`：是否在压缩的过程中显示文件
- `f`：指定归档文件名（file）。f参数后面必须紧跟文件名，不能在f参数后面再加其他参数。
- `t`：查看 tarfile 里面的文件
- `C`：指定解压到的具体目录。注意是大写C。

**注意**：c、x、t，这三个参数不能共存，只能出现一个。

### 压缩

压缩一个文件：

```shell
tar -zcvf mytxt.tar.gz log1.txt
```

压缩多个文件：

```shell
tar -zcvf mytxt2.tar.gz log1.txt log2.txt log3.txt
```

```shell
tar -zcvf mytxt3.tar.gz *.txt
```

压缩目录：将test目录压缩为mytxt4.tar.gz

```shell
tar -zcvf mytxt4.tar.gz test
```

### 查看归档文件

```shell
tar -tf mytxt.tar.gz
```

### 解压

解压到当前目录下：

```shell
tar -zxvf mytxt.tar.gz 
```

将mytxt.tar.gz压缩包解压到test目录：

```shell
tar -zxvf mytxt.tar.gz -C test 
```

## 文件编辑vi & vim

vi 和 vim 都是在 Linux 和 Unix 中常用的基于字符终端的文本编辑器。

vi 是 Unix 早期提供的标准命令行下的文本编辑器，是一款非常强大、高效的编辑器，可以对文本进行快速修改和编辑，具有常见编辑器的基本功能。

vim (Vi Improved) 是在vi基础上进行了改进和扩展的一个版本，它保留了vi的全部功能，并添加了许多新功能，如基本的 GUI 界面、语法高亮、多级撤销/重做、对齐、插件支持等等。可以说 vim 是强大的文本编辑器之一，被众多的开发者、管理员、写作人员和爱好者使用。

通过 vi 和 vim 命令，可以在终端中打开并编辑文本文件，进行各种修改和编辑，保存后退出，是 Linux 和 Unix 系统中非常基础、常用的一种文本编辑方式。

总之，vi 和 vim 均是一款 Linux 和 Unix 中常用的基于字符终端的文本编辑器，其中 vim 是在 vi 基础上进行了改进和扩展的版本。

**在 CentOS 中，系统默认安装的是 vim 编辑器，但是为了兼容 vi 编辑器的使用习惯，CentOS 将 vim 的执行文件命名为 vi。因此，实际上在 CentOS 中使用 vi 和 vim 是等价的，都是使用 vim 编辑器进行文本编辑**。

### vi 编辑器使用

**注意**：vi编辑器打开的文件如果不存在，则自动新建。

1. 第一步：使用vi编辑器打开文件，语法：`vi 文件的路径` 

   打开当前路径下的Hello.java：

   ```shell
   vi Hello.java
   ```

   打开/home目录下的Hello.java文件：

   ```shell
   vi /home/Hello.java
   ```

2. 第二步：编辑文件 (vi编辑器为用户准备了两个模式)

   - 第一个模式：命令行模式 (此时键入的都是命令)
   - 第二个模式：编辑模式 (此时键入的内容都会写入文件)

   进入vi编辑器时是命令模式：键入`i`命令进入编辑模式

   从编辑模式回到命令模式：按一下esc键

3. 第三步：保存。在命令模式下，输入以下命令：

   - 保存并退出：

     ```shell
     :wq
     ```

   - 强行退出vi编辑器，并且不保存：

     ```shell
     :q!
     ```

### vi 编辑器常用命令

- `dd`：删除光标所在行
- `yy`：复制光标所在行到缓冲区
- `p`：粘贴缓冲区中的内容
- `gg`：光标回到文件第一行
- `GG`：光标回到文件最后一行
- `^`：光标移动至当前行的行首
- `$`：光标移动至当前行的行尾
- `/`关键字：按斜杠/键，可以输入想搜索的字符，然后确定进行搜索，如果第一次查找的关键字不是想要的，可以一直按 n 键往后查找到想要的关键字为止
- `o`命令：在下一行插入
- `x`命令：命令行模式下，x命令会删除单个字符
- `a`命令：在光标后面插入
- `:set number`：命令模式下，使用将在每一行前面显示行号

## nano编辑器

nano编辑器相对于vi编辑器来说出现的较晚，1999年诞生。vi编辑器时1976年诞生。nano编辑器更加简单一些。

以下是nano常用的快捷键，这些快捷键多数是无法在windows环境下使用的，因为和windows很多快捷键是冲突的，在linux环境中可以用：

- 打开文件：`nano Test.java`
- 保存文件：`ctrl + o`
- 退出nano：`ctrl + x`
- 选中多个字符：`shift + 左方向/右方向`
- 剪切：`ctrl + k`
- 粘贴：`ctrl + u`
- 搜索：`ctrl + w`
- 替换：`ctrl + \`
- 复制选中的：`alt + 6`
- 撤销：`alt + u`
- 重做：`alt + e`

## 文件内容查看

### cat命令

语法：

```shell
cat [选项]... [文件]...
```

常用选项：

- `-n`：对输出的所有行编号
- `-b`：对输出的所有行编号 (不含空白行)
- `-t`：将制表符(tab)显示为^I
- `-e`：在每行结束处显示"$"
- `-s`：当连续空白行数量大于1时，合并为1个空白行

cat命令会一次性将文件的完整内容全部显示出来，不适合大文件。

查看文件所有内容：

```shell
cat HelloWorld.java
```

查看文件所有内容，并且添加行号

```shell
cat -n HelloWorld.java
```

查看文件所有内容，添加行号，但空白行不加行号：

```shell
cat -b HelloWorld.java
```

查看文件所有内容，将制表符显示为^I：

```shell
cat -t HelloWorld.java
```

查看文件所有内容，在每行结束处显示"$"：

```shell
cat -e HelloWorld.java
```

查看文件所有内容，合并多个连续的空白行为1个空白行：

```shell
cat -s HelloWorld.java
```

一次查看多个文件：

```shell
cat a.txt b.txt
```

使用cat合并文件：

```shell
cat a.txt b.txt > c.txt
```

加上行号之后输出到另一个文件：

```shell
cat -n HelloWorld.java > HelloWorld2.java
```

清空文件内容：

```shell
cat /dev/null > HelloWorld.java
```

### more命令

more命令和cat命令的相同点和不同点：

- 相同点：more和cat在开始读取文件的时候，都是一次性的将文件全部内容装载到缓存中
- 不同点：cat是一次性的全部输出打印。more可以进行部分打印 (一屏一屏的打印)

用法：

```shell
more [选项] <文件>...
```

常用选项：

-  `-<number>`：每个屏幕的行数
-  `+<number>`：从行号开始显示文件
-  `+/<pattern>`：从匹配的位置前两行开始显示内容
-  `-p`：以清除原内容的方式进行翻页。

常用操作：

-   回车键：显示下一行
-   空格键：显示下一页
-   ctrl + b：显示上一页
-   =：显示行号
-   :f：显示文件名的同时显示行号
-   q：退出more命令

日志文件：log.txt，内容：

```shell
2021.10.1 zhangsan
2021.10.2 lisi
2021.10.3 wangwu
2021.10.4 zhaoliu
2021.10.5 admin
2021.10.6 zhangsan
2021.10.7 lisi
2021.10.8 wangwu
2021.10.9 zhaoliu
2021.10.10 qianqi
2021.10.11 zhouyu
2021.10.12 huanggai
2021.10.13 zhugeliang
2021.10.14 simayi
2021.10.15 maimaiti
2021.10.16 erdaye
2021.10.17 sandaye
2021.10.18 zhangsan
2021.10.19 lisi
2021.10.20 wangwu
2021.10.21 zhaoliu
2021.10.22 qianqi
2021.10.23 zhoubapi
2021.10.24 doudizhu
2021.10.25 nongmin
2021.10.26 sunwukong
2021.10.27 zhubajie
2021.10.28 shaseng
2021.10.29 wujing
2021.10.30 baigujing
2021.10.31 java
2021.11.1 oracle
2021.11.2 mysql
2021.11.3 jdbc
2021.11.4 servlet
2021.11.5 jsp
2021.11.6 spring
2021.11.7 mybatis
2021.11.8 springmvc
2021.11.9 web
2021.11.10 html
2021.11.11 css
2021.11.12 java
2021.11.13 sun
```

从第3行起，查看文件内容：

```shell
more +3 log.txt
```

每屏显示4条记录：

```shell
more -4 log.txt
```

从文件中查找"java"字符串的行：

```shell
more +/java log.txt
```

查看进程，每5条为一屏，翻屏时清空原内容：

```shell
ps -ef | more -5 -p
```

### less命令

less 工具也是对文件或其它输出进行分页显示的工具，应该说是linux正统查看文件内容的工具，功能极其强大。less 的用法比起 more 更加的有弹性。使用less 时，可以使用 [pageup] [pagedown] 等按键的功能来往前往后翻看文件，更容易用来查看一个文件的内容！除此之外，在 less 中可以拥有更多的搜索功能。

用法：

```shell
less [选项] 文件 
```

常用选项： 

- `-g`：只标志当前搜索到的关键词所在行 
- `-I`：忽略搜索时的大小写（注意：是大写I） 
- `-m`：显示类似more命令的百分比 
- `-N`：显示每行的行号 
- `+num`：从第num行开始显示 

常用操作： 

- /字符串：向下搜索“字符串”的功能 
- ?字符串：向上搜索“字符串”的功能 
- n：重复前一个搜索（与 / 或 ? 有关） 
- N：反向重复前一个搜索（与 / 或 ? 有关） 
- y  向前滚动一行 回车键 向后滚动一行 
- u  向前滚动半页 d  向后滚动半页 
- b  向前翻一页 空格键 向后翻一页 
- g  移动到第一行 
- G  移动到最后一行 
- = 显示详细信息（第几行，共多少行，内容的字节数量等） 
- v  使用vim编辑器进行编辑 
- q  退出less 命令 
- [pagedown] 向下翻动一页 
- [pageup] 向上翻动一页

#### less命令标记兴趣点  

在感兴趣的位置添加标记： 

- 先按m键 (set mark)
- 输入标记名称，例如标记名字为：x

需要回到感兴趣的位置时： 

- 先按 `'` 键 (goto mark)
- 输入标记名称 x

#### less命令实时监控文件动态变化  

第一步：在窗口1中执行：

```shell
less +F log.txt
```

第二步：在窗口2中执行：

```shell
ps -ef >> log.txt
```

**注意**：

- 在监控的过程中，按 ctrl + c是终止监控，可以继续使用less命令的相关操作。按大写F，再次进入监控模式。

- log.txt是一个文件名。只有机器自动写入或通过输出重定向写入的才可以被监控。

#### less命令查看多个文件  

```shell
less log.txt  log2.txt
```

- 输入`:n` 跳转到log2.txt
- 输入`:p` 跳转到log.txt

#### less命令结合管道一起使用  

```shell
ps -ef | less -N
```

### head命令

head命令：显示文件头部内容。

用法：

```shell
head [选项]... [文件]...
```

将每个指定文件的前 10 行输出到标准输出。

如果指定了多于一个文件，在每块输出之前附加文件名称作为头部。

参数：

- `-c`：输出前几个字符
- `-n`：指定行数
- `-q`：不显示包含给定文件名的文件头

前三行：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222103388.png)

前9个字符：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222103862.png)

显示多个文件的前3行：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222103340.png)

不带文件名标识：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222103461.png)

### tail命令

tail命令：显示文件尾部内容。

用法：

```shell
tail [选项]... [文件]...
```

显示每个指定文件的最后 10 行并输出至标准输出。 若指定了多于一个文件，程序会在每段输出的开始添加相应文件名作为头。

参数：

- `-c`：输出最后几个字符
- `-f`：随文件增长即时输出新增数据
- `-n`：指定行数
- `-q`：不输出文件名的头

默认显示文件末尾的后10行：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222104783.png)

指定行数：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222104835.png)

一次查看多个文件：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222104776.png)

不显示文件名：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222104125.png)

监控文件变化：

在窗口1中：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222104465.png)

在窗口2中：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222105978.png)

可以看到窗口1发生了变化：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222105775.png)

### nl命令

nl命令是比较专业的显示行号的命令。

用法如下：

- 所有行添加行号，包括空白行：

  ```shell
  nl -b a
  ```

- 给行添加行号，不包括空白行 (默认行为，和直接使用 nl 一样效果)：

  ```shell
  nl -b t
  ```

- 行号在自己栏位左侧显示：

  ```shell
  nl -n ln
  ```

- 行号在自己栏位的右侧显示：

  ```shell
  nl -n rn
  ```

- 显示行号，行号栏位不满时，自动补0 ：

  ```shell
  nl -n rz
  ```

- 行号栏位的占用的位数：

  ```shell
  nl -w
  ```

文件内容如下：

> HelloWorld.java

```java
public class HelloWorld{
        public static void main(String[] args){
                System.out.println("Hello World");
        }
}

class UserService{
        public void logout(){
                System.out.println("system log out!");
        }
}
```

执行以下命令：

- 展示内容：

  ```shell
  nl HelloWorld.java
  ```

  执行结果：

  ![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222113233.png)

- 执行以下命令：显示所有行的行号，包括空白行：

  ```shell
  nl -b a HelloWorld.java
  ```

  执行结果：

  ![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222114301.png)

- 执行以下命令：显示行号，不包括空白行 (这是一种默认的方式，和"`nl HelloWorld.java`"效果一样)：

  ```shell
  nl -b t HelloWorld.java
  ```

  执行结果：

  ![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222115589.png)

- 执行以下命令：行号在行号栏位左侧显示：

  ```shell
  nl -n ln HelloWorld.java
  ```

  执行结果：

  ![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222116610.png)

- 执行以下命令：行号在行号栏位右侧显示：

  ```shell
  nl -n rn HelloWorld.java
  ```

  执行结果：

  ![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222117305.png)

- 执行以下命令：行号栏位自动补0：

  ```shell
  nl -n rz HelloWorld.java
  ```

  执行结果：

  ![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222119899.png)

- 执行下命令：设置栏位的字符数量：

  ```shell
  nl -n rz -w 3 HelloWorld.java
  ```

  执行结果：

  ![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222119166.png)

### tailf命令

与tail -f不同的是，如果文件不增长，它不会去访问磁盘文件。tailf特别适合那些便携机上跟踪日志文件，因为它能省电，因为减少了磁盘访问。tailf命令不是个脚本，而是一个用C代码编译后的二进制执行文件，某些Linux安装之后没有这个命令。

CentOS系统是不支持该命令的，可以按照以下步骤添加这个命令：

1. 第一步：cd命令切换到/usr/local目录下，新建tailf.c文件，该文件内容：

   > /usr/local/tailf.c

   ```shell
   /* tailf.c -- tail a log file and then follow it 
    * Created: Tue Jan  9 15:49:21 1996 by faith@acm.org 
    * Copyright 1996, 2003 Rickard E. Faith (faith@acm.org) 
    * 
    * Permission is hereby granted, free of charge, to any person obtaining a 
    * copy of this software and associated documentation files (the "Software"), 
    * to deal in the Software without restriction, including without limitation 
    * the rights to use, copy, modify, merge, publish, distribute, sublicense, 
    * and/or sell copies of the Software, and to permit persons to whom the 
    * Software is furnished to do so, subject to the following conditions: 
    * 
    * The above copyright notice and this permission notice shall be included 
    * in all copies or substantial portions of the Software. 
    * 
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
    * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL 
    * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR 
    * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, 
    * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR 
    * OTHER DEALINGS IN THE SOFTWARE. 
    *  
    * less -F and tail -f cause a disk access every five seconds.  This 
    * program avoids this problem by waiting for the file size to change. 
    * Hence, the file is not accessed, and the access time does not need to be 
    * flushed back to disk.  This is sort of a "stealth" tail. 
    */  
     
   #include <stdio.h>  
   #include <stdlib.h>  
   #include <unistd.h>  
   #include <malloc.h>  
   #include <sys/stat.h>  
   //#include "nls.h"  
   #define _(s) s  
     
   static size_t filesize(const char *filename)  
   {  
       struct stat sb;  
     
       if (!stat(filename, &sb)) return sb.st_size;  
       return 0;  
   }  
     
   static void tailf(const char *filename, int lines)  
   {  
       char **buffer;  
       int  head = 0;  
       int  tail = 0;  
       FILE *str;  
       int  i;  
     
       if (!(str = fopen(filename, "r"))) {  
       fprintf(stderr, _("Cannot open \"%s\" for read\n"), filename);  
       perror("");  
       exit(1);  
       }  
     
       buffer = malloc(lines * sizeof(*buffer));  
       for (i = 0; i < lines; i++) buffer[i] = malloc(BUFSIZ + 1);  
     
       while (fgets(buffer[tail], BUFSIZ, str)) {  
       if (++tail >= lines) {  
           tail = 0;  
           head = 1;  
       }  
       }  
     
       if (head) {  
       for (i = tail; i < lines; i++) fputs(buffer[i], stdout);  
       for (i = 0; i < tail; i++)     fputs(buffer[i], stdout);  
       } else {  
       for (i = head; i < tail; i++)  fputs(buffer[i], stdout);  
       }  
       fflush(stdout);  
     
       for (i = 0; i < lines; i++) free(buffer[i]);  
       free(buffer);  
   }  
     
   int main(int argc, char **argv)  
   {  
       char       buffer[BUFSIZ];  
       size_t     osize, nsize;  
       FILE       *str;  
       const char *filename;  
       int        count;  
     
       //setlocale(LC_ALL, "");  
       //bindtextdomain(PACKAGE, LOCALEDIR);  
       //textdomain(PACKAGE);  
     
       if (argc != 2) {  
       fprintf(stderr, _("Usage: tailf logfile\n"));  
       exit(1);  
       }  
     
       filename = argv[1];  
     
       tailf(filename, 10);  
     
       for (osize = filesize(filename);;) {  
       nsize = filesize(filename);  
       if (nsize != osize) {  
           if (!(str = fopen(filename, "r"))) {  
           fprintf(stderr, _("Cannot open \"%s\" for read\n"), filename);  
           perror(argv[0]);  
           exit(1);  
           }  
           if (!fseek(str, osize, SEEK_SET))  
                   while ((count = fread(buffer, 1, sizeof(buffer), str)) > 0)  
                       fwrite(buffer, 1, count, stdout);  
           fflush(stdout);  
           fclose(str);  
           osize = nsize;  
       }  
       usleep(250000);     /* 250mS */  
       }  
       return 0;  
   }
   ```

2. 第二步：首先确保当前目录在/usr/local下，如果不在该目录下，请使用cd命令切换到/usr/local。然后编译c语言程序：

   ```shell
   gcc -o /usr/bin/tailf tailf.c
   ```

   出现提示信息表示当前系统中没有gcc编译器，需要安装，输入y表示同意安装，再有提示，则继续输入y即可：

   ![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222124136.png)

3. 第三步：测试tailf命令是否可用，直接输入tailf会出现以下提示，表示tailf命令可以使用了：

   ![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222124206.png)

tailf命令和"`tail -f`"一个效果，都是用来实时监控文件变动的。只不过tailf是专业的只负责监控日志文件变化的一个命令。

**测试**：

- 日志文件内容：

  ```shell
  日志信息第1行
  日志信息第2行
  日志信息第3行
  日志信息第4行
  日志信息第5行
  日志信息第6行
  日志信息第7行
  日志信息第8行
  日志信息第10行
  日志信息第11行
  日志信息第12行
  日志信息第13行
  日志信息第14行
  日志信息第15行
  日志信息第16行
  日志信息第17行
  日志信息第18行
  日志信息第19行
  日志信息第20行
  ```

- 执行以下命令：

  ```shell
  tailf localhost.log
  ```

  执行结果：

  ![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222125683.png)

- 再开启一个新的命令窗口，然后向日志文件中追加内容：

  ![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222125323.png)

- 这时可以看到tailf命令窗口如下：

  ![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222125042.png)

## 文件权限

Linux为了保证系统中每个文件的安全，引入了文件权限机制。针对于系统中的每一个文件Linux都可以提供精确的权限控制。它可以做到不同的用户对同一个文件具有不同的操作权利。

通常权利包括以下3个：

- 读的权利 (Read，简称r)
- 写的权利 (Write，简称w)
- 执行的权利 (eXecute，简称x)

具体的权限值：`rwx` (读、写、执行)。

不同的用户对同一个文件可以有不同的权限中不同的用户包括3类用户：

- 文件拥有者 (User，简称U)：该文件的创建人
- 同组用户 (Group，简称G)：和创建人在同一组的用户
- 其他组用户 (Other，简称O)：和创建人不在同一组的用户

这就是非常著名的UGO模型。也就是说一个文件的权限包括三组：

- 第一组U：可以给文件的创建者设置rwx权限。
- 第二组G：可以给文件创建者的同组人员设置rwx权限。
- 第三组O：可以给和文件创建者不在同一组的人员设置rwx权限。

### 查看文件权限

采用“ls -l”命令可以查看文件的具体权限：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222147656.png)

权限信息：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222147241.png)

每一个文件或目录采用`ls -l`查看之后，第一个字段描述了文件类型+文件的权限。第一个字段共10个字符：

- 第1个字符：代表文件的类型，`-` 代表文件，`d`代表目录

  其实Linux中文件的类型有7种：

  - `-` 代表普通文件

  - `d` 代表目录

  - `l` 代表链接 (软链接：快捷方式)

  - `b` 块设备 (硬盘，软盘等存储设备)

  - `c` 字符设备 (通常以字节流的方式访问)

  - `p` 管道文件 (主要用于进程间通讯)

  - `s` 套接字文件 (主要用于网络通讯)

- 第2,3,4个字符：代表文件创建者对该文件的权限。

- 第5,6,7个字符：代表与文件创建者在同一组的用户对该文件的权限。

- 第8,9,10 个字符：代表其他组人员对该文件的权限。

关于文件权限的9个字符中包含四种字符，分别是：`r`、`w`、`x`、`-`：

- `r`：读权限

- `w`：写权限

- `x`：执行权限

- `-`：无权限

### 基于UGO设置文件权限

修改权限的命令是chmod。

采用UGO方式修改权限的话语法：

- 给同组人员添加写权限：

  ```shell
  chmod g+w Hello.java
  ```

- 给同组人员和其他组人员添加写权限

  ```shell
  chmod g+w, o+w Hello.java
  ```

- 删除同组人员和其他组人员写的权限：

  ```shell
  chmod g-w, o-w Hello.java
  ```

查看HelloWorld.java文件的权限：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222210268.png)

- 文件拥有者：读和写
- 同组人员：读
- 其他组人员：读

将文件拥有者的写权限删除：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222210240.png)

尝试使用vim命令编辑HelloWorld.java文件，当你使用vim编辑时：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222210872.png)

发现该文件是只读的，不支持编辑。

再把写的权限加上：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222210297.png)

再使用vim命令打开该文件：

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222211021.png)

可以看到，这个时候文件可以编辑了。

**注意**：在测试同组人员的权限时，一定要注意创建者创建文件之后，文件所对应的组是否修改了。怎么修改文件所属组：`chgrp dev Test.java`（将Test.java文件所属组修改为dev）

### 基于421设置文件权限

421采用数字来表示不同的权限。

- 4代表读
- 2代表写
- 1代表执行

例如：如果让一个用户读、写、执行权限都有的话，就是4 + 2 + 1 = 7，那么7这个数字就代表rwx的权限都具备。如果是5就表示4+1的组合，表示有r和x的权限。如果是6就表示4+2的组合，表示有r和w的权限。如果是0就表示无任何权限。

通过421这几个数字的不同组合来表示不同的权限：

- 0：无权限
- 1：x
- 4：r
- 5：r + x
- 6：r + w
- 7：r + w + x

也就是说一共6个数字：0 1 4 5 6 7

采用421方式设置权限语法：

```shell
chmod 三个数字 文件名
```

例如：

```shell
chmod 755 HelloWorld.java
```

第一个数字7是文件拥有者的权限，第二个数字5是同组人员的权限，第三个数字5是其他组人员的权限。

也就是说文件拥有者的权限是rwx，同组人员是r-x，其他组人员是：r-x

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222212261.png)

再如：

```shell
chmod 700 HelloWorld.java
```

表示文件拥有者权限：rwx，同组人员无权限，其他组人员无权限

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222212101.png)

### chown修改文件拥有者

在 Linux 中，可以使用 chown 命令来修改指定文件或目录的拥有者和所属组。

chown 命令的基本语法：

```shell
chown [选项]... [所有者][:[所属组]] 文件...
```

其中，所有者 和 所属组 可以是用户名或用户 ID、组名或组 ID，如果省略 : 和 所属组，则默认为修改文件的所有者。

常用选项：`-R`：递归修改，包括子目录和文件。

将 /home/user/file.txt 文件的所有者修改为 root 用户，可以使用如下命令：

```shell
sudo chown root /home/user/file.txt
```

将 /home/user/dir/ 目录及其子目录和文件的所有者都修改为 userA 用户，所属组修改为 groupA 组，可以使用如下命令：

```shell
sudo chown -R userA:groupA /home/user/dir/
```

**注意**：在使用 chown 命令时，需要有足够的权限才能修改文件或目录的拥有者和所属组。一般需要使用 sudo 命令或使用具有相应权限的用户来执行。
