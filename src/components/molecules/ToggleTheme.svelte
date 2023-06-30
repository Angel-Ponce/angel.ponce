<script lang="ts">
	import { onMount } from 'svelte';
	import { SunnyOutline, Moon } from 'svelte-ionicons';
	import store from 'store2';
	import { IonIcon } from '$atoms';
	import clsx from 'clsx';

	export let disabled = false;
	export let spin = true;

	let theme: 'dark' | 'light';

	export const toggle = () => {
		theme = theme == 'dark' ? 'light' : 'dark';
		store.set('theme', theme);

		if (theme == 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	};

	onMount(() => {
		if (!store.get('theme')) {
			store.set(
				'theme',
				window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
			);
		}

		theme = store.get('theme') || 'light';

		if (theme == 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	});
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="cursor-pointer w-fit"
	on:click={() => {
		if (disabled) return;
		toggle();
	}}
>
	{#if theme == 'dark'}
		<IonIcon icon={Moon} className={clsx({ 'animate-rotate-one': spin })} />
	{:else}
		<IonIcon icon={SunnyOutline} className={clsx({ 'animate-rotate-one': spin })} />
	{/if}
</div>
