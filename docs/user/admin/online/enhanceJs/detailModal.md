# 弹窗js增强

仅支持以下Api，使用方法同表单Api

| 方法/事件                    | 描述         |
|--------------------------|------------|
| loaded                   | 加载事件       |
| this.setFieldsValue(row) | 设置值        |
| this.getFieldsValue()    | 获取值        |
| this.sh.字段名=true/false   | 只控制字段的显示隐藏 |

### 示例

```js
loaded(){
  let record = this.getFieldsValue();
  if(record.name === '张三') {
     this.setFieldsValue({
       name: '张*'
    })
  }
  if(record.name === '李四') {
     this.sh.age = false;
  }
}
```
