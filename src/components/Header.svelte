<script lang="ts">
	import HeaderButton from './HeaderButton.svelte';

	type OnScrollEvent = UIEvent & { currentTarget: EventTarget & Window };

	let active = false;

	function onScroll(e: OnScrollEvent) {
		if (e.currentTarget.scrollY > 100) {
			active = true;
		} else {
			active = false;
		}
	}
</script>

<svelte:window on:scroll={onScroll} />
<header
	class="fixed top-0 left-0 right-0 h-[80px] z-[999] text-white transition-all duration-300"
	class:active
>
	<div class="container mx-auto flex items-center h-full justify-between">
		<div class="">Logo</div>
		<div class="flex items-center justify-center gap-10">
			<HeaderButton label="Home" />
			<HeaderButton label="Company" />
			<HeaderButton label="Services" />
			<HeaderButton label="Features" />
			<HeaderButton label="Contact" />
		</div>
	</div>
</header>

<style>
	.active {
		@apply bg-white text-black bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-30 shadow-md h-[70px];
	}
</style>
