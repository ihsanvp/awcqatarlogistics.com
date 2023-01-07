<script>
	import Header from '@components/core/header/Header.svelte';
	import Footer from '@components/core/footer/Footer.svelte';
	import '../app.css';
</script>

<Header />
<main>
	<slot />
</main>
<Footer />
