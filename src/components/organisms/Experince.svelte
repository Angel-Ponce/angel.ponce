<script>
	import t from '$i18n/t';
	import { fly } from 'svelte/transition';

	let experinceYears = 0;

	for (let i = 1; i <= 3; i++) {
		setTimeout(() => {
			experinceYears = i;
		}, 150 * i);
	}
</script>

<section id="experince" class="flex w-full items-center flex-col gap-4">
	<h2 class="font-bold font-inter text-left w-full text-2xl">{$t('Experiencia')}</h2>
	<div class="w-full flex gap-4 flex-wrap">
		<div class="flex-1 h-80 flex flex-col justify-center items-center gap-5">
			<h3 class="font-bold text-7xl font-inter">
				+
				{#key experinceYears}
					<span class="inline-block" in:fly={{ y: 20, opacity: 1 }}>
						{experinceYears}
					</span>
				{/key}
			</h3>
			<p>{$t('años de experiencia')}</p>
		</div>
		<div class="flex-1 h-80 max-h-[320px] overflow-y-auto">a</div>
	</div>
</section>
