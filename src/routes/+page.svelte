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

	import MissionIcon from '@iconify-icons/mdi/smart-card';
	import VisionIcon from '@iconify-icons/mdi/drug-off';

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
					Our Logistics & Transport Solutions are Reliable, Secure, and Swift to meet every Client's
					Requirements
				</div>
				<div class="flex flex-col items-center justify-center">
					<div class="max-w-[500px]">
						<div class="lg:pr-20 pl-8  mt-10 relative">
							<div class="absolute top-0 bottom-0 left-0 w-1 bg-gray-200" />
							<div class="leading-[1.6] text-gray-600">
								As one of the leading logistics solution providers in the region, we strive to
								provide customers with high-quality, cost effective, integrated solutions tailored
								to meet their needs. We offer flexible logistics solutions for both domestic and
								regional customers. No need to wait, we're happy to deliver to your destination.
							</div>
						</div>
						<div class="mt-10 flex flex-col gap-5">
							<AboutCard>Quality & Commitment</AboutCard>
							<AboutCard>Fast & Efficient Delivery</AboutCard>
							<AboutCard>Experienced Logistic Team</AboutCard>
							<AboutCard>24/7 Customer Support</AboutCard>
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
				class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-32 sm:gap-10 md:gap-32 lg:gap-10 mt-20 md:mt-40"
			>
				<ServiceCard>
					<svelte:component this={OceanServiceIcon} slot="icon" class="w-full" />
					<svelte:fragment slot="title"><span>Sea</span> Cargo <br /> Services</svelte:fragment>
					<svelte:fragment>
						The use of sea freight is always an efficient and cost-effective way of moving goods. By
						leveraging our long-term carrier relationships, we provide you with flexible, reliable
						and secure ocean freight services.
					</svelte:fragment>
				</ServiceCard>
				<ServiceCard>
					<svelte:component this={AirServiceIcon} slot="icon" class="w-full" />
					<svelte:fragment slot="title"><span>Air</span> Cargo <br /> Services</svelte:fragment>
					<svelte:fragment>
						When it comes to air freight, we deliver whatever you need - whenever you want it. We
						partner with the best airlines and partners to bring your cargo to you on time with
						cost-effective, competitive, and speedy service.
					</svelte:fragment>
				</ServiceCard>
				<ServiceCard>
					<svelte:component this={RoadServiceIcon} slot="icon" class="w-full" />
					<svelte:fragment slot="title"><span>Land</span> Cargo <br /> Services</svelte:fragment>
					<svelte:fragment>
						By utilizing our expertise and movebility, we can meet your land cargo needs at an
						affordable price. We handle all types of cargo, both commercial and personal, in the
						major GCC and Middle East countries.
					</svelte:fragment>
				</ServiceCard>
				<ServiceCard>
					<svelte:component this={OceanServiceIcon} slot="icon" class="w-full" />
					<svelte:fragment slot="title"
						><span>Warehousing</span> & Storage <br /> Services</svelte:fragment
					>
					<svelte:fragment>
						We provide dedicated storage & shared user workspaces for cargo, ensuring its safety
						with fire & security systems. For short-term and long-term storage, we provide flexible
						warehousing solutions.
					</svelte:fragment>
				</ServiceCard>
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
						Explore Our Core Values in the Logistics Industry
					</div>
					<GoalCard title="Our Mission" icon={MissionIcon}>
						To provide reliable, innovative and hassle-free logistic services to achieve customer
						delight.
					</GoalCard>
					<GoalCard title="Our Vision" icon={VisionIcon}>
						To become a key logistic partner for our esteemed customers by consistently adding value
						to their business and creating an enduring relationship.
					</GoalCard>
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
						We Manage Logistics Services for both Commercial and Private Clients.
					</div>
					<div class="text-gray-600 leading-[1.6] text-center md:text-left">
						Using our regional logistics expertise and advanced cargo handling systems & custom
						logistics solutions, we help you analyze, develop, and implement successful businesses
						in the modern world.
					</div>
				</div>
			</div>

			<div
				class="grid grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-10 lg:gap-4 xl:gap-4 mt-10 md:mt-20"
			>
				<ServiceBgCard
					title="Air Freight"
					bg={s1}
					icon={AirServiceIcon}
					points={['Air Delivery', 'Express Services', 'Air Charter Services', 'NFO Services']}
				/>

				<ServiceBgCard
					title="Ocean Freight"
					bg={s2}
					icon={OceanServiceIcon}
					points={['Dry Container', 'Platform Container', 'Reefer Container', 'Customised Options']}
				/>

				<ServiceBgCard
					title="Road Freight"
					bg={s3}
					icon={RoadServiceIcon}
					points={['Truck Delivery', 'Door to Door', 'Cargo Consolidation', 'Full Truck Load']}
				/>

				<ServiceBgCard
					title="Consolidated Logistics"
					bg={s4}
					icon={WarehouseServiceIcon}
					points={[
						'Warehousing Management',
						'Long / Short Term Storage',
						'Closed / Open Warehouses',
						'Container Storage'
					]}
				/>
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
						Your Package, Your Call
					</div>
					<div class="font-bold text-4xl lg:text-5xl text-center lg:text-left">
						Professional Services, <br /> Save Your Time!
					</div>
					<div class="max-w-[600px] text-center lg:text-left">
						Need someone to take care of your logistics needs or not sure which logistics solution
						would be right for you? Please contact us. Our team of professionals will be happy to
						help.
					</div>
					<div class="mt-5">
						<a
							href="https://wa.me/917994152171"
							class="relative text-secondary px-12 py-3 bg-white font-medium hover:bg-secondary transition-all duration-500 hover:text-white hover:scale-95"
						>
							Get In Touch
						</a>
					</div>
				</div>
				<div
					class="w-full md:w-auto flex items-center justify-around md:justify-end gap-2 md:gap-20"
				>
					<StatsCard icon={st1} amount={3614} label="Satisfied Clients" />
					<StatsCard icon={st2} amount={7254} label="Delivered Goods" />
					<StatsCard icon={st3} amount={45} label="Destinations Covered" />
				</div>
			</div>
		</div>
		<div class="absolute inset-0">
			<ResponsiveImage class="w-full h-full object-cover" src={statsImage} alt="stats" />
		</div>
		<div class="absolute inset-0 bg-black opacity-70" />
	</div>
</section>
