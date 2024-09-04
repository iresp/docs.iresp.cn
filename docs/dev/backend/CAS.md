# Central Authentication Service (CAS)

单点登录统一认证，基于 Apereo CAS - Identity & Single Sign On for all earthlings and beyond

- 仓库地址：[github.com/apereo/cas](https://github.com/apereo/cas)
- 文档地址：[apereo.github.io/cas/](https://apereo.github.io/cas/)

## CAS构建与配置

### 开发环境准备

你需要准备以下开发环境：

- JDK 21
- gradle
- [github.com/apereo/cas-overlay-template](https://github.com/apereo/cas-overlay-template)

请先下载工程代码：[github.com/apereo/cas-overlay-template](https://github.com/apereo/cas-overlay-template)

### 配置

在 ```src/main/resources``` 中新建一个配置文件```application-standalone.properties```：

```properties
cas.authn.accept.enabled=false
cas.server.name=https://sso.iresp.com:8443
cas.server.prefix=${cas.server.name}/cas
logging.config=file:/etc/cas/config/log4j2.xml
cas.authn.ldap[0].order=0
cas.authn.ldap[0].name=Active Directory
cas.authn.ldap[0].type=AUTHENTICATED
cas.authn.ldap[0].use-start-tls=false
cas.authn.ldap[0].subtree-search=true
# cas.authn.ldap[0].search-filter=CN={user}
cas.authn.ldap[0].ldap-url=ldap://192.168.0.180:389
cas.authn.ldap[0].base-dn=dc=iresp,dc=com
cas.authn.ldap[0].enhance-with-entry-resolver=true
cas.authn.ldap[0].bind-dn=CN=Administrator,CN=Users,DC=iresp,DC=com
cas.authn.ldap[0].bind-credential=SSairuisi2024
cas.authn.ldap[0].pool-passivator=bind
cas.authn.ldap[0].min-pool-size=1
cas.authn.ldap[0].trust-manager=ANY
cas.authn.ldap[0].trust-store-type=JKS
cas.authn.ldap[0].trust-store-password=changeit
cas.authn.ldap[0].hostname-verifier=ANY
cas.authn.ldap[0].dn-format=%s
cas.authn.ldap[0].principal-attribute-list=sAMAccountName,cn,description,pwdLastSet,distinguishedName
cas.authn.ldap[0].principalAttributeList=sAMAccountName,cn,description,pwdLastSet,distinguishedName
cas.authn.ldap[0].search-filter=(sAMAccountName={user})
cas.authn.password-sync.ldap[0].password-synchronization-failure-fatal=true
cas.authn.password-sync.ldap[0].password-attribute=userPassword
cas.authn.password-sync.ldap[0].enabled=true
cas.authn.password-sync.ldap[0].ldap-url=ldap://192.168.0.180:389
cas.authn.password-sync.ldap[0].base-dn=dc=iresp,dc=com
cas.authn.password-sync.ldap[0].bind-dn=CN=Administrator,CN=Users,DC=iresp,DC=com
cas.authn.password-sync.ldap[0].bind-credential=SSairuisi2024
cas.authn.password-sync.ldap[0].search-filter=(sAMAccountName={0})
cas.tgc.crypto.signing.key=1XRP_Yj-AuNHiRkdvrcy7UHd4Fq9HuM-78Q1u0RFWA4dmqm5ZjIkhK06SPwM428NGVfBcYbmnx-Pbb7qlxy_bA
cas.tgc.crypto.encryption.key=GfqnJPOkz9GbL_vFOyB-RdltShiw9zYMlQ7KFOhJN74
cas.webflow.crypto.signing.key=CMzbXzvZLAnRDbImcIK8xbI_ykvQkBwq-N3Orn_juM2pmM2FGctWTArrPtYF8CvTFqsWlSYQ_Cx-u4gMUkVg1Q
cas.webflow.crypto.encryption.key=DPrQ4b1Uy_coO5c9n80e5A
cas.service-registry.json.location=classpath:/services
```

#### 服务注册

在 ```src/main/resources/services``` 中新建一个JSON文件```iRESP-10000001.json```：

```json
{
  "@class": "org.apereo.cas.services.CasRegisteredService",
  "serviceId": "^(https|imaps|http)://.*",
  "name": "iRESP",
  "description": "Intelligent Reliable Easy Stable Project",
  "id": 10000001,
  "evaluationOrder": 10
}
```

#### 生成 Keystore

这个 key 仅用于开发测试使用，生产环境需要部署可信的证书。

```shell
gradle createKeystore
```

生成证书的密码是：```changeit```

### 构建

编辑项目中的 ```build.gradle``` 文件，添加依赖：

 - ```implementation "org.apereo.cas:cas-server-support-ldap"```
 - ```implementation "org.apereo.cas:cas-server-support-json-service-registry"```

```gradle
dependencies {
    implementation "org.apereo.cas:cas-server-support-ldap"
    implementation "org.apereo.cas:cas-server-support-json-service-registry"
}
```

构建命令：

```shell
gradle clean build
```

将构建一个 War 包到：```build/libs/cas.war```

## 运行

```shell
java -jar build/libs/cas.war
```
