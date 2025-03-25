# 列表 API

> 用于JS增强list页面

## 属性

此处获取的属性都不是响应式的数据，即修改对应的属性值并不能触发页面的改变。

| 语法                    | 描述                  |
|-----------------------|---------------------|
| this.acceptHrefParams | 获取地址栏上的条件           |
| this.currentPage      | 获取当前页数，默认1          |
| this.currentTableName | 获取当前表名              |
| this.description      | 获取当前表描述             |
| this.hasChildrenField | 如果是树形列表，获取是否有子节点字段名 |
| this.ID               | 获取当前表的配置ID          |
| this.pageSize         | 获取当前每页条数，默认10       |
| this.queryParam       | 获取查询表单的查询条件         |
| this.selectedRowKeys  | 获取选中行的id的数组         |
| this.selectedRows     | 获取选中行的数据数组          |
| this.sortField        | 获取排序字段，默认‘id’       |
| this.sortType         | 获取排序类型，默认升序‘asc’    |
| this.total            | 获取总条数               |

## 方法

| 语法                       | 描述                                             |
|--------------------------|------------------------------------------------|
| this.loadData()          | 加载数据                                           |
| this.clearSelectedRow()  | 清除选中的行                                         |
| this.getLoadDataParams() | 获取所有的查询条件，返回一个对象，包括：查询表单，高级查询，地址栏参数，分页信息，排序信息等 |
| this.isTree()            | 判断当前表是不是树，返回布尔值                                |
| this.openCustomModal()   | 打开一个弹窗-参考 [Js增强打开自定义弹窗](/user/admin/online/enhance/js/pop)                 |

## 事件

| 语法           | 描述                        |
|--------------|---------------------------|
| beforeDelete | 点击操作列下的删除按钮触发，返回promise对象 |
| beforeEdit   | 点击操作列下的编辑按钮触发，返回promise对象 |
