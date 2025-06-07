---
sort: 9
---

# cocos2d-x 项目混淆
**当前例子是为了演示cocos2d-x的混淆。**

## 要运行本示例的要求
- 安装了cocos-2dx
- 安装了Python 3.x
- 安装了pip
- MacOS 10.0以上系统
- 安装了crab-orange.app/CrabiOS.app
- 已经取得了注册码

## 安装cocos-2dx
- 访问 https://www.cocos.com 登录您的账号
- 进入产品/cocos2d-x 下载，比如找到V3.17.2，下载到桌面

## 索要免费体验版授权码
>请先准备一个新账号，并且创建一个应用，然后提供提供一下 bundle id
>

邮箱:**759610734@qq.com** (如果2日内未回复，请加QQ:**759610734**)

## 配置 cocos-2dx 工程
1. 进入`~/Desktop/cocos2d-x-3.17.2`目录，把我们提供给您的`COSDK.framework`和`**.dat` 文件拷贝到 `cocos/COSDK` 目录下(实际的COSDK.framework名称跟图片可能不一致)
>
 <img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-16.png" width="60%">

2. 打开`~/Desktop/cocos2d-x-3.17.2/build/cocos2d_tests.xcodeproj`

3. 在`Xcode`的左侧工程视图里面，找到`tests`，右键菜单`Add Files To "cocos2dx-tests"`，选中`cocos/COSDK` 目录
>
 <img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-15.png" width="60%">
>
```warning
xcode16及以上工程，请确保 `Build Settings` 中的 `Copy Bundle Resource` 中加入了 `.dat` 文件
```
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-47.png" width="60%">


4. 点击`Xcode`中`cocos2d_tests`这个工程文件 找到 TARGETS 里面的 `cpp-tests IOS`，在`Framework Search Paths`里面添加 `"$(SRCROOT)/../cocos/COSDK"`
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-43.png" width="60%">

5. 更改`cocos2d-x`工程中`cpp-tests`这个Target的`bundle id`，与您新应用的`bundle id`一致
>
 <img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-14.png" width="60%">

6. 如果你的签名设置使用的配置是自动，请改成 `Manual`
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-45.png" width="60%">

7. 编译一次项目，确保能正确编译

## 混淆器配置
1. 打开混淆工具

2. 解压缩我们给你的 `Products.zip` 文件

3. 找到【注册码】按钮，点击进入注册码管理

4. 导入 `Products/*.listenkey`文件，记住编号

5. 点击【创建工程】，因为没有`*.xcworkspace`的原因，所以我们要点`'?'`按钮创建一个

6. 选中对应的工程，选好正确的target和注册码编号

7. 点击当前项目的最右边一个按钮，进入`WNXHuntForCity` 这个项目，等待完成工程分析(项目结构都能在界面中正确显示了）
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-3.png" width="60%">
>
```warning
如果你的项目使用了cocospod，请先执行 `pod update` 或者 'pod install` 然后再来做工程分析，并且确保你的工程可以正常编译
```

8. 解决项目中的存在的错误或者警告，警告可以不解决，但是错误一定要解决
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-46.png" width="60%">
```warning
警告类型的消息，也需要谨慎处理，说不定会引起错误
```

9. 退出当前项目，回到工程列表（关闭当前项目就行了），找到工程设置按钮点进去
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-4.png" width="60%">

10. 把`~/Desktop/cocos2d-x-3.17.2/cocos/COSDK`目录里3个文件添加到依赖配置的`COSDK`分组下
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-5.png" width="60%">
```warning
请确保 `*.framework`(具体名字根据给你的为准)、`*.dat` 文件就是你加到工程里面那个，不然会引起后续执行程序生成出错
```

11. 配置【编译设置】，添加一个`Debug`签名，Target选择`cpp-tests-iOS`（如果下拉列表是空的，先进一下工程，等待工程分析结束，再返回配置界面），`bundle id`是您新应用的`bundle id`
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-11.png" width="60%">
>
```warning
使用了 `Xcode`中 `Signing & Capabilities` 里的`Automatically manage signing` 使用账号自动签名的记得关闭，不然会引起编译错误。
```
```warning
使用了 `Xcode`中 `Signing & Capabilities` 里的 `xcode sign in with Apple`，但是你的mobileprofile里面没有打开支持的，在编译阶段会报错，请删除掉。
```
```warning
`Xcode` 工程配置中，PROJECT 列表中，编译设置(`Build Settings`) 中的 `Code Signing Style`，请改成 `Manual`
```
```warning
混淆程序执行后，在编译阶段失败后，可以通过打开Xcode工程，查看签名设置，如果发现不对，可以修改混淆程序中的配置，在点击【开始混淆】（切勿直接修改Xcode工程，避免导致需要点击重置按钮重新开始）
```
```warning
确保证书只有一个，有些用户相同名称证书有多个，总是跟`profile`文件对不上，可以通过钥匙串管理(MacOS 15.0以上执行`open /System/Library/CoreServices/Applications/Keychain\ Access.app`)
```

12. 如果是`cocos-js/cocos-lua/quick-cocos` 开发的游戏项目，请找工程设置的【外部SDK存档-混淆】，如果是 js开发的应用找到请找到 `cocos2d-x`引擎目录下的 `external/spidermonkey/prebuilt/ios/libjs_static.a` 添加进去（这个操作是为了能拦截`libjs_static.a`里面的一些文件读取操作api让混淆资源脚本能正确解码混淆后的js文件)，然后到【资源脚本】里面，添加一个js文件的脚本，这个脚本会对.js文件内容做一次加密。lua开发的应用就需要找到对应的`external/lua/luajit/prebuilt/ios/liblua.a` 或者`external/lua/luajit/prebuilt/ios/libluajit.a`
>
```tip
有些项目可能有自己的脚本加密方案在POST_BUILD阶段替换，所以需要修改一下js脚本的混淆操作发生时机，在【资源脚本】/【lua 脚本定义】 里面修改`confuse-script-phase` 为 `copy-resource` 就可以了
```
```tip
如果需要对其他资源做加密混淆，请阅读相关文档 [如何混淆一个自定义格式的资源](https://crab-ios.com/docs/site/%E9%AB%98%E7%BA%A7%E6%8A%80%E5%B7%A7/%E8%87%AA%E5%AE%9A%E4%B9%89%E8%B5%84%E6%BA%90%E6%B7%B7%E6%B7%86.html)、[外部SDK混淆](https://crab-ios.com/docs/site/%E9%AB%98%E7%BA%A7%E6%8A%80%E5%B7%A7/%E5%A4%96%E9%83%A8SDK%E6%B7%B7%E6%B7%86.html) 两篇文章
```

13. 点击【开始混淆】按钮
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-26.png" width="60%">

14. 弹出运行设置面板后，默认编译模式是【Debug】确保打开【COSDK自动初始化】

15. 修改【COSDK自定义名称】为给你的`Products.zip`里面的那个后缀为`.framework`的文件的名字(如果给你的是`COSDK.framework`，可以不填写，比如给你的是`NIHSDK.framework`, 请填写`NIHSDK`)
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-34.png" width="40%">

16. 等混淆结束后，点击打开工程按钮，准备运行应用，会发现 `build all tests iOS` 那个下拉框打开后，会多一个target，它的icon上面有一个阻止的标示，选中它，会制动安装应用到手机，就可以开始调试了(类似下图)
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-48.png" width="60%">
>
```tip
 如果你的手机不是arm64架构的，想调试的时候新版本的Xcode是会提示无法安装的，请更换一个arm64架构的手机调试（安装不影响)
```