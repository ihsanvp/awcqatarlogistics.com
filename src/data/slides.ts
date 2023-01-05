import img1 from '@assets/images/landing-1.jpg';
import img2 from '@assets/images/landing-2.jpg';
import img3 from '@assets/images/landing-3.jpg';
import type { HomeContent } from 'src/models/content';

const homeContent: HomeContent = {
	slides: [
		{
			title: 'One-stop Solution for all Your Logistics Requirements',
			description: `We offer a comprehensive range of cargo services in optimum time both within Qatar and GCC countries.`,
			image: img1
		},
		{
			title: 'Flexible, Trustable & Speedy Cargo Services',
			description: `We offer a comprehensive range of cargo services in optimum time both within Qatar and GCC countries.`,
			image: img2
		},
		{
			title: 'Hassle-free Freight Forwarding and Clearances',
			description: `We offer a comprehensive range of cargo services in optimum time both within Qatar and GCC countries.`,
			image: img3
		}
	]
};

export default homeContent;
