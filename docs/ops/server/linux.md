# Linux 服务器运维

## Ubuntu

下载系统：[https://ubuntu.com/download/server](https://ubuntu.com/download/server)

### 初始化配置

```bash
# 设置阿里云源（可选：根据不用云厂商进行设置）
cp /etc/apt/sources.list /etc/apt/sources.list.bak
vim /etc/apt/sources.list
deb http://mirrors.aliyun.com/ubuntu/ trusty main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ trusty-security main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ trusty-updates main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ trusty-proposed main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ trusty-backports main restricted universe multiverse
#deb-src http://mirrors.aliyun.com/ubuntu/ trusty main restricted universe multiverse
#deb-src http://mirrors.aliyun.com/ubuntu/ trusty-security main restricted universe multiverse
#deb-src http://mirrors.aliyun.com/ubuntu/ trusty-updates main restricted universe multiverse
#deb-src http://mirrors.aliyun.com/ubuntu/ trusty-proposed main restricted universe multiverse
#deb-src http://mirrors.aliyun.com/ubuntu/ trusty-backports main restricted universe multiverse
# 更新系统
apt update
# 如果签名报错，请执行：
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 3B4FE6ACC0B21F32
apt upgrade
# 添加用户
sudo adduser renfei
# 添加sudo权限
sudo usermod -G sudo renfei

vim /etc/ssh/sshd_config
# 配置禁止密码登录
PasswordAuthentication no
# 禁止 root 远程登录
PermitRootLogin no
# 允许 SSH 仅使用密钥认证
PubkeyAuthentication yes
# SSH 保持连接
ClientAliveInterval 60
ClientAliveCountMax 1
# 重启 SSH 服务
systemctl restart ssh
```

设置密钥，请上传自己的密钥：

```bash
# 自动设置密钥
curl -fsSL https://cdn.renfei.net/public/ssh/sshkey.sh | sh

# 手动设置密钥
mkdir -p ~/.ssh;
chmod 700 ~/.ssh;
echo $(curl -s "https://cdn.renfei.net/public/ssh/id_rsa.pub") >> ~/.ssh/authorized_keys;
chmod 600 ~/.ssh/authorized_keys;
```

### 设置备份用户

```bash
# 添加用户
sudo adduser backup_user
# 限制登录
sudo usermod -s /usr/sbin/nologin backup_user
# 编辑Key
vim /home/backup_user/.ssh/authorized_keys
command="/bin/false",no-agent-forwarding,no-port-forwarding,no-pty,no-user-rc,no-X11-forwarding ssh-rsa AAAAB3Nza...（用户公钥）
```

#### 配置 SWAP

```bash
# 查看当前 Swap 状态
swapon --show
free -h
# 创建 Swap 文件
dd if=/dev/zero of=/swap bs=1M count=4096
# 设置权限
chmod 600 /swap

# 格式化为 Swap 格式
mkswap /swap

# 启用 Swap
swapon /swap

# 开机自动挂载 Swap
vim /etc/fstab
/swap none swap sw 0 0

# 调整 Swap 相关参数
# 云服务器磁盘性能较差，建议尽量减少 Swap 使用
echo "vm.swappiness=10" | sudo tee -a /etc/sysctl.conf
echo "vm.vfs_cache_pressure=50" | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```

#### 调整最大文件打开数

```bash
# 允许所有用户无限制文件打开数
vim /etc/security/limits.conf
* soft nofile unlimited
* hard nofile unlimited

# 有些 Ubuntu 版本使用 /etc/security/limits.d/ 进行管理，为确保生效，执行：
echo "* soft nofile unlimited" | sudo tee -a /etc/security/limits.d/custom_limits.conf
echo "* hard nofile unlimited" | sudo tee -a /etc/security/limits.d/custom_limits.conf

# Ubuntu 现代版本（使用 systemd）需要修改 system.conf 和 user.conf
vim /etc/systemd/system.conf
DefaultLimitNOFILE=infinity
DefaultLimitNOFILESoft=infinity

vim /etc/systemd/user.conf
DefaultLimitNOFILE=infinity
DefaultLimitNOFILESoft=infinity

# 编辑 PAM 配置 添加：
vim /etc/pam.d/common-session
session required pam_limits.so

vim /etc/pam.d/common-session-noninteractive
session required pam_limits.so
```

#### 固定IP配置

Netplan是最新版 Ubuntu 的默认网络管理工具。Netplan 的配置文件使用 YAML 编写，扩展名为.yaml。

> 注意：要小心配置文件中的空格，因为它们是语法的一部分。如果缩进不对，文件将无法正常读取。

```bash
# 查看当前网络配置
ip a
# 查看上面命令输出的网卡名称，例如：eth0
cd /etc/netplan
# 查看文件夹下面的文件名称，并编辑
ll /etc/netplan
# 请编辑你的文件，我这里文件名是例子01-network-manager-all.yaml
vim 01-network-manager-all.yaml
network:
 version: 2
 renderer: NetworkManager
 ethernets:
   eth0: #注意这里改成你自己的网卡名
     dhcp4: no
     addresses: [172.23.207.254/20]
     gateway4: 192.168.1.1
     nameservers:
         addresses: [8.8.8.8,8.8.8.4]
sudo netplan apply
```

### Docker 安装

#### 在线安装

```bash
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

```bash
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

#### 离线安装

- Go to [https://download.docker.com/linux/ubuntu/dists/](https://download.docker.com/linux/ubuntu/dists/)
- Select your Ubuntu version in the list.
- Go to pool/stable/ and select the applicable architecture (amd64, armhf, arm64, or s390x).
- Download the following deb files for the Docker Engine, CLI, containerd, and Docker Compose packages:
  - containerd.io_```<version>```_```<arch>```.deb
  - docker-ce_```<version>```_```<arch>```.deb
  - docker-ce-cli_```<version>```_```<arch>```.deb
  - docker-buildx-plugin_```<version>```_```<arch>```.deb
  - docker-compose-plugin_```<version>```_```<arch>```.deb
- Install the .deb packages. Update the paths in the following example to where you downloaded the Docker packages.

```bash
sudo dpkg -i ./containerd.io_<version>_<arch>.deb \
  ./docker-ce_<version>_<arch>.deb \
  ./docker-ce-cli_<version>_<arch>.deb \
  ./docker-buildx-plugin_<version>_<arch>.deb \
  ./docker-compose-plugin_<version>_<arch>.deb
```
- Verify that the installation is successful by running the hello-world image:

```bash
sudo service docker start
sudo docker run hello-world
```

#### Portainer CE 安装

```bash
docker pull portainer/portainer-ce:2.21.4
docker volume create portainer_data
docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:2.21.4
```

登录：[https://localhost:9443](https://localhost:9443)

### JDK 安装

下载对应的版本：[https://adoptium.net/zh-CN/temurin/releases/](https://adoptium.net/zh-CN/temurin/releases/)