# IO流

## 概述

IO流指的是：程序中数据的流动。数据可以从内存流动到硬盘，也可以从硬盘流动到内存。

Java中IO流最基本的作用是：**完成文件的读和写**，Java中已经将io流实现了，在java.io包下，可以直接使用。

**IO流的分类**：

- **根据数据流向**：输入和输出是相对于内存而言的。

  - **输入流**：从硬盘到内存 (输入又叫做读：read)

  - **输出流**：从内存到硬盘 (输出又叫做写：write)

- **根据读写数据形式**：

  - **字节流**：一次读取一个字节。适合读取非文本数据。例如图片、声音、视频等文件。（当然字节流是万能的。什么都可以读和写。）

  - **字符流**：一次读取一个字符。只适合读取普通文本。不适合读取二进制文件。因为字符流统一使用Unicode编码，可以避免出现编码混乱的问题。

  **注意**：Java的所有IO流中凡是以Stream结尾的都是字节流。凡是以Reader和Writer结尾的都是字符流。

- **根据流在IO操作中的作用和实现方式**：

  - **节点流**：节点流负责数据源和数据目的地的连接，是IO中最基本的组成部分。

  - **处理流**：处理流对节点流进行装饰/包装，提供更多高级处理操作，方便用户进行数据处理。

**IO流的体系结构**：字节输入流 (InputStream)、字节输出流 (OutputStream)、字符输入流 (Reader)、字符输出流(Writer) 4个流都是抽象类，是所有IO流的四大头领，所有的流都实现了Closeable接口，都有`close()`方法，流用完要关闭。所有的输出流都实现了Flushable接口，都有`flush()`方法，flush方法的作用是，将缓存清空，全部写出。养成好习惯，以防数据丢失。

![](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/img/202412161652275.png)

## 输入输出标准化过程

### 输入过程

1. 创建File类的对象，指明读取的数据的来源 (要求此文件一定要存在)

2. 创建相应的输入流，将File类的对象作为参数，传入流的构造器中
3. 具体的读入过程，创建相应的`byte[]` 或 `char[]`
4. 关闭流资源

**说明**：处理异常仍然应该使用try-catch-finally

### 输出过程

1. 创建File类的对象，指明写出的数据的位置。（不要求此文件一定要存在）
2. 创建相应的输入流，将File类的对象作为参数，传入流的构造器中
3. 具体的写出过程：`write(char[] cbuf/byte[] buffer,0,len)`
4. 关闭流资源

**说明**：处理异常仍然应该使用try-catch-finally

## 路径

**相对路径**：相较于某个路径下，指明的路径
**绝对路径**：包含盘符在内的文件或文件目录路径

**说明**：

- IDEA中：如果开发中使用JUnit中的单元测试方法测试，相对路径即为当前Module下。如果开发中使用main()方法测试，相对路径即为当前的Project下。
- Eclipse中：不管使用单元测试方法还是main()方法测试，相对路径都是当前的Project下。

**路径分隔符**：

