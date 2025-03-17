# KOI-ADMIN

KOI-ADMIN 是一个为中后台管理界面设计的开源模板，系统简洁、快捷和容易理解，对新手非常友好，代码有详细的注释，结构清晰，并提供了大量的代码示例和案例，方便开发者学习和使用。并提供权限管理、系统监控、文件图库、文章管理等功能。

Gitee：https://gitee.com/BigCatHome/koi-ui

![img](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202411212301373.png)

技术栈：Vue3 + Vite5 + TypeScript + Element Plus + Unocss + Pinia + Axios。

部分页面预览：鼠标（卡通人物）、头像、图标、字体都是二次元风格。

![img](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202411212302496.png)

![img](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202411212302590.png)

![img](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202411212302858.png)

![img](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202411212302757.png)

![img](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202411212302836.png)

![img](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202411212302549.png)

![img](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202411212302406.png)

安装使用：

```shell
// 若未配置 pnpm，请先下载并配置镜像
npm install pnpm -g --registry=https://registry.npmmirror.com
// 安装依赖
pnpm install
// 启动
pnpm run dev
```

功能和特性：

- 响应式设计：支持移动端、iPad 和 PC 端的多种布局和主题，确保在不同设备上都能有良好的用户体验。
- 权限管理：内置了权限管理功能，方便与后端接口对接，实现用户权限控制。
- 用户认证：集成了登录、注销和权限验证功能，保障应用的安全性。
- UI 组件封装：对按钮、输入框等基础 UI 组件进行了封装，增加了防抖、限流等实用功能，并且实现了背景水印和无限递归菜单。
- 状态管理：使用 Pinia 进行状态管理，并配置了持久化插件，以保持应用状态的持久化。
- UI 交互组件：对对话框、抽屉、通知等 UI 交互组件进行了二次封装，使得它们更易于使用。
- 网络请求管理：对 Axios 进行了二次封装，以统一管理网络请求。
- 图表和样式：集成了 Echarts 图表库和 Unocss 原子 CSS 框架，简化了样式编写和图表绘制。
- 代码规范：集成了 Eslint、Prettier 和 Stylelint，确保代码的规范性和一致性。
- 多环境支持：支持多环境配置，方便在开发、测试和生产环境中使用。
- Mock 服务：集成了 Mock 接口服务，便于在开发阶段模拟后端数据。
- 图标系统：集成了 Iconify 图标库，支持自定义 SVG 图标，使得图标使用更加灵活和优雅。

