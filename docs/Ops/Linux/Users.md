# Linux 用户管理

Linux系统中超级用户是root，通过超级用户root可以创建其它的普通用户，Linux是一个支持多用户的操作系统。

在实际使用中，一般会分配给开发人员专属的账户，这个账户只拥有部分权限，如果权限太高，操作的范围过大，一些误操作可能导致系统崩溃，或者数据不安全，所以多用户机制就是一种系统安全策略。

在Linux系统中任何一个用户都对应：一个用户名 + 一个口令。用户使用系统时需要输入用户名和口令进行登录，登录成功后就可以进入自己的主目录（主目录就是自己的工作目录）。

用户账号管理主要包括以下三方面：

- 用户组的管理
- 用户的管理
- 为用户主目录之外的目录授权

## 用户组的管理 

每个用户都有一个用户组，系统可以对一个用户组中的所有用户进行集中管理。

用户组的管理涉及用户组的添加、修改和删除。

用户组的添加、修改和删除实际上就是对/etc/group文件的更新。

### 查看所有用户组

使用root账户查看当前系统的用户组：

```
cat /etc/group
```

![image-20240522200822460](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222008934.png)

每一个用户组四部分组成：`组名：密码标识：GID：该用户组中的用户列表`

查看当前登录的账户属于哪一组

```shell
groups
```

查看某个用户属于哪一组：

```shell
groups root
```

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222009502.png)

### 用户组的添加 

语法：

```shell
groupadd [选项] 组名
```

添加一个用户组dev1：

```shell
groupadd dev1
```

可以通过`-g`选项来指定新用户组的标识号 (GID)

```shell
groupadd -g 101 dev2
```

其中101是dev2这个组的组号。

### 用户组的修改

修改组标识号：

```shell
groupmod -g 102 dev2
```

修改组名：

```shell
# 将dev2修改为dev3
groupmod -n dev3 dev2
```

### 用户组的删除

删除用户组：

```shell
# 删除用户组dev3
groupdel dev3
```

## 用户的管理 

用户管理工作主要涉及到用户的添加、修改和删除。

### 添加用户 

添加用户就是在系统中创建一个新账号，然后为新账号分配用户组、主目录等资源。

语法：

```shell
useradd [选项] 用户名
```

选项：

- `-d`：指定新用户的主目录
- `-g`：指定新用户属于哪个组 (主组)
- `-G`：可以给新用户添加附加组

```shell
useradd lisi
```

**注意**：当新建用户时，没有指定组，也没有指定工作目录时：

- 默认的组名：和自己用户名一样
- 默认的主目录：/home/用户名

添加用户zhangsan并设置该用户的主目录：

```shell
useradd -d /usr/zhangsan zhangsan
```

添加用户lisi并指定组和附加组：添加lisi用户，该用户的主目录/usr/lisi，所属主组dev (开发组)，附加组test (测试组)

```shell
useradd -d /usr/lisi -g dev -G test lisi
```

### 设置密码 

给用户lisi设置密码：

```shell
passwd lisi
```

**注意**：增加用户就是在/etc/passwd文件中为新用户增加一条记录，同时更新其他系统文件如/etc/shadow, /etc/group等。

通过查看`/etc/passwd`文件可以看到系统中有哪些用户，执行：

```shell
cat /etc/passwd
```

![image-20240522202007976](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222020425.png)

![image-20240522202432993](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222024446.png)

密码会单独存储在/etc/shadow文件中，密码是通过某种算法进行加密的。例如执行：

```shell
cat /etc/shadow
```

![image.png](https://cdn.nlark.com/yuque/0/2022/png/21376908/1670374502252-611d400f-1975-45cb-99db-302b3a8792fa.png?x-oss-process=image%2Fformat%2Cwebp)

### 切换用户

从root账户切换到普通账户lisi：

```shell
su lisi
```

![image-20240522202626967](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202405222026493.png)

**注意**：

- 从普通用户切换到高级用户需要密码。密码输入时不回显。

- 切换到普通用户之后，该普通用户默认只对自己的"主目录"有权限，主目录之外的目录是没有权限的。

### 修改用户 

修改用户就是对用户名，用户主目录，用户组等进行修改。

语法：

```shell
usermod [选项] 用户名
```

选项：

- `-d`：指定新用户的主目录
- `-g`：指定新用户属于哪个组 (主组)
- `-G`：可以给新用户添加附加组
- `-l`：指定新的用户名

修改用户名：

```shell
usermod -l zhangsi zhangsan
```

修改主目录：

```shell
# -m 选项很重要，当有了这个选项之后，目录不存在时会新建该目录。
usermod -d /usr/zhangsan2 -m zhangsan
```

修改所属组：

```shell
usermod -g dev1 zhangsan
```

锁定用户：

```shell
usermod -L zhangsan
```

解锁用户：

```shell
usermod -U zhangsan
```

### 删除用户 

删除用户并连同主目录一块删除：-r 选项的作用是连同该用户主目录一块删除

```shell
userdel -r zhangsan
```

## 为用户主目录之外的目录授权 

第一步：创建目录

```shell
mkdir /java
```

第二步：给目录授权

```shell
# -R表示递归设置权限，该目录下所有的子目录以及子文件
chmod -R 775 /java
```

第三步：创建组

```shell
groupadd dev
```

第四步：把目录赋予组

```shell
chgrp -R dev /java
```

第五步：创建用户

```shell
useradd xiaoming
```

第六步：设置密码

```shell
passwd xiaoming
```

第七步：给用户添加附加组

```shell
usermod -G dev xiaoming
```

