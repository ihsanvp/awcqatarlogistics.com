<script lang="ts">
	import type { IconifyIcon } from '@iconify/svelte';
	import Icon from '@iconify/svelte';
	import { fly } from 'svelte/transition';

	export let icon: IconifyIcon;
	export let url: string | undefined = undefined;
	export let delay: number = 0;
</script>

<div in:fly={{ x: 20, duration: 500, delay: delay }}>
	{#if url}
		<a href={url} target="_blank" rel="noreferrer">
			<svelte:component this={Icon} {icon} width={30} />
		</a>
	{:else}
		<svelte:component this={Icon} {icon} width={30} />
	{/if}
</div>
