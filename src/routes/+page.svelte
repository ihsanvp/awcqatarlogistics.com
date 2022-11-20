<script>
	import Landing from '@components/landing/Landing.svelte';
	import bgImage from '@assets/images/landing-3.jpg';
	import StatsCard from '@components/StatsCard.svelte';
</script>

<Landing />

<section class="section">
	<div class="container mx-auto">
		<div class="grid grid-cols-6">
			<div class="flex flex-col gap-10 col-span-6 lg:col-span-4">
				<div class="text-5xl font-bold leading-[1.1]">
					Safe, Reliable And Express Logistic & Transport Solutions That Saves Your Time!
				</div>
				<div class="text-xl font-medium lg:pr-40 leading-[1.5]">
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
	<div class="container mx-auto text-white py-60">
		<div class="flex items-end justify-between">
			<div class="flex-1 flex flex-col gap-5">
				<div class="font-medium text-xl">Your Package, Your Rules</div>
				<div class="font-bold text-5xl">Digital Freight <br /> That Saves Your Time!</div>
			</div>
			<div class="flex items-center justify-center gap-20">
				<StatsCard icon="Icon" amount={3214} label="Clients Worldwide" />
				<StatsCard icon="Icon" amount={5154} label="Delivered Goods" />
				<StatsCard icon="Icon" amount={8845} label="Miles Driven" />
			</div>
		</div>
	</div>
	<div class="absolute inset-0 z-[-1]">
		<img class="w-full h-full object-cover" src={bgImage} alt="bg" />
	</div>
</section>

<section class="section">
	<div class="container mx-auto">
		<div class="text-orange-600 font-medium">Services We Offer</div>
		<div class="grid grid-cols-6 mt-5">
			<div class="col-span-3">
				<div class="text-4xl font-bold leading-[1.2] pr-20">
					We Manage Lead Logistics For World's Multinational Companies.
				</div>
			</div>
			<div class="col-span-3">
				<div class="text-gray-600 leading-[1.6]">
					Our global logistics expertise, advanced supply chain technology & customized logistics
					solutions will help you analyze, develop and implement successful supply chain management
					strategies from end-to-end.
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.section {
		@apply my-20 lg:my-60;
	}
</style>
