/* eslint-disable @typescript-eslint/no-unused-vars */

import { type TransitionConfig, type FlyParams, fly } from 'svelte/transition';

interface Params {
	mobile: FlyParams;
	desktop: FlyParams;
}

export default function landing(node: Element, opts: Params): TransitionConfig {
	if (typeof window != 'undefined' && window.innerWidth > 600) {
		return fly(node, opts.desktop);
	}

	return fly(node, opts.mobile);
}
