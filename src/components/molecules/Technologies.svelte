<script lang="ts" context="module">
	import type { SvelteComponent } from 'svelte';

	export interface Technology {
		name: string;
		icon: typeof SvelteComponent<Record<string, any>>;
		href?: string;
	}
</script>

<script lang="ts">
	export let technologies: Technology[] = [];
</script>

<div class="w-full flex justify-center items-center flex-wrap gap-4">
	{#each technologies as tech}
		<a
			href={tech.href}
			target="_blank"
			class="flex flex-col justify-center items-center cursor-pointer select-none saturate-0 hover:saturate-100 transition-all duration-300"
		>
			<div class="scale-75 hover:scale-100 transition-transform duration-300">
				{#if tech.name == 'svelte'}
					<svelte:component this={tech.icon} size={56} />
				{:else}
					<svelte:component this={tech.icon} />
				{/if}
			</div>
			<p class="text-sm text-center w-full">{tech.name}</p>
		</a>
	{/each}
</div>
