# Linux

## Ubuntu

常用 Ubuntu 比较多...

### Ubuntu 安卓 deb、rpm 安装包的方法

**方式一**

```bash
# 安卓 alien 和 fakeroot 两个工具
$ sudo apt-get install alien fakeroot
# 将 rpm 包转换为 deb 包
$ fakeroot alien package.rpm
# 等待转换完成之后就能通过 dpkg 来安装了
$ sudo dpkg -i package.deb
```

**方式二**

```bash
$ sudo apt-get install rpm alien
$ alien -d package.rpm
$ sudo dpkg -i package.deb
```

> 需要注意，用 alien 转换的 .deb 包并不能保证 100% 顺利安装，所以可以找到 deb 最好直接用 deb 包
