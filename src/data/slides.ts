import img1 from '@assets/images/landing-1.jpg';
import img2 from '@assets/images/landing-2.jpg';
import img3 from '@assets/images/landing-3.jpg';
import img4 from '@assets/images/landing-4.jpg';
import AirServiceIconSvelte from '@components/icons/AirServiceIcon.svelte';
import OceanServiceIconSvelte from '@components/icons/OceanServiceIcon.svelte';
import RoadServiceIconSvelte from '@components/icons/RoadServiceIcon.svelte';
import WarehouseServiceIconSvelte from '@components/icons/WarehouseServiceIcon.svelte';
import type { HomeContent } from 'src/models/content';

const homeContent: HomeContent = {
	slides: [
		{
			title: 'Safe & Reliable \n Cargo Solutions!',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, fuga alias! At dolore
      mollitia labore quibusdam, illo laboriosam quia voluptatibus.`,
			image: img1,
			category: 'Warehousing \n Services',
			icon: WarehouseServiceIconSvelte
		},
		{
			title: 'Air Freight That \n Saves Your Time',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, fuga alias! At dolore
      mollitia labore quibusdam, illo laboriosam quia voluptatibus.`,
			image: img2,
			category: 'Air Freight \n Services',
			icon: AirServiceIconSvelte
		},
		{
			title: 'Innovative Sea \n Transportation',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, fuga alias! At dolore
      mollitia labore quibusdam, illo laboriosam quia voluptatibus.`,
			image: img3,
			category: 'Ocean Freight \n Services',
			icon: OceanServiceIconSvelte
		},
		{
			title: 'Direction, That \n Matter!',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, fuga alias! At dolore
      mollitia labore quibusdam, illo laboriosam quia voluptatibus.`,
			image: img4,
			category: 'Road Freight \n Services',
			icon: RoadServiceIconSvelte
		}
	]
};

export default homeContent;
