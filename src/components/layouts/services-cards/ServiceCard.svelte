<script lang="ts">
	import type { IMAGE } from '*.jpg?responsive';
	import type { SvelteComponent } from 'svelte';
	import ResponsiveImage from '@components/common/ResponsiveImage.svelte';

	export let title: string;
	export let bg: typeof IMAGE[];
	export let points: string[];
	export let icon: typeof SvelteComponent;
</script>

<div class="w-full h-[60vw] sm:h-[55vw] lg:h-[50vw] xl:h-[400px] relative text-white group">
	<div
		class="absolute inset-0 z-[1] bg-secondary opacity-0 duration-500 transition-opacity md:group-hover:opacity-100"
	/>
	<div class="absolute inset-0 z-[3]">
		<div
			class="w-full h-full flex flex-col p-5 items-center justify-center md:justify-end gap-2 xl:gap-3 overflow-hidden"
		>
			<div
				class="w-[60px] md:w-[80px] fill-white transition-transform translate-y-0 sm:translate-y-20 xl:translate-y-32 duration-500 md:group-hover:translate-y-0"
			>
				<svelte:component this={icon} class="w-full" />
			</div>
			<div
				class="text-xl xl:text-xl font-bold text-center transition-transform translate-y-0 sm:translate-y-20 xl:translate-y-32 duration-500 md:group-hover:translate-y-0 delay-75"
			>
				{title}
			</div>
			<div
				class="hidden w-full md:block text-center text-sm md:line-clamp-5 mt-5 transition-all translate-y-0 sm:translate-y-20 opacity-0 xl:translate-y-32 duration-500 md:group-hover:translate-y-0 md:group-hover:opacity-100 delay-150"
			>
				{#each points as point}
					<div class="flex items-center justify-center h-5 my-2 relative">
						<div class="flex-1 h-px bg-white opacity-50" />
						<div class="text-center text-sm relative px-2">
							{point}
						</div>
						<div class="flex-1 h-px bg-white opacity-50" />
					</div>
				{/each}
			</div>
		</div>
	</div>
	<div
		class="absolute inset-0 z-[2] bg-black opacity-50 md:group-hover:opacity-0 duration-500 transition-opacity"
	/>
	<div class="w-full h-full overflow-hidden">
		<ResponsiveImage class="w-full h-full object-cover" src={bg} alt={title} />
	</div>
</div>
