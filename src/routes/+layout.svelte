<script>
	import PageTransition from '@components/common/PageTransition.svelte';
	import Footer from '@components/footer/Footer.svelte';
	import Header from '@components/header/Header.svelte';
	import { onMount } from 'svelte';
	import '../app.css';

	/** @type {import('./$types').PageData} */
	export let data;

	onMount(() => {
		if (typeof document != 'undefined') {
			document.documentElement.style.scrollBehavior = 'smooth';
		}
	});
</script>

<Header />
<PageTransition url={data.url}>
	<main>
		<slot />
	</main>
</PageTransition>
<Footer />
