<script lang="ts">
	import renderContent from '@helpers/renderContent';

	export let icon: string;
	export let label: string;
	export let count: string;
</script>

<div class="flex flex-col items-center justify-center gap-2 md:gap-5 text-white">
	<div>
		<img src={icon} alt={label} />
	</div>
	<div class="font-bold text-xl md:text-4xl text-secondary">{count}</div>
	<div class="text-xs md:text-lg font-semibold text-center text-secondary">
		{@html renderContent(label)}
	</div>
</div>
