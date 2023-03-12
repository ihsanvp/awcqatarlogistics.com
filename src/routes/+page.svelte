<script>
	// Layouts
	import AboutSection from '@components/layouts/about/AboutSection.svelte';
	import ServicesDescriptionSection from '@components/layouts/services-description/ServicesDescriptionSection.svelte';
	import LandingSection from '@components/layouts/landing/LandingSection.svelte';
	import CoreValuesSection from '@components/layouts/core-values/CoreValuesSection.svelte';
	import ServicesCardsSection from '@components/layouts/services-cards/ServicesCardsSection.svelte';
	import StatsSection from '@components/layouts/stats/StatsSection.svelte';
	import ClearingSection from '@components/layouts/clearing/ClearingSection.svelte';
	import ContactSection from '@components/layouts/contact/ContactSection.svelte';

	// Images
	import aboutImg from '@assets/images/about.jpg?responsive';
	import coreValueImg from '@assets/images/core-values.jpg?responsive';
	import statsImg from '@assets/images/service-4.jpg?responsive';
	import clearingImg from '@assets/images/clearing.jpg?responsive';
	import contactImg from '@assets/images/sea-bg.jpg?responsive';

	import slide1 from '@assets/images/slide-1.jpg?responsive';
	import slide2 from '@assets/images/slide-2.jpg?responsive';
	import slide3 from '@assets/images/slide-3.jpg?responsive';

	import service1 from '@assets/images/service-1.jpg?responsive';
	import service2 from '@assets/images/service-2.jpg?responsive';
	import service3 from '@assets/images/service-3.jpg?responsive';
	import service4 from '@assets/images/service-4.jpg?responsive';

	import stats1 from '@assets/icons/stats-1.png';
	import stats2 from '@assets/icons/stats-2.png';
	import stats3 from '@assets/icons/stats-3.png';

	// Service Icons
	import AirServiceIcon from '@components/icons/AirServiceIcon.svelte';
	import OceanServiceIcon from '@components/icons/OceanServiceIcon.svelte';
	import RoadServiceIcon from '@components/icons/RoadServiceIcon.svelte';
	import WarehouseServiceIcon from '@components/icons/WarehouseServiceIcon.svelte';

	// Iconify Icons
	import MissionIcon from '@iconify-icons/mdi/smart-card';
	import VisionIcon from '@iconify-icons/mdi/drug-off';
</script>

<svelte:head>
	<title>AWC Qatar Logistics</title>
	<meta
		name="description"
		content="We offer a comprehensive range of cargo services in optimum time both within Qatar and GCC countries."
	/>
</svelte:head>
<section id="home">
	<LandingSection
		duration={5}
		slides={[
			{
				title: 'One-stop Solution \n for all Your Logistics \n Requirements',
				image: slide1,
				description:
					'We offer a comprehensive range of cargo services \n in optimum time both within Qatar and GCC countries.'
			},
			{
				title: 'Flexible, Trustable & \n Speedy Cargo Services',
				image: slide2,
				description:
					'We offer a comprehensive range of cargo services \n in optimum time both within Qatar and GCC countries.'
			},
			{
				title: `Hassle-free Freight \n Forwarding and \n Clearances`,
				image: slide3,
				description:
					'We offer a comprehensive range of cargo services \n in optimum time both within Qatar and GCC countries.'
			}
		]}
	/>
</section>

<section class="-mt-[25vh] pt-20" id="about">
	<AboutSection
		title="Our Logistics & Transport Solutions are Reliable, Secure, and Swift to meet every Client's Requirements"
		description="
			As one of the leading logistics solution provider in the region, we strive to
			provide customers with high-quality, cost effective, integrated solutions tailored
			to meet their needs. We offer flexible logistics solutions for both domestic and
			regional customers. No need to wait, we're happy to deliver to your destination.
		"
		points={[
			'Quality & Commitment',
			'Fast & Efficient Delivery',
			'Experienced Logistic Team',
			'24/7 Customer Support'
		]}
		image={aboutImg}
	/>
</section>

