<script>
	import Landing from '@components/landing/Landing.svelte';
	import StatsCard from '@components/cards/StatsCard.svelte';
	import ServiceBgCard from '@components/cards/ServiceBGCard.svelte';

	import st1 from '@assets/icons/stats-1.png';
	import st2 from '@assets/icons/stats-2.png';
	import st3 from '@assets/icons/stats-3.png';

	import s1 from '@assets/images/img-3.jpg?responsive';
	import s2 from '@assets/images/img-4.jpg?responsive';
	import s3 from '@assets/images/img-5.jpg?responsive';
	import s4 from '@assets/images/img-6.jpg?responsive';

	import AirServiceIcon from '@components/icons/AirServiceIcon.svelte';
	import OceanServiceIcon from '@components/icons/OceanServiceIcon.svelte';
	import RoadServiceIcon from '@components/icons/RoadServiceIcon.svelte';
	import WarehouseServiceIcon from '@components/icons/WarehouseServiceIcon.svelte';
	import ServiceCard from '@components/cards/ServiceCard.svelte';
	import GoalCard from '@components/cards/GoalCard.svelte';
	import AboutCard from '@components/cards/AboutCard.svelte';
	import renderContent from '@helpers/renderContent';
	import ABOUT from '@data/about';
	import SERVICES from '@data/services';
	import GOAL from '@data/goal';

	import testImage from '@assets/images/img-2.jpg?responsive';
	import goalsImage from '@assets/images/img-1.jpg?responsive';
	import statsImage from '@assets/images/img-6.jpg?responsive';

	import ResponsiveImage from '@components/common/ResponsiveImage.svelte';

	import { navigating, page } from '$app/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		if ($navigating && $navigating.to?.url.pathname == $page.url.pathname) {
			const hash = $navigating.to.url.hash.replace('#', '');
			document.documentElement.style.scrollBehavior = 'auto';
			setTimeout(() => {
				const t = document.getElementById(hash)?.getBoundingClientRect();
				window.scrollTo({
					top: t?.top || 0
				});

				document.documentElement.style.scrollBehavior = 'smooth';
			}, 500);
		}
	});
</script>

<Landing />

