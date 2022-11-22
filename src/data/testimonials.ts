import img from '@assets/images/landing-1.jpg';

interface ClientData {
	name: string;
	company: string;
	image: string;
	description: string;
}

interface TestimonialsData {
	clients: ClientData[];
}

const TESTIMONIALS: TestimonialsData = {
	clients: [
		{
			name: 'Sami Wade',
			company: 'WhiteMov',
			image: img,
			description:
				'We pride ourselves on prosda asdas dasdviding the best transport and shipping services available allover the world. Our skilled personnel, utilising the latest communications, tracking and processing software, combined with decades of experience!'
		},
		{
			name: 'John Peter',
			company: 'Mov Inc',
			image: img,
			description:
				'We pride ourselves on prov sad das das dsad sa dsa dsa dsfgf hygu gjyutdgsfecr ec rhethtrvjuk tvfrscrc erec reuvyiktu kubtydv fy f ufu f fi g9ogl olol iding the best transport and shipping services available allover the world. Our skilled personnel, utilising the latest communications, tracking and processing software, combined with decades of experience!'
		},
		{
			name: 'Martin Hope',
			company: 'ProMov',
			image: img,
			description:
				'We pride ourselves on proasdnaksd sdjsa dbjas dsaj dsajbd sabjd sajbd sajd sajd sjb djsd asjbd viding the asd sd sd sdas dsa dSQWD EWRFER4W GERWEds ds best transport and shipping services available allover the world. Our skilled personnel, utilising the latest communications, tracking and processing software, combined with decades of experience!'
		}
	]
};

export default TESTIMONIALS;
