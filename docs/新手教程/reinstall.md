---
sort: 11
---

# 应用重新安装

当我们希望完全重新安装应用的时候，可以执行下面的操作，用来重新安装 `CrabiOS.app` 文件

## 1.首先备份注册码

进入注册码界面，找到需要备份的那个激活码，然后点导出到桌面

## 2.在终端中彻底清除应用
```
rm /var/tmp/crab.upgrade.config
rm -rf ~/.9live
rm -rf ~/Library/ipa-artifact
rm -rf /Applications/crab-orange.app
```

## 3.下载 `CrabiOS.app`

请访问官网[小蟹iOS混淆](https://crab-ios.com/) 下载最新版程序

## 4.重新导入注册码

进入注册码界面，点击导入按钮，选之前导出到桌面的注册码文件