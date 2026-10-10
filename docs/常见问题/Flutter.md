---
sort: 18
---

# Flutter

1. pub_spec_update.py 卡住很长时间?
> 可能是因为在执行 `flutter --version` 命令引起的，请在混淆前执行一次，能正确获取到版本号后，再开始混淆
>

2. 编译阶段出错了，看起来错误发生在cosdk.dart文件里面?
> 可能是版本有问题，这种时候观察错误路径，一般是 `/Users/{name}/Library/ipa-artifact/packages/{bundle_id}/flutter_support/flutter/cosdk/versions/{xxx}` 形式的路径，把这个目录可以拷贝到你当前的flutter项目目录下，自己修改一下代码，然后重新执行混淆就行了
>

3. 如何使用 git 来切换 flutter SDK 版本?
>
```
步骤1.克隆 flutter
cd ~/Document
git clone https://github.com/flutter/flutter.git
步骤2.修改 ~/.zshrc 添加
export PUB_HOSTED_URL=https://pub.flutter-io.cn
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
export PATH=/Users/你的账号名/Document/flutter/bin:$PATH
步骤3.执行 source ~/.zshrc
```

4. flutter 开启了Swift Package Manager，如何关闭?
>
```
步骤1.关闭SPM
flutter config --no-enable-swift-package-manager
flutter pub cache clean
cd ios 
rm -rf Pods Package.swift .swiftpm build 
cd .. 
flutter clean 
flutter pub get
cd ios
pod install -—no-repo-update
步骤2.删除SPM工程的本地缓存
rm -rf ~/Library/Developer/Xcode/DerivedData/Runner-*
步骤3.去掉 FlutterGeneratedPluginSwiftPackage
打开Runner.xcodeproj的 Package Dependencies 移除里面的 FlutterGeneratedPluginSwiftPackage
步骤4.重新分析工程
在混淆工具中点重置按钮，重新分析一下工程结构
```
