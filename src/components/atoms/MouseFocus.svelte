<script lang="ts">
	import { spring } from 'svelte/motion';

	const coords = spring({ x: 100, y: 100 });
	const ratio = spring(10);
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svg
	on:mousemove={(e) => {
		coords.set({ x: e.clientX, y: e.clientY });
	}}
	style:position="fixed"
	style:width="100%"
	style:height="100vh"
	style:opacity="0.5"
	on:mousedown={() => ratio.set(30)}
	on:mouseup={() => ratio.set(10)}
>
	<circle fill="#0C4160" cx={$coords.x} cy={$coords.y} r={$ratio} />
</svg>