<section class="pt-[100px] mt-5" id="about">
	<div class="container mx-auto">
		<div
			class="grid grid-cols-6 place-items-center gap-5 bg-white relative px-5 py-10 lg:px-10 lg:py-10 xl:px-20 xl:py-20"
		>
			<div class="col-span-6 lg:col-span-3 xl:col-span-4 xl:pr-20">
				<div
					class="text-3xl md:text-4xl font-bold leading-[1.3] md:leading-[1.4] 2xl:pr-20 text-center lg:text-left"
				>
					{@html renderContent(ABOUT.content.title)}
				</div>
				<div class="flex flex-col items-center justify-center">
					<div class="max-w-[500px]">
						<div class="lg:pr-20 pl-8  mt-10 relative">
							<div class="absolute top-0 bottom-0 left-0 w-1 bg-gray-200" />
							<div class="leading-[1.6] text-gray-600">
								{@html renderContent(ABOUT.content.detail)}
							</div>
						</div>
						<div class="mt-10 flex flex-col gap-5">
							{#each ABOUT.content.cards as card}
								<AboutCard>{@html renderContent(card)}</AboutCard>
							{/each}
						</div>
					</div>
				</div>
			</div>
			<div class="w-full h-full col-span-2 lg:col-span-3 xl:col-span-2 md:p-5 hidden lg:block">
				<div class="w-full h-full flex items-center justify-center overflow-hidden">
					<ResponsiveImage class="w-auto h-full" src={testImage} alt="about" />
				</div>
			</div>
		</div>
	</div>
</section>

<section id="services">
	<section class="pt-[100px] pb-40">
		<div class="container mx-auto">
			<div
				class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-32 sm:gap-10 md:gap-32 lg:gap-4 mt-20 md:mt-40"
			>
				{#each SERVICES.cards as card}
					<ServiceCard>
						<svelte:component this={card.icon} slot="icon" class="w-full" />
						<svelte:fragment slot="title">
							{@html renderContent(card.title)}
						</svelte:fragment>
						<svelte:fragment>
							{@html renderContent(card.detail)}
						</svelte:fragment>
					</ServiceCard>
				{/each}
			</div>
		</div>
	</section>

	<section class="py-10 my-20 md:my-40 relative">
		<div class="absolute inset-0">
			<div class="w-full h-full flex">
				<div class="flex-1 hidden lg:block w-full h-full">
					<ResponsiveImage class="w-full h-full object-cover" src={goalsImage} alt="goals" />
				</div>
				<div class="flex-1 w-full h-full bg-gradient-to-r from-secondary to-blue-600" />
			</div>
		</div>
		<div class="relative container mx-auto py-10 md:py-20">
			<div class="flex gap-20 xl:gap-40">
				<div class="flex-1 hidden lg:block" />
				<div class="flex-1 text-white">
					<div class="text-4xl md:text-5xl font-bold text-center lg:text-left">
						{@html renderContent(GOAL.title)}
					</div>
					{#each GOAL.cards as card}
						<GoalCard title={card.title} icon={card.icon}>
							{@html renderContent(card.description)}
						</GoalCard>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<section class="py-20 my-20 md:my-60">
		<div class="container mx-auto">
			<div>
				<div class="text-secondary font-medium text-sm text-center md:text-left">
					Services We Offer
				</div>
				<div class="flex flex-col xl:flex-row mt-5 gap-10 items-center">
					<div
						class="text-3xl md:text-4xl font-bold leading-[1.2] lg:pr-40 xl:pr-0 2xl:pr-20 text-center md:text-left"
					>
						We Manage Lead Logistics For World's Multinational Companies.
					</div>
					<div class="text-gray-600 leading-[1.6] text-center md:text-left">
						Our global logistics expertise, advanced supply chain technology & customized logistics
						solutions will help you analyze, develop and implement successful supply chain
						management strategies from end-to-end.
					</div>
				</div>
			</div>

			<div
				class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-10 lg:gap-4 xl:gap-4 mt-10 md:mt-20"
			>
				<ServiceBgCard title="Air Freight" bg={s1}>
					<svelte:fragment slot="icon">
						<AirServiceIcon class="w-full" />
					</svelte:fragment>
				</ServiceBgCard>

				<ServiceBgCard title="Ocean Freight" bg={s2}>
					<svelte:fragment slot="icon">
						<OceanServiceIcon class="w-full" />
					</svelte:fragment>
				</ServiceBgCard>

				<ServiceBgCard title="Road Freight" bg={s3}>
					<svelte:fragment slot="icon">
						<RoadServiceIcon class="w-full" />
					</svelte:fragment>
				</ServiceBgCard>

				<ServiceBgCard title="Consolidated Logistics" bg={s4}>
					<svelte:fragment slot="icon">
						<WarehouseServiceIcon class="w-full" />
					</svelte:fragment>
				</ServiceBgCard>
			</div>
		</div>
	</section>
</section>

<section class="pt-[100px]" id="support">
	<div class="relative">
		<div class="relative z-[1] container mx-auto text-white py-32 lg:py-60">
			<div class="flex flex-col lg:flex-row items-center gap-16 lg:gap-10 justify-between">
				<div class="flex-1 flex flex-col gap-3 lg:gap-5">
					<div class="font-medium text-sm lg:text-xl text-center lg:text-left">
						Your Package, Your Rules
					</div>
					<div class="font-bold text-4xl lg:text-5xl text-center lg:text-left">
						Digital Freight <br /> That Saves Your Time!
					</div>
					<div class="max-w-[600px] text-center lg:text-left">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, cupiditate nihil
						quidem sapiente quaerat sequi ullam quo, aperiam accusantium dolorem laudantium itaque
						alias fuga minus nesciunt nisi a quisquam et?
					</div>
				</div>
				<div
					class="w-full md:w-auto flex items-center justify-around md:justify-end gap-2 md:gap-20"
				>
					<StatsCard icon={st1} amount={3214} label="Clients Worldwide" />
					<StatsCard icon={st2} amount={5154} label="Delivered Goods" />
					<StatsCard icon={st3} amount={8845} label="Miles Driven" />
				</div>
			</div>
		</div>
		<div class="absolute inset-0">
			<ResponsiveImage class="w-full h-full object-cover" src={statsImage} alt="stats" />
		</div>
		<div class="absolute inset-0 bg-black opacity-70" />
	</div>
</section>
