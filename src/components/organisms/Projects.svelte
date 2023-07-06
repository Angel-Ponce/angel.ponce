<script lang="ts" context="module">
	interface Project {
		title: string;
		icon: typeof SvelteComponent<Record<string, any>>;
		desc: string;
		href?: string;
	}
</script>

<script lang="ts">
	import { IonIcon } from '$atoms';
	import t from '$i18n/t';
	import { CUNOR, DHondt, DynamicScheduleWeb, ITIC, Jequi, Svelte, SIVOT, Gridia } from '$svg';
	import { SvelteComponent, onMount } from 'svelte';
	import { LinkOutline } from 'svelte-ionicons';
	import type { SwiperOptions, Swiper } from 'swiper/types';

	let swiperEl: any;
	let swiper: Swiper;
	const projects: Project[] = [
		{
			title: 'Jequi',
			icon: Jequi,
			desc: 'Una plataforma multi-empresarial que facilita la gestión de recursos humanos en todos los aspectos posibles.',
			href: 'https://jequi.io'
		},
		{
			title: 'Dynamic Schedule Web',
			icon: DynamicScheduleWeb,
			desc: 'Una plataforma útil para gestionar horarios estudiantiles y actividades personales.',
			href: 'https://dynamic-schedule-web.vercel.app'
		},
		{
			title: "D'Hondt Analizer",
			icon: DHondt,
			desc: 'Sistema de análisis de votación política para medir la cantidad de escaños obtenidos por partido.',
			href: 'https://gt-votes.vercel.app'
		},
		{
			title: 'Svelte Reactions',
			icon: Svelte,
			desc: 'Una librería útil para implementar reacciones con emojis en programas escritos con Svelte.',
			href: 'https://github.com/Angel-Ponce/svelte-reactions'
		},
		{
			title: 'ITIC',
			icon: ITIC,
			desc: 'Sitio web informativo para el laboratorio de investigación ITIC, el sitio es totalmente personalizable y configurable.',
			href: 'https://iticusac.com'
		},
		{
			title: 'Gridia',
			icon: Gridia,
			desc: 'Solución integral de gestión inteligente del agua, sistema IoT accesible y confiable para administrar el consumo de agua en los hogares.',
			href: 'https://gridia.io'
		},
		{
			title: 'CUNOR Lends',
			icon: CUNOR,
			desc: 'Sistema de control de prestamos educativos en Centro Universitario del Norte.',
			href: 'https://cunor-article-lends.vercel.app'
		},
		{
			title: 'SIVOT Auxilio Póstumo',
			icon: SIVOT,
			desc: 'Sistema de votaciones nacionales para elecciones de Asociación Auxilio Póstumo.'
		}
	];

	onMount(() => {
		Object.assign(swiperEl, {
			pagination: {
				enabled: true
			},
			effect: 'coverflow',
			grabCursor: true,
			centeredSlides: true,
			slidesPerView: 'auto',
			coverflowEffect: {
				rotate: 60,
				stretch: 0,
				depth: 100,
				modifier: 1,
				slideShadows: false
			},
			initialSlide: 1,
			on: {
				init: (sw) => {
					swiper = sw;
				}
			}
		} as SwiperOptions);
	});
</script>

<section id="projects" class="flex w-full items-center flex-col gap-4">
	<h2 class="font-bold font-inter text-left w-full text-2xl">{$t('Proyectos')}</h2>
	<swiper-container bind:this={swiperEl} class="max-w-full w-full">
		{#each projects as project}
			<swiper-slide>
				<div class="flex w-full items-center gap-3">
					<svelte:component this={project.icon} />
					<h4 class="font-bold font-inter">{$t(project.title)}</h4>
				</div>
				<p class="w-full text-left">
					{$t(project.desc)}
				</p>
				{#if project.href}
					<div class="flex-1 w-full flex items-end pb-6">
						<a
							class="text-secondary w-full flex gap-3 items-center text-left text-base hover:underline underline-offset-2"
							href={project.href}
							target="_blank"
						>
							<IonIcon icon={LinkOutline} />{$t('Ver más')}
						</a>
					</div>
				{/if}
			</swiper-slide>
		{/each}
	</swiper-container>
</section>

<style lang="postcss">
	swiper-slide {
		@apply !flex !rounded-xl !gap-6 !flex-col !items-center !p-8 !w-full !max-w-xs !h-80 !bg-grayblue !bg-opacity-[0.15];
	}

	:root {
		--swiper-pagination-color: #738fa7;
	}
</style>
