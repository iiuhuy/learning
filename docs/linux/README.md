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

## 安装  Redis

```bash
$ sudo apt-get update
$ sudo apt-get install redis-server
# 启动 redis
$ redis-server
19469:C 17 Jun 21:16:11.194 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
19469:C 17 Jun 21:16:11.194 # Redis version=4.0.9, bits=64, commit=00000000, modified=0, pid=19469, just started
19469:C 17 Jun 21:16:11.194 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
19469:M 17 Jun 21:16:11.196 * Increased maximum number of open files to 10032 (it was originally set to 1024).
19469:M 17 Jun 21:16:11.197 # Creating Server TCP listening socket *:6379: bind: Address already in use
# 查看 redis 是否启动
$ redis-cli
127.0.0.1:6379> 
127.0.0.1:6379> ping
PONG
```

会打开 `127.0.0.1:6379>` 终端, 127.0.0.1:6379 是本机 IP, 6379 是 redis 默认的服务器端口。可以在终端输入 `ping` 后看到 PONG 响应, 说明已经成功安装了。
