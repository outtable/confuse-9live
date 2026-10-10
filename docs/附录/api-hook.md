---
sort: 1
---

# 拦截的API信息
运行时SDK会通过API拦截，来保证代码运行时正常，拦截的API列表如下

!!! tip
    c 语言API目前并非运行时拦截的，只有源码编译出的部分或者是[外部SDK混淆](https://crab-ios.com/docs/site/%E9%AB%98%E7%BA%A7%E6%8A%80%E5%B7%A7/%E5%A4%96%E9%83%A8SDK%E6%B7%B7%E6%B7%86/)中指定的文件，才会拦截

!!! tip
    dart 语言API采用的是源码处理阶段的方法替换，具体内容请打开混淆工具，参考【工程混淆配置】/【Dart方法转发】

| API | 语言 | 说明 |
|-----|-----|-----|
| open | c 语言 | 打开文件 |
| fopen | c 语言 | 打开文件 |
| stat | c 语言 | 获取文件统计信息 |
| lstat | c 语言 | 获取文件统计信息 |
| access | c 语言 | 访问文件 |
| freopen | c 语言 | 重新打开文件 |
| sel_getName | c 语言 | 获取Selector名字 |
| ObjC_getProtocol | c 语言 | 获取Protool名字 |
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
| ObjC_getRequiredClass | c 语言 | 获取必须的类名 |
| ObjC_lookUpClass | c 语言 | 通过名称查询Class |
| ObjC_getMetaClass | c 语言 | 通过名称查询Meta Class |
| NSSelectorFromString | c 语言 | 通过名称获取Selector |
| NSProtocolFromString | c 语言 | 通过名称获取Protocol |
| NSStringFromProtocol | c 语言 | 通过Protocol获取名称 |
| NSClassFromString | c 语言 | 通过Class获取名称 |
| NSStringFromClass | c 语言 | 通过名称获取Class |
| [+NSFileHandler fileHandleForReadingAtPath:] | ObjC 语言 | 读取文件 |
| [-NSFileHandler initWithFileDescriptor:] | ObjC 语言 | 读取文件 |
| [-NSFileHandler initWithFileDescriptor:closeOnDealloc:] | ObjC 语言 | 读取文件 |
| [-NSFileHandler initWithFileDescriptor:closeOnDealloc:] | ObjC 语言 | 读取文件 |
| [-NSData initWithContentsOfFile:] | ObjC 语言 | 读取文件内容 |
| [-NSData initWithContentsOfFile:options:error:] | ObjC 语言 | 读取文件内容 |
| [+NSData dataWithContentsOfFile:] | ObjC 语言 | 读取文件内容 |
| [+NSString stringWithContentsOfFile:] | ObjC 语言 | 读取文件内容 |
| [+NSString stringWithContentsOfFile:encoding:error:] | ObjC 语言 | 读取文件内容 |
| [+NSString stringWithContentsOfFile:usedEncoding:error:] | ObjC 语言 | 读取文件内容 |
| [+NSString initWithContentsOfFile:encoding:error:] | ObjC 语言 | 读取文件内容 |
| [+NSString initWithContentsOfFile:usedEncoding:error:] | ObjC 语言 | 读取文件内容 |
| [-NSBundle URLForResource:withExtension:] | ObjC 语言 | 获取资源路径 |
| [+NSBundle URLForResource:withExtension:subdirectory:inBundleWithURL:] | ObjC 语言 | 获取资源路径 |
| [-NSBundle URLForResource:withExtension:subdirectory:] | ObjC 语言 | 获取资源路径 |
| [-NSBundle URLForResource:withExtension:subdirectory:localization:] | ObjC 语言 | 获取资源路径 |
| [-NSBundle pathForResource:ofType:] | ObjC 语言 | 获取资源路径 |
| [-NSBundle pathForResource:ofType:inDirectory:] | ObjC 语言 | 获取资源路径 |
| [-NSBundle pathForResource:ofType:inDirectory:forLocalization:] | ObjC 语言 | 获取资源路径 |
| [-NSBundle loadNibNamed:owner:options:] | ObjC 语言 | 获取资源路径 |
| [-NSBundle loadNibNamed:owner:options:] | ObjC 语言 | 获取资源路径 |
| [+NSBundle pathForResource:ofType:inDirectory:] | ObjC 语言 | 获取资源路径 |
| [+UINib nibWithNibName:bundle:] | ObjC 语言 | 获取NIB资源路径 |
| [+UIImage imageNamed:] | ObjC 语言 | 获取Image资源 |
| [+UIImage imageWithContentsOfFile:] | ObjC 语言 | 获取Image资源 |
| [-UIImage initWithContentsOfFile:] | ObjC 语言 | 获取Image资源 |
| [+UIImage imageNamed:inBundle:withConfiguration:] | ObjC 语言 | 获取Image资源 |
| [+UIImage imageNamed:inBundle:compatibleWithTraitCollection:] | ObjC 语言 | 获取Image资源 |
| [-UILabel initWithCoder:] | ObjC 语言 | 初始化UILabel |
| [-UIButton initWithCoder:] | ObjC 语言 | 初始化UIButton |
| [-AVAudioPlayer initWithContentsOfURL:error:] | ObjC 语言 | 播放音频 |
| [-AVAudioPlayer initWithContentsOfURL:fileTypeHint:error:] | ObjC 语言 | 播放音频 |
| [-AVAudioPlayer initWithContentsOfURL:error:] | ObjC 语言 | 播放音频 |
| [-AVPlayer initWithURL:] | ObjC 语言 | 播放音频 |
| [+AVPlayer playerWithURL:] | ObjC 语言 | 播放视频 |
| [-AVPlayerItem initWithURL:] | ObjC 语言 | 播放音频/视频 |
| [+AVPlayerItem playerWithURL:] | ObjC 语言 | 播放音频/视频 |
| [-SKNode initWithCoder:] | ObjC 语言 | 创建SpriteKit Node |
| [-SKLabelNode initWithCoder:] | ObjC 语言 | 创建文案元素节点 |
| [+SKNode nodeWithFileNamed:] | ObjC 语言 | 创建SpriteKit Node |
| [+SKNode nodeWithFileNamed:securelyWithClasses:andError:] | ObjC 语言 | 创建SpriteKit Node |
| [+SKVideoNode videoNodeWithFileNamed:] | ObjC 语言 | 创建视频元素节点 |
| Image.asset | dart 语言 | 获取图片资源文件 |
| AssetImage | dart 语言 | 获取图片资源文件 |
| rootBundle.loadString | dart 语言 | 获取资源文件数据(字符串) |
| rootBundle.load | dart 语言 | 获取资源文件数据 |
| rootBundle.loadBuffer | dart 语言 | 获取资源文件数据 |
| rootBundle.loadStructuredData | dart 语言 | 获取资源文件数据(结构体) |
| rootBundle.loadStructuredBinaryData | dart 语言 | 获取资源文件数据(二进制数据) |
| lottie.asset | dart 语言 | Lottie资源 |