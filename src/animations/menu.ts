/* eslint-disable @typescript-eslint/no-unused-vars */

import { cubicInOut } from 'svelte/easing';
import type { TransitionConfig } from 'svelte/transition';

interface Params {
	duration?: number;
	easing?: typeof cubicInOut;
}

export default function menu(
	node: any,
	{ duration = 300, easing = cubicInOut }: Params
): TransitionConfig {
	return {
		duration,
		css: (t) => {
			const eased = easing(t);

			return `
        opacity: ${eased}
      `;
		}
	};
}
