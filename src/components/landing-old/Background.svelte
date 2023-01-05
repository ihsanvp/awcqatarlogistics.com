<script lang="ts">
	import bg from '@assets/images/img-9.jpg?responsive';
	import ResponsiveImage from '@components/common/ResponsiveImage.svelte';
</script>

<div class="absolute inset-0 -bottom-60 overflow-hidden">
	<ResponsiveImage class="w-full h-full object-cover" src={bg} alt="landing" />
	<div class="absolute inset-0 bg-black opacity-50" />
</div>
