# learning

带着求知欲学习。

比如给自己提一些问题：

- 一个服务的程序结构应该是怎样子的，怎么保证它能够一直提供服务不退出，同时又不始终占满整个 CPU？
- 怎么同时处理多个 socket？
- 同时处理多个 socket 的时候，socket 上只读取到了一部分数据，接下来的数据还没到达的时候，要怎么办？
- 怎么做到对同一个 socket 一边读取一边写入？
- nginx 启动时会有多个进程，怎么管理这些进程，又怎么做到这些进程同时处理一个监听的 socket？
- 需要使用本地文件的时候，用了哪些技术来加速？
- upstream 的负载均衡是如何实现的？
- 