<script lang="ts">
	import { onMount } from 'svelte';
	import { crossfade, fade, fly } from 'svelte/transition';
	import { quintOut, cubicInOut } from 'svelte/easing';
	import homeContent from '@content/home';
	import Show from './Show.svelte';

	const slides = homeContent.slides;

	let show = 0;

	const [send, recieve] = crossfade({
		duration: (d) => Math.sqrt(d * 200),
		fallback: (node, params) => {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 600,
				easing: quintOut,
				css: (t) => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
			};
		}
	});

	function next() {
		show = (show + 1) % slides.length;
	}

	function previous() {
		if (show <= 0) {
			show = slides.length - 1;
		} else {
			show--;
		}
	}

	onMount(() => {
		setInterval(next, 5000);
	});
</script>

<section class="w-screen h-screen relative">
	<div class="relative block w-full h-full z-[1]">
		<div class="h-full container mx-auto flex items-center relative">
			<!-- {#each slides as slide, i}
				<Show when={show == i}>
					<div class="absolute inset-0 flex items-center">
						<div class="max-w-[800px] flex flex-col gap-10">
							<div transition:fade class="text-8xl text-white font-bold">
								{slide.title}
							</div>
							<div transition:fade class="text-white text-lg">
								{slide.description}
							</div>
							<div class="flex gap-20">
								<button transition:fade class="px-14 py-4 bg-white font-medium">Our Services</button
								>
							</div>
						</div>
					</div>
				</Show>
			{/each} -->
			{#key show}
				<div class="absolute inset-0 flex items-center">
					<div class="max-w-[800px] flex flex-col gap-10">
						<div
							in:fly={{ x: -100, duration: 2000, delay: 500, easing: cubicInOut }}
							out:fade
							class="text-8xl text-white font-bold"
						>
							{slides[show].title}
						</div>
						<div
							in:fly={{ x: -100, duration: 2000, delay: 700, easing: cubicInOut }}
							out:fade
							class="text-white text-lg"
						>
							{slides[show].description}
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
			<div class="absolute inset-0 overflow-hidden">
				<img
					class="w-full h-full object-cover opacity-0 transition-opacity duration-[3s] z-0"
					src={slide.image}
					alt="landing"
					class:active={show == i}
				/>
			</div>
		{/each}
	</div>
</section>

<style>
	.active {
		@apply opacity-100 z-[1] duration-[2s];
	}
</style>
