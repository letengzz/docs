# RocketMQ 消息模式

RocketMQ提供了发送多种发送消息的模式，例如同步消息，异步消息，顺序消息，延迟消息，事务消息等

## 消息发送和监听的流程

**消息生产者**：

1. 创建消息生产者producer，并制定生产者组名

2. 指定Nameserver地址

3. 启动producer

4. 创建消息对象，指定主题Topic、Tag和消息体等

5. 发送消息

6. 关闭生产者producer

**消息消费者**：

1. 创建消费者consumer，制定消费者组名

2. 指定Nameserver地址

3. 创建监听订阅主题Topic和Tag等

4. 处理消息

5. 启动消费者consumer

## 同步消息

发送同步消息，发送过后会有一个返回值，也就是mq服务器接收到消息后返回的一个确认，这种方式非常安全，但是性能上并没有这么高，而且在mq集群中，也是要等到所有的从机都复制了消息以后才会返回，所以针对重要的消息可以选择这种方式

消息由消费者发送到broker后，会得到一个确认，是具有可靠性的。这种可靠性同步地发送方式使用的比较广泛，比如：重要的消息通知，短信通知等。

![img202403172015667](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/java/mq/202412100952139.jpg)

**官方文档**：https://rocketmq.apache.org/zh/docs/featureBehavior/01normalmessage

## 发送异步消息

异步消息通常用在对响应时间敏感的业务场景，即发送端不能容忍长时间地等待Broker的响应。发送完以后会有一个异步消息通知

## 发送单向消息

发送单向消息主要用在不关心发送结果的场景，这种方式吞吐量很大，但是存在消息丢失的风险，例如日志信息的发送

## 发送延迟消息

消息放入mq后，过一段时间，才会被监听到，然后消费

比如下订单业务，提交了一个订单就可以发送一个延时消息，30min后去检查这个订单的状态，如果还是未付款就取消订单释放库存。

**注意**：RocketMQ不支持任意时间的延时 只支持几个固定的延时等级，等级1就对应1s，以此类推，最高支持2h延迟(`1s`、`5s`、`10s`、`30s`、`1m`、`2m`、`3m`、`4m`、`5m`、`6m`、`7m`、`8m`、`9m`、`10m`、`20m`、`30m`、`1h`、`2h`)

**官方文档**：https://rocketmq.apache.org/zh/docs/featureBehavior/02delaymessage

## 发送顺序消息

消息有序指的是可以按照消息的发送顺序来消费(FIFO)。RocketMQ可以严格的保证消息有序，可以分为：分区有序或者全局有序。

RocketMQ的broker的机制，导致了RocketMQ会有这个问题 因为一个broker中对应了四个queue

![](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/java/mq/202412100951905.png)

顺序消费的原理解析：在默认的情况下消息发送会采取Round Robin轮询方式把消息发送到不同的queue(分区队列)；而消费消息的时候从多个queue上拉取消息，这种情况发送和消费是不能保证顺序。但是如果控制发送的顺序消息只依次发送到同一个queue中，消费的时候只从这个queue上依次拉取，则就保证了顺序。当发送和消费参与的queue只有一个，则是全局有序；如果多个queue参与，则为分区有序，即相对每个queue，消息都是有序的。

**官方文档**：https://rocketmq.apache.org/zh/docs/featureBehavior/03fifomessage

## 发送批量消息

RocketMQ可以一次性发送一组消息，那么这一组消息会被当做一个消息消费。

**使用场景**：

如果消息过多，每次发送消息都和MQ建立连接，无疑是一种性能开销，批量消息可以把消息打包批量发送，批量发送消息能显著提高传递小消息的性能。

**批量消息限制**：

批量发送消息能显著提高传递消息的性能。**限制是这些批量消息应该有相同的Topic，而且不能是延时消息**。此外，这一批消息的**总大小不应超过4MB**

如果超过可以有2种处理方案：

