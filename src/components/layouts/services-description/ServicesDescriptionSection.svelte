<script lang="ts">
	import type { ComponentProps } from 'svelte';
	import ServiceDescriptionCard from './ServiceDescriptionCard.svelte';

	export let services: Array<ComponentProps<ServiceDescriptionCard>>;
</script>

<div class="pb-20">
	<div class="container mx-auto">
		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-32 sm:gap-10 md:gap-32 lg:gap-10 mt-20 md:mt-40"
		>
			{#each services as service}
				<ServiceDescriptionCard
					title={service.title}
					icon={service.icon}
					description={service.description}
				/>
			{/each}
		</div>
	</div>
</div>
