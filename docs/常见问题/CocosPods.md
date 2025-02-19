---
sort: 15
---

# CocosPods

1. pod install失败了?
> 请先【重置】恢复到原始工程，然后pod install --no-repo-update 就能解决问题（之所以失败，就是因为pod生成的工程文件有某些校验机制）。
>

2. 我需不需要 pod install？
> 使用了CocosPod的项目，请在混淆工程先，执行一下这个命令，确保工程能正常编译过，并且保证Pods创建的工程没问题。
>

3. pod install 提示 [Xcodeproj] Unable to find compatibility version string for object version `70`. 错误?
> 点击【开始混淆】按钮弹出的【运行设置】里面，有个 修复Pod-Bug(70)的开关，打开它就行了(注意：打开后工程文件版本会被改成54，如果想自定义版本，请参考下一条信息)
>

4. 如何避免xcode object version 版本高于54，打开工程后引起xcode崩溃?
> 在你的Podfile 文件所属的目录下，创建一个 crab.configs.txt 文件，在里面加入一条信息 chatroom.xcodeproj@objectVersion=56(注意:这里面的 chatroom.xcodeproj 就是需要指定版本号的工程文件)
> 

5. 为什么某些我在pod 里面写的 `pod 'LookinServer', :configurations => ['Debug']`，但是 `LookinServer.framework` 还是被打包到ipa里面了？
> 这是因为 `cocospods` 使用了一个脚本来实现的特殊功能，要想解决，请在混淆配置里面找到 【内部SDK存档混淆】添加一个 `LookingServer` 设置 `confuse-type` 为 `skip`
>