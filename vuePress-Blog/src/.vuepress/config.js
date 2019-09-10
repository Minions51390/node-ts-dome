const currentDateUTC = new Date().toUTCString()

module.exports = {
	title: '溜忙 · 南易',
	dest: './public',
	themeConfig: {
		repo: 'https://github.com/zhenquan321/node-ts-dome.git',
		repoLabel: 'Git',
		editLinks: true,
		editLinkText: 'Found a bug? Help me improve this page!',
		nav: [
			{ text: '前端', link: '/frontEnd/' }, 
			{ text: 'node', link: '/node/' },
			{ text: '随笔', link: '/blog/' },
			{ text: '支持', link: '/support/' }
		],
		logo: '/vuepress-blog-logo.png',
		docsDir: 'src',
		pageSize: 10,
		startPage: 0,
		sidebar: {
			'/frontEnd/': [
				['',"简介"],  /* /foo/ */
				['js',"js基础"]  /* /foo/one.html */
			],
			'/node/': [
				'',      /* /bar/ */
				'three', /* /bar/three.html */
				'four'   /* /bar/four.html */
			],
			'/blog/': [
				'',      /* /bar/ */
				'my-first-post', /* /bar/three.html */
				'my-second-post'   /* /bar/four.html */
			],
			// fallback
			'support': [
				'',        /* / */
				'contact', /* /contact.html */
				'about'    /* /about.html */
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
