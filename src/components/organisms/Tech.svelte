<script lang="ts">
	import t from '$i18n/t';
	import { Technologies } from '$molecules';
	import * as devicons from '$svg';
	import type { Technology } from '../molecules/Technologies.svelte';

	let technologies: Technology[] = [
		{
			name: 'bash',
			icon: devicons.Bash,
		},
		{
			name: 'bootstrap',
			icon: devicons.Bootstrap,
		},
		{
			name: 'composer',
			icon: devicons.Composer,
		},
		{
			name: 'css',
			icon: devicons.CSS,
		},
		{
			name: 'electron',
			icon: devicons.Electron,
		},
		{
			name: 'eslint',
			icon: devicons.Eslint,
		},
		{
			name: 'express',
			icon: devicons.Express,
		},
		{
			name: 'figma',
			icon: devicons.Figma,
		},
		{
			name: 'firebase',
			icon: devicons.Firebase,
		},
		{
			name: 'git',
			icon: devicons.Git,
		},
		{
			name: 'github',
			icon: devicons.Github,
		},
		{
			name: 'graphql',
			icon: devicons.GraphQL,
		},
		{
			name: 'heroku',
			icon: devicons.Heroku,
		},
		{
			name: 'html',
			icon: devicons.HTML,
		},
		{
			name: 'java',
			icon: devicons.Java,
		},
		{
			name: 'javascript',
			icon: devicons.JavaScript,
		},
		{
			name: 'laravel',
			icon: devicons.Laravel,
		},
		{
			name: 'markdown',
			icon: devicons.Markdown,
		},
		{
			name: 'mysql',
			icon: devicons.MySQL,
		},
		{
			name: 'nextjs',
			icon: devicons.NextJS,
		},
		{
			name: 'nodejs',
			icon: devicons.NodeJS,
		},
		{
			name: 'npm',
			icon: devicons.Npm,
		},
		{
			name: 'postgresql',
			icon: devicons.PostgreSQL,
		},
		{
			name: 'react',
			icon: devicons.React,
		},
		{
			name: 'sass',
			icon: devicons.Sass,
		},
		{
			name: 'sequelize',
			icon: devicons.Sequelize,
		},
		{
			name: 'sqlserver',
			icon: devicons.SQLServer,
		},
		{
			name: 'svelte',
			icon: devicons.Svelte,
		},
		{
			name: 'tailwindcss',
			icon: devicons.TailwindCSS,
		},
		{
			name: 'typescript',
			icon: devicons.TypeScript,
		},
	];
</script>

<section id="tech" class="flex w-full items-center flex-col gap-4">
	<h2 class="font-bold font-inter text-left w-full text-2xl">{$t('Tecnología')}</h2>
	<p class="w-full text-left">
		{$t(
			'A lo largo del tiempo Angel ha logrado obtener conocimiento y experiencia en diferentes tecnologías, no se podría decir que es un total experto en todas, pero sin duda te sacará de más de algún apuro.',
		)}
	</p>
	<Technologies {technologies} />
</section>
