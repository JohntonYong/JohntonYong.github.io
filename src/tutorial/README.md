---
title: 快速开始
icon: lightbulb
---
# 快速开始

## 关于安博会

[中国国际社会公共安全产品博览会](https://www.securitychina.com.cn/)（简称“安博会”, 英文“Security China”）由中华人民共和国商务部批准，中国安全防范产品行业协会主办并承办。安博会自1994年创办以来，历经三十余载的砥砺发展，十七届的辉煌历程，服务上万家参展商，专业观众达百万人次，被誉为全国乃至国际安防行业发展的晴雨表和风向标。

## 国内安防主流厂商

### 海康威视

官方网站：https://www\.hikvision\.com/

SDK链接：https://open\.hikvision\.com/download/5cda567cf47ae80dd41a54b3?type=10

### 大华股份

官方网站：https://www\.dahuatech\.com/

SDK链接：https://support\.dahuatech\.com/sdkindex/sdkExploit

### 宇视科技

官方网站：https://cn\.uniview\.com/

SDK链接：https://unisee\.uniview\.com/zh/home/resource

## 关于厂商网络设备SDK
网络设备SDK是基于设备私有网络通信协议开发的，为嵌入式网络硬盘录像机、NVR、网络摄像机、网络球机、视频服务器、解码器、报警主机、网络存储等产品服务的配套模块，用于远程访问和控制设备软件的二次开发。

### SDK支持的系统说明

**Windows 32位网络设备SDK：**

- Windows 8/Windows 7/Vista/XP以及Windows Server 2012/2008/2003 

**Windows 64位网络设备SDK：**

- Windows 10/Windows 8/Windows 7以及Windows Server 2012/2008 

**Linux 32位网络设备SDK：**

- GCC版本要求大于等于4.1.2
- 支持系统：CentOS 5.4、Redhat AS5.4 、ubuntu 9.10、Fedora12及以上版本 

**Linux 64位网络设备SDK：**

- GCC版本要求大于等于4.1.2
- 支持系统：CentOS 5.4、Redhat AS5.4 、SUSE10及以上版本

## 本项目开发环境

- 开发工具 Visual Studio *2008*

- 调试环境 Win32
- 生产环境 Red Hat Enterprise Linux Server release 6.5 (Santiago)
- gcc 版本 4.4.7 20120313 (Red Hat 4.4.7-4) (GCC)
- GNU Make 3.81
- cmake version 2.6-patch 4

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

## 大规模视频监控2.0平台演示

### 设备管理客户端

<img src="https://raw.githubusercontent.com/JohntonYong/JohntonYong.github.io/3825798bbfa2bf3d759f999a42f9381e4f127e44/src/.vuepress/public/images/tutorial/1.png" style="zoom:50%;" />

### 显示控制客户端

<img src="https://raw.githubusercontent.com/JohntonYong/JohntonYong.github.io/3825798bbfa2bf3d759f999a42f9381e4f127e44/src/.vuepress/public/images/tutorial/2.png" style="zoom:50%;" />

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
