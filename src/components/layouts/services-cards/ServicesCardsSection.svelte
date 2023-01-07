<script lang="ts">
	import type { ComponentProps } from 'svelte';
	import ServiceCard from './ServiceCard.svelte';

	export let title: string;
	export let subtitle: string;
	export let description: string;
	export let cards: Array<ComponentProps<ServiceCard>>;
</script>

<div class="py-10 my-20 md:my-40">
	<div class="container mx-auto">
		<div>
			<div class="text-secondary font-medium text-sm text-center md:text-left">
				{subtitle}
			</div>
			<div class="flex flex-col xl:flex-row mt-5 gap-10 items-center">
				<div
					class="text-3xl md:text-4xl font-bold leading-[1.2] lg:pr-40 xl:pr-0 2xl:pr-20 text-center md:text-left"
				>
					{title}
				</div>
				<div class="text-gray-600 leading-[1.6] text-center md:text-left">
					{description}
				</div>
			</div>
		</div>

		<div
			class="grid grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-10 lg:gap-4 xl:gap-4 mt-10 md:mt-20"
		>
			{#each cards as card}
				<ServiceCard title={card.title} icon={card.icon} bg={card.bg} points={card.points} />
			{/each}
		</div>
	</div>
</div>
