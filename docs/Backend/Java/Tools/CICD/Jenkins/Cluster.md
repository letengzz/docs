# Jenkins 集群/并发构建

集群化构建可以有效提升构建效率，尤其是团队项目比较多或是子项目比较多的时候，可以并发在多台机器上执行构建。

创建两个Jenkins服务，并创建节点：

![image-20240404193400402](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092254692.png)
![image-20240404193626902](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092254802.png)

![image-20240404194551048](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092254813.png)

使用相同方式创建jenkins-03：

![image-20240404194819671](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092254342.png)

## 调整并发执行个数

![image-20240404195244299](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092254023.png)

## 并发构建

配置：

![image-20240404195053604](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092254529.png)

效果：

![image-20240404195149195](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092256132.png)

## 指定节点构建

配置：

![image-20240404195643354](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092257798.png)

![image-20240404195921190](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092254568.png)

常见语法：

![image-20240404195658370](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092254151.png)

