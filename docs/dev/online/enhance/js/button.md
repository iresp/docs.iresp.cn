# 自定义按钮触发JS增强

> 自定义按钮触发JS增强，按钮类型需要设置为【JS】。具体有以下3种情况：

## 列表button按钮

新增按钮，编码为 one

定义JS增强，函数名与编码保持一致

```js
one(){
    console.log(this.selectRowKeys);
}
```

## 列表link按钮

新增按钮，编码为 three

定义JS增强，函数名与编码保持一致，且有一个默认的参数row，注意：参数名必须写row

```js
three(row){
    console.log("当前数据",row);
}
```

## 表单按钮

新增按钮，编码为 four

定义JS增强，函数名与编码保持一致

```js
four(){
    this.triggleChangeValue('name','测试表单api')
}
```