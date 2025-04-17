# JS增强hook写法之定义setup

## 说明

表单增强支持定义setup，此处的setup和vue3中的setup没有关联，只是一个函数名称，表示当前函数在页面渲染的时候自动执行，而不是通过按钮点击触发。

## 代码

```js
setup() {
  import {useMessage} from "@/hooks/useMessage"
  const {createMessage} = useMessage();
  this.onlineFormValueChange((field, value, otherValues)=>{
     console.log(field, value);
     let note = `${field}发生改变,值为${value}`;
     // 调用信息提示的hook函数
     createMessage.success(note);
     // 设置表单值
     this.setFieldsValue({
       note: note
     });
  });
}
```