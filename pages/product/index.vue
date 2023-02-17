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
	<div class="card" v-if="mobile.isLargeScreen">
		<ProductCardTop />
		<div class="card__content">
			<div class="card__left">
				<ProductCardLeftFirst />
			</div>
			<div class="card__right">
				<ProductCardSwiper />
			</div>
		</div>
	</div>
	<MobileCard v-if="!mobile.isLargeScreen" :free="true" />
	<ProductCardBlocked class="no-box" v-if="true" />
	<ProductCardService class="no-box" />
	<ProductCardReview class="no-box" />
	<ProductCardRelated class="no-box" />
</template>

<style lang="scss"></style>