1. 将消息进行切割成多个小于4M的内容进行发送
2. 修改4M的限制改成更大：可以设置Producer的maxMessageSize属性；修改配置文件中的maxMessageSize属性

## 发送事务消息

事务消息可以被认为是一个两阶段的提交消息实现，以确保分布式系统的最终一致性。事务性消息确保本地事务的执行和消息的发送可以原子地执行。

![](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/java/mq/202412100950765.png)

事务消息的大致分为两个流程：正常事务消息的发送及提交、事务消息的补偿流程：

- 事务消息发送及提交：
  1. 发送消息（half消息）
  2. 服务端响应消息写入结果
  3. 根据发送结果执行本地事务（如果写入失败，此时half消息对业务不可见，本地逻辑不执行）
  4. 根据本地事务状态执行Commit或Rollback（Commit操作生成消息索引，消息对消费者可见）
- 事务补偿：
  1. 对没有Commit/Rollback的事务消息（pending状态的消息），从服务端发起一次"回查"
  2. Producer收到回查消息，检查回查消息对应的本地事务的状态
  3. 根据本地事务状态，重新Commit或者Rollback
  4. 其中，补偿阶段用于解决消息UNKNOW或者Rollback发生超时或者失败的情况。

![](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/java/mq/202412100950290.png)

**事务消息共有三种状态**：提交状态、回滚状态、中间状态

- **提交事务** (`TransactionStatus.CommitTransaction`)：它允许消费者消费此消息。
- **回滚事务** (`TransactionStatus.RollbackTransaction`)：它代表该消息将被删除，不允许被消费。
- **中间状态** (`TransactionStatus.Unknown`)：它代表需要检查消息队列来确定状态。

**官方文档**：https://rocketmq.apache.org/zh/docs/featureBehavior/04transactionmessage

## 消息过滤

RocketMQ提供消息过滤功能，通过tag或者key进行区分

往一个主题里面发送消息的时候，根据业务逻辑，可能需要区分，比如带有tagA标签的被A消费，带有tagB标签的被B消费，还有在事务监听的类里面，只要是事务消息都要走同一个监听，也需要通过过滤才区别对待

**官方文档**：https://rocketmq.apache.org/zh/docs/featureBehavior/07messagefilter

### 带标签(Tag)的消息

不同的业务应该使用不同的Topic如果是相同的业务里面有不同表的表现形式，那么要使用tag进行区分：

1. **消息类型是否一致**：如普通消息、事务消息、定时（延时）消息、顺序消息，不同的消息类型使用不同的 Topic，无法通过 Tag 进行区分。

2. **业务是否相关联**：没有直接关联的消息，如淘宝交易消息，京东物流消息使用不同的 Topic 进行区分；而同样是天猫交易消息，电器类订单、女装类订单、化妆品类订单的消息可以用 Tag 进行区分。

3. **消息优先级是否一致**：如同样是物流消息，盒马必须小时内送达，天猫超市 24 小时内送达，淘宝物流则相对会慢一些，不同优先级的消息用不同的 Topic 进行区分。

4. **消息量级是否相当**：有些业务消息虽然量小但是实时性要求高，如果跟某些万亿量级的消息使用同一个 Topic，则有可能会因为过长的等待时间而“饿死”，此时需要将不同量级的消息进行拆分，使用不同的 Topic。

总的来说，针对消息分类，您可以选择创建多个 Topic，或者在同一个 Topic 下创建多个 Tag。但通常情况下，不同的 Topic 之间的消息没有必然的联系，而 Tag 则用来区分同一个 Topic 下相互关联的消息，例如全集和子集的关系、流程先后的关系。

**官方文档**：https://rocketmq.apache.org/zh/docs/bestPractice/05subscribe

### 带key的消息

在rocketmq中的消息，默认会有一个messageId当做消息的唯一标识，可以给消息携带一个key，用作唯一标识或者业务标识，包括在控制面板查询的时候也可以使用messageId或者key来进行查询
