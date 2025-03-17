# 配合Devbox

在Devbox上创建前端开发环境、后端开发环境以及数据库。通过Cursor连接连接前后端环境，通过提示词让Cursor编写前后端代码，操作数据库已经前后端的对接等等。由于前后端代码已经运行环境都在devbox上，所以devbox可以100%成功的一键打包镜像并部署到提供公网的服务器上。

![image-20241204161913269](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/others/202412111101092.png)

## 注册Sealos

注册Sealos Devbox 地址：https://cloud.sealos.run/

## 创建数据库

创建数据库：

![image-20241204163823715](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/others/202412111101071.png)

![image-20241204163909999](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/others/202412111101336.png)

## 创建后端环境

选择devbox，创建一个项目选择Nodejs并更改端口为3000(与创建的项目端口号保持一致)：

![image-20241204164042991](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/others/202412111101852.png)

![image-20241204164051399](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/others/202412111102948.png)

编辑软件更改为Cursor：

![image-20241204164206910](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/others/202412111102194.png)

直接点击打开：

![image-20241204164255017](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/others/202412111111079.png)

安装即可：

![image-20241204164401635](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/others/202412111111294.png)

![image-20241204170046677](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/others/202412111112053.png)

全部展示：

![image-20241204170159554](https://fastly.jsdelivr.net/gh/LetengZzz/img/others/202412111112815.png)

可以进行聊天来生成代码的上下文，使用@符号来选定某一个代码文件作为上下文：

可以使用Command或者control+i打开聊天窗口

显示连接信息：

![image-20241204185811954](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/others/202412111110600.png)

调整脚本：

![image-20241204213702489](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/others/202412111110434.png)

## 生成测试用例

将地址复制并交给Cursor来进行生成并复制用例：

![image-20241204213438827](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/others/202412111112142.png)

## 创建前端环境

选择Vue：

![image-20241204213931537](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/others/202412111109996.png)

端口调整为5173：

![image-20241204214003168](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/others/202412111109014.png)

将提示词复制进行生成，修改其端口号：

![image-20241204220818420](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/others/202412111109223.png)

调整前端的sh文件：

![image-20241204234050430](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/others/202412111109412.png)

调整：

![image-20241204234155805](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/others/202412111109224.png)

## 前后端整合

将生成的测试用例在前端中对接：

![image-20241204220008275](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/others/202412111109051.png)

在后端复制该控制台的错误：

![image-20241204220208879](https://fastly.jsdelivr.net/gh/LetengZzz/img/others/202412111103543.png)

需要执行以下：

```
npm install cors
```

调整app.js：

![image-20241204220435960](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/others/202412111103172.png)

## cursor 提示词

### 后端提示词

```
请为我开发一个基于 Node.js 和Express 框架的 Todo List 后端项目。项目需要实现以下四个 RESTful API 接口：

1. 查询所有待办事项
   - 接口名: GET /api/get-todo
   - 功能: 从数据库的'list'集合中查询并返回所有待办事项
   - 参数: 无
   - 返回: 包含所有待办事项的数组
2. 添加新的待办事项
   - 接口名: POST /api/add-todo
   - 功能: 向'list'集合中添加新的待办事项
   - 参数: { "value": string, // 待办事项的具体内容 "isCompleted": boolean // 是否完成，默认为 false }
   - 返回: 新添加的待办事项对象，包含自动生成的唯一 id
3. 更新待办事项状态
   - 接口名: POST /api/update-todo/
   - 功能: 根据 id 更新指定待办事项的完成状态（将 isCompleted 值取反）
   - 参数: id
   - 返回: 更新后的待办事项对象
4. 删除待办事项
   - 接口名: POST /api/del-todo/
   - 功能: 根据 id 删除指定的待办事项
   - 参数: id
   - 返回: 删除操作的结果状态

技术要求：

1. 使用 Express 框架构建 API
2. 使用 MongoDB 作为数据库，通过 Mongoose 进行数据操作
3. 实现适当的错误处理和输入验证
4. 使用异步/等待（async/await）语法处理异步操作
5. 遵循 RESTful API 设计原则
6. 添加基本的日志记录功能

这里数据库连接方式要填写！！！

以下是数据库连接方式：mongodb://root:wl6rpvdj@test-db-mongodb.ns-3a60rdbj.svc:27017(内网地址)

1. 直接以当前目录作为项目根目。注意 此目录已经初始化完了nodejs项目 直接修改即可
2. 如果需要执行命令，请暂停创建文件，让我先执行命令

为这个项目中的所有代码写上详细注释
```

npm 安装依赖很慢请执行这行命令：

```jsx
npm config set registry <https://registry.npmmirror.com>
```

### 前端提示词

```
请为我开发一个基于 Vue 3 的Todo List 应用。要求如下：

1. 功能需求：
   - 添加新的待办事项
   - 标记待办事项为完成/未完成
   - 删除待办事项
   - 统计待办事项完成度
   - 过滤显示（全部/已完成/未完成）
2. UI/UX 设计要求：
   - 全屏响应式设计，适配不同设备
   - 拥有亮色模式和夜间模式
   - 现代化、简洁的界面风格
   - 丰富的色彩运用，但保持整体和谐
   - 流畅的交互动画，提升用户体验
   - 在按钮和需要的地方添加上图标
   - 参考灵感：结合苹果官网的设计美学

要求：

1. 直接以当前目录作为项目根目。注意 此目录已经初始化完了vue3项目结构 直接修改即可
2. 如果需要执行命令，请暂停创建文件，让我先执行命令
3. 请你根据我的需要，一步一步思考，给我开发这个项目。特别是UI部分 一定要足够美观和现代化
```

那这里总结一下 我们用cursor完成了前端代码的开发 我们就是发送提示词写清楚我们的需求 以及出现问题  或者想调整功能和UI 继续 用文字和他持续沟通即可。

## 上线项目

### 上线后端

点击发布版本：

![image-20241204234418010](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/others/202412111101534.png)

![image-20241204234502431](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/others/202412111101794.png)

调整项目部署即可：

![image-20241204234544704](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/others/202412111103680.png)

复制公网地址更改(可能位置不同)：

![image-20241204235120262](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/others/202412111109329.png)

### 上线前端

点击发布版本：

![image-20241204235220594](https://fastly.jsdelivr.net/gh/LetengZzz/img/others/202412111100442.png)

调整项目部署即可：

![image-20241204235527642](https://fastly.jsdelivr.net/gh/LetengZzz/img/others/202412111100263.png)