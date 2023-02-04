<script lang="ts">
	import CONTACT from '@data/contact';
	import Icon from '@iconify/svelte';
	import MobileIcon from '@iconify-icons/mdi/phone';
	import MailIcon from '@iconify-icons/mdi/email';
	import LocationIcon from '@iconify-icons/mdi/location';
	import renderContent from '@helpers/renderContent';
	import ContactBlock from './ContactBlock.svelte';
	import ResponsiveImage from '@components/common/ResponsiveImage.svelte';
	import logo from '@assets/images/logo-white-full.png?responsive';
	import WhatsappIcon from '@iconify-icons/mdi/whatsapp';

	const socials = CONTACT.socials;
</script>

<footer class="bg-primary text-white">
	<div class="container mx-auto py-32">
		<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-y-20 gap-x-20">
			<div class="flex flex-col gap-5 col-span-1 sm:col-span-2 xl:col-span-1">
				<div class="max-w-[400px]">
					<ResponsiveImage class="w-full h-auto" src={logo} alt="footer-logo" />
				</div>
				<div class="text-sm opacity-80 mt-5 max-w-[600px]">
					We offer a comprehensive range of cargo services in optimum time both within Qatar and GCC
					countries.
				</div>
				<div class="flex items-center gap-5">
					{#each socials as social}
						<div
							class="w-10 h-10 border border-white rounded-full flex items-center justify-center overflow-hidden"
						>
							{#if social.url}
								<a
									class="w-full h-full flex items-center justify-center hover:bg-white hover:text-orange-600 transition-colors duration-500"
									href={social.url}
									target="_blank"
									rel="noreferrer"
								>
									<svelte:component this={Icon} icon={social.icon} width={20} />
								</a>
							{:else}
								<svelte:component this={Icon} icon={social.icon} width={20} />
							{/if}
						</div>
					{/each}
				</div>
			</div>
			<div class="flex flex-col gap-3">
				<div class="text-xl font-bold">CONTACT US</div>
				<div class="h-[2px] w-10 bg-white" />
				<div class="mt-5 font-semibold text-md">Our Address</div>
				<div class="text-sm opacity-80">
					PO Box: 55247 <br />
					Office #04, Building #04 <br />
					Sheikha Abdullah Bin Thani Building <br />
					C Ring Road, Doha, Qatar <br />
				</div>
			</div>
			<div class="flex flex-col gap-3">
				<div class="text-xl font-bold">GET IN TOUCH</div>
				<div class="h-[2px] w-10 bg-white" />
				<div class="flex flex-col gap-5 mt-5">
					<ContactBlock icon={MobileIcon} url={CONTACT.mobile.url}>
						{CONTACT.mobile.text}
					</ContactBlock>
					<ContactBlock icon={WhatsappIcon} url={CONTACT.whatsapp.url}>
						{CONTACT.whatsapp.text}
					</ContactBlock>
					<ContactBlock icon={MailIcon} url={CONTACT.email.url}>
						{@html renderContent(CONTACT.email.text)}
					</ContactBlock>
					<ContactBlock icon={LocationIcon} url={CONTACT.address.url}>
						{@html renderContent(CONTACT.address.text)}
					</ContactBlock>
				</div>
			</div>
			<div class="col-span-1 sm:col-span-2 xl:col-span-1">
				<iframe
					title="map"
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7215.722887780986!2d51.5507134!3d25.275246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45cebc71f0e0ab%3A0x8775f9c645946a81!2sKitchen%20Dealers!5e0!3m2!1sen!2sin!4v1673026905303!5m2!1sen!2sin"
					width="100%"
					height="100%"
					style="border:0;"
					allowfullscreen
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				/>
			</div>
		</div>
	</div>
</footer>
<div class="bg-primary py-5 text-white opacity-90">
	<div class="container mx-auto flex items-center justify-center">
		<div class="text-sm opacity-70">©2023 Studiotwofour, Arabian Wings Logistics & Trading WLL</div>
	</div>
</div>
