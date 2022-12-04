<script lang="ts">
	import ResponsiveImage from '@components/common/ResponsiveImage.svelte';
	import bg from '@assets/images/img-10.jpg?responsive';
	import Input from '@components/common/Input.svelte';

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
</script>

<div class="mt-[60px] md:mt-[70px]">
	<section class="h-[300px] relative">
		<div class="relative container mx-auto z-[1] py-20">
			<div class="text-center text-6xl text-white font-bold">Don't Hesitate To Contact Us</div>
		</div>
		<div class="absolute inset-0">
			<ResponsiveImage class="w-full h-full object-cover" src={bg} alt="bg" />
		</div>
		<div class="absolute inset-0 bg-black opacity-50" />
	</section>
	<section class="py-20">
		<div class="container mx-auto">
			<div class="flex flex-col items-center justify-center gap-10">
				<div class="text-orange-500 text-center text-sm">Get in touch</div>
				<div class="text-4xl text-black font-bold text-center">Contact Us</div>
				<div class="h-1 w-10 bg-orange-500" />
				<form bind:this={form} class="w-full grid grid-cols-2 gap-10 mt-10" on:submit={submitForm}>
					<Input required name="name" type="text" label="Name" />
					<Input required name="email" type="email" label="Email" />
					<Input required name="mobile" type="text" label="Mobile" />
					<Input required name="company" type="text" label="Company" />
					<Input class="col-span-2" name="details" type="textarea" label="Request Details" />
					<div class="col-span-2 flex items-center justify-center">
						<button
							class="w-full max-w-[600px] py-3 text-center bg-gray-800 text-white md:hover:bg-orange-600 cursor-pointer transition-all duration-300 md:hover:scale-95"
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
