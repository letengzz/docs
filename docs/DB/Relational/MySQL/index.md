# MySQL

- [MySQL 安装/卸载](安装卸载/index.md)
- MySQL 基础
- [MySQL 数据目录](数据目录.md)
- [MySQL 用户与权限管理](用户与权限管理.md)
- [MySQL 逻辑框架]()
- [MySQL 存储引擎]()
- [MySQL 索引]()
- [MySQL 数据库备份与恢复]()
- [MySQL 锁](锁.md)
- [MySQL 新特性](新特性.md)

**拓展**：

- [开启/关闭MySQL服务脚本](开启关闭MySQL服务.md)

# SQL 基本命令

## SQL 注释

单行注释：

```sql
#注释内容
```

单行注释： 其中--后面的空格必须有

```sql
-- 注释内容   
```

多行注释：

```sql
/* 注释内容 */
```

## 查看版本

```sql
select version();
```

## 退出连接

```
exit;
```



#### install canal

```
docker pull canal/canal-server:v1.1.1
```

下载run.sh脚本 链接：[https://github.com/alibaba/canal/blob/master/docker/run.sh](https://github.com/alibaba/canal/blob/master/docker/run.sh)

```
sh run.sh -e canal.auto.scan=false -e canal.destinations=test -e canal.instance.master.address=192.168.10.3:3306 -e canal.instance.dbUsername=root -e canal.instance.dbPassword=abc123 -e canal.instance.connectionCharset=UTF-8 -e canal.instance.tsdb.enable=true -e canal.instance.gtidon=false

docker run -p 11111:11111 --name canal -e canal.destinations=test -e canal.instance.master.address=192.168.10.3:3306 -e canal.instance.dbUsername=cana -e canal.instance.dbPassword=canal -e canal.instance.connectionCharset=UTF-8 -e canal.instance.tsdb.enable=true -e canal.instance.gtidon=false -d canal/canal-server:v1.1.4

docker run --name canal -d canal/canal-server:v1.1.4
```

1
