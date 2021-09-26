# MySQL Learning

## DDL、DML、DQL、DCL

> 定义、操作、查询、控制

1.新建一个数据库：

2.新健一张表：

- 字段：`id、name、age`

## 连接数据库操作

```bash
# -- 连接数据库
$ mysql -u root -p xxxx

update mysql.user set authentication_string=password('123456') where user='root' and Host='localhost'; # 修改密码
flush privileges; # 刷新权限

# ---------- 所有的语句都使用分号(;)结尾 ---------- #
create database westos; # 创建一个数据库

show databases; # 查看所有数据库
use school; # 切换数据库； use - 数据库名

show tables; # 查看数据库中所有的表；
describe student; # 显示数据库中所有表的信息；

exit; # 退出连接
```

## 操作数据库

> 操作数据库 -> 操作数据库中的表 -> 操作数据库表的数据
> MySQL 中不区分大小写。

#### 操作数据库

```bash
CREATE DATABASE IF NOT EXISTS westos; # 新建数据库

DROP DATABASE IF EXISTS westos; # 删除数据库

USE school; # 使用数据库; (如果表名或者字段名是一个特殊字符，就需要带 ``，即反引号)

SHOW DATABASES; # 查看所有数据库
```

## 数据库的列类型

#### 数值

- tinyint：十分小的数据（1 个字节）
- smallint：较小的数据（2 个字节）
- mediumint：中等大小的数据（3 个字节）
- **int：整数（4 个字节）**
- bigint：较大的整数（8 个字节）
- float：浮点数（4 个字节）
- double：浮点数（8 个字节）
- decimal：字符串形式的浮点数（一般金融计算的时候使用）

#### 字符串

- char：字符串固定大小（0~255）
- **varchar：可变字符串（0~65535）常用的 string**
- tinytext：微型文本（2^8 - 1）
- text：文本串（2^16 - 1）保存大文本

#### 时间日期

- date：YYYY-MM-DD，日期
- time：HH:mm:ss，时间格式
- **datetime：YYYY-MM-DD HH:mm:ss，最常用的时间格式**
- timestamp：时间戳，1970.1.1 —— 到现在的毫秒数！
- year：年份标识

#### null

- 没有值，未知
- PS: 不要使用 null 进行计算，结果为 null

## 数据库的字段属性

**unsigned：无符号的整数**

- 声明了该列不能为负数

**zerofill：0 填充**

- 不足的位数，使用 0 来填充。eg: int(3), 5 --- 005

**自动递增：通常理解为自增，自动在上一条记录的基础上 +1（默认）**

- 通常用来设计唯一的主键，必须是整数类型
- 可以自定义设计主键自增的起始值和步长

**非空：null or not null**

- 假设设置为 not null，如果不给它赋值，就会报错
- null，如果不填写值，默认就是 null

**默认：设置默认的值**

- eg：sex，默认值为男，如果不指定该列的值，则会有默认值。

## 创建数据表

eg:

- 创建一个 school 数据库；
- 创建一个学生表（列、字段），使用 SQL 创建。
  - 学号 int
  - 登录密码 varchar(20)
  - 姓名，性别 varchar(2)
  - 出生日期（datatime）
  - 家庭住址（email）

PS:

> 注意点：
> 使用英文 ()，表的**名称**和**字段**尽量使用 `` 括起来。（反引号）
> AUTO_INCREMENT 自增
> 字符串使用单引号括起来！
> 所有的语句后面加逗号(英文)，最后一个不用加

```sql
CREATE TABLE IF NOT EXISTS `student` (
	`id` INT(4) NOT NULL AUTO_INCREMENT COMMENT '学号',
	`name` VARCHAR(30) NOT NULL DEFAULT '匿名' COMMENT '姓名',
	`pwd` VARCHAR(20) NOT NULL DEFAULT '123456' COMMENT '密码',
	`sex` VARCHAR(2) NOT NULL DEFAULT '男' COMMENT '性别',
	`birthday` DATETIME DEFAULT NULL COMMENT '出生日期',
	`address` VARCHAR(100) DEFAULT NULL COMMENT '家庭住址',
	`email` VARCHAR(50) DEFAULT NULL COMMENT '邮箱',
	PRIMARY KEY (`id`)
) ENGINE=INNODB DEFAULT CHARSET=utf8
```

#### 格式

```sql
CREATE TABLE [IF NOT EXISTS] `表名` (
  `字段名` 列类型 [属性] [索引] [注释],
  `字段名` 列类型 [属性] [索引] [注释],
  ......,
  `字段名` 列类型 [属性] [索引] [注释]
)[表类型][字符集设置][注释]
```

## 规范

阿里巴巴开发手册规范：

每一个表，都必须存在以下五个字段：

- id：主键
- version：乐观锁
- is_delete：伪删除
- gmt_create：创建时间
- gmt_update：修改时间
