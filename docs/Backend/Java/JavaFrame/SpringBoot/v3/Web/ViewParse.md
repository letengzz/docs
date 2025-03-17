# 视图解析与模板引擎

由于 **SpringBoot** 使用了**嵌入式 Servlet 容器**。所以 **JSP** 默认是**不能使用**的。

如果需要**服务端页面渲染**，优先考虑使用 模板引擎。

![img](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/Two-C/img/Java/202307312026519.png)

模板引擎页面默认放在 `src/main/resources/templates`

**SpringBoot** 包含以下模板引擎的自动配置：

- FreeMarker：

  特点：FreeMarker 是一个用Java编写的模板引擎，主要用来生成文本输出，如HTML网页、邮件、配置文件等。它不依赖于Servlet容器，可以在任何环境中运行。

  优势：模板语法丰富，灵活性高，支持宏和函数定义，非常适合需要大量定制化的项目。

- Groovy：

  特点：Groovy 是一种基于JVM的动态语言，它可以作为模板引擎使用。Groovy Templates 提供了非常灵活的模板编写方式，可以直接嵌入Groovy代码。

  优势：对于熟悉Groovy语言的开发者来说，使用起来非常方便，可以快速实现复杂逻辑。

- [Thymeleaf](../Integration/Thymeleaf/index.md)：

  特点：Thymeleaf 是一个现代的服务器端Java模板引擎，它支持HTML5，XML，TEXT，JAVASCRIPT，CSS等多种模板类型。它能够在浏览器中预览，这使得前端开发更加便捷。Thymeleaf 提供了一套强大的表达式语言，可以轻松地处理数据绑定、条件判断、循环等。

  优势：与Spring框架集成良好，也是SpringBoot官方推荐的。

- Mustache：

  特点：Mustache 是一种逻辑无感知的模板语言，可以用于多种编程语言，包括Java。它的设计理念是让模板保持简单，避免模板中出现复杂的逻辑。

  优势：逻辑无感知，确保模板的简洁性和可维护性，易于与前后端开发人员协作。

- Velocity：
  特点：Velocity 是另一个强大的模板引擎，最初设计用于与Java一起工作，但也可以与其他技术结合使用。它提供了简洁的模板语言，易于学习和使用。

  优势：轻量级，性能优秀，特别适合需要快速生成静态内容的应用。

这些模板技术各有千秋，选择哪一种取决于项目的具体需求和个人偏好。Spring Boot 对这些模板引擎都提供了良好的支持，通常只需要在项目中添加相应的依赖，然后按照官方文档配置即可开始使用。
