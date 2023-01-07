<script lang="ts">
	import type { Slide } from 'src/models/slide';
	import { onMount } from 'svelte';

	import LandingContent from './LandingContent.svelte';
	import LandingBackground from './LandingBackground.svelte';

	export let slides: Slide[];
	export let duration: number;

	let activeIndex = 0;
	let timer: NodeJS.Timer | undefined;

	function next() {
		return (activeIndex + 1) % slides.length;
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

	onMount(() => {
		start(duration);
	});
</script>

<svelte:window on:focus={() => start(8)} on:blur={stop} />
<section class="w-full h-screen relative">
	<LandingContent active={activeIndex} {slides} />
	<LandingBackground active={activeIndex} {slides} />
</section>
