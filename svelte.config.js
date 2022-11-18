import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],

	kit: {
		adapter: adapter({
			strict: true,
			precompress: true
		}),
		alias: {
			"@components/*": "src/components",
			"@assets/*": "src/assets",
			"@content/*": "src/content",
			"@animations/*": "src/animations",
			"@helpers/*": "src/helpers"
		},
	},
};

export default config;
