# About

## 回顾

Spring 框架除了帮我们管理对象以及依赖关系，还提供了很多其他的必要特性和功能，比较常见的几种如下：

- 通用日志记录；
- 性能统计；
- 安全控制；
- 异常处理；
- 管理数据库事务（其本身提供了一套简单的 JDBC 访问实现，同时还提供于第三方数据访问框架集成，如 Mybatis、JPA 等）；
- 能够与各种 Java EE 技术整合（如 Java Mail、任务调度等等）；
- 提供一套自己的 Web 层框架 Spring MVC，而且还能非常简单的与第三方 Web 框架集成。

Spring 到底能给我们带来什么？

#### Bean

这个 Bean 肯定是逃不掉的，从 Java 的起源说起。

- 1996 年，Java 还是新兴的变成语言。当时也是 OOP 思想飞速发展的时期。
- 同年 12 月，Sun 发布了 [JavaBean 1.00-A](https://www.oracle.com/java/technologies/javase/javabean-spec.html) 规范。这个规范规定了一套编码策略，使用简单的 Java 对象不仅可以被重用，而且还可以轻松地构建更为复杂的应用。
- 1998 年 3 月，Sun 公司发布了 EJB 1.0 规范，把 Java 组件的设计理念延伸到了服务器端，并且提供了许多必须的企业级服务。
  - 到后来 Java 组件开发理念重回正轨，新的编程技术 AOP、DI 的不断出现，为 JavaBean 提供了之前 EJB 才能拥有的强大功能，为 POJO 提供了类似 EJB 的声明式编程模型，而且没有引入 EJB 的复杂性。
  - EJB 的发展促进了基于 POJO 的编程模型，引入新的理念。EJB 3 发布时，基于 POJO 的开发框架已经成为了事实的标准。Spring 也在这样的大环境下诞生。

#### Spring 的初衷

- Spring 致力于简化 Java 开发，主要采取了 4 个策略：
  - 基于 POJO 的轻量级和最小侵入性编程；
  - 通过依赖注入和面向接口松耦合；
  - 基于切面进行声明式编程；
  - 通过切面和模板减少样板式代码；

实现上面 4 个策略主要是通过三种方式：

- 面向 Bean（BOP）；
- 依赖注入（DI）；
- 面向切面（AOP）。

分别看下这三种实现方式：

<details>
<summary> BOP 编程 </summary>

Spring 是面向 Bean 的编程（Bean Oriented Programmin - BOP），Bean 在 Spring 中的作用就像 Object 对 OOP 的意义一样，Spring 中没有 Bean 也就没有存在的意义。Spring 提供了 IOC 容器通过配置文件或者注解的方式来管理对象之间的依赖关系。

控制反转：（面试要考的：其中最常见的实现方式叫做**依赖注入**（Dependency Injection，DI）），还有一种方式叫做「依赖查找」（Dependency Lookup - DL）。最早 Spring 是包含依赖查询的，但因为使用频率低后面被 Spring 移除了（所以在 Spring 中控制反转也被直接称为依赖注入）。

它的基本概念是：不创建对象，但是描述创建它们的方式。在代码中不直接与对象和服务连接，但在配置文件中描述哪一个组件需要哪一项服务，容器（Spring 中是 IOC 容器）复杂将这些联系在一起。典型的 IOC 场景中，容器创建了所有对象，并设置必要的属性将它们连接在一起，决定什么时间调用方法。

</details>

<details>
<summary> 依赖注入的基本概念 </summary>

Spring 核心是 [org.springframework.beans](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/beans/package-summary.html) 包（架构核心是 [org.springframework.core](https://github.com/spring-projects/spring-framework/tree/master/spring-core) 包），它的设计目标是与 JavaBean 组件一起使用。这个包通常不是由用户直接使用，而是由服务器将其用作其他多数功能底层中介。下一个最高级抽象是 BeanFactory 接口，顾名思义是工厂模式的实现，允许通过名称创建和检索对象，BeanFactory 也可以管理对象之间的关系。

BeanFactory 最底层支持两个对象模型：

- 单例：提供了巨头特定名称的全局共享实例对象，可以在查询时对其进行检索。Singleton 是默认的也是最常用的对象模型。
- 原型：确保每次检索都会创建单独的实例对象。在每个用户都需要自己的对象时，采用原型模式。

Bean 工厂的概念是 Spring 作为 IOC 容器的基础。IOC 则将处理事情的责任从应用程序代码转移到了框架。

</details>

<details>
<summary> AOP 编程理念 </summary>

面向切面编程，即 AOP，是一种编程思想，它允许程序员对横切关注点或横切职责分界线的行为（例如日志和事务管理）进行模块化。AOP 的核心构造是切面，它将那些**影响多个类的行为封装到了可重用的模块中**。

AOP 和 IOC 是补充性的技术，都运用模块化的方式解决企业应用程序开发中的复杂问题。在典型的面向对象开发方式中，可能要将日志记录语句放在所有方法和 Java 类中才能实现日志功能。在 AOP 中可以反过来讲日志服务模块化，并以声明的方式将它们应用到需要日志的组件上。优势就是 Java 类不需要知道日志服务的存在，也不需要考虑相关的代码，所以 Spring AOP 编写的应用程序代码是松散耦合的。

AOP 功能完全集成到了 Spring 事务管理、日志和其他各种特性的上下文中，AOP 编程的常用场景有：

- Authentication（权限认证）；
- Auto Caching（自动缓存处理）；
- Error Handling（统一错误处理）；
- Debugging（调试信息输出）；
- Logging（日志记录）；
- Transactions（事务处理）等。

</details>

## Spring5 系统架构

Spring 总共大约有 20 个模块，由 1300 多个不同的文件构成。而这些组件被分别整合在：

- 核心容器（Core Container）；
- AOP（Aspect Oriented Programming）和设备支持（Instrmentation）；
- 数据访问及集成（Data Access/Integeration）；
- Web 组件；
- 报文发送（Messaging）；
- Test。

这些模块集合中。以下是 Spring 5 的模块结构图。

![Spring 5 的模块结构图]()

<details>
<summary> 核心容器 </summary>

</details>

<details>
<summary> AOP 和设备支持 </summary>

</details>

<details>
<summary> 数据访问与集成 </summary>

</details>

<details>
<summary> Web 组件 </summary>

</details>

<details>
<summary> 通信报文 </summary>

</details>

<details>
<summary> 集成测试 </summary>

</details>

<details>
<summary> 集成兼容 </summary>

</details>

---

Spring 版本命名规则：

| 描述方式 | 说明     | 含义                                                                 |
| -------- | -------- | -------------------------------------------------------------------- |
| Snapshot | 快照版   | 尚不稳定、处于开发中的版本                                           |
| Release  | 稳定版   | 功能相对稳定，可以对外发行但有时间限制                               |
| GA       | 正式版   | 代表广泛可以用的稳定版（General Availability）                       |
| M        | 里程碑版 | （M 是 Mileston 的意思）具有一些全新的功能或是具有里程碑意义的版本。 |
| RC       | 终测版   | Release Candidate（最终测试），即将作为正式版本发布。                |

Spring 的设计演进有很多值得我们去深入研究探讨，尤其是它解决的一些经典开发疑难问题，都值得我们切回当初那个环境视角去思考如果换做是我们自己，我们会如何做。同时，Spring 源码当中还有不少设计规范和设计模式的实践，都是我们应该学习并在日常工作编码当中实践体现的。