<section class="pt-20" id="services">
	<ServicesDescriptionSection
		services={[
			{
				title: 'Sea Cargo \n Services',
				icon: OceanServiceIcon,
				description: `
					Sea freight is always an efficient and cost-effective way of moving goods. By
          leveraging our long-term carrier relationships, we provide you with flexible, reliable
          and secure ocean freight services.
				`
			},
			{
				title: 'Air Cargo \n Services',
				icon: AirServiceIcon,
				description: `
					We deliver whatever you need - whenever you want it. We partner with the best airlines and
					partners to bring your cargo to you on time with cost-effective, competitive, and speedy
					service.
				`
			},
			{
				title: 'Land Cargo \n Services',
				icon: RoadServiceIcon,
				description: `
					By utilizing our expertise and movebility, we can meet your land cargo needs at an
					affordable price. We handle all types of cargo, both commercial and personal, in the major
					GCC and Middle East countries.
				`
			},
			{
				title: 'Warehousing \n & Storage Services',
				icon: WarehouseServiceIcon,
				description: `
					We provide dedicated storage & shared user workspaces for cargo, ensuring its safety with
					fire & security systems. For short-term and long-term storage, we provide flexible
					warehousing solutions.
				`
			}
		]}
	/>

	<CoreValuesSection
		title="Our Core Values in the Logistics Industry"
		image={coreValueImg}
		values={[
			{
				title: 'Our Mission',
				icon: MissionIcon,
				description:
					'To provide reliable, innovative and hassle-free logistic services to achieve customer delight.'
			},
			{
				title: 'Our Vision',
				icon: VisionIcon,
				description:
					'To become a key logistic partner for our esteemed customers by consistently adding value to their business and creating an enduring relationship.'
			}
		]}
	/>

	<ServicesCardsSection
		subtitle="Services We Offer"
		title="We Manage Logistics Services for both Commercial and Private Clients."
		description="
			Using our regional logistics expertise and advanced cargo handling systems & custom
			logistics solutions, we help you analyze, develop, and implement successful businesses
			in the modern fast world.
		"
		cards={[
			{
				title: 'Air Freight',
				icon: AirServiceIcon,
				bg: service1,
				points: ['Air Delivery', 'Express Services', 'Air Charter Services', 'NFO Services']
			},
			{
				title: 'Ocean Freight',
				icon: OceanServiceIcon,
				bg: service2,
				points: ['Dry Container', 'Platform Container', 'Reefer Container', 'Customised Options']
			},
			{
				title: 'Road Freight',
				icon: RoadServiceIcon,
				bg: service3,
				points: ['Truck Delivery', 'Door to Door', 'Cargo Consolidation', 'Full Truck Load']
			},
			{
				title: 'Warehousing & Storage',
				icon: WarehouseServiceIcon,
				bg: service4,
				points: [
					'Warehousing Management',
					'Long / Short Term Storage',
					'Closed / Open Warehouses',
					'Container Storage'
				]
			}
		]}
	/>
</section>

<section id="support">
	<StatsSection
		subtitle="Your Package, Our Call"
		title={'Our Quality Services, \n Save Your Time!'}
		description="
			Need someone to take care of your logistics needs or not sure which logistics solution
			would be right for you? Please contact us. Our team of professionals will be happy to
			help.
		"
		button="Get In Touch"
		bg={statsImg}
		stats={[
			{
				label: 'Satisfied \n Clients',
				count: '3,614',
				icon: stats1
			},
			{
				label: 'Delivered \n Goods',
				count: '7,254',
				icon: stats2
			},
			{
				label: 'Destinations \n Covered',
				count: '45',
				icon: stats3
			}
		]}
	/>

	<ClearingSection
		title="Clearing and Forwarding"
		image={clearingImg}
		points={[
			'Customs Clearances',
			'Import / Export Documentation',
			'Carting / Receiving Goods',
			'Examination of Shipments',
			'Handling of stuffing de-stuffing at Ports',
			'24x7 Support at Air and Sea entry ports'
		]}
	>
		<p class="leading-[1.6]  text-center lg:text-left">
			We provide comprehensive and efficient customs clearance services for all modes of shipment,
			including air, sea, and land. We prepare and handle everything from document preparation and
			handing in to monitoring and solving problems, which is in accordance with the law of the
			land.
		</p>
		<p class="leading-[1.6]  text-center lg:text-left">
			We are committed to operational excellence through innovation and continual improvement in
			achieving the objectives of providing impeccable quality solutions to our customers and
			trusted partners.
		</p>
	</ClearingSection>
</section>

<section class="pt-20" id="contact">
	<ContactSection
		title={'Get a Free \n Call Back'}
		info="How can we help you?"
		bg={contactImg}
		description="
			If you wish to speak to us about a general query 
			fill in the form here and we are happy to call you back within the same working day.
		"
	/>
</section>
