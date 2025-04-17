# SQL增强

### 功能简述

通过增强SQL，可以关联修改业务数据

> 注意：
>
> 1.这里选择的按钮一定要是按钮类型是action的,因为js类型的是走的js增强，而按钮样式未作限制
>
> 2.这边我将按钮点击后触发的sql定义为,修改demo表的性别字段为1
>
> 3.#{id}是一种规范,id可以是任何当前表中的字段名
>
> 4.如果数据库定义的字段是数值类型的，这边是不需要加单引号('')的
>
> 5.sqlServer数据库插入修改sql遇到中文乱码时，需在sql前加N
>
> 例1：insert into test_one2 (id,username,sex) values('1',N'大王巡山','1')
>
> 例2：update test_one2 set name=N'张三' where id=N'#{id}'

## SQL增强中系统变量

| 变量名称             | 变量释义                   |
|------------------|------------------------|
| #{sys_user_code} | 登陆用户的账号名               |
| #{sys_org_code}  | 登陆用户所属机构编码             |
| #{sys_date}      | 系统日期"yyyy-MM-dd"       |
| #{sys_time}      | 系统时间"yyyy-MM-dd HH:mm" |
| #{sys_user_name} | 登录用户真实姓名               |

示例SQL：```update demo set content= '#{sys_user_name}' where id = '#{id}'``` (设置个人简介的内容为当前用户真实姓名)

### 注意：

上述增强sql中取表单的值（如```#{id}```）和取系统变量的值(如```#{sys_user_code}```)用的都是#,如果两者的参数名相同，以表单的值为准，若表单中未取到,会从系统变量中取值
