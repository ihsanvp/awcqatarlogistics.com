<script lang="ts">
	export let label: string;
	export let onClick: VoidFunction | undefined = undefined;
</script>

<button
	class="relative px-12 py-3 bg-white font-medium hover:bg-orange-600 transition-all duration-500 hover:text-white hover:scale-95"
	on:click={onClick}
>
	<span>{label}</span>
</button>
