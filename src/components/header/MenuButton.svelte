<script lang="ts">
	import { goto } from '$app/navigation';
	import { createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';

	export let label: string;
	export let onClick: VoidFunction | undefined = undefined;
	export let delay: number = 0;
	export let active: boolean = false;
	export let href: string | undefined = undefined;

	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch('close:menu');
		if (href) {
			goto(href, { noScroll: true });
		} else {
			onClick && onClick();
		}
	}
</script>

<button
	in:fly={{ y: 20, duration: 500, delay: delay }}
	on:click={handleClick}
	class="text-5xl font-medium"
	class:active
>
	{label}
</button>

<style>
	.active {
		@apply text-orange-600 underline;
	}
</style>
