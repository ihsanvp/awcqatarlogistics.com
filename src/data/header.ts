interface HeaderLink {
	label: string;
	href: string;
	target?: string;
}

interface HeaderData {
	links: HeaderLink[];
}

const HEADER: HeaderData = {
	links: [
		{ label: 'Home', href: '/#home' },
		{ label: 'About', href: '/#about' },
		{ label: 'Services', href: '/#services' },
		{ label: 'Support', href: '/#support' },
		{ label: 'Contact', href: '/#contact' }
	]
};

export default HEADER;
