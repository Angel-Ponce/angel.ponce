<script lang="ts">
	import { spring } from 'svelte/motion';

	const coords = spring({ x: 100, y: 100 });
	const ratio = spring(30);
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:window
	on:mousemove={(e) => {
		coords.set({
			x: e.clientX - 6,
			y: e.clientY - 6
		});
	}}
	on:mousedown={() => ratio.set(60)}
	on:mouseup={() => ratio.set(30)}
/>

<div
	class="rounded-full bg-dark-base opacity-50 fixed"
	style:top={`${$coords.y}px`}
	style:left={`${$coords.x}px`}
	style:width={`${$ratio}px`}
	style:height={`${$ratio}px`}
/>
