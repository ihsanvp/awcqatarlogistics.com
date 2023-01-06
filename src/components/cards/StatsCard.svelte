<script lang="ts">
	export let icon: string;
	export let label: string;
	export let count: string;
</script>

<div class="flex flex-col items-center justify-center gap-2 md:gap-5 text-white">
	<div>
		<img src={icon} alt={label} />
	</div>
	<div class="font-bold text-xl md:text-4xl text-secondary">{count}</div>
	<div class="text-xs md:text-sm text-center text-secondary">{label}</div>
</div>
