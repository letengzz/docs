import { set_sidebar } from "../utils/auto-gen-sidebar.mjs";	// 改成自己的路径

// Golang
export const Go = [
    {
        text: 'Go',
        link: '/docs/Backend/Go/index.md',
        items: set_sidebar("/docs/Backend/Go")
    }
]

// .Net
export const DotNet = [
    {
        text: '.Net',
        link: '/docs/Backend/DotNet/index.md',
        items: [
            {
                "link": "/docs/Backend/DotNet/Basic.md",
                "text": "基础语法"
            },
            {
                "link": "/docs/Backend/DotNet/Advanced.md",
                "text": "进阶语法"
            },
            {
                "link": "/docs/Backend/DotNet/DotNet5.md",
                "text": ".Net5"
            },
            {
                "link": "/docs/Backend/DotNet/WebApiNet6.md",
                "text": "WebApi-Net6"
            },
        ]
    }
]

// Java
export const Java = [
    {
        "link": "/docs/Backend/Java/index.md",
        "text": "Java",
        "items": [
            {
                "collapsed": true,
                "link": "/docs/Backend/Java/JavaSE/index.md",
                "text": "JavaSE",
                "items": [
                    {
                        "collapsed": true,
                        "link": "/docs/Backend/Java/JavaSE/Install/index.md",
                        "text": "JDK 安装",
                        "items": [
                            {
                                "link": "/docs/Backend/Java/JavaSE/Install/Windows.md",
                                "text": "Windows 安装"
                            },
                            {
                                "link": "/docs/Backend/Java/JavaSE/Install/Linux.md",
                                "text": "Linux 安装"
                            },
                            {
                                "link": "/docs/Backend/Java/JavaSE/Install/MacOS.md",
                                "text": "MacOS 安装"
                            },
                            {
                                "link": "/docs/Backend/Java/JavaSE/Install/Docker.md",
                                "text": "Docker 安装"
                            }
                        ]
                    },
                    {
                        "link": "/docs/Backend/Java/JavaSE/Generics.md",
                        "text": "泛型"
                    },
                    {
                        "link": "/docs/Backend/Java/JavaSE/IO.md",
                        "text": "IO流"
                    },
                    {
                        "link": "/docs/Backend/Java/JavaSE/Thread.md",
                        "text": "多线程"
                    },
                    {
                        "link": "/docs/Backend/Java/JavaSE/JVM.md",
                        "text": "JVM"
                    },
                    {
                        "link": "/docs/Backend/Java/JavaSE/NewFeatures/index.md",
                        "text": "Java 新特性"
                    }
                ]
            },
            {
                "link": "/docs/Backend/Java/JavaWeb/index.md",
                "text": "JavaWeb"
            },
            {
                "link": "/docs/Backend/Java/JDBC/index.md",
                "text": "JDBC"
            },
            {
                "collapsed": true,
                "link": "/docs/Backend/Java/JavaFrame/index.md",
                "text": "Java 框架",
                "items": [
                    {
                        "link": "/docs/Backend/Java/JavaFrame/BasicConcept.md",
                        "text": "框架基本概念"
                    },
                    {
                        "collapsed": true,
                        "link": "/docs/Backend/Java/JavaFrame/MyBatis/index.md",
                        "text": "MyBatis",
                        "items": [
                            {
                                "link": "/docs/Backend/Java/JavaFrame/MyBatis/Overview.md",
                                "text": "MyBatis 介绍"
                            },
                            {
                                "link": "/docs/Backend/Java/JavaFrame/MyBatis/Download.md",
                                "text": "MyBatis 下载"
                            },
                            {
                                "link": "/docs/Backend/Java/JavaFrame/MyBatis/BasicProgram.md",
                                "text": "MyBatis 构建入门程序"
                            },
                            {
                                "link": "/docs/Backend/Java/JavaFrame/MyBatis/CoreMapping.md",
                                "text": "MyBatis 核心配置和映射器"
                            },
                            {
                                "link": "/docs/Backend/Java/JavaFrame/MyBatis/BasicOperation.md",
                                "text": "MyBatis 基本操作"
                            },
                            {
                                "link": "/docs/Backend/Java/JavaFrame/MyBatis/SpecialOperation.md",
                                "text": "MyBatis 处理特殊操作"
                            },
                            {
                                "link": "/docs/Backend/Java/JavaFrame/MyBatis/Annotation.md",
                                "text": "MyBatis 注解"
                            },
                            {
                                "link": "/docs/Backend/Java/JavaFrame/MyBatis/ConjunctiveQuery.md",
                                "text": "MyBatis 关联查询及延迟加载"
                            },
                            {
                                "link": "/docs/Backend/Java/JavaFrame/MyBatis/DynamicSQL.md",
                                "text": "MyBatis 动态SQL"
                            },
                            {
                                "link": "/docs/Backend/Java/JavaFrame/MyBatis/Cache.md",
                                "text": "MyBatis 缓存"
                            },
                            {
                                "link": "/docs/Backend/Java/JavaFrame/MyBatis/ReverseEngineering.md",
                                "text": "MyBatis 逆向工程"
                            },
                            {
                                "link": "/docs/Backend/Java/JavaFrame/MyBatis/Paging.md",
                                "text": "Mybatis 分页操作"
                            },
                            {
                                "text": "拓展",
                                "collapsed": true,
                                "items": [
                                    {
                                        "link": "/docs/Backend/Java/JavaFrame/MyBatis/DefaultAlias.md",
                                        "text": "MyBatis 内置类型别名"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/JavaFrame/MyBatis/IdeaTemplate.md",
                                        "text": "IDEA配置模板"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/JavaFrame/MyBatis/HibernateDiff.md",
                                        "text": " MyBatis对比Hibernate "
                                    },
                                    {
                                        "link": "/docs/Backend/Java/JavaFrame/MyBatis/SqlSessionUtils.md",
                                        "text": "封装SqlSessionUtils工具类"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/JavaFrame/MyBatis/SqlSession.md",
                                        "text": "SqlSession"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/JavaFrame/MyBatis/SourcePrinciple.md",
                                        "text": "MyBatis源码解析"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/JavaFrame/MyBatis/Errors.md",
                                        "text": "MyBatis 常见错误"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "collapsed": true,
                        "link": "/docs/Backend/Java/JavaFrame/MyBatisPlus/index.md",
                        "text": "MyBatis-Plus",
                        "items": [
                            {
                                "link": "/docs/Backend/Java/JavaFrame/MyBatisPlus/Overview.md",
                                "text": "Mybatis-Plus 简介"
                            },
                            {
                                "collapsed": true,
                                "link": "/docs/Backend/Java/JavaFrame/MyBatisPlus/Spring/index.md",
                                "text": "Spring",
                                "items": [
                                    {
                                        "link": "/docs/Backend/Java/JavaFrame/MyBatisPlus/Spring/v5/index.md",
                                        "text": "Spring5"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/JavaFrame/MyBatisPlus/Spring/v6/index.md",
                                        "text": "Spring6"
                                    }
                                ]
                            },
                            {
                                "collapsed": true,
                                "link": "/docs/Backend/Java/JavaFrame/MyBatisPlus/SpringBoot/index.md",
                                "text": "SpringBoot",
                                "items": [
                                    {
                                        "collapsed": true,
                                        "link": "/docs/Backend/Java/JavaFrame/MyBatisPlus/SpringBoot/v2/index.md",
                                        "text": "SpringBoot2",
                                        "items": [
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/MyBatisPlus/SpringBoot/v2/BasicProgram.md",
                                                "text": "MyBatis-Plus 构建入门程序"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/MyBatisPlus/SpringBoot/v2/BasicOperation.md",
                                                "text": "MyBatis-Plus 基本操作"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/MyBatisPlus/SpringBoot/v2/Conditional.md",
                                                "text": "MyBatis-Plus 条件构造器"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/MyBatisPlus/SpringBoot/v2/Annotation.md",
                                                "text": "Mybatis-Plus 注解"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/MyBatisPlus/SpringBoot/v2/SpecialOperation.md",
                                                "text": "MyBatis-Plus 特殊操作"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/MyBatisPlus/SpringBoot/v2/MultiDataSource.md",
                                                "text": "MyBatis-Plus 多数据源"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/MyBatisPlus/SpringBoot/v2/Plugins.md",
                                                "text": "Mybatis-Plus 插件"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/MyBatisPlus/SpringBoot/v2/Upgrade.md",
                                                "text": "Mybatis升级成Mybatis-plus"
                                            }
                                        ]
                                    },
                                    {
                                        "collapsed": true,
                                        "link": "/docs/Backend/Java/JavaFrame/MyBatisPlus/SpringBoot/v3/index.md",
                                        "text": "SpringBoot3",
                                        "items": [
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/MyBatisPlus/SpringBoot/v3/BasicProgram.md",
                                                "text": "MyBatis-Plus 构建入门程序"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/MyBatisPlus/SpringBoot/v3/BasicOperation.md",
                                                "text": "MyBatis-Plus 基本操作"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/MyBatisPlus/SpringBoot/v3/Conditional.md",
                                                "text": "MyBatis-Plus 条件构造器"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/MyBatisPlus/SpringBoot/v3/Annotation.md",
                                                "text": "Mybatis-Plus 注解"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/MyBatisPlus/SpringBoot/v3/SpecialOperation.md",
                                                "text": "MyBatis-Plus 特殊操作"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/MyBatisPlus/SpringBoot/v3/MultiDataSource.md",
                                                "text": "MyBatis-Plus 多数据源"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/MyBatisPlus/SpringBoot/v3/Plugins.md",
                                                "text": "Mybatis-Plus 插件"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/MyBatisPlus/SpringBoot/v3/Upgrade.md",
                                                "text": "Mybatis升级成Mybatis-plus"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "collapsed": true,
                                "link": "/docs/Backend/Java/JavaFrame/MyBatisPlus/Methods/index.md",
                                "text": "常用方法解析",
                                "items": [
                                    {
                                        "link": "/docs/Backend/Java/JavaFrame/MyBatisPlus/Methods/listObjs.md",
                                        "text": "listObjs() 方法"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "link": "/docs/Backend/Java/JavaFrame/Sa-token/index.md",
                        "text": "Sa-Token"
                    },
                    {
                        "collapsed": true,
                        "link": "/docs/Backend/Java/JavaFrame/Spring/index.md",
                        "text": "Spring",
                        "items": [
                            {
                                "link": "/docs/Backend/Java/JavaFrame/Spring/Spring5/index.md",
                                "text": "Spring5"
                            },
                            {
                                "link": "/docs/Backend/Java/JavaFrame/Spring/Spring6/index.md",
                                "text": "Spring6"
                            }
                        ]
                    },
                    {
                        "collapsed": true,
                        "link": "/docs/Backend/Java/JavaFrame/SpringBoot/index.md",
                        "text": "SpringBoot",
                        "items": [
                            {
                                "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v2/index.md",
                                "text": "SpringBoot2"
                            },
                            {
                                "collapsed": true,
                                "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/index.md",
                                "text": "SpringBoot3",
                                "items": [
                                    {
                                        "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Overview.md",
                                        "text": "SpringBoot 介绍"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/BasicProgram.md",
                                        "text": "SpringBoot 构建入门程序"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/FeaturesConfiguration.md",
                                        "text": "SpringBoot 依赖管理和自动配置"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Annotation.md",
                                        "text": "SpringBoot 常用注解"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/BasisOperation.md",
                                        "text": "SpringBoot 基本操作及特性"
                                    },
                                    {
                                        "collapsed": true,
                                        "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Web/index.md",
                                        "text": "SpringBoot Web开发",
                                        "items": [
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Web/AutoConfiguration.md",
                                                "text": "SpringMVC自动配置"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Web/DefaultEffect.md",
                                                "text": "默认效果"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Web/WebMvcAutoConfiguration.md",
                                                "text": "WebMvcAutoConfiguration原理"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Web/StaticResource.md",
                                                "text": "静态资源访问"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Web/Path.md",
                                                "text": "路径匹配"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Web/ContentNego.md",
                                                "text": "内容协商"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Web/ViewParse.md",
                                                "text": "视图解析与模板引擎"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Web/i18n.md",
                                                "text": "国际化"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Web/FileUpload.md",
                                                "text": "文件上传"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Web/Interceptor.md",
                                                "text": "拦截器"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Web/Exception.md",
                                                "text": "异常处理"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Web/Validation.md",
                                                "text": "参数校验"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Web/Container.md",
                                                "text": "嵌入式容器"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Web/SpringMVC.md",
                                                "text": "全面接管SpringMVC"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Web/DevelopMode.md",
                                                "text": "开发模式"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Web/Enum.md",
                                                "text": "优雅使用枚举"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Web/UnifiedResultReturn.md",
                                                "text": "统一结果返回"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Web/FrontendLong.md",
                                                "text": "前端丢失大Long精度问题"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Web/CORS.md",
                                                "text": "单体项目跨域问题"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Web/NewFeature.md",
                                                "text": "Web新特性"
                                            }
                                        ]
                                    },
                                    {
                                        "collapsed": true,
                                        "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Remote/index.md",
                                        "text": "SpringBoot 远程调用",
                                        "items": [
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Remote/RestTemplate.md",
                                                "text": "RestTemplate"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Remote/WebClient.md",
                                                "text": "WebClient "
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Remote/HttpInterface.md",
                                                "text": "HTTP Interface "
                                            }
                                        ]
                                    },
                                    {
                                        "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/DataAccess/index.md",
                                        "text": "SpringBoot 数据访问"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/CorePrinciple.md",
                                        "text": "SpringBoot 核心原理"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Observability.md",
                                        "text": "SpringBoot 可观测性"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/AOT.md",
                                        "text": "SpringBoot 提前编译AOT"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/PackageAndRun.md",
                                        "text": "SpringBoot 项目打包和运行"
                                    },
                                    {
                                        "collapsed": true,
                                        "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Integration/index.md",
                                        "text": "SpringBoot 整合框架",
                                        "items": [
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Integration/AOP/index.md",
                                                "text": "SpringBoot 整合 AOP"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Integration/JDBC/index.md",
                                                "text": "SpringBoot 整合 JDBC"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Integration/Druid/index.md",
                                                "text": "SpringBoot 整合 Druid"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Integration/Junit/index.md",
                                                "text": "SpringBoot 整合 Junit"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Integration/MyBatis/index.md",
                                                "text": "SpringBoot 整合 MyBatis"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Integration/SpringSecurity/index.md",
                                                "text": "SpringBoot 整合 SpringSecurity"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Integration/Swagger/index.md",
                                                "text": "SpringBoot 整合 Swagger"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Integration/Redis/index.md",
                                                "text": "SpringBoot 整合 Redis"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Integration/Kafka/index.md",
                                                "text": "SpringBoot 整合 Kafka"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Integration/RabbitMQ/index.md",
                                                "text": "SpringBoot 整合 RabbitMQ"
                                            },
                                            {
                                                "collapsed": true,
                                                "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Integration/RocketMQ/index.md",
                                                "text": "SpringBoot 整合 RocketMQ",
                                                "items": [
                                                    {
                                                        "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Integration/RocketMQ/BasicProject.md",
                                                        "text": "创建基础项目"
                                                    },
                                                    {
                                                        "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Integration/RocketMQ/SendSync.md",
                                                        "text": "发送同步消息"
                                                    },
                                                    {
                                                        "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Integration/RocketMQ/SendAsync.md",
                                                        "text": "发送异步消息"
                                                    },
                                                    {
                                                        "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Integration/RocketMQ/SendOneway.md",
                                                        "text": "发送单向消息"
                                                    },
                                                    {
                                                        "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Integration/RocketMQ/SendDelay.md",
                                                        "text": "发送延迟消息"
                                                    },
                                                    {
                                                        "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Integration/RocketMQ/SendOrderly.md",
                                                        "text": "发送顺序消息"
                                                    },
                                                    {
                                                        "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Integration/RocketMQ/SendBatch.md",
                                                        "text": "发送批量消息"
                                                    },
                                                    {
                                                        "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Integration/RocketMQ/SendObj.md",
                                                        "text": "发送对象消息"
                                                    },
                                                    {
                                                        "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Integration/RocketMQ/SendList.md",
                                                        "text": "发送集合消息"
                                                    },
                                                    {
                                                        "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Integration/RocketMQ/SendTransaction.md",
                                                        "text": "发送事务消息"
                                                    },
                                                    {
                                                        "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Integration/RocketMQ/Filter.md",
                                                        "text": "消息过滤"
                                                    },
                                                    {
                                                        "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Integration/RocketMQ/ConsumerModel.md",
                                                        "text": "消息消费两种模式"
                                                    },
                                                    {
                                                        "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Integration/RocketMQ/Retry.md",
                                                        "text": "重试机制"
                                                    },
                                                    {
                                                        "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Integration/RocketMQ/DeadQueue.md",
                                                        "text": "死信消息"
                                                    },
                                                    {
                                                        "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Integration/RocketMQ/Repeated.md",
                                                        "text": "重复消费问题"
                                                    },
                                                    {
                                                        "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Integration/RocketMQ/MessageStack.md",
                                                        "text": "消息堆积问题"
                                                    }
                                                ]
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Integration/Elasticsearch/index.md",
                                                "text": "SpringBoot 整合 Elasticsearch"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Integration/screw/index.md",
                                                "text": "SpringBoot 整合 screw"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Integration/PageHelper/index.md",
                                                "text": "SpringBoot 整合 PageHelper"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Integration/SpringRetry/index.md",
                                                "text": "SpringBoot 整合 spring-retry"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Integration/Thymeleaf/index.md",
                                                "text": "SpringBoot 整合 Thymeleaf"
                                            }
                                        ]
                                    },
                                    {
                                        "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Diff.md",
                                        "text": "SpringBoot3改变 & 新特性"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/Email.md",
                                        "text": "SpringBoot 邮件发送"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/JavaFrame/SpringBoot/v3/DockerComposeSupport.md",
                                        "text": "SpringBoot Docker编排支持"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "collapsed": true,
                        "link": "/docs/Backend/Java/JavaFrame/SpringCloud/index.md",
                        "text": "SpringCloud",
                        "items": [
                            {
                                "link": "/docs/Backend/Java/JavaFrame/SpringCloud/Nacos Install.md",
                                "text": "Nacos安装"
                            },
                            {
                                "link": "/docs/Backend/Java/JavaFrame/SpringCloud/READ1ME.md",
                                "text": "Docker常规安装"
                            }
                        ]
                    },
                ]
            },
            {
                "collapsed": true,
                "link": "/docs/Backend/Java/MQ/index.md",
                "text": "消息队列 MQ",
                "items": [
                    {
                        "link": "/docs/Backend/Java/MQ/Overview.md",
                        "text": "消息队列 概述"
                    },
                    {
                        "link": "/docs/Backend/Java/MQ/Kafka/index.md",
                        "text": "Kafka"
                    },
                    {
                        "collapsed": true,
                        "link": "/docs/Backend/Java/MQ/RabbitMQ/index.md",
                        "text": "RabbitMQ",
                        "items": [
                            {
                                "link": "/docs/Backend/Java/MQ/RabbitMQ/Overview.md",
                                "text": "RabbitMQ 概述"
                            },
                            {
                                "collapsed": true,
                                "link": "/docs/Backend/Java/MQ/RabbitMQ/Install/index.md",
                                "text": "RabbitMQ 安装",
                                "items": [
                                    {
                                        "link": "/docs/Backend/Java/MQ/RabbitMQ/Install/Windows.md",
                                        "text": "Windows 安装"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/MQ/RabbitMQ/Install/Linux.md",
                                        "text": "Linux 安装"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/MQ/RabbitMQ/Install/MacOS.md",
                                        "text": "MacOS 安装"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/MQ/RabbitMQ/Install/Docker.md",
                                        "text": "Docker 安装"
                                    }
                                ]
                            },
                            {
                                "link": "/docs/Backend/Java/MQ/RabbitMQ/Exchange.md",
                                "text": "RabbitMQ 交换机"
                            },
                            {
                                "link": "/docs/Backend/Java/MQ/RabbitMQ/SimpleUse.md",
                                "text": "RabbitMQ 简单使用"
                            },
                            {
                                "link": "/docs/Backend/Java/MQ/RabbitMQ/MessagePattern.md",
                                "text": "RabbitMQ 消息模式"
                            },
                            {
                                "link": "/docs/Backend/Java/MQ/RabbitMQ/DeadQueue.md",
                                "text": "RabbitMQ 死信队列"
                            },
                            {
                                "link": "/docs/Backend/Java/MQ/RabbitMQ/Cluster.md",
                                "text": "RabbitMQ 集群搭建"
                            },
                            {
                                "link": "/docs/Backend/Java/MQ/RabbitMQ/Errors.md",
                                "text": "RabbitMQ 常见错误"
                            },
                            {
                                "link": "/docs/Backend/Java/MQ/RabbitMQ/Plugin.md",
                                "text": "RabbitMQ 插件"
                            },
                            {
                                "link": "/docs/Backend/Java/MQ/RabbitMQ/Java.md",
                                "text": "Java操作RabbitMQ"
                            }
                        ]
                    },
                    {
                        "collapsed": true,
                        "link": "/docs/Backend/Java/MQ/RocketMQ/index.md",
                        "text": "RocketMQ",
                        "items": [
                            {
                                "link": "/docs/Backend/Java/MQ/RocketMQ/Overview.md",
                                "text": "RocketMQ 概述"
                            },
                            {
                                "collapsed": true,
                                "link": "/docs/Backend/Java/MQ/RocketMQ/Install/index.md",
                                "text": "RocketMQ 安装",
                                "items": [
                                    {
                                        "link": "/docs/Backend/Java/MQ/RocketMQ/Install/Windows.md",
                                        "text": "Windows 安装"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/MQ/RocketMQ/Install/MacOS.md",
                                        "text": "MacOS 安装"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/MQ/RocketMQ/Install/Linux.md",
                                        "text": "Linux 安装"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/MQ/RocketMQ/Install/Docker.md",
                                        "text": "Docker 安装"
                                    }
                                ]
                            },
                            {
                                "link": "/docs/Backend/Java/MQ/RocketMQ/CommonCommand.md",
                                "text": "RocketMQ 常用命令"
                            },
                            {
                                "link": "/docs/Backend/Java/MQ/RocketMQ/ConsumptionModel.md",
                                "text": "RocketMQ 消费模式"
                            },
                            {
                                "link": "/docs/Backend/Java/MQ/RocketMQ/MessageModel.md",
                                "text": "RocketMQ 消息模式"
                            },
                            {
                                "link": "/docs/Backend/Java/MQ/RocketMQ/ConsumerModel.md",
                                "text": "RocketMQ 消息消费模式"
                            },
                            {
                                "link": "/docs/Backend/Java/MQ/RocketMQ/Retry.md",
                                "text": "RocketMQ 重试机制"
                            },
                            {
                                "link": "/docs/Backend/Java/MQ/RocketMQ/DeadQueue.md",
                                "text": "RocketMQ 死信消息"
                            },
                            {
                                "link": "/docs/Backend/Java/MQ/RocketMQ/Orderly.md",
                                "text": "RocketMQ 保证消息有序"
                            },
                            {
                                "link": "/docs/Backend/Java/MQ/RocketMQ/Repeated.md",
                                "text": "RocketMQ 重复消费问题"
                            },
                            {
                                "link": "/docs/Backend/Java/MQ/RocketMQ/MessageStack.md",
                                "text": "RocketMQ 消息堆积问题"
                            },
                            {
                                "link": "/docs/Backend/Java/MQ/RocketMQ/MessageNotLost.md",
                                "text": "RocketMQ 消息不丢失"
                            },
                            {
                                "link": "/docs/Backend/Java/MQ/RocketMQ/Security.md",
                                "text": "RocketMQ ACL安全"
                            },
                            {
                                "link": "/docs/Backend/Java/MQ/RocketMQ/Cluster.md",
                                "text": "RocketMQ 集群"
                            },
                            {
                                "link": "/docs/Backend/Java/MQ/RocketMQ/Design.md",
                                "text": "RocketMQ 设计"
                            },
                            {
                                "link": "/docs/Backend/Java/MQ/RocketMQ/Errors.md",
                                "text": "RocketMQ 常见问题"
                            },
                            {
                                "collapsed": true,
                                "link": "/docs/Backend/Java/MQ/RocketMQ/Java/index.md",
                                "text": "Java操作RocketMQ",
                                "items": [
                                    {
                                        "link": "/docs/Backend/Java/MQ/RocketMQ/Java/BasicProject.md",
                                        "text": "创建基础项目"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/MQ/RocketMQ/Java/SendSync.md",
                                        "text": "发送同步消息"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/MQ/RocketMQ/Java/SendAsync.md",
                                        "text": "发送异步消息"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/MQ/RocketMQ/Java/SendOneway.md",
                                        "text": "发送单向消息"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/MQ/RocketMQ/Java/SendDelay.md",
                                        "text": "发送延迟消息"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/MQ/RocketMQ/Java/SendOrderly.md",
                                        "text": "发送顺序消息"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/MQ/RocketMQ/Java/SendBatch.md",
                                        "text": "发送批量消息"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/MQ/RocketMQ/Java/SendTransaction.md",
                                        "text": "发送事务消息"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/MQ/RocketMQ/Java/Filter.md",
                                        "text": "消息过滤"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/MQ/RocketMQ/Java/ConsumerModel.md",
                                        "text": "消息消费两种模式"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/MQ/RocketMQ/Java/Retry.md",
                                        "text": "重试机制"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/MQ/RocketMQ/Java/DeadQueue.md",
                                        "text": "死信消息"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/MQ/RocketMQ/Java/Repeated.md",
                                        "text": "解决重复消费问题"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/MQ/RocketMQ/Java/MessageStack.md",
                                        "text": "解决消息堆积问题"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "collapsed": true,
                "link": "/docs/Backend/Java/Project/index.md",
                "text": "开源项目",
                "items": [
                    {
                        "link": "/docs/Backend/Java/Project/Auth.md",
                        "text": "权限认证框架"
                    },
                    {
                        "link": "/docs/Backend/Java/Project/Blog.md",
                        "text": "博客"
                    },
                    {
                        "link": "/docs/Backend/Java/Project/Develop.md",
                        "text": "快速开发平台"
                    },
                    {
                        "link": "/docs/Backend/Java/Project/Mall.md",
                        "text": "电商项目"
                    },
                    {
                        "link": "/docs/Backend/Java/Project/Other.md",
                        "text": "其他项目"
                    }
                ]
            },
            {
                "collapsed": true,
                "link": "/docs/Backend/Java/Tools/index.md",
                "text": "工具",
                "items": [
                    {
                        "collapsed": true,
                        "link": "/docs/Backend/Java/Tools/Build/index.md",
                        "text": "构建和依赖管理工具",
                        "items": [
                            {
                                "collapsed": true,
                                "link": "/docs/Backend/Java/Tools/Build/Maven/index.md",
                                "text": "Maven",
                                "items": [
                                    {
                                        "link": "/docs/Backend/Java/Tools/Build/Maven/Overview.md",
                                        "text": "Maven 概述"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/Tools/Build/Maven/Install.md",
                                        "text": "Maven 安装并配置核心程序"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/Tools/Build/Maven/Core.md",
                                        "text": "Maven 核心概念"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/Tools/Build/Maven/Create.md",
                                        "text": "Maven 创建工程"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/Tools/Build/Maven/Command.md",
                                        "text": "Maven 命令"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/Tools/Build/Maven/Dependency.md",
                                        "text": "Maven 依赖"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/Tools/Build/Maven/Integrated.md",
                                        "text": "Maven 继承和聚合特性"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/Tools/Build/Maven/Expansion.md",
                                        "text": "Maven 拓展概念"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/Tools/Build/Maven/profile.md",
                                        "text": "Maven profile"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/Tools/Build/Maven/Nexus.md",
                                        "text": "Maven 私服：Nexus"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "collapsed": true,
                        "link": "/docs/Backend/Java/Tools/CICD/index.md",
                        "text": "持续集成工具",
                        "items": [
                            {
                                "link": "/docs/Backend/Java/Tools/CICD/Overview.md",
                                "text": "基本概念"
                            },
                            {
                                "link": "/docs/Backend/Java/Tools/CICD/Comparison.md",
                                "text": "部署方式对比"
                            },
                            {
                                "link": "/docs/Backend/Java/Tools/CICD/CommonTools.md",
                                "text": "常见持续集成工具"
                            },
                            {
                                "collapsed": true,
                                "link": "/docs/Backend/Java/Tools/CICD/Jenkins/index.md",
                                "text": "Jenkins",
                                "items": [
                                    {
                                        "link": "/docs/Backend/Java/Tools/CICD/Jenkins/Overview.md",
                                        "text": "Jenkins 概述"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/Tools/CICD/Jenkins/Install.md",
                                        "text": "Jenkins安装"
                                    },
                                    {
                                        "collapsed": true,
                                        "link": "/docs/Backend/Java/Tools/CICD/Jenkins/Git/index.md",
                                        "text": "Jenkins + Git 持续集成",
                                        "items": [
                                            {
                                                "link": "/docs/Backend/Java/Tools/CICD/Jenkins/Git/Build.md",
                                                "text": "Jenkins+Git 构建部署"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/Tools/CICD/Jenkins/Git/BuildTrigger.md",
                                                "text": "Jenkins+Git 构建触发器"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/Tools/CICD/Jenkins/Git/BuildDocker.md",
                                                "text": "Jenkins+Git 容器化构建"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/Tools/CICD/Jenkins/Git/pipeline.md",
                                                "text": "Jenkins+Git 流水线pipeline"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/Tools/CICD/Jenkins/Git/Errors.md",
                                                "text": "Jenkins 常见错误"
                                            }
                                        ]
                                    },
                                    {
                                        "link": "/docs/Backend/Java/Tools/CICD/Jenkins/Cluster.md",
                                        "text": "Jenkins 集群/并发构建"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "collapsed": true,
                        "link": "/docs/Backend/Java/Tools/IDE/index.md",
                        "text": "IDE工具",
                        "items": [
                            {
                                "collapsed": true,
                                "link": "/docs/Backend/Java/Tools/IDE/IDEA/index.md",
                                "text": "IntelliJ IDEA",
                                "items": [
                                    {
                                        "link": "/docs/Backend/Java/Tools/IDE/IDEA/Overview.md",
                                        "text": "IDEA 概述"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/Tools/IDE/IDEA/Git.md",
                                        "text": "IDEA Git操作"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/Tools/IDE/IDEA/Databases.md",
                                        "text": "IDEA 数据库操作"
                                    },
                                    {
                                        "collapsed": true,
                                        "link": "/docs/Backend/Java/Tools/IDE/IDEA/Plugins/index.md",
                                        "text": "IDEA 插件",
                                        "items": [
                                            {
                                                "link": "/docs/Backend/Java/Tools/IDE/IDEA/Plugins/AI.md",
                                                "text": "AI代码插件"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/Tools/IDE/IDEA/Plugins/MyBatis.md",
                                                "text": "MyBatis逆向生成插件"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/Tools/IDE/IDEA/Plugins/MybatisX.md",
                                                "text": "MyBatisX"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "collapsed": true,
                        "link": "/docs/Backend/Java/Tools/VersionControl/index.md",
                        "text": "版本控制工具",
                        "items": [
                            {
                                "link": "/docs/Backend/Java/Tools/VersionControl/Overview.md",
                                "text": "版本控制工具 概述"
                            },
                            {
                                "collapsed": true,
                                "link": "/docs/Backend/Java/Tools/VersionControl/Git/index.md",
                                "text": "Git",
                                "items": [
                                    {
                                        "link": "/docs/Backend/Java/Tools/VersionControl/Git/Overview.md",
                                        "text": "Git 概述"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/Tools/VersionControl/Git/Install.md",
                                        "text": "Git 安装"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/Tools/VersionControl/Git/BasicCommand.md",
                                        "text": "Git 基础命令/操作"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/Tools/VersionControl/Git/Branch.md",
                                        "text": "Git 分支命令/操作"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/Tools/VersionControl/Git/Remote.md",
                                        "text": "Git 远程命令/搭建Git服务器"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/Tools/VersionControl/Git/Tag.md",
                                        "text": "Git 标签命令/操作"
                                    },
                                    {
                                        "collapsed": true,
                                        "link": "/docs/Backend/Java/Tools/VersionControl/Git/Platform/index.md",
                                        "text": "Git 代码托管平台",
                                        "items": [
                                            {
                                                "link": "/docs/Backend/Java/Tools/VersionControl/Git/Platform/Github/index.md",
                                                "text": "Github",
                                                "items": [
                                                    {
                                                        "link": "/docs/Backend/Java/Tools/VersionControl/Git/Platform/Github/Basis.md",
                                                        "text": "GitHub 基础操作"
                                                    },
                                                    {
                                                        "link": "/docs/Backend/Java/Tools/VersionControl/Git/Platform/Github/fork.md",
                                                        "text": "远程仓库fork操作"
                                                    },
                                                    {
                                                        "link": "/docs/Backend/Java/Tools/VersionControl/Git/Platform/Github/Team.md",
                                                        "text": "Github 团队操作"
                                                    },
                                                    {
                                                        "link": "/docs/Backend/Java/Tools/VersionControl/Git/Platform/Github/Desktop.md",
                                                        "text": "GitHub 客户端"
                                                    }
                                                ]
                                            },
                                            {
                                                "link": "/docs/Backend/Java/Tools/VersionControl/Git/Platform/Gitee/index.md",
                                                "text": "Gitee",
                                                "items": [
                                                    {
                                                        "link": "/docs/Backend/Java/Tools/VersionControl/Git/Platform/Gitee/Basis.md",
                                                        "text": "Gitee 基础操作"
                                                    },
                                                    {
                                                        "link": "/docs/Backend/Java/Tools/VersionControl/Git/Platform/Gitee/Team.md",
                                                        "text": "Gitee 团队操作"
                                                    }
                                                ]
                                            },
                                            {
                                                "link": "/docs/Backend/Java/Tools/VersionControl/Git/Platform/GitLab/index.md",
                                                "text": "Gitlab",
                                                "items": [
                                                    {
                                                        "link": "/docs/Backend/Java/Tools/VersionControl/Git/Platform/GitLab/Overview.md",
                                                        "text": "GitLab 概述"
                                                    },
                                                    {
                                                        "collapsed": true,
                                                        "link": "/docs/Backend/Java/Tools/VersionControl/Git/Platform/GitLab/Install/index.md",
                                                        "text": "Gitlab 搭建",
                                                        "items": [
                                                            {
                                                                "link": "/docs/Backend/Java/Tools/VersionControl/Git/Platform/GitLab/Install/Linux.md",
                                                                "text": "Linux 安装"
                                                            },
                                                            {
                                                                "link": "/docs/Backend/Java/Tools/VersionControl/Git/Platform/GitLab/Install/Docker.md",
                                                                "text": "Docker 安装"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "link": "/docs/Backend/Java/Tools/VersionControl/Git/Platform/GitLab/Basic.md",
                                                        "text": "GitLab 基础操作"
                                                    },
                                                    {
                                                        "link": "/docs/Backend/Java/Tools/VersionControl/Git/Platform/GitLab/Team.md",
                                                        "text": "GitLab 团队操作"
                                                    },
                                                    {
                                                        "link": "/docs/Backend/Java/Tools/VersionControl/Git/Platform/GitLab/CICD.md",
                                                        "text": "GitLab CI/CD部署程序"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "link": "/docs/Backend/Java/Tools/VersionControl/Git/Flow.md",
                                        "text": "Git Flow工作流"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/Tools/VersionControl/Git/Others.md",
                                        "text": "Git 其他操作"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/Tools/VersionControl/Git/Errors.md",
                                        "text": "Git 常见问题"
                                    },
                                    {
                                        "collapsed": true,
                                        "link": "/docs/Backend/Java/Tools/VersionControl/Git/Tools/index.md",
                                        "text": "Git 客户端工具",
                                        "items": [
                                            {
                                                "link": "/docs/Backend/Java/Tools/VersionControl/Git/Tools/GithubDesktop.md",
                                                "text": "Github Desktop"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/Tools/VersionControl/Git/Tools/TortoiseGit.md",
                                                "text": "TortoiseGit.md"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "collapsed": true,
                                "link": "/docs/Backend/Java/Tools/VersionControl/SVN/index.md",
                                "text": "SVN",
                                "items": [
                                    {
                                        "link": "/docs/Backend/Java/Tools/VersionControl/SVN/Overview.md",
                                        "text": "SVN 概述"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/Tools/VersionControl/SVN/Install.md",
                                        "text": "SVN Server安装"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/Tools/VersionControl/SVN/VisualSVNServer.md",
                                        "text": "VisualSVN Server 配置和使用"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/Tools/VersionControl/SVN/SVNBucket.md",
                                        "text": "代码托管服务器 SVNBucket"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/Tools/VersionControl/SVN/TortoiseSVN.md",
                                        "text": "TortoiseSVN"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/Tools/VersionControl/SVN/Errors.md",
                                        "text": "SVN 常见问题"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "collapsed": true,
                "link": "/docs/Backend/Java/Others/index.md",
                "text": "其他",
                "items": [
                    {
                        "link": "/docs/Backend/Java/Others/DataPersistence/index.md",
                        "text": "数据持久化"
                    },
                    {
                        "collapsed": true,
                        "link": "/docs/Backend/Java/Others/Concurrent/index.md",
                        "text": "JUC并发编程",
                        "items": [
                            {
                                "link": "/docs/Backend/Java/Others/Concurrent/JUC并发编程.md",
                                "text": "JUC并发编程一"
                            },
                            {
                                "link": "/docs/Backend/Java/Others/Concurrent/JUC并发编程二.md",
                                "text": "JUC并发编程"
                            },
                            {
                                "link": "/docs/Backend/Java/Others/Concurrent/并发基础.md",
                                "text": "并发基础"
                            }
                        ]
                    },
                    {
                        "link": "/docs/Backend/Java/Others/Component/index.md",
                        "text": "组件及其概念"
                    },
                    {
                        "collapsed": true,
                        "link": "/docs/Backend/Java/Others/Configurationfile/index.md",
                        "text": "常见的数据存储和交换格式",
                        "items": [
                            {
                                "link": "/docs/Backend/Java/Others/Configurationfile/properties.md",
                                "text": "Properties"
                            },
                            {
                                "link": "/docs/Backend/Java/Others/Configurationfile/yaml.md",
                                "text": "YAML"
                            }
                        ]
                    },
                    {
                        "collapsed": true,
                        "link": "/docs/Backend/Java/Others/Pools/index.md",
                        "text": "池化技术",
                        "items": [
                            {
                                "link": "/docs/Backend/Java/Others/Pools/CommonsPool2/index.md",
                                "text": "公用池化包 Commons Pool 2",
                            },
                            {
                                "link": "/docs/Backend/Java/Others/Pools/DbConnectionPool/index.md",
                                "text": "数据库连接池",
                                "collapsed": true,
                                item: [
                                    {
                                        "link": "/docs/Backend/Java/Others/Pools/DbConnectionPool/HikariCP/index.md",
                                        "text": "HikariCP"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/Others/Pools/DbConnectionPool/Druid/index.md",
                                        "text": "Druid"
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        "link": "/docs/Backend/Java/Others/DemandAnalysis/index.md",
                        "text": "需求分析"
                    },
                    {
                        "link": "/docs/Backend/Java/Others/InterfaceDesign/index.md",
                        "text": "接口设计"
                    },
                    {
                        "link": "/docs/Backend/Java/Others/Logs/index.md",
                        "text": "日志"
                    },
                    {
                        "link": "/docs/Backend/Java/Others/MicroserviceSplit/index.md",
                        "text": "微服务的拆分"
                    },
                    {
                        "link": "/docs/Backend/Java/Others/ModelClass/index.md",
                        "text": "模型类"
                    },
                    {
                        "link": "/docs/Backend/Java/Others/NetworkSecurity/index.md",
                        "text": "网络安全基础"
                    },
                    {
                        "link": "/docs/Backend/Java/Others/ORM/index.md",
                        "text": "ORM对象关系映射"
                    },
                    {
                        "link": "/docs/Backend/Java/Others/RestFul/index.md",
                        "text": "RestFul风格"
                    },
                    {
                        "collapsed": true,
                        "link": "/docs/Backend/Java/Others/Serialization/index.md",
                        "text": "Java序列化",
                        "items": [
                            {
                                "link": "/docs/Backend/Java/Others/Serialization/Jackson.md",
                                "text": "Jackson"
                            }
                        ]
                    },
                    {
                        "collapsed": true,
                        "link": "/docs/Backend/Java/Others/Storage/index.md",
                        "text": "对象存储",
                        "items": [
                            {
                                "collapsed": true,
                                "link": "/docs/Backend/Java/Others/Storage/MinIO/index.md",
                                "text": "MinIO 分布式对象存储",
                                "items": [
                                    {
                                        "link": "/docs/Backend/Java/Others/Storage/MinIO/Overview.md",
                                        "text": "MinIO 概述"
                                    },
                                    {
                                        "collapsed": true,
                                        "link": "/docs/Backend/Java/Others/Storage/MinIO/Single/index.md",
                                        "text": "MinIO 单机安装",
                                        "items": [
                                            {
                                                "link": "/docs/Backend/Java/Others/Storage/MinIO/Single/Windows.md",
                                                "text": "Windows 安装"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/Others/Storage/MinIO/Single/MacOS.md",
                                                "text": "MacOS 安装"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/Others/Storage/MinIO/Single/Linux.md",
                                                "text": "Linux 安装"
                                            },
                                            {
                                                "link": "/docs/Backend/Java/Others/Storage/MinIO/Single/Docker.md",
                                                "text": "Docker 安装 MinIO"
                                            }
                                        ]
                                    },
                                    {
                                        "collapsed": true,
                                        "link": "/docs/Backend/Java/Others/Storage/MinIO/Integration/index.md",
                                        "text": "MinIO 集成操作",
                                        "items": [
                                            {
                                                "link": "/docs/Backend/Java/Others/Storage/MinIO/Integration/Java.md",
                                                "text": "Java 操作 MinIO"
                                            }
                                        ]
                                    },
                                    {
                                        "link": "/docs/Backend/Java/Others/Storage/MinIO/EC.md",
                                        "text": "MinIO 纠删码模式"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/Others/Storage/MinIO/Cluster.md",
                                        "text": "MinIO 集群部署"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/Others/Storage/MinIO/Errors.md",
                                        "text": "MinIO 常见错误"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "collapsed": true,
                        "link": "/docs/Backend/Java/Others/TemplateEngine/index.md",
                        "text": "模板引擎",
                        "items": [
                            {
                                "collapsed": true,
                                "link": "/docs/Backend/Java/Others/TemplateEngine/Thymeleaf/index.md",
                                "text": "Thymeleaf",
                                "items": [
                                    {
                                        "link": "/docs/Backend/Java/Others/TemplateEngine/Thymeleaf/Overview.md",
                                        "text": "Thymeleaf 介绍"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/Others/TemplateEngine/Thymeleaf/Environment.md",
                                        "text": "Thymeleaf 环境搭建"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/Others/TemplateEngine/Thymeleaf/View.md",
                                        "text": "物理视图和逻辑视图"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/Others/TemplateEngine/Thymeleaf/StandardDialect.md",
                                        "text": "Thymeleaf 标准方言"
                                    },
                                    {
                                        "link": "/docs/Backend/Java/Others/TemplateEngine/Thymeleaf/Grammar.md",
                                        "text": "Thymeleaf 基本语法"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "collapsed": true,
                        "link": "/docs/Backend/Java/Others/UseTools/index.md",
                        "text": "实用工具",
                        "items": [
                            {
                                "link": "/docs/Backend/Java/Others/UseTools/DevTools.md",
                                "text": "Dev-Tools"
                            },
                            {
                                "link": "/docs/Backend/Java/Others/UseTools/Lombok.md",
                                "text": "Lombok"
                            }
                        ]
                    },
                    {
                        "link": "/docs/Backend/Java/Others/DesignPattern/index.md",
                        "text": "设计模式"
                    },
                    {
                        "collapsed": true,
                        "link": "/docs/Backend/Java/Others/Architecture/index.md",
                        "text": "架构设计",
                        "items": [
                            {
                                "collapsed": true,
                                "link": "/docs/Backend/Java/Others/Architecture/Layer/index.md",
                                "text": "分层架构",
                                "items": [
                                    {
                                        "link": "/docs/Backend/Java/Others/Architecture/Layer/MVC/index.md",
                                        "text": "MVC 理论基础"
                                    }
                                ]
                            },
                            {
                                "collapsed": true,
                                "link": "/docs/Backend/Java/Others/Architecture/AuthoritySystem/index.md",
                                "text": "企业权限系统设计",
                                "items": [
                                    {
                                        "link": "/docs/Backend/Java/Others/Architecture/AuthoritySystem/JWT/index.md",
                                        "text": "JWT"
                                    }
                                ]
                            },
                            {
                                "link": "/docs/Backend/Java/Others/Architecture/MultipleAccounts/index.md",
                                "text": "多账号统一登录"
                            },
                            {
                                "link": "/docs/Backend/Java/Others/Architecture/Coupon/index.md",
                                "text": "从零搭建10万级 QPS 大流量、高并发优惠券系统"
                            },
                            {
                                "collapsed": true,
                                "link": "/docs/Backend/Java/Others/Architecture/RetailSaaS/index.md",
                                "text": "客户管理系统的应用架构设计"
                            }
                        ]
                    },
                    {
                        "link": "/docs/Backend/Java/Others/ScheduledTask/index.md",
                        "text": "定时任务",
                        "collapsed": true,
                        "items":[
                            {
                                "link": "/docs/Backend/Java/Others/ScheduledTask/Overview.md",
                                "text": "概述"
                            },
                            {
                                "link": "/docs/Backend/Java/Others/ScheduledTask/cron.md",
                                "text": "cron表达式"
                            },
                            {
                                "link": "/docs/Backend/Java/Others/ScheduledTask/SpringTask/index.md",
                                "text": "Spring Task"
                            },
                            {
                                "link": "/docs/Backend/Java/Others/ScheduledTask/XXL-JOB/index.md",
                                "text": "XXL-JOB"
                            },
                            
                        ]
                    },
                ]
            }
        ]
    }
]

// Python
export const Python = [
    {
        text: 'Python',
        link: '/docs/Backend/Python/index.md',
        items: set_sidebar("/docs/Backend/Python")
    }
]