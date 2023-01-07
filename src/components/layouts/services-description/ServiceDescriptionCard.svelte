<script lang="ts">
	import renderContent from '@helpers/renderContent';
	import type { SvelteComponent } from 'svelte';

	export let title: string;
	export let description: string;
	export let icon: typeof SvelteComponent;
</script>

<div class="flex flex-col gap-4 relative items-center justify-start sm:items-start group">
	<div class="w-[100px] fill-secondary relative">
		<div
			class="absolute -top-5 -left-5 w-20 h-20 bg-secondary opacity-10 z-[-1] duration-500 transition-transform md:group-hover:-translate-x-5 md:group-hover:-translate-y-5 md:group-hover:rotate-12"
		/>
		<div
			class="duration-500 transition-transform md:group-hover:translate-x-5 md:group-hover:-rotate-12"
		>
			<svelte:component this={icon} class="w-full" />
		</div>
	</div>
	<div class="text-xl font-black title text-center sm:text-left">
		{@html renderContent(title)}
	</div>
	<div class="text-gray-600 text-center sm:text-left">
		{description}
	</div>
</div>
