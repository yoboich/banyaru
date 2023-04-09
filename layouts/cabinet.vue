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
		<TheHeaderNew class="header-cabinet" v-if="isLarge" />
		<slot />
	</div>
</template>

<style scoped>
	.header-cabinet {
		position: relative;
		margin-top: 2rem;
	}
  .wrapper {
    background: #F1F3F9;
    box-shadow: 0px 4px 63px rgba(0, 0, 0, 0.25);
  }
	@media screen and (max-width: 768px) {
		.wrapper {
			margin: 0;
		}
	}
</style>
