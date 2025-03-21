# 索引 Index

索引支持在MongoDB中高效地执行查询。如果没有索引，MongoDB必须执行全集合扫描，即扫描集合中的每个文档，以选择与查询语句匹配的文档。这种扫描全集合的查询效率是非常低的，特别在处理大量的数据时，查询可以要花费几十秒甚至几分钟，这对网站的性能是非常致命的。
如果查询存在适当的索引，MongoDB可以使用该索引限制必须检查的文档数。
索引是特殊的数据结构，它以易于遍历的形式存储集合数据集的一小部分。索引存储特定字段或一组字段的值，按字段值排序。索引项的排序支持有效的相等匹配和基于范围的查询操作。此外，MongoDB还可以使用索引中的排序返回排序结果。
官网文档：[https://docs.mongodb.com/manual/indexes/](https://docs.mongodb.com/manual/indexes/)
了解：
MongoDB索引使用B树数据结构（确切的说是B-Tree，MySQL是B+Tree）

## 索引的类型

### 单字段索引

MongoDB支持在文档的单个字段上创建用户定义的升序/降序索引，称为单字段索引（Single Field Index）。
对于单个字段索引和排序操作，索引键的排序顺序（即升序或降序）并不重要，因为MongoDB可以在任何方向上遍历索引。
![](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202409291618853.png)

### 复合索引

MongoDB还支持多个字段的用户定义索引，即复合索引（Compound Index）。
复合索引中列出的字段顺序具有重要意义。例如，如果复合索引由{ userid: 1 , score: -1 }组成，则索引首先按userid正序排序，然后
在每个userid的值内，再在按score倒序排序。
![](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202409291618432.png)

### 其他索引

地理空间索引（Geospatial Index）、文本索引（Text Indexes）、哈希索引（Hashed Indexes）。
地理空间索引（Geospatial Index）
为了支持对地理空间坐标数据的有效查询，MongoDB提供了两种特殊的索引：返回结果时使用平面几何的二维索引和返回结果时使用球面几何的二维球面索引。
文本索引（Text Indexes）
MongoDB提供了一种文本索引类型，支持在集合中搜索字符串内容。这些文本索引不存储特定于语言的停止词（例如“the”、“a”、“or”），而将集合中的词作为词干，只存储根词。
哈希索引（Hashed Indexes）
为了支持基于散列的分片，MongoDB提供了散列索引类型，它对字段值的散列进行索引。这些索引在其范围内的值分布更加随机，但只支持相等匹配，不支持基于范围的查询。

## 索引的管理操作

### 查看索引

说明：
返回一个集合中的所有索引的数组。
语法：

```
db.collection.getIndexes()
```

提示：该语法命令运行要求是MongoDB 3.0+
【示例】
查看comment集合中所有的索引情况

```
> db.comment.getIndexes()
[
    {
        "v" : 2,
        "key" : {
            "_id" : 1
        },
        "name" : "_id_",
        "ns" : "articledb.comment"
    }
]
```

结果中显示的是默认_id索引。
默认_id索引：
MongoDB在创建集合的过程中，在_id字段上创建一个唯一的索引，默认名字为_id_，该索引可防止客户端插入两个具有相同值的文档，您不能在_id字段上删除此索引。
注意：该索引是唯一索引，因此值不能重复，即_id值不能重复的。在分片集群中，通常使用_id作为片键。

### 创建索引

说明：
在集合上创建索引。
语法：

```
db.collection.createIndex(keys, options)
```

参数
![](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202409291618031.png)
options（更多选项）
![](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202409291618974.png)
提示：
注意在3.0.0 版本前创建索引方法为 db.collection.ensureIndex()，之后的版本使用了 db.collection.createIndex()方法，ensureIndex()还能用，但只是 createIndex()的别名。
【示例】
（1 )单字段索引示例：对userid字段建立索引：

```
> db.comment.createIndex({userid: 1 })
{
    "createdCollectionAutomatically": false,
    "numIndexesBefore": 1 ,
    "numIndexesAfter": 2 ,
    "ok": 1
}
```

参数1 ：按升序创建索引
可以查看一下：

```
> db.comment.getIndexes()
[
    {
        "v": 2 ,
        "key": {
            "_id": 1
        },
        "name": "_id_",
        "ns": "articledb.comment"
    },
    {
        "v": 2 ,
        "key": {
            "userid": 1
        },
        "name": "userid_ 1 ",
        "ns": "articledb.comment"
    }
]
```

（2 ）复合索引：对userid和nickname同时建立复合（Compound）索引：

```
> db.comment.createIndex({userid:1,nickname:-1})
{
    "createdCollectionAutomatically" : false,
    "numIndexesBefore" : 2,
    "numIndexesAfter" : 3,
    "ok" : 1
}
```

查看一下索引：

```
> db.comment.getIndexes()
[
    {
        "v" : 2,
        "key" : {
            "_id" : 1
        },
        "name" : "_id_",
        "ns" : "articledb.comment"
    },
    {
        "v" : 2,
        "key" : {
            "userid" : 1
        },
        "name" : "userid_1",
        "ns" : "articledb.comment"
    },
    {
        "v" : 2,
        "key" : {
        "userid" : 1,
            "nickname" : -1
        },
        "name" : "userid_1_nickname_-1",
        "ns" : "articledb.comment"
    }
]
```

