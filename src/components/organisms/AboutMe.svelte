<script lang="ts">
	import { Angel, CV, Github, Gmail, Linkedin } from '$atoms';
	import t from '$i18n/t';
</script>

<section id="about" class="flex gap-3 items-center">
	<Angel />
	<div class="flex flex-col items-center gap-6">
		<h1 class="font-bold font-inter text-7xl text-center">{$t('Angel Ponce')}</h1>
		<p class="italic max-w-sm text-base text-center">
			{$t('“Las grandes oportunidades nacen de haber sabido aprovechar las pequeñas” ~ Bill Gates')}
		</p>
		<div class="flex items-center gap-4">
			<Linkedin
				className="grayscale hover:grayscale-0 transition-all duration-200 cursor-pointer"
			/>
			<Github className="opacity-60 hover:opacity-100 transition-all duration-200 cursor-pointer" />
			<Gmail className="grayscale hover:grayscale-0 transition-all duration-200 cursor-pointer" />
			<CV className="grayscale hover:grayscale-0 transition-all duration-200 cursor-pointer" />
		</div>
	</div>
</section>
