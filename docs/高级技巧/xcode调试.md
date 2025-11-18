
# Xcode调试技巧
学会在Xcode中调试app是一个非常重要的技巧，需要工具使用者能熟练掌握，可以很方便确认混淆引起的各种问题，由于混淆程序会Hook很多api，必然会引起跟原始APP逻辑不一致，某些以前不暴露的问题，在混淆中会暴露出来

##入门技巧
1.使用 `Exception Breakpoint`，捕获 `All Objective-C Exception`，基本上混淆工具引起的崩溃，99%都是`ObjC`语言引起的，这个功能作用就是帮助你快速定位到崩溃堆栈

2.使用 `Symbolic Breakpoint`，捕获某些自定义的函数调用点，这个常常用来配合本地调试`COSDK.framework`使用(具体使用方法自行百度)

3.使用 `Diagnostics`,打开 `Address Sanitizer` 和 `Detect use of stack after return` 可以发现很多 c/c++ 内存异常(具体使用方法自行百度)

4.使用　`Diagnostics`，打开 `Zombie Objects` 可以发现某些因为内存泄漏引起的问题(具体使用方法自行百度)

5.使用　`Diagnostics`，关闭 `Metal`/`API Validation` 可以避免触发某些Unity3D应用混淆后的Debug出错

6.使用混淆工具上的`启用符号调试开关`(Debug模式下)，能将某些符号加上 `_wO_Ow_`后缀，方便你能看懂混淆后产生崩溃的栈信息

7.使用`MacSymbolicator`工具，可以把`Release`模式版本的崩溃日志`ips`文件，转换出能看得懂的形式，可以通过`github`搜索下载（需自己编译）
　　
