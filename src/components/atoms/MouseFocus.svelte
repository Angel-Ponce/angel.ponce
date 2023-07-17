<script lang="ts">
	import { spring } from 'svelte/motion';

	const coords = spring({ x: 100, y: 100 });
	const ratio = spring(60);
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:window
	on:mousemove={(e) => {
		coords.set({
			x: e.clientX - 6,
			y: e.clientY - 6,
		});
	}}
	on:mousedown={() => ratio.set(90)}
	on:mouseup={() => ratio.set(60)}
/>

<div
	class="rounded-full bg-secondary dark:bg-grayblue opacity-50 blur-xl fixed pointer-events-none"
	style:top={`${$coords.y}px`}
	style:left={`${$coords.x}px`}
	style:width={`${$ratio}px`}
	style:height={`${$ratio}px`}
/>
