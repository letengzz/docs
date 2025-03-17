# Linux 安装

- 上传安装包jdk-8u333-linux-x64.tar.gz

- ```shell
  mkdir /usr/local/java
  ```

- ```shell
  tar -zxvf jdk-8u333-linux-x64.tar.gz -C /usr/local/java
  ```

- ```shell
  vim /etc/profile
  ```
  
  在文件末尾添加
  
  ```shell
  export JAVA_HOME=/usr/local/java/jdk1.8.0_333
  export PATH=$PATH:$JAVA_HOME/bin
  ```
  
  ```shell
  source /etc/profile
  ```
  
- 验证是否配置成功：

  ```shell
  java -version 
  ```
