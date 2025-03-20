# JS实现下拉联动

### 1.添加三个字段，配置控件类型为：下拉框

### 2.定义js增强

```js
loaded(){
 this.changeOptions('pro',[
	  {value:'1',text:'安徽省'},
	  {value:'2',text:'河南省'}
     ]);
}

onlChange(){
  return {
    pro(){
      let value = event.value
      let cityOptions = []
      if(value=='2'){
      	cityOptions = [{text:'郑州市',value:'2-1'},{text:'开封市',value:'2-2'}]
      }else{
      	cityOptions = [{text:'合肥市',value:'1-1'},{text:'芜湖市',value:'1-2'}]
      }
      this.changeOptions('city',cityOptions);
    }
    city(){
      let value = event.value
      let areaOptions = []
      if(value=='1-1'){
      	areaOptions= [{text:'包河区',value:'1-1-1'},{text:'临江县',value:'1-1-2'}]
      }else{
      	areaOptions= [{text:'其他区',value:'xxx'},{text:'其他县',value:'xxxxx'}]
      }
      this.changeOptions('area',areaOptions);
    }
  }
}
```

> 这里需要注意的是：表单只是显示了3级联动的效果，但是实际存储的数据是下拉框数据对应的value，所以列表上显示的也是value的值，想要显示text的值，建议如下(不需要显示则忽略此建议)：
> 
> 1.可以将value的值和text保持一致
> 
> 2.或者通过java增强的查询增强，在后端定义java类处理列表页面数据的显示转换。