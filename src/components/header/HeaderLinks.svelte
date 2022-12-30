<script lang="ts">
	import HEADER from '@data/header';
	import { onMount } from 'svelte';

	const links = HEADER.links;

	let active = 0;
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

	onMount(() => {
		if (typeof IntersectionObserver != 'undefined') {
			const observing: HTMLElement[] = [];
			const observer = new IntersectionObserver(
				(entries) => {
					const [{ isIntersecting }] = entries;

					if (isIntersecting) {
						const targetID = entries[0].target.id;

						active = links.findIndex((l) => l.href.includes(`#${targetID}`)) || 0;
					}
				},
				{
					rootMargin: '0px 0px -80% 0px'
				}
			);

			links.forEach((l) => {
				const id = l.href.split('#')[1];
				const el = document.getElementById(id);

				if (el) {
					observer.observe(el);
					observing.push(el);
				}
			});

			return () => {
				observing.forEach((el) => observer.unobserve(el));
			};
		}
	});
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
	<div class="bg-secondary h-[2px] absolute transition-all duration-100 ease-in-out" {style} />
</div>

<style>
	.active {
		@apply text-secondary;
	}
</style>
