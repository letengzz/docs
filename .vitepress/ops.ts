import { set_sidebar } from "../utils/auto-gen-sidebar.mjs";	// 改成自己的路径

// VM
export const VM = [
    {
        text: '虚拟机',
        link: '/docs/Ops/VM/index.md',
        items: [
            { text: 'VMware', link: '/docs/Ops/VM/VMware.md' },
            { text: 'Vagrant', link: '/docs/Ops/VM/Vagrant.md' },
        ]
    }
]

// Linux
export const Linux = [
    {
        text: 'Linux',
        link: '/docs/Ops/Linux/index.md',
        items: [
            { text: 'Linux 概述', link: '/docs/Ops/Linux/Overview.md' },
            { text: 'Linux 虚拟机安装', link: '/docs/Ops/VM/index.md' },
            { text: 'Linux 磁盘管理', link: '/docs/Ops/Linux/Disk.md' },
            { text: 'Linux 系统命令', link: '/docs/Ops/Linux/SystemCommand.md' },
            { text: 'Linux 用户管理', link: '/docs/Ops/Linux/Users.md' },
            { text: 'Linux 文件管理与操作', link: '/docs/Ops/Linux/File.md' },
            { text: 'Linux 软件安装', link: '/docs/Ops/Linux/SoftwareInstall.md' },
            { text: 'Linux shell编程', link: '/docs/Ops/Linux/shell.md' },
            {
                text: '拓展', collapsed: true, items: [
                    { text: 'GCC', link: '/docs/Ops/Linux/GCC.md' },
                    { text: '安装FTP', link: '/docs/Ops/Linux/FTP.md' },
                    { text: '将Web应用部署到阿里云', link: '/docs/Ops/Linux/DeployAlibaba.md' },
                ]
            },
        ]
    }
]

// Nginx
export const Nginx = [
    {
        text: 'Nginx',

        link: '/docs/Ops/Nginx/index.md',
        items: [
            { text: 'Nginx 概述', link: '/docs/Ops/Nginx/Overview.md' },
            { text: 'Nginx 安装', link: '/docs/Ops/Nginx/Install/index.md' },
            { text: 'Nginx 基础使用', link: '/docs/Ops/Nginx/BasicUsage.md' },
        ]
    }
]

// Docker
export const Docker = [
    {
        text: 'Docker',
        link: '/docs/Ops/Docker/index.md',
        items: [
            { text: 'Docker 概述', link: '/docs/Ops/Docker/Overview.md' },
            { text: 'Docker 容器与沙盒', link: '/docs/Ops/Docker/ContainersSandboxes.md' },
            {
                text: 'Docker 安装与卸载',
                link: '/docs/Ops/Docker/InstallUninstall/index.md',
                collapsed: true,
                items: [
                    { text: 'Windows 安装', link: '/docs/Ops/Docker/InstallUninstall/WindowsInstall.md' },
                    { text: 'MacOS 安装', link: '/docs/Ops/Docker/InstallUninstall/MacOSInstall.md' },
                    { text: 'Linux 安装', link: '/docs/Ops/Docker/InstallUninstall/LinuxInstall.md' },
                    { text: 'Windows 卸载', link: '/docs/Ops/Docker/InstallUninstall/WindowsUninstall.md' },
                    { text: 'MacOS 卸载', link: '/docs/Ops/Docker/InstallUninstall/MacOSUninstall.md' },
                    { text: 'Linux 卸载', link: '/docs/Ops/Docker/InstallUninstall/LinuxUninstall.md' },
                ]
            },
            { text: 'Docker 进程命令', link: '/docs/Ops/Docker/ProcessCommand.md' },
            { text: 'Docker 镜像', link: '/docs/Ops/Docker/Images.md' },
            { text: 'Docker 容器', link: '/docs/Ops/Docker/Containers.md' },
            { text: 'Docker 数据卷', link: '/docs/Ops/Docker/Volumes.md' },
            { text: 'Dockerfile', link: '/docs/Ops/Docker/Dockerfile.md' },
            { text: 'Docker 网络', link: '/docs/Ops/Docker/Network.md' },
            { text: 'Docker Compose', link: '/docs/Ops/Docker/DockerCompose.md' },
            { text: 'Docker 其他操作' },
            { text: 'Docker 管理平台' },
            { text: 'Docker 监控平台', link: '/docs/Ops/Docker/CIG.md' },
            {
                text: '拓展', collapsed: true, items: [
                    { text: 'Docker 镜像To阿里云', link: '/docs/Ops/Docker/DockerToAli.md' },
                    { text: 'Docker 常见错误', link: '/docs/Ops/Docker/Errors.md' },
                ]
            },
        ]
    }
]

// Kubernetes
export const Kubernetes = [
    {
        text: 'Kubernetes',

        link: '/docs/Ops/Kubernetes/index.md',
        items: [
            { text: 'Kubernetes 概述', link: '/docs/Ops/Kubernetes/Overview.md' },
        ]
    }
]

// JumpServer
export const JumpServer = [
    {
        text: 'JumpServer',
        link: '/docs/Ops/JumpServer/index.md',
    }
]

// Tools
export const OpsTools = [
    {
        text: '工具',
        link: '/docs/Ops/Tools/index.md',
        items: [
            { text: 'Xshell', link: '/docs/Ops/Tools/Xshell.md' },
            { text: 'Xftp', link: '/docs/Ops/Tools/Xftp.md' },
        ]
    }
]

// Others
export const OpsOthers = [
    {
        text: '其他',
        link: '/docs/Ops/Others/index.md',
        items: set_sidebar("/docs/Ops/Others")
    }
]