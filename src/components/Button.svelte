<script lang="ts">
	export let label: string;
	export let onClick: VoidFunction | undefined = undefined;
</script>

<button class="relative px-12 py-3 bg-white font-medium " on:click={onClick}>
	<span>{label}</span>
	<div
		class="absolute inset-0 bg-orange-600 text-white font-medium flex items-center justify-center backdrop"
	>
		<span>{label}</span>
	</div>
</button>

<style>
	.backdrop {
		transition-property: clip-path;
		transition-duration: 300ms;
		clip-path: inset(-1% 100% -1% -1%);
	}
	button:hover .backdrop {
		clip-path: inset(-1% 0% -1% -1%);
	}
</style>
