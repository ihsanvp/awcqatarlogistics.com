<script lang="ts">
	import bg from '@assets/images/img-9.jpg?responsive';
	import curve from '@assets/svgs/curve-3.svg';
	import ResponsiveImage from '@components/common/ResponsiveImage.svelte';
</script>

<div class="absolute inset-0 overflow-hidden">
	<ResponsiveImage class="w-full h-full object-cover" src={bg} alt="landing" />
	<div class="absolute inset-0 bg-black opacity-50" />
	<div class="absolute inset-0 flex flex-col items-center justify-end">
		<img src={curve} alt="curve" />
	</div>
</div>
