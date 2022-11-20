<script>
	import Footer from '@components/footer/Footer.svelte';
	import Header from '@components/header/Header.svelte';
	import '../app.css';
</script>

<Header />
<main>
	<slot />
</main>
<Footer />
