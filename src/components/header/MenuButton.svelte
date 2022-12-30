<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';

	export let label: string;
	export let delay: number = 0;
	export let href: string | undefined = undefined;

	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch('close:menu');
	}
</script>

<a
	in:fly={{ y: 20, duration: 500, delay: delay }}
	on:click={handleClick}
	class="text-5xl font-medium"
	data-sveltekit-noscroll
	{href}
>
	{label}
</a>
