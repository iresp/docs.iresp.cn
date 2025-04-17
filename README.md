# iRESP 文档中心

> [!WARNING]  
> 此仓库为互联网公开文档中心，请勿提交任何敏感信息。 请勿提交内部资料、密码、联系方式等信息。

## 运行

```shell
yarn docs:dev
```

## 构建

```shell
export NODE_OPTIONS=--openssl-legacy-provider
yarn && yarn docs:build
```
会生成到 ```docs/.vuepress/dist``` 中
