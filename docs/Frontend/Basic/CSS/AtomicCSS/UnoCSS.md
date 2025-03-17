# UnoCSS

官网：https://unocss.dev/guide

安装UnoCSS：

- unocss：UnoCSS核心库
- @iconfiy-json/ep：Element Plus的[图标库](https://icones.js.org)
- @unocss/preset-rem-to-px：UnoCSS自带的rem转为px
- @unocss/transformer-directives：使用@apply @screen theme函数

```shell
npm install -D unocss @iconify-json/ep @unocss/preset-rem-to-px @unocss/transformer-directives
```

引入UnoCSS：

> vite.config.ts

```typescript
//unocss vite插件
import UnoCSS from 'unocss/vite'

// https://vite.dev/config/
export default defineConfig({
  // ...
  plugins: [
    // ...
    UnoCSS()
  ],
})

```

配置UnoCSS：

> uno.config.ts

```typescript
//uno.config.ts

//预设rem转px
import presetRemToPx from '@unocss/preset-rem-to-px'
//transformerDirectives 可以使用 @apply @screen theme函数
import transformerDirective from '@unocss/transformer-directives'
import { defineConfig, presetAttributify, presetUno, transformerVariantGroup,presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    // 现在mt-1会转换为 margin-top: 1px
    presetRemToPx({
        baseFontSize: 4
    }),
    //自动引入图标配置
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
  transformers: [
    transformerDirective(),
    transformerVariantGroup(),
  ],
  //自定义配置
  rules: [
    //自定义配置
    //以下官网规则可自定义转换
    // [/^m-(\d+)$/, ([, d]) => ({ margin: `${d / 4}rem` })],
    // [/^p-(\d+)$/, match => ({ padding: `${match[1] / 4}rem` })],
  ],
  //自定义属性 一个属性可以对应多个unocss类值
  shortcuts: {
    //垂直水平居中
    'flex-center': 'flex justify-center items-center',
    //放在最后
    'flex-col-end': 'flex justify-end items-center',
    //垂直居中
    'flex-middle': 'flex items-center',
    //分开两边
    'flex-between': 'flex justify-between items-center',
    //竖直居中
    'flex-col-center': 'flex flex-col justify-center',
  }
})
```

全局配置：

> main.ts

```typescript
//eslint-disable-next-line import/no-unresolved
import 'virtual:uno.css' // 引入 uno.css
```

使用：

> 使用图标时：`i前缀-ep图库名:lock图标名称`

```vue
<template>
    <div>
        <h1>UnoCSS</h1>
        <div class="box"></div>
        <hr />
        <div class="h-100 w-100 bg-red-800 text-30 text-blue hover:text-black">小猫米</div>
        <hr />
        <div class="box2">小猫咪</div>
        <hr />
        <div h100 w100 bg-blueGray text-fuchsia mt10 py20>小猫咪</div>
        <hr />
        <div class="wrap" w200 h100 flex-center gap10>
            <div w20 h20 bg-blue></div>
            <div w20 h20 bg-blue></div>
            <div w20 h20 bg-blue></div>
        </div>
        <hr />
        <div i-ep:dish></div>
        <i w100 h100 block i-ep:switch-button></i>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.box{
    width: 100px;
    height: 100px;
    background-color: salmon;
}
.box2{
    @apply h-100 w-100 bg-red-800 text-30 text-blue hover:text-black
}
.wrap{
    border: 1px solid #ddd;
}
</style>
```

