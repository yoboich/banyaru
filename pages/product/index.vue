<script setup>
	const isLarge = ref(true);

	onMounted(() => {
		if (window.innerWidth <= 768) {
			isLarge.value = false;
		}
	});
</script>

<template>
	<div class="card" v-if="isLarge">
		<ProductCardTop />
		<div class="card__content">
			<div class="card__left">
				<ProductCardLeftFirst />
			</div>
			<div class="card__right">
				<div class="product-card-swiper__main">
					<nuxt-img
						class="product-card-swiper__bg"
						src="/promotions/1.jpg"
						sizes="sm:100vw md:50vw lg:900px"
						quality="90"
					/>

					<img
						src="~/assets/img/product-card/logo.png"
						alt=""
						class="product-card-swiper__logo pos"
					/>
				</div>
			</div>
		</div>
	</div>
	<MobileProductCard v-if="!isLarge" :free="true" />
	<MobileProductAdress v-if="!isLarge" />
	<MobileProductFavorite v-if="!isLarge" />
	<ProductCardBlocked class="no-box" v-if="true" />
	<ProductCardService v-if="isLarge" class="no-box" />
	<ProductCardReview class="no-box review-mobile" />
	<ProductCardRelated class="no-box related-mobile" />
</template>

<style lang="scss">
	.no-swip {
		pointer-events: none !important;
	}
</style>
