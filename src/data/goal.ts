import type { IconifyIcon } from '@iconify/svelte';

import MissionIcon from '@iconify-icons/mdi/smart-card';
import VisionIcon from '@iconify-icons/mdi/drug-off';

interface GoalCard {
	icon: IconifyIcon;
	title: string;
	description: string;
}

interface GoalData {
	title: string;
	cards: GoalCard[];
}

const GOAL: GoalData = {
	title: `Explore Our Main Goals For Business`,
	cards: [
		{
			icon: MissionIcon,
			title: 'Mission',
			description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. In neque, blanditiis tenetur sint beatae doloremque quibusdam quam nisi maxime sit.`
		},
		{
			icon: VisionIcon,
			title: 'Vision',
			description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. In neque, blanditiis tenetur sint beatae doloremque quibusdam quam nisi maxime sit.`
		}
	]
};

export default GOAL;
