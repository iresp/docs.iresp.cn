# Aliyun ECS

此设备为云服务器，具备互联网访问能力、7x24小时稳定在线能力，可部署对外服务、生产环境。

- IP: 47.95.66.119
- Domain: ecs.iresp.cn

## 服务与端口

::: warning 注意
如有新增或删减，可能不会实时更新此文档，仅做参考。
:::

常用端口如下：

| 端口 | 域名              | 服务  | 对端端口 | 对端服务    | 备注                  |
| ---- | ----------------- | ----- | -------- | ----------- | --------------------- |
| 22   | git.iresp.cn      | FRPS  | 2222     | FRPC-GitLab | GitLab（Workstation） |
| 80   | -                 | Nginx | -        | -           | HTTP 跳转 HTTPS       |
| 443  | preview.iresp.cn  | Nginx | -        | -           | 产品预览              |
| 443  | docker.iresp.cn   | Nginx | 9443     | Portainer   | Docker 管理           |
| 443  | fileview.iresp.cn | Nginx | 8012     | Docker      | 文件预览              |
| 443  | bpmn.iresp.cn     | Nginx | 8082     | Docker      | 流程设计器            |
| 443  | git.iresp.cn      | Nginx | 8443     | FRPC-GitLab | GitLab（Workstation） |
| 2222 | ecs.iresp.cn      | SSH   | -        | -           | SSH                   |

## 登录服务器

此服务器禁止使用密码登录！请先生成 SSH Key 将公钥发送给管理员。

```shell
ssh -p 2222 root@47.95.66.119
```
