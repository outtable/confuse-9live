---
sort: 7
---

# 本地调试COSDK
**当我们遇到运行时问题，可以明确确认是运行时SDK出了问题，这个时候我们就需要利用本地调试来诊断问题所在**

## 一. 获取调试SDK
**一般来说你需要找你的技术支持，给你提供一个新的注册码，我们会同时提供一个 `CopySDK` 的压缩档给你，你解压到你的下载目录，比如说 `~/Downloads/CopyCOSDK`**

## 二. 重新生成混淆包
1. 导入新给你的`Products.zip` 文件下的 `*.listenkey` 文件，重新混淆打包，编译模式选 `Debug` 模式、一定要打开【COSDK使用动态库】开关。
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-53.png" width="50%">

2. 点击项目界面【导出文件】按钮，会出现一个编译产物的界面
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-51.png" width="80%">

3. 我们点【替换SDK】按钮按照里面的提示，我们打开终端控制台，先修改 `user_build.py` 文件中国的`build mode` 部分，然后执行`user_build.py`脚本后，就编译出了最终SDK文件
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-52.png" width="80%">

4. 在点击了【执行替换】完成SDK文件替换后，我们通过Xcode打开工程，就可以调试刚才在本地打包的SDK源码。
