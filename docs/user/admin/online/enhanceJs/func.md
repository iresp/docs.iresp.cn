# JS增强 hook写法

vue3版兼容vue2版的方法命令，同时支持新的hook写法，仅支持按钮事件和setup 支持import

## 按钮触发JS增强 - hook写法

- 如果想要在方法中使用import，请使用方法名：按钮编码_hook
- import有限制，需要提前配置好，详见下方文档import配置
- 函数内置对象context，获取当前页面的相关信息

## 按钮触发函数示例

1.自定义按钮编码 one

2.定义按钮对应JS方法

> 方法名：{按钮编码}_hook

```js
one_hook(){
   console.log('context内置对象', this);
   import {useMessage} from "@/hooks/useMessage"
   const {createMessage} = useMessage();
   function sayHi () {
      createMessage.success("这是代码里的提示：hello world!")
   }
   sayHi();  
}
```
