<script lang="ts">
	import type IMAGE from '*.jpg?responsive';
	import type { ComponentProps } from 'svelte';
	import ResponsiveImage from '@components/common/ResponsiveImage.svelte';
	import CoreValueCard from './CoreValueCard.svelte';

	export let title: string;
	export let image: typeof IMAGE;
	export let values: Array<ComponentProps<CoreValueCard>>;
</script>

<div class="py-10 my-20 md:my-40 relative">
	<div class="absolute inset-0">
		<div class="w-full h-full flex">
			<div class="flex-1 hidden lg:block w-full h-full">
				<ResponsiveImage class="w-full h-full object-cover" src={image} alt="goals" />
			</div>
			<div class="flex-1 w-full h-full bg-primary" />
		</div>
	</div>
	<div class="relative container mx-auto py-10 md:py-20">
		<div class="flex gap-20 xl:gap-40">
			<div class="flex-1 hidden lg:block" />
			<div class="flex-1 text-white">
				<div class="text-4xl md:text-5xl font-bold text-center lg:text-left">
					{title}
				</div>
				{#each values as value}
					<CoreValueCard title={value.title} icon={value.icon} description={value.description} />
				{/each}
			</div>
		</div>
	</div>
</div>
