<script lang="ts">
	import TESTIMONIALS from '@data/testimonials';
	import { onMount } from 'svelte';
	import { quintInOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';

	let active = 0;
	let timer: NodeJS.Timer | undefined;

	const offset = 40;

	let inX = -offset;
	let outX = offset;

	const slides = TESTIMONIALS.clients;

	function setDirection(direction: 'left' | 'right') {
		switch (direction) {
			case 'left':
				inX = offset;
				outX = -offset;
				break;

			case 'right':
				inX = -offset;
				outX = offset;
				break;
		}
	}

	function setActive(index: number) {
		stop();

		if (index > active) {
			setDirection('right');
		} else {
			setDirection('left');
		}

		active = index;
		start();
	}

	function start() {
		if (timer == undefined) {
			timer = setInterval(cycle, 5000);
		}
	}

	function stop() {
		if (timer != undefined) {
			clearInterval(timer);
			timer = undefined;
		}
	}

	function cycle() {
		setActive((active + 1) % slides.length);
	}

	onMount(() => {
		start();
	});
</script>

<section class="section bg-gray-100 py-40 overflow-hidden">
	<div class="container mx-auto">
		<div class="text-center text-xl text-orange-600 font-medium">Client Testimonials</div>
		<div class="relative w-full mt-10 h-[500px] md:h-[400px]">
			{#key active}
				<div
					in:fly={{ duration: 1000, x: inX, easing: quintInOut }}
					out:fly={{ duration: 1000, x: outX, easing: quintInOut }}
					class="absolute inset-0"
				>
					<div
						transition:fade={{ duration: 1000 }}
						class="absolute inset-0 flex items-center justify-center"
					>
						<div class="relative max-w-[800px] ">
							<div
								class="absolute top-[-75px] md:top-[-150px] md:left-[-100px] text-gray-200 text-[150px] md:text-[300px] z-[0]"
							>
								❝
							</div>
							<div
								class="z-[1] relative text-center px-5 md:px-0 text-lg leading-[2] md:text-2xl text-gray-500 font-medium md:leading-[1.7]"
							>
								{slides[active].description}
							</div>
						</div>
					</div>
				</div>
			{/key}
		</div>
		<div class="flex items-center justify-between md:justify-center md:gap-20 mt-10">
			{#each slides as slide, i}
				<button
					class="flex flex-col items-center justify-center gap-2 client"
					class:active={i == active}
					on:click={() => setActive(i)}
				>
					<div class="w-16 h-16 overflow-hidden rounded-full">
						<img class="w-full h-full object-cover" src={slide.image} alt={slide.name} />
					</div>
					<div class="md:text-xl font-bold text-center">{slide.name}</div>
					<div class="text-gray-500 text-sm text-center">{slide.company}</div>
				</button>
			{/each}
		</div>
	</div>
</section>

<style>
	.client {
		@apply transition-all duration-500 opacity-70 scale-90;
	}
	.client.active {
		@apply opacity-100 scale-100;
	}
</style>
