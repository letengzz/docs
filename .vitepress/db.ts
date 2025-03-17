// 关系型数据库
export const Relational = [
    {
        text: '关系型数据库', link: '/docs/DB/Relational/index.md', items: [
            { text: 'SQL 概述', link: '/docs/DB/Relational/SQL.md' },
            { text: 'ER模型', link: '/docs/DB/Relational/ERModel.md' },
            { text: 'DBMS 概述', link: '/docs/DB/Relational/DBMS.md' },
            { text: '建模工具', link: '/docs/DB/Relational/ModelTools/index.md' },
            { text: 'MySQL', link: '/docs/DB/Relational/MySQL/index.md' },
            { text: 'Oracle', link: '/docs/DB/Relational/Oracle/index.md' },
            { text: '人大金仓', link: '/docs/DB/Relational/KingbaseES/index.md' },
        ]
    },
]

// 非关系型数据库
export const NoRelational = [
    {
        text: '非关系型数据库',
        link: '/docs/DB/NoRelational/index.md',
        items: [
            { text: '概述', link: '/docs/DB/NoRelational/Overview.md' },
            {
                text: 'Elastic Stack', link: '/docs/DB/NoRelational/ELK/index.md', collapsed: true, items: [
                    {
                        text: 'Elasticsearch', link: '/docs/DB/NoRelational/ELK/Elasticsearch/index.md', collapsed: true, items: [
                            { text: 'Elasticsearch 概述', link: '/docs/DB/NoRelational/ELK/Elasticsearch/Overview.md' },
                            { text: 'Elasticsearch 核心概念', link: '/docs/DB/NoRelational/ELK/Elasticsearch/CoreConcept.md' },
                            { text: 'Elasticsearch 安装', link: '/docs/DB/NoRelational/ELK/Elasticsearch/Install/index.md' },
                            { text: 'Elasticsearch 基础使用', link: '/docs/DB/NoRelational/ELK/Elasticsearch/BasicOperation.md' },
                            { text: 'Elasticsearch 分词器', link: '/docs/DB/NoRelational/ELK/Elasticsearch/Tokenizer/index.md' },
                            { text: 'Elasticsearch 可视化工具', link: '/docs/DB/NoRelational/ELK/Elasticsearch/VisualTool/index.md' },
                            { text: 'Elasticsearch Java操作', link: '/docs/DB/NoRelational/ELK/Elasticsearch/Java/index.md' },
                        ]
                    },
                    {
                        text: 'Kibana', collapsed: true, items: [
                            { text: 'Kibana 安装', link: '/docs/DB/NoRelational/ELK/Kibana/Install/index.md' },
                        ]
                    },
                    {
                        text: '插件', collapsed: true, items: [
                            { text: 'fscrawler 文档爬虫', link: '/docs/DB/NoRelational/ELK/Kibana/Install/index.md' },
                        ]
                    },
                ]
            },
            { text: 'Redis', link: '/docs/DB/NoRelational/Redis/index.md' },
            { text: 'MongoDB', link: '/docs/DB/NoRelational/MongoDB/index.md' },
            { text: 'HBase', link: '/docs/DB/NoRelational/HBase/index.md' },
        ]
    }
]

