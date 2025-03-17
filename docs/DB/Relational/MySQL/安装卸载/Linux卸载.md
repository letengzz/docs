# Linux 卸载

1. 关闭 mysql 服务：

   ```shell
   systemctl stop mysqld.service
   ```

2. 查看当前 mysql 安装状况：

   ```shell
   rpm -qa | grep -i mysql 
   # 或 
   yum list installed | grep mysql
   ```

3. 卸载上述命令查询出的已安装程序：

   ```shell
   yum remove mysql-xxx mysql-xxx mysql-xxx mysqk-xxxx
   ```

4. 删除 mysql 相关文件：

   查找相关文件

   ```shell
   find / -name mysql
   ```

   删除上述命令查找到的文件

   ```shell
   rm -rf xxx
   ```

5. 删除 my.cnf：

   ```shell
   rm -rf /etc/my.cnf
   ```

