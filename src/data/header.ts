interface HeaderLink {
	label: string;
}

interface HeaderData {
	links: HeaderLink[];
}

const HEADER: HeaderData = {
	links: [
		{ label: 'Home' },
		{ label: 'About' },
		{ label: 'Services' },
		{ label: 'Support' },
		{ label: 'Contact' }
	]
};

export default HEADER;
