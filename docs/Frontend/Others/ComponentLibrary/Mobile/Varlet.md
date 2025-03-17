# Varlet

对于移动端应用开发，选择一款合适的组件库，不仅能帮助开发者快速构建高质量的 UI，还能保证性能和用户体验。**Varlet** 正是这样一个为 Vue 3 开发的轻量级移动端组件库，它以简洁、高效、易用为核心，为开发者提供了灵活的组件解决方案。

**Varlet** 是一款基于 Vue 3 的开源 UI 组件库，专为移动端开发设计。它的目标是帮助开发者构建符合移动设备需求的应用，同时保持良好的性能和开发体验。Varlet 的设计灵感源于传统的 **Material Design**，但又经过优化和改良，以适应现代 Web 和移动开发的需求。

**Varlet文档地址**：https://varletjs.org/#/zh-CN/index

**源码地址**：https://github.com/varletjs/varlet

![image-20241022093050383](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202410220930346.png)

Varlet 提供了丰富的组件集，从基础的按钮、图标到复杂的对话框、滑动操作等，满足了常见的移动端开发需求。与其他组件库不同，Varlet 的特色在于其轻量和简洁性，使得项目体积保持小巧，而不牺牲功能。

Varlet 主要特性：

- 🚀**轻量且高效**：Varlet 的组件库设计注重轻量，打包体积非常小，非常适合移动端的项目。并且通过优化代码结构和组件实现，保证了快速加载和渲染，避免了因组件库过大导致的性能问题。
- 🛠️**高度自定义**：Varlet 提供了多种组件样式的自定义选项，开发者可以根据项目需求，调整主题颜色、字体大小、边距等。
- 💡**按需加载**：Varlet 支持按需引入组件，进一步减少项目的包体积，减少性能开销。
- 🌍**支持国际化**：Varlet 内置了国际化支持，开发者可以方便地将应用切换为不同语言，并通过配置为组件设置本地化内容。这对需要服务于全球用户的移动端应用尤为重要。
- 💪**后勤保障**：Varlet 由国人开发，拥有详细的文档，社区活跃，开发者可以在 GitHub 上提交问题或贡献代码，持续优化和改进库的功能。
- 🎨**Material 风格**：同时支持 Material Design 2 和 Material Design 3 两套设计系统。
- 🛠️**Vue 3 的深度集成**：Varlet 的所有组件都基于 Vue 3 的新特性进行开发，组件更加灵活和可维护；并且与Vue 3生态系统其他工具都无缝集成，构建应用更加轻松。

组件预览：四款主题，Material Design 2 和 3，支持亮暗：

![image-20241022093730400](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/tc2/img202410220937181.png)

**安装**：

```shell
# pnpm方式安装演示
pnpm add @varlet/ui
```

**导入方式**：

推荐使用按需引入，避免了组件的全量导入，可以有效的减少发布包的大小。通过插件

- `unplugin-vue-components`
- `unplugin-auto-import`

实现组件自动按需导入，这也是最推荐的方式。

```shell
# pnpm方式安装演示
pnpm add @varlet/import-resolver unplugin-vue-components unplugin-auto-import -D
```

**配置一下vite.config.js**：

```javascript
// vite.config.js
import vue from '@vitejs/plugin-vue'
import components from 'unplugin-vue-components/vite'
import autoImport from 'unplugin-auto-import/vite'
import { VarletImportResolver } from '@varlet/import-resolver'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    components({
      resolvers: [VarletImportResolver()]
    }),
    autoImport({
      resolvers: [VarletImportResolver({ autoImport: true })]
    })
  ]
})
```

**组件中使用**：

```vue
<script setup>
function handleClick() {
  Snackbar('你好!')
}
</script>

<template>
  <var-button @click="handleClick">说你好</var-button>
</template>
```

这样使用无需手动导入组件，并且按需引入的方式不会讲组件全部导入，减少包体积大小。



