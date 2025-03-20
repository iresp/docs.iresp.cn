# 字段显隐与禁用

## 场景

在某些表单中，需要根据一个表单字段的值，控制另外一个字段的显示与隐藏\禁用，常见的如问卷调查中，会根据性别或是年龄区别显示不同的问题。

### 调用api

| 语法                              | 说明                                          |
|---------------------------------|---------------------------------------------|
| this.sh.字段名=true/false          | 只控制字段的显示隐藏，设置为false表示当前字段隐藏，只是看不见，其实表单中依然存在 |
| this.sh.字段名_load=true/false     | 控制字段的加载与否，设置为false表示当前字段不加载                 |
| this.sh.字段名_disabled=true/false | 控制字段的禁用与否，设置为true表示当前字段禁用                   |

## 示例

### 示例1.监听性别字段的改变事件，控制年龄字段的展示与否

```js
onlChange() {
  return {
    sex(){
      if(event.value == '1'){
        this.sh.age_load = true
      }else{
        this.sh.age_load = false
      }
    }
  }
}
```

### 示例2.表单加载后，根据性别字段，控制年龄字段的展示与否

```js
loaded(){
  if(this.isUpdate.value === true){
    //编辑页面判断性别的值
    let data = this.getFieldsValue();
    if(data.sex == '1'){
      this.sh.age_load = true
    }else{
      this.sh.age_load = false
    }
  }else{
    // 新增页面显示
    this.sh.age_load = true
  }
}
```

### 示例3.监听性别字段的改变事件，控制年龄字段的禁用与否

```js
onlChange(){
  return {
    sex(){
      if(event.value == '0'){
        this.sh.age_disabled = true
      }else{
        this.sh.age_disabled = false;
      }
    }
  }
}
loaded(){
  if(this.isUpdate.value === true){
    //编辑页面判断性别的值
    let data = this.getFieldsValue();
    if(data.sex == '0'){
      this.sh.age_disabled = true
    }else{
      this.sh.age_disabled = false
    }
  }else{
    // 新增页面显示
    this.sh.age_disabled = false
  }
}
```