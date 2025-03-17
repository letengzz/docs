# GitHub搭建图床

## github创建仓库

创建仓库：

![image-20241102180335952](https://fastly.jsdelivr.net/gh/LetengZzz/img/others/202412111125895.png)

## github获取个人token

生成一个token用于PicGo访问图床仓库。

> 访问：[https://github.com/settings/tokens](https://link.zhihu.com/?target=https%3A//github.com/settings/tokens) 然后点击**Generate new token**。

注意这个token生成后只会显示一次！要把这个token复制一下存到其他地方以备以后要用。

![image-20241102180548580](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/others/202412111127606.png)

![image-20241102180626209](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/others/202412111127376.png)

## 配置PicGo

下载地址：https://github.com/Molunerfinn/PicGo

官方文档：https://picgo.github.io/PicGo-Doc/zh/guide

## 配置Github图床

仓库名的格式是用户名/仓库，比如创建一个叫做cdn_img的仓库，在PicGo里要设定的仓库名就是letengzz/cdn_img。一般选择main分支(如若选择其他分支，注意文件链接多了一级)。

![image-20241102195114048](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/others/202412111127102.png)

## 解决超时问题

配置代理即可：

![image-20241102200149731](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/others/202412111127740.png)