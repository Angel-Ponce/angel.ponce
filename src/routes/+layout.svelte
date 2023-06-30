<script>
	import '../global.css';
	import { Button, MouseFocus } from '$atoms';
	import { ToggleTheme } from '$molecules';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Tajawal&display=swap" rel="stylesheet" />
	<link href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap" rel="stylesheet" />
</svelte:head>

<MouseFocus />
<div
	class="w-full min-h-screen flex justify-center py-20 bg-slate-50 dark:bg-dark-base dark:text-slate-50"
>
	<div class="max-w-5xl">
		<Button color="ghost">
			<ToggleTheme />
		</Button>
		<slot />
	</div>
</div>
