# Webman Admin

码动管理系统。前端开发采用 Vue3.0、Vite、 TypeScript 的中后台解决方案，目标是为开发中大型项目提供开箱即用的解决方案。包括二次封装组件、utils、hooks、动态菜单、权限校验、多主题配置、按钮级别权限控制等功能。

项目会使用前端较新的技术栈，可以作为项目的启动模板，以帮助你快速搭建企业级中后台产品原型。也可以作为一个示例，用于学习 vue3、vite、ts 等主流技术。该项目会持续跟进最新技术，并将其应用在项目中，后端采用高性能PHP 框架 **webman**。

- 码动官网：http://madong.tech
- 演示地址：http://antd-vben5.madong.tech
- 代码下载：https://gitee.com/motion-code/MaDong

**系统要求**：

- PHP >=8.1
- MySQL >=5.7

**特点**

- 最新技术栈：使用 Vue3、Vite、TypeScript 等前端前沿技术开发。
- 国际化：内置完善的国际化方案，支持多语言切换。
- 权限验证：完善的权限验证方案，按钮级别权限控制。
- 多主题：内置多种主题配置和黑暗模式，满足个性化需求。
- 动态菜单：支持动态菜单，可以根据权限配置显示菜单。
- Mock 数据：基于 Nitro 的本地高性能 Mock 数据方案。
- 组件丰富：提供了丰富的组件，可以满足大部分的业务需求。
- 规范：代码规范，使用ESLint、Prettier、Stylelint、Publint、CSpell等工具保证代码质量。
- 工程化：使用 Pnpm Monorepo、TurboRepo、Changeset 等工具，提高开发效率。
- 多UI库支持：支持Ant Design Vue、Element Plus、Naive等主流 UI 库，不再限制于特定框架。

**目录结构**：

```
.
├── app                           应用目录
│   ├── admin                     应用app
│   ├── dao                       Dao层目录
│   ├── enum                      枚举目录
│   ├── event                     事件目录
|   ├── middlewere                中间件目录
|   ├── model                     模型层目录
|   ├── quere                     队列目录
|   ├── services                  服务层目录
|   └── functions.php             业务自定义函数写到这个文件里
├── config                        配置目录
│   ├── app.php                   应用配置
│   ├── autoload.php              这里配置的文件会被自动加载
│   ├── bootstrap.php             进程启动时onWorkerStart时运行的回调配置
│   ├── container.php             容器配置
│   ├── dependence.php            容器依赖配置
│   ├── database.php              数据库配置
│   ├── exception.php             异常配置
│   ├── log.php                   日志配置
│   ├── middleware.php            中间件配置
│   ├── process.php               自定义进程配置
│   ├── redis.php                 redis配置
│   ├── route.php                 路由配置
│   ├── server.php                端口、进程数等服务器配置
│   ├── view.php                  视图配置
│   ├── static.php                静态文件开关及静态文件中间件配置
│   ├── translation.php           多语言配置
│   └── session.php               session配置
├── public                        静态资源目录
├── madong                        自定义扩展库目录
├── process                       自定义进程目录
├── runtime                       应用的运行时目录，需要可写权限
├── start.php                     服务启动文件
├── vendor                        composer安装的第三方类库目录
└── support                       类库适配(包括第三方类库)
    ├── Request.php               请求类
    ├── Response.php              响应类
    ├── Plugin.php                插件安装卸载脚本
    ├── helpers.php               助手函数(业务自定义函数请写到app/functions.php)
    └── bootstrap.php             进程启动后初始化脚本
```

**系统架构**：在后端系统中，控制层、服务层、验证层、DAO层和模型层是常见的架构组成部分。以下是对每个层次的简要介绍：

1. **控制层 (Controller)**：控制层负责处理来自客户端的请求，接收输入并返回响应。它的主要职责包括：

   - 接收和解析 HTTP 请求。

   - 调用服务层的相应方法进行业务处理。

   - 返回处理结果给客户端，通常是 JSON 格式的数据。

   - 处理请求的路由和参数。

2. **服务层 (Service)**：服务层负责实现具体的业务逻辑，通常包括：

   - 处理复杂的业务规则和流程。

   - 调用 DAO 层进行数据访问。

   - 进行事务管理，确保数据一致性。

   - 提供接口供控制层调用，简化控制层的逻辑。

3. **验证层 (Validation)**：验证层主要负责对输入数据进行验证，确保数据的有效性和完整性。它的主要功能包括：

   - 定义输入数据的验证规则。

   - 检查请求参数是否符合预期格式。

   - 返回验证错误信息，阻止无效数据进入业务逻辑层。

4. **DAO层 (Data Access Object)**：DAO层负责与数据库进行交互，提供数据访问方法。它的主要职责包括：

   - 封装数据库操作，如增删改查。

   - 提供对数据的持久化操作。

   - 处理与数据库的连接和资源管理。

5. **模型层 (Model)**：模型层定义了系统的数据结构和业务对象，通常包括：

   - 数据模型的定义（例如，用户、订单等）。

   - 数据与对象之间的映射关系。

   - 可能包含一些与数据相关的业务逻辑。

这种分层架构使得后端系统的各个部分职责明确，便于维护和扩展。每一层都可以独立开发和测试，增强了系统的可读性和可复用性。通过这种结构，开发者可以更容易地管理复杂的业务逻辑和数据操作，从而提高系统的整体性能和稳定性。

**项目展示**：

![img](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202411212214527.png)

![img](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202411212214590.png)

![img](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202411212214707.png)

![img](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202411212214257.png)

![img](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202411212214296.png)

![img](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202411212214139.png)

![img](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202411212214416.png)
