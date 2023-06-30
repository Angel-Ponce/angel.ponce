<script>
	import '../global.css';
	import { MouseFocus, ToggleTheme } from '$atoms';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Tajawal&display=swap" rel="stylesheet" />
	<link href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap" rel="stylesheet" />
</svelte:head>

<MouseFocus />
<ToggleTheme />
<slot />
