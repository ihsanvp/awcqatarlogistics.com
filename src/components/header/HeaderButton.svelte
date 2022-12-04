<script lang="ts">
	export let label: string;
	export let href: string | undefined = undefined;
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	class="hover:text-secondary"
	{href}
	data-sveltekit-noscroll
>
	{label}
</svelte:element>
