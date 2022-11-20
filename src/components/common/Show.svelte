<script lang="ts">
	export let when: boolean;
</script>

{#if when}
	<slot />
{/if}
