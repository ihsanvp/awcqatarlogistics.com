interface HeaderLink {
	label: string;
}

interface HeaderContent {
	links: HeaderLink[];
}

const HEADER: HeaderContent = {
	links: [
		{ label: 'Home' },
		{ label: 'About' },
		{ label: 'Services' },
		{ label: 'Support' },
		{ label: 'Contact' }
	]
};

export default HEADER;
