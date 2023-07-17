<script lang="ts">
	import { IonIcon } from '$atoms';
	import { ChevronUpOutline } from 'svelte-ionicons';
	import { fly } from 'svelte/transition';

	let scrollTop = 0;
</script>

<svelte:window
	on:scroll={() => {
		scrollTop = document.documentElement.scrollTop;
	}}
/>

{#if scrollTop >= 200}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		in:fly={{ y: 30, duration: 200 }}
		out:fly={{ y: 30, duration: 200 }}
		class="fixed bottom-10 right-10 w-12 h-12 rounded-md shadow-md flex items-center justify-center cursor-pointer select-none bg-grayblue bg-opacity-10 dark:text-slate-50"
		on:click={() => {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}}
	>
		<IonIcon icon={ChevronUpOutline} />
	</div>
{/if}
