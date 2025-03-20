# JS增强 http请求

### JS增强函数中支持下面四种请求方式：

| 请求类型   | 语法                       |
|--------|--------------------------|
| get    | getAction(url, param)    |
| post   | postAction(url, param)   |
| put    | putAction(url, param)    |
| delete | deleteAction(url, param) |

1.java代码：

```js
// 请求地址 /test/enhance/testRequest
@GetMapping("/testRequest")
public Result testRequest(){
   return Result.ok("请求成功!");
}
```

2.新增按钮

3.配置增强

```js
testRequest(){
  getAction('/test/enhance/testRequest').then(res=>{
    console.log(res)
  })
}
```

4.点击按钮，触发函数
