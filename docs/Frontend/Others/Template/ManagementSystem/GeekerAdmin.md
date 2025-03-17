# Geeker-Admin

Geeker-Admin一款基于最新技术栈（Vue3.4、TypeScript、Vite5、Pinia、Element-Plus）的开源后台管理框架。

该项目采用先进的开发工具和技术，提供了强大的ProTable组件以提升开发效率，并封装了多种常用组件、Hooks、指令、动态路由及按钮级权限控制功能。

在线体验：https://admin.spicyboy.cn

GitHub：https://github.com/HalseySpicy/Geeker-Admin

Gitee：https://gitee.com/HalseySpicy/Geeker-Admin

文档地址**：**https://docs.spicyboy.cn

![image-20241121200040623](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202411212000325.png)

**项目功能**：

- 技术栈：基于Vue3.4和TypeScript，采用单文件组件 `<script setup>`。

- 构建工具：使用Vite5进行开发与打包，支持gzip/brotli压缩、tsx语法和跨域代理。

- 状态管理：采用Pinia替代Vuex，更轻量且易于使用，并集成持久化插件。
- 网络请求：对Axios进行全面封装，包括请求拦截、取消以及常用请求方法。
- 表格组件：基于Element UI二次封装的ProTable组件，支持通过配置项Columns实现表格功能。
- 主题与国际化：支持Element组件尺寸切换、多主题布局、暗黑模式及i18n国际化。
- 路由管理：利用VueRouter实现动态路由权限拦截与懒加载，并支持页面按钮级别的权限控制。
- 页面缓存：通过KeepAlive实现页面缓存及多级嵌套路由缓存。
- 自定义指令：开发了一系列常用指令，如权限检查、复制、水印、拖拽、节流、防抖和长按等。
- 代码质量：集成Prettier统一代码格式，并使用ESLint和Stylelint进行代码校验。
- 提交规范：借助husky、lint-staged、commitlint、cz-git等工具规范提交信息。

效果页面：

- 首页：

  ![image-20241121200300353](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202411212004474.png)

- 超级表格：

  ![image-20241121200357304](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202411212004371.png)

- 数据统计：

  ![image-20241121200333738](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202411212004512.png)

- 数据大屏：

  ![image-20241121200416774](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202411212004613.png)

