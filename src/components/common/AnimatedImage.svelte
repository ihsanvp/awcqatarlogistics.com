<script lang="ts">
	import type IMAGE from '*.jpg?responsive';
	import { onMount } from 'svelte';
	import ResponsiveImage from './ResponsiveImage.svelte';

	export let src: typeof IMAGE;
	export let alt: string;
	export let duration: number;
	export let color: 'primary' | 'secondary';
	export let position: 'left' | 'right';

	let opacity = 0;
	let show = false;
	let container: HTMLDivElement;

	$: {
		if (show) {
			setTimeout(() => (opacity = 1), duration / 2);
		}
	}

	onMount(() => {
		if (typeof IntersectionObserver != 'undefined') {
			const observer = new IntersectionObserver(
				(entries) => {
					const [{ isIntersecting, target }] = entries;

					if (isIntersecting) {
						observer.unobserve(target);
						show = true;
					}
				},
				{
					rootMargin: '0px 0px -50% 0px',
					threshold: [0, 0.25, 0.5, 0.75, 1]
				}
			);

			observer.observe(container);

			return () => observer.unobserve(container);
		}
	});
</script>

<div bind:this={container} class="w-full h-full flex items-center justify-center relative">
	<div
		class="absolute inset-0"
		style={`clip-path: inset(0 100% 0 0); animation-duration: ${duration}ms; background: var(--color-${color});`}
		class:backdrop={show}
	/>
	<div
		class="absolute -bottom-7 -right-7 w-1/2 h-1/2 mix-blend-multiply scale-0"
		class:box={show}
		style={`
    animation-duration: ${duration / 2}ms; 
    animation-delay: ${duration}ms; 
    background: var(--color-${color});
    left: ${position == 'left' ? '-1.75em' : 'auto'};
    right: ${position == 'right' ? '-1.75em' : 'auto'}
    `}
	/>
	<div class="w-full h-full" style={`opacity: ${opacity};`} class:image={show}>
		<ResponsiveImage class="w-auto h-full object-contain" {src} {alt} />
	</div>
</div>

<style>
	.backdrop {
		animation-name: slide;
		animation-fill-mode: forwards;
		clip-path: inset(0 0 0 100%);
	}
	.box {
		animation-name: zoom;
		animation-fill-mode: forwards;
	}
	@keyframes slide {
		0% {
			clip-path: inset(0 100% 0 0);
		}
		50% {
			clip-path: inset(0 0 0 0);
		}
		100% {
			clip-path: inset(0 0 0 100%);
		}
	}
	@keyframes zoom {
		0% {
			transform: scale(0);
		}
		100% {
			transform: scale(1);
		}
	}
</style>
