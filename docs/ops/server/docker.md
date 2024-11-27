# Docker 运维

## Docker 安装

- Linux安装：[Linux](/ops/server/linux.html#docker-安装)
- Windows安装：[Windows](/ops/server/windows.html#docker-安装)

## Docker 导入导出

- ```docker save``` 保存的是镜像（image）
- ```docker export``` 保存的是容器（container）
- ```docker load``` 用来载入镜像包
- ```docker import``` 用来载入容器包
- ```docker load``` 不能对载入的镜像重命名
- ```docker import``` 可以为镜像指定新名称

### Docker save/load

```bash
docker save -o /tmp/image.tar image_name:tag
docker load -i images.tar
```