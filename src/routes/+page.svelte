<script lang="ts">
	import { Link } from '$atoms';
	import { AboutMe } from '$organisms';

	const links = [
		{
			text: 'Acerca de',
			href: '#about'
		},
		{
			text: 'Experiencia',
			href: '#experince'
		},
		{
			text: 'Proyectos',
			href: '#projects'
		},
		{
			text: 'Tecnología',
			href: '#tech'
		}
	];
</script>

<div class="w-full flex gap-8 items-center justify-end flex-wrap mb-16">
	{#each links as link}
		<Link {link} />
	{/each}
</div>

<div class="w-full flex flex-col items-center">
	<AboutMe />
</div>
