# Java Bean

<!-- 来自理解 -->

- 1.所有属性为 private
- 2.提供默认构造方法
- 3.提供 getter 和 setter
- 4.实现 serializable 接口

记录一些 Java 的名词：

- PO([persistence object](https://stackoverflow.com/questions/16041898/what-is-a-persistence-object)): 用于持久化时 (例如保存到数据库或者缓存)；
- VO(value object): 用于前端展示使用（例如放置到 JSP 中解析或者给前端传递数据）；
- DTO([data transfer object](https://en.wikipedia.org/wiki/Data_transfer_object)): 用于接口互相调用返回，数据传输 (例如很多接口调用返回值或消息队列内容)；
- EJB()：
- POJO(Plain Old Java Object)：

> 理解：Java Bean --- 企业实际开发需要实现事务、安全、分布式 ---> EJB --- 太重了 ---> DI(依赖注入)、AOP(面向切面)，这里 Java Bean 简化为 POJO ---> Spring

<!-- 来自书籍 -->

参考链接：

- javabeans：https://docs.oracle.com/javase/tutorial/javabeans/
- stackoverflow：https://stackoverflow.com/questions/1727603/places-where-javabeans-are-used
- stackoverflow：https://stackoverflow.com/questions/1612334/difference-between-dto-vo-pojo-javabeans
- 书 - 《java 编程思想（第四版）》 P823-824
