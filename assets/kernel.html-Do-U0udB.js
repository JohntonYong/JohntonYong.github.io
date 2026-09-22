import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as d,o as r,c as o,b as a,d as s,e as i,a as l}from"./app-C1h05dL7.js";const c={},p={href:"https://www.qemu.org/",target:"_blank",rel:"noopener noreferrer"},u={id:"下载kernel源码",tabindex:"-1"},v={href:"https://www.kernel.org/",target:"_blank",rel:"noopener noreferrer"},m={id:"下载gcc编译器源码-可选",tabindex:"-1"},b={href:"https://gcc.gnu.org/",target:"_blank",rel:"noopener noreferrer"};function k(h,n){const e=d("ExternalLinkIcon");return r(),o("div",null,[n[10]||(n[10]=a("h2",{id:"qemu-简介",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#qemu-简介","aria-hidden":"true"},"#"),s(" QEMU 简介")],-1)),a("p",null,[a("a",p,[n[0]||(n[0]=s("QEMU",-1)),i(e)]),n[1]||(n[1]=s(" 是一个开源的机器模拟器（Machine Emulator）和虚拟化器（Virtualizer），广泛用于：",-1))]),n[11]||(n[11]=l(`<ul><li>Linux 内核开发</li><li>驱动开发</li><li>嵌入式系统开发</li><li>操作系统学习</li><li>虚拟机运行</li></ul><h2 id="安装-qemu" tabindex="-1"><a class="header-anchor" href="#安装-qemu" aria-hidden="true">#</a> 安装 QEMU</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> qemu-kvm qemu-img
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看版本：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/usr/libexec/qemu-kvm <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>QEMU emulator version 4.2.0 (qemu-kvm-4.2.0-59.module_el8.5.0+1063+c9b9feff.1)
Copyright (c) 2003-2019 Fabrice Bellard and the QEMU Project developers
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a> 安装依赖</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token function">bc</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> busybox
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,9)),a("h2",u,[n[3]||(n[3]=a("a",{class:"header-anchor",href:"#下载kernel源码","aria-hidden":"true"},"#",-1)),n[4]||(n[4]=s(" 下载",-1)),a("a",v,[n[2]||(n[2]=s("Kernel",-1)),i(e)]),n[5]||(n[5]=s("源码",-1))]),n[12]||(n[12]=a("p",null,"压缩包链接：https://www.kernel.org/pub/linux/kernel/v7.x/linux-7.2.6.tar.gz",-1)),a("h2",m,[n[7]||(n[7]=a("a",{class:"header-anchor",href:"#下载gcc编译器源码-可选","aria-hidden":"true"},"#",-1)),n[8]||(n[8]=s(" 下载",-1)),a("a",b,[n[6]||(n[6]=s("GCC",-1)),i(e)]),n[9]||(n[9]=s("编译器源码(可选)",-1))]),n[13]||(n[13]=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
gcc-8.3.0/
│
├── gmp -&gt; gmp-6.1.0
├── gmp-6.1.0/
│
├── mpfr -&gt; mpfr-3.1.4
├── mpfr-3.1.4/
│
├── mpc -&gt; mpc-1.0.3
├── mpc-1.0.3/
│
├── isl -&gt; isl-0.18
├── isl-0.18/
│
└── contrib/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编译-linux-kernel" tabindex="-1"><a class="header-anchor" href="#编译-linux-kernel" aria-hidden="true">#</a> 编译 Linux Kernel</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-xf</span> linux-7.2.6.tar.gz
<span class="token builtin class-name">cd</span> linux-7.2.6/
<span class="token function">make</span> defconfig
<span class="token function">make</span> <span class="token parameter variable">-j8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Kernel: arch/x86/boot/bzImage is ready  (#1)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="使用-initramfs-推荐" tabindex="-1"><a class="header-anchor" href="#使用-initramfs-推荐" aria-hidden="true">#</a> 使用 initramfs（推荐）</h2><h3 id="创建-busybox-rootfs" tabindex="-1"><a class="header-anchor" href="#创建-busybox-rootfs" aria-hidden="true">#</a> 创建 BusyBox RootFS</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> rootfs
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> rootfs/<span class="token punctuation">{</span>bin,sbin,etc,proc,sys,dev<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="复制-busybox" tabindex="-1"><a class="header-anchor" href="#复制-busybox" aria-hidden="true">#</a> 复制 BusyBox</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span> /usr/sbin/busybox rootfs/bin/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="建立链接" tabindex="-1"><a class="header-anchor" href="#建立链接" aria-hidden="true">#</a> 建立链接</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> rootfs/bin

<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span>./busybox <span class="token parameter variable">--list</span><span class="token variable">)</span></span>
<span class="token keyword">do</span>
    <span class="token function">ln</span> <span class="token parameter variable">-s</span> busybox <span class="token variable">$i</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建-init" tabindex="-1"><a class="header-anchor" href="#创建-init" aria-hidden="true">#</a> 创建 init</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> rootfs/init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="赋权限" tabindex="-1"><a class="header-anchor" href="#赋权限" aria-hidden="true">#</a> 赋权限</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> +x rootfs/init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装开发环境" tabindex="-1"><a class="header-anchor" href="#安装开发环境" aria-hidden="true">#</a> 安装开发环境</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> kernel-devel kernel-headers
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="入门程序-hello-c" tabindex="-1"><a class="header-anchor" href="#入门程序-hello-c" aria-hidden="true">#</a> 入门程序 hello.c</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;linux/module.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;linux/kernel.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;linux/init.h&gt;</span></span>

<span class="token keyword">static</span> <span class="token keyword">int</span> __init <span class="token function">hello_init</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">printk</span><span class="token punctuation">(</span>KERN_INFO <span class="token string">&quot;Hello Kernel Module Loaded!\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">static</span> <span class="token keyword">void</span> __exit <span class="token function">hello_exit</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">printk</span><span class="token punctuation">(</span>KERN_INFO <span class="token string">&quot;Hello Kernel Module Removed!\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">module_init</span><span class="token punctuation">(</span>hello_init<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">module_exit</span><span class="token punctuation">(</span>hello_exit<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">MODULE_LICENSE</span><span class="token punctuation">(</span><span class="token string">&quot;GPL&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">MODULE_AUTHOR</span><span class="token punctuation">(</span><span class="token string">&quot;ydyong&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">MODULE_DESCRIPTION</span><span class="token punctuation">(</span><span class="token string">&quot;Hello Linux Kernel Module&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">MODULE_VERSION</span><span class="token punctuation">(</span><span class="token string">&quot;1.0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编译脚本-makefile" tabindex="-1"><a class="header-anchor" href="#编译脚本-makefile" aria-hidden="true">#</a> 编译脚本 Makefile</h2><div class="language-makefile line-numbers-mode" data-ext="makefile"><pre class="language-makefile"><code>obj-m <span class="token operator">+=</span> hello.o

KDIR <span class="token operator">:=</span>  /path/to/linux-7.2.6
PWD  <span class="token operator">:=</span> <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">shell</span> pwd<span class="token punctuation">)</span>

<span class="token target symbol">all</span><span class="token punctuation">:</span>
        make -C <span class="token variable">$</span><span class="token punctuation">(</span>KDIR<span class="token punctuation">)</span> M<span class="token operator">=</span><span class="token variable">$</span><span class="token punctuation">(</span>PWD<span class="token punctuation">)</span> modules

<span class="token target symbol">clean</span><span class="token punctuation">:</span>
        make -C <span class="token variable">$</span><span class="token punctuation">(</span>KDIR<span class="token punctuation">)</span> M<span class="token operator">=</span><span class="token variable">$</span><span class="token punctuation">(</span>PWD<span class="token punctuation">)</span> clean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编译" tabindex="-1"><a class="header-anchor" href="#编译" aria-hidden="true">#</a> 编译</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">make</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="拷贝-hello-ko" tabindex="-1"><a class="header-anchor" href="#拷贝-hello-ko" aria-hidden="true">#</a> 拷贝 hello.ko</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span> hello.ko rootfs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="打包" tabindex="-1"><a class="header-anchor" href="#打包" aria-hidden="true">#</a> 打包</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> rootfs
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token operator">|</span> cpio <span class="token parameter variable">-o</span> <span class="token parameter variable">-H</span> newc <span class="token operator">|</span> <span class="token function">gzip</span> <span class="token operator">&gt;</span> <span class="token punctuation">..</span>/rootfs.cpio.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/usb/libexec/qemu-kvm <span class="token punctuation">\\</span>
<span class="token parameter variable">-kernel</span> arch/x86/boot/bzImage <span class="token punctuation">\\</span>
<span class="token parameter variable">-initrd</span> rootfs.cpio.gz <span class="token punctuation">\\</span>
<span class="token parameter variable">-append</span> <span class="token string">&quot;console=ttyS0&quot;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-nographic</span>

参数说明：

<span class="token operator">|</span> 参数 <span class="token operator">|</span> 说明 <span class="token operator">|</span>
<span class="token operator">|</span>--------<span class="token operator">|</span>--------<span class="token operator">|</span>
<span class="token operator">|</span> <span class="token parameter variable">-kernel</span> <span class="token operator">|</span> 指定 Linux Kernel <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token parameter variable">-initrd</span> <span class="token operator">|</span> 指定 Initramfs <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token parameter variable">-append</span> <span class="token operator">|</span> 传递内核启动参数 <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token assign-left variable">console</span><span class="token operator">=</span>ttyS0 <span class="token operator">|</span> 串口输出 <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token parameter variable">-nographic</span> <span class="token operator">|</span> 不启动图形界面 <span class="token operator">|</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动后会进入：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Boot OK
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/ <span class="token comment"># insmod hello.ko</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[ 1185.486556] Hello Kernel Module Loaded!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/ <span class="token comment"># lsmod hello</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Module                  Size  Used by    Tainted: G
hello                  12288  0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/ <span class="token comment"># rmmod hello</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[ 1205.935551] Hello Kernel Module Removed!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="退出-qemu" tabindex="-1"><a class="header-anchor" href="#退出-qemu" aria-hidden="true">#</a> 退出 QEMU</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ctrl+a
x
quit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43))])}const f=t(c,[["render",k],["__file","kernel.html.vue"]]);export{f as default};
