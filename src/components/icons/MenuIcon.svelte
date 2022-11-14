<script lang="ts">
	export let size: number = 20;
	export let className: string = '';
</script>

<div class={className}>
	<svg viewBox="0 0 100 80" width={size} height={size}>
		<rect width="100" height="20" />
		<rect y="30" width="100" height="20" />
		<rect y="60" width="100" height="20" />
	</svg>
</div>
