<script lang="ts">
	import type { IconifyIcon } from '@iconify/svelte';
	import Icon from '@iconify/svelte';

	export let icon: IconifyIcon;
	export let url: string | undefined = undefined;

	const el = url ? 'a' : 'div';
	const linkStyles = url ? ' opacity-80 hover:opacity-100' : '';
</script>

<svelte:element
	this={el}
	href={url}
	class={'flex items-start gap-3' + linkStyles}
	target="_blank"
	rel="noreferrer"
>
	<div>
		<Icon {icon} width={20} />
	</div>
	<div class="flex-1 text-sm">
		<slot />
	</div>
</svelte:element>
