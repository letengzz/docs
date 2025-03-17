# Spring Task

Spring中Task模块，快速实现定时任务，两个注解@Scheduled声明定时任务的方法， `@EnableScheduling`表示启用定时任务功能。

首先创建定时任务方法，声明@Scheduled注解，cron属性为时间表达式

```java
@Component
public class TaskManager {

    /**
     * @Scheduled：方法是定时任务执行的
     * 每10秒执行一次定时任务方法taskPrintTime
     * 定时任务方法： 无参数 ，无返回值。
     */
    @Scheduled(cron = "0/10 * * * * ?")
    public void taskPrintTime(){
        System.out.println("定时任务执行方法："+new Date());
    }
}
```

其次在启动类上声明@EnableScheduling

```java
//启动定时任务
@EnableScheduling
@SpringBootApplication
public class JobExecutorApplication {

	public static void main(String[] args) {
        SpringApplication.run(JobExecutorApplication.class, args);
	}
}
```
