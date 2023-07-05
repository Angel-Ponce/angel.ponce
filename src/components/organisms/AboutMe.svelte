<script lang="ts">
	import { IonIcon } from '$atoms';
	import { LogoLinkedin, LogoGithub, Mail, DocumentText } from 'svelte-ionicons';
	import t from '$i18n/t';
	import { Angel } from '$svg';

	const socials = [
		{
			href: 'https://linkedin.com/in/angel-p11/',
			icon: LogoLinkedin
		},
		{
			href: 'https://github.com/Angel-Ponce',
			icon: LogoGithub
		},
		{
			href: 'mailto:acdpf000@gmail.com',
			icon: Mail
		},
		{
			href: 'https://onedrive.live.com/View.aspx?resid=684BD9C903415EAA!41859&wdEmbedFS=1&authkey=!ABgS3ugFQPd5f4M',
			icon: DocumentText
		}
	];
</script>

<section class="flex w-full items-center flex-col gap-4" id="about">
	<div class="flex gap-4 items-center justify-center flex-wrap">
		<Angel />
		<div class="flex flex-col items-center gap-6 animate-slide-r-to-l">
			<h1 class="font-bold font-inter text-7xl text-center">{$t('Angel Ponce')}</h1>
			<p class="italic max-w-sm text-base text-center">
				{$t(
					'“Las grandes oportunidades nacen de haber sabido aprovechar las pequeñas” ~ Bill Gates'
				)}
			</p>
			<div class="flex items-center gap-4">
				{#each socials as social}
					<a
						href={social.href}
						target="_blank"
						class={'cursor-pointer hover:-translate-y-1 transition-transform duration-200'}
					>
						<IonIcon icon={social.icon} size={25} className="text-secondary dark:text-grayblue" />
					</a>
				{/each}
			</div>
		</div>
	</div>
	<p class="w-full text-justify">
		{$t(
			'Angel es ingeniero de sistemas enfocado en crear y mejorar soluciones tecnológicas con el más alto estándar en el mundo, le encanta crear interfaces amigables y fáciles de usar para cualquier persona. Además, es un experto trabajando en equipo ya que posee habilidades de comunicación efectiva y liderazgo. Angel es muy humanitario, le gusta la armonía, la paz y compartír con los animales.'
		)}
	</p>
</section>
