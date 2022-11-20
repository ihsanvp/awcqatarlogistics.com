<script lang="ts">
	export let icon: string;
	export let amount: number;
	export let label: string;

	function formated() {
		const str = amount.toFixed(0);

		if (str.length > 3) {
			return `${str.slice(0, str.length - 3)},${str.slice(str.length - 3, str.length)}m`;
		}

		return str + 'm';
	}
</script>

<div class="flex flex-col items-center justify-center gap-5 text-white">
	<div>{icon}</div>
	<div class="font-bold text-3xl">{formated()}</div>
	<div class="text-sm">{label}</div>
</div>
