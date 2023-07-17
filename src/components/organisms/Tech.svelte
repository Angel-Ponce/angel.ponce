<script lang="ts">
	import t from '$i18n/t';
	import { Technologies } from '$molecules';
	import { Bash } from '$svg';
	import type { Technology } from '../molecules/Technologies.svelte';

	let technologies: Technology[] = [
		{
			name: 'bash',
			icon: Bash
		}
	];
</script>

<section id="tech" class="flex w-full items-center flex-col gap-4">
	<h2 class="font-bold font-inter text-left w-full text-2xl">{$t('Experiencia')}</h2>
	<p class="w-full text-left">
		{$t(
			'A lo largo del tiempo Angel ha logrado obtener conocimiento y experiencia en diferentes tecnologías, no se podría decir que es un total experto en todas, pero sin duda te sacará de más de algún apuro.'
		)}
	</p>
	<Technologies {technologies} />
</section>
