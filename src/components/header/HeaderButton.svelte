<script lang="ts">
	export let label: string;
	export let href: string | undefined = undefined;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<a class="hover:text-secondary" data-sveltekit-noscroll {href}>
	{label}
</a>
