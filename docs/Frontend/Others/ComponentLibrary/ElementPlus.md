# Element Plus

官方网站：https://element-plus.org/zh-CN/

## 安装

安装Element plus：

```shell
# 选择一个你喜欢的包管理器

# NPM
npm install element-plus --save

# Yarn
yarn add element-plus

# pnpm
pnpm install element-plus
```

安装图标：

```shell
# 选择一个你喜欢的包管理器

# NPM
npm install @element-plus/icons-vue
# Yarn
yarn add @element-plus/icons-vue
# pnpm
pnpm install @element-plus/icons-vue
```

## 完整引入

引入ElementPlus：

```typescript
// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
```

完整引入图标：

```typescript
// main.ts

// 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
```

## 按需引入

官方文档：https://element-plus.org/zh-CN/guide/quickstart.html#%E6%8C%89%E9%9C%80%E5%AF%BC%E5%85%A5

参照官方文档安装`unplugin-vue-components` 和 `unplugin-auto-import`这两款插件并配置到配置文件中。

此时启动即可看到效果，并会生成`auto-imports.d.ts`、`components.d.ts`代码

新建types文件夹并将这两个文件移动到该文件夹，调整配置文件：

> vite.config.ts

```typescript
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      dts: path.resolve(__dirname, 'types', 'auto-imports.d.ts')
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: path.resolve(__dirname, 'types', 'components.d.ts')
    }),
  ],
  ...
})

```

按需引入icon图标：

官方文档：https://element-plus.org/zh-CN/component/icon.html

安装：

```shell
npm install @element-plus/icons-vue
```

安装插件：

```shell
npm i -D unplugin-icons
```

配置文件：

> vite.config.ts

```typescript
import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import path from 'path'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [
                ElementPlusResolver(),
                // 自动导入图标组件
                IconsResolver({
                    prefix: 'Icon',
                }),
            ],
            dts: path.resolve(__dirname, 'types', 'auto-imports.d.ts')
        }),
        Components({
            resolvers: [
                // 自动导入 Element Plus 组件
                ElementPlusResolver(),
                // 自动注册图标组件
                IconsResolver({
                    enabledCollections: ['ep'],
                }),],
            dts: path.resolve(__dirname, 'types', 'components.d.ts')
        }),
        Icons({
            autoInstall: true,
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
```

当使用图标时，需要将加上前缀 `i-ep`

```vue
<el-icon size="20">
	<i-ep-edit />
</el-icon>
```

