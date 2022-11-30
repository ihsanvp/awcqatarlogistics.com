interface HeaderLink {
	label: string;
	href?: string
}

interface HeaderData {
	links: HeaderLink[];
}

const HEADER: HeaderData = {
	links: [
		{ label: 'Home', href: "/" },
		{ label: 'About' },
		{ label: 'Services' },
		{ label: 'Support' },
		{ label: 'Contact', href: "/contact" }
	]
};

export default HEADER;
