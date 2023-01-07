<script lang="ts">
	import menu from '@animations/menu';
	import Icon from '@iconify/svelte';
	import CloseIcon from '@iconify-icons/mdi/close';
	import MenuButton from './MenuButton.svelte';
	import { createEventDispatcher } from 'svelte';
	import HEADER from '@data/header';
	import CONTACT from '@data/contact';
	import MenuSocial from './MenuSocial.svelte';
	import { fly } from 'svelte/transition';
	import logo from '@assets/images/logo-black.png';
	import MobileIcon from '@iconify-icons/mdi/phone';

	export let isOpen: boolean;
	export let activeLink: number;

	const links = HEADER.links;
	const socials = CONTACT.socials;
	const dispatch = createEventDispatcher();

	function close() {
		dispatch('close:menu');
	}
</script>

{#if isOpen}
	<div class="fixed inset-0 z-[9999] bg-white overflow-hidden" transition:menu={{ duration: 700 }}>
		<div class="w-full h-full flex flex-col justify-between container mx-auto">
			<div class="flex items-center justify-between gap-10 py-5">
				<div class=" h-full max-h-[35px] sm:h-[40px]">
					<a href="/" class="h-full">
						<img class="h-full object-contain" src={logo} alt="logo" />
					</a>
				</div>
				<div>
					<button class="text-black" on:click={close}>
						<Icon width={30} icon={CloseIcon} />
					</button>
				</div>
			</div>
			<div class="flex flex-col gap-5 items-start justify-center flex-1">
				{#each links as link, i}
					<MenuButton
						on:close:menu
						active={i == activeLink}
						delay={(i + 1) * 100}
						label={link.label}
						href={link.href}
					/>
				{/each}
			</div>
			<div class="py-10">
				<div
					class="text-xl font-medium"
					in:fly={{ y: -10, duration: 500, delay: links.length * 150 }}
				>
					Contact Us
				</div>

				<div class="mt-4 flex">
					<a href="tel:+97431393114" class="flex items-center justify-center gap-3">
						<Icon width={25} icon={MobileIcon} class="text-primary" />
						<span>+974 31393114</span>
					</a>
				</div>
			</div>
		</div>
	</div>
{/if}
