<script lang="ts">
	import { Angel } from '$atoms';
	import t from '$i18n/t';
</script>

<section id="about" class="flex gap-3 items-center">
	<Angel />
	<div class="flex flex-col items-center gap-7">
		<h1 class="font-bold font-inter text-7xl text-center">{$t('Angel Ponce')}</h1>
		<p class="font-inter italic max-w-sm text-center">
			{$t('“Las grandes oportunidades nacen de haber sabido aprovechar las pequeñas” ~ Bill Gates')}
		</p>
	</div>
</section>
