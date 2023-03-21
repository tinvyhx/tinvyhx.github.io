import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Tv's Site",
	description: 'A Site About Tv',
	lastUpdated: true,
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Riding', link: '/life/riding/index.md' },
			{ text: 'Running', link: '/life/running/index.md' },
			{ text: 'Reading', link: '/life/reading/index.md' }
		],
		footer: {
			message: 'Long Time Ago'
		}
	}
})
