# 默认值(填值规则)

通过填值规则设置默认值

::: warning 注意
此功能只支持在线使用，不支持代码生成。
:::

## 如何使用

> Online填值规则配置，需要通过${}包含着填值规则编码，例如：${order_num_rule}
>
> 下面有的截图是老图，请以${}用法为准。

在 ```页面属性``` 中，倒数第二列就是```填值规则```的输入框。

![screenshot_1652879229703-4352d86629f4ba963e200fae82a99474.png](/img/dev/online/form/comp/screenshot_1652879229703-4352d86629f4ba963e200fae82a99474.png)

输入框里填写的是填值规则的```规则Code```

如果你不希望生成的数据被修改，可以勾选```是否只读```

<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAACwCAMAAAB+bB1tAAAAdVBMVEUAAABZWVnExMTm5ub19fXo6OjZ2dn////q+P8YkP+urq6cnJz5+fl4eHjz8/OHh4cjlf/b29yLx/9vuv+SkpLj7PDa2tqn1P/v7++lpaXF4//l5eXg4+X39/fm8fdfsv/g4ODMzMyl1P+Xzf/S0tK1tbW9vb2X94BHAAABvElEQVRo3u2Y6XaCMBCFTWIzNSFBRHFp3bq9/yM2AYFgC2Ta0lNp7h89x/mYTCZzASeTXxAg9PcBpkghxQAEqSWjFmCp889oy6pLcO8MRjom6qxoB9DIwJRiesmA1ivqysCUDbMAAFfsR3bJrLiWskspRbv6EMlyX6i4fBHtgPkpkuU2eQB21zEZmNoq4QB9NbDYORC2aI8aRjAP/xKg7tTzor+8HrdPgPIw2KhI0moChQ8AWmpUBnCsKdb9ACeEm6nNC2HbyCeDsINB5ZvoABreKLip27mKVwYqI0q7Gme9rzAvC1DStM6PACUvBjjlplfUAJzw1gyFOxb7aaLEWWrjryfZagKOtRtD0HH8emmAaOtDmLgAfA+4QygH7hEKQADGCxywwCMWyLAAHy2wSrijZNULJJupo03SC/BpQzwAAfgqgD586ON9WzOdDW6Vh3DLCsDYAfTDengHCkAArPZY4AELZFiAjxZYz2eO5uteoBFviF5gdqUhgSMSSOGIAlKAhS+QOvE+wDOkdbwPsAB4quK9lmSIKt6v6B3skH3YDdlp9OFDH+/bmulscKvch1tWAMI/61cP6wPrHfma2XHYc4+1AAAAAElFTkSuQmCC">

## 如何定义填值规则

在 ```低代码开发```-->```系统编码规则``` 菜单中进行添加，详细添加方法请参考 填值规则（编码生成） 文档

## 如何在某个值变化的时候更新填值规则

### 方法一：JS增强实现

JS增强参考 online基础篇-JS增强(表单渲染)

![screenshot_1652879260757-aadac1e76d94e19a9ced9f0cc9691c03.png](/img/dev/online/form/comp/screenshot_1652879260757-aadac1e76d94e19a9ced9f0cc9691c03.png)

如上图，我的```order_rule```字段设置了填值规则，我想实现当```name```字段变化时重新生成填值规则，JS增强该如何编写呢？

#### 第一步

在Online表单开发页面，选中你要修改JS增强的那一条数据，并点击上方的JS增强按钮

![screenshot_1652879279060-4f873d971abf28fee0e211dbae3363f2.png](/img/dev/online/form/comp/screenshot_1652879279060-4f873d971abf28fee0e211dbae3363f2.png)

#### 第二步

##### 主表JS增强写法

![screenshot_1652879289901-eb535bbd8069cf6e7cbeba539197a0cd.png](/img/dev/online/form/comp/screenshot_1652879289901-eb535bbd8069cf6e7cbeba539197a0cd.png)

```js
 onlChange(){
    return {
        name() {
            that.executeMainFillRule()
        }
    }
}
```

##### 子表JS增强写法

::: tip 注意
子表的JS增强也写在主表里！
:::

![screenshot_1652879301717-1e831972a18858da88432e47160ab850.png](/img/dev/online/form/comp/screenshot_1652879301717-1e831972a18858da88432e47160ab850.png)

```js
test_fill_rule_sub_onlChange(){
  return {
    name(that, event) {
      // 重新触发子表的填值规则（仅当前更改的行）
      that.executeSubFillRule('test_fill_rule_sub', event)
    }
  }
}
```

### 方法二：参数监听值变化

你可以监听某个字段的值变化后，重新请求当前字段的填值规则并且重新生成，用于动态根据其他字段的值生成内容，具体操作如下：

在填值规则编码的后面加上```?```代表传参，当传入```onl_watch```时代表指定要监听的字段名称，多个用英文逗号分割。

如下图所示，监听了```name```和```age```的值变化，当用户在新增、编辑表单时，如果更改了```name```或```age```的值，就会重新触发当前字段的填值规则，重新生成数据。

> 参考：```${填值规则编码?onl_watch=字段1,字段2}```

![image_1727668747769-0150d38a2a72fc604937071a9e5eece0.png](/img/dev/online/form/comp/image_1727668747769-0150d38a2a72fc604937071a9e5eece0.png)

> 当然，除了```onl_watch```之外，你还可以写其他任意参数，会一并传到后台，前提是在编码规则中提前定义好参数，才会解析并覆盖。