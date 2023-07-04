<script lang="ts">
	import { Link } from '$atoms';

	const links = [
		{
			text: 'Sobre mi',
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

<div class="w-full flex gap-8 items-center justify-end">
	{#each links as link}
		<Link {link} />
	{/each}
</div>
