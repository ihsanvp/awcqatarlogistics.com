import type { IconifyIcon } from '@iconify/svelte';

import FacebookIcon from '@iconify-icons/mdi/facebook';
import TwitterIcon from '@iconify-icons/mdi/twitter';
import InstagramIcon from '@iconify-icons/mdi/instagram';
import YoutubeIcon from '@iconify-icons/mdi/youtube';

interface ContactBlock {
	text: string;
	url?: string;
}

interface SocialData {
	icon: IconifyIcon;
	url?: string;
}

interface ContactData {
	mobile: ContactBlock;
	email: ContactBlock;
	address: ContactBlock;
	socials: SocialData[];
}

const CONTACT: ContactData = {
	mobile: {
		text: '+012 (345) 556 99',
		url: 'tel:917994152171'
	},
	email: {
		text: 'support@gmail.com',
		url: 'mailto:ihsanvp2738@gmail.com'
	},
	address: {
		text: `North Avenue,
		Chicago, IL, 55030`,
		url: 'https://goo.gl/maps/eQ9qXAfdLyxo7wzJ6'
	},
	socials: [
		{ icon: FacebookIcon },
		{ icon: InstagramIcon },
		{ icon: TwitterIcon },
		{ icon: YoutubeIcon }
	]
};

export default CONTACT;
