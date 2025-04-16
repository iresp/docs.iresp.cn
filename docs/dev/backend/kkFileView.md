# kkFileView

官方文档：[https://kkfileview.keking.cn/zh-cn/docs/config.html](https://kkfileview.keking.cn/zh-cn/docs/config.html)

镜像：keking/kkfileview:v2.2.1

## https

修改 ```application.properties``` 文件中的 ```base.url``` ：

```text
base.url = https://fileview.iresp.cn
```

## 字体安装

如果遇到中文乱码，可能系统中缺失字体，kkview 提供了一个默认的字体库，如果还不够，就需要自行下载安装了：

```bash
# 下载
curl -O https://kkview.cn/resource/fonts.zip

# 解压并移动到字体库
unzip fonts.zip
mv zhFonts/ /usr/share/fonts

# Ubuntu 安装字体相关工具包
apt install -y ttf-mscorefonts-installer fontconfig

# CentOS 安装字体相关工具包
yum install -y fontconfig mkfontscale

# 重读并刷新字体
cd /usr/share/fonts
mkfontscale
mkfontdir

# 查看已安装的中文字体
fc-list :lang=zh
```

## 定时删除

为了防止文件泄露，需要定时删除缓存的文件，缓存文件在 ```/opt/kkFileView-2.2.1/file/``` 文件夹，所以创建定时任务执行：

```shell
crontab -e
*/5 * * * * rm -rf /opt/kkFileView-2.2.1/file/*
```
