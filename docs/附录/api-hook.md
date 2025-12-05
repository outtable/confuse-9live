---
sort: 1
---

# 拦截的API信息
运行时SDK会通过API拦截，来保证代码运行是正确的，拦截的API列表如下

!!! tip
    c 语言API目前并非全局拦截的，只有源码编译出的部分或者是[外部SDK混淆](https://crab-ios.com/docs/site/%E9%AB%98%E7%BA%A7%E6%8A%80%E5%B7%A7/%E5%A4%96%E9%83%A8SDK%E6%B7%B7%E6%B7%86/)中指定的文件，才会拦截

| API | 语言 | 说明 |
|-----|-----|-----|
| open | c 语言 | 打开文件 |
| fopen | c 语言 | 打开文件 |
| stat | c 语言 | 获取文件统计信息 |
| lstat | c 语言 | 获取文件统计信息 |
| access | c 语言 | 访问文件 |
| freopen | c 语言 | 重新打开文件 |
| sel_getName | c 语言 | 获取Selector名字 |
| objc_getProtocol | c 语言 | 获取Protool名字 |
| class_replaceMethod | c 语言 | 替换方法 |
| class_addMethod | c 语言 | 添加方法 |
| class_getInstanceMethod | c 语言 | 获取实例方法 |
| protocol_getMethodDescription | c 语言 | 获取方法描述 |
| protocol_getName | c 语言 | 获取协议名字 |
| class_getName | c 语言 | 获取类名字 |
| method_getName | c 语言 | 获取方法名字 |
| property_getName | c 语言 | 获取属性名字 |
| ivar_getName | c 语言 | 获取内部变量名字 |
| class_replaceProperty | c 语言 | 替换属性 |
| class_getClassMethod | c 语言 | 获取类方法 |
| class_getClassVariable | c 语言 | 获取类变量 |
| class_getInstanceVariable | c 语言 | 获取实例变量 |
| protocol_getProperty | c 语言 | 获取协议属性 |
| sel_registerName | c 语言 | 注册一个Selector |
| class_getProperty | c 语言 | 获取一个类属性 |
| objc_getRequiredClass | c 语言 | 获取必须的类名 |
| objc_lookUpClass | c 语言 | 通过名称查询Class |
| objc_getMetaClass | c 语言 | 通过名称查询Meta Class |
| NSSelectorFromString | c 语言 | 通过名称获取Selector |
| NSProtocolFromString | c 语言 | 通过名称获取Protocol |
| NSStringFromProtocol | c 语言 | 通过Protocol获取名称 |
| NSClassFromString | c 语言 | 通过Class获取名称 |
| NSStringFromClass | c 语言 | 通过名称获取Class |
| [+NSFileHandler fileHandleForReadingAtPath:] | Objc 语言 | 读取文件 |
| [-NSFileHandler initWithFileDescriptor:] | Objc 语言 | 读取文件 |
| [-NSFileHandler initWithFileDescriptor:closeOnDealloc:] | Objc 语言 | 读取文件 |
| [-NSFileHandler initWithFileDescriptor:closeOnDealloc:] | Objc 语言 | 读取文件 |
| [-NSData initWithContentsOfFile:] | Objc 语言 | 读取文件内容 |
| [-NSData initWithContentsOfFile:options:error:] | Objc 语言 | 读取文件内容 |
| [+NSData dataWithContentsOfFile:] | Objc 语言 | 读取文件内容 |
| [+NSString stringWithContentsOfFile:] | Objc 语言 | 读取文件内容 |
| [+NSString stringWithContentsOfFile:encoding:error:] | Objc 语言 | 读取文件内容 |
| [+NSString stringWithContentsOfFile:usedEncoding:error:] | Objc 语言 | 读取文件内容 |
| [+NSString initWithContentsOfFile:encoding:error:] | Objc 语言 | 读取文件内容 |
| [+NSString initWithContentsOfFile:usedEncoding:error:] | Objc 语言 | 读取文件内容 |
| [-NSBundle URLForResource:withExtension:] | Objc 语言 | 获取资源路径 |
| [+NSBundle URLForResource:withExtension:subdirectory:inBundleWithURL:] | Objc 语言 | 获取资源路径 |
| [-NSBundle URLForResource:withExtension:subdirectory:] | Objc 语言 | 获取资源路径 |
| [-NSBundle URLForResource:withExtension:subdirectory:localization:] | Objc 语言 | 获取资源路径 |
| [-NSBundle pathForResource:ofType:] | Objc 语言 | 获取资源路径 |
| [-NSBundle pathForResource:ofType:inDirectory:] | Objc 语言 | 获取资源路径 |
| [-NSBundle pathForResource:ofType:inDirectory:forLocalization:] | Objc 语言 | 获取资源路径 |
| [-NSBundle loadNibNamed:owner:options:] | Objc 语言 | 获取资源路径 |
| [-NSBundle loadNibNamed:owner:options:] | Objc 语言 | 获取资源路径 |
| [+NSBundle pathForResource:ofType:inDirectory:] | Objc 语言 | 获取资源路径 |
| [+UINib nibWithNibName:bundle:] | Objc 语言 | 获取NIB资源路径 |
| [+UIImage imageNamed:] | Objc 语言 | 获取Image资源 |
| [+UIImage imageWithContentsOfFile:] | Objc 语言 | 获取Image资源 |
| [-UIImage initWithContentsOfFile:] | Objc 语言 | 获取Image资源 |
| [+UIImage imageNamed:inBundle:withConfiguration:] | Objc 语言 | 获取Image资源 |
| [+UIImage imageNamed:inBundle:compatibleWithTraitCollection:] | Objc 语言 | 获取Image资源 |
| [-UILabel initWithCoder:] | Objc 语言 | 初始化UILabel |
| [-UIButton initWithCoder:] | Objc 语言 | 初始化UIButton |
| [-AVAudioPlayer initWithContentsOfURL:error:] | Objc 语言 | 播放音频 |
| [-AVAudioPlayer initWithContentsOfURL:fileTypeHint:error:] | Objc 语言 | 播放音频 |
| [-AVAudioPlayer initWithContentsOfURL:error:] | Objc 语言 | 播放音频 |
| [-AVPlayer initWithURL:] | Objc 语言 | 播放音频 |
| [+AVPlayer playerWithURL:] | Objc 语言 | 播放视频 |
| [-AVPlayerItem initWithURL:] | Objc 语言 | 播放音频/视频 |
| [+AVPlayerItem playerWithURL:] | Objc 语言 | 播放音频/视频 |
| [-SKNode initWithCoder:] | Objc 语言 | 创建SpriteKit Node |
| [-SKLabelNode initWithCoder:] | Objc 语言 | 创建文案元素节点 |
| [+SKNode nodeWithFileNamed:] | Objc 语言 | 创建SpriteKit Node |
| [+SKNode nodeWithFileNamed:securelyWithClasses:andError:] | Objc 语言 | 创建SpriteKit Node |
| [+SKVideoNode videoNodeWithFileNamed:] | Objc 语言 | 创建视频元素节点 |