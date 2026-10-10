---
sort: 3
---

# 如何进行App或者framework的定向加固?
**当前教程是为了帮助用户了解如何使用定向加固，什么时候需要用到定向加固能力**

## 什么时候用定向加固？
**当我们需要提高App应用逆向成本的时候，就需要利用定向加固工具来处理应用**

## 什么时候需要配合通用混淆？
**当你需要明确希望对APP级别的资源等做更高安全安全级别的时候就需要配合混淆**

!!! tip 
	使用通用混淆的时候，打开防dump和objcsel加密的PASS能力后，一定会引起各种运行时故障
!!! tip 
	最好不要在加固配置里面大范围加固，不做测试一定会带来一些运行隐患
!!! tip 
	加固+混淆一定会加大问题定位难度，可以先单独测试加固和混淆的效果

## framework/dylib加固需要搭配混淆使用么？
**一般不需要，framework/dylib一般只需要加固就行了，针对oc/swift只需要同时打开防止dump和objcsel加密PASS就行了**

!!! tip 
	打开了防dump功能后，所有加到xib、storyboard、采用valueForKey:之类的访问的一定会出问题，所以要加到阻止清单里面


## 一.加固使用步骤

###1.为工程生成一个Release配置的拷贝版，取名为 CrabRelease

<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-72.png" width="60%">

###2.下载对应xcode版本的加固引擎

<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-73.png" width="60%">

###3.为工程生成加固配置，配置选 CrabRelease

<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-74.png" width="60%">

###4.单独编译测试加固配置是否会引起运行时问题

!!! tip 
	一定要先测试加固是否会引起问题

## 二.如何配合通用混淆

**当确认 CrabRelease 编译配置能正确编译后，在通用混淆的编译设置中重新配置签名，然后在运行时修改编译模式就可以**

<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-75.png" width="40%">

