# Axios

Axios是一个基于Promise发送ajax请求的js库

**官方网站**：https://axios-http.com/ 

**官方文档**：https://axios-http.com/docs/intro

## axios 安装

```shell
npm install axios --save
```

## axios 基本使用

### 局部调用

方式一：

```typescript
import axios from 'axios';
axios({
  url: 'http://localhost:8080/test/login',
  method: 'post',
  data: {
    username: '鸡哥',
    password: '1234',
  },
}).then(res=>{
  msg.value = res.data.data;
})
```

方式二：

```typescript
import axios from 'axios';
axios.post('http://localhost:8080/test/login', {
  username: '鸡哥',
  password: '1234',
}).then(res=>{
  msg.value = res.data.data;
})
```

### 全局调用

> main.ts

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios';

const app = createApp(App);
app.provide('axios',axios)
app.mount('#app')
```

使用：

```vue
<template>
  <div>
    <p>{{ msg }}</p>
  </div>
</template>

<script lang="ts" setup>
// import axios from 'axios';
import { inject, onMounted, reactive, ref } from 'vue';
let axios=inject('axios');
let msg = ref('');

onMounted(() => {
  axios.post('http://localhost:8080/test/login', {
    username: '鸡哥',
    password: '1234',
  }).then(res=>{
    msg.value = res.data.data;
  })
});
```

## axios 封装

对请求的封装在实际项目中是十分必要的，它可以统一处理 http 请求。比如做一些拦截，处理一些错误等。

具体实现的功能：

- **基本配置**：配置默认请求地址,超时等
- **请求拦截**：拦截 request 请求,处理一些发送请求之前做的处理,譬如给 header 加 token 等
- **响应拦截**：统一处理后端返回的错误
- **全局 loading**：为所有请求加上全局 loading(可配置是否启用)
- **取消重复请求**：当同样的请求还没返回结果再次请求直接取消

### 基础配置

以 vue3 为例，首先安装 axios，element-plus

```shell
npm i axios element-plus
```

在 src 下新建 http/request.ts 目录用于写封装逻辑,然后调用 aixos 的 create 方法写一些基本配置

```js
import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
const service = axios.create({
  method: 'get',
  baseURL: import.meta.env.VITE_APP_API, //.env中的VITE_APP_API参数
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  timeout: 10000, //超时时间
});

export default service;
```

这样便完成了 aixos 的基本配置，接下来可以在 http 下新建 api 目录用于存放接口请求，比如在 api 下创建 login.ts 用于写登录相关请求方法：

```js
import request from './request';
export const login = (data: any) => {
  return request({
    url: '/auth/login',
    data,
    method: 'post',
  });
};
```

然后可以在页面进行调用：

```vue
<script lang="ts" setup>
import { login } from '@/http/login';
const loginManage = async () => {
  const data = await login({
    username: '鸡哥',
    password: '1234',
  });
  console.log(data);
};
loginManage();
</script>
```

![image-20250126220857381](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/image-20250126220857381.png)

### 响应拦截器

可以看到返回的数据很多都是不需要的，需要的只有 data 中的数据，所以这时候便需要一个响应拦截器进行处理，同时在响应拦截器中不仅仅简单处理这个问题，还需要对后端返回的状态码进行判断，如果不是正确的状态码可以弹窗提示后端返回的描述(也可以自定义)：这里规定后台 code 不是 200 的请求是异常的，需要弹出异常信息(当然这里由自己规定)，同时 401 状态表示登录已过期，如果需要更多的异常处理都可以写在这里。注意这里都是对 code 状态码的判断，这表示后台返回的 http 的 status 都是 2xx 才会进入的逻辑判断，如果后台返回 status 异常状态码比如 4xx,3xx 等就会进入 error 里，可以在 error 里进行逻辑处理，这里要和后端约定好

```js
service.interceptors.response.use(
  (res: AxiosResponse<any, any>) => {
    const { data } = res;
    if (data.code != 200) {
      ElMessage({
        message: data.describe,
        type: 'error',
      });
      if (data.code === 401) {
        //登录状态已过期.处理路由重定向
        console.log('loginOut');
      }
      throw new Error(data.describe);
    }
    return data;
  },
  (error) => {
    let { message } = error;
    if (message == 'Network Error') {
      message = '后端接口连接异常';
    } else if (message.includes('timeout')) {
      message = '系统接口请求超时';
    } else if (message.includes('Request failed with status code')) {
      message = '系统接口' + message.substr(message.length - 3) + '异常';
    }
    ElMessage({
      message: message,
      type: 'error',
    });
    return Promise.reject(error);
  },
);
```

### 请求拦截器

请求请求拦截器和响应拦截器类似，只不过是在请求发送之前需要做哪些处理，它的用法：

```js
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    console.log(config);
    return config;
  },
  (error) => {
    console.log(error);
  },
);
```

可以看到 config 中包含了请求的一些信息像 headers，data 等等，是可以在这里对其进行修改的，比如在 headers 加一个 token

```js
declare module "axios" {
  interface InternalAxiosRequestConfig<D = any, T = any> {
    isToken?: boolean;
  }
}
declare module "axios" {
  interface AxiosRequestConfig<D = any> {
    isToken?: boolean;
  }
}

