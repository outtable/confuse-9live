---
sort: 4
---

# 外部SDK存档-混淆
有两种情况，需要我们添加外部SDK混淆配置

- 当我们想要抹除第三方SDK符号特征(不推荐，虽然可以做到，但是如果存在`objc/swift`语言的SDK，运行时崩溃难以查找)
- 当我们添加了某一种资源的加密混淆后，那种资源会被某个.a/.framework(Fake Framework)加载，结果引起那个外部SDK崩溃(比如一个项目用了lua文件加载都是通过liblua.a文件，我想加密lua文件，就需要添加liblua.a文件到配置里面，就能拦截这个.a文件中的所有c/c++文件流函数)

## 配置【外部SDK存档-混淆】
1. 进入某个混淆工程设置，选中【外部SDK存档-混淆】

2. 点'+'创建一个条目，随意命名一个比如liblua

3. 修改路径，选取一下那个SDK文件

4. 按需开启混淆选项
> 如果都不开启，就会执行内置的一些符号的替换操作，主要是为了配合运行时BUG修复(主要是配合自定义资源混淆功能)

## 截图
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-36.png" width="60%">

## 混淆选项说明
- c symbol confuse（C符号混淆开启)
> 如果被识别成一般的c符号格式，就会被混淆
> 

- c++ symbol confuse（C++符号混淆开启)
> 如果被识别成一般的c++符号格式，就会被混淆
> 

- objc symbol confuse（ObjC符号混淆开启)
> 如果被识别成一般的objc符号格式，就会被混淆，对Objc Meta Data也有效
> 

- swift symbol confuse（Swift符号混淆开启)
> 如果被识别成一般的swift符号格式，就会被混淆，对Objc Meta Data也有效
> 
