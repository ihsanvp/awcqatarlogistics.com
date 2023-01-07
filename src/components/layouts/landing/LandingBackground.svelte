<script lang="ts">
	import type { Slide } from 'src/models/slide';
	import LandingImage from './LandingImage.svelte';

	export let active: number;
	export let slides: Slide[];
</script>

<div class="absolute inset-0 overflow-hidden">
	{#each slides as slide, i}
		<div
			class="absolute inset-0 overflow-hidden duration-[15s] transition-transform ease-linear slide-zoom"
		>
			<LandingImage active={i == active} src={slide.image} alt="landing" />
		</div>
	{/each}
</div>
<div class="absolute inset-0 bg-black opacity-30" />

<style>
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
