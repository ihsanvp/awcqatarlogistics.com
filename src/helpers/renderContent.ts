export default function renderContent(content: string) {
	let html = content;

	html = html.replaceAll('\n', '<br />');
	html = html.replaceAll('{?', '<span>');
	html = html.replaceAll('?}', '</span>');

	return html;
}
