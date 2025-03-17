# 生产集群部署

要将Elasticsearch部署到生产环境中，需要考虑机器的内存、CPU、磁盘、JVM等各种资源和配置。

## 内存

在Elasticsearch生产环境中，最容易耗尽的资源就是内存。排序和聚合都会耗费掉很多内存，所以给Elasticsearch进程分配足够的JVM heap是很重要的。除了给JVM heap分配内存，还需要给予足够的内存给 `cs filesystem cache`，因为lucene使用的数据结构都是给予磁盘的格式，elasticsearch是通过`cs cache` 来进行高性能的磁盘文件读写的。

如果一个机器有64G内存，是比较理想的状态。但是32G和16G也是OK的。**具体的内存数据还是根据数据量来决定的**。但是如果一个机器的内存小于8G，那么就不太适合生产环境，因为需要部署很多小内存的机器来搭建集群，运维成本和效率会很低。而大于64G的机器也不是很有必要。

## CPU

大多数的elasticsearch集群对于CPU的要求都会比较低一些，因此一台机器有多少啊个CPU core其实对生产环境的elasticsearch集群部署相对来说没有那么的重要，至少没有内存来的重要啊，**一般来说2个CPU core~8个CPU core都可以**。

## 磁盘

对于elasticsearch的生产环境来说，磁盘是非常重要的，尤其是对那些大量写入的elasticsearch集群。比如互联网公司将每天的实时日志数据以高并发的速度写入到elasticsearch集群中。在服务器上，磁盘是最慢的资源，所以对于大量写入的elasticsearch集群来说，会很容易因为磁盘的读写性能造成整个集群的性能瓶颈。

如果使用的SSD硬盘，那么就需要检查I/O scheduler，需要正确的配置IO scheduler。当将数据写入磁盘时，IO scheduler会决定什么时候数据才会真正的写入磁盘，而不是停留在os cache内存缓冲中。大多数机器上，默认的IO scheduler是cfq(completely fair queuing)。这个scheduler会给每个进程都分配一些时间分片。



