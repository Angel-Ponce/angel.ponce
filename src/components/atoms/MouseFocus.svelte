<script lang="ts">
	import { spring } from 'svelte/motion';

	const coords = spring({ x: 100, y: 100 });
	const ratio = spring(10);
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svg
	class="fixed w-full h-screen opacity-50"
	on:mousemove={(e) => {
		coords.set({ x: e.clientX, y: e.clientY });
	}}
	on:mousedown={() => ratio.set(30)}
	on:mouseup={() => ratio.set(10)}
>
	<circle class="fill-[#0C4160]" cx={$coords.x} cy={$coords.y} r={$ratio} />
</svg>
