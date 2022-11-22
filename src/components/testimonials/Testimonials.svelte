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

<section class="section">
	<div class="container mx-auto">
		<div class="text-center text-xl text-orange-600 font-medium">Client Testimonials</div>
		<div class="relative w-full mt-10 h-[500px]">
			{#key active}
				<div
					in:fly={{ duration: 1000, x: inX, easing: quintInOut }}
					out:fly={{ duration: 1000, x: outX, easing: quintInOut }}
					class="absolute inset-0"
				>
					<div
						transition:fade={{ duration: 1000 }}
						class="absolute inset-0 flex items-center justify-center overflow-hidden"
					>
						<div class="relative  max-w-[800px] ">
							<div class="absolute top-[-150px] left-[-100px] text-gray-100 text-[300px] z-[-1]">
								❝
							</div>
							<div class="text-center text-2xl text-gray-500 font-medium leading-[2]">
								{slides[active].description}
							</div>
						</div>
					</div>
				</div>
			{/key}
		</div>
		<div class="flex items-center justify-center gap-20 mt-10">
			{#each slides as slide, i}
				<button
					class="flex flex-col items-center justify-center gap-2 client"
					class:active={i == active}
					on:click={() => setActive(i)}
				>
					<div class="w-16 h-16 overflow-hidden rounded-full">
						<img class="w-full h-full object-cover" src={slide.image} alt={slide.name} />
					</div>
					<div class="text-xl font-bold">{slide.name}</div>
					<div class="text-gray-500 text-sm">{slide.company}</div>
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
