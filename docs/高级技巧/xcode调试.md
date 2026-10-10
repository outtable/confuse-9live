
# Xcode调试技巧
学会在Xcode中调试app是一个非常重要的技巧，需要工具使用者能熟练掌握，可以很方便确认混淆引起的各种问题，由于混淆程序会Hook很多api，必然会引起跟原始APP逻辑不一致，某些以前不暴露的问题，在混淆中会暴露出来，参见参见[运行时错误排查](https://crab-ios.com/docs/site/%E9%AB%98%E7%BA%A7%E6%8A%80%E5%B7%A7/%E8%BF%90%E8%A1%8C%E6%97%B6%E9%94%99%E8%AF%AF%E6%8E%92%E6%9F%A5/)。

## 注意事项
首先要调试，先确认你当前的scheme是不是 Runner(my.first.ios.com) 这种形式的，这个才是混淆工具生成的APP，切换别的scheme再编译都是不对的
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-8.png" width="60%">

## 入门技巧

1.使用 `Exception Breakpoint`，捕获 `All Objective-C Exception`，基本上混淆工具引起的崩溃，99%都是`ObjC`语言引起的，这个功能作用就是帮助你快速定位到崩溃堆栈
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-62.png" width="60%">

2.使用 `Symbolic Breakpoint`，捕获某些自定义的函数调用点，这个常常用来配合本地调试`COSDK.framework`使用(具体使用方法自行百度)
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-70.png" width="60%">


3.使用 `Diagnostics`,打开 `Address Sanitizer` 和 `Detect use of stack after return` 可以发现很多 c/c++ 内存异常(具体使用方法自行百度)
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-63.png" width="60%">

4.使用　`Diagnostics`，打开 `Zombie Objects` 可以发现某些因为内存泄漏引起的问题(具体使用方法自行百度)
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-63.png" width="60%">

5.使用　`Diagnostics`，关闭 `Metal`/`API Validation` 可以避免触发某些Unity3D应用混淆后的Debug模式出错,Release没有错误的问题

6.使用混淆工具上的`启用符号调试开关`(Debug模式下)，能将某些符号加上 `_wO_Ow_`后缀，方便你能看懂混淆后产生崩溃的栈信息(Release模式不会生效)
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-69.png" width="40%">

7.使用`MacSymbolicator`工具，可以把`Release`模式版本的崩溃日志`ips`文件，转换出能看得懂的形式，可以通过`github`搜索下载（需自己编译）
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-71.png" width="60%">

## 高级技巧

### 一.如何定位Release版本崩溃信息

1.找到编译产物界面界面，打开【设备管理器】
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-51.png" width="60%">

2.找到 Open Recent Logs 按钮
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-64.png" width="60%">

3.GitHub 上下载 MacSymbolicator 这个工程，编译出APP，打开这个APP
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-71.png" width="60%">

4.找到ips文件，拖动到 MacSymbolicator 就完成了转换
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-65.png" width="60%">

!!! tip
    如果你发现这个符号表看不懂，是因为你没有打开 dSYM 文件还原功能，怎么打开请参考下图
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-66.png" width="40%">

### 二.如何获取Release模式下的日志

1.找到 Open Console
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-67.png" width="60%">

2.打开下面这个界面，输入筛选条件，就能看到对应的日志
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-68.png" width="60%">

!!! tip
    如果发现找不到输出日志，其实是因为只有NSLog函数的才会被显示出来，其他函数都被优化了