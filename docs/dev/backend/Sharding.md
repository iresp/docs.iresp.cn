# ShardingSphere (数据库分库分表和优化)

ShardingSphere有ShardingSphere-JDBC和ShardingSphere-Proxy两种方式，我们采用的是ShardingSphere-Proxy。这种方案对应用层的侵入性小，基本不需要修改应用层编码。 

- 官网：[shardingsphere.apache.org](https://shardingsphere.apache.org/)
- 仓库地址：[github.com/apache/shardingsphere](https://github.com/apache/shardingsphere)
- 文档地址：[shardingsphere.apache.org/document/current/cn/overview/](https://shardingsphere.apache.org/document/current/cn/overview/)

## 什么是 ShardingSphere

Apache ShardingSphere 是一款**分布式**的数据库生态系统， 可以将任意数据库转换为分布式数据库，并通过**数据分片**、弹性伸缩、加密等能力对原有数据库进行增强。

Apache ShardingSphere 设计哲学为 **Database Plus**，旨在构建异构数据库上层的标准和生态。 它关注如何充分合理地利用数据库的计算和存储能力，而并非实现一个全新的数据库。 它站在数据库的上层视角，关注它们之间的协作多于数据库自身。

### 开发环境准备

你需要准备以下开发环境：

- Docker 26，  Version:           26.1.4   
- Mariadb， 10.4
- [blog.csdn.net/weixin_42607526/article/details/140331333](https://blog.csdn.net/weixin_42607526/article/details/140331333)
- Docker image： apache/shardingsphere-proxy:5.4.1

概念图示：

![ShardingProxy](/ShardingProxy.svg)

### 配置

下载Image：

```shell
docker pull apache/shardingsphere-proxy:5.4.1

```

创建宿主机目录

```bash
cd /home
mkdir conf
mkdir shardingsphere && cd shardingsphere
mkdir ext-lib
```

### mysql-connector-java 驱动下载

选用mysql-connector-java-8.0.27.jar 。

https://repo.maven.apache.org/maven2/mysql/mysql-connector-java/

>  注： 将下载的 mysql-connector-java--8.0.27.jar  包复制到宿主机 /home/shardingsphere/ext-lib 目录下，注意自己当前 数据库版本 选择相应的驱动包。

### conf 配置

拷贝容器 conf 到缩主机
```
# 创建容器
docker run -d --name shardingsphere --entrypoint=bash apache/shardingsphere-proxy:5.4.1
# 复制配置
docker cp shardingsphere:/opt/shardingsphere-proxy/conf /home/conf
# 删除容器
docker rm shardingsphere

```

配置文件列表：

```shell
[root@iZbp1c8mwxtvsejtlsd3ynZ conf]# pwd
/home/conf
[root@iZbp1c8mwxtvsejtlsd3ynZ conf]# ll
total 36
-rw-r--r-- 1 root root 3529 Sep 10 16:41 config-encrypt.yaml
-rw-r--r-- 1 root root 3772 Sep 10 16:41 config-mask.yaml
-rw-r--r-- 1 root root 3688 Sep 10 16:41 config-readwrite-splitting.yaml
-rw-r--r-- 1 root root 5210 Sep 10 16:41 config-shadow.yaml
-rw-r--r-- 1 root root 6524 Sep 11 17:11 config-sharding.yaml
-rw-r--r-- 1 root root 1715 Sep 10 16:41 hbase-db.yaml
-rw-r--r-- 1 root root 3125 Sep 11 17:06 server.yaml
```



                            数据库分片的话，只需要修改config-sharding.yaml和server.yaml。



配置文件修改```server.yaml```：

```properties
authority:
 users:
   - user: root@%
     password: 'root'
   - user: sharding
     password: sharding
 privilege:
   type: ALL_PERMITTED
#
#transaction:
#  defaultType: XA
#  providerType: Atomikos
#
#sqlParser:
#  sqlCommentParseEnabled: false
#  sqlStatementCache:
#    initialCapacity: 2000
#    maximumSize: 65535
#  parseTreeCache:
#    initialCapacity: 128
#    maximumSize: 1024
#
#logging:
#  loggers:
#  - loggerName: ShardingSphere-SQL
#    additivity: true
#    level: INFO
#    props:
#      enable: false
#
#sqlFederation:
#  sqlFederationEnabled: false
#  executionPlanCache:
#    initialCapacity: 2000
#    maximumSize: 65535
#
props:
#  system-log-level: INFO
#  max-connections-size-per-query: 1
#  kernel-executor-size: 16  # Infinite by default.
#  proxy-frontend-flush-threshold: 128  # The default value is 128.
#  # sql-show is the same as props in logger ShardingSphere-SQL, and its priority is lower than logging rule
 sql-show: true
 allow-range-query-with-inline-sharding: true
```

#### 配置文件修改```config-sharding.yaml```：



```properties
databaseName: sharding_db


dataSources:
 ds_0:
   url: jdbc:mysql://172.30.156.243:3306/sharding11?characterEncoding=UTF-8&useUnicode=true&useSSL=false&tinyInt1isBit=false&allowPublicKeyRetrieval=true&serverTimezone=Asia/Shanghai
   username: root
   password: root
   connectionTimeoutMilliseconds: 30000
   idleTimeoutMilliseconds: 60000
   maxLifetimeMilliseconds: 1800000
   maxPoolSize: 50
   minPoolSize: 1
 ds_1:
   url: jdbc:mysql://mariadb:3306/sharding22?characterEncoding=UTF-8&useUnicode=true&useSSL=false&tinyInt1isBit=false&allowPublicKeyRetrieval=true&serverTimezone=Asia/Shanghai
   username: root
   password: root
   connectionTimeoutMilliseconds: 30000
   idleTimeoutMilliseconds: 60000
   maxLifetimeMilliseconds: 1800000
   maxPoolSize: 50
   minPoolSize: 1

rules:
- !SHARDING
 tables:
   hsoclaimtable:
     actualDataNodes: ds_${0..1}.hsoclaimtable

 defaultDatabaseStrategy:
   standard:
     shardingColumn: id
     shardingAlgorithmName: database_inline
 defaultTableStrategy:
   none:
#  defaultAuditStrategy:
#    auditorNames:
#      - sharding_key_required_auditor
#    allowHintDisable: true

 shardingAlgorithms:
   database_inline:
     type: INLINE
     props:
       algorithm-expression: ds_${id % 2}
       allow-range-query-with-inline-sharding: true
```



### 运行Docker



```shell
  docker run -d --name shardingsphere \
-v /home/conf:/opt/shardingsphere-proxy/conf \
-v /home/shardingsphere/ext-lib:/opt/shardingsphere-proxy/ext-lib \
-v /etc/localtime:/etc/localtime \
-e JVM_OPTS="-Djava.awt.headless=true" \
-e CGROUP_MEM_OPTS="-XX:InitialRAMPercentage=80.0 -XX:MaxRAMPercentage=80.0 -XX:MinRAMPercentage=80.0" \
-e PORT=3308 \
-p 3308:3308 \
--network=uat-network  \
 apache/shardingsphere-proxy:5.4.1
```

检查Docker日志，确保正常启动

## 连接ShardingSphere-Proxy

根据配置，ShardingSphere-Proxy会提供数据库的连接接口给应用层，应用层可以像连接普通数据库一样连接Sharding。

我们的系统支持多数据源，配置多数据源：

```properties
        # 多数据源配置
        ucb-datasource:
          url: jdbc:mysql://192.168.0.109:3306/sharding1?characterEncoding=UTF-8&useUnicode=true&useSSL=false&tinyInt1isBit=false&allowPublicKeyRetrieval=true&serverTimezone=Asia/Shanghai
          username: root
          password: root
          driver-class-name: com.mysql.cj.jdbc.Driver
```

相应的程序中使用注解指定数据源：

```java
@Slf4j
@Service
@DS("ucb-datasource")
public class HsoclaimtableServiceImpl extends ServiceImpl<HsoclaimtableMapper, Hsoclaimtable> implements IHsoclaimtableService {
    @Autowired
    private HsoclaimtableMapper hsoclaimtableMapper;

    public long countAll() {
        return hsoclaimtableMapper.countAll();
    }

    public void test(long startId, long endId) {
        long minId = startId;
        List<Hsoclaimtable> hsoclaimtableList = new ArrayList<>();
```



### 案例

理赔信息：

http://localhost:3100/iresp/HsoclaimtableList



## 注意

- 目前测试**5.4.1**版本是成功的，其他版本都不行。
- 数据库表的分片字段必须是**BIGINT，数字型**，才可以，字符串类型测试过，不成功
- 为了保证性能，分片数据库最好在**同一个子网**里
- 分库分表对于SQL影响比较大，很多复杂的SQL可能都会有问题，真实使用时需要测试每个SQL
- 分库分表后，每个分片的性能优化依然很重要，可以用索引来优化
- 分库分表后，其他的数据库性能优化方案依然很重要，比如Redis缓存