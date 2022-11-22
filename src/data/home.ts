import aboutImage from '@assets/images/about.jpg';

interface HomeData {
	about: {
		image: {
			url: string;
			alt: string;
		};
		content: {
			title: string;
			detail: string;
			cards: string[];
		};
	};
}

const HOME: HomeData = {
	about: {
		image: {
			url: aboutImage,
			alt: 'about-image'
		},
		content: {
			title: `Safe, Reliable And Express Logistic`,
			detail: `
      We pride ourselves on providing the best transport and shipping services available allover the world. 
      Our skilled personnel, utilising the latest communications, tracking and processing software, combined with decades of experience!
    `,
			cards: [
				`Quality Control System,100% Satisfaction Guarantee`,
				`Quality Control System,100% Satisfaction Guarantee`,
				`Quality Control System,100% Satisfaction Guarantee`
			]
		}
	}
};

export default HOME;
