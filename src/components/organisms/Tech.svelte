<script lang="ts">
	import t from '$i18n/t';
	import { Technologies } from '$molecules';
	import * as devicons from '$svg';
	import type { Technology } from '../molecules/Technologies.svelte';

	let technologies: Technology[] = [
		{
			name: 'bash',
			icon: devicons.Bash,
			href: 'https://es.wikipedia.org/wiki/Bash',
		},
		{
			name: 'bootstrap',
			icon: devicons.Bootstrap,
			href: 'https://getbootstrap.com',
		},
		{
			name: 'composer',
			icon: devicons.Composer,
			href: 'https://getcomposer.org',
		},
		{
			name: 'css',
			icon: devicons.CSS,
			href: 'https://developer.mozilla.org/es/docs/Web/CSS',
		},
		{
			name: 'electron',
			icon: devicons.Electron,
			href: 'https://www.electronjs.org/es/',
		},
		{
			name: 'eslint',
			icon: devicons.Eslint,
			href: 'https://eslint.org',
		},
		{
			name: 'express',
			icon: devicons.Express,
			href: 'https://expressjs.com',
		},
		{
			name: 'figma',
			icon: devicons.Figma,
			href: 'https://www.figma.com',
		},
		{
			name: 'firebase',
			icon: devicons.Firebase,
			href: 'https://firebase.com',
		},
		{
			name: 'git',
			icon: devicons.Git,
			href: 'https://git-scm.com',
		},
		{
			name: 'github',
			icon: devicons.Github,
			href: 'https://github.com',
		},
		{
			name: 'graphql',
			icon: devicons.GraphQL,
			href: 'https://graphql.org',
		},
		{
			name: 'heroku',
			icon: devicons.Heroku,
			href: 'https://www.heroku.com',
		},
		{
			name: 'html',
			icon: devicons.HTML,
			href: 'https://developer.mozilla.org/es/docs/Web/HTML',
		},
		{
			name: 'java',
			icon: devicons.Java,
			href: 'https://www.java.com',
		},
		{
			name: 'javascript',
			icon: devicons.JavaScript,
			href: 'https://developer.mozilla.org/es/docs/Web/JavaScript',
		},
		{
			name: 'laravel',
			icon: devicons.Laravel,
			href: 'https://laravel.com',
		},
		{
			name: 'markdown',
			icon: devicons.Markdown,
			href: 'https://markdown.es',
		},
		{
			name: 'mysql',
			icon: devicons.MySQL,
			href: 'https://www.mysql.com',
		},
		{
			name: 'nextjs',
			icon: devicons.NextJS,
			href: 'https://nextjs.org',
		},
		{
			name: 'nodejs',
			icon: devicons.NodeJS,
			href: 'https://nodejs.org/en',
		},
		{
			name: 'npm',
			icon: devicons.Npm,
			href: 'https://www.npmjs.com',
		},
		{
			name: 'postgresql',
			icon: devicons.PostgreSQL,
			href: 'https://www.postgresql.org',
		},
		{
			name: 'react',
			icon: devicons.React,
			href: 'https://es.react.dev',
		},
		{
			name: 'sass',
			icon: devicons.Sass,
			href: 'https://sass-lang.com',
		},
		{
			name: 'sequelize',
			icon: devicons.Sequelize,
			href: 'https://sequelize.org',
		},
		{
			name: 'sqlserver',
			icon: devicons.SQLServer,
			href: 'https://www.microsoft.com/en-us/sql-server/sql-server-downloads',
		},
		{
			name: 'svelte',
			icon: devicons.Svelte,
			href: 'https://svelte.dev',
		},
		{
			name: 'tailwindcss',
			icon: devicons.TailwindCSS,
			href: 'https://tailwindcss.com',
		},
		{
			name: 'typescript',
			icon: devicons.TypeScript,
			href: 'https://www.typescriptlang.org',
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
