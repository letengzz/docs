# Pure Admin

Pure Admin 是一个开源的前端中后台管理系统模板，基于Vue3、Element-Plus，支持移动端、国际化、多主题设置，支持前端静态路由、后端动态路由配置，旨在为开发人员提供一个易于使用、高质量的后台管理界面解决方案。并提供细致的文档和示例，以便用户可以快速上手。

Prue Admin 采用最新技术栈，并带有快速热更新 HMR，优秀的打包技术。集成后台系统常用的多级菜单、表单表格、用户页面、按钮级权限，角色菜单部门等权限功能。

技术栈：Vue3 + Vite5 + TypeScript5 + Element-Plus + Pinia + Axios + Tailwindcss + Animate.css + Echarts

GitHub：https://github.com/pure-admin/vue-pure-admin

精简版：https://github.com/pure-admin/pure-admin-thin

官方文档：https://pure-admin.github.io/pure-admin-doc

![image-20241022094247331](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202410220942779.png)

Pure Admin 包括完整版和精简版两个模板，完整版集成多个实用组件：图片裁剪、Swiper 插件、数字动画、右键菜单、JSON 编辑器、虚拟滚动、动画选择器、图标选择器、颜色选择器、图形验证码、二维码、条形码等等。

部分功能展示：

- 图形验证码功能

  ![image-20241022094332414](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202410220943718.png)

- 表格无限滚动功能：

  ![image-20241022094547155](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202410220945895.png)

- 部分页面展示：

  控制台：

  ![image-20241022094624237](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202410220946768.png)

  数据列表：

  ![image-20241022095008430](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202410220950298.png)

  结果页：

  ![image-20241022094931871](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202410220949307.png)

  用户管理：

  ![image-20241022094847450](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202410220948308.png)

  菜单管理：

  ![image-20241022094827496](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202410220948326.png)

  富文本编辑器：

  ![image-20241022094751222](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202410220947121.png)

Pure Admin 还提供了一套 Node JS 版本的后端代码，供开发者学习使用：https://github.com/pure-admin/pure-admin-backend

开始项目：

```shell
// 安装脚手架
npm install -g @pureadmin/cli
// 创建项目
pure create
```

项目依赖：

```json
"dependencies": {
  "@amap/amap-jsapi-loader": "^1.0.1",
  "@howdyjs/mouse-menu": "^2.1.3",
  "@infectoone/vue-ganttastic": "^2.3.2",
  "@logicflow/core": "^1.2.28",
  "@logicflow/extension": "^1.2.28",
  "@pureadmin/descriptions": "^1.2.1",
  "@pureadmin/table": "^3.2.0",
  "@pureadmin/utils": "^2.4.8",
  "@vue-flow/background": "^1.3.0",
  "@vue-flow/core": "^1.39.3",
  "@vueuse/core": "^10.11.1",
  "@vueuse/motion": "^2.2.3",
  "@wangeditor/editor": "^5.1.23",
  "@wangeditor/editor-for-vue": "^5.1.12",
  "@zxcvbn-ts/core": "^3.0.4",
  "animate.css": "^4.1.1",
  "axios": "^1.7.3",
  "china-area-data": "^5.0.1",
  "cropperjs": "^1.6.2",
  "dayjs": "^1.11.12",
  "echarts": "^5.5.1",
  "el-table-infinite-scroll": "^3.0.6",
  "element-plus": "^2.8.0",
  "intro.js": "^7.2.0",
  "js-cookie": "^3.0.5",
  "jsbarcode": "^3.11.6",
  "localforage": "^1.10.0",
  "mint-filter": "^4.0.3"
}
"dependencies": {
    "mitt": "^3.0.1",
    "mqtt": "4.3.7",
    "nprogress": "^0.2.0",
    "path": "^0.12.7",
    "pinia": "^2.2.1",
    "pinyin-pro": "^3.24.2",
    "plus-pro-components": "^0.1.14",
    "qrcode": "^1.5.4",
    "qs": "^6.13.0",
    "responsive-storage": "^2.2.0",
    "sortablejs": "^1.15.2",
    "swiper": "^11.1.9",
    "typeit": "^8.8.4",
    "v-contextmenu": "^3.2.0",
    "v3-infinite-loading": "^1.3.1",
    "version-rocket": "^1.7.2",
    "vue": "^3.4.37",
    "vue-i18n": "^9.13.1",
    "vue-json-pretty": "^2.4.0",
    "vue-pdf-embed": "^2.1.0",
    "vue-router": "^4.4.3",
    "vue-tippy": "^6.4.4",
    "vue-types": "^5.1.3",
    "vue-virtual-scroller": "2.0.0-beta.8",
    "vue-waterfall-plugin-next": "^2.4.3",
    "vue3-danmaku": "^1.6.1",
    "vue3-puzzle-vcode": "^1.1.7",
    "vuedraggable": "^4.1.0",
    "vxe-table": "4.6.17",
    "wavesurfer.js": "^7.8.3",
    "xgplayer": "^3.0.19",
    "xlsx": "^0.18.5"
  }
```
