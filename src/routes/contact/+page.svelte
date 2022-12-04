<script lang="ts">
	import ResponsiveImage from '@components/common/ResponsiveImage.svelte';
	import bg from '@assets/images/img-10.jpg?responsive';
	import Input from '@components/common/Input.svelte';
	import { navigating, page } from '$app/stores';
	import { onMount } from 'svelte';

	let form: HTMLFormElement;

	function clearForm() {
		const fields: NodeListOf<HTMLInputElement> = form.querySelectorAll('input, textarea');

		fields.forEach((f) => {
			f.value = '';
		});
	}

	function getData() {
		const fields: NodeListOf<HTMLInputElement> = form.querySelectorAll('input, textarea');
		const data: { [key: string]: any } = {};

		fields.forEach((f) => {
			data[f.name] = f.value;
		});

		return data;
	}

	function submitForm(e: any) {
		e.preventDefault();
		console.log(getData());
		clearForm();
	}

	onMount(() => {
		if ($navigating && $navigating.to?.url.pathname == $page.url.pathname) {
			setTimeout(() => window.scrollTo(0, 0), 500);
		}
	});
</script>

<div class="mt-[60px] md:mt-[70px]">
	<section class="md:h-[300px] relative">
		<div class="relative container mx-auto z-[1] py-20">
			<div class="text-center text-4xl md:text-6xl text-white font-bold">
				Don't Hesitate To Contact Us
			</div>
		</div>
		<div class="absolute inset-0">
			<ResponsiveImage class="w-full h-full object-cover" src={bg} alt="bg" />
		</div>
		<div class="absolute inset-0 bg-black opacity-50" />
	</section>
	<section class="py-20">
		<div class="container mx-auto">
			<div class="flex flex-col items-center justify-center gap-5 md:gap-10 ">
				<div class="text-secondary text-center text-sm">Get in touch</div>
				<div class="text-4xl text-black font-bold text-center">Contact Us</div>
				<div class="h-1 w-10 bg-secondary" />
				<form
					name="contact"
					bind:this={form}
					class="w-full grid grid-cols-2 gap-5 md:gap-10 mt-10"
					on:submit={submitForm}
					data-netlify="true"
				>
					<Input class="col-span-2 md:col-span-1" required name="name" type="text" label="Name" />
					<Input
						class="col-span-2 md:col-span-1"
						required
						name="email"
						type="email"
						label="Email"
					/>
					<Input
						class="col-span-2 md:col-span-1"
						required
						name="mobile"
						type="text"
						label="Mobile"
					/>
					<Input
						class="col-span-2 md:col-span-1"
						required
						name="company"
						type="text"
						label="Company"
					/>
					<Input class="col-span-2" name="details" type="textarea" label="Request Details" />
					<div class="col-span-2 flex items-center justify-center">
						<button
							class="w-full max-w-[600px] py-3 text-center bg-gray-800 text-white md:hover:bg-secondary cursor-pointer transition-all duration-300 md:hover:scale-95"
							type="submit"
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	</section>
</div>
