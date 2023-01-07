/* eslint-disable @typescript-eslint/no-unused-vars */

import { cubicInOut } from 'svelte/easing';
import type { TransitionConfig } from 'svelte/transition';

interface Params {
	duration?: number;
	easing?: typeof cubicInOut;
}

export function imagein(
	node: any,
	{ duration = 300, easing = cubicInOut }: Params
): TransitionConfig {
	return {
		duration,
		css: (t) => {
			const eased = easing(t);
			const value = eased * 100;

			return `
        clip-path: inset(0 ${100 - value}% 0 0);
      `;
		}
	};
}

export function imageout(
	node: any,
	{ duration = 300, easing = cubicInOut }: Params
): TransitionConfig {
	return {
		duration,
		css: (t) => {
			const eased = easing(t);
			const value = eased * 100;

			return `
        clip-path: inset(0 0 0 ${100 - value}%);
      `;
		}
	};
}
