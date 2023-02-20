<script setup>
	const isLarge = ref(true);

	onMounted(() => {
		if (window.innerWidth <= 768) {
			isLarge.value = false;
		}
	});
</script>

<template>
	<ClientOnly fallback-tag="span" fallback="Loading comments...">
		<div class="wrapper">
			<TheHeader v-if="isLarge" />
			<div class="wrapper-content">
				<slot />
			</div>
			<TheFooter />
		</div>
	</ClientOnly>
</template>

<style scoped lang="scss">
	.wrapper-content {
		@media screen and (max-width: 768px) {
			margin: 0;
		}
	}
</style>
