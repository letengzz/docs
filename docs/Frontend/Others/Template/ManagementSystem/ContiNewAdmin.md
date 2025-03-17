# ContiNew Admin

ContiNew Admin 是一个为现代化管理界面设计的前后端分离系统框架，提供了一整套解决方案，旨在帮助开发者快速构建和部署企业级应用程序。包含功能：用户管理、部门管理、角色管理、菜单管理、通知公告、字典管理、文件管理、存储管理、系统配置、个人中心、消息中心、邮件配置、安全配置、代码生成、在线用户、日志管理。

前端运行环境：Node 18+、PNPM 8+、Git。

后端运行环境：JDK17、Maven 3.6+、MySQL 5.7+、Redis 7。

部分页面预览：

![图片](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202411181918450.png)

![图片](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202411181918798.webp)

![图片](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202411181918096.webp)

![图片](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202411181918865.webp)

![图片](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202411181918571.webp)

![图片](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202411181918457.webp)

技术栈与架构：

- Vue 3：利用 Vue.js 的最新版本，享受其性能优化和新特性。
- Arco Design：使用 Arco Design 作为 UI 组件库，确保界面的一致性和美观。
- TypeScript：提供类型安全性和更好的开发体验。
- Vite 5：使用 Vite 作为前端构建工具，提高开发效率和构建速度。
- Spring Boot 3：基于 Spring Boot 的最新版本，简化企业级应用开发。
- Sa-Token：用于权限和认证的解决方案。
- MyBatis Plus：简化数据库操作的 MyBatis 增强工具。
- Redisson & JetCache：用于缓存管理，提高应用性能。
- Jackson：用于 JSON 处理。
- Spring Doc：自动生成 API 文档。
- Crane4j：用于性能监控。
- Hutool：Java 工具类库，简化开发。

功能和特性：

- 业务效率：提供代码生成器，一键生成前后端 80% 的代码，包括基础的 CRUD 操作、权限控制、参数校验等。
- 集成组件：提供 ContiNew Starter 项目，包含后端基础组件和框架集成配置，可快速引入到任意项目中。
- 代码规范：高注释覆盖率，清晰的代码分层和命名规范。
- 安全规范：集成 Sonar 和 Codacy 进行代码质量扫描，定期扫描 CVE 漏洞，及时修复，供数据库字段加密、JSON 脱敏、XSS 过滤等安全解决方案。
- 业务功能：提供基于 RBAC 的权限控制和通用数据权限，包含丰富的通用业务功能，如第三方登录、邮件、短信服务等。
