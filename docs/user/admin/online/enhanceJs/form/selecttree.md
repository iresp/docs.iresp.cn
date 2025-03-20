# JS控制下拉树数据

使用场景：当表单值改变的时候，获取表单值，后台根据该表单值重新加载树的数据。

JS 增强：

```js
loaded(){
  this.$nextTick(()=>{
    let url = '/test/tree/loadTreeData';
	//获取当前wenben输入框的值
    let value = event.value;
    let params = {wenben: value};
	//此处的cust_tree为下拉树的字段名
    this.updateSchema({ field: 'cust_tree', componentProps: { url: url, params: params } })

  })
}

onlChange(){
return {
  wenben(){
    let url = '/test/tree/loadTreeData';
	//获取当前wenben输入框的值
    let value = event.value;
    let params = {wenben: value};
	//此处的cust_tree为下拉树的字段名
    this.updateSchema({ field: 'cust_tree', componentProps: { url: url, params: params } })
  }
 }
}
```

Java 请求定义：

```java
@GetMapping("/loadTreeData")
public Result<List<TreeSelectModel>> loadTreeData(HttpServletRequest request) {
 Result<List<TreeSelectModel>> result = new Result<List<TreeSelectModel>>();

 // 此处模拟json，见下方test.json， 实际根据参数自行查询
 String jsonData = oConvertUtils.readStatic("classpath:static/test/test.json");
 JSONObject json = JSONObject.parseObject(jsonData);
 JSONArray array = json.getJSONArray("data");
 List<TreeSelectModel> list = array.toJavaList(TreeSelectModel.class);

 result.setSuccess(true);
 result.setResult(list);
 return result;
}
```

test.json：

```json
{
  "data": [
    {
      "title": "安徽省",
      "value": "1",
      "leaf": false,
      "children": [
        {
          "title": "合肥市",
          "value": "11",
          "leaf": false,
          "children": [
            {
              "title": "A区",  "value": "111", "leaf": true
            },
            {
              "title": "B区",  "value": "112", "leaf": true
            },
            {
              "title": "C区",  "value": "113", "leaf": true
            }
          ]
        },
        {
          "title": "芜湖市",
          "value": "12",
          "leaf": false,
          "children": [
            {
              "title": "D区",  "value": "121", "leaf": true
            },
            {
              "title": "E区",  "value": "122", "leaf": true
            }
          ]
        }
      ]
    },
    {
      "title": "河南省",
      "value": "2",
      "leaf": false,
      "children": [
        {
          "title": "郑州市",
          "value": "21",
          "leaf": false,
          "children": [
            {
              "title": "X区",  "value": "211", "leaf": true
            },
            {
              "title": "Y区",  "value": "212", "leaf": true
            },
            {
              "title": "Z区",  "value": "213", "leaf": true
            }
          ]
        },
        {
          "title": "洛阳市",
          "value": "22",
          "leaf": false,
          "children": [
            {
              "title": "O区",  "value": "221", "leaf": true
            },
            {
              "title": "P区",  "value": "222", "leaf": true
            }
          ]
        }
      ]
    }
  ]
}
```

> 注意:
> 
> 如果自定义请求的数据和online控件配置的树的数据不是一张表，那么通过此方法录入的数据，不会在列表上自动显示具体的文本，需要通过java增强(查询)来实现列表数据显示的转换。