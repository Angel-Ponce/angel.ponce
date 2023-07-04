<script lang="ts">
	import { goto } from '$app/navigation';
	import { tweened } from 'svelte/motion';

	export let link: { href: string; text: string };
	let width = tweened(0, { duration: 200 });
	let linkWidth: number;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	bind:clientWidth={linkWidth}
	class="font-semibold cursor-pointer"
	on:mouseenter={() => {
		width.set(linkWidth);
	}}
	on:mouseleave={() => {
		width.set(0);
	}}
	on:click={async () => await goto(link.href)}
>
	<a href={link.href}>{link.text}</a>
	<div class="flex justify-end">
		<div class="h-0.5 bg-darkblue" style:width={`${$width}px`} />
	</div>
</div>
