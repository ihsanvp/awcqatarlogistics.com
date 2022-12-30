<script lang="ts">
	import type { IMAGE } from '*.jpg?responsive';
	import getImageSource from '@helpers/getImageSource';

	export let src: typeof IMAGE[];
	export let alt: string;

	const sourceObject = getImageSource(src);
	const fallback = sourceObject.fallback || undefined;
</script>

<picture class={$$props.class}>
	{#each Object.entries(sourceObject) as [key, value]}
		{#if key != 'fallback'}
			<source
				class={$$props.class}
				srcset={value.srcset}
				width={value.width}
				height={value.height}
				type={`image/${key}`}
			/>
		{/if}
	{/each}
	{#if fallback}
		<img
			class={$$props.class}
			srcset={fallback.srcset}
			{alt}
			width={fallback.width}
			height={fallback.height}
		/>
	{/if}
</picture>
