<script lang="ts">
	import { onMount } from 'svelte';
	import { SunnyOutline, Moon } from 'svelte-ionicons';
	import store from 'store2';
	import { IonIcon } from '$atoms';

	let theme: 'dark' | 'light';

	const toggle = () => {
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
<div class="cursor-pointer w-fit" on:click={toggle}>
	{#if theme == 'dark'}
		<IonIcon icon={Moon} />
	{:else}
		<IonIcon icon={SunnyOutline} />
	{/if}
</div>
