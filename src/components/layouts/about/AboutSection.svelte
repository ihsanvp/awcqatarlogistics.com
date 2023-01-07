<script lang="ts">
	import type IImage from '*.jpg?responsive';
	import ResponsiveImage from '@components/common/ResponsiveImage.svelte';
	import TickPoint from '@components/common/TickPoint.svelte';

	export let title: string;
	export let description: string;
	export let points: string[];
	export let image: typeof IImage;
</script>

<div class="container mx-auto">
	<div
		class="grid grid-cols-12 place-items-center gap-5 bg-white relative px-5 py-10 lg:px-10 lg:py-10 xl:px-20 xl:py-20"
	>
		<div class="col-span-12 lg:col-span-6 xl:col-span-7 xl:pr-5">
			<div
				class="text-3xl md:text-4xl font-bold leading-[1.3] md:leading-[1.4] text-center lg:text-left"
			>
				{title}
			</div>
			<div class="flex flex-col items-center justify-center">
				<div class="max-w-[500px]">
					<div class="lg:pr-20 pl-8  mt-10 relative">
						<div class="absolute top-0 bottom-0 left-0 w-1 bg-gray-200" />
						<div class="leading-[1.6] text-gray-600">
							{description}
						</div>
					</div>
					<div class="mt-10 flex flex-col gap-5">
						{#each points as point}
							<TickPoint color="secondary">{point}</TickPoint>
						{/each}
					</div>
				</div>
			</div>
		</div>
		<div class="w-full h-full col-span-2 lg:col-span-6 xl:col-span-5 md:p-5 hidden lg:block">
			<div class="w-full h-full flex items-center justify-center overflow-hidden">
				<ResponsiveImage class="w-auto h-full" src={image} alt="about" />
			</div>
		</div>
	</div>
</div>
