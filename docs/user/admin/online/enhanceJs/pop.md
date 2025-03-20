# JS增强触发弹窗

> JS增强触发弹出的表单可以是 online表单 也可以是 自定义开发的表单。

### 使用说明

- 支持按钮 ：按钮样式[button]+按钮类型[js] 或者 按钮样式[link]+按钮类型[js]
- js增强弹框方法：this.openCustomModal，方法参数如下表

| 参数名           | 类型     | 描述                                                                       |
|---------------|--------|--------------------------------------------------------------------------|
| title         | string | 弹框标题，默认 '自定义弹框'                                                          |
| width         | int    | 弹框宽度，默认600                                                               |
| row           | object | 操作的数据，如果是button按钮，不设置则默认为当前选中行的数据，如果是link按钮，需要传入函数自带参数row                |
| formComponent | string | 自定义弹框内表单组件地址，设置的格式和系统菜单组件值的配置一样，如果没有设置，则弹框默认打开的是当前表单                     |
| requestUrl    | string | 表单提交地址，如不设置，则默认表单提交地址为原online编辑地址，formComponent未设置时生效                    |
| hide          | array  | 隐藏的表单控件名， formComponent未设置时生效，可以使原表单的某些控件隐藏                              |
| show          | array  | 显示的表单控件名， formComponent未设置时生效 ，如果设置，hide参数失效(show与hide互斥)，且只有该数组内的控件才会显示 |

## 具体场景

### 场景一、button按钮触发弹窗online表单

1.添加按钮：按钮样式[button]，按钮类型[js]，按钮编码test1对应增强函数名

2.添加 list页面的js增强

```js
test1(){
  this.openCustomModal({
    title: '测试自定义弹框1',
    width: 800
  });
}
```

### 场景二、link按钮触发弹窗online表单，并控制字段显隐

1.添加按钮：按钮样式[link]，按钮类型[js]，按钮编码test2对应增强函数名

2.添加 list页面的js增强

```js
test2(row){
  this.openCustomModal({
    row: row,
    title: '测试自定义弹框2',
    width: 800,
    hide: ['age', 'sex']
  });
}
```

> link按钮和button的区别在于，link按钮需要手动传入参数:row，button按钮默认不需要传入，但是操作的时候需要先选中数据。
