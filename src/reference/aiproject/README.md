---
title: AI工程化
icon: font-awesome
index: true
---

## AI工程化
- [Hugging Face](https://huggingface.co/)
模型生态和工具平台（提供模型、数据集、训练/推理工具）

- [OpenVINO Runtime](https://openvino.ai/)
- [OpenVINO Docs](https://docs.openvino.ai/)
Intel 专用 AI 推理优化引擎（CPU/iGPU/VPU/NPU 优化）

- [ONNX Runtime](https://onnxruntime.ai/)
- [ONNX Docs](https://onnxruntime.ai/docs/)
通用 AI 推理引擎（跨平台、高性能）

- [OpenCV](https://opencv.org/)
OpenCV（Open Source Computer Vision Library）是目前全球使用最广泛的开源计算机视觉库，主要用于：

- 图像处理
- 视频处理
- 目标检测
- 人脸识别
- 特征提取
- 摄像头采集
- 机器学习
- AI视觉应用开发

## 典型视觉AI流程
例如：

IPC摄像头 → 人脸识别 / 目标检测 / 车牌识别
                 Camera IPC
                    |
                    |
                 RTSP流
                    |
                    |
              FFmpeg/GStreamer
              (视频解码)
                    |
                    |
                OpenCV
        (图像处理/预处理)
                    |
        +-----------+-----------+
        |                       |
     Resize                 Normalize
        |                       |
        +-----------+-----------+
                    |
                    |
              Tensor输入
                    |
                    |
        +----------------------+
        |                      |
   ONNX Runtime          OpenVINO Runtime
        |                      |
        |                      |
      YOLO              OpenVINO YOLO
        |
        |
    AI推理结果
        |
        |
 +------+------+------+
 |             |      |
 人          车      车牌
 检测        检测    OCR


## 音频算法

### 基本定义
| 名称     | 全称                          | 作用        |
| ------ | --------------------------- | --------- |
| AEC    | Acoustic Echo Cancellation  | 消除扬声器回声   |
| ANS/NS | Automatic Noise Suppression | 降低环境噪声    |
| AGC    | Automatic Gain Control      | 自动调整音量    |
| AINS   | AI Noise Suppression        | 基于AI的智能降噪 |

### 算法对比
|               | AEC  | ANS   | AGC  | AINS   |
| ------------- | ---- | ----- | ---- | ------ |
| 中文            | 回声消除 | 噪声抑制  | 自动增益 | AI智能降噪 |
| 目标            | 去回声  | 去噪声   | 调音量  | 复杂噪声增强 |
| 传统DSP         | ✅    | ✅     | ✅    | ❌      |
| AI模型          | ❌    | ❌     | ❌    | ✅      |
| ONNX/OpenVINO | ❌    | ❌     | ❌    | ✅      |
| 替代难度          | 高    | 低     | 低    | 替代ANS  |
| 当前趋势          | 保留   | 逐渐AI化 | 保留   | 快速发展   |

AEC负责消回声，AINS负责智能降噪，AGC负责音量稳定。未来趋势不是AI替代全部3A，而是“传统AEC/AGC + AI ANS”的混合架构。

### 典型听觉AI流程
例如：

麦克风 → 回声消除 → AI降噪 → 语音编码
                 Microphone
                      |
                      |
                   PCM数据
                      |
                      |
              音频前处理(Audio DSP)
                      |
        +-------------+-------------+
        |             |             |
       AEC           ANS           AGC
   回声消除       噪声抑制       自动增益
        |
        |
     Clean PCM
        |
        |
    音频特征提取
        |
        |
      STFT
   (时频转换)
        |
        |
    Tensor输入
        |
        |
 +----------------------------+
 |                            |
ONNX Runtime             OpenVINO Runtime
 |                            |
DPCRN                  DeepFilterNet
AI-NS                  AI-NS
 |
 |
增强语音
 |
 |
Opus编码
 |
 |
网络传输

## 安防场景中音视频AI项目中的推荐组合
             摄像头RTSP混合流
                    |
                    |
              OpenCV / WebRTC
                    |
        +-----------+-----------+
        |                       |
      视频AI                 音频AI
        |                       |
 YOLO/Face/OCR                 AINS
        |                       |
 ONNX Runtime            ONNX Runtime
        |
 Intel设备:
        |
 OpenVINO Runtime

       |
       ↓
检测:
 人
 车
 车牌
       |
       ↓
告警/录像/跟踪

