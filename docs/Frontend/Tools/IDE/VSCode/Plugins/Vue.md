# Vue 插件

安装官方推荐的`vscode`插件：

![image-20241014111500415](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202410170001624.png) 

总结：

- `Vite` 项目中，`index.html` 是项目的入口文件，在项目最外层。
- 加载`index.html`后，`Vite` 解析 `<script type="module" src="xxx">` 指向的`JavaScript`。
- `Vue3`**中是通过 **`createApp` 函数创建一个应用实例。

通过`Vue VSCode Snippets`快速生成模板：

![image-20241014111807467](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202410170001303.png)

通过vbase来生成各类型模板：

![image-20241014140852128](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202410170001578.png)

更多详见：https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets

vue：

- `vbase`：带有 SCSS 的基础单文件组件
- `vbase-3`：单文件组件组合式 API 与 SCSS
- `vbase-3-setup`：单文件组件，使用setup语法糖、组合式 API、SCSS
- `vbase-3-reactive`：单文件组件组合式 API 与响应式和 SCSS
- `vbase-css`：带有CSS的单个文件组件库
- `vbase-pcss`：带有 PostCSS 的单文件组件基础
- `vbase-styl`：带有 Stylus 的单文件组件基础
- `vbase-ts`：带有 TypeScript 的单文件组件基础
- `vbase-ts-class`：使用 TypeScript 类格式的单文件组件基础
- `vbase-3-ts`：带有 TypeScript 的单文件组件组合式 API
- `vbase-3-ts-setup`：使用 TypeScript 的单文件组件设置组合式 API
- `vbase-ns`：无样式的单文件组件
- `vbase-sass`：单文件组件基础与 SASS
- `vbase-less`：带有 LESS 的单文件组件基础

模板：

-  `vfor`： v-for指令                    

-  `vmodel`：语义 v-model 指令        
-  `vmodel-num`：语义v-模型数指令       

脚本：                                          

-  `vdata`：组件数据函数                     

-  `vmethod`：Vue方法                             

Vue 组合式 API：

-  `v3reactive`         Vue Composition API - reactive                        

-  `v3reactive-setup`   Vue Composition API - reactive with setup boilerplate 
-  `v3computed`         Vue Composition API - computed                        
-  `v3watch`            Vue Composition API - watcher single source           
-  `v3watch-array`      Vue Composition API - watch as array                  
-  `v3watcheffect`      Vue Composition API - watchEffect                     
-  `v3ref`              Vue Ref                                               
-  `v3onmounted`        Lifecycle hook - onMounted                            
-  `v3onbeforemount`    Lifecycle hook - onBeforeMount                        
-  `v3onbeforeupdate`   Lifecycle hook - onBeforeUpdate                       
-  `v3onupdated`        Lifecycle hook - onUpdated                            
-  `v3onerrorcaptured`  Lifecycle hook - onErrorCaptured                      
-  `v3onunmounted`      Lifecycle hook - (destroyed) onUnmounted              
-  `v3onbeforeunmount`  Lifecycle hook - (beforeDestroy) onBeforeUnmount      
-  `v3useinoptions`     Use Composition API in Options API                    

Vuex：         

-  `vstore`：Base for Vuex store.js         
-  `vgetter`：Vuex Getter                    
-  `vmutation`：Vuex Mutation                  
-  `vaction`：Vuex Action                    
-  `vmodule`：Vuex Module                    
-  `vstore-import`：Import vuex store into main.js 
-  `vstore2`：Updated Base for Vuex store    

Vue Router：                         

-  `vrouter`：Vue Router 基础                   
-  `vscrollbehavior`：Vue Router 滚动行为            
-  `vbeforeeach`：Vue Router global guards beforeEach           
-  `vbeforeresolve`：Vue Router global guards beforeResolve        
-  `vaftereach`：Vue Router global guards afterEach            
-  `vbeforeenter`：Vue Router per-route guard beforeEnter        
-  `vbeforerouteenter`：Vue Router component guards beforeRouteEnter  
-  `vbeforerouteupdate` ：Vue Router component guards beforeRouteUpdate 
-  `vbeforerouteleave`：Vue Router component guards beforeRouteLeave  

Vue 配置：

- `vplugin`：将一个插件导入 main.js 文件或插件文件中。
- `vconfig`：vue.config.js文件，示例将一个 Sass 文件导入到每个组件中。

Nuxt 配置：

- `nfont`：在 Nuxt 项目的 nuxt-config 中包含字体的链接
- `ncss`：链接到诸如 normalize 之类的 CSS 资源。

Nuxt 页面：

- `nasyncdata`：Nuxt 异步数据
- `nasyncdataaxios`：Nuxt 使用axios的异步数据
- `nfetch`：Nuxt  Fetch
- `nfetchaxios`：Nuxt Fetch 通过axois
- `nhead`：Nuxt Head
- `nparam`：Nuxt Route Params

其他：

- `gitignore`：.gitignore 文件
