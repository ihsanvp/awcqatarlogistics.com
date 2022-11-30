<script lang="ts">
	import bg from '@assets/images/img-9.jpg?responsive';
	import curve from '@assets/svgs/curve.svg';
	import ResponsiveImage from '@components/common/ResponsiveImage.svelte';

	console.log(curve);
</script>

<div class="absolute inset-0 overflow-hidden">
	<ResponsiveImage class="w-full h-full object-cover" src={bg} alt="landing" />
	<div class="absolute inset-0 bg-black opacity-50" />
</div>

<style>
	.slideactive {
		@apply opacity-100 z-[1] duration-[2s];
	}

	.slide-zoom {
		animation: zoom 20s ease-in-out;
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
