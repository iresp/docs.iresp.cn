# 提交前置事件

> 说明：表单提交前事件可用于自定义数据校验，此方法必须返回一个promise对象

## 表单事件 beforeSubmit

```js
beforeSubmit(row) {
	return new Promise((resolve, reject)=>{
    //此处模拟等待时间，可能需要发起请求
    setTimeout(()=>{
      if(row.name == 'test'){
        // 当某个字段不满足要求的时候可以reject 
        reject('不能提交测试数据');
      }else{
        resolve();
      }
    },3000)
  })
}
```