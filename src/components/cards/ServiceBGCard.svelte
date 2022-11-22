<script lang="ts">
	export let title: string;
	export let bg: string;
</script>

<div class="w-full h-[60vw] sm:h-[55vw] lg:h-[45vw] xl:h-[400px] relative text-white">
	<div class="absolute inset-0 z-[1]">
		<div
			class="w-full h-full flex flex-col p-5 items-center justify-center md:justify-end gap-5 xl:gap-3 bg-orange-600 transition-colors bg-opacity-0 duration-500 overflow-hidden md:hover:bg-opacity-80 group"
		>
			<div
				class="w-[60px] md:w-[80px] fill-white transition-transform translate-y-20 xl:translate-y-32 duration-500 md:group-hover:translate-y-0"
			>
				<slot name="icon" />
			</div>
			<div
				class="text-2xl xl:text-xl font-bold text-center transition-transform translate-y-20 xl:translate-y-32 duration-500 md:group-hover:translate-y-0 delay-75"
			>
				{title}
			</div>
			<div
				class="text-center text-sm line-clamp-5 mt-5 transition-all translate-y-20 opacity-0 xl:translate-y-32 duration-500 md:group-hover:translate-y-0 md:group-hover:opacity-100 delay-150"
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus neque temporibus
				maiores labore eius id quibusdam commodi facere porro ab?
			</div>
		</div>
	</div>
	<div class="w-full h-full overflow-hidden">
		<img class="w-full h-full object-cover" src={bg} alt={title} />
	</div>
</div>
