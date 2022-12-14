interface AboutData {
	image: {
		url: string;
		alt: string;
	};
	content: {
		title: string;
		detail: string;
		cards: string[];
	};
}

const ABOUT: AboutData = {
	image: {
		url: "",
		alt: 'about-image'
	},
	content: {
		title: `Safe, Reliable And Express Logistic & Transport Solutions That Saves Your Time!`,
		detail: `We pride ourselves on providing the best transport and shipping services available allover the world. Our skilled personnel, utilising the latest communications, tracking and processing software, combined with decades of experience!`,
		cards: [
			`Quality Control System,100% Satisfaction Guarantee`,
			`Quality Control System,100% Satisfaction Guarantee`,
			`Quality Control System,100% Satisfaction Guarantee`
		]
	}
};

export default ABOUT;
