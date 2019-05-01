# 树莓派

## 装镜像

### Windows 下怎么装？

### Linux 怎么装？

准备好镜像，可以去树莓派官网下载，在[分享的网盘也可以进行下载](https://pan.baidu.com/s/1EGQrYDCSLIb7ii-Tw7OnZg)

```
链接: https://pan.baidu.com/s/1EGQrYDCSLIb7ii-Tw7OnZg 提取码: tc5a 复制这段内容后打开百度网盘手机App，操作更方便哦
```

将 SD 卡插入 SD 读卡器，然后插入电脑 USB 端口, 然后我们需要确认 SD 卡的设备名称, 我们可以使用 fdisk 命令行工具, 在终端中输入下面的命令。

```bash
$ sudo fdisk -l
```

然后用下面的命令， 将 img 镜像挂到 SD 卡：

```bash
$ sudo dd if=stretch_ros_kinetic_desktop_full_v1_1.img of=/dev/sdc
```

整个过程比较漫长，需要耐心等待... 想看写入的进度也是可以的，装一个 PV(Pipe Viewer)管道查看器工具，自行搜索。

<img src="https://raw.githubusercontent.com/AlvinMi/2019-Pic/master/2019/20190427231814.png"/>

写入完成后，拔出 SD 卡。将 SD 卡插入到树莓派的 SD 卡接口。启动电源 ，一个新的 Raspbian 系统运行起来了！

### MacOS 下？

