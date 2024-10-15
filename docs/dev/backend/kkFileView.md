# kkFileView

官方文档：[https://kkfileview.keking.cn/zh-cn/docs/config.html](https://kkfileview.keking.cn/zh-cn/docs/config.html)

镜像：keking/kkfileview:v2.2.1

## https

修改 ```application.properties``` 文件中的 ```base.url``` ：

```text
base.url = https://fileview.iresp.cn
```

## 定时删除

为了防止文件泄露，需要定时删除缓存的文件，缓存文件在 ```/opt/kkFileView-2.2.1/file/``` 文件夹，所以创建定时任务执行：

```shell
crontab -e
*/5 * * * * rm -rf /opt/kkFileView-2.2.1/file/*
```
