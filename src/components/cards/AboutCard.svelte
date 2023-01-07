<script lang="ts">
	import Icon from '@iconify/svelte';
	import TickIcon from '@iconify-icons/mdi/check-thick';

	export let color: 'primary' | 'secondary';

	const iconStyle = `background: var(--color-${color});`;
</script>

<div class="flex items-center gap-3">
	<div
		class="flex items-center justify-center text-white w-6 h-6 rounded-full overflow-hidden"
		style={iconStyle}
	>
		<Icon icon={TickIcon} width={14} />
	</div>
	<div class="font-semibold flex-1">
		<slot />
	</div>
</div>
