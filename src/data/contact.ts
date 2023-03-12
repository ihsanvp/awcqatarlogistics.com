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
	whatsapp: ContactBlock;
	socials: SocialData[];
}

const CONTACT: ContactData = {
	mobile: {
		text: '+974 40010916',
		url: 'tel:+97440010916'
	},
	email: {
		text: `operation@awcqatarlogistics.com`,
		url: 'mailto:operation@awcqatarlogistics.com'
	},
	whatsapp: {
		text: '+974 31393114',
		url: 'https://wa.me/97431393114'
	},
	address: {
		text: `Office #4, Building #04,
		Sheikh Abdullha Bin Thani Building,
		Zone 27, Street 230,
		Umm Ghuwailina, C Ring Road,
		Doha, Qatar`,
		url: 'https://goo.gl/maps/7ZbqBhwkxamwaMmc8'
	},
	socials: [
		{ icon: FacebookIcon },
		{ icon: InstagramIcon },
		{ icon: TwitterIcon },
		{ icon: YoutubeIcon }
	]
};

export default CONTACT;
