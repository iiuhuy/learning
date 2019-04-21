# React Native

## React Native 开发环境搭建

> 可以参考React Native 中文网：https://reactnative.cn/docs/getting-started.html

### MacOS 环境

TODO

### Ubuntu 环境

版本 18.04。

- Node 环境
- Java 环境
- Android Studio 安装(可以在 [developers.google.cn](https://developers.google.cn/))
- React Native 命令行安装创建第一个项目

**Node 本地环境**

推荐使用 [nvm](https://github.com/creationix/nvm/blob/master/README.md) 来管理 node 的版本。具体过程就略过了，我当前 node 版本和 nvm 管理的版本如下图：

<img src="https://raw.githubusercontent.com/AlvinMi/2019-Pic/master/2019/20190420223446.png"/>

**Java 环境设置**

因为安装 Android Studio 需要 Java 环境，先去 [Java 官网](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)下载 JDK，选择 Linux 对应的包。

<img src="https://raw.githubusercontent.com/AlvinMi/2019-Pic/master/2019/20190420225417.png"/>

在 `/usr/local` 目录下新建一个 `java` 目录，将下载的 JDK 复制到新建的 java 文件夹下：

```bash
$ sudo mkdir /usr/local/java
$ sudo cp jdk-8u201-linux-x64.tar.gz /usr/local/java
# 然后解压
$ sudo tar xvf jdk-8u201-linux-x64.tar.gz
```

设置 java 环境变量

```bash
$ sudo vim /etc/profile
```

添加下面的内容到末尾，根据自己的路径添加：

```bash
# 添加 Android Sdk
export ANDROID_HOME=${HOME}/Android/Sdk
# Java 
export JAVA_HOME='/usr/local/java/jdk1.8.0_201'
# Jre
export JRE_HOME=${JAVA_HOME}/jre
export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib
export PATH=${JAVA_HOME}/bin:$PATH
```

完成后退出 vim, 执行：

```bash
$ source /etc/profile
```

添加完成了之后，使用 `java -version` 查询一下：

<img src="https://raw.githubusercontent.com/AlvinMi/2019-Pic/master/2019/20190420225903.png"/>

**Android Studio 安装**

下载 [Android Studio](https://developer.android.com/studio/index.html)，解压下载的包，然后 cd 到 bin 文件夹，执行 `./studio.sh` 命令，就会启动 `Android Studio Welcome` 界面，根据 [React Native](https://reactnative.cn/) 介绍设置一些步骤，需要选择 custom，勾选 Android Virtual Device，下一步，等待安装完成，网络不好估计比较慢。

下载完成后，在 setting config 中下载需要的一些 SDK。可以看到我当前的 SDK 和 SDK Tools，如下图：

<img src="https://raw.githubusercontent.com/AlvinMi/2019-Pic/master/2019/20190421001235.png"/>

<img src="https://raw.githubusercontent.com/AlvinMi/2019-Pic/master/2019/20190421001414.png"/>

然后 Apply ，继续安装就行了。

**创建一个 React Native 项目**

在命令行中使用 React Native 命令行创建第一个项目:

```bash
$ react-native init AwesomeProject
```

准备 Android 设备，可以真机，可以模拟器，这里直接使用 Android Studio 上的模拟器，打开 Android Studio 后，可以直接打开一个 Android 项目，在刚刚创建的 AwesomeProject 目录下。

这个时候需要创建一个模拟器(AVD Manager),图标是这个样子：

<img src="https://reactnative.cn/docs/assets/GettingStartedAndroidStudioAVD.png"/>

创建一个安卓虚拟设备，根据支持的创建一个，然后点击三角形的按钮启动。

**编译运行 React Native 应用**

必须确保模拟器或者链接了真机，不然运行的时候会失败。

```bash
$ cd AwesomeProject
$ react-native run-android
```

如下

<img src="https://raw.githubusercontent.com/AlvinMi/2019-Pic/master/2019/20190421002555.png"/>

初始化项目就运行起来了。

<img src="https://raw.githubusercontent.com/AlvinMi/2019-Pic/master/2019/20190421003125.png"/>

**watchman**

Watchman 是由 Facebook 提供监视文件系统变更的工具。安装后后可以提高开发时的性能(packager 可以快速捕捉文件的变化从而实现实时刷新)。听起来很不错的样子...

执行下面的命令安装 [Watchman(参考该链接)](https://facebook.github.io/watchman/docs/install.html):

```bash
$ git clone https://github.com/facebook/watchman.git
$ cd watchman
# 这是我安装时候的稳定版本
$ git checkout v4.9.0  # the latest stable release
$ ./autogen.sh
$ ./configure
$ make
$ sudo make install
```

**安装 Genymotion**

Genymotion 需要提前安装好 [virtualbox](https://www.virtualbox.org/wiki/Linux_Downloads)， 我之前安装了就不介绍了，你可以通过命令行来安装或者使用其他安装的方式。

```bash
$ wget -q https://www.virtualbox.org/download/oracle_vbox.asc -O-|sudo apt-key add -

$ sudo apt-get update

$ sudo apt-get install virtualbox
```

在 [Genymotion 官网](https://www.genymotion.com/download/)下载 Genymotion，需要注册一个账号：

```bash
$ cd 下载  # 你下载的目录
$ chmod +x genymotion-3.0.2-linux_x64.bin
$ sudo ./genymotion-3.0.2-linux_x64.bin -d ~
# 进入 genymotion 目录
$ cd ~/genymotion/
$ ./genymotion
```




### Windows 环境

TODO

参考文档：

- [官方文档](https://facebook.github.io/react-native/) & [React Native 中文文档](https://reactnative.cn/)

开始 React Native 之旅吧。

## 调试相关

<!-- **De** -->

## 一些参考文章

- [搜车 React Native 依赖管理方案](https://zhuanlan.zhihu.com/p/27095858)
- [React 移动 web 极致优化](http://www.alloyteam.com/2016/05/react-mobile-web-optimization/)

- RN 的性能优化、动画开发体验提升、智能打包以及打包工具瓶颈
