<script lang="ts">
	import { IonIcon } from '$atoms';
	import { LogoLinkedin, LogoGithub, Mail, DocumentText } from 'svelte-ionicons';
	import t from '$i18n/t';
	import { Angel } from '$svg';
	import { createTippy } from 'svelte-tippy';

	const tippy = createTippy({
		placement: 'bottom',
		arrow: false,
	});

	const socials = [
		{
			href: 'https://linkedin.com/in/angelponcef/',
			icon: LogoLinkedin,
			name: 'Linkedin',
		},
		{
			href: 'https://github.com/Angel-Ponce',
			icon: LogoGithub,
			name: 'Github',
		},
		{
			href: 'mailto:acdpf000@gmail.com',
			icon: Mail,
			name: 'Gmail',
		},
		{
			href: 'https://1drv.ms/b/s!AqpeQQPJ2Utohco8OzEEUFjNFfA9KQ?e=SGVY6D',
			icon: DocumentText,
			name: 'Curriculum',
		},
	];
</script>

<section class="flex w-full items-center flex-col gap-4" id="about">
	<div class="flex gap-4 items-center justify-center flex-wrap">
		<Angel />
		<div class="flex flex-col items-center gap-6 animate-slide-r-to-l">
			<h1 class="font-bold font-inter text-7xl text-center">{$t('Angel Ponce')}</h1>
			<p class="italic max-w-sm text-base text-center">
				{$t(
					'“Las grandes oportunidades nacen de haber sabido aprovechar las pequeñas” ~ Bill Gates',
				)}
			</p>
			<div class="flex items-center gap-4">
				{#each socials as social}
					<a
						href={social.href}
						target="_blank"
						class={'cursor-pointer hover:-translate-y-1 transition-transform duration-200'}
						use:tippy={{ content: $t(social.name) }}
					>
						<IonIcon icon={social.icon} size={25} className="text-secondary dark:text-grayblue" />
					</a>
				{/each}
			</div>
		</div>
	</div>
	<p class="w-full text-justify">
		{$t(
			'Angel es ingeniero de sistemas enfocado en crear y mejorar soluciones tecnológicas con el más alto estándar en el mundo, le encanta crear interfaces amigables y fáciles de usar para cualquier persona. Además, posee habilidades de comunicación efectiva y liderazgo que le permiten adaptarse en cualquier equipo de trabajo. Angel es muy humanitario, le gusta la armonía, la paz y compartír con los animales.',
		)}
	</p>
</section>
