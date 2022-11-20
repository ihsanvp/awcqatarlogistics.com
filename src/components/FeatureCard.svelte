<script lang="ts">
	export let title: string;
	export let icon: string;
</script>

<div class="flex flex-col gap-4 items-center justify-center md:items-start">
	<div class="w-[50px]">
		<img class="w-full" src={icon} alt={title} />
	</div>
	<div class="text-xl font-semibold text-center md:text-left">{title}</div>
	<div class="text-gray-600 text-base text-center md:text-left">
		<slot />
	</div>
</div>
