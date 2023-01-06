declare module '*.jpg?responsive' {
	export const IMAGE: {
		format: 'jpg' | 'png' | 'webp' | 'gif' | 'svg';
		width: number;
		height: number;
		src: string;
	};
	const images: IMAGE[];

	export default images;
}

declare module '*.png?responsive' {
	export const IMAGE: {
		format: 'jpg' | 'png' | 'webp' | 'gif' | 'svg';
		width: number;
		height: number;
		src: string;
	};
	const images: IMAGE[];

	export default images;
}
