module.exports = {
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      selectText: '选择语言',
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      label: '简体中文',
      title: 'iRESP 文档中心',
      description: 'iRESP 文档中心',
    }
  },
  themeConfig: {
    repo: 'iresp/docs.iresp.cn',
    lastUpdated:'上次更新',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
  },
}
