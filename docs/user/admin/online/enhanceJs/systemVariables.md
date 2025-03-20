# 使用系统变量

获取系统上下文变量，比如当前登录用户信息（登录人账号、登录部门、登录租户等）

1.配置按钮

> 按钮编码 one

2.编写js增强

> 方法名：{按钮编码}_hook。

```js
one_hook(){
   import {useUserStore} from "@/hooks/useUserStore";
   const userStore = useUserStore();
  
   const userInfo = userStore.getUserInfo;
   const tenantId = userStore.getTenant;
   const shareTenantId = userStore.getTenant;
   const roleList = userStore.getRoleList;
   const dictItems = userStore.dictItems;
   const token = userStore.getToken;
   console.log("用户信息", userInfo)
   console.log("租户id", tenantId)
   console.log("分享租户ID", shareTenantId)
   console.log("角色列表", roleList)
   console.log("系统字典", dictItems)
   console.log("token", token)
}
```

> js 增强中的useUserStore 对应这源码中的 src/store/modules/user.ts 中的 useUserStore。
