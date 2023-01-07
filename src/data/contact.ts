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
		text: '+974 31393114',
		url: 'tel:+97431393114'
	},
	email: {
		text: `sales@awcqatarlogistics.com`,
		url: 'mailto:sales@awcqatarlogistics.com'
	},
	whatsapp: {
		text: '+974 3139 3114',
		url: 'https://wa.me/97431393114'
	},
	address: {
		text: `Sheikha Abdullah Bin Thani Building
		C Ring Road, Doha, Qatar,
		Office #04, Building #04,
		PO Box: 55247`,
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
