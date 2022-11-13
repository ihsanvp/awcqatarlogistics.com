<script lang="ts">
	import { onMount } from 'svelte';

	import img1 from '@assets/images/landing-1.jpg';
	import img2 from '@assets/images/landing-2.jpg';
	import img3 from '@assets/images/landing-3.jpg';
	import img4 from '@assets/images/landing-4.jpg';

	const images = [img1, img2, img3, img4];

	let show = 0;

	function next() {
		show = (show + 1) % images.length;
	}

	function previous() {
		if (show <= 0) {
			show = images.length - 1;
		} else {
			show--;
		}
	}

	onMount(() => {
		setInterval(previous, 5000);
	});

	$: console.log(show);
</script>

<section class="w-screen h-screen relative">
	<div class="absolute inset-0 overflow-hidden">
		{#each images as image, i}
			<div class="absolute inset-0 overflow-hidden">
				<img
					class="w-full h-full object-cover opacity-0 transition-opacity duration-[3s] z-0"
					src={image}
					alt="landing"
					class:active={show == i}
				/>
			</div>
		{/each}
	</div>
</section>

<style>
	.active {
		@apply opacity-100 z-[1] duration-[2s];
	}
</style>
