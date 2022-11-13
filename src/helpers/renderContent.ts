export default function renderContent(content: string) {
	const html = content.replaceAll('\n', '<br />');

	return html;
}
