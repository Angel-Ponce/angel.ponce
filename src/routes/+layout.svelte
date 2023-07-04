<script lang="ts">
	import '../global.css';
	import { MouseFocus, ToggleLang } from '$atoms';
	import { ToggleTheme } from '$molecules';
	import { onMount } from 'svelte';
	import store from 'store2';
	import { setLang } from '$stores';

	onMount(() => {
		const storedLang = store.get('lang');
		setLang(storedLang || 'es');
	});
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Tajawal&display=swap" rel="stylesheet" />
	<link href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap" rel="stylesheet" />
	<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
</svelte:head>

<MouseFocus />
<main
	class="scroll-smooth font-tajawal w-full min-h-screen flex justify-center px-10 py-20 bg-slate-50 dark:bg-dark-base dark:text-slate-50 selection:bg-grayblue dark:selection:bg-secondary"
>
	<section class="max-w-5xl w-full">
		<div class="fixed top-10 right-10 flex gap-4 items-center">
			<ToggleTheme />
			<ToggleLang />
		</div>
		<slot />
	</section>
</main>
