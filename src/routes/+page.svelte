<script>
	import Landing from '@components/landing/Landing.svelte';
	import StatsCard from '@components/cards/StatsCard.svelte';
	import ServiceBgCard from '@components/cards/ServiceBGCard.svelte';

	import bgImage from '@assets/images/landing-3.jpg';
	import aboutImage from '@assets/images/about.jpg';

	import st1 from '@assets/icons/stats-1.png';
	import st2 from '@assets/icons/stats-2.png';
	import st3 from '@assets/icons/stats-3.png';

	import s1 from '@assets/images/landing-1.jpg';
	import s2 from '@assets/images/landing-2.jpg';
	import s3 from '@assets/images/landing-3.jpg';
	import s4 from '@assets/images/landing-4.jpg';

	import f1 from '@assets/icons/feature-1.png';
	import f2 from '@assets/icons/feature-2.png';
	import f3 from '@assets/icons/feature-3.png';
	import f4 from '@assets/icons/feature-4.png';
	import f5 from '@assets/icons/feature-5.png';
	import f6 from '@assets/icons/feature-6.png';
	import f7 from '@assets/icons/feature-7.png';

	import AirServiceIcon from '@components/icons/AirServiceIcon.svelte';
	import OceanServiceIcon from '@components/icons/OceanServiceIcon.svelte';
	import RoadServiceIcon from '@components/icons/RoadServiceIcon.svelte';
	import WarehouseServiceIcon from '@components/icons/WarehouseServiceIcon.svelte';
	import FeatureCard from '@components/cards/FeatureCard.svelte';
	import ServiceCard from '@components/cards/ServiceCard.svelte';
	import GoalCard from '@components/cards/GoalCard.svelte';
	import AboutCard from '@components/cards/AboutCard.svelte';
	import renderContent from '@helpers/renderContent';
	import ABOUT from '@data/about';
	import SERVICES from '@data/services';
	import Icon from '@iconify/svelte';
	import MissionIcon from '@iconify-icons/mdi/smart-card';
	import VisionIcon from '@iconify-icons/mdi/drug-off';
	import GOAL from '@data/goal';
</script>

<Landing />

