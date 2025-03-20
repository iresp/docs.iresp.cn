# 子表单值改变事件

> 说明：当子表单控件值发生改变的时候触发，修改子表的其他字段。

## 子表名_onlChange

### 示例1、一对多子表字段之间的关联改变

```js
test_sub_many_onlChange() {
    return {
        wenben() {
            let value = event.value
            let row = {'shuoming': '测试一对多值改变：' + value}
            this.triggleChangeValues(row, event.row.id, event.target)
        }
    }
}
```

> 1.test_sub_many_onlChange命名规则：子表名_onlChange
>
> 2.wenben为需要监听控件值改变的字段名，return里面可以写多个
>
> 3.event内置对象,属性描述如下

| 属性     | 描述                                           |
|--------|----------------------------------------------|
| type   | 当前操作控件的类型                                    |
| row    | 当前行的数据,通过row.id可以获取当前行的id值                   |
| column | 当前列的配置信息,通过column.key 获取当前字段名称               |
| value  | 当前控件的值                                       |
| target | 当前控件所在table的target对象,调用triggleChangeValues用到 |

### 示例2、一对一从表字段之间的关联改变

```js
test_sub_one_onlChange() {
    return {
        wenben() {
            let value = event.value
            let row = {'shuoming': '这是一个说明：' + value}
            this.triggleChangeValues(row, event.row.id, event.target)
        }
    }
}
```

> 1.一对多和一对一的值改变事件在语法格式上完全一致
>
> 2.区别在于内置的event对象，但是这不影响使用，以下是一对一子表的event对象说明

| 属性     | 描述                             |
|--------|--------------------------------|
| row    | 当前子表表单数据                       |
| column | 当前列的配置信息,通过column.key 获取当前字段名称 |
| value  | 当前控件的值                         |
| target | 当前子表表单对象，可以直接调用子表表单相关方法        |

> 主题模板使用ERP主题时，子表的表单值改变事件无法通过子表名_onlChange监听。