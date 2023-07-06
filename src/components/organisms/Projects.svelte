<script lang="ts">
	import { IonIcon } from '$atoms';
	import t from '$i18n/t';
	import { Jequi } from '$svg';
	import { onMount } from 'svelte';
	import { LinkOutline } from 'svelte-ionicons';
	import type { SwiperOptions, Swiper } from 'swiper/types';

	let swiperEl: any;
	let swiper: Swiper;

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
		<swiper-slide>
			<div class="flex w-full items-center gap-3">
				<Jequi />
				<h4 class="font-bold font-inter">Jequi</h4>
			</div>
			<p class="w-full text-justify">
				Una plataforma multi-empresarial que facilita la gestión de recursos humanos en todos los
				aspectos posibles.
			</p>
			<a
				class="text-secondary w-full flex gap-3 items-center text-left text-base hover:underline underline-offset-2"
				href="https://jequi.io"
				target="_blank"
			>
				<IonIcon icon={LinkOutline} />Ver más
			</a>
		</swiper-slide>
		<swiper-slide>Dynamic Schedule Web</swiper-slide>
		<swiper-slide>D'hondt Analizer</swiper-slide>
		<swiper-slide>CUNOR Lends</swiper-slide>
		<swiper-slide>Svelte Reactions</swiper-slide>
		<swiper-slide>ITIC</swiper-slide>
		<swiper-slide>SIVOT Auxilio Póstumo</swiper-slide>
	</swiper-container>
</section>

<style lang="postcss">
	swiper-slide {
		@apply !flex !rounded-xl !gap-6 !flex-col !items-center !p-8 !w-full !max-w-xs !h-80 !bg-grayblue !bg-opacity-[0.15];
	}
</style>
