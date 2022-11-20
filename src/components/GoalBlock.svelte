<script lang="ts">
	import Icon from '@iconify/svelte';
	import TickIcon from '@iconify-icons/mdi/check-circle-outline';
</script>

<div class="flex items-center gap-3">
	<Icon icon={TickIcon} width={30} />
	<div class="text-xl">
		<slot />
	</div>
</div>
