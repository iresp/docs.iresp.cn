# 表单值改变事件

> 说明：当表单控件值发生改变的时候触发，修改其他字段，适用于【单表和主表的字段】

## 表单值改变事件 onlChange

```js
 onlChange() {
    return {
        name() {
            let value = event.value
            let values = {'note': '我的名称是：' + value}
            this.triggleChangeValues(values)
        }
    }
}
```