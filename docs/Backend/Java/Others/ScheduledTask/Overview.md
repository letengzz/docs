# 定时任务 概述

**定时任务**：固定时间,或者周期性的执行一项任务 (函数、方法)

比如： 每月1日的报表， 每天2点定时备份系统配置文件、定时备份数据库的数据。

定时任务实现技术：

1. java中的Timer定时器类
2. TimerTask 定时任务类
3. Quartz：分布式定时任务框架
4. Spring中的task模块
5. Linux中cron服务：通过`crontab`命令添加定时任务
6. XXL-Job：分布式定时任务框架