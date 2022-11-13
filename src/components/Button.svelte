<script lang="ts">
	export let label: string;
	export let onClick: VoidFunction | undefined = undefined;
</script>

<button class="relative px-14 py-4 bg-white font-medium" on:click={onClick}>
	<span>{label}</span>
	<div
		class="absolute inset-0 bg-orange-600 text-black font-medium flex items-center justify-center backdrop"
	>
		<span>{label}</span>
	</div>
</button>

<style>
	.backdrop {
		transition-property: clip-path;
		transition-duration: 300ms;
		clip-path: inset(0% 100% -1% 00%);
	}
	button:hover .backdrop {
		clip-path: inset(0% 0% -1% 0%);
	}
</style>
