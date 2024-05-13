# Workstation

::: warning
此设备仅用于开发测试使用，禁止用于生产环境；此设备不托管在机房环境中，无法保证网络与电力的可用性。
:::

开发工作站，此设备位于中国办公室：中国北京市朝阳区，用于开发测试使用。

`此设备具有GPU`如果你需要使用GPU，可使用此设备。

## 配置信息

在开始之前，请先确认此设备的性能可以满足你的需求。

| 配置项 | 配置值                            | 数量 |
| ------ | --------------------------------- | ---- |
| 系统   | Proxmox Virtual Environment 8.1.4 | 1    |
| 架构   | x86_64                            | 2    |
| 主板   | HUANANZHI X99-F8D PLUS            | 1    |
| CPU    | Intel Xeon E5-2660 v3             | 2    |
| 内存   | KINGBANK DDR4 3200 16G            | 4    |
| GPU    | NVIDIA GeForce RTX 2080Ti 22G     | 2    |
| 硬盘   | SAMSUNG NVMe PCIe3.0*4 980 1TB    | 1    |
| 硬盘   | WD40EZAX 4TB                      | 1    |
| 电源   | Thermalright 1200W TR-TG1200      | 1    |

### 虚拟化配置架构

- Proxmox Virtual Environment：宿主机
  - LXC
    - Nginx：用于反向代理
    - Docker：用于运行容器
      - mariadb:10.4
      - redis:7.2.4
      - keking/kkfileview:v2.2.1
      - flowable/flowable-ui:6.8.0
    - GPUServer：用于运行RAG等应用
    - vue：用于前端定时打包更新发布预览
  - KVM
    - Windows10：用于远程桌面
      - 向日葵远程桌面
