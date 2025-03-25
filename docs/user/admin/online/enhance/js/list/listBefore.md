# 列操作前置事件

> 列表操作列 前置事件 ：列表操作列下有两个常用按钮：【编辑】/【删除】，点击按钮会触发此事件，事件函数必须返回一个promise对象。

## 编辑前置事件 beforeEdit

```js
beforeEdit(row){
	return new Promise((resolve, reject) => {
  	if(row.name == 'test'){
    	reject('不可编辑test数据');
    }else{
    	resolve();
    }
  })     
}
```

## 删除前置事件 beforeDelete

```js
beforeDelete(row){
	return new Promise((resolve, reject) => {
  	if(row.name == 'test'){
    	reject('不可删除test数据');
    }else{
    	resolve();
    }
  })     
}
```

> 注意：
> 
> 事件函数均有一参数，row，指的是当前操作的行数据。
> 
> 事件函数必须返回一个promise对象，支持继续操作执行resolve()；拒绝操作执行reject(msg)，并设置提示信息！
