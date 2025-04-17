# 子改主单值改变事件

> 说明：当子表的值发生改变的时候，关联修改主表的字段值。

## 子表名_onlChange

### 示例场景：订单明细表(子表)商品数量/单价发生改变时，订单表(主表)的总金额跟着变。

1.建立订单表(主表)jee_order

| 字段名      | 备注    |
|----------|-------|
| order_no | 订单编码  |
| money    | 订单总金额 |
| note     | 订单描述  |

2.建立明细表(子表)jee_detail

| 字段名   | 备注   |
|-------|------|
| name  | 商品名称 |
| price | 单价   |
| num   | 数量   |

```js
jee_detail_onlChange(){
  return {
    price(){
      let total = 0
	  // 使用getSubTableInstance方法替换原有的refmap取值
      this.getSubTableInstance('jee_detail').getValues((err,values)=>{
        if(values && values.length>0){
        for(let item of values){
          total+=item.price*item.num;
          }
        }
        this.triggleChangeValues({money: total})
      }) 
    },
    num(){
      let total = 0
	  // 使用getSubTableInstance方法替换原有的refmap取值
      this.getSubTableInstance('jee_detail').getValues((err,values)=>{
        if(values && values.length>0){
        for(let item of values){
          total+=item.price*item.num;
          }
        }
        this.triggleChangeValues({money: total})
      }) 
    }
  }
}
```

> 1.获取子表表单或table的对象使用api：this.getSubTableInstance('jee_detail')，jee_detail为表名
>
> 2.this.getSubTableInstance('jee_detail').getValues获取一对多子表的所有数据
>
> 3.如果想获取一对一的表单所有值，使用：this.getSubTableInstance('jee_detail').getFieldsValue()
