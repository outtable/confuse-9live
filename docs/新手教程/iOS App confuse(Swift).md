---
sort: 6
---
# iOS 应用混淆(Swift)
**当前例子是为了演示swift语言开发的应用的混淆，其他语言暂不适用。**

## 要运行本示例的要求
- 安装了Cocos Pods(你工程用到了才用装)
- 安装了 homebrew
- 安装了 Python 3.x 版本
- 安装了Xcode 16.x 以上
- MacOS 10.0以上系统
- 安装了crab-orange.app/CrabiOS.app
- 已经取得了注册码

## 索要免费体验版授权码
>请先准备一个新账号，并且创建一个应用，然后提供提供一下 bundle id
>

邮箱:**759610734@qq.com** (如果2日内未回复，请加QQ:**759610734**)

## 创建工程
1. 解压`Products.zip`，一般都会包含三个文件后缀分别是 `.listenkey` 、 `.dat` 、`.framework`

2. 在工程目录 `~/Desktop/TestSwift` 下 建立一个`COSDK`目录，把我们给您的`Products/COSDK.framework`和`Products/**.dat`拖动进去

3. 然后执行终端命令 `cd ~/Desktop/TestSwift`下，执行  `pod install --no-repo-update` (用了cocospods的，请执行一次)

4. xcode打开 `~/Desktop/TestSwift.xcworkspace` 文件，把`COSDK`目录加入到工程里面 (实际的COSDK.framework名称跟图片可能不一致)
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-1.png" width="60%">
>
```warning
xcode16及以上工程，请确保 `Build Settings` 中的 `Copy Bundle Resource` 中加入了 `.dat` 文件
```
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-47.png" width="60%">


5. 修改一下`TestSwift.xcproject` 的 `bundle id` 改为我们给了您注册文件的那个 `bundle id`
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-2.png" width="60%">

6. 如果你的签名设置使用的配置是自动，请改成 `Manual`
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-45.png" width="60%">

7. 编译一次项目，确保能正确编译

## 混淆器配置
1. 打开混淆工具APP

2. 点击【注册码】按钮，导入我们给你的一个`Products.zip`里面`*.listenkey`文件

3. 点击“新建项目”按钮，按照引导的选择对应的`~/Desktop/TestSwift/TestSwift.xcworkspace`文件，选对应的注册码，然后选主应用的target选主应用的名字，比如`TestSwift`，点击完成后创建项目成功

4. 点击当前项目的最右边一个按钮，进入`TestSwift` 这个项目，等待完成工程分析(项目结构都能在界面中正确显示了）
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

7. 第一个选项卡是“依赖文件”，找到`COSDK`那个分组，点` '+' `按钮，依次把`~/TestSwift/TestSwift/COSDK`里面3个文件加入进去
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-5.png" width="60%">
```warning
请确保 `*.framework`(具体名字根据给你的为准)、`*.dat` 文件就是你加到工程里面那个，不然会引起后续执行程序生成出错
```

8. 进入【编译设置】选项卡，添加一个`Debug`证书设置，target选择`TestSwift`，`bundle id`使用您新应用的`bundle id`（注意一定要正确，不然会影响查找本地 `mobile provision file`文件错误)，`certificate `选正确的证书，然后点 mobile provision file 旁边的搜索按钮，可以从本地识别对应的文件） 
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

12. 确保开启了 【COSDK使用动态库】，如果你用了`Podfile`，打开了 `use_frameworks!`，就需要对应打开这个

13. 在架构里面，只打开ARM64 就可以了，然后点击【开始混淆】

14. 再次点击【开始混淆】按钮，然后一直等到混淆器提示混淆完成，点击【打开工程】按钮，准备运行应用，会发现 `Scehme` 那个下拉框打开后，会多一个target，它的icon上面有一个阻止的标示，选中它，会自动安装应用到手机，就可以开始调试了
>
<img src="https://crab-ios.com/docs/site/assets/images/snapshots/snapshot-48.png" width="60%">
>
```tip
 如果你的手机不是arm64架构的，想调试的时候新版本的Xcode是会提示无法安装的，请更换一个arm64架构的手机调试（安装不影响)
```