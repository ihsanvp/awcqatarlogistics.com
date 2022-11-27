import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	optimizeDeps: {
		include: ['blurhash'],
	},
	ssr: {
		noExternal: ['svelte-image'],
	},
};

export default config;
