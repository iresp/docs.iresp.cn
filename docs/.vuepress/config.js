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
                sidebarDepth: 0,
                children: [
                    {
                        title: '通用操作手册',
                        path: '/user/general/',
                        collapsable: false,
                        sidebarDepth: 0,
                    },
                    {
                        title: '项目经理手册',
                        path: '/user/manager/',
                        collapsable: false,
                        sidebarDepth: 0,
                    },
                    {
                        title: '项目成员手册',
                        path: '/user/member/',
                        collapsable: false,
                        sidebarDepth: 0,
                    },
                    {
                        title: '高层领导手册',
                        path: '/user/leader/',
                        collapsable: false,
                        sidebarDepth: 0,
                    },
                    {
                        title: '管理员手册',
                        path: '/user/admin/',
                        collapsable: false,
                        sidebarDepth: 0,
                        children: [
                        ]
                    }
                ]
            },
            {
                title: '开发手册',
                path: '/dev/',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    {
                        title: '设备说明',
                        path: '/dev/devices/',
                        collapsable: false,
                        sidebarDepth: 0,
                        children: [
                            '/dev/devices/ecs',
                            '/dev/devices/workstation'
                        ]
                    },
                    {
                        title: '后端开发',
                        path: '/dev/backend/',
                        collapsable: false,
                        sidebarDepth: 0,
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
                        sidebarDepth: 0,
                    },
                    {
                        title: '移动端开发',
                        path: '/dev/app/',
                        collapsable: false,
                        sidebarDepth: 0,
                    },
                    {
                        title: '在线开发手册',
                        path: '/dev/online/',
                        collapsable: false,
                        sidebarDepth: 0,
                        children: [
                            '/dev/online/enhance/button',
                            {
                                title: '在线表单',
                                path: '/dev/online/form/',
                                collapsable: false,
                                sidebarDepth: 0,
                                children: [
                                    '/dev/online/form/comp/',
                                    '/dev/online/form/comp/rule',
                                    '/dev/online/form/comp/expression',
                                ]
                            },
                            {
                                title: 'JS增强',
                                path: '/dev/online/enhance/js/',
                                collapsable: false,
                                sidebarDepth: 0,
                                children: [
                                    '/dev/online/enhance/js/button',
                                    {
                                        title: '列表',
                                        path: '/dev/online/enhance/js/list/',
                                        collapsable: false,
                                        sidebarDepth: 0,
                                        children: [
                                            '/dev/online/enhance/js/list/listBefore',
                                        ]
                                    },
                                    {
                                        title: '表单',
                                        path: '/dev/online/enhance/js/form/',
                                        collapsable: false,
                                        sidebarDepth: 0,
                                        children: [
                                            '/dev/online/enhance/js/form/loaded',
                                            '/dev/online/enhance/js/form/beforeSubmit',
                                            '/dev/online/enhance/js/form/onlChange',
                                            '/dev/online/enhance/js/form/subtable',
                                            '/dev/online/enhance/js/form/subchangemain',
                                            '/dev/online/enhance/js/form/fieldHiddenOrFileDisabled',
                                            '/dev/online/enhance/js/form/liandong',
                                            '/dev/online/enhance/js/form/selecttree',
                                            '/dev/online/enhance/js/form/hookSetup',
                                            '/dev/online/enhance/js/form/api',
                                        ]
                                    },
                                    '/dev/online/enhance/js/pop',
                                    '/dev/online/enhance/js/http',
                                    '/dev/online/enhance/js/detailModal',
                                    '/dev/online/enhance/js/systemVariables',
                                ]
                            },
                            // {
                            //     title: 'JAVA增强',
                            //     path: '/dev/online/enhance/java/',
                            //     collapsable: false,
                            //     sidebarDepth: 0,
                            //     children: [
                            //         '/dev/online/enhance/java/import',
                            //         '/dev/online/enhance/java/export',
                            //         '/dev/online/enhance/java/query',
                            //         '/dev/online/enhance/java/api',
                            //     ]
                            // },
                            {
                                title: 'SQL增强',
                                path: '/dev/online/enhance/sql/',
                                collapsable: false,
                                sidebarDepth: 0,
                            }
                        ]
                    }
                ]
            },
            {
                title: '运维手册',
                path: '/ops/',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    {
                        title: '数据库运维手册',
                        path: '/ops/database',
                        collapsable: false,
                        sidebarDepth: 0,
                        children: [
                            '/ops/database/mariadb',
                            '/ops/database/dameng',
                        ]
                    },
                    {
                        title: '服务器运维手册',
                        path: '/ops/server',
                        collapsable: false,
                        sidebarDepth: 0,
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
