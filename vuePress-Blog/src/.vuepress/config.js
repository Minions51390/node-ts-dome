const currentDateUTC = new Date().toUTCString()

module.exports = {
	// base:"/lmongo/",
	title: '忙 · 南易',
	dest: './docs',
	themeConfig: {
		repo: 'https://github.com/zhenquan321/node-ts-dome.git',
		repoLabel: 'Git',
		editLinks: true,
		editLinkText: 'Found a bug? Help me improve this page!',
		nav: [
			{ text: '大前端', link: '/frontEnd/' }, 
			{ text: 'node', link: '/node/' },
			{ text: 'offer之道', link: '/offer/' },
			{ text: '随笔', link: '/blog/' },
			{ text: '支持', link: '/support/' }
		],
		logo: '/vuepress-blog-logo.png',
		docsDir: 'src',
		pageSize: 10,
		startPage: 0,
		sidebar: {
			'/frontEnd/': [
				['',"前言"], 
				['html',"html"],  
				['css',"css"],  
				['js',"JavaScript"], 
				['typescript',"TypeScript"], 
				['es6+',"es6+"], 
				['regular',"正则"] 
			],
			'/node/': [
				['',"简介"],
				['module',"模块"], 
				['event-async',"事件/异步"], 
				['process',"进程"], 
				['io',"IO"], 
				['network',"Network"], 
				['error',"错误处理/调试"], 
				['test',"测试"], 
				['util',"util"], 
				['storage',"存储"], 
				['security',"安全"], 
			],
			'/offer/': [
				['',"offer之道"], 
				['html',"HTML"],  
				['css',"CSS"],  
				['js',"JavaScript"], 
				['es6+',"es6+重点考察知识点"], 
				{
					title: '前端框架',
					collapsable: false, 
					children: ['react',"vue"],  
				},
				['Engineering',"工程化"],  
				['security',"安全相关"],  
				['algorithm',"数据结构与算法"],  
				['hr',"面试技巧"],   
			],
			'/blog/': [
				'',      
				'my-first-post', 
				'my-second-post'  
			],
			// fallback
			'support': [
				'',        /* / */
			]
		}

	},
	plugins: [
		[
			'@vuepress/google-analytics',
			{
				ga: '' // UA-00000000-0
			}
		],
		[
			'vuepress-plugin-rss',
			{
				base_url: '/',
				site_url: 'https://vuepressblog.org',
				filter: frontmatter => frontmatter.date <= new Date(currentDateUTC),
				count: 20
			}
		],
		'vuepress-plugin-reading-time',
		'vuepress-plugin-janitor'
	],
	markdown: {
		lineNumbers: true,
		// markdown-it-anchor 的选项
		anchor: { permalink: false },
		// markdown-it-toc 的选项
		toc: { includeLevel: [1, 2] },
	},
	head: [
		['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon.png' }],
		['link', { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' }],
		['link', { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' }],
		['link', { rel: 'manifest', href: '/site.webmanifest' }],
		['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }],
		['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
		['meta', { name: 'theme-color', content: '#ffffff' }]
	]
}
