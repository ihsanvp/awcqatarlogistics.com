import type { SvelteComponent } from 'svelte';

import AirServiceIcon from '@components/icons/AirServiceIcon.svelte';
import OceanServiceIcon from '@components/icons/OceanServiceIcon.svelte';
import RoadServiceIcon from '@components/icons/RoadServiceIcon.svelte';
import WarehouseServiceIcon from '@components/icons/WarehouseServiceIcon.svelte';

interface ServiceCard {
	icon: typeof SvelteComponent;
	title: string;
	detail: string;
}

interface ServicesData {
	cards: ServiceCard[];
}

const SERVICES: ServicesData = {
	cards: [
		{
			icon: RoadServiceIcon,
			title: `We Provide {?Road?} \n Freight In City`,
			detail: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quod quis facere quasi
        delectus voluptatibus architecto.
      `
		},
		{
			icon: AirServiceIcon,
			title: `We Provide {?Air?} \n Freight In City`,
			detail: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quod quis facere quasi
        delectus voluptatibus architecto.
      `
		},
		{
			icon: OceanServiceIcon,
			title: `We Provide {?Sea?} \n Freight In City`,
			detail: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quod quis facere quasi
        delectus voluptatibus architecto.
      `
		},
		{
			icon: WarehouseServiceIcon,
			title: `We Provide {?Storage?} \n Services In City`,
			detail: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quod quis facere quasi
        delectus voluptatibus architecto.
      `
		}
	]
};

export default SERVICES;
