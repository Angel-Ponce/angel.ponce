<script lang="ts" context="module">
	import type { SvelteComponent } from 'svelte';

	export interface Technology {
		name: string;
		icon: typeof SvelteComponent<Record<string, any>>;
	}
</script>

<script lang="ts">
	export let technologies: Technology[] = [];
</script>

<div class="w-full flex justify-around items-center flex-wrap gap-4">
	{#each technologies as tech}
		<div
			class="flex flex-col justify-center items-center cursor-pointer select-none saturate-0 hover:saturate-100 transition-all duration-300"
		>
			<svelte:component this={tech.icon} />
			<p class="text-sm text-center w-full">{tech.name}</p>
		</div>
	{/each}
</div>
