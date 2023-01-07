<script lang="ts">
	import type { IMAGE } from '*.jpg?responsive';
	import getImageSource from '@helpers/getImageSource';

	export let src: typeof IMAGE[];
	export let alt: string;
	export let active: boolean;

	const sourceObject = getImageSource(src);
	const fallback = sourceObject.fallback || undefined;
</script>

<picture
	class="w-full h-full object-cover opacity-0 transition-opacity duration-[3s] z-0"
	class:active
>
	{#each Object.entries(sourceObject) as [key, value]}
		{#if key != 'fallback'}
			<source
				class="w-full h-full object-cover"
				srcset={value.srcset}
				width={value.width}
				height={value.height}
				type={`image/${key}`}
			/>
		{/if}
	{/each}
	{#if fallback}
		<img
			class="w-full h-full object-cover"
			srcset={fallback.srcset}
			{alt}
			width={fallback.width}
			height={fallback.height}
		/>
	{/if}
</picture>

<style>
	.active {
		@apply opacity-100 z-[1] duration-[2s];
	}
</style>
