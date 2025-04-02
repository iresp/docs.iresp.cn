# MariaDB

[MariaDB](https://mariadb.org/) 开源的数据库，完全兼容MySQL。

## 手动安装

数据库下载***长期支持版***

[https://mariadb.org/download/?t=mariadb&p=mariadb&r=10.6.21&os=Linux&cpu=x86_64&i=systemd&mirror=tuna](https://mariadb.org/download/?t=mariadb&p=mariadb&r=10.6.21&os=Linux&cpu=x86_64&i=systemd&mirror=tuna)

```bash
cd /opt/
wget https://mirrors.tuna.tsinghua.edu.cn/mariadb///mariadb-10.6.21/bintar-linux-systemd-x86_64/mariadb-10.6.21-linux-systemd-x86_64.tar.gz
tar -xvzf mariadb-10.6.21-linux-systemd-x86_64.tar.gz
mv mariadb-10.6.21-linux-systemd-x86_64 mariadb
mv mariadb /usr/local/
sudo groupadd mysql
sudo useradd -r -g mysql -s /bin/false mysql
cd /usr/local/mariadb
mkdir -p /usr/local/mariadb/{data,log,pid}
chown -R mysql:mysql /usr/local/mariadb
chmod 750 /usr/local/mariadb
```

### 配置文件

```bash
vim /etc/my.cnf
[mysqld]
lower_case_table_names=1
default-time-zone = '+08:00'
basedir=/usr/local/mariadb
datadir=/usr/local/mariadb/data
socket=/usr/local/mariadb/mariadb.sock
pid-file=/usr/local/mariadb/pid/mariadb.pid
log-error=/usr/local/mariadb/log/mariadb.log
user=mysql
```

### 初始化数据库

```bash
sudo /usr/local/mariadb/scripts/mysql_install_db --user=mysql --basedir=/usr/local/mariadb --datadir=/usr/local/mariadb/data
```

### 设置 Systemd 服务

```bash
vim /etc/systemd/system/mariadb.service
[Unit]
Description=MariaDB 10.6.21 database server
After=network.target

[Service]
User=mysql
Group=mysql
ExecStart=/usr/local/mariadb/bin/mysqld --defaults-file=/etc/my.cnf
Restart=always

[Install]
WantedBy=multi-user.target

# 启动 MariaDB
sudo systemctl daemon-reload
sudo systemctl enable mariadb
sudo systemctl start mariadb
sudo systemctl status mariadb
```

### 设置 root 密码

```bash
sudo /usr/local/mariadb/bin/mysql_secure_installation --basedir=/usr/local/mariadb --socket=/usr/local/mariadb/mariadb.sock
```
