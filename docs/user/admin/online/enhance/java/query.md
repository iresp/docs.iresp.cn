# Java增强 查询

### 功能描述

> online列表查询数据 可以通过配置 java增强 修改最终需要展示的数据

### 定义java类

```java
import org.jeecg.modules.online.cgform.enhance.CgformEnhanceJavaListInter;
import org.jeecg.modules.online.config.exception.BusinessException;
import org.springframework.stereotype.Component;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Component("cgformEnhanceQueryDemo")
public class CgformEnhanceQueryDemo implements CgformEnhanceJavaListInter {

   @Override
   public void execute(String tableName, List<Map<String, Object>> data) throws BusinessException {
      List<VirtualDict> dict = virtualDictData();
      for (Map<String, Object> map : data) {
         Object db = map.get("province");
         if(db==null){
            continue;
         }
         String text = dict.stream()
               .filter(p -> db.toString().equals(p.getValue()))
               .map(VirtualDict::getText)
               .findAny()
               .orElse("");
         map.put("province",text);
      }
   }

   /**
    * 模拟字典数据
    * @return
    */
   private List<VirtualDict> virtualDictData(){
      List<VirtualDict> dict = new ArrayList<VirtualDict>();
      dict.add(new VirtualDict("bj","北京"));
      dict.add(new VirtualDict("sd","山东"));
      dict.add(new VirtualDict("ah","安徽"));
      return dict;
   }

   class VirtualDict {
      String value;
      String text;

      public VirtualDict(String value,String text){
         this.value = value;
         this.text = text;
      }

      public String getValue(){
         return value;
      }


      public String getText(){
         return text;
      }
   }
}
```

::: tip
注：java增强导出，需要实现的接口是：CgformEnhanceJavaListInter与常规的JAVA增强不同。
:::

### 增强配置

<img src="data:image/png;base64,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">

