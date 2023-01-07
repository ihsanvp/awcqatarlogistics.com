<script lang="ts">
	type InputType = 'text' | 'number' | 'textarea' | 'email';
	type InputEvent = Event & { currentTarget: EventTarget & HTMLTextAreaElement };

	export let type: InputType;
	export let label: string;
	export let name: string;
	export let minHeight: number = 300;
	export let required: boolean = false;

	let height = minHeight;
	$: style = `height: ${height}px;`;

	function handleInput(e: InputEvent) {
		const h = e.currentTarget.scrollHeight;

		if (h > height) {
			e.currentTarget.style.height = 'auto';
			e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';
			e.currentTarget.scrollTop = e.currentTarget.scrollHeight;
			window.scrollTo(
				0,
				e.currentTarget.scrollTop + e.currentTarget.scrollHeight + window.innerHeight / 2.5
			);
		}
	}
</script>

<div class={'flex flex-col gap-2 ' + $$props.class}>
	<label class="text-white opacity-90" for={`${label}-contact`}>{label}</label>
	<svelte:element
		this={type == 'textarea' ? 'textarea' : 'input'}
		id={`${label}-contact`}
		style={type == 'textarea' ? style : ''}
		on:input={type == 'textarea' ? handleInput : undefined}
		class={'w-full p-3 block overflow-hidden resize-none border border-white bg-white bg-opacity-20 placeholder:text-white placeholder:text-opacity-70 text-white active:outline-none focus:outline-none focus:outline-white '}
		{required}
		{type}
		{name}
	/>
</div>
