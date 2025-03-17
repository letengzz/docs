// 前端基础
export const FrontBasic = [
    {
        text: '基础',
        link: '/docs/Frontend/Basic/index.md',
        items: [
            { text: '前端开发', link: '/docs/Frontend/Basic/FrontendDevelop.md' },
            { text: 'HTML', link: '/docs/Frontend/Basic/HTML/index.md' },
            {
                text: 'CSS', link: '/docs/Frontend/Basic/CSS/index.md', collapsed: true, items: [
                    { text: 'flax 弹性布局', link: '/docs/Frontend/Basic/CSS/flex.md' },
                    {
                        text: '预处理器', collapsed: true, link: '/docs/Frontend/Basic/CSS/Preprocessor/index.md', items: [
                            { text: 'Less', link: '/docs/Frontend/Basic/CSS/Preprocessor/Less.md' },
                            { text: 'Sass', link: '/docs/Frontend/Basic/CSS/Preprocessor/Sass.md' },
                        ]
                    },
                    {
                        text: '原子化CSS框架', link: '/docs/Frontend/Basic/CSS/AtomicCSS/index.md', collapsed: true, items: [
                            { text: 'UnoCSS', link: '/docs/Frontend/Basic/CSS/AtomicCSS/UnoCSS.md' },
                            { text: 'TailwindCSS', link: '/docs/Frontend/Basic/CSS/AtomicCSS/TailwindCSS.md' },
                        ]
                    },
                ]
            },
            {
                text: 'JavaScript', link: '/docs/Frontend/Basic/JavaScript/index.md', collapsed: true, items: [
                    { text: 'JavaScript 数据类型', link: '/docs/Frontend/Basic/JavaScript/DataType.md' },
                    { text: 'JavaScript 模块化', link: '/docs/Frontend/Basic/JavaScript/Modularization.md' },
                    {
                        text: '拓展', collapsed: true, items: [
                            { text: '简写技巧', link: '/docs/Frontend/Basic/JavaScript/Skills.md' },
                        ]
                    }
                ]
            },
            {
                text: 'TypeScript', link: '/docs/Frontend/Basic/TypeScript/index.md', collapsed: true, items: [
                    { text: 'TypeScript 概述', link: '/docs/Frontend/Basic/TypeScript/Overview.md' },
                    { text: 'TypeScript 编译', link: '/docs/Frontend/Basic/TypeScript/Compile.md' },
                    { text: 'TypeScript 基本使用', link: '/docs/Frontend/Basic/TypeScript/BasicUse.md' },
                    { text: 'TypeScript 基本类型', link: '/docs/Frontend/Basic/TypeScript/BasicType.md' },
                    { text: 'TypeScript 内置函数', link: '/docs/Frontend/Basic/TypeScript/BuiltinFunction.md' },
                    { text: 'TypeScript 类型别名', link: '/docs/Frontend/Basic/TypeScript/TypeAlias.md' },
                    { text: 'TypeScript 面向对象', link: '/docs/Frontend/Basic/TypeScript/ObjectOriented.md' },
                ]
            },
            {
                text: '构建工具', link: '/docs/Frontend/Basic/BuildTool/index.md', collapsed: true, items: [
                    { text: 'Vite', link: '/docs/Frontend/Basic/BuildTool/Vite.md' },
                ]
            },
            {
                text: 'Ajax', link: '/docs/Frontend/Basic/AJAX/index.md', collapsed: true, items: [
                    { text: 'axios', link: '/docs/Frontend/Basic/AJAX/axios.md' },
                ]
            },
            {
                text: 'ECMAScript', link: '/docs/Frontend/Basic/ECMAScript/index.md', collapsed: true, items: [
                    { text: 'ECMAScript5', link: '/docs/Frontend/Basic/ECMAScript/ECMAScript5.md' },
                    { text: 'ECMAScript6', link: '/docs/Frontend/Basic/ECMAScript/ECMAScript6.md' },
                ]
            },
            {
                text: 'Node.js', link: '/docs/Frontend/Basic/NodeJs/index.md', collapsed: true, items: [
                    { text: 'Node.js 概述', link: '/docs/Frontend/Basic/NodeJs/Overview.md' },
                    { text: 'Node.js 安装', link: '/docs/Frontend/Basic/NodeJs/Install.md' },
                    { text: 'Node.js Buffer', link: '/docs/Frontend/Basic/NodeJs/Buffer.md' },
                    {
                        text: 'Node.js 包管理工具', link: '/docs/Frontend/Basic/NodeJs/PackageManagementTool/index.md', collapsed: true,
                        items: [
                            { text: 'npm包管理工具', link: '/docs/Frontend/Basic/NodeJs/PackageManagementTool/npm.md' },
                            { text: 'cnpm包管理工具', link: '/docs/Frontend/Basic/NodeJs/PackageManagementTool/cnpm.md' },
                            { text: 'yarn包管理工具', link: '/docs/Frontend/Basic/NodeJs/PackageManagementTool/yarn.md' },
                            {
                                text: '拓展', collapsed: true, items: [
                                    { text: 'npm和yarn选择', link: '/docs/Frontend/Basic/NodeJs/PackageManagementTool/npm&yarn.md' },
                                    { text: '管理发布包', link: '/docs/Frontend/Basic/NodeJs/PackageManagementTool/ManageReleasePackages.md' },
                                ]
                            }
                        ]
                    },
                    { text: 'NVM管理版本工具', link: '/docs/Frontend/Basic/NodeJs/NVM.md' },

                    {
                        text: '模块', collapsed: true, items: [
                            { text: '模块化', link: '/docs/Frontend/Basic/NodeJs/Modules/index.md' },
                            { text: 'fs 模块', link: '/docs/Frontend/Basic/NodeJs/Modules/fs.md' },
                            { text: 'path 模块', link: '/docs/Frontend/Basic/NodeJs/Modules/path.md' },
                            { text: 'http 模块', link: '/docs/Frontend/Basic/NodeJs/Modules/http.md' },
                            { text: 'url 模块', link: '/docs/Frontend/Basic/NodeJs/Modules/url.md' },
                        ]
                    },
                    {
                        text: '框架', collapsed: true, items: [
                            {
                                text: 'Express 框架', link: '/docs/Frontend/Basic/NodeJs/Frame/express/index.md', collapsed: true,
                                items: [
                                    { text: 'Express 基础操作', link: '/docs/Frontend/Basic/NodeJs/Frame/express/BasicOperations.md' },
                                    { text: 'Express 中间件', link: '/docs/Frontend/Basic/NodeJs/Frame/express/Middleware.md' },
                                    { text: 'Express Router', link: '/docs/Frontend/Basic/NodeJs/Frame/express/Router.md' },
                                    { text: 'EJS 模板引擎', link: '/docs/Frontend/Basic/NodeJs/Frame/express/EJS.md' },
                                ]
                            },
                        ]
                    },
                    {
                        text: '整合', collapsed: true, items: [
                            { text: '整合 MongoDB' },
                        ]
                    },
                ]
            },
        ]
    },
]

