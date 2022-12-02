import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { imagetools } from "vite-imagetools"

const config: UserConfig = {
	plugins: [sveltekit(), imagetools({
		defaultDirectives: id => {
			if (id.searchParams.has("responsive")) {
				return new URLSearchParams("w=300;600;900;1200&format=jpg;webp;avif&meta=width;height;src;format&q=70")
			}

			return new URLSearchParams()
		}
	})],
};

export default config;
