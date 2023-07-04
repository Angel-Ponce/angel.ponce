<script lang="ts">
	import '../global.css';
	import { MouseFocus } from '$atoms';
	import { ToggleTheme } from '$molecules';
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
	class="w-full min-h-screen flex justify-center py-20 bg-slate-50 dark:bg-dark-base dark:text-slate-50 selection:bg-grayblue dark:selection:bg-secondary"
>
	<section class="max-w-5xl">
		<ToggleTheme />
		<slot />
	</section>
</main>
