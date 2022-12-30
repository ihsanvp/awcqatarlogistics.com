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

	export let isOpen: boolean;

	const links = HEADER.links;
	const socials = CONTACT.socials;
	const dispatch = createEventDispatcher();

	function close() {
		dispatch('close:menu');
	}
</script>

{#if isOpen}
	<div
		class="fixed inset-0 z-[9999] bg-white bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-60 overflow-hidden"
		transition:menu={{ duration: 700 }}
	>
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
					<MenuButton on:close:menu delay={(i + 1) * 100} label={link.label} href={link.href} />
				{/each}
			</div>
			<div class="py-10">
				<div
					class="text-xl font-medium"
					in:fly={{ y: -10, duration: 500, delay: links.length * 150 }}
				>
					Connect With Us
				</div>
				<div class="flex items-center justify-start gap-10 mt-4">
					{#each socials as social, i}
						<MenuSocial icon={social.icon} url={social.url} delay={(i + links.length) * 150} />
					{/each}
				</div>
			</div>
		</div>
	</div>
{/if}
