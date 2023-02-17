<script setup>
	import { useMediaQuery } from '@vueuse/core';

	const isLargeScreen = useMediaQuery('(min-width: 768px)');
	const mobile = computed(() =>
		reactive({
			isLargeScreen,
		})
	);
</script>

<template>
	<div class="wrapper">
		<TheHeader v-if="mobile.isLargeScreen" />
		<div class="wrapper-content">
			<slot />
		</div>
		<TheFooter v-if="mobile.isLargeScreen" />
	</div>
</template>

<style scoped lang="scss">
	.wrapper-content {
		@media screen and (max-width: 768px) {
			margin: 0;
		}
	}
</style>
