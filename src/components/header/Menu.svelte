<script lang="ts">
	import menu from '@animations/menu';
	import Icon from '@iconify/svelte';
	import CloseIcon from '@iconify-icons/mdi/close';

	export let isOpen: boolean;
	export let onClose: VoidFunction | undefined = undefined;
</script>

{#if isOpen}
	<div
		class="fixed inset-0 z-[9999] bg-orange-600"
		transition:menu={{ x: 91, y: 4.5, duration: 1000 }}
	>
		<div class="h-[70px] md:h-[80px] flex px-5 items-center justify-between">
			<div />
			<div>
				<button class="text-white" on:click={onClose}>
					<Icon width={30} icon={CloseIcon} />
				</button>
			</div>
		</div>
	</div>
{/if}
