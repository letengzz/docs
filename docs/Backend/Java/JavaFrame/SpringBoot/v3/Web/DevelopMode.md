# 开发模式

## 前后分离模式

现代开发大部分应用都会采用前后端分离的方式进行开发，前端是一个独立的系统，后端也是一个独立的系统，后端系统只给前端系统提供数据 (JSON数据)，不需要后端解析模板页面，前端系统拿到后端提供的数据之后，前端负责填充数据即可。

使用`@RestController` 响应JSON数据。

前后端分离的好处：

- 职责清晰：前端专注于用户界面和用户体验，后端专注于业务逻辑和数据处理。
- 开发效率高：前后端可以并行开发，互不影响，提高开发速度。
- 可维护性强：代码结构更清晰，便于维护和扩展。
- 技术栈灵活：前后端可以独立选择最适合的技术栈。
- 响应式设计：前端可以更好地处理不同设备和屏幕尺寸。
- 性能优化：前后端可以独立优化，提升整体性能。
- 易于测试：前后端接口明确，便于单元测试和集成测试。

前后端分离的应用：前端是一个独立的系统，后端也是一个独立的系统，后端系统不再负责页面的渲染，后端系统只负责给前端系统提供开放的API接口，后端系统只负责数据的收集，然后将数据以JSON/XML等格式响应给前端系统。前端系统拿到接口返回的数据后，将数据填充到页面上。

例如：使用VUE开发的前端系统

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202411221446626.png)

## 前后不分离模式

传统的WEB应用 (非前后端分离)：浏览器页面上展示成什么效果，后端服务器说了算，这是传统web应用最大的特点。

使用功能`@Controller` + Thymeleaf模板引擎开发。

![image.png](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202411221444514.png)

