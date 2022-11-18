<script lang="ts">
	import menu from '@animations/menu';

	export let isOpen: boolean;
</script>

{#if isOpen}
	<div
		class="fixed inset-0 z-[998] bg-orange-600"
		transition:menu={{ x: 91, y: 4.5, duration: 500 }}
	/>
{/if}
