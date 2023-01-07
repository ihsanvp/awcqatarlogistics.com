<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	export let name: string;
	export let value: string;
	export let required: boolean = false;
	export let label: string;
	export let current: string;
	export let icon: typeof SvelteComponent;
</script>

<input
	bind:group={current}
	type="radio"
	class="hidden peer"
	id={`${name}-${value}`}
	{value}
	{name}
	{required}
/>
<label
	for={`${name}-${value}`}
	class="inline-flex items-center justify-between w-full h-full p-5 text-white fill-white bg-transparent border border-gray-200 cursor-pointer peer-checked:bg-white peer-checked:text-secondary peer-checked:fill-secondary peer-checked:border-secondary md:hover:text-white md:hover:fill-white md:hover:bg-gray-100 md:hover:border-white md:hover:bg-opacity-20"
>
	<div class="block">
		<div class="w-[60px]">
			<svelte:component this={icon} class="w-full" />
		</div>
		<div class="w-full text-sm sm:text-lg font-semibold mt-3">{label}</div>
	</div>
</label>
