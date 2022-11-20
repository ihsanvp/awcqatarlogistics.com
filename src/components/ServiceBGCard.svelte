<script lang="ts">
	export let title: string;
	export let icon: string;
	export let bg: string;
</script>

<div class="w-full h-[400px] relative">
	<div class="absolute inset-0 z-[-1]">
		<img class="w-full h-full object-cover" src={bg} alt={title} />
	</div>
	<div class="w-full h-full flex flex-col p-5 items-center justify-end gap-5 text-white">
		<div>{icon}</div>
		<div class="text-xl font-medium">{title}</div>
	</div>
</div>
