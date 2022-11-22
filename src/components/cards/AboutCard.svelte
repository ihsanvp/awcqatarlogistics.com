<script lang="ts">
	import Icon from '@iconify/svelte';
	import TickIcon from '@iconify-icons/mdi/check-thick';
</script>

<div class="flex items-center gap-3">
	<span
		class="flex items-center justify-center text-white bg-orange-500 w-6 h-6 rounded-full overflow-hidden "
	>
		<Icon icon={TickIcon} width={14} />
	</span>
	<div class="font-medium">
		<slot />
	</div>
</div>
