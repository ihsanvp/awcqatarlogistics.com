<script lang="ts">
	import type { ComponentProps } from 'svelte';
	import type IMAGE from '*.jpg?responsive';
	import ResponsiveImage from '@components/common/ResponsiveImage.svelte';
	import StatsCard from './StatsCard.svelte';
	import renderContent from '@helpers/renderContent';

	export let title: string;
	export let subtitle: string;
	export let description: string;
	export let button: string;
	export let bg: typeof IMAGE;
	export let stats: Array<ComponentProps<StatsCard>>;
</script>

<div class="pt-20">
	<div class="relative">
		<div class="relative z-[1] container mx-auto text-white py-32 lg:py-40">
			<div class="flex flex-col lg:flex-row items-center gap-16 lg:gap-10 justify-between">
				<div class="flex-1 flex flex-col gap-3 lg:gap-5">
					<div class="font-medium text-sm lg:text-xl text-center lg:text-left">
						{subtitle}
					</div>
					<div class="font-bold text-4xl lg:text-5xl text-center lg:text-left">
						{@html renderContent(title)}
					</div>
					<div class="max-w-[600px] text-center lg:text-left">
						{description}
					</div>
					<div class="mt-5 flex items-center justify-center lg:justify-start">
						<a
							href="/#contact"
							class="relative text-white px-12 py-3 bg-primary font-medium hover:bg-secondary transition-all duration-500 hover:text-white hover:scale-95"
						>
							{button}
						</a>
					</div>
				</div>
				<div
					class="w-full md:w-auto flex items-center justify-around md:justify-end gap-2 md:gap-20"
				>
					{#each stats as stat}
						<StatsCard icon={stat.icon} count={stat.count} label={stat.label} />
					{/each}
				</div>
			</div>
		</div>
		<div class="absolute inset-0">
			<ResponsiveImage class="w-full h-full object-cover" src={bg} alt="stats" />
		</div>
		<div class="absolute inset-0 bg-black opacity-70" />
	</div>
</div>
