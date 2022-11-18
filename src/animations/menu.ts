/* eslint-disable @typescript-eslint/no-unused-vars */

import { cubicInOut } from 'svelte/easing';
import type { TransitionConfig } from 'svelte/transition';

interface Params {
	duration?: number;
	easing?: typeof cubicInOut;
	x: number;
	y: number;
}

export default function menu(
	node: any,
	{ duration = 300, easing = cubicInOut, x, y }: Params
): TransitionConfig {
	return {
		duration,
		css: (t) => {
			const eased = easing(t);

			return `
        clip-path: circle(${eased * 200}% at ${x}% ${y}%); 
      `;
		}
	};
}
