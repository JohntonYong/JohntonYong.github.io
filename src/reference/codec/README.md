---
title: 编码解码
icon: font-awesome
index: true
---

## 音视频编解码介绍

### 多媒体编解码框架

- [FFmpeg](https://www.ffmpeg.org/)
- [GStreamer](https://gstreamer.freedesktop.org/)

### 主流GPU厂商

[华为基础软件开发平台](https://www.hiascend.com/)

![](https://raw.githubusercontent.com/JohntonYong/JohntonYong.github.io/5fd744b2136e8b45cdbad28f8e8f809b436630cd/src/.vuepress/public/images/tutorial/1.png)

[寒武纪基础软件开发平台](https://developer.cambricon.com/)

![](https://raw.githubusercontent.com/JohntonYong/JohntonYong.github.io/5fd744b2136e8b45cdbad28f8e8f809b436630cd/src/.vuepress/public/images/tutorial/2.png)

[英伟达基础软件开发平台](https://www.nvidia.com/)

![](https://raw.githubusercontent.com/JohntonYong/JohntonYong.github.io/5fd744b2136e8b45cdbad28f8e8f809b436630cd/src/.vuepress/public/images/tutorial/3.png)

### 硬解码特性
关于硬解码输出原始数据格式，cpu的一般都是yuv420p，gpu一般都是nv12，寒武纪，华为，英伟达都是这样，因为解码器支持的解码输出格式是有限的，不像cpu那么丰富，对gpu来说nv12比yuv420少一次的数据拷贝，对pcie带宽的压力小一些。这里需要使用负责视频像素格式转换和图像缩放的[libyuv](https://chromium.googlesource.com/libyuv/libyuv/)按需转换，libyuv是音视频链路中的“像素处理加速库”。

### 英伟达官方视频抽帧工具链
[PyNvVideoCodec](https://docs.nvidia.com/video-technologies/pynvvideocodec/index.html)
NVIDIA PyNvVideoCodec 提供了简洁的 API，方便 Python 在处理视频时利用视频编码和解码功能。PyNvVideoCodec 是一个库，它为 C++ API 提供了 Python 绑定，用于实现硬件加速的视频编码和解码。