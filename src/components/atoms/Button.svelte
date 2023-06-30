<script lang="ts">
	import clsx from 'clsx';
	export let color: 'ghost' | 'primary' | 'secondary' = 'primary';
	export let className = '';
</script>

<button
	on:click
	on:dblclick
	class={clsx(
		{
			'!bg-primary !text-slate-50': color == 'primary',
			'!bg-secondary !text-slate-50': color == 'secondary',
			'!bg-grayblue dark:!bg-gray-700': color == 'ghost'
		},
		'py-2 px-4 rounded-md flex justify-center items-center gap-2 font-medium active:scale-90 transition-transform',
		className
	)}
>
	<slot />
</button>
