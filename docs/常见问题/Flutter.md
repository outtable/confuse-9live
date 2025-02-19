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