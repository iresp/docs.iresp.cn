# 后端开发

后端程序主要使用 Java1.8 和 Java17 进行开发，部分涉及到 AI 的程序使用 Python 进行开发。

## 开发环境准备

你需要安装以下环境工具软件：

- [Oracle JDK8](https://www.oracle.com/java/technologies/javase/javase8-archive-downloads.html)、[Oracle JDK17](https://www.oracle.com/java/technologies/downloads/)、[Zulu OpenJDK](https://www.azul.com/downloads/)、[Eclipse Temurin OpenJDK](https://adoptium.net/zh-CN/temurin/releases/)
- [Maven](https://maven.apache.org/download.cgi)
- [Redis3.2+](https://redis.io/downloads/)
- [Mysql5.7+](https://dev.mysql.com/downloads/windows/installer/5.7.html)、[MariaDB10.4+](https://mariadb.com/kb/en/mariadb-1040-release-notes/)
- IntelliJ IDEA（Lombok Plugin 必装）

::: tip
如果你懒得在本地搭建数据库、Redis，可以直接使用在线开发服务器的服务，使用 SSH 隧道访问。例如：
```shell
# 数据库端口映射，172.0.0.1:8306 就是线上开发服务器的服务了
ssh root@ecs.iresp.cn -L 127.0.0.1:8306:127.0.0.1:3306 -N -v

# Redis端口映射，172.0.0.1:6379 就是线上开发服务器的服务了
ssh root@ecs.iresp.cn -L 127.0.0.1:6379:127.0.0.1:6379 -N -v
```
:::

::: tip
推荐配置Maven代理仓库，进行加速构建：[maven.renfei.net](https://maven.renfei.net/)
:::
