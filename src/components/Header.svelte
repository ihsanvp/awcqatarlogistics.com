<script lang="ts">
	import HeaderButton from './HeaderButton.svelte';
	import MenuIcon from './icons/MenuIcon.svelte';

	type OnScrollEvent = UIEvent & { currentTarget: EventTarget & Window };

	let active = false;
	let open = false;

	function onScroll(e: OnScrollEvent) {
		if (e.currentTarget.scrollY > 100) {
			active = true;
		} else {
			active = false;
		}
	}

	function onClick() {
		open = !open;
	}
</script>

<svelte:window on:scroll={onScroll} />
<header
	class="fixed top-0 left-0 right-0 h-[80px] z-[999] text-white transition-all duration-300 px-5"
	class:active={!open && active}
>
	<div class="container mx-auto flex items-center h-full justify-between">
		<div class="">Logo</div>
		<div class="items-center justify-center gap-10 hidden sm:flex">
			<HeaderButton label="Home" />
			<HeaderButton label="Company" />
			<HeaderButton label="Services" />
			<HeaderButton label="Features" />
			<HeaderButton label="Contact" />
		</div>
		<div class="sm:hidden">
			<button on:click={onClick}>
				<MenuIcon className="fill-white" />
			</button>
		</div>
	</div>
</header>

{#if open}
	<div class="fixed inset-0 z-[998] bg-orange-600" />
{/if}

<style>
	.active {
		@apply bg-white text-black bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-30 shadow-md h-[70px];
	}
</style>
