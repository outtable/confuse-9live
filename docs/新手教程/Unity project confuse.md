---
sort: 8
---

# Unity 项目混淆
**当前例子是为了演示unity3d的混淆。**

## 要运行本示例的要求
- 安装了Unity Hub
- 安装了Unity
- 安装了Python 3.x
- 安装了pip
- MacOS 10.0以上系统
- 安装了crab-orange.app/CrabiOS.app
- 安装了Xcode16.x
- 已经取得了注册码

## 索要免费体验版授权码
>请先准备一个新账号，并且创建一个应用，创建一个全新的 bundle id，在官网下载最新版本，启动应用后进注册码界面，点申请按钮，填写邮箱、bundle id、一个SDK名字(提供一个给你专用的SDK，避免影响你上架)，选新用户(不要选错)
>

邮箱:**759610734@qq.com** (如果2日内未回复，请加QQ:**759610734**)

## 创建工程
1. 解压`Products.zip`，一般都会包含三个文件后缀分别是 `.listenkey` 、 `.dat` 、`.framework`

2. 打开`~/Desktop/TEST-U3D/Unity-iPhone.xcodeproj`，把我们给您的`Products/COSDK.framework` 和`Procucts/*.dat` 文件加到`~/Desktop/TEST-U3D` 目录下(实际的COSDK.framework名称跟图片可能不一致)

3. 在Xcode的左侧工程视图里面，找到`Unity-iPhone`，右键菜单`Add Files To "Unity-iPhone"`，把`~/Desktop/TEST-U3D/COSDK`加入
>
 <img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-15.png" width="60%">
>
```warning
xcode16及以上工程，请确保 `Build Settings` 中的 `Copy Bundle Resource` 中加入了 `.dat` 文件
```
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-47.png" width="60%">

4. 点击`Xcode`中`Unity-iPhone`这个工程文件 找到 TARGETS 里面的 `Unity-iPhone`，在`Framework Search Paths`里面添加 `"$(PROJECT_DIR)/COSDK"`
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-41.png" width="60%">

5. 在 `Unity-iPhone`的 `Build Phases/Link Binary With Libraries`里面加入`COSDK.framework`
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-42.png" width="60%">
```warning
请确保 `*.framework`(具体名字根据给你的为准)、`*.dat` 文件就是你加到工程里面那个，不然会引起后续执行程序生成出错
```

6. 更改`Unity-iPhone`这个Target的`bundle id`，与您新应用的`bundle id`一致

7. 在AppStore上为`UnityFramework`创建一个单独的`bundle id`（可选，如果你的工程里面给UnityFramework设置单独的bunlde id）

8. 如果你的签名设置使用的配置是自动，请改成 `Manual`
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-45.png" width="60%">

9. 确保Xcode能正常编译

## 混淆器配置
1. 打开混淆工具APP

2. 点击【注册码】，导入`Products/*.listenkey`文件，记住注册码

3. 点击【创建工程】创建一个混淆工程，因为没有`*.xcworkspace`，所以先点`?`按钮创建一个

4. 点击当前项目的最右边一个按钮，进入`WNXHuntForCity` 这个项目，等待完成工程分析(项目结构都能在界面中正确显示了）
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-3.png" width="60%">
>
```warning
如果你的项目使用了cocospod，请先执行 `pod update` 或者 'pod install` 然后再来做工程分析，并且确保你的工程可以正常编译
```

5. 解决项目中的存在的错误或者警告，警告可以不解决，但是错误一定要解决
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-46.png" width="60%">
```warning
警告类型的消息，也需要谨慎处理，说不定会引起错误
```

6. 退出当前项目，回到工程列表（关闭当前项目就行了），找到工程设置按钮点进去
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-4.png" width="60%">

7. 把`~/Desktop/TEST-U3D/COSDK` 目录里3个文件添加到依赖配置的`COSDK`分组下 (COSDK.framework名字可能跟截图不一致)
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-5.png" width="60%">
>
```warning
xcode16及以上工程，请确保 `Build Settings` 中的 `Copy Bundle Resource` 中加入了 `.dat` 文件
```

8. 配置编译设置，添加一个`Debug`签名，Target选择`Unity-iPhone`（如果下拉列表是空的，先进一下工程，等待工程分析结束，再返回配置界面），bundle id输入您新应用的bundle id
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-11.png" width="60%">
>
```warning
使用了 `Xcode`中 `Signing & Capabilities` 里的`Automatically manage signing` 使用账号自动签名的记得关闭，不然会引起编译错误。
```
```warning
`Xcode` 工程配置中，PROJECT 列表中，编译设置(`Build Settings`) 中的 `Code Signing Style`，请改成 `Manual`
```
```warning
使用了 `Xcode`中 `Signing & Capabilities` 里的 `xcode sign in with Apple`，但是你的mobileprofile里面没有打开支持的，在编译阶段会报错，请删除掉。
```
```warning
混淆程序执行后，在编译阶段失败后，可以通过打开Xcode工程，查看签名设置，如果发现不对，可以修改混淆程序中的配置，在点击【开始混淆】（切勿直接修改Xcode工程，避免导致需要点击重置按钮重新开始）
```
```warning
确保证书只有一个，有些用户相同名称证书有多个，总是跟`profile`文件对不上，可以通过钥匙串管理(MacOS 15.0以上执行`open /System/Library/CoreServices/Applications/Keychain\ Access.app`)
```

9. 点击【开始混淆】按钮
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-26.png" width="60%">

10. 弹出运行设置面板后，默认编译模式是【Debug】确保打开【COSDK自动初始化】

11. 修改【COSDK自定义名称】为给你的`Products.zip`里面的那个后缀为`.framework`的文件的名字(如果给你的是`COSDK.framework`，可以不填写，比如给你的是`NIHSDK.framework`, 请填写`NIHSDK`)
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-34.png" width="40%">

12. 如果需要对资源做加密混淆，请阅读相关文档 [如何混淆一个自定义格式的资源](https://crab-ios.com/docs/site/%E9%AB%98%E7%BA%A7%E6%8A%80%E5%B7%A7/%E8%87%AA%E5%AE%9A%E4%B9%89%E8%B5%84%E6%BA%90%E6%B7%B7%E6%B7%86.html)、[外部SDK混淆](https://crab-ios.com/docs/site/%E9%AB%98%E7%BA%A7%E6%8A%80%E5%B7%A7/%E5%A4%96%E9%83%A8SDK%E6%B7%B7%E6%B7%86.html) 两篇文章，外部SDK需要添加 `libiPhone.a`、`il2cpp.a`、`libbase.a` 三个文件，如果有其他资源需要加密，并且用了某些SDK文件需要自己添加

```tip
不要打开任何符号混淆，混淆`Unity3D` SDK符号没有意义
```

13. 等混淆结束后，点击打开工程按钮，准备运行应用，会发现 `Unity-iPhone` 那个下拉框打开后，会多一个target，它的icon上面有一个阻止的标示，选中它，会自动安装应用到手机，就可以开始调试了(类似下图)
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-48.png" width="60%">
>
```tip
 如果你的手机不是arm64架构的，想调试的时候新版本的Xcode是会提示无法安装的，请更换一个arm64架构的手机调试（安装不影响)
```