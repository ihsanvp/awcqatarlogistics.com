<script lang="ts">
	import homeContent from '@content/home';
	import renderContent from '@helpers/renderContent';

	export let active: number;
	export let onClick: (index: number) => void;

	const slides = homeContent.slides;
</script>

<div class="absolute bottom-0 left-0 right-0 z-10 hidden lg:block">
	<div class="container mx-auto flex items-end gap-1">
		{#each slides as slide, i}
			<button
				class="bg-orange-600 h-[10px] lg:h-[16vh] lg:max-h-[150px] 2xl:max-h-full relative flex-1 lg:bg-black lg:bg-opacity-50 lg:px-12 xl:px-10 flex flex-col justify-center gap-2 lg:hover:bg-orange-600 lg:hover:h-[18vh] duration-300"
				class:active={active == i}
				on:click={() => onClick(i)}
			>
				{#if active == i}
					<div
						class="text-white text-3xl font-bold w-full h-full flex items-center justify-center lg:hidden"
					>
						0{i + 1}
					</div>
				{/if}
				<div class="hidden lg:block">
					<svelte:component this={slide.icon} size={40} color="white" />
				</div>
				<div class="text-white text-left font-medium hidden lg:block">
					{@html renderContent(slide.category)}
				</div>
			</button>
		{/each}
	</div>
</div>

<style>
	.active {
		@apply lg:bg-orange-600 lg:h-[18vh] h-[60px] bg-orange-600;
	}
</style>
