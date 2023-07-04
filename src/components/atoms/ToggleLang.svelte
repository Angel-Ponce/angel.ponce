<script lang="ts">
	import { lang, setLang } from '$stores';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<p
	class="border-2 rounded select-none cursor-pointer active:scale-90 transition-transform duration-200 w-[25px] h-[25px] flex justify-center items-center"
	on:click={() => setLang($lang == 'es' ? 'en' : 'es')}
>
	{#if $lang == 'es'}
		es
	{:else}
		en
	{/if}
</p>
