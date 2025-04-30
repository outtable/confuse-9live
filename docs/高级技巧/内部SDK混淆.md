---
sort: 5
---

# 内部SDK存档-混淆
目前只有一种情况，需要我们添加内部SDK混淆设置，就是当我们不想混淆工具处理某个`Target`时，常用在一些特殊情况，比如

- `Unity3D` 的一种特殊工程结构，他会直接生成一个.a文件，叫做`GameAssembly`，添加`confuse-type=skip` 这个就是让混淆工具不处理这个`Target`，因为如果工具来生成就会引起错误

- `CocosPods` 中有一个设置，`pod 'LookinServer', :configurations => ['Debug']`，这种只有在 `Debug` 中才有用的项目，在打包 `Release` 模式的ipa时，混淆工具也会生成这个 `LookinServer` 从而引起AppStore上传错误，也需要为这个 `Target` 添加设置 `confuse-type=skip`