### 移除索引

说明：可以移除指定的索引，或移除所有索引
一、指定索引的移除
语法：

```
db.collection.dropIndex(index)
```

参数：
![](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202409291618879.png)
【示例】
删除comment集合中userid字段上的升序索引：

```
> db.comment.dropIndex({userid:1})
{ "nIndexesWas" : 3, "ok" : 1 }
```

查看已经删除了。
二、所有索引的移除
语法：
【示例】
删除spit集合中所有索引。

```
> db.comment.dropIndexes()
{
    "nIndexesWas" : 2,
    "msg" : "non-_id indexes dropped for collection",
    "ok" : 1
}
```

提示：_id的字段的索引是无法删除的，只能删除非_id字段的索引。

## 索引的使用

### 执行计划

分析查询性能（Analyze Query Performance）通常使用执行计划（解释计划、Explain Plan）来查看查询的情况，如查询耗费的时间、是否基于索引查询等。
那么，通常，我们想知道，建立的索引是否有效，效果如何，都需要通过执行计划查看。
语法：

```
db.collection.find(query,options).explain(options)
```

【示例】
查看根据userid查询数据的情况：

```
> db.comment.find({userid:"1003"}).explain()
{
    "queryPlanner" : {
        "plannerVersion" : 1,
        "namespace" : "articledb.comment",
        "indexFilterSet" : false,
        "parsedQuery" : {
            "userid" : {
                "$eq" : "1003"
            }
        },
        "winningPlan" : {
            "stage" : "COLLSCAN",
            "filter" : {
                "userid" : {
                    "$eq" : "1003"
                }
            },
            "direction" : "forward"
        },
        "rejectedPlans" : [ ]
    },
    "serverInfo" : {
        "host" : "9ef3740277ad",
        "port" : 27017,
        "version" : "4.0.10",
        "gitVersion" : "c389e7f69f637f7a1ac3cc9fae843b635f20b766"
    },
    "ok" : 1
}
```

下面对userid建立索引

```
db.comment.createIndex({userid:1})
{
    "createdCollectionAutomatically" : false,
    "numIndexesBefore" : 1,
    "numIndexesAfter" : 2,
    "ok" : 1
}
```

再次查看执行计划：

```
> db.comment.find({userid:"1013 "}).explain()
{
    "queryPlanner": {
        "plannerVersion": 1 ,
        "namespace": "articledb.comment",
        "indexFilterSet": false,
        "parsedQuery": {
            "userid": {
                "$eq": "1013 "
            }
    	},
		"winningPlan": {
            "stage": "FETCH",
            "inputStage": {
                "stage": "IXSCAN",
                "keyPattern": {
                    "userid": 1
                },
                "indexName": "userid_ 1 ",
                "isMultiKey": false,
                "multiKeyPaths": {
                    "userid": [ ]
                },
                "isUnique": false,
                "isSparse": false,
                "isPartial": false,
                "indexVersion": 2 ,
                "direction": "forward",
                "indexBounds": {
                    "userid": [
                        "[\"1013 \",\"1013 \"]"
                    ]
                }
            }
        },
        "rejectedPlans": [ ]
    },
    "serverInfo": {
        "host": "9 ef 3740277 ad",
        "port": 27017 ,
        "version": "4.0.10 ",
        "gitVersion": "c 389 e 7 f 69 f 637 f 7 a 1 ac 3 cc 9 fae 843 b 635 f 20 b 766 "
    },
    "ok": 1
}
```

### 涵盖的查询

Covered Queries
当查询条件和查询的投影仅包含索引字段时，MongoDB直接从索引返回结果，而不扫描任何文档或将文档带入内存。这些覆盖的查询可以非常有效。

![](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202409291618052.png)
更多：[https://docs.mongodb.com/manual/core/query-optimization/#](https://docs.mongodb.com/manual/core/query-optimization/#) read-operations-covered-query
【示例】

```
> db.comment.find({userid:"1003 "},{userid: 1 ,_id: 0 })
{"userid": "1003 "}
{"userid": "1003 "}
> db.comment.find({userid:"1003 "},{userid: 1 ,_id: 0 }).explain()
{
    "queryPlanner": {
        "plannerVersion": 1 ,
        "namespace": "articledb.comment",
        "indexFilterSet": false,
        "parsedQuery": {
            "userid": {
                "$eq": "1003 "
            }
        },
        "winningPlan": {
            "stage": "PROJECTION",
            "transformBy": {
                "userid": 1 ,
                "_id": 0
            },
            "inputStage": {
                "stage": "IXSCAN",
                "keyPattern": {
                    "userid" : 1
                },
                "indexName" : "userid_1",
                "isMultiKey" : false,
                "multiKeyPaths" : {
                    "userid" : [ ]
                },
                "isUnique" : false,
                "isSparse" : false,
                "isPartial" : false,
                "indexVersion" : 2,
                "direction" : "forward",
                "indexBounds" : {
                    "userid" : [
                        "[\"1003\", \"1003\"]"
                    ]
                }
            }
        },
        "rejectedPlans" : [ ]
    },
    "serverInfo" : {
        "host" : "bobohost.localdomain",
        "port" : 27017,
        "version" : "4.0.10",
        "gitVersion" : "c389e7f69f637f7a1ac3cc9fae843b635f20b766"
    },
    "ok" : 1
}
```

# 