// 前端框架
export const FrontFrame = [
    {
        text: '框架',
        link: '/docs/Frontend/Frame/index.md',
        items: [
            {
                text: 'Electron', link: '/docs/Frontend/Frame/Electron/index.md', collapsed: true,
                items: [
                    { text: 'Electron 概述', link: '/docs/Frontend/Frame/Electron/Overview.md' },
                    { text: 'Electron 搭建环境', link: '/docs/Frontend/Frame/Electron/BuildEnvironment.md' },
                    { text: 'Electron 配置', link: '/docs/Frontend/Frame/Electron/Configuration.md' },
                    { text: 'Electron 进程', link: '/docs/Frontend/Frame/Electron/Process.md' },
                    { text: 'Electron Preload 脚本', link: '/docs/Frontend/Frame/Electron/Preload.md' },
                    { text: 'Electron 进程通信 IPC', link: '/docs/Frontend/Frame/Electron/IPC.md' },
                    { text: 'Electron 打包应用', link: '/docs/Frontend/Frame/Electron/PackageApplications.md' },
                    { text: 'Electron 构建工具', link: '/docs/Frontend/Frame/Electron/BuildingTools.md' },
                    {
                        text: '拓展', collapsed: true, items: [
                            { text: 'Electron+Vue3项目打包', link: '/docs/Frontend/Frame/Electron/VuePackaging.md' },
                        ]
                    },
                ]
            },
            { text: 'React', link: '/docs/Frontend/Frame/React/index.md' },
            { text: 'Uniapp', link: '/docs/Frontend/Frame/Uniapp/index.md' },
            {
                text: 'Vue', link: '/docs/Frontend/Frame/Vue/index.md', collapsed: true,
                items: [
                    {
                        text: 'Vue2', link: '/docs/Frontend/Frame/Vue/Vue2/index.md', collapsed: true,
                        items: [
                            { text: 'Vue2 创建工程', link: '/docs/Frontend/Frame/Vue/Vue2/CreateProject.md' },
                            {
                                text: 'Vue2 核心', link: '/docs/Frontend/Frame/Vue/Vue2/Core/index.md', collapsed: true,
                                items: [
                                    { text: '内置指令', link: '/docs/Frontend/Frame/Vue/Vue2/Core/BuiltinCommands.md' },
                                    { text: '事件处理', link: '/docs/Frontend/Frame/Vue/Vue2/Core/EventHandling.md' },
                                    { text: '计算属性', link: '/docs/Frontend/Frame/Vue/Vue2/Core/watch.md' },
                                    { text: '类和样式绑定' },
                                    { text: '侦听属性' },
                                    { text: '数据绑定', link: '/docs/Frontend/Frame/Vue/Vue2/Core/DataBinding.md' },
                                    { text: '条件渲染', link: '/docs/Frontend/Frame/Vue/Vue2/Core/ConditionalRendering.md' },
                                    { text: '列表渲染', link: '/docs/Frontend/Frame/Vue/Vue2/Core/ListRendering.md' },
                                    { text: '列表过滤' },
                                    { text: '其他指令' },
                                    { text: '自定义指令' },
                                    { text: '响应式与数据劫持' },
                                    { text: '生命周期', link: '/docs/Frontend/Frame/Vue/Vue2/Core/Lifecycle.md' },
                                    { text: 'vue_config.js 配置', link: '/docs/Frontend/Frame/Vue/Vue2/Core/Configuration.md' },
                                ]
                            },
                            { text: 'Vue2 组件化', link: '/docs/Frontend/Frame/Vue/Vue2/Componentization/index.md' },
                            { text: 'Vue2 vue-resource' },
                            { text: 'Vue2 Vuex' },
                            { text: 'Vue2 路由' },
                        ]
                    },
                    {
                        text: 'Vue3', link: '/docs/Frontend/Frame/Vue/Vue3/index.md', collapsed: true, items: [
                            { text: 'Vue3 概述', link: '/docs/Frontend/Frame/Vue/Vue3/Overview.md' },
                            { text: 'Vue3 创建工程', link: '/docs/Frontend/Frame/Vue/Vue3/CreateProject.md' },
                            { text: 'Vue3 基本操作', link: '/docs/Frontend/Frame/Vue/Vue3/BasicOperations.md' },
                            { text: 'Vue3 核心语法', link: '/docs/Frontend/Frame/Vue/Vue3/CoreGrammar.md' },
                            { text: 'Vue3 路由', link: '/docs/Frontend/Frame/Vue/Vue3/Router.md' },
                            { text: 'Vue3 Pinia', link: '/docs/Frontend/Frame/Vue/Vue3/Pinia.md' },
                            { text: 'Vue3 组件通信', link: '/docs/Frontend/Frame/Vue/Vue3/ComponentCommunication.md' },
                            { text: 'Vue3 其它 API', link: '/docs/Frontend/Frame/Vue/Vue3/OtherAPIs.md' },
                            { text: 'Vue3 新组件', link: '/docs/Frontend/Frame/Vue/Vue3/NewComponent.md' },
                            {
                                text: '拓展', collapsed: true, items: [
                                    { text: 'Vue3 常见问题', link: '/docs/Frontend/Frame/Vue/Vue3/Errors.md' },
                                    { text: 'Vue3 搭建基础环境', link: '/docs/Frontend/Frame/Vue/Vue3/BuildBasic.md' },
                                ]
                            },
                        ]
                    },
                ]
            },
        ]
    }
]

