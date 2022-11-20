<script>
	import Landing from '@components/landing/Landing.svelte';
	import StatsCard from '@components/StatsCard.svelte';
	import ServiceBgCard from '@components/ServiceBGCard.svelte';

	import bgImage from '@assets/images/landing-3.jpg';

	import st1 from '@assets/icons/stats-1.png';
	import st2 from '@assets/icons/stats-2.png';
	import st3 from '@assets/icons/stats-3.png';

	import s1 from '@assets/images/landing-1.jpg';
	import s2 from '@assets/images/landing-2.jpg';
	import s3 from '@assets/images/landing-3.jpg';
	import s4 from '@assets/images/landing-4.jpg';
	import AirServiceIcon from '@components/icons/AirServiceIcon.svelte';
	import OceanServiceIcon from '@components/icons/OceanServiceIcon.svelte';
	import RoadServiceIcon from '@components/icons/RoadServiceIcon.svelte';
	import WarehouseServiceIcon from '@components/icons/WarehouseServiceIcon.svelte';
</script>

<Landing />

<section class="section">
	<div class="container mx-auto">
		<div class="grid grid-cols-6">
			<div class="flex flex-col gap-10 col-span-6 lg:col-span-4">
				<div class="text-3xl md:text-5xl font-bold leading-[1.3]">
					Safe, Reliable And Express Logistic & Transport Solutions That Saves Your Time!
				</div>
				<div class="text-xl font-medium lg:pr-40 leading-[1.4]">
					Logisti Group is a representative logistics operator providing full range of service in
					the sphere of customs clearance and transportation worldwide for any type of cargo.
				</div>
				<div class="text-gray-600 lg:pr-40 leading-[1.6]">
					We pride ourselves on providing the best transport and shipping services available allover
					the world. Our skilled personnel, utilising the latest communications, tracking and
					processing software, combined with decades of experience! Through integrated supply chain
					solutions, Logisti drives sustainable competitive advantages to some of Australia's
					largest companies.
				</div>
			</div>
		</div>
	</div>
</section>

<section class="section relative">
	<div class="container mx-auto text-white py-20 md:py-60">
		<div
			class="flex flex-col md:flex-row items-center gap-16 md:gap-10 md:items-end justify-between"
		>
			<div class="flex-1 flex flex-col gap-3 md:gap-5">
				<div class="font-medium md:text-xl text-center md:text-left">Your Package, Your Rules</div>
				<div class="font-bold text-3xl md:text-5xl text-center md:text-left">
					Digital Freight <br /> That Saves Your Time!
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

<section class="section">
	<div class="container mx-auto">
		<div>
			<div class="text-orange-600 font-medium text-sm">Services We Offer</div>
			<div class="flex flex-col md:flex-row mt-5 gap-5">
				<div class="text-2xl md:text-4xl font-bold leading-[1.2] md:pr-20">
					We Manage Lead Logistics For World's Multinational Companies.
				</div>
				<div class="text-gray-600 leading-[1.6]">
					Our global logistics expertise, advanced supply chain technology & customized logistics
					solutions will help you analyze, develop and implement successful supply chain management
					strategies from end-to-end.
				</div>
			</div>
		</div>

		<div class="grid grid-cols-4 gap-4 mt-10 md:mt-20">
			<div class="col-span-2 md:col-span-1">
				<ServiceBgCard title="Air Freight" bg={s1}>
					<svelte:fragment slot="icon">
						<AirServiceIcon class="w-full" />
					</svelte:fragment>
				</ServiceBgCard>
			</div>
			<div class="col-span-2 md:col-span-1">
				<ServiceBgCard title="Ocean Freight" bg={s1}>
					<svelte:fragment slot="icon">
						<OceanServiceIcon class="w-full" />
					</svelte:fragment>
				</ServiceBgCard>
			</div>
			<div class="col-span-2 md:col-span-1">
				<ServiceBgCard title="Road Freight" bg={s1}>
					<svelte:fragment slot="icon">
						<RoadServiceIcon class="w-full" />
					</svelte:fragment>
				</ServiceBgCard>
			</div>
			<div class="col-span-2 md:col-span-1">
				<ServiceBgCard title="Consolidated Logistics" bg={s1}>
					<svelte:fragment slot="icon">
						<WarehouseServiceIcon class="w-full" />
					</svelte:fragment>
				</ServiceBgCard>
			</div>
		</div>
	</div>
</section>

<style>
	.section {
		@apply my-20 lg:my-60;
	}
</style>
