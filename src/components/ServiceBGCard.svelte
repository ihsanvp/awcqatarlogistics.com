<script lang="ts">
	export let title: string;
	export let bg: string;
</script>

<div class="w-full h-[60vw] md:h-[400px] relative">
	<div class="absolute inset-0 z-[-1]">
		<img class="w-full h-full object-cover" src={bg} alt={title} />
	</div>
	<div
		class="w-full h-full flex flex-col p-5 items-center justify-center md:justify-end gap-2 text-white"
	>
		<div class="w-[60px] md:w-[80px] fill-white">
			<slot name="icon" />
		</div>
		<div class=" md:text-xl font-medium text-center">{title}</div>
	</div>
</div>
