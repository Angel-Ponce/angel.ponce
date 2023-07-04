<script lang="ts">
	import { Angel, CV, Github, Gmail, Linkedin } from '$atoms';
	import t from '$i18n/t';
</script>

<section id="about" class="flex gap-4 items-center">
	<Angel />
	<div class="flex flex-col items-center gap-6">
		<h1 class="font-bold font-inter text-7xl text-center">{$t('Angel Ponce')}</h1>
		<p class="italic max-w-sm text-base text-center">
			{$t('“Las grandes oportunidades nacen de haber sabido aprovechar las pequeñas” ~ Bill Gates')}
		</p>
		<div class="flex items-center gap-4">
			<Linkedin />
			<Github />
			<Gmail />
			<CV />
		</div>
	</div>
</section>