<section class="section">
	<div class="container mx-auto">
		<div class="grid grid-cols-6 place-items-center">
			<div class="col-span-6 lg:col-span-4">
				<div class="text-4xl md:text-5xl font-bold leading-[1.3] md:leading-[1.4]">
					{@html renderContent(ABOUT.content.title)}
				</div>
				<div class="text-gray-600 lg:pr-40 leading-[1.6] mt-10">
					{@html renderContent(ABOUT.content.detail)}
				</div>
				<div class="mt-10 flex flex-col gap-5">
					{#each ABOUT.content.cards as card}
						<AboutCard>{@html renderContent(card)}</AboutCard>
					{/each}
				</div>
			</div>
			<div class="w-full h-full col-span-2 md:p-5 hidden md:block">
				<div class="w-full h-full flex items-center justify-center overflow-hidden">
					<img class="w-auto h-full" src={ABOUT.image.url} alt={ABOUT.image.url} />
				</div>
			</div>
		</div>
	</div>
</section>

<section class="section">
	<div class="container mx-auto">
		<div class="grid grid-cols-1 md:grid-cols-4 gap-32 md:gap-4 mt-20 md:mt-40">
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

<section class="section relative">
	<div class="absolute inset-0 z-[-1]">
		<div class="w-full h-full flex">
			<div class="flex-1 hidden md:block w-full h-full">
				<img class="w-full h-full object-cover" src={s1} alt="bg" />
			</div>
			<div class="flex-1 w-full h-full bg-gradient-to-r from-orange-600 to-orange-700" />
		</div>
	</div>
	<div class="container mx-auto py-32 md:py-40">
		<div class="flex gap-40">
			<div class="flex-1 hidden md:block" />
			<div class="flex-1 text-white">
				<div class="text-4xl md:text-5xl font-bold">{@html renderContent(GOAL.title)}</div>
				{#each GOAL.cards as card}
					<GoalCard title={card.title} icon={card.icon}>
						{@html renderContent(card.description)}
					</GoalCard>
				{/each}
			</div>
		</div>
	</div>
</section>

<section class="section">
	<div class="container mx-auto">
		<div class="text-center text-orange-600 font-medium text-sm">Your Package, Your Rules</div>
		<div
			class="mt-3 md:mt-5 text-4xl md:text-4xl font-bold text-center flex items-center justify-center"
		>
			<div class="max-w-[700px] capitalize">The vision to work every day to earn our customers</div>
		</div>
		<div class="mt-20 md:mt-40 grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-20 items-center">
			<FeatureCard title="Transparent Pricing" icon={f1}>
				The world of international supply chains involves a myriad of unknown risks and challenging
				regulations.
			</FeatureCard>
			<FeatureCard title="Real-Time Tracking" icon={f2}>
				We ensure our customer's supply chains are fully compliant by our comprehensive practices
				and programs.
			</FeatureCard>
			<FeatureCard title="Warehouse Storage" icon={f3}>
				Depending on your product, needs and requirements, we provide professional warehouse
				activities.
			</FeatureCard>
			<FeatureCard title="Security For Cargo" icon={f4}>
				Our facilities meet high security requirements and are certified to the highest local
				standards.
			</FeatureCard>
			<FeatureCard title="Easy Payment Methods" icon={f5}>
				You can make use the easy convenient payment options, listed below, that are available in
				your country.
			</FeatureCard>
			<FeatureCard title="24/7 Hours Support" icon={f6}>
				We enhance our logistics operations by relieving you of the worries associated with freight
				forwarding.
			</FeatureCard>
			<FeatureCard title="Fast & Efficient Delivery" icon={f7}>
				We enhance our logistics operations by relieving you of the worries associated with freight
				forwarding.
			</FeatureCard>
			<FeatureCard title="Transparent Pricing" icon={f1}>
				The world of international supply chains involves a myriad of unknown risks and challenging
				regulations.
			</FeatureCard>
		</div>
	</div>
</section>

<section class="section relative">
	<div class="container mx-auto text-white py-32 md:py-60">
		<div class="flex flex-col md:flex-row items-center gap-16 md:gap-10 justify-between">
			<div class="flex-1 flex flex-col gap-3 md:gap-5">
				<div class="font-medium text-sm md:text-xl text-center md:text-left">
					Your Package, Your Rules
				</div>
				<div class="font-bold text-4xl md:text-5xl text-center md:text-left">
					Digital Freight <br /> That Saves Your Time!
				</div>
				<div class="max-w-[600px] text-center md:text-left">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, cupiditate nihil
					quidem sapiente quaerat sequi ullam quo, aperiam accusantium dolorem laudantium itaque
					alias fuga minus nesciunt nisi a quisquam et?
				</div>
			</div>
			<div class="w-full md:w-auto flex items-center justify-around md:justify-end gap-2 md:gap-20">
				<StatsCard icon={st1} amount={3214} label="Clients Worldwide" />
				<StatsCard icon={st2} amount={5154} label="Delivered Goods" />
				<StatsCard icon={st3} amount={8845} label="Miles Driven" />
			</div>
		</div>
	</div>
	<div class="absolute inset-0 z-[-1]">
		<img class="w-full h-full object-cover" src={bgImage} alt="bg" />
	</div>
</section>

<!-- 
<section class="section">
	<div class="container mx-auto">
		<div>
			<div class="text-orange-600 font-medium text-sm text-center md:text-left">
				Services We Offer
			</div>
			<div class="flex flex-col md:flex-row mt-5 gap-5">
				<div class="text-3xl md:text-4xl font-bold leading-[1.2] md:pr-20 text-center md:text-left">
					We Manage Lead Logistics For World's Multinational Companies.
				</div>
				<div class="text-gray-600 leading-[1.6] text-center md:text-left">
					Our global logistics expertise, advanced supply chain technology & customized logistics
					solutions will help you analyze, develop and implement successful supply chain management
					strategies from end-to-end.
				</div>
			</div>
		</div>

		<div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 md:mt-20">
			<ServiceBgCard title="Air Freight" bg={s1}>
				<svelte:fragment slot="icon">
					<AirServiceIcon class="w-full" />
				</svelte:fragment>
			</ServiceBgCard>

			<ServiceBgCard title="Ocean Freight" bg={s1}>
				<svelte:fragment slot="icon">
					<OceanServiceIcon class="w-full" />
				</svelte:fragment>
			</ServiceBgCard>

			<ServiceBgCard title="Road Freight" bg={s1}>
				<svelte:fragment slot="icon">
					<RoadServiceIcon class="w-full" />
				</svelte:fragment>
			</ServiceBgCard>

			<ServiceBgCard title="Consolidated Logistics" bg={s1}>
				<svelte:fragment slot="icon">
					<WarehouseServiceIcon class="w-full" />
				</svelte:fragment>
			</ServiceBgCard>
		</div>
	</div>
</section> -->
<style>
	.section {
		@apply my-32 lg:my-60;
	}
</style>