- windows：`\`
- unix：`/`

## File类

File 类是 java.io 包中唯一代表磁盘文件本身的对象，也就是说，如果希望在程序中操作文件和目录，则都可以通过 File 类来完成。File 类定义了一些方法来操作文件，如新建、删除、重命名文件和目录等。

File 类不能访问文件内容本身，如果需要访问文件内容本身，则需要使用输入/输出流。

**构造方法**：使用任意一个构造方法都可以创建一个 File 对象，然后调用其提供的方法对文件进行操作。

1. `File(String path)`：如果 path 是实际存在的路径，则该 File 对象表示的是目录；如果 path 是文件名，则该 File 对象表示的是文件。
2. `File(String path, String name)`：path 是路径名，name 是文件名。
3. `File(File dir, String name)`：dir 是路径对象，name 是文件名。

**File常用方法**：

- `public String getAbsolutePath()`：获取绝对路径

- `public String getPath()`：获取路径

- `public String getName()`：获取文件名

- `public String getParent()`：获取上层文件目录路径。若无，返回null

- `public long length()`：获取文件长度（即：字节数）。不能获取目录的长度

- `public long lastModified()`：获取最后一次的修改时间，毫秒值 

- 如下的两个方法适用于文件目录

- `public String[] list()`：获取指定目录下的所有文件或者文件目录的名称数组。

- `public File[] listFiles()`：获取指定目录下的所有文件或者文件目录的File数据

- `public boolean renameTo(File dest)`：把文件重命名为指定的文件路径

  比如：`file1.renameTo(file2)`为例：要保证返回true，需要file1在硬盘中是存在的，且file2在硬盘中是不存在的。

判断功能的方法：

- `public boolean isDirectory()`：判断是否为文件目录
- `public boolean isFile()`：判断是否为文件
- `public boolean exists()`：判断是否存在
- `public boolean canRead()`：判断是否可读
- `public boolean canWrite()`：判断是否可写
- `public boolean isHidden()`：判断是否隐藏
- `public boolean creatNewFile()`：创建文件。若文件存在，则不创建，返回false
- `public boolean mkdir()`：创建文件目录。如果此文件目录存在或者此文件目录的上层目录不存在，就不创建了。
- `public boolean mkdirs()`：创建文件目录。如果上层文件目录不存在，一并创建。
- `public boolean delete()`：删除文件或者文件目录(只能删除空目录)。

**注意**：

- 如果创建文件或者文件目录时没有写盘符路径，那么，默认在项目路径下
- java中的删除不走回收站
- 要删除一个文件目录，请注意该文件目录内不能包含文件或者文件目录

在表 1 中列出了 File 类的常用方法及说明。

| 方法名称                      | 说明                                                         |
| ----------------------------- | ------------------------------------------------------------ |
|                               |                                                              |
| boolean canWrite()            | 测试应用程序是否能写当前文件                                 |
| boolean delete()              | 删除当前对象指定的文件                                       |
| boolean exists()              | 测试当前 File 是否存在                                       |
| String getAbsolutePath()      | 返回由该对象表示的文件的绝对路径名                           |
| String getName()              | 返回表示当前对象的文件名或路径名（如果是路径，则返回最后一级子路径名） |
| String getParent()            | 返回当前 File 对象所对应目录（最后一级子目录）的父目录名     |
| boolean isAbsolute()          | 测试当前 File 对象表示的文件是否为一个绝对路径名。该方法消除了不同平台的差异，可以直接判断 file 对象是否为绝对路径。在 UNIX/Linux/BSD 等系统上，如果路径名开头是一条斜线`/`，则表明该 File 对象对应一个绝对路径；在 Windows 等系统上，如果路径开头是盘符，则说明它是一个绝对路径。 |
| boolean isDirectory()         | 测试当前 File 对象表示的文件是否为一个路径                   |
| boolean isFile()              | 测试当前 File 对象表示的文件是否为一个“普通”文件             |
| long lastModified()           | 返回当前 File 对象表示的文件最后修改的时间                   |
| long length()                 | 返回当前 File 对象表示的文件长度                             |
| String[] list()               | 返回当前 File 对象指定的路径文件列表                         |
| String[] list(FilenameFilter) | 返回当前 File 对象指定的目录中满足指定过滤器的文件列表       |
| boolean mkdir()               | 创建一个目录，它的路径名由当前 File 对象指定                 |
| boolean mkdirs()              | 创建一个目录，它的路径名由当前 File 对象指定                 |
| boolean renameTo(File)        | 将当前 File 对象指定的文件更名为给定参数 File 指定的路径名   |


File 类中有以下两个常用常量：

- `public static final String pathSeparator`：指的是分隔连续多个路径字符串的分隔符，Windows 下指`;`。例如 `java -cp test.jar;abc.jar HelloWorld`。
- `public static final String separator`：用来分隔同一个路径字符串中的目录的，Windows 下指`/`。例如 `C:/Program Files/Common Files`。

**注意**：可以看到 File 类的常量定义的命名规则不符合标准命名规则，常量名没有全部大写，这是因为 Java 的发展经过了一段相当长的时间，而命名规范也是逐步形成的，File 类出现较早，所以当时并没有对命名规范有严格的要求，这些都属于 Java 的历史遗留问题。

> Windows 的路径分隔符使用反斜线“\”，而 Java 程序中的反斜线表示转义字符，所以如果需要在 Windows 的路径下包括反斜线，则应该使用两条反斜线或直接使用斜线“/”也可以。Java 程序支持将斜线当成平台无关的路径分隔符。

假设在 Windows 操作系统中有一文件 `D:\javaspace\hello.java`，在 Java 中使用的时候，其路径的写法应该为 `D:/javaspace/hello.java` 或者 `D:\\javaspace\\hello.java`。

获取文件属性

在 Java 中获取文件属性信息的第一步是先创建一个 File 类对象并指向一个已存在的文件， 然后调用表 1 中的方法进行操作。

假设有一个文件位于 `C:\windows\notepad.exe`。编写 Java 程序获取并显示该文件的长度、是否可写、最后修改日期以及文件路径等属性信息。实现代码如下：

```java
public class Test02 {    
    public static void main(String[] args) {        
        String path = "C:/windows/"; // 指定文件所在的目录        
        File f = new File(path, "notepad.exe"); // 建立File变量,并设定由f变量引用
        System.out.println("C:\\windows\\notepad.exe文件信息如下：");        
        System.out.println("============================================");        
        System.out.println("文件长度：" + f.length() + "字节");        
        System.out.println("文件或者目录：" + (f.isFile() ? "是文件" : "不是文件"));       
        System.out.println("文件或者目录：" + (f.isDirectory() ? "是目录" : "不是目录")); 
        System.out.println("是否可读：" + (f.canRead() ? "可读取" : "不可读取"));
        System.out.println("是否可写：" + (f.canWrite() ? "可写入" : "不可写入"));       
        System.out.println("是否隐藏：" + (f.isHidden() ? "是隐藏文件" : "不是隐藏文件")); 
        System.out.println("最后修改日期：" + new Date(f.lastModified()));        
        System.out.println("文件名称：" + f.getName());        
        System.out.println("文件路径：" + f.getPath());        
        System.out.println("绝对路径：" + f.getAbsolutePath());    
    }
}
```

在上述代码中 File 类构造方法的第一个参数指定文件所在位置，这里使用`C:/`作为文件的实际路径；第二个参数指定文件名称。创建的 File 类对象为 f，然后通过 f 调用方法获取相应的属性，最终运行效果如下所示。

```
C:\windows\notepad.exe文件信息如下：
============================================
文件长度：193536字节
文件或者目录：是文件
文件或者目录：不是目录
是否可读：可读取
是否可写：可写入
是否隐藏：不是隐藏文件
最后修改日期：Mon Dec 28 02:55:19 CST 2016
文件名称：notepad.exe
文件路径：C:\windows\notepad.exe
绝对路径：C:\windows\notepad.exe
```

创建和删除文件

File 类不仅可以获取已知文件的属性信息，还可以在指定路径创建文件，以及删除一个文件。创建文件需要调用 createNewFile() 方法，删除文件需要调用 delete() 方法。无论是创建还是删除文件通常都先调用 exists() 方法判断文件是否存在。

假设要在 C 盘上创建一个 test.txt 文件，程序启动时会检测该文件是否存在，如果不存在则创建；如果存在则删除它再创建。

实现代码如下：

```java
public class Test03 {    
    public static void main(String[] args) throws IOException {        
        File f = new File("C:\\test.txt"); // 创建指向文件的File对象        
        if (f.exists()) // 判断文件是否存在        
        {            
            f.delete(); // 存在则先删除        
        }        
        f.createNewFile(); // 再创建    
    }
}
```

运行程序之后可以发现，在 C 盘中已经创建好了 test.txt 文件。但是如果在不同的操作系统中，路径的分隔符是不一样的，例如：

- Windows 中使用反斜杠`\`表示目录的分隔符。
- Linux 中使用正斜杠`/`表示目录的分隔符。


那么既然 Java 程序本身具有可移植性的特点，则在编写路径时最好可以根据程序所在的操作系统自动使用符合本地操作系统要求的分隔符，这样才能达到可移植性的目的。要实现这样的功能，则就需要使用 File 类中提供的两个常量。

代码修改如下：

```
public static void main(String[] args) throws IOException {    String path = "C:" + File.separator + "test.txt"; // 拼凑出可以适应操作系统的路径    File f = new File(path);    if (f.exists()) // 判断文件是否存在    {        f.delete(); // 存在则先删除    }    f.createNewFile(); // 再创建}
```

程序的运行结果和前面程序一样，但是此时的程序可以在任意的操作系统中使用。

注意：在操作文件时一定要使用 File.separator 表示分隔符。在程序的开发中，往往会使用 Windows 开发环境，因为在 Windows 操作系统中支持的开发工具较多，使用方便，而在程序发布时往往是直接在 Linux 或其它操作系统上部署，所以这时如果不使用 File.separator，则程序运行就有可能存在问题。关于这一点我们在以后的开发中一定要有所警惕。

创建和删除目录

File 类除了对文件的创建和删除外，还可以创建和删除目录。创建目录需要调用 mkdir() 方法，删除目录需要调用 delete() 方法。无论是创建还是删除目录都可以调用 exists() 方法判断目录是否存在。

编写一个程序判断 C 盘根目录下是否存在 config 目录，如果存在则先删除再创建。实现代码：

```java
public class Test04 {    
    public static void main(String[] args) {
        String path = "C:/config/";  // 指定目录位置
        File f = new File(path); // 创建File对象
        if (f.exists()) {
            f.delete();
        }        
        f.mkdir(); // 创建目录    
    }
}
```

遍历目录

通过遍历目录可以在指定的目录中查找文件，或者显示所有的文件列表。

File 类的 `list()` 方法提供了遍历目录功能，该方法有如下两种重载形式：

1. `String[] list()`：该方法表示返回由 File 对象表示目录中所有文件和子目录名称组成的字符串数组，如果调用的 File 对象不是目录，则返回 null。

提示：list() 方法返回的数组中仅包含文件名称，而不包含路径。但不保证所得数组中的相同字符串将以特定顺序出现，特别是不保证它们按字母顺序出现。

2. `String[] list(FilenameFilter filter)`：该方法的作用与 list() 方法相同，不同的是返回数组中仅包含符合 filter 过滤器的文件和目录，如果 filter 为 null，则接受所有名称。

假设要遍历 C 盘根目录下的所有文件和目录，并显示文件或目录名称、类型及大小。使用 `list()` 方法的实现代码如下：

```java
public class Test05 {    
    public static void main(String[] args) {        
        File f = new File("C:/"); // 建立File变量,并设定由f变量变数引用 
        System.out.println("文件名称\t\t文件类型\t\t文件大小");        
        System.out.println("===================================================");        
        String fileList[] = f.list(); // 调用不带参数的list()方法        
        for (int i = 0; i < fileList.length; i++) { 
            // 遍历返回的字符数组            
            System.out.print(fileList[i] + "\t\t");            
            System.out.print((new File("C:/", fileList[i])).isFile() ? "文件" + "\t\t" : "文件夹" + "\t\t");            
            System.out.println((new File("C:/", fileList[i])).length() + "字节");    
        }    
    }
}
```


由于 list() 方法返回的字符数组中仅包含文件名称，因此为了获取文件类型和大小，必须先转换为 File 对象再调用其方法。如下所示的是实例的运行效果：

```
文件名称  文件类型  文件大小
===================================================
$Recycle.Bin  文件夹  4096字节
Documents and Settings  文件夹  0字节
Download  文件夹  0字节
DRIVERS  文件夹  0字节
FibocomLog  文件夹  0字节
Gateface  文件夹  0字节
GFPageCache  文件夹  0字节
hiberfil.sys  文件  3375026176字节
Intel  文件夹  0字节
KuGou  文件夹  0字节
logs  文件夹  0字节
msdia80.dll  文件  904704字节
MSOCache  文件夹  0字节
MyDownloads  文件夹  0字节
MyDrivers  文件夹  0字节
news.template  文件  417字节
NVIDIA  文件夹  0字节
OneDriveTemp  文件夹  0字节
opt  文件夹  0字节
pagefile.sys  文件  6442450944字节
PerfLogs  文件夹  0字节
Program Files  文件夹  12288字节
Program Files (x86)  文件夹  8192字节
ProgramData  文件夹  12288字节
QMDownload  文件夹  0字节
Recovery  文件夹  0字节
swapfile.sys  文件  268435456字节
System Volume Information  文件夹  12288字节
Users  文件夹  4096字节
Windows  文件夹  16384字节
```

假设希望只列出目录下的某些文件，这就需要调用带过滤器参数的 list() 方法。首先需要创建文件过滤器，该过滤器必须实现 `java.io.FilenameFilter` 接口，并在 accept() 方法中指定允许的文件类型。

如下所示为允许 SYS、TXT 和 BAK 格式文件的过滤器实现代码：

```
public class ImageFilter implements FilenameFilter {    // 实现 FilenameFilter 接口    @Override    public boolean accept(File dir, String name) {        // 指定允许的文件类型        return name.endsWith(".sys") || name.endsWith(".txt") || name.endsWith(".bak");    }}
```

上述代码创建的过滤器名称为 ImageFilter，接下来只需要将该名称传递给 list() 方法即可实现筛选文件。如下所示为修改后的 list() 方法，其他代码与例 4 相同，这里不再重复。

String fileList[] = f.list(new ImageFilter());


再次运行程序，遍历结果如下所示：

```
文件名称        文件类型        文件大小
===================================================
offline_FtnInfo.txt        文件        296字节
pagefile.sys        文件        8436592640字节
```

## 文件输入输出流

| 抽象基类     | 节点流（或文件流） | 缓冲流（处理流的一种）                           |
| ------------ | ------------------ | ------------------------------------------------ |
| InputStream  | FileInputStream    | BufferedInputStream(read(byte[] buffer))         |
| OutputStream | FileOutputStream   | BufferedOutputStream(write(byte[] buffer,0,len)) |
| Reader       | FileReader         | BufferedReader(read(char[] cbuf) / readLine() )  |
| Writer       | FileWriter         | BufferedWriter(write(char[] cbuf,0,len)/flush()) |

### 文件字节流

使用FileInputStream和FileOutputStream完成文件的复制。

```java
public class FileIOTest {
    public static void main(String[] args) {
        long start = System.currentTimeMillis();
        copyFile("D:\\test.txt","D:\\test2.txt");
        long end = System.currentTimeMillis();
        //640
        System.out.println(end - start);
    }
    public static void copyFile(String srcPath, String destPath){
        FileInputStream fi = null;
        FileOutputStream fo = null;
        int len;
        byte[] bytes = new byte[1024];
        try{
            fi = new FileInputStream(srcPath);
            fo = new FileOutputStream(destPath);
            //读入
            while((len = fi.read(bytes))!=-1){
                //写出
                fo.write(bytes,0,len);
            }
            fo.flush();
        }catch(IOException e){
            e.printStackTrace();
        }finally{
            //流关闭
            if (fi != null) {
                try {
                    fi.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            if (fo != null) {
                try {
                    fo.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}
```

#### FileInputStream

FileInputStream文件字节输入流，可以读取任何文件。使用FileInputStream读取的文件中有中文时，有可能读取到中文某个汉字的一半，在将`byte[]`数组转换为String时可能出现乱码问题，因此FileInputStream不太适合读取纯文本。

**常用构造方法**：

- `FileInputStream(File file)`：创建一个文件字节输入流对象，参数是File类

  ```java
  FileInputStream in = null;
  try {
      File file = new File("D:\\test.txt");
  	//创建一个文件字节输入流
      in = new FileInputStream(file);  
  } catch (IOException e) {
      e.printStackTrace();
  } finally {
  	//关闭流
  }
  ```

- `FileInputStream(String name)`：创建一个文件字节输入流对象，参数是文件的路径

  ```java
  FileInputStream in = null;
  try {
  	//创建一个文件字节输入流
      in = new FileInputStream("D:\\test.txt");
  } catch (IOException e) {
      e.printStackTrace();
  } finally {
  	//关闭流
  }
  ```

**常用方法**：

- `int read();`：从文件读取一个字节(8个二进制位)，返回值读取到的字节本身，如果读不到任何数据返回-1

  ```java
  // 读取文件内容的第一个字节
  int read = in.read();
  System.out.println("第一次读到的字节："+read);
  ```

  ```java
  // 读取文件内容的所有字节
  int read = 0;
  while((read = in.read()) != -1){
      System.out.println("读到的字节："+read);
  }
  ```

- `int read(byte[] b);`：一次读取多个字节，如果文件内容足够多，则一次最多读取b.length个字节。返回值是读取到字节总数。如果没有读取到任何数据，则返回 -1

  ```java
  // 读取文件内容的两个字节数量
  byte[] bytes = new byte[2];
  int read = in.read(bytes);
  System.out.println("读到字节的数量：" + read);
  System.out.println("读到的字节内容：" + new String(bytes, 0, read));
  ```

  ```java
  // 读取文件内容的所有字节
  byte[] bytes = new byte[2];
  while ((read = in.read(bytes)) != -1){
      System.out.println("读到的字节内容：" + new String(bytes, 0, read));
  }
  ```

- `int read(byte[] b, int off, int len);`：读到数据后向byte数组中存放时，从off开始存放，最多读取len个字节。读取不到任何数据则返回 -1

  ```java
  byte[] bytes = new byte[2];
  int read = in.read(bytes, 0, 3);
  System.out.println("读到的字节内容：" + new String(bytes, 0, read));
  ```

- `long skip(long n);`：跳过n个字节

  ```java
  //跳过1个字节
  in.skip(1);
  ```

- `int available();`：返回流中剩余的估计字节数量

  ```java
  System.out.println("剩余未读字节数量："+in.available());
  ```

- `void close()`：关闭流

  ```java
  FileInputStream in = null;
  try {
   // ...            
  } catch (IOException e) {
      e.printStackTrace();
  } finally {
      // 关闭之前进行空处理
      if (in != null) {
          try {
              // 处理异常
              in.close();
          } catch (IOException e) {
              e.printStackTrace();
          }
      }
  }
  ```

#### FileOutputStream

常用构造方法：FileOutputStream(String name) 创建输出流，先将文件清空，再不断写入。FileOutputStream(String name, boolean append) 创建输出流，在原文件最后面以追加形式不断写入。常用方法：write(int b)	写一个字节void write(byte[] b);  将字节数组中所有数据全部写出void write(byte[] b, int off, int len); 将字节数组的一部分写出void close() 关闭流void flush() 刷新使用FileInputStream和FileOutputStream完成文件的复制。

文件字节输出流 (FileOutputStream)。

**常用构造方法**：

- `FileOutputStream(String name)`：创建文件字节输出流，先将文件清空，再不断写入

  ```java
  FileOutputStream os = null;
  try {
  	//创建一个文件字节输出流
      os = new FileOutputStream("D:\\os.txt");
  } catch (IOException e) {
      e.printStackTrace();
  } finally {
  	//关闭流
  }
  ```

- `FileOutputStream(String name, boolean append)`：创建文件字节输出流，当append为true时，在原文件最后面以追加形式不断写入，当append为false时，会清空原文件的内容写入

  ```java
  FileOutputStream os = null;
  try {
  	//创建一个文件字节输出流
      os = new FileOutputStream("D:\\os.txt",true);
  } catch (IOException e) {
      e.printStackTrace();
  } finally {
  	//关闭流
  }
  ```

- `FileOutputStream(File file)`：创建输出流，先将文件清空，再不断写入

  ```java
  FileOutputStream os = null;
  try {
      File file = new File("D:\\os.txt");
  	//创建一个文件字节输出流
      os = new FileOutputStream(file);
  } catch (IOException e) {
      e.printStackTrace();
  } finally {
  	//关闭流
  }
  ```

- `FileOutputStream(File file, boolean append)`：创建输出流，在原文件最后面以追加形式不断写入

  ```java
  FileOutputStream os = null;
  try {
      File file = new File("D:\\os.txt");
  	//创建一个文件字节输出流
      os = new FileOutputStream(file,true);
  } catch (IOException e) {
      e.printStackTrace();
  } finally {
  	//关闭流
  }
  ```

**常用方法**：

- `write(int b)`：写一个字节

  ```java
  os.write(97);
  ```

- `void write(byte[] b);`：将字节数组中所有数据全部写出

  ```java
  byte[] bytes = "hello world".getBytes();
  os.write(bytes);
  ```

- `void write(byte[] b, int off, int len);`：将字节数组的一部分写出

  ```java
  byte[] bytes = "hello world".getBytes();
  os.write(bytes,0,5);
  ```

- `void close()`：关闭流

  ```java
  FileOutputStream os = null;
  try {
   // ...            
  } catch (IOException e) {
      e.printStackTrace();
  } finally {
      // 关闭之前进行空处理
      if (os != null) {
          try {
              // 处理异常
              os.close();
          } catch (IOException e) {
              e.printStackTrace();
          }
      }
  }
  ```

- `void flush()`：刷新

  ```java
  os.flush();
  ```

### 文件字符流

使用FileReader和FileWriter拷贝普通文本文件。

#### FileReader

文件字符输入流 (FileReader)

**常用构造方法**：

- `FileReader(String fileName)`：创建一个文件字符输入流对象，参数是文件的路径

  ```java
  
  ```

- `FileReader(File file)`：创建一个文件字符输入流对象，参数是file类

  ```java
  FileWriter writer = null;
  try {
      File file = new File("D:/test.txt");
      writer = new FileWriter(file);
  } catch (IOException e) {
      e.printStackTrace();
  } finally {
  	//关闭流
  }
  ```

**常用方法**：

- `int read()`：

  ```java
  
  ```

- `int read(char[] cbuf);`：

  ```java
  
  ```

- `int read(char[] cbuf, int off, int len);`：

  ```java
  
  ```

- `long skip(long n);`：

  ```java
  
  ```

- `void close()`：

  ```java
  
  ```

```java
将FileReaderWriter下的hello.txt文件内容读入到程序中，并输出到控制台。
说明点：
    *read()的理解：返回读入的一个字符。如果达到文件末尾，返回-1
    *异常的处理：为了保证流资源一定可以执行关闭操作。需要使用try-catch-finally处理
    *读入的文件一定要存在，否则就会报FileNotFoundException。
@Test
public void testFileReader1() throws IOException {
    //1.File类的实例化
    File file = new File("hello.txt");
    //2.FileReader流的实例化
    FileReader fr= null;
    fr= new FileReader(file);
    //3.读入的操作
    //read(char[] cbuf):返回每次读入cbuf数组中的字符的个数。如果达到文件末尾，返回-1.
    char[] cbuf = new char[5];
    int len;
    while((len = fr.read(cbuf))!= -1){
        //方式一
        //for (int i = 0; i < len; i++) {
        //    System.out.print(cbuf[i]);
        //}
        //方式二
        String str = new String(cbuf,0,len);
        System.out.print(str);
    }
    //4.资源的关闭
    fr.close();
}
从内存中写出数据到硬盘的文件
说明：
1.输出操作，对应的File可以不存在。
File对应的硬盘中的文件如果不存在，在输出的过程中，会自动创建文件
File对应的硬盘中的文件如果存在：
    如果流使用的构造器是：FileWriter(file，false)/FileWriter(file):对原有文件的覆盖
    如果流使用的构造器是：FileWriter(file,true):不会对原有文件覆盖，而是在原有文件基础上追加内容
```

#### FileWriter

FileWriter文件字符输出流

文件字符输出流

**常用构造方法**：

- `FileWriter(String fileName)`

  ```java
  FileWriter writer = null;
  try {
      writer = new FileWriter("D:/test.txt");
  } catch (IOException e) {
      e.printStackTrace();
  } finally {
  	//关闭流
  }
  ```

- `FileWriter(File file)`

  ```java
  
  ```

- `FileWriter(String fileName, boolean append)`

  ```java
  
  ```

- `FileWriter(File file, boolean append)`

  ```java
  
  ```

**常用方法**：

- `void write(char[] cbuf)`

  ```java
  
  ```

- `void write(char[] cbuf, int off, int len);`

  ```java
  
  ```

- `void write(String str);`

  ```java
  
  ```

- `void write(String str, int off, int len);`

  ```java
  
  ```

- `void flush();`

  ```java
  
  ```

- `void close();`

  ```java
  
  ```

- `Writer append(CharSequence csq, int start, int end)`

  ```java
  
  ```

```java
@Test
public void testFileWriter() throws IOException{
    //1.提供File类的对象，指明写出到的文件
    File file = new File("hello.txt");
    //2.提供FileWriter的对象，用于数据的写出
    FileWriter fw = new FileWriter(file);
    //3.写出的操作
    fw.write("I have a stream!\n");
    fw.write("you need to have a dream!");
    //4.流资源的关闭
    fw.close();
}
```



## 缓冲流

缓冲流BufferedInputStream、BufferedOutputStream（适合读写非普通文本文件）

BufferedReader、BufferedWriter（适合读写普通文本文件。）缓冲流的读写速度快，原理是：在内存中准备了一个缓存。读的时候从缓存中读。写的时候将缓存中的数据一次写出。都是在减少和磁盘的交互次数。如何理解缓冲区？家里盖房子，有一堆砖头要搬在工地100米外，单字节的读取就好比你一个人每次搬一块砖头，从堆砖头的地方搬到工地，这样肯定效率低下。然而聪明的人类会用小推车，每次先搬砖头搬到小车上，再利用小推车运到工地上去，这样你再从小推车上取砖头是不是方便多了呀！这样效率就会大大提高，缓冲流就好比我们的小推车，给数据暂时提供一个可存放的空间。缓冲流都是处理流/包装流。FileInputStream/FileOutputStream是节点流。关闭流只需要关闭最外层的处理流即可，通过源码就可以看到，当关闭处理流时，底层节点流也会关闭。输出效率是如何提高的？在缓冲区中先将字符数据存储起来，当缓冲区达到一定大小或者需要刷新缓冲区时，再将数据一次性输出到目标设备。输入效率是如何提高的？ read()方法从缓冲区中读取数据。当缓冲区中的数据不足时，它会自动从底层输入流中读取一定大小的数据，并将数据存储到缓冲区中。大部分情况下，我们调用read()方法时，都是从缓冲区中读取，而不需要和硬盘交互。可以编写拷贝的程序测试一下缓冲流的效率是否提高了！缓冲流的特有方法（输入流）：以下两个方法的作用是允许我们在读取数据流时回退到原来的位置（重复读取数据时用）void mark(int readAheadLimit); 标记位置（在Java21版本中，参数无意义。低版本JDK中参数表示在标记处最多可以读取的字符数量，如果你读取的字符数超出的上限值，则调用reset()方法时出现IOException。）void reset(); 重新回到上一次标记的位置这两个方法有先后顺序：先mark再reset，另外这两个方法不是在所有流中都能用。有些流中有这个方法，但是不能用。

### 缓冲字符流

BufferedReader

BufferedWriter

```java
public class BufferedReaderWriterTest {
    @Test
    public void testBufferedReaderWriter(){
        long start = System.currentTimeMillis();
        copyFile("hello.txt","hlo.txt");
        long end = System.currentTimeMillis();
        System.out.println(end - start);//16
    }
    public void copyFile(String srcPath,String destPath){
        BufferedReader br = null;
        BufferedWriter bw = null;
        int len;
        char[] cbuf = new char[1024];
        try{
            br = new BufferedReader(new FileReader(new  File(srcPath)));//缩写
            bw = new BufferedWriter(new FileWriter(new File(destPath)));
            while((len = br.read(cbuf))!=-1){
                bw.write(cbuf,0,len);
            }
        }catch(IOException e){
            e.printStackTrace();
        }finally{
           ...//流关闭
        }
    }
}
```

### 缓冲字节流

BufferedInputStream&BufferedOutputStream

BufferedInputStream

BufferedOutputStream

```java
public class BufferedIOStreamTest {
    @Test
    public void testBufferedStream() {
        long start = System.currentTimeMillis();
        copyFile("D:\\Desktop\\JAVA 8实战.pdf","D:\\Desktop\\JAVA 8 2实战.pdf");
        long end = System.currentTimeMillis();
        System.out.println(end - start);//140
    }
    public void copyFile(String srcPath,String destPath){
        FileInputStream fis = null;
        FileOutputStream fos = null;
        BufferedInputStream bis = null;
        BufferedOutputStream bos = null;
        int len;
        byte[] bytes = new byte[1024];
        try{
            fis = new FileInputStream(srcPath);
            fos = new FileOutputStream(destPath);
            bis = new BufferedInputStream(fis);
            bos = new BufferedOutputStream(fos);
            while((len = bis.read(bytes))!=-1){
                bos.write(bytes,0,len);
                //bos.flush();//刷新缓冲区
            }
        }catch(IOException e){
            e.printStackTrace();
        }finally{
            ...//流关闭
        }
    }
}
```

6.注意点：
①如果不声明全局常量serialVersionUID,系统会自动声明生成一个针对于当前类的serialVersionUID。
如果修改此类的话，会导致serialVersionUID变化，进而导致反序列化时，出现InvalidClassException异常。
②类中的属性如果声明为transient或static,则不会实现序列化。

## 转换流

### InputStreamReader

InputStreamReader（主要解决读的乱码问题）InputStreamReader为转换流，属于字符流。作用是将文件中的字节转换为程序中的字符。转换过程是一个解码的过程。常用的构造方法：InputStreamReader(InputStream in, String charsetName) // 指定字符集InputStreamReader(InputStream in) // 采用平台默认字符集乱码是如何产生的？文件的字符集和构造方法上指定的字符集不一致。FileReader是InputStreamReader的子类。本质上以下代码是一样的：Reader reader = new InputStreamReader(new FileInputStream(“file.txt”)); //采用平台默认字符集Reader reader = new FileReader(“file.txt”); //采用平台默认字符集因此FileReader的出现简化了代码的编写。以下代码本质上也是一样的：Reader reader = new InputStreamReader(new FileInputStream(“file.txt”), “GBK”);Reader reader = new FileReader("e:/file1.txt", Charset.forName("GBK"));

### OutputStreamWriter

OutputStreamWriter（主要解决写的乱码问题）OutputStreamWriter是转换流，属于字符流。作用是将程序中的字符转换为文件中的字节。这个过程是一个编码的过程。常用构造方法：OutputStreamWriter(OutputStream out, String charsetName) // 使用指定的字符集OutputStreamWriter(OutputStream out) //采用平台默认字符集乱码是如何产生的？文件的字符集与程序中构造方法上的字符集不一致。FileWriter是OutputStreamWriter的子类。以下代码本质上是一样的：Writer writer = new OutputStreamWriter(new FileOutputStream(“file1.txt”)); // 采用平台默认字符集Writer writer = new FileWriter(“file1.txt”); // 采用平台默认字符集因此FileWriter的出现，简化了代码。以下代码本质上也是一样的：Writer writer = new OutputStreamWriter(new FileOutputStream(“file1.txt”), “GBK”);Writer writer = new FileWriter(“file1.txt”, Charset.forName(“GBK”));

![](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/%E5%9B%BE%E7%89%871-17343997989653.png)

## 打印流

### PrintStream

### PrintWriter

## 对象流

### ObjectInputStream

### ObjectOutputStream

## 数据流

### DataInputStream

### DataOutputStream

## 字节数组

### ByteArrayInputStream

### ByteArrayOutputStream

字节数组流（内存流）ByteArrayInputStream和ByteArrayOutputStream都是内存操作流，不需要打开和关闭文件等操作。这些流是非常常用的，可以将它们看作开发中的常用工具，能够方便地读写字节数组、图像数据等内存中的数据。ByteArrayInputStream和ByteArrayOutputStream都是节点流。ByteArrayOutputStream，将数据写入到内存中的字节数组当中。ByteArrayInputStream，读取内存中某个字节数组中的数据。

## 线程流

### PipedInputStream

### PipedOutputStream

## 打印流

### PrintWriter

打印流 (PrintWriter，字符形式) 

注意：PrintWriter使用时需要手动调用`flush()`方法进行刷新。比PrintStream多一个构造方法，PrintStream参数只能是OutputStream类型，但PrintWriter参数可以是OutputStream，也可以是Writer。

常用方法：

- print(Type x) println(Type x)同样，也可以支持格式化输出，调用printf方法。

## 压缩和解压缩流

### GZIPInputStream

GZIPInputStream，解压缩

使用GZIPInputStream可以将 `.gz` 格式的压缩文件解压。

核心代码：

```java
GZIPInputStream gzip = new GZIPInputStream(new FileInputStream("d:/test.txt.gz"));
FileOutputStream out = new FileOutputStream("d:/test.txt");
byte[] bytes = new byte[1024];
int readCount = 0;
while((readCount = gzip.read(bytes)) != -1){
    out.write(bytes, 0, readCount);
}
//关闭流
out.close();
gzip.close();
```

### GZIPOutputStream

压缩(GZIPOutputStream)：使用GZIPOutputStream可以将文件制作为压缩文件，压缩文件的格式为 .gz 格式。

**注意**：实际上所有的输出流中，只有带有缓冲区的流才需要手动刷新，节点流是不需要手动刷新的，节点流在关闭的时候会自动刷新。

核心代码：

```java
// 被压缩的文件：test.txt
FileInputStream fis = new FileInputStream("d:/test.txt");
// 压缩后的文件接下来就是边读边写：
GZIPOutputStream gzos = new GZIPOutputStream(new FileOutputStream("d:/test.txt.gz"));
byte[] buffer = new byte[1024];
int length;
while ((length = fis.read(buffer)) > 0) {
    gzos.write(buffer, 0, length);
}
// 在压缩完所有数据之后调用finish()方法，以确保所有未压缩的数据都被刷新到输出流中，并生成必要的 Gzip 结束标记，标志着压缩数据的结束。
gzos.finish();
//关闭流
fis.close();
gzos.close();
```

## try-with-resources

Java的新特性：try-with-resources(资源自动关闭)，凡是实现了AutoCloseable接口的流都可以使用try-with-resources都会自动关闭

```java
public class TryWithResources {
    public static void main(String[] args) {
        try (FileInputStream fis = new FileInputStream("d:/test.txt");
             FileOutputStream fos = new FileOutputStream("d:/test2.txt")) {
            int len;
            byte[] bytes = new byte[1024];

            //读入
            while ((len = fis.read(bytes)) != -1) {
                //写出
                fos.write(bytes, 0, len);
            }
            fos.flush();
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
```

