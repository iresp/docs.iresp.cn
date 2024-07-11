# 前端开发

前端主要使用 Vue3 进行 SPA 开发，无需考虑 SEO 优化。

## 开发环境准备

你需要安装以下环境工具软件：

- [Git](https://git-scm.com/)
- [Node.js](http://nodejs.org/)
- [Yarn1.x](https://yarnpkg.com/)
- [pnpm](https://www.pnpm.cn/)

::: warning
- [Node.js](http://nodejs.org/) 版本要求Node 14.18+ / 16+ 版本以上，不再支持 Node 12 / 13 / 15。
- 必须使用 [Yarn1.x](https://yarnpkg.com/)，否则依赖可能安装不上。
:::

## 启动项目

### 下载源码&启动

```shell
# 拉取代码
git clone https://git.iresp.cn/iresp/front-vue3.git

# 切换到项目目录
cd front-vue3

# 安装依赖
pnpm install

# 运行项目
pnpm dev
```

### 配置接口地址

如果要修改接口地址，在 `.env.development` 文件中修改：

```
#后台接口父地址(必填)
VITE_GLOB_API_URL=/iresp
# 跨域代理，您可以配置多个 ,请注意，没有换行符
VITE_PROXY = [["/iresp","http://localhost:8080/iresp"],["/upload","http://localhost:3300/upload"]]
#后台接口全路径地址(必填)
VITE_GLOB_DOMAIN_URL=http://localhost:8080/iresp
```

## 项目配置说明

::: tip
用于修改项目的配色、布局、缓存、多语言、组件默认配置
:::

### 环境变量配置

项目的环境变量配置位于项目根目录下的 [.env]、[.env.development]、[.env.production]

```
.env                # 在所有的环境中被载入
.env.local          # 在所有的环境中被载入，但会被 git 忽略
.env.[mode]         # 只在指定的模式中被载入
.env.[mode].local   # 只在指定的模式中被载入，但会被 git 忽略
```

::: tip
- 只有以 VITE_  开头的变量会被嵌入到客户端侧的包中，你可以项目代码中这样访问它们：```console.log(import.meta.env.VITE_PROT);```
- 以 VITE_GLOB_* 开头的的变量，在打包的时候，会被加入_app.config.js配置文件当中.
:::

### 配置项说明

| 模式                             | 配置文件         |
| -------------------------------- | ---------------- |
| 基础配置（开发、生产、测试）共用 | .env             |
| 开发环境                         | .env.development |
| 生产环境                         | .env.production  |
| 测试环境                         | .env.test        |



## 常见开发问题

### 1. 编辑、详情页面增加评论功能

![image-20240711145158163](/image-20240711145158163.png)

代码段，Modal.vue：

```javascript
<template>
  <a-modal 
      width="100%"
      wrap-class-name="full-modal" :title="title" :visible="visible" @ok="handleOk" :okButtonProps="{ class: { 'jee-hidden': disableSubmit } }" @cancel="handleCancel" cancelText="关闭">

    <a-row>
      
      <a-col :span="17"><BidProjectRequestForm ref="registerForm" @ok="submitCallback" :formDisabled="disableSubmit" :formBpm="false"></BidProjectRequestForm></a-col>
      <a-col :span="7"><CommentPanel :data-id="dataid" table-name="bid_project_request"/></a-col>
    </a-row>
  </a-modal>
</template>

<script lang="ts" setup>
  import { ref, nextTick, defineExpose } from 'vue';
  import BidProjectRequestForm from './BidProjectRequestForm.vue'
  //引入评论区组件
  import CommentPanel from '/@/components/jeecg/comment/CommentPanel.vue' 
  //定义数据id
  const dataid = ref('');

.......

  /**
   * 编辑
   * @param record
   */
  function edit(record) {
    //为数据id赋值
    dataid.value = record.id
    title.value = disableSubmit.value ? '详情' : '编辑';
    visible.value = true;
    nextTick(() => {
      registerForm.value.edit(record);
    });
  }
  
  
```



最后，检查Form.vue中的CSS部分，确认高度是否合适。

```css
<style lang="less" scoped>
  .antd-modal-form {
    height: 100% !important;
    overflow-y: auto;
    padding: 14px;
  }
</style>
```

::: tip

- 只有以 VITE_  开头的变量会被嵌入到客户端侧的包中，你可以项目代码中这样访问它们：```console.log(import.meta.env.VITE_PROT);```
- 以 VITE_GLOB_* 开头的的变量，在打包的时候，会被加入_app.config.js配置文件当中.
  :::