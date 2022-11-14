<script lang="ts">
	import homeContent from '@content/home';
	import { fade, fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import Button from '@components/Button.svelte';
	import renderContent from '@helpers/renderContent';

	export let active: number;

	const slides = homeContent.slides;
</script>

<div class="relative block w-full h-full z-[1]">
	<div class="h-full container mx-auto flex items-center relative">
		{#key active}
			<div class="absolute inset-0 flex items-center justify-center md:items-start flex-col px-5">
				<div class="max-w-[800px] flex flex-col gap-5 lg:gap-[2vw]">
					<div
						in:fly={{ x: -100, duration: 2000, delay: 500, easing: cubicInOut }}
						out:fade
						class="text-[12vw] md:text-[6vw] lg:text-[4vw] leading-[1.1] text-white font-bold text-center md:text-left"
					>
						{@html renderContent(slides[active].title)}
					</div>
					<div
						in:fly={{ x: -100, duration: 2000, delay: 700, easing: cubicInOut }}
						out:fade
						class="text-white max-w-[700px] text-center md:text-left"
					>
						{slides[active].description}
					</div>
					<div class="flex gap-20 items-center justify-center md:justify-start">
						<div in:fly={{ x: -100, duration: 2000, delay: 900, easing: cubicInOut }} out:fade>
							<Button label="Our Services" />
						</div>
					</div>
				</div>
			</div>
		{/key}
	</div>
</div>
