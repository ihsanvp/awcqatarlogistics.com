import type { SvelteComponent } from 'svelte';

export interface Slide {
	title: string;
	description: string;
	image: string;
	icon: typeof SvelteComponent;
	category: string;
}
