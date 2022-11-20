<div class="flex flex-col gap-4 relative">
	<div class="absolute -top-5 -left-8 w-20 h-20 bg-orange-50 z-[-1]" />
	<div class="w-[100px] fill-orange-600">
		<slot name="icon" />
	</div>
	<div class="text-2xl font-black title">
		<slot name="title" />
	</div>
	<div class="text-gray-600">
		<slot />
	</div>
</div>

<style>
	.title :global(span) {
		@apply text-orange-600;
	}
</style>
