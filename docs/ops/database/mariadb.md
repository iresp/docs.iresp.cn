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

## 备份策略

- 每周全量备份
- 每天增量备份
- 将备份上传到对象存储桶中

### 创建备份用户

需要创建 ```backup_user``` 备份用户，注意修改自己的密码：

```sql
CREATE USER 'backup_user'@'localhost' IDENTIFIED BY 'your_password';
GRANT RELOAD, PROCESS, LOCK TABLES, REPLICATION CLIENT ON *.* TO 'backup_user'@'localhost';
FLUSH PRIVILEGES;
```

### 备份目录结构

建议创建以下目录结构：

```text
/backups/mariadb/
├── full/       # 全量备份
├── incremental/ # 增量备份
└── logs/       # 备份日志
```

### 备份脚本

#### 全量备份脚本 (```mariadb_full_backup.sh```)

```bash
#!/bin/bash

# 配置变量
BACKUP_DIR="/backups/mariadb"
FULL_DIR="$BACKUP_DIR/full"
LOG_DIR="$BACKUP_DIR/logs"
DATE=$(date +%Y%m%d)
BACKUP_FILE="full_$DATE.tar.gz"
LOG_FILE="$LOG_DIR/full_$DATE.log"

# 创建目录
mkdir -p $FULL_DIR $LOG_DIR

# 执行全量备份
echo "开始全量备份 - $(date)" > $LOG_FILE
/usr/local/mariadb/bin/mariabackup --backup \
    --target-dir=$FULL_DIR/$DATE \
    --user=backup_user \
    --password=your_password \
    >> $LOG_FILE 2>&1

# 准备备份
echo "准备备份 - $(date)" >> $LOG_FILE
/usr/local/mariadb/bin/mariabackup --prepare \
    --target-dir=$FULL_DIR/$DATE \
    >> $LOG_FILE 2>&1

# 压缩备份
echo "压缩备份 - $(date)" >> $LOG_FILE
tar -czvf $FULL_DIR/$BACKUP_FILE -C $FULL_DIR $DATE >> $LOG_FILE 2>&1

# 上传到S3
echo "上传到S3 - $(date)" >> $LOG_FILE
aws s3 cp $FULL_DIR/$BACKUP_FILE s3://your-bucket-name/mariadb/full/$BACKUP_FILE >> $LOG_FILE 2>&1

# 清理旧的本地备份（保留最近4周）
find $FULL_DIR -name "full_*.tar.gz" -mtime +28 -delete >> $LOG_FILE 2>&1

echo "全量备份完成 - $(date)" >> $LOG_FILE
```

#### 增量备份脚本 (```v```)

```bash
#!/bin/bash

# 配置变量
BACKUP_DIR="/backups/mariadb"
FULL_DIR="$BACKUP_DIR/full"
INC_DIR="$BACKUP_DIR/incremental"
LOG_DIR="$BACKUP_DIR/logs"
DATE=$(date +%Y%m%d)
YESTERDAY=$(date -d "yesterday" +%Y%m%d)
BACKUP_FILE="inc_$DATE.tar.gz"
LOG_FILE="$LOG_DIR/inc_$DATE.log"

# 查找最新的全量备份
LATEST_FULL=$(ls -d $FULL_DIR/*/ | sort | tail -n 1)

# 如果没有全量备份，退出
if [ -z "$LATEST_FULL" ]; then
    echo "没有找到全量备份，请先运行全量备份" > $LOG_FILE
    exit 1
fi

# 创建目录
mkdir -p $INC_DIR/$DATE $LOG_DIR

# 执行增量备份
echo "开始增量备份 - $(date)" > $LOG_FILE
/usr/local/mariadb/bin/mariabackup --backup \
    --target-dir=$INC_DIR/$DATE \
    --incremental-basedir=$LATEST_FULL \
    --user=backup_user \
    --password=your_password \
    >> $LOG_FILE 2>&1

# 压缩备份
echo "压缩备份 - $(date)" >> $LOG_FILE
tar -czvf $INC_DIR/$BACKUP_FILE -C $INC_DIR $DATE >> $LOG_FILE 2>&1

# 清理原始备份目录
rm -rf $INC_DIR/$DATE

# 上传到S3
echo "上传到S3 - $(date)" >> $LOG_FILE
aws s3 cp $INC_DIR/$BACKUP_FILE s3://your-bucket-name/mariadb/incremental/$BACKUP_FILE >> $LOG_FILE 2>&1

# 清理旧的本地增量备份（保留最近14天）
find $INC_DIR -name "inc_*.tar.gz" -mtime +14 -delete >> $LOG_FILE 2>&1

echo "增量备份完成 - $(date)" >> $LOG_FILE
```

### 定时任务

```text
# 每周日凌晨2点执行全量备份
0 2 * * 0 /opt/mariadb_full_backup.sh

# 每天凌晨1点执行增量备份（周日除外，因为周日会执行全量备份）
0 1 * * 1-6 /opt/mariadb_incremental_backup.sh
```

## 恢复数据库

从对象存储下载对应的备份文件，并解压

```bash
#准备现有备份以还原到 MariaDB 服务器
mariabackup --prepare --target-dir=/backup/base

#合并第1次增量备份到完全备份
mariabackup --prepare --target-dir=/backup/base --incremental-dir=/backup/inc1

#合并第2次增量备份到完全备份
mariabackup --prepare --target-dir=/backup/base --incremental-dir=/backup/inc2

#注意数据库目录必须为空，MySQL服务不能启动 
mariabackup --copy-back --target-dir=/backup/base

#还原属性
chown -R mysql:mysql /data/mysql

#重启数据库服务
systemctl restart mysqld
```
