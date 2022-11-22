<script lang="ts">
	import Icon, { type IconifyIcon } from '@iconify/svelte';

	export let icon: IconifyIcon;
	export let title: string;
</script>

<div class="flex mt-16 gap-5">
	<div class="px-5">
		<Icon {icon} width={30} />
	</div>
	<div class="flex-1">
		<div class="text-2xl font-bold">{title}</div>
		<p class="mt-5">
			<slot />
		</p>
	</div>
</div>
