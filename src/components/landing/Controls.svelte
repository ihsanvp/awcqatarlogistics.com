<script lang="ts">
	import homeContent from '@content/home';
	import renderContent from '@helpers/renderContent';

	export let active: number;
	export let onClick: (index: number) => void;

	const slides = homeContent.slides;
</script>

<div class="absolute bottom-0 left-0 right-0 z-10">
	<div class="container mx-auto flex items-end gap-1">
		{#each slides as slide, i}
			<button
				class="h-[150px] relative flex-1 bg-black bg-opacity-50 px-20 flex flex-col justify-center gap-3 hover:bg-orange-600 hover:h-[160px] duration-300"
				class:controlsactive={active == i}
				on:click={() => onClick(i)}
			>
				<div>Icon</div>
				<div class="text-white text-left text-lg font-bold">
					{@html renderContent(slide.category)}
				</div>
			</button>
		{/each}
	</div>
</div>

<style>
	.controlsactive {
		@apply bg-orange-600 h-[160px];
	}
</style>
