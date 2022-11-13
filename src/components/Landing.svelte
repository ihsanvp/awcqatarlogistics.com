<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import homeContent from '@content/home';

	const slides = homeContent.slides;

	let current = 0;
	let initial = true;

	function next() {
		current = (current + 1) % slides.length;
	}

	function previous() {
		if (current <= 0) {
			current = slides.length - 1;
		} else {
			current--;
		}
	}

	onMount(() => {
		setInterval(next, 10000);
		initial = false;
	});
</script>

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
				class="absolute inset-0 overflow-hidden duration-[15s] transition-transform ease-linear"
				class:slide={!initial && current == i}
			>
				<img
					class="w-full h-full object-cover opacity-0 transition-opacity duration-[3s] z-0"
					src={slide.image}
					alt="landing"
					class:active={current == i}
				/>
			</div>
		{/each}
	</div>
</section>

<style>
	.active {
		@apply opacity-100 z-[1] duration-[2s];
	}
	.slide {
		@apply scale-[1.1];
	}
</style>
