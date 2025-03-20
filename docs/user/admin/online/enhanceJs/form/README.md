# JS 增强（表单）

## 属性

此处的属性获取的大多都是ref对象，需要手动调用```.value```进行获取/修改值，如```this.loading```本身返回的是一个ref对象，
```this.loading.value```才是一个布尔值

| 语法                  | 描述                                    |
|---------------------|---------------------------------------|
| this.loading        | 是否加载中，返回的是一个ref对象                     |
| this.isUpdate       | 是否是编辑页面，返回的是一个ref对象                   |
| this.onlineFormRef  | 主表/单表表单的ref对象                         |
| this.refMap         | 子表表单/子表table的ref对象map，key为子表表名        |
| this.subActiveKey   | 子表的激活的tab索引值对应的字符串，从‘0’开始，返回的是一个ref对象 |
| this.sh             | 单表/主表字段的显示隐藏状态                        |
| this.submitFlowFlag | 是否提交表单后自动提交流程，返回一个ref对象               |
| this.subFormHeight  | 一对一子表表单的高度，不需要设置，返回一个ref对象            |
| this.subTableHeight | 一对多子表table的高度，不需要设置，返回一个ref对象         |
| this.tableName      | 当前表名，返回的是一个ref对象                      |
| this.$nextTick      | 调用的是vue3的nextTick                     |

## 方法

| 语法                                                   | 参数说明                                                                                        | 描述                                                                                     |
|------------------------------------------------------|---------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| this.addSubRows(tableName, rows)                     | tableName:表名；rows：数组数据，如```[{name:'',age:''},{name:'',age:''}]```                           | 往一对多子表table里添加数据                                                                       |
| this.changeOptions(field, options)                   | field:字段名；options:下拉项数组，如```[{value:'1',label:'男'},{value:'2',label:'女'}]```                | 改变单表/主笔 下拉控件的下拉选项                                                                      |
| this.clearSubRows(tableName)                         | tableName：表名                                                                                | 清空一对多子表table的数据                                                                        |
| this.clearThenAddRows(tableName, rows)               | tableName：表名；rows数据数组，如```[{name:'',age:''},{name:'',age:''}]```                            | 先清空一对多子表table的数据，再往里添加数据                                                               |
| this.getFieldsValue()                                | -                                                                                           | 获取主表/单表 所有字段的值                                                                         |
| this.getSubTableInstance(tableName)                  | tableName:子表的表名                                                                             | 获取子表的实例对象，这个对象可以调用子表table的方法                                                           |
| this.setFieldsValue(row)                             | row:表单数据对象，如：{name:'',age:''}                                                               | 设置主表/单表 字段的值                                                                           |
| this.triggleChangeValues(values,id,target)           | values:数据对象，如{name:'',age:''}；id:一对多子表所在行的数据id；target：一对多子表table的对象                         | 改变单表/主表/子表 字段的值，一般用于change事件，其中id，target需要通过change事件的内置参数获取，如果不传id，target的值，则改变的是主表的字段 |
| this.triggleChangeValue(field, value)                | field:表单字段名；value:值                                                                         | 设置单表/主表 字段的值                                                                           |
| this.onlineFormValueChange(field, value, otherValus) | field:字段名； value:字段值；otherValus: 其他关联的表单字段值                                                 | 定义后，当表单值改变的时候会触发该方法（因js增强hook方式不支持原来的onlChange，所以定义此方法）                                |
| changeSubFormbleOptions(tableName，field，options)     | tableName:子表名； field:字段名；options:下拉项数组，如```[{value:'1',label:'男'},{value:'2',label:'女'}]``` | 改变一对一子表下拉框options                                                                      |
| changeSubTableOptions(tableName，field，options)       | tableName:子表名； field:字段名；options:下拉项数组，如```[{value:'1',label:'男'},{value:'2',label:'女'}]``` | 改变一对多子表下拉框options                                                                      |
| this.submitFormAndFlow()                             | -                                                                                           | 表单提交且发起流程                                                                              |

## 事件

| 语法            | 描述        |
|---------------|-----------|
| beforeSubmit  | 表单提交前事件   |
| loaded        | 表单渲染完成后事件 |
| onlChange     | 表单值改变事件   |
| 子表名_onlChange | 子表控制值改变事件 |

## 禁用

动态禁用某个字段

```js
this.updateSchema({field: 'name', componentProps: {disabled: true}})
```
