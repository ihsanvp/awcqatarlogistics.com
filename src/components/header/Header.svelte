<script lang="ts">
	import HeaderButton from './HeaderButton.svelte';
	import Icon from '@iconify/svelte';
	import MenuIcon from '@iconify-icons/mdi/menu';
	import Menu from './Menu.svelte';
	import HEADER from '@data/header';
	import { page } from '$app/stores';
	import logoBlack from '@assets/images/logo-black.png';
	import MobileIcon from '@iconify-icons/mdi/phone';
	import HeaderLinks from './HeaderLinks.svelte';

	type OnScrollEvent = UIEvent & { currentTarget: EventTarget & Window };

	let active = false;
	let open = false;

	const links = HEADER.links;

	function openMenu() {
		open = true;
	}

	function closeMenu() {
		open = false;
	}

	function check() {
		if (typeof window != 'undefined') {
			if ($page.url.pathname == '/') {
				if (window.scrollY > 10) {
					active = true;
				} else {
					active = false;
				}
			} else {
				active = true;
			}
		}
	}

	function onScroll(e: OnScrollEvent) {
		check();
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

	$: {
		if ($page.url.pathname == '/') {
			check();
		} else {
			active = true;
		}
	}
</script>

<svelte:window on:scroll={onScroll} />
<header
	class="fixed top-0 left-0 right-0 h-[80px] sm:h-[120px] z-[999] text-black transition-all duration-500 bg-white"
	class:active
>
	<div class="container mx-auto flex items-center h-full justify-between gap-5">
		<div class=" h-full max-h-[35px] sm:h-[40px]">
			<a href="/" class="h-full">
				<img class="h-full object-contain" src={logoBlack} alt="logo" />
			</a>
		</div>
		<div class="hidden sm:flex items-center justify-center gap-10 h-full py-3">
			<HeaderLinks />
			<div class="w-[1px] bg-secondary h-full relative">
				<div
					class="absolute w-2 h-2 rounded-full bg-secondary top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
				/>
			</div>
			<a href="tel:7994152171" class="flex items-center justify-center gap-3">
				<Icon width={25} icon={MobileIcon} class="text-primary" />
				<span>923892812</span>
			</a>
		</div>
		<div class="sm:hidden">
			<button on:click={openMenu}>
				<Icon width={30} icon={MenuIcon} />
			</button>
		</div>
	</div>
</header>
<Menu isOpen={open} on:close:menu={closeMenu} />

<style>
	.active {
		@apply bg-white text-black bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-70 shadow-md h-[60px] md:h-[70px];
	}
</style>
