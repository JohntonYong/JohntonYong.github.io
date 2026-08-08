---
title: 指南
icon: terminal
---

## 一个基于IPCamera的商用级安防行业音视频解决方案

![](https://raw.githubusercontent.com/JohntonYong/JohntonYong.github.io/efae6c6fb6332aae0284888c17e20049e833ab3e/src/.vuepress/public/images/guide/1.jpg)

## 大规模视频监控2.0平台演示

### 设备管理客户端

<img src="https://raw.githubusercontent.com/JohntonYong/JohntonYong.github.io/3825798bbfa2bf3d759f999a42f9381e4f127e44/src/.vuepress/public/images/tutorial/1.png" style="zoom:50%;" />

### 显示控制客户端

<img src="https://raw.githubusercontent.com/JohntonYong/JohntonYong.github.io/3825798bbfa2bf3d759f999a42f9381e4f127e44/src/.vuepress/public/images/tutorial/2.png" style="zoom:50%;" />

### 项目特点

- 国内外主流品牌**厂商**SDK接入平台

- 国内外主流品牌**自研**SDK接入平台

## 自研网络设备SDK

### 自研初衷

- 由于历史原因，大规模视频监控2.0平台开发部署于Linux i686 Architecture，头部厂商宇视科技不提供Linux 32位网络设备SDK，设备无法接入平台。

- 厂商官方提供的网络设备SDK，部分接口存在问题，需要实际项目驱动设备厂家提供技术支持，这对个人开发者来说很不友好。

- 个人尽管购买厂商网络设备，原则上可以索要技术支持，但是从问题的反馈到解决流程耗时不可控，研发进度受阻。

  <img src="https://raw.githubusercontent.com/JohntonYong/JohntonYong.github.io/3825798bbfa2bf3d759f999a42f9381e4f127e44/src/.vuepress/public/images/tutorial/3.jpg" style="zoom:30%;" />

- 大规模视频监控2.0平台只支持H.264 视频编码格式，升级到3.0平台后将全面支持H265/H264/AAC/G711/OPUS/等主流编解码器。

- 作为深耕安防行业数十年的技术老兵， ONVIF、GB/T 28181、流媒体数据处理等环节已不陌生，希望积累的技术经验能够沉淀并付诸实践。

  <img src="https://raw.githubusercontent.com/JohntonYong/JohntonYong.github.io/3825798bbfa2bf3d759f999a42f9381e4f127e44/src/.vuepress/public/images/tutorial/4.jpg" style="zoom:30%;" />

### 自研成果

- STDevSDK，用于ONVIF协议与网络设备信令交互。
- STDgbSDK，用于国标GB/T28181协议与网络设备信令交互。
- STDavSDK，用于RTSP流媒体编码、解码、转码等数据处理。
- CuiAppD，用于转封装后的RTP数据数据发送和Restful信令处理。
- STDfsSDK，国产化视频抽帧工具链，详情参考 “免费专区”-“编码解码”模块。

## 大规模视频监控3.0平台计划

- 基于自研网络设备SDK提供全平台系统和架构能力。
- 打通设备代理服务，流媒体服务，业务管理服务等核心模块。
- 提供开放的客户端集成Restful API协议接口能力。
- 考虑跨平台和通用性，目前只实现基于浏览器的Web客户端用于功能验证和效果展示。

## 关于3.0平台开源共建

欢迎感兴趣的小伙伴基于上述自研平台能力，共建客户端技术实践生态。

- Windows 桌面端
- Mac 桌面端
- 手机移动端：安卓（Android）、苹果（Apple）、鸿蒙（Harmony OS）
- 开源Linux 桌面端，代表系统Ubuntu
- 国产化系统桌面端，代表系统麒麟（Kylin OS）、统信 （UOS）

## 项目定位

- 技术开发
- 技术咨询
- 技术服务
- 技术推广
- 技术培训
- 技术转让

## 开发路线

持续聚焦于音视频领域的监控、点播、直播、会议，网络电话等产品开发实践。

![](https://raw.githubusercontent.com/JohntonYong/JohntonYong.github.io/fe3c96e41de90af6c1bf4a722f08fb6cb4f2603e/src/.vuepress/public/images/guide/2.jpg)
