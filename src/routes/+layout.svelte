<script>
	import PageTransition from '@components/common/PageTransition.svelte';
	import Footer from '@components/footer/Footer.svelte';
	import Header from '@components/header/Header.svelte';
	import '../app.css';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<Header />
<PageTransition url={data.url}>
	<main>
		<slot />
	</main>
</PageTransition>
<Footer />
