<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import homeContent from '@content/home';
	import renderContent from '@helpers/renderContent';

	const slides = homeContent.slides;

	let current = 0;
	let timer: NodeJS.Timer | undefined;

	function next() {
		return (current + 1) % slides.length;
	}

	function previous() {
		if (current <= 0) {
			return slides.length - 1;
		}

		return current - 1;
	}

	function set(index: number) {
		if (index >= 0 && index < slides.length) {
			current = index;
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
<section class="w-screen h-screen relative">
	<div class="relative block w-full h-full z-[1]">
		<div class="h-full container mx-auto flex items-center relative">
			{#key current}
				<div class="absolute inset-0 flex items-center">
					<div class="max-w-[800px] flex flex-col gap-10">
						<div
							in:fly={{ x: -100, duration: 2000, delay: 500, easing: cubicInOut }}
							out:fade
							class="text-8xl text-white font-bold"
						>
							{slides[current].title}
						</div>
						<div
							in:fly={{ x: -100, duration: 2000, delay: 700, easing: cubicInOut }}
							out:fade
							class="text-white text-lg"
						>
							{slides[current].description}
						</div>
						<div class="flex gap-20">
							<button
								in:fly={{ x: -100, duration: 2000, delay: 900, easing: cubicInOut }}
								out:fade
								class="px-14 py-4 bg-white font-medium">Our Services</button
							>
						</div>
					</div>
				</div>
			{/key}
		</div>
	</div>
	<div class="absolute inset-0 overflow-hidden">
		{#each slides as slide, i}
			<div
				class="absolute inset-0 overflow-hidden duration-[15s] transition-transform ease-linear slide-zoom"
			>
				<img
					class="w-full h-full object-cover opacity-0 transition-opacity duration-[3s] z-0"
					src={slide.image}
					alt="landing"
					class:slideactive={current == i}
				/>
			</div>
		{/each}
	</div>
	<div class="absolute bottom-0 left-0 right-0 z-10">
		<div class="container mx-auto flex items-end gap-1">
			{#each slides as slide, i}
				<button
					class="h-[150px] relative flex-1 bg-black bg-opacity-50 px-20 flex flex-col justify-center gap-3 hover:bg-orange-600 hover:h-[160px] duration-300"
					class:controlsactive={current == i}
					on:click={() => onControlClick(i)}
				>
					<div>Icon</div>
					<div class="text-white text-left text-lg font-bold">
						{@html renderContent(slide.category)}
					</div>
				</button>
			{/each}
		</div>
	</div>
</section>

<style>
	.slideactive {
		@apply opacity-100 z-[1] duration-[2s];
	}
	.controlsactive {
		@apply bg-orange-600 h-[160px];
	}
	.controls {
		transition-property: background-color, padding;
	}
	.slide-zoom {
		animation: zoom 20s ease-in-out;
		animation-iteration-count: infinite;
	}
	@keyframes zoom {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.1);
		}
		100% {
			transform: scale(1);
		}
	}
</style>
