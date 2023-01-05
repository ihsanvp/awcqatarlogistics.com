<script lang="ts">
	import HEADER from '@data/header';

	const links = HEADER.links;

	export let active: number;

	let left = 0;
	let width = 0;
	let container: HTMLDivElement;

	$: {
		if (typeof window != 'undefined' && container) {
			const all = [...container.querySelectorAll('a')];
			const target = all.find((_, i) => i == active) || all[0];

			const containerRect = container.getBoundingClientRect();
			const targetRect = target.getBoundingClientRect();

			left = containerRect.left - targetRect.left;
			width = targetRect.width;
		}
	}

	$: style = `left: ${-left}px; width: ${width}px;`;
</script>

<div class=" hidden sm:block relative">
	<div class="flex items-center justify-center gap-10" bind:this={container}>
		{#each links as link, i}
			<a
				class="hover:text-secondary"
				class:active={i == active}
				href={link.href}
				data-sveltekit-noscroll>{link.label}</a
			>
		{/each}
	</div>
	<div class="bg-secondary h-[2px] absolute transition-all duration-300 ease-in-out" {style} />
</div>

<style>
	.active {
		@apply text-secondary;
	}
</style>
