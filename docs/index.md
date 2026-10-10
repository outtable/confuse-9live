---
title: 小蟹iOS混淆文档
description: 安装与 ObjC、Swift、Unity、Flutter、Cocos 混淆步骤，以及 App Store 4.3、2.3.1 相关说明。下载与定价见官网。
---

# 小蟹iOS混淆文档

🚀 提高iOS应用差异化、增加应用逆向难度

## 核心卖点

- ✅ 支持多语言：C、C++、Swift、Objective-C、Objective-C++、Dart 全覆盖
- ✅ 一键混淆：快速上架应用
- ✅ 应用矩阵工具：轻松上架多款同源应用、提升业务覆盖率
- ✅ 高效易用：节省开发时间、调试时间、专注核心业务
- ✅ 高度傻瓜化：非源码混淆，无中间源码，打包全流程无需人工介入
- ✅ 调试方便：高度整合xcode，可以直接调试混淆后的执行程序，问题一目了然

## 介绍
&nbsp;&nbsp;&nbsp;本产品是一款可以通过独立的特征库来混淆代码和资源的工具，基于逆向工程技术开发的第三代产品。支持工程级别重构，并且每个单独的工程最终混淆结果不一致，可以直接修改执行文件和外部SDK文件，支持arm64/arm64s架构，完美支持swiftUI、flutter、unity3d、cocos2d-x、quick-cocos、cocos-creater、SpriteKit、虚幻引擎、uniapp等技术的iOS端混淆加固需求，可以解决一些老代码改造或者因为某些原因被苹果商店下架的应用重新上架时引起的拒审问题，或需要上架多个小包的需求。提供一套非常简单的流程化管理工具和报表工具来管理多个工程，有非常完善的调试手段帮助你解决使用中的一些问题，提供ipa静态分析工具能大大提升过审比率，并且可以任意扩展资源类型，实现更加全面的混淆效果，保证上传应用的每个字节都被安排的明明白白，让您上传的应用不再受困于机审，分为免费试用版和收费版两种，收费版提供更多功能。

## 与源码混淆工具的区别

- 其他源码工具（只适合为了保护源码的人）：

转换原始代码为看不懂的源码，如果发现问题，需要对着混淆后的代码修改，非常痛苦，后续应用迭代要重复这个过程，对各种混编支持不太友好，去不掉编译中产生的一些特殊的符号信息，线上应用崩溃后，通过bugly等平台无法定位问题所在，影响持续迭代。

- 小蟹iOS混淆工具（适合超级项目和有极致追求的人）:

源码处理阶段只做最简单的事情，不改变类型、函数等名称，把这个阶段放到直接修改编译中间文件，最终执行文件中。并且在Debug版本中不去掉调试信息，让你可以直接对着代码调试，能准确定位问题所在。工具会从零开始构建一个ipa，把特殊信息都抹除的同时，还可以还原Release版本中的dSYM文件中信息，可以持续迭代原始工程，不影响bugly等平台的问题收集。

## 下载地址
🕸️ [官网下载](https://crab-ios.com)   🕸️ [GitHub下载](https://github.com/outtable/confuse-9live/tree/master/Products/stable)

官网说明页（审核与引擎）：[App Store 4.3](https://crab-ios.com/appstore-4.3) · [2.3.1](https://crab-ios.com/appstore-2.3.1) · [Unity](https://crab-ios.com/unity-ios) · [Flutter](https://crab-ios.com/flutter-ios) · [Cocos](https://crab-ios.com/cocos-ios) · [Uni-app IPA 加固](https://crab-ios.com/uniapp-ios) · [收费方式](https://crab-ios.com/pricing)

## 资源文件支持格式
- ✅.png
- ✅.jpg
- ✅.gif
- ✅.webp
- ✅.gif
- ✅.plist
- ✅.xcassets
- ✅.bundle
- ✅.xib
- ✅.storyboard
- ✅.sks(Sprite Kit)
- ✅ 任意格式资源文件加密

## 外部SDK文件支持格式
- ✅.a
- ✅.framework(Static)
- ✅.xcframework(Static)

## 支持的 XCode 版本
- ✅ Xcode 15.x (1.8后的版本) 不再支持
- ✅ Xcode 16.x
- ✅ Xcode 26.x

## 产品特性

| 功能/服务 | 免费版 | 收费版 |
|-----|-----|-----|
| &nbsp;c 语言混淆&nbsp; | &nbsp;支 持&nbsp; | &nbsp;支 持&nbsp; |
| &nbsp;c++ 语言混淆&nbsp; | &nbsp;支 持&nbsp; | &nbsp;支 持 |
| &nbsp;objc 语言混淆&nbsp; | &nbsp;支 持&nbsp; | &nbsp;支 持&nbsp; |
| &nbsp;swift 语言混淆&nbsp; | &nbsp;支 持&nbsp; | &nbsp;支 持&nbsp; |
| &nbsp;dart 语言混淆&nbsp; | &nbsp;支 持&nbsp; | &nbsp;支 持&nbsp; |
| &nbsp;dSYM 文件混淆&nbsp; | &nbsp;无&nbsp; | &nbsp;有&nbsp; |
| &nbsp;编 译 加 速&nbsp; | &nbsp;无&nbsp; |&nbsp;有&nbsp; |
| &nbsp;技 术 支 持&nbsp; | &nbsp;无&nbsp; | &nbsp;有&nbsp; |
| &nbsp;新 手 引 导&nbsp; | &nbsp;有&nbsp; | &nbsp;有&nbsp; |
| &nbsp;马甲对比分析工具&nbsp;| &nbsp;无&nbsp; | &nbsp;有&nbsp; |
| &nbsp;外部SDK存档混淆&nbsp; | &nbsp;有&nbsp; | &nbsp;有&nbsp; |
| &nbsp;AppStore上包支持&nbsp; | &nbsp;无&nbsp; | &nbsp;有&nbsp; |
| &nbsp;产 品 文 档&nbsp; | &nbsp;有&nbsp; | &nbsp;有&nbsp; |

## 工具原理
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-25.jpeg" width="80%">

## 部分截图

<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-24.png" width="80%">

<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-23.png" width="80%">

<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-22.png" width="80%">

<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-21.png" width="80%">

<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-20.png" width="80%">

<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-31.png" width="80%">

## 如何获取工具？
请在 **Products** 目录下下载 **stable/CrabiOS.dmg**

## 免费体验版授权码（邮箱没有回复的请加QQ，免费试用版有名额限制，先到先得)
**759610734@qq.com**

## 购买/续费商业合作请直接联系
**QQ:759610734**

--8<-- "cta.md"

## 微信请扫描下方二维码 ###
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/wechart.png" width="40%">
