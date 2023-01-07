<script lang="ts">
	import type IMAGE from '*.jpg?responsive';
	import AnimatedImage from '@components/common/AnimatedImage.svelte';
	import ResponsiveImage from '@components/common/ResponsiveImage.svelte';
	import TickPoint from '@components/common/TickPoint.svelte';

	export let title: string;
	export let points: string[];
	export let image: typeof IMAGE;
</script>

<div class="my-60">
	<div class="container mx-auto grid grid-cols-12 place-items-center lg:gap-20">
		<div class="w-full h-full col-span-2 lg:col-span-6 xl:col-span-5 hidden lg:block">
			<div class="w-full h-full flex items-center justify-center">
				<AnimatedImage
					duration={1000}
					src={image}
					color="secondary"
					position="left"
					alt="clearing"
				/>
			</div>
		</div>
		<div class="col-span-12 lg:col-span-6 xl:col-span-7 xl:pr-5">
			<div
				class="text-3xl md:text-4xl font-bold leading-[1.3] md:leading-[1.4] text-center lg:text-left"
			>
				{title}
			</div>
			<div class="flex flex-col items-center justify-center">
				<div class="mt-10 flex flex-col gap-3 text-gray-600">
					<slot />
				</div>
				<div class="mt-10 flex flex-col gap-5">
					{#each points as point}
						<TickPoint color="primary">{point}</TickPoint>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
