<div class="flex flex-col gap-4 relative items-center justify-center md:items-start">
	<div class="w-[100px] fill-orange-600 relative">
		<div class="absolute -top-5 -left-8 w-20 h-20 bg-orange-50 z-[-1]" />
		<slot name="icon" />
	</div>
	<div class="text-2xl font-black title text-center md:text-left">
		<slot name="title" />
	</div>
	<div class="text-gray-600 text-center md:text-left">
		<slot />
	</div>
</div>

<style>
	.title :global(span) {
		@apply text-orange-600;
	}
</style>
