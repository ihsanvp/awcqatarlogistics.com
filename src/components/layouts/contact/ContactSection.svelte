<script lang="ts">
	import Input from '@components/common/Input.svelte';
	import ContactRadioButton from './ContactRadioButton.svelte';

	import AirServiceIcon from '@components/icons/AirServiceIcon.svelte';
	import OceanServiceIcon from '@components/icons/OceanServiceIcon.svelte';
	import RoadServiceIcon from '@components/icons/RoadServiceIcon.svelte';
	import WarehouseServiceIcon from '@components/icons/WarehouseServiceIcon.svelte';
	import renderContent from '@helpers/renderContent';

	export let title: string;
	export let description: string;
	export let info: string;

	let service: string = '';
</script>

<div class="bg-secondary py-40">
	<div class="container mx-auto">
		<div class="grid grid-cols-12 gap-10">
			<div class="col-span-12 xl:col-span-4">
				<div class="text-5xl text-white font-extrabold">{@html renderContent(title)}</div>
				<p class="mt-10 text-white opacity-80 max-w-[500px]">
					{description}
				</p>
			</div>
			<div class="col-span-12 xl:col-span-8">
				<div class="text-white opacity-80 text-sm">{info}</div>
				<form
					name="contact"
					method="POST"
					class="w-full grid grid-cols-2 gap-5 mt-10"
					data-netlify="true"
				>
					<input type="hidden" name="form-name" value="contact" />
					<input type="hidden" name="subject" value="Sales inquiry from awcqatarlogistics.com" />
					<input type="hidden" name="service" value={service} />
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
					<div class="col-span-2">
						<div class="text-lg text-white opacity-90 mb-3">Select Service</div>
						<fieldset>
							<ul class="grid w-full gap-6 grid-cols-2 md:grid-cols-4">
								<li>
									<ContactRadioButton
										label="Air Freight"
										icon={AirServiceIcon}
										name="service"
										value="air"
										required
										bind:current={service}
									/>
								</li>
								<li>
									<ContactRadioButton
										label="Ocean Freight"
										icon={OceanServiceIcon}
										name="service"
										value="ocean"
										bind:current={service}
									/>
								</li>
								<li>
									<ContactRadioButton
										label="Road Freight"
										icon={RoadServiceIcon}
										name="service"
										value="road"
										bind:current={service}
									/>
								</li>
								<li>
									<ContactRadioButton
										label="Warehousing"
										icon={WarehouseServiceIcon}
										name="service"
										value="storage"
										bind:current={service}
									/>
								</li>
							</ul>
						</fieldset>
					</div>
					<div class="col-span-2 mt-10 flex items-center justify-center">
						<button
							class="px-20 py-3 text-center bg-white text-primary md:hover:bg-primary md:hover:text-white cursor-pointer transition-all duration-300 md:hover:scale-95"
							type="submit"
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
