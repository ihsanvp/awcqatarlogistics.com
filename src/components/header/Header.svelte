<script lang="ts">
	import HeaderButton from './HeaderButton.svelte';
	import Icon from '@iconify/svelte';
	import MenuIcon from '@iconify-icons/mdi/menu';
	import Menu from './Menu.svelte';
	import HEADER from '@data/header';
	import { page } from '$app/stores';

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
	class="fixed top-0 left-0 right-0 h-[80px] z-[999] text-white transition-all duration-300"
	class:active
>
	<div class="container mx-auto flex items-center h-full justify-between">
		<div class="">Logo</div>
		<div class="items-center justify-center gap-10 hidden sm:flex">
			{#each links as link}
				<HeaderButton label={link.label} href={link.href} />
			{/each}
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
