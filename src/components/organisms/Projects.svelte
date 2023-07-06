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
	import { DHondt, DynamicScheduleWeb, Jequi } from '$svg';
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
		}
	];

	onMount(() => {
		Object.assign(swiperEl, {
			pagination: true,
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
							<IonIcon icon={LinkOutline} />Ver más
						</a>
					</div>
				{/if}
			</swiper-slide>
		{/each}

		<!-- <swiper-slide>D'hondt Analizer</swiper-slide>
		<swiper-slide>CUNOR Lends</swiper-slide>
		<swiper-slide>Svelte Reactions</swiper-slide>
		<swiper-slide>ITIC</swiper-slide>
		<swiper-slide>SIVOT Auxilio Póstumo</swiper-slide> -->
	</swiper-container>
</section>

<style lang="postcss">
	swiper-slide {
		@apply !flex !rounded-xl !gap-6 !flex-col !items-center !p-8 !w-full !max-w-xs !h-80 !bg-grayblue !bg-opacity-[0.15];
	}
</style>
