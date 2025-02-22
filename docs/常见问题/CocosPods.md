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
> 点击【开始混淆】按钮弹出的【运行设置】里面，有个 `CcoosPods` 项目下的 `修复Bug(object version)` 的开关，打开它就行了(注意：指定一个`pod`不会出错的版本号就行了)
>

4. 为什么某些我在pod 里面写的 `pod 'LookinServer', :configurations => ['Debug']`，但是 `LookinServer.framework` 还是被打包到ipa里面了？
> 这是因为 `cocospods` 使用了一个脚本来实现的特殊功能，要想解决，请在混淆配置里面找到 【内部SDK存档混淆】添加一个 `LookingServer` 设置 `confuse-type` 为 `skip`
>