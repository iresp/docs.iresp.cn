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
        docsDir: 'docs',
        logo: '/iresp_logo.svg',
        lastUpdated: '上次更新',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        search: false,
        displayAllHeaders: true,
        nav: [
            {text: '首页', link: '/'},
            {text: '手册', link: '/user/'},
            {text: '开发', link: '/dev/'},
            {text: '运维', link: '/ops/'},
            {text: '官网', link: 'https://www.iresp.cn/'},
        ],
        sidebar: [
            {
                title: '用户手册',
                path: '/user/',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    {
                        title: '管理员手册',
                        path: '/user/admin/',
                        collapsable: false,
                        sidebarDepth: 1,
                        children: [
                            {
                                title: '在线开发手册',
                                path: '/user/admin/online/',
                                collapsable: false,
                                sidebarDepth: 1,
                                children: [
                                    {
                                        title: 'JS增强',
                                        path: '/user/admin/online/enhanceJs/',
                                        collapsable: false,
                                        sidebarDepth: 1,
                                        children: [
                                            '/user/admin/online/enhanceJs/button',
                                            {
                                                title: '列表',
                                                path: '/user/admin/online/enhanceJs/list/',
                                                collapsable: false,
                                                sidebarDepth: 0,
                                                children: [
                                                    '/user/admin/online/enhanceJs/list/listBefore',
                                                ]
                                            },
                                            {
                                                title: '表单',
                                                path: '/user/admin/online/enhanceJs/form/',
                                                collapsable: false,
                                                sidebarDepth: 0,
                                                children: [
                                                    '/user/admin/online/enhanceJs/form/loaded',
                                                    '/user/admin/online/enhanceJs/form/beforeSubmit',
                                                    '/user/admin/online/enhanceJs/form/onlChange',
                                                    '/user/admin/online/enhanceJs/form/subtable',
                                                    '/user/admin/online/enhanceJs/form/subchangemain',
                                                    '/user/admin/online/enhanceJs/form/fieldHiddenOrFileDisabled',
                                                    '/user/admin/online/enhanceJs/form/liandong',
                                                    '/user/admin/online/enhanceJs/form/selecttree',
                                                    '/user/admin/online/enhanceJs/form/hookSetup',
                                                    '/user/admin/online/enhanceJs/form/api',
                                                ]
                                            },
                                            '/user/admin/online/enhanceJs/pop',
                                            '/user/admin/online/enhanceJs/http',
                                            '/user/admin/online/enhanceJs/detailModal',
                                            '/user/admin/online/enhanceJs/systemVariables',
                                        ]
                                    },
                                    {
                                        title: 'SQL增强',
                                        path: '/user/admin/online/enhanceSql/',
                                        collapsable: false,
                                        sidebarDepth: 1,
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: '开发手册',
                path: '/dev/',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    {
                        title: '设备说明',
                        path: '/dev/devices/',
                        collapsable: false,
                        sidebarDepth: 1,
                        children: [
                            '/dev/devices/ecs',
                            '/dev/devices/workstation'
                        ]
                    },
                    {
                        title: '后端开发',
                        path: '/dev/backend/',
                        collapsable: false,
                        sidebarDepth: 1,
                        children: [
                            '/dev/backend/CAS',
                            '/dev/backend/CAS-ADFS',
                            '/dev/backend/kkFileView',
                            '/dev/backend/Sharding',
                        ]
                    },
                    {
                        title: '前端开发',
                        path: '/dev/frontend/',
                        collapsable: false,
                        sidebarDepth: 1,
                    },
                    {
                        title: '移动端开发',
                        path: '/dev/app/',
                        collapsable: false,
                        sidebarDepth: 1,
                    },
                ]
            },
            {
                title: '运维手册',
                path: '/ops/',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    {
                        title: '服务器运维手册',
                        path: '/ops/server',
                        collapsable: false,
                        sidebarDepth: 1,
                        children: [
                            '/ops/server/docker',
                            '/ops/server/linux',
                            '/ops/server/windows',
                        ]
                    },
                ]
            },
        ],
    },
}
