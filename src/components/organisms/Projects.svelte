<script lang="ts">
	import t from '$i18n/t';
	import { onMount } from 'svelte';
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
		<swiper-slide class="w-full max-w-xs h-80 bg-grayblue bg-opacity-20">Slide 1</swiper-slide>
		<swiper-slide class="w-full max-w-xs h-80 bg-grayblue bg-opacity-20">Slide 2</swiper-slide>
		<swiper-slide class="w-full max-w-xs h-80 bg-grayblue bg-opacity-20">Slide 3</swiper-slide>
	</swiper-container>
</section>
