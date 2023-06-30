<script lang="ts">
	import clsx from 'clsx';
	import type { SvelteComponent } from 'svelte';

	export let size = 20;
	export let icon: typeof SvelteComponent<Record<string, any>>;
	export let className = '';
</script>

<svelte:component
	this={icon}
	{size}
	style={`width: ${size}px; min-width: ${size}px; height: ${size}px; min-height: ${size}px;`}
	class={clsx('outline-none', className)}
/>
