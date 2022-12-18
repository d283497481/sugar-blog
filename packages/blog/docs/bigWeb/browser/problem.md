---
sidebar:
 title: 常见面试题
isTimeLine: true
title: 浏览器-常见面试题
date: 2020-10-27
tags:
 - 大前端
 - 浏览器
categories:
 - 大前端
---
# 常见问题

## 目录
[[toc]]

::: warning TODO: 此页内容待重新完善
* 经典面试题：从URL输入到页面展现出来发生过了什么
* 。。。
:::


## 💡1.为什么操作 DOM 慢?

DOM 是属于**渲染引擎**中的东西，而 JS 又是 **JS 引擎**中的。通过 JS 操作 DOM 的时候，这个操作涉及到了两个线程之间的通信，必然会带来一些性能上的损耗。操作 DOM 次数一多，就等同于一直在进行线程之间的通信，并且操作DOM可能还会带来重绘回流的影响，所以也就导致了性能上的问题。


## 2.展示大量的数据,如何实现页面不卡顿?
虚拟滚动(即懒加载的方式)

原理就是只渲染可视区域内的内容，非可见区域的那就完全不渲染了，当用户在滚动的时候就实时去替换渲染的内容。

## 3.什么情况阻塞渲染?
* HTML 和 CSS 肯定会阻塞渲染
  * 提升渲染速度:降低一开始需要渲染的文件大小，并且扁平层级，优化选择器。
* 解析到 script 标签时，判断是否包含defer或者async
  * defer: JS 文件会并行下载，但是会放到 HTML 解析完成后顺序执行
    * 可以把 script 标签放在任意位置。
  * async:JS 文件下载和解析不会阻塞渲染
    * 下载完后就执行
    * 对于没有任何依赖的 JS 文件可以加上 async 属性
  * 两者都不含有:暂停构建 DOM，下载完成后才会从暂停的地方重新开始
    * 建议将 script 标签放在 body 标签底部
  
## 4.重绘（Repaint）和回流（Reflow）?
* 回流:计算可见的Dom节点在设备视口的位置和尺寸,这个计算阶段就是回流
  * 当节点需要更改外观而不会影响布局时，触发重绘
* 重绘:经过生成的渲染树和回流阶段,得到了所有可见节点具体的几何信息与样式,然后将渲染树的每个节点转换成屏幕上的实际像素,这个阶段就叫重绘节点
  * 布局或者节点的几何属性改变时,触发回流。

**回流必定会发生重绘，重绘不一定会引发回流!**

回流所需的成本比重绘高的多，改变父节点里的子节点很可能会导致父节点的一系列的回流。

以下几个动作可能会导致性能问题：
* 改变窗口(window)大小
* 改变字体
* 添加或删除样式
* 文字改变
* 定位或者浮动
* 盒模型

**参与Event Loop**

* 当 Eventloop 执行完 Microtasks(微任务)后,判断document是否需要更新，因为浏览器是 60Hz 的刷新率，每 16.6ms 才会更新一次。
* 然后判断是否有 resize 或者 scroll 事件，有的话会去触发事件，所以 resize 和 scroll 事件也是至少 16ms 才会触发一次，并且**自带节流**功能。
* 判断是否触发了 media query
* 更新动画并且发送事件
* 判断是否有全屏操作事件
* 执行 requestAnimationFrame 回调
* 执行 IntersectionObserver 回调，该方法用于判断元素是否可见，可以用于懒加载上，但是兼容性不好
* 更新界面

## 5.如何减少重绘和回流?
* 使用 transform 替代 top
* 使用 visibility 替换 display: none
  * 因为前者只会引起重绘，后者会引发回流（改变了布局）
* 不要把节点的属性值放在一个循环里当成循环里的变量
* 不要使用 table 布局，可能很小的一个小改动会造成整个 table 的重新布局
* 动画实现的速度的选择，动画速度越快，回流次数越多，也可以选择使用``requestAnimationFrame``
* CSS 选择符从右往左匹配查找，避免节点层级过多

## 6.在不考虑缓存和优化网络协议的前提下，考虑可以通过哪些方式来最快的渲染页面?
1. 考虑文件大小
2. 考虑script 标签的使用
3. 从 CSS、HTML 的代码书写上来考虑
4. 需要下载的内容是否需要在首屏使用上来考虑

## 7.为什么浏览器要使用同源策略?
出于安全考虑,为了防止CSRF(跨站请求伪造)攻击:CSRF 攻击是利用用户的登录态发起恶意请求

## 8.跨域请求是否发出去了
请求是发出去了，但是浏览器拦截了响应。浏览器认为这不安全，所以拦截了响应。也就说明了跨域并不能完全阻止 CSRF，因为请求毕竟是发出去了。

## 9.什么是跨域
## 10.为什么浏览器要使用同源策略
## 11.有哪些方式可以解决跨域问题
## 12.什么是预检请求

<comment/>