service.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    const { isToken = true } = config;
    if (localStorage.getItem('token') && !isToken) {
      config.headers['Authorization'] =
        'Bearer ' + localStorage.getItem('token'); // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config;
  },
  (error) => {
    console.log(error);
  },
);
```

这里假设用户登录成功将 token 缓存到了 localStorage 中,接口是否需要 token 则是在请求的时候自己配置,比如 login 接口不加 token,注意这里需要给`InternalAxiosRequestConfig`和`AxiosRequestConfig`加上自定义的字段,否则 TS 会报错

```js
export const login = (data: any) => {
  return request({
    url: '/auth/login',
    data,
    isToken: false,
    method: 'post',
  });
};
```

![image-20250127101017196](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/image-20250127101017196.png)

此时可以获取到 config 中的 isToken 了

### 添加全局 loading

通常会在请求开始前加上 loading 弹窗，请求结束再进行关闭,实现其实很简单，在请求拦截器中调用 ElLoading.service 实例，响应拦截器中 close 即可。但是这样会出现一个问题：

> 当多个请求进入会开启多个 loading 实例吗? 这倒不会,因为在 element-plus 中的 ElLoading.service()是单例模式,只会开启一个 loading。

上述问题虽然不需要考虑，但是还有一个问题

> 同时进来多个请求,此时 loading 已经开启，假设 1 秒后多个请求中其中一个请求请求完成，按照上述逻辑会执行 close 方法，但是还有请求未完成 loading 却已经关闭，显然这不符合期望

因此，可以定义一个变量用于记录正在请求的数量，当该变量为 1 时开启 loading，当变量为 0 时关闭 loading，同样还定义了 config 中的 loading 让开发者自己决定是否开启 loading，实现：

```js
let requestCount = 0;
const showLoading = () => {
  requestCount++;
  if (requestCount === 1) loadingInstance();
};
const closeLoading = () => {
  requestCount--;
  if (requestCount === 0) loadingInstance().close();
};
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    const { loading = true, isToken = true } = config;
    return config;
  },
  (error) => {
    console.log(error);
  },
);

service.interceptors.response.use(
  (res: AxiosResponse<any, any>) => {
    const { data, config } = res;
    const { loading = true } = config;
    if (loading) closeLoading();
  },
  (error) => {
    closeLoading();
    return Promise.reject(error);
  },
);
```

### 取消重复请求

当同样的请求还没返回结果再次请求我们需要直接取消这个请求，通常发生在用户连续点击然后请求接口的情况，但是如果加了 loading 这种情况就不会发生。axios 中取消请求可以使用`AbortController`，注意这个 api 需要 axios 版本大于 v0.22.0 才可使用，低版本可以使用`CancelToken`，下面看一下`AbortController`使用方法

```js
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    const controller = new AbortController();
    const { loading = true, isToken = true } = config;
    config.signal = controller.signal;
    controller.abort();

    return config;
  },
  (error) => {
    console.log(error);
  },
);
```

这里是将 controller 的 signal 赋值给 config 的 sigal,然后执行 controller 的 abort 函数即可取消请求

知道了如何取消 axios 请求，接下来就可以写取消重复请求的逻辑了

> 当拦截到请求的时候，将 config 中的 data,url 作为 key 值，AbortController 实例作为 value 存在一个 map 中，判断是否 key 值是否存在来决定是取消请求还是保存当前实例，然后再设置多久之后删除这个key。

```js
const requestMap = new Map();
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    const controller = new AbortController();
    const key = config.data + config.url;
    config.signal = controller.signal;
    if (requestMap.has(key)) {
      controller.abort();
      setTimeout(() => {
        requestMap.delete(key);
      }, 500);
    } else {
      requestMap.set(key, controller);
    }

    return config;
  },
  (error) => {
    console.log(error);
  },
);
```

短时间内发送两次请求就会发现有一个请求被取消了

### 完整代码

到这里基本就完成了 axios 的封装,下面是完整代码,直接 CV,就可以摸鱼一整天~

```js
import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { ElMessage, ElLoading } from "element-plus";
const loadingInstance = ElLoading.service;
let requestCount = 0;
const showLoading = () => {
  requestCount++;
  if (requestCount === 1) loadingInstance();
};
const closeLoading = () => {
  requestCount--;
  if (requestCount === 0) loadingInstance().close();
};

const service: AxiosInstance = axios.create({
  method: "get",
  baseURL: import.meta.env.VITE_APP_API,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },

  timeout: 10000,
});
//请求拦截

declare module "axios" {
  interface InternalAxiosRequestConfig<D = any, T = any> {
    loading?: boolean;
    isToken?: boolean;
  }
}
declare module "axios" {
  interface AxiosRequestConfig<D = any> {
    loading?: boolean;
    isToken?: boolean;
  }
}

const requestMap = new Map();
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    const controller = new AbortController();
    const key = config.data + config.url;
    config.signal = controller.signal;
    if (requestMap.has(key)) {
      requestMap.get(key).abort();
      requestMap.delete(key);
    } else {
      requestMap.set(key, controller);
    }
    console.log(123);

    const { loading = true, isToken = true } = config;

    if (loading) showLoading();
    if (localStorage.getItem("token") && !isToken) {
      config.headers["Authorization"] =
        "Bearer " + localStorage.getItem("token"); // 让每个请求携带自定义token 请根据实际情况自行修改
    }

    return config;
  },
  (error) => {
    console.log(error);
  }
);

service.interceptors.response.use(
  (res: AxiosResponse<any, any>) => {
    const { data, config } = res;

    const { loading = true } = config;
    if (loading) closeLoading();

    if (data.code != 200) {
      ElMessage({
        message: data.describe,
        type: "error",
      });
      if (data.code === 401) {
        //登录状态已过期.处理路由重定向
        console.log("loginOut");
      }
      throw new Error(data.describe);
    }
    return data;
  },
  (error) => {
    closeLoading();
    let { message } = error;
    if (message == "Network Error") {
      message = "后端接口连接异常";
    } else if (message.includes("timeout")) {
      message = "系统接口请求超时";
    } else if (message.includes("Request failed with status code")) {
      message = "系统接口" + message.substr(message.length - 3) + "异常";
    }
    ElMessage({
      message: message,
      type: "error",
    });
    return Promise.reject(error);
  }
);
export default service;
```
