<script setup>
	const isLarge = ref(true);

	onMounted(() => {
		if (window.innerWidth <= 768) {
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
