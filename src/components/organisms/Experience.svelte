<script>
	import t from '$i18n/t';
	import { fly } from 'svelte/transition';
	import { Pentcloud, Finanssoreal, VSCode, Startrack } from '$svg';

	let works = [
		{
			title: 'Frontend Engineer',
			icon: Startrack,
			desc: 'Sep. 2023 ~ Actualmente',
			href: 'https://www.gps.gt',
		},
		{
			title: 'Full-Stack Developer',
			icon: Pentcloud,
			desc: 'Mar. 2022 ~ Sep. 2023',
			href: 'https://pentcloud.com',
		},
		{
			title: 'Tech Lead',
			icon: Finanssoreal,
			desc: 'Mar. 2021 ~ Mar. 2022',
			href: 'https://finanssoreal.com',
		},
		{
			title: 'Freelancer Software Developer',
			icon: VSCode,
			desc: 'Oct. 2020 ~ Actualmente',
			href: 'https://github.com/Angel-Ponce?tab=repositories',
		},
	];

	let experinceYears = 0;
	for (let i = 1; i <= 3; i++) {
		setTimeout(() => {
			experinceYears = i;
		}, 150 * i);
	}
</script>

<section id="experince" class="flex w-full items-center flex-col gap-4">
	<h2 class="font-bold font-inter text-left w-full text-2xl">{$t('Experiencia')}</h2>
	<div class="w-full flex gap-4 flex-wrap">
		<div class="flex-1 min-w-[250px] h-80 flex flex-col justify-center items-center gap-5">
			<h3 class="font-bold text-7xl font-inter">
				+
				{#key experinceYears}
					<span class="inline-block text-center" in:fly={{ y: 20, opacity: 1 }}>
						{experinceYears}
					</span>
				{/key}
			</h3>
			<p class="text-center">{$t('años de experiencia')}</p>
		</div>
		<div class="flex-1 min-w-[250px] flex justify-center items-start h-80 overflow-y-auto">
			<div>
				{#each works as work, i}
					<a
						href={work.href}
						target="_blank"
						class="flex items-center gap-4 animate-slide-u-to-d p-1.5 hover:bg-grayblue hover:bg-opacity-20 dark:hover:bg-opacity-10 cursor-pointer rounded-md transition-all duration-200"
						style:animation-duration={`${300 * (i + 1)}ms`}
					>
						<div
							class="rounded-full flex items-center justify-center w-10 h-10 bg-grayblue bg-opacity-0 dark:bg-opacity-10"
						>
							<svelte:component this={work.icon} />
						</div>
						<div class="flex flex-col gap-0">
							<p>{$t(work.title)}</p>
							<p class="text-base text-secondary">
								{$t(work.desc)}
							</p>
						</div>
					</a>
					{#if i != works.length - 1}
						<div
							class="ml-[23px] my-1 h-12 w-px bg-darkblue dark:bg-grayblue animate-slide-u-to-d"
							style:animation-duration={`${300 * (i + 1)}ms`}
						/>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</section>
