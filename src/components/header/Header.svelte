<script lang="ts">
	import Button from './Button.svelte';
	import Icon from '@iconify/svelte';
	import MenuIcon from '@iconify-icons/mdi/menu';
	import CloseIcon from '@iconify-icons/mdi/close';
	import Menu from './Menu.svelte';

	type OnScrollEvent = UIEvent & { currentTarget: EventTarget & Window };

	let active = false;
	let open = false;

	function openMenu() {
		open = true;
	}

	function closeMenu() {
		open = false;
	}

	function onScroll(e: OnScrollEvent) {
		if (e.currentTarget.scrollY > 100) {
			active = true;
		} else {
			active = false;
		}
	}

	$: {
		if (typeof document != 'undefined') {
			if (open) {
				document.body.style.overflowY = 'hidden';
			} else {
				document.body.style.overflowY = 'scroll';
			}
		}
	}
</script>

<svelte:window on:scroll={onScroll} />
<header
	class="fixed top-0 left-0 right-0 h-[80px] z-[999] text-white transition-all duration-300"
	class:active
>
	<div class="container mx-auto flex items-center h-full justify-between px-5">
		<div class="">Logo</div>
		<div class="items-center justify-center gap-10 hidden sm:flex">
			<Button label="Home" />
			<Button label="Company" />
			<Button label="Services" />
			<Button label="Features" />
			<Button label="Contact" />
		</div>
		<div class="sm:hidden">
			<button on:click={openMenu}>
				<Icon width={30} icon={MenuIcon} />
			</button>
		</div>
	</div>
</header>
<Menu isOpen={open} onClose={closeMenu} />

<style>
	.active {
		@apply bg-white text-black bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-50 shadow-md h-[60px] md:h-[70px];
	}
</style>
