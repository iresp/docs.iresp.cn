# 表单加载事件

> 说明：当页面渲染完成，并且表单数据赋值后，触发loaded事件，此时可以设置表单的默认值或是修改已有的值

## 表单事件 loaded

```js
loaded() {
    this.$nextTick(() => {
        let text = '测试js增强设置默认值';
        if (this.isUpdate.value === true) {
            text = '测试js增强修改表单值';
        }
        this.setFieldsValue({
            name: text
        })
    })
}
```