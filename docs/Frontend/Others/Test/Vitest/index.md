# Vitest

## 安装

安装命令：

```
npm i vitest -D
```

## 基础使用

测试脚本一般放入到tests文件夹，创建 `index.spec.ts`：一般以 `.spec.ts`结尾，因为Vitest在运行的时候会检测该后缀结尾的文件用作测试脚本运行

```typescript
import {test,expect} from 'vitest'
 
test('first test',()=>{
    // 1 + 1 是否等于 2
    expect(1 + 1).toBe(2);
})
```

![image-20250108213026286](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/image-20250108213026286.png)

在package.json下新建：

```json
"scripts": {
  "test": "vitest"
},
```

执行：

```
npm test
```

![image-20250108213257027](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/image-20250108213257027.png)

当调整条件时：

![image-20250108213416527](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/image-20250108213416527.png)

该命令会一直执行(watch模式)，可以使用 `npx vitest run`执行一次：

```shell
npx vitest run
```

## 测试外部ts文件

在src中新建ts文件：

> src/add.ts

```typescript
function add(a:number,b:number) {
    return a + b;
}
```

导入该ts文件：

```typescript
import {test,expect} from 'vitest'
import {add} from '../src/add.ts'

test('add',()=>{
    // 1 + 1 是否等于 2
    expect(add(1,1)).toBe(2);
})
```

## 测试Vue文件

运行Vue文件：

```typescript
import {test,expect} from 'vitest'
import HelloWorld from '../src/components/HelloWorld.vue'

test('hello',()=>{
    console.log(HelloWorld)
})
```

当出现飘红时，调整`tsconfig.app.json`文件：

> tsconfig.app.json

```json
{
  "extends": "@vue/tsconfig/tsconfig.dom.json",
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src/**/*.ts", "src/**/*.tsx", "src/**/*.vue","tests/*.ts"]
}
```

运行效果：

![image-20250108215620304](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/image-20250108215620304.png)

## 配置Vitest

支持全局导入

- 方式一：通过配置vite：

  > vite.config.ts

  ```typescript
  /// <reference types="vitest" />
  import { defineConfig } from 'vite'
  import vue from '@vitejs/plugin-vue'
  
  // https://vite.dev/config/
  export default defineConfig({
    test:{
      globals:true
    },
    plugins: [vue()],
  })
  ```

- 方式二：通过`vitest.config.ts`

  > vitestConfig.ts

  ```typescript
  import {UserConfig} from 'vitest/config'
  
  export const vitestConfig:UserConfig["test"] = {
      globals:true
  }
  ```

  > tsconfig.node.json

  ```json
  {
    "compilerOptions": {
      "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
      "target": "ES2022",
      "lib": ["ES2023"],
      "module": "ESNext",
      "skipLibCheck": true,
  
      /* Bundler mode */
      "moduleResolution": "bundler",
      "allowImportingTsExtensions": true,
      "isolatedModules": true,
      "moduleDetection": "force",
      "noEmit": true,
  
      /* Linting */
      "strict": true,
      "noUnusedLocals": true,
      "noUnusedParameters": true,
      "noFallthroughCasesInSwitch": true,
      "noUncheckedSideEffectImports": true
    },
    "include": ["vite.config.ts","vitestConfig.ts"]
  }
  ```

  > vite.config.ts

  ```typescript
  /// <reference types="vitest" />
  import { defineConfig } from 'vite'
  import vue from '@vitejs/plugin-vue'
  import { vitestConfig } from './vitestConfig'
  
  // https://vite.dev/config/
  export default defineConfig({
    test: {
      ...vitestConfig
    },
    plugins: [vue()],
  })
  ```

> tsconfig.app.json

```json
{
  "extends": "@vue/tsconfig/tsconfig.dom.json",
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true,
    "types": [
      "vitest/globals"
    ]
  },
  "include": ["src/**/*.ts", "src/**/*.tsx", "src/**/*.vue","tests/*.ts"]
}
```

此时就不需要导入包：

```typescript
import {add} from '../src/add.ts'
import HelloWorld from '../src/components/HelloWorld.vue'

test('first test',()=>{
    // 1 + 1 是否等于 2
    expect(1 + 1).toBe(2);
})


test('add',()=>{
    // 1 + 1 是否等于 2
    expect(add(1,1)).toBe(2);
})

test('hello',()=>{
    console.log(HelloWorld)
})
```

## 测试Vue3组件

安装vue test库：

```shell
npm i @vue/test-utils -D
npm i jsdom -D
```

 新建Vue组件：

> Hello.vue

```vue
<template>
  <div>
    hello
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
```

新建测试文件：

> Hello.spec.ts

```typescript
import Hello from '../src/components/Hello.vue'
import {mount} from '@vue/test-utils'
test('first test',()=>{
    console.log(Hello);
    const wrapper = mount(Hello);
    expect(wrapper.text()).toContain("hello");
})
```

> vite.config.ts

```typescript
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { vitestConfig } from './vitestConfig'

// https://vite.dev/config/
export default defineConfig({
  // test: {
  //   ...vitestConfig
  // },
  test:{
    globals:true,
    environment: "jsdom"
  },
  plugins: [vue()],
})
```

jsx/tsx文件：

执行命令：

```shell
npm i @vitejs/plugin-vue-jsx -D
```

> vite.config.ts

```typescript
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { vitestConfig } from './vitestConfig'
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vite.dev/config/
export default defineConfig({
  // test: {
  //   ...vitestConfig
  // },
  test:{
    globals:true,
    environment: "jsdom"
  },
  plugins: [
    vueJsx(),
    vue()
  ],
})
```

> Hei.tsx

```tsx
import { defineComponent } from "vue";

export default defineComponent({
    setup(){
        return ()=><div>hei</div>
    }
})
```

> vite.config.ts

```typescript
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { vitestConfig } from './vitestConfig'
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vite.dev/config/
export default defineConfig({
  // test: {
  //   ...vitestConfig
  // },
  test:{
    globals:true,
    environment: "jsdom",
    transformMode: {
      web: [/.tsx$/]
    }
  },
  plugins: [
    vueJsx(),
    vue()
  ],
})
```

新建测试文件：

> Hei.spec.ts

```typescript
import {test} from 'vitest';
import {mount} from '@vue/test-utils';
import Hei from '../src/components/Hei'

test("test",()=>{
    console.log(Hei.setup?.toString())
    const wrapper = mount(Hei)
    expect(wrapper.text()).toContain("hei")
})
```

