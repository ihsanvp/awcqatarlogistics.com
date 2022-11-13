<script lang="ts">
	import homeContent from '@content/home';
	import { fade, fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import Button from '@components/Button.svelte';

	export let active: number;

	const slides = homeContent.slides;
</script>

<div class="relative block w-full h-full z-[1]">
	<div class="h-full container mx-auto flex items-center relative">
		{#key active}
			<div class="absolute inset-0 flex items-center">
				<div class="max-w-[800px] flex flex-col gap-10">
					<div
						in:fly={{ x: -100, duration: 2000, delay: 500, easing: cubicInOut }}
						out:fade
						class="text-8xl text-white font-bold"
					>
						{slides[active].title}
					</div>
					<div
						in:fly={{ x: -100, duration: 2000, delay: 700, easing: cubicInOut }}
						out:fade
						class="text-white text-lg"
					>
						{slides[active].description}
					</div>
					<div class="flex gap-20">
						<div in:fly={{ x: -100, duration: 2000, delay: 900, easing: cubicInOut }} out:fade>
							<Button label="Our Services" />
						</div>
						<!-- <button
							in:fly={{ x: -100, duration: 2000, delay: 900, easing: cubicInOut }}
							out:fade
							class="relative first:px-14 py-4 bg-white font-medium"
							><span>Our Services</span>
							<div class="absolute inset-0 bg-orange-600">
								<span>Our Services</span>
							</div></button
						> -->
					</div>
				</div>
			</div>
		{/key}
	</div>
</div>
