# Ubuntu Install mongoDB

其实网上教程已经很多了，自己写一遍是为了后面自己安装方便：

[下载](https://www.mongodb.org/dl/linux/x86_64)

<img src="https://raw.githubusercontent.com/AlvinMi/2019-Pic/master/2019/20190506232157.png"/>

选择自己对应的版本进行下载，虚拟机下 Linux 也是同理,下载下来后拖进虚拟机就行了。

基本操作：

```bash
$ tar -xzvf mongodb-linux-x86_64-ubuntu1804-latest.tgz
$ mv mongodb-linux-x86_64-ubuntu1804-4.1.10-388-g30f602bb9c mongodb # 类似于重命名文件为 mongodb
$ mv mongodb /usr/local/mongodb
$ cd /usr/local/mongodb/    # 切换到 mongodb
```

在 mongodb 目录下创建目录 `data/db` ，以及 `log` 目录:

```bash
$ cd /usr/local/mongodb/    # 切换到 mongodb
$ mkdir data  # 创建 data 目录
$ mkdir log   # 创建 log 日志目录
$ cd data     # 切换到 data 目录
$ mkdir db    # 创建 db 目录
```

系统 `profile` 配置，配置环境，这是每装一个软件的必备步骤，在 `profile` 文件最后面添加环境变量, 如果没有管理员全新啊，使用 sudo，如果文件是只读文件使用 `chmod` 命令给加权限，配置完下面的文件后, 再修改回只读文件。

```bash
$ vim /etc/profile  

export MONGODB_HOME=/usr/local/mongodb
export PATH=$PATH:$MONGODB_HOME/bin
```

保存退出后， source 一下

```bash
$ source /etc/profile
```

在 mongodb 目录下创建 conf 目录，并创建 mongodb.conf 配置文件

```bash
$ cd /usr/local/mongodb/    # 切换到 mongodb 目录
$ mkdir conf # 创建 conf 目录
$ touch mongodb.conf  # 创建 mongodb.conf 配置文件
```

配置 `mongodb.conf`：

```bash 
dbpath = /usr/local/mongodb/data/db  # 数据文件存放目录  
logpath = /usr/local/mongodb/log/mongodb.log # 日志文件存放目录  
port = 27017  # 端口  
fork = true  # 以守护程序的方式启用，即在后台运行  
```

启动服务：

```bash
$ cd /usr/local/mongodb/    # 切换到 mongodb
$ ./bin/mongod --config ./conf/mongodb.conf  # 启动服务
# 连接 mongodb
$ cd /usr/local/mongodb/bin
$ ./mongo
```

服务就启动了。

<img src="https://raw.githubusercontent.com/AlvinMi/2019-Pic/master/2019/20190507001554.png"/>

停止服务:

```bash
$ cd /usr/local/mongodb/bin
$ ./mongod -shutdown -dbpath=/usr/local/mongodb/data/db  # 停止mongodb
```

关于远程访问本地，可能的原因：

- 防火墙阻止了 27017 端口
- mongodb 的配置文件中 bind_ip 默认为 `127.0.0.1`，默认是只能链接本机的，可以将 bind_ip 设置为 0.0.0.0 表示接受任何 IP 的连接。