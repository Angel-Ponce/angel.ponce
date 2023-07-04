<script lang="ts">
	import { Angel, CV, Github, Gmail, Linkedin } from '$atoms';
	import t from '$i18n/t';
</script>

<div class="flex w-full items-center flex-col gap-4">
	<section id="about" class="flex gap-4 items-center">
		<Angel />
		<div class="flex flex-col items-center gap-6 animate-slide-r-to-l">
			<h1 class="font-bold font-inter text-7xl text-center">{$t('Angel Ponce')}</h1>
			<p class="italic max-w-sm text-base text-center">
				{$t(
					'“Las grandes oportunidades nacen de haber sabido aprovechar las pequeñas” ~ Bill Gates'
				)}
			</p>
			<div class="flex items-center gap-4">
				<Linkedin />
				<Github />
				<Gmail />
				<CV />
			</div>
		</div>
	</section>
	<p class="w-full text-lg text-justify">
		{$t(
			'Angel es ingeniero de sistemas enfocado en crear y mejorar soluciones tecnológicas con el más alto estándar en el mundo, le encanta crear interfaces amigables y fáciles de usar para cualquier persona. Además, es un experto trabajando en equipo ya que posee habilidades de comunicación efectiva y liderazgo. Angel es muy humanitario, le gusta la armonía, la paz y compartír con los animales.'
		)}
	</p>
</div>
