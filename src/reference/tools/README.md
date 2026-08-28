---
title: 推荐工具
icon: font-awesome
index: true
---

## 语言标准工具

- [C/C\+\+ 标准库](https://en.cppreference.com/)

## 代码阅读工具

- [Source Insight](https://www.sourceinsight.com/)

- [Visual Studio Code](https://code.visualstudio.com/)

## 代码管理工具

- [git官网](https://git-scm.com/)

- [svn官网](https://tortoisesvn.net/)

## 代码构建工具

- [cmake官网](https://cmake.org/)

## 网络调试工具

- [wireshark官网](https://www.wireshark.org/)

## API网络工具

- [ApiPost官网](https://www.apipost.cn/)

- [ApiFox官网](https://apifox.com/)

## 命令行工具

- [MobaxTerm官网](https://mobaxterm.mobatek.net/)

- [XSHELL官网](https://www.xshell.com/zh/xshell/)

## 代码比较工具

- [Beyond Compare官网](https://www.scootersoftware.com/)

## 现代云原生应用从构建、部署到管理的基础设施栈
### 技术栈概览对比

| 技术 | 核心定位 | 关键特性与价值 |
| :--- | :--- | :--- |
| **GitLab** | **一体化 DevOps 平台** | 提供从代码托管、CI/CD、安全扫描到项目管理的**全生命周期工具链**。它定位为一个**完整的DevOps平台**，旨在通过单一应用降低多工具集成的复杂度。支持开源，可私有化部署，实现数据自主可控。 |
| **MinIO** | **高性能对象存储** | 是**与 Amazon S3 API 完全兼容的开源对象存储服务**，被视为可私有化部署的“AWS S3”。核心价值在于**高性能**（针对NVMe SSD和高速网络优化）和**低成本**（通过纠删码技术实现高可靠性和低存储开销），非常适合存储图片、视频、日志等非结构化数据。 |
| **Docker** | **容器化引擎** | 是应用**容器化打包和运行的基础平台**，通过将应用及依赖打包成轻量、可移植的**容器镜像**，实现了“一次构建，随处运行”。其优势在于**启动快、资源占用少**，相比传统虚拟机效率更高。 |
| **Docker Compose** | **多容器编排工具** | 是 Docker 的**官方工具，用于在单台主机上定义和运行多容器应用**。它允许你通过一个 YAML 文件配置所有服务（如Web应用、数据库、缓存），然后一键启动整个应用栈。主要用于**开发、测试环境**和小规模生产部署。 |
| **Kubernetes** | **生产级容器编排平台** | 是用于**自动化部署、扩缩和管理容器化应用的**开源系统，**定位为生产级平台**。其关键能力包括**服务发现与负载均衡、自我修复、自动扩缩容**等，用于管理大规模的容器集群，支持在任意基础设施（本地、混合云、公有云）上运行。 |

### 它们如何协同工作？

这五个技术可以构成一条清晰的现代化应用交付流水线：

1.  **开发与构建**：开发者将代码提交到 **GitLab**，由 **GitLab CI/CD** 触发自动化流水线。
2.  **打包与存储**：流水线使用 **Docker** 将应用及其环境打包成容器镜像。这些镜像可以存储在 **GitLab** 内置的容器仓库（Container Registry） 或 **MinIO** 中。
3.  **编排与部署**：对于单机或开发测试环境，可以使用 **Docker Compose** 快速启动整个应用栈。对于生产环境或大规模集群，则依靠 **Kubernetes** 进行容器编排、部署、弹性伸缩和故障自愈。
4.  **数据与状态存储**：应用产生的非结构化数据（如用户上传文件、日志）可以存储在 **MinIO** 这类高性能对象存储中。