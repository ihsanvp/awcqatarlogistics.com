<div class="flex flex-col gap-4 relative items-center justify-center sm:items-start">
	<div class="w-[100px] fill-secondary relative">
		<div class="absolute -top-5 -left-5 w-20 h-20 bg-secondary opacity-10 z-[-1]" />
		<slot name="icon" />
	</div>
	<div class="text-2xl font-black title text-center sm:text-left">
		<slot name="title" />
	</div>
	<div class="text-gray-600 text-center sm:text-left">
		<slot />
	</div>
</div>

<style>
	.title :global(span) {
		color: #0081e4;
	}
</style>
