// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '药宁的服务器wiki',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: '游玩准备',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '准备工作', slug: 'guides/start' },
					],
				},
				{
					label: '服务器内建筑/设施坐标',
					autogenerate: { directory: 'reference' },
				},
								{
					label: '提问与回答',
					autogenerate: { directory: 'qa' },
				},
			],
		}),
	],
});
