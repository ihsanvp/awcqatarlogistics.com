<script lang="ts">
	import { fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import Button from '@components/common/Button.svelte';
	import landing from '@animations/landing';
</script>

<div class="relative block w-full h-full z-[1]">
	<div class="h-full container mx-auto flex items-center relative">
		<div class="w-full h-full relative">
			<div class="absolute inset-0 flex items-center justify-center md:items-start flex-col">
				<div class="max-w-[800px] flex flex-col gap-5 lg:gap-[2vw]">
					<div
						class="text-[10vw] md:text-[6vw] lg:text-[4vw] leading-[1.1] text-white font-bold text-center md:text-left"
					>
						Safe & Reliable <br /> Cargo Solutions!
					</div>
					<div class="text-white max-w-[700px] text-center md:text-left">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, fuga alias! At dolore
						mollitia labore quibusdam, illo laboriosam quia voluptatibus.
					</div>
					<div class="flex gap-20 items-center justify-center md:justify-start">
						<div>
							<Button label="Our Services" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
