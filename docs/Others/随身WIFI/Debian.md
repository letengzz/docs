# Debian

## 基础配置

配置root用户密码：

```shell
sudo passwd root
```

切换到root用户：

```shell
sudo su -
```

允许root用户远程登录，重启服务或系统后生效：

```shell
echo "PermitRootLogin yes" >> /etc/ssh/sshd_config
```

修复mobian源并安装基础软件：

```shell
apt update
apt install curl -y
echo "deb http://repo.mobian-project.org/ bookworm main non-free" > /etc/apt/sources.list.d/mobian.list
curl -s https://repo.mobian.org/mobian.gpg > /etc/apt/trusted.gpg.d/mobian.gpg
apt update
apt install vim wget git cron dnsutils unzip lrzsz fdisk gdisk exfat-fuse exfat-utils -y
```

配置系统时间：选6.然后选70（亚洲 上海）

```shell
dpkg-reconfigure tzdata
```


修改vi配置：

```shell
echo -e "if has('mouse')\nset mouse-=a\nendif" > .vimrc
```

修改usb为主动模式：把上面这行添加到【setup() {】的下一行

```shell
vi /usr/sbin/mobian-usb-gadget
echo host > /sys/kernel/debug/usb/ci_hdrc.0/role
```


重启设备：

```shell
reboot
```

重启后用root用户登录，后续所有操作都直接用root用户登陆后操作，删掉已经没用的自带用户user

```shell
userdel -r user
```

## 挂载U盘

创建用于挂载的目录

```shell
mkdir /udisk
```

插上U盘，查看是否已经识别到

```shell
fdisk -l
```

清理磁盘分区并新建（如果是大于2T的移动硬盘，下一条命令中的fdisk换成gdisk）

```shell
fdisk /dev/sda
```

1. 删除分区：d
2. 新建分区，一路回车：n   #
3. 保存更改：w

格式化分区：ext4性能好安全性高但不兼容windows，exfat性能差安全性差但兼容windows

```shell
mkfs.ext4 /dev/sda1或mkfs.exfat /dev/sda1
```

挂载：

```shell
mount /dev/sda1 /udisk
chmod 777 /udisk
```

若出现：`mount: /udisk: wrong fs type, bad option, bad superblock on /dev/sda, missing codepage or helper program, or other error.`

解决：sda 没有文件系统格式

格式化磁盘即可：

```shell
mkfs -t ext2 /dev/sda
```

挂载即可：

```shell
mount /dev/sda /mnt
```

取消挂载：

```shell
umount /dev/sda
```

## 配置开机行为

创建启动脚本：

```shell
touch /etc/rc.local
echo '#!/bin/sh -e' > /etc/rc.local
echo "exit 0" >> /etc/rc.local
```

给权限：

```shell
chmod +x /etc/rc.local
```

重载systemd配置管理器：

```shell
systemctl daemon-reload
```

启动守护进程：

```shell
systemctl start rc-local
```

修改启动脚本：

```shell
vi /etc/rc.local
#!/bin/sh -e
#等待2秒等待设备彻底启动完成
sleep 2
#挂载硬盘
mount /dev/sda1 /udisk &
#等待5秒等待挂载完毕
sleep 3
#清空minidlna缓存
minidlnad -R
#等待3秒等待清空完成
sleep 2
#启动dlna
systemctl start minidlna &
#启动aria2
aria2c -D --conf-path=/etc/aria2/aria2.conf &
exit 0
```

## samba共享

安装samba：

```shell
apt install samba samba-common-bin -y
```

修改配置文件：

```shell
vi /etc/samba/smb.conf
```

```properties
[global]
   workgroup = WORKGROUP
   log file = /var/log/samba/log.%m
   max log size = 1000
   panic action = /usr/share/samba/panic-action %d
   passdb backend = tdbsam
   obey pam restrictions = yes
   unix password sync = yes
   security = user
   passwd program = /usr/bin/passwd %u
   passwd chat = *Enter\snew\s*\spassword:* %n\n *Retype\snew\s*\spassword:* %n\n *password\supdated\ssuccessfully* .
   pam password change = yes
   map to guest = bad user
   load printers = no
[samba]
   browseable = yes
   valid users = root
   path = /udisk
   writable = yes
   public = no
   guest ok = no
```

配置samba用户，输入密码：

```shell
smbpasswd -a root
```

重启samba服务：

```shell
samba restart
```

## aria2下载器

新建下载目录并给权限：

```shell
mkdir /udisk/download
chmod 777 /udisk/download
```

安装aria2：

```shell
apt install aria2 -y
```

创建aria2配置目录：

```shell
mkdir /etc/aria2
```

创建aria2会话文件：

```shell
touch /etc/aria2/aria2.session
```

创建aria2配置文件：

```shell
vi /etc/aria2/aria2.conf
```

```properties
dir=/udisk/download
disk-cache=32M
continue=true
file-allocation=none
max-concurrent-downloads=5
max-connection-per-server=5
max-overall-download-limit=0
max-download-limit=0
max-overall-upload-limit=0
max-upload-limit=0
disable-ipv6=true
min-split-size=10M
split=10
input-file=/etc/aria2/aria2.session
save-session=/etc/aria2/aria2.session
save-session-interval=60
enable-rpc=true
rpc-allow-origin-all=true
rpc-listen-all=true
follow-torrent=true
#peer-id-prefix=-TR2770-
user-agent=Transmission/2.77
bt-seed-unverified=true
bt-save-metadata=true
bt-enable-lpd=true
bt-max-open-files=100
bt-max-peers=60
bt-min-crypto-level=plain
bt-require-crypto=true
listen-port=65298
dht-listen-port=65298
seed-ratio=1
seed-time=120
rpc-secret=test123
bt-tracker=udp://tracker.opentrackr.org:1337/announce,udp://9.rarbg.com:2810/announce,udp://tracker.openbittorrent.com:6969/announce,http://tracker.openbittorrent.com:80/announce,https://opentracker.i2p.rocks:443/announce,udp://tracker.torrent.eu.org:451/announce,udp://open.stealth.si:80/announce,udp://exodus.desync.com:6969/announce,udp://tracker2.dler.org:80/announce,udp://tracker.tiny-vps.com:6969/announce,udp://tracker.moeking.me:6969/announce,udp://tracker.dler.org:6969/announce,udp://tracker.0x.tf:6969/announce,udp://open.demonii.com:1337/announce,udp://movies.zsw.ca:6969/announce,udp://fe.dealclub.de:6969/announce,udp://explodie.org:6969/announce,udp://chouchou.top:8080/announce,udp://bt2.archive.org:6969/announce,udp://bt.oiyo.tk:6969/announce
```

启动aria2：

```shell
aria2c -D --conf-path=/etc/aria2/aria2.conf &
```

通过aria2.net调用，或者自建aria2 webui

## lamp环境与filerun

安装需要的软件：

```shell
apt install apache2 php mariadb-server php-mysql php-mbstring php-curl php-gd php-imagick ffmpeg -y
```

编辑虚拟站点配置：

```shell
vi /etc/apache2/sites-enabled/000-default.conf
<VirtualHost *:80>
        DocumentRoot /var/www/html
        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

修改数据库编码：

```shell
vi /etc/mysql/mariadb.conf.d/50-server.cnf
在[mysqld]字段的添加或修改如下部分
init_connect='SET collation_connection = utf8mb4_unicode_ci'
init_connect='SET NAMES utf8mb4'
character-set-server=utf8mb4
collation-server=utf8mb4_unicode_ci
skip-character-set-client-handshake

vi /etc/mysql/mariadb.conf.d/50-client.cnf
在[client]字段的修改如下部分
default-character-set=utf8mb4

vi /etc/mysql/mariadb.conf.d/50-mysql-clients.cnf
在[mysql]字段下修改如下部分
default-character-set=utf8mb4
```

重启数据库并初始化：

```shell
systemctl restart mariadb
systemctl enable mariadb
mysql_secure_installation
mysql -uroot -p
USE mysql;
ALTER USER root@localhost IDENTIFIED VIA mysql_native_password USING PASSWORD('test123');
FLUSH PRIVILEGES;
show variables like "%character%";show variables like "%collation%";
EXIT;
systemctl restart mariadb
```

配置filerun运行环境：
用pscp传输【loader-wizard.php】，【ioncube_loader_lin_7.4.so】，【00-ioncube.ini】，【FileRun_20220519_PHP73-74.zip】

```shell
pscp loader-wizard.php root@192.168.123.131:/root/
pscp ioncube_loader_lin_7.4.so root@192.168.123.131:/root/
pscp 00-ioncube.ini root@192.168.123.131:/root/
pscp FileRun_20220519_PHP73-74.zip root@192.168.123.131:/root/
```

将三个文件放到对应的目录下：

```shell
mv loader-wizard.php /var/www/html/loader-wizard.php
mv ioncube_loader_lin_7.4.so /usr/lib/php/20190902/ioncube_loader_lin_7.4.so
mv 00-ioncube.ini /etc/php/7.4/apache2/conf.d/00-ioncube.ini
systemctl restart apache2
```

访问http://你的IP/loader-wizard.php
如果看到绿色的框内容为：

> Loader Installed
> The ionCube Loader version 11.0.1 for PHP 7.4 is already installed and encoded files should run without problems.

那么运行环境就配置好了
删掉无用的文件：

```shell
rm -rf /var/www/html/*
```

部署filerun文件包：

```shell
mkdir 11 && mv FileRun* 11 && unzip -d 11 11/FileRun* && rm 11/FileRun* && mv 11/* /var/www/html && rm -rf ~/11
mkdir /var/www/html/userfile
```

设置filerun时区：

```shell
echo '<?php date_default_timezone_set("Asia/Shanghai"); ?>' > /var/www/html/customizables/config.php
```

给权限，设置自启：

```shell
chmod -R 777 /var/www/html/
systemctl enable apache2
```

访问http://你的IP/，开始配置

## minidlna服务

安装软件包：

```shell
apt install minidlna -y
```

修改配置文件：

```shell
echo 'media_dir=/udisk' > /etc/minidlna.conf
echo 'port=8200' >> /etc/minidlna.conf
echo 'friendly_name=WiFi-410' >> /etc/minidlna.conf
echo 'inotify=yes' >> /etc/minidlna.conf
```

禁用自启：

```shell
systemctl disable minidlna
```

启动minidlna：

```shell
systemctl start minidlna
```

如果dlna认不到新加入的视频，重启一下系统，拔掉棒子再插上就行了

## 移动硬盘优化

防止移动硬盘休眠：

```shell
crontab -e
*/3 * * * * echo "1" > /udisk/download/.no-hiberfil
```

## 安装docker

```shell
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

