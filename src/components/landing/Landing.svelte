<script lang="ts">
	import { onMount } from 'svelte';
	import homeContent from '@data/slides';
	import Content from './Content.svelte';
	import Background from './Background.svelte';
	import Controls from './Controls.svelte';

	const slides = homeContent.slides;

	let activeIndex = 0;
	let timer: NodeJS.Timer | undefined;

	function next() {
		return (activeIndex + 1) % slides.length;
	}

	function previous() {
		if (activeIndex <= 0) {
			return slides.length - 1;
		}

		return activeIndex - 1;
	}

	function set(index: number) {
		if (index >= 0 && index < slides.length) {
			activeIndex = index;
		}
	}

	function start(interval: number) {
		if (timer == undefined) {
			timer = setInterval(() => set(next()), interval * 1000);
		}
	}

	function stop() {
		if (timer != undefined) {
			clearInterval(timer);
			timer = undefined;
		}
	}

	function onControlClick(index: number) {
		stop();
		set(index);
		start(8);
	}

	onMount(() => {
		start(10);
	});
</script>

<svelte:window on:focus={() => start(8)} on:blur={stop} />
<section class="w-full h-screen relative">
	<Content active={activeIndex} />
	<Background active={activeIndex} />
	<Controls active={activeIndex} onClick={onControlClick} />
</section>
