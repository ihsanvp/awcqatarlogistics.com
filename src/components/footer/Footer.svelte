<script lang="ts">
	import CONTACT from '@data/contact';
	import Icon from '@iconify/svelte';
	import MobileIcon from '@iconify-icons/mdi/phone';
	import MailIcon from '@iconify-icons/mdi/mail';
	import LocationIcon from '@iconify-icons/mdi/location';
	import renderContent from '@helpers/renderContent';
	import ContactBlock from './ContactBlock.svelte';

	const socials = CONTACT.socials;
</script>

<footer class="bg-primary text-white">
	<div class="container mx-auto py-32">
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-20">
			<div class="flex flex-col gap-5">
				<div class="text-xl font-semibold">Company</div>
				<div class="h-1 w-10 bg-white opacity-50" />
				<div class="text-sm opacity-80 hover:opacity-100 cursor-pointer">About Company</div>
				<div class="text-sm opacity-80 hover:opacity-100 cursor-pointer">Our History</div>
				<div class="text-sm opacity-80 hover:opacity-100 cursor-pointer">Company Achievement</div>
				<div class="text-sm opacity-80 hover:opacity-100 cursor-pointer">Meet The Team</div>
				<div class="text-sm opacity-80 hover:opacity-100 cursor-pointer">Success Story</div>
			</div>
			<div class="flex flex-col gap-5">
				<div class="text-xl font-semibold">Quick Links</div>
				<div class="h-1 w-10 bg-white opacity-50" />
				<div class="text-sm opacity-80 hover:opacity-100 cursor-pointer">Popular Services</div>
				<div class="text-sm opacity-80 hover:opacity-100 cursor-pointer">Make An Appointment</div>
				<div class="text-sm opacity-80 hover:opacity-100 cursor-pointer">Newsletters Subscribe</div>
				<div class="text-sm opacity-80 hover:opacity-100 cursor-pointer">Latest News</div>
				<div class="text-sm opacity-80 hover:opacity-100 cursor-pointer">Become A Member</div>
			</div>
			<div class="flex flex-col gap-5">
				<div class="text-xl font-semibold">Contact</div>
				<div class="h-1 w-10 bg-white opacity-50" />
				<ContactBlock icon={MobileIcon} url={CONTACT.mobile.url}>
					{CONTACT.mobile.text}
				</ContactBlock>
				<ContactBlock icon={MailIcon} url={CONTACT.email.url}>
					{CONTACT.email.text}
				</ContactBlock>
				<ContactBlock icon={LocationIcon} url={CONTACT.address.url}>
					{@html renderContent(CONTACT.address.text)}
				</ContactBlock>
			</div>
			<div class="flex flex-col gap-5">
				<div class="text-xl font-semibold">About Us</div>
				<div class="h-1 w-10 bg-white opacity-50" />
				<div class="text-sm opacity-90">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum temporibus minima itaque
					dolores ipsa, dolor iure beatae rem culpa nobis.
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
		</div>
	</div>
</footer>
