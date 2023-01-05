<script lang="ts">
	export let icon: string;
	export let amount: number;
	export let label: string;

	function formatedAmount() {
		const str = amount.toFixed(0);

		return `${str.slice(0, str.length - 3)},${str.slice(str.length - 3, str.length)}`;
	}
</script>

<div class="flex flex-col items-center justify-center gap-2 md:gap-5 text-white">
	<div>
		<img src={icon} alt={label} />
	</div>
	<div class="font-bold text-xl md:text-3xl">{formatedAmount()}</div>
	<div class="text-xs md:text-sm text-center">{label}</div>
</div>