// 前端工具
export const FrontTools = [
    {
        text: '工具',
        link: '/docs/Frontend/Tools/index.md',
        items: [
            {
                text: 'IDE', link: '/docs/Frontend/Tools/IDE/index.md', collapsed: true, items: [
                    {
                        text: 'VSCode', link: '/docs/Frontend/Tools/IDE/VSCode/index.md', collapsed: true,
                        items: [
                            { text: '基础操作', link: '/docs/Frontend/Tools/IDE/VSCode/BasicOperation.md' },
                            {
                                text: '插件', link: '/docs/Frontend/Tools/IDE/VSCode/Plugins/index.md', collapsed: true, items: [
                                    { text: '插件安装', link: '/docs/Frontend/Tools/IDE/VSCode/Plugins/Install.md' },
                                    { text: 'Vue 插件', link: '/docs/Frontend/Tools/IDE/VSCode/Plugins/Vue.md' },
                                    { text: 'Element 插件', link: '/docs/Frontend/Tools/IDE/VSCode/Plugins/Element.md' },
                                ]
                            },
                        ]
                    },
                    { text: 'WebStorm', link: '/docs/Frontend/Tools/IDE/WebStorm/index.md' },
                ]
            },
        ]
    }
]

// 前端其他
export const FrontOthers = [
    {
        text: '其他',
        link: '/docs/Frontend/Others/index.md',
        items: [
            { text: 'HTTP 协议', link: '/docs/Frontend/Others/HTTP.md' },
            { text: '跨域', link: '/docs/Frontend/Others/Cross/index.md' },
            {
                text: '组件库', link: '/docs/Frontend/Others/ComponentLibrary/index.md', collapsed: true,
                items: [
                    { text: 'Ant Design', link: '/docs/Frontend/Others/ComponentLibrary/AntDesign.md' },
                    { text: 'ArcoDesign', link: '/docs/Frontend/Others/ComponentLibrary/ArcoDesign.md' },
                    { text: 'ElementUI', link: '/docs/Frontend/Others/ComponentLibrary/ElementUI.md' },
                    { text: 'ElementPlus', link: '/docs/Frontend/Others/ComponentLibrary/ElementPlus.md' },
                    { text: 'OpenTiny', link: '/docs/Frontend/Others/ComponentLibrary/OpenTiny.md' },
                    {
                        text: '移动端组件库', collapsed: true, items: [
                            { text: 'Varlet', link: '/docs/Frontend/Others/ComponentLibrary/Mobile/Varlet.md' },
                        ]
                    },
                    {
                        text: 'Uniapp组件库', collapsed: true, items: [
                            { text: 'Wot Design Uni', link: '/docs/Frontend/Others/ComponentLibrary/Uniapp/WotDesignUni.md' },
                        ]
                    },
                ]
            },
            {
                text: '小程序', link: '/docs/Frontend/Others/Wxmin/index.md', collapsed: true, items: [
                    { text: '微信原生语法', link: '/docs/Frontend/Others/Wxmin/NativeGrammar.md' },
                    { text: 'Uniapp', link: '/docs/Frontend/Others/Wxmin/UniApp.md' },
                ]
            },
            {
                text: '库', link: '/docs/Frontend/Others/Library/index.md', collapsed: true, items: [
                    { text: '前端拖拽库 pragmatic-drag-and-drop', link: '/docs/Frontend/Others/Library/pragmatic-drag-and-drop.md' },
                ]
            },
            {
                text: '模板', link: '/docs/Frontend/Others/Template/index.md', collapsed: true, items: [
                    {
                        text: '中后台管理系统框架', items: [
                            { text: 'vue-element-admin', link: '/docs/Frontend/Others/Template/ManagementSystem/vue-element-admin.md' },
                            { text: 'vue-admin-template', link: '/docs/Frontend/Others/Template/ManagementSystem/vue-admin-template.md' },
                            { text: 'vue-bag-admin', link: '/docs/Frontend/Others/Template/ManagementSystem/vue-bag-admin.md' },
                            { text: 'Pure Admin', link: '/docs/Frontend/Others/Template/ManagementSystem/PureAdmin.md' },
                            { text: 'Fantastic admin', link: '/docs/Frontend/Others/Template/ManagementSystem/Fantasticadmin.md' },

                        ]
                    },
                ]
            },
        ]
    }
]