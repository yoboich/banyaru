<script setup>
	import { useWindowSize } from '@vueuse/core';
	const isLarge = ref(true);

	const { width } = useWindowSize();
	watchEffect(() => {
		if (width.value <= 768) {
			isLarge.value = false;
		} else {
			isLarge.value = true;
		}
	});
	onMounted(() => {
		if (width.value <= 768) {
			isLarge.value = false;
		}
	});
</script>

<template>
	<div class="wrapper">
		<TheHeader class="header-cabinet" v-if="isLarge" />

		<slot />
	</div>
</template>

<style scoped>
	.header-cabinet {
		position: relative;
		margin-top: 2rem;
	}

	@media screen and (max-width: 768px) {
		.wrapper {
			margin: 0;
		}
	}
</style>
