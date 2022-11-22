import type { IconifyIcon } from '@iconify/svelte';

import FacebookIcon from '@iconify-icons/mdi/facebook';
import TwitterIcon from '@iconify-icons/mdi/twitter';
import InstagramIcon from '@iconify-icons/mdi/instagram';
import YoutubeIcon from '@iconify-icons/mdi/youtube';

interface SocialData {
	icon: IconifyIcon;
	url?: string;
}

interface ContactData {
	socials: SocialData[];
}

const CONTACT: ContactData = {
	socials: [
		{ icon: FacebookIcon },
		{ icon: InstagramIcon },
		{ icon: TwitterIcon },
		{ icon: YoutubeIcon }
	]
};

export default CONTACT;
