<script lang="ts">
	import Icon, { type IconifyIcon } from '@iconify/svelte';

	export let title: string;
	export let description: string;
	export let icon: IconifyIcon;
</script>

<div class="flex mt-16 gap-3 sm:gap-5 lg:gap-3 xl:gap-5">
	<div class="px-3 sm:px-5 lg:px-3 xl:px-5">
		<Icon {icon} width={30} />
	</div>
	<div class="flex-1">
		<div class="text-2xl font-bold">{title}</div>
		<p class="mt-3 sm:mt-5 lg:mt-3 xl:mt-5 opacity-90">
			{description}
		</p>
	</div>
</div>
