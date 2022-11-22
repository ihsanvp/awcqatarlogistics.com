<script lang="ts">
	import menu from '@animations/menu';
	import Icon from '@iconify/svelte';
	import CloseIcon from '@iconify-icons/mdi/close';
	import MenuButton from './MenuButton.svelte';
	import { createEventDispatcher } from 'svelte';
	import HEADER from '@data/header';
	import CONTACT from '@data/contact';

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
			<div class="h-[70px] md:h-[80px] flex items-center justify-between">
				<div>Logo</div>
				<div>
					<button class="text-black" on:click={close}>
						<Icon width={30} icon={CloseIcon} />
					</button>
				</div>
			</div>
			<div class="flex flex-col gap-5 items-start justify-center flex-1">
				{#each links as link, i}
					<MenuButton on:close:menu label={link.label} delay={(i + 1) * 100} active={i == 0} />
				{/each}
			</div>
			<div class="py-5">
				<div class="text-xl font-medium">Connect With Us</div>
				<div class="flex items-center justify-start gap-10 mt-4">
					{#each socials as social}
						{#if social.url}
							<a href={social.url} target="_blank" rel="noreferrer">
								<svelte:component this={Icon} icon={social.icon} width={30} />
							</a>
						{:else}
							<svelte:component this={Icon} icon={social.icon} width={30} />
						{/if}
					{/each}
				</div>
			</div>
		</div>
	</div>
{/if}
