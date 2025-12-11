---
sort: 2
---

# 改变Xcode选中的scheme

1. 为什么会出现在这个阶段很耗时的问题?
> 因为你的 *.xcworkspace 文件中的 xcuserdata 有一些很大的Xcode本地用户配置文件


2. 如何解决这个阶段很耗时的问题？
> 首先，我们重制一下状态，恢复到项目初始状态，然后打开终端执行下面的命令后，再重新用xcode打开当前项目就行了
!!! note
        cd {我的项目目录} #改成你的工程目录
        rm -rf {我的项目}.xcworkspace/xcuserdata #改成你的xcworkspace文件目录