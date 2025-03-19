import { defineConfig } from 'vitepress'
import { sidebar } from "./sidebar.ts";	// 改成自己的路径
import { nav } from './nav.ts';

export default defineConfig({
  title: "Hjc的个人文档",
  titleTemplate: ":title - Hjc",
  ignoreDeadLinks: [
    // ignore exact url "/playground"
    '/playground',
    // ignore all localhost links
    /^https?:\/\/localhost/,
    // ignore all links include "/repl/""
    /\/repl\//,
    // custom function, ignore all links include "ignore"
    (url) => {
      return url.toLowerCase().includes('ignore')
    }
  ],
  description: "Hjc",
  base: `/docs-website/`,
  head: [
    ['link', { rel: 'icon', href: `/docs-website/logo.svg` }],
    [
    'script',
    {},
    ` window._hmt = window._hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?fb46d28a76aba5f6b6c86d5e0098ab4f";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();`,
    ],
  ],
  lang: 'zh-CN',
  lastUpdated: true,
  themeConfig: {
    lastUpdated: {
      text: '更新时间',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    logo: "/logo.svg", // 配置logo位置，public目录
    outline: [2, 6],
    outlineTitle: '目录',
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        },
      },
    },
    // search: {
    //   provider: 'local'
    // },
    nav: nav,
    sidebar: sidebar,
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/letengzz' }
    ],
    footer: {
      message: '开发者笔记仓库',
      copyright: 'Copyright © 2024 Hjc'
    },
    docFooter: {
      prev: false,
      next: false
    },
  },
  markdown: {
    lineNumbers: true, //显示行号
    container:{
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息',
    }
  }
})
