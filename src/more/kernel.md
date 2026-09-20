---
title: Linux Kernel 开发环境搭建与 QEMU 入门实践
icon: circle-info
index: true
---

## QEMU 简介

[QEMU](https://www.qemu.org/) 是一个开源的机器模拟器（Machine Emulator）和虚拟化器（Virtualizer），广泛用于：

- Linux 内核开发
- 驱动开发
- 嵌入式系统开发
- 操作系统学习
- 虚拟机运行

## 安装 QEMU

```bash
yum install -y qemu-kvm qemu-img
```

查看版本：

```bash
/usr/libexec/qemu-kvm --version
```

输出：

```text
QEMU emulator version 4.2.0 (qemu-kvm-4.2.0-59.module_el8.5.0+1063+c9b9feff.1)
Copyright (c) 2003-2019 Fabrice Bellard and the QEMU Project developers
```

## 安装依赖

```bash
sudo yum install bc
sudo yum install busybox
```

## 下载[Kernel](https://www.kernel.org/)源码

压缩包链接：https://www.kernel.org/pub/linux/kernel/v7.x/linux-7.2.6.tar.gz

## 下载[GCC](https://gcc.gnu.org/)编译器源码(可选)

```text

gcc-8.3.0/
│
├── gmp -> gmp-6.1.0
├── gmp-6.1.0/
│
├── mpfr -> mpfr-3.1.4
├── mpfr-3.1.4/
│
├── mpc -> mpc-1.0.3
├── mpc-1.0.3/
│
├── isl -> isl-0.18
├── isl-0.18/
│
└── contrib/

```

## 编译 Linux Kernel

```bash
tar -xf linux-7.2.6.tar.gz
cd linux-7.2.6/
make defconfig
make -j8
```

输出：

```text
Kernel: arch/x86/boot/bzImage is ready  (#1)
```

## 使用 initramfs（推荐）

### 创建 BusyBox RootFS

```bash
mkdir rootfs
mkdir -p rootfs/{bin,sbin,etc,proc,sys,dev}
```

### 复制 BusyBox

```bash
cp /usr/sbin/busybox rootfs/bin/
```

### 建立链接

```bash
cd rootfs/bin

for i in $(./busybox --list)
do
    ln -s busybox $i
done
```

### 创建 init

```bash
vim rootfs/init
```

### 赋权限

```bash
chmod +x rootfs/init
```

## 安装开发环境

```bash
yum install kernel-devel kernel-headers
```

## 入门程序 hello.c

```c
#include <linux/module.h>
#include <linux/kernel.h>
#include <linux/init.h>

static int __init hello_init(void)
{
    printk(KERN_INFO "Hello Kernel Module Loaded!\n");
    return 0;
}

static void __exit hello_exit(void)
{
    printk(KERN_INFO "Hello Kernel Module Removed!\n");
}

module_init(hello_init);
module_exit(hello_exit);

MODULE_LICENSE("GPL");
MODULE_AUTHOR("ydyong");
MODULE_DESCRIPTION("Hello Linux Kernel Module");
MODULE_VERSION("1.0");
```

## 编译脚本 Makefile

```makefile
obj-m += hello.o

KDIR :=  /path/to/linux-7.2.6
PWD  := $(shell pwd)

all:
        make -C $(KDIR) M=$(PWD) modules

clean:
        make -C $(KDIR) M=$(PWD) clean
```

## 编译

```bash
make
```

## 拷贝 hello.ko

```bash
cp hello.ko rootfs
```

## 打包

```bash
cd rootfs
find . | cpio -o -H newc | gzip > ../rootfs.cpio.gz
```

## 启动

```bash
/usb/libexec/qemu-kvm \
-kernel arch/x86/boot/bzImage \
-initrd rootfs.cpio.gz \
-append "console=ttyS0" \
-nographic

参数说明：

| 参数 | 说明 |
|--------|--------|
| -kernel | 指定 Linux Kernel |
| -initrd | 指定 Initramfs |
| -append | 传递内核启动参数 |
| console=ttyS0 | 串口输出 |
| -nographic | 不启动图形界面 |

```

启动后会进入：

```text
Boot OK
```

```bash
/ # insmod hello.ko
```

输出：

```text
[ 1185.486556] Hello Kernel Module Loaded!
```

```bash
/ # lsmod hello
```

输出：

```text
Module                  Size  Used by    Tainted: G
hello                  12288  0
```

```bash
/ # rmmod hello
```

输出：

```text
[ 1205.935551] Hello Kernel Module Removed!
```

## 退出 QEMU

```text
ctrl+a
x
quit
```

