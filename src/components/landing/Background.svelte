<script lang="ts">
	import homeContent from '@data/slides';

	export let active: number;

	const slides = homeContent.slides;
</script>

<div class="absolute inset-0 overflow-hidden">
	{#each slides as slide, i}
		<div
			class="absolute inset-0 overflow-hidden duration-[15s] transition-transform ease-linear slide-zoom"
		>
			<img
				class="w-full h-full object-cover opacity-0 transition-opacity duration-[3s] z-0"
				src={slide.image}
				alt="landing"
				class:slideactive={active == i}
			/>
		</div>
	{/each}
</div>
<div class="absolute inset-0 bg-black opacity-30" />

<style>
	.slideactive {
		@apply opacity-100 z-[1] duration-[2s];
	}

	.slide-zoom {
		animation: zoom 10s ease-in-out;
		animation-iteration-count: infinite;
	}
	@keyframes zoom {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.1);
		}
		100% {
			transform: scale(1);
		}
	}
</style>
