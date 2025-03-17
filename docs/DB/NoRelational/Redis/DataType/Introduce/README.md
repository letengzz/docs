# 概述

对于键值数据库而言，基本的数据模型是 key-value 模型。 例如，“hello”: “world”就是一个基本的 KV 对，其中，“hello”是 key，“world”是 value。 SimpleKV 也不例外。在 SimpleKV 中，key 是 String 类型，而 value 是基本数据类型， 例如 String、整型等。

SimpleKV 需要支持的 3 种基本操作，即 PUT、GET 和 DELETE：

- PUT：新写入或更新一个 key-value 对
- GET：根据一个 key 读取相应的 value 值
- DELETE：根据一个 key 删除整个 key-value 对

注意：**有些键值数据库的新写 / 更新操作叫 SET**。新写入和更新虽然是用一个操作接口，但在实际执行时，会根据 key 是否存在而执行相应的新写或更新流程。

在实际的业务场景中，经常会碰到这种情况：查询一个用户在一段时间内的访问记录。这种操作在键值数据库中属于 SCAN 操作，即**根据一段 key 的范围返回相应的 value 值**。因此，**PUT/GET/DELETE/SCAN 是一个键值数据库的基本操作集合**。

此外，实际业务场景通常还有更加丰富的需求，例如，在黑白名单应用中，需要判断某个用户是否存在。如果将该用户的 ID 作为 key，那么，可以增加 EXISTS 操作接口，用于判 断某个 key 是否存在。对于一个具体的键值数据库而言，你可以通过查看操作文档，了解 其详细的操作接口。

当然，当一个键值数据库的 value 类型多样化时，就需要包含相应的操作接口。例如， Redis 的 value 有列表类型，因此它的接口就要包括对列表 value 的操作。后面我也会具 体介绍，不同操作对 Redis 访问效率的影响。

**键值对保存位置**：

保存在内存的好处是读写很快，毕竟内存的访问速度一般都在百 ns 级别。但是，潜在的风险是一旦掉电，所有的数据都会丢失。

保存在外存，虽然可以避免数据丢失，但是受限于磁盘的慢速读写(通常在几 ms 级别)，键值数据库的整体性能会被拉低。

因此，**如何进行设计选择，通常需要考虑键值数据库的主要应用场景**。比如，缓存场景下的数据需要能快速访问但允许丢失，那么，用于此场景的键值数据库通常采用内存保存键值数据。Memcached 和 Redis 都是属于内存键值数据库。对于 Redis 而言，缓存是 非常重要的一个应用场景。

![image-20240308230848741](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202404152140833.png)

Redis数据类型指的是value的数据类型，key的类型都是字符串。

- 官方操作命令：https://redis.io/docs/latest/commands

![](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202404102042922.png)
