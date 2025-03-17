# 统一结果返回

对于前后端分离的系统来说，为了降低沟通成本，有必要给前端系统开发人员返回统一格式的JSON数据。多数开发团队一般都会封装一个RestBean对象来解决统一响应格式的问题。

使用Fastjson2处理JSON，导入依赖：

```xml
<dependency>
    <groupId>com.alibaba.fastjson2</groupId>
    <artifactId>fastjson2</artifactId>
    <version>2.0.47</version>
</dependency>
```

记录类作为统一返回结果：

> com.hjc.entity.RestBean

```java
public record RestBean<T>(int code, T data, String message) {
    //请求成功
    public static <T> RestBean<T> success(T data){
        return new RestBean<>(200,data,"请求成功");
    }

    //请求成功 无data
    public static <T> RestBean<T> success(){
        return RestBean.success(null);
    }

    //请求失败
    public  static <T> RestBean<T> failure(int code,String message){
        return new RestBean<>(code,null,message);
    }

    //转化为JSON字符串
    public String asJsonString(){
        //JSONWriter.Feature.WriteNulls 防止null值错误
        return JSON.toJSONString(this, JSONWriter.Feature.WriteNulls);
    }

}
```

使用：

```java
@GetMapping("/list")
private RestBean<Void> list(){
        return RestBean.success();
}
```

