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

	useHead({ title: 'Баня.ру – портал о банях и саунах России' });
</script>

<template>
	<div class="container" v-if="isLarge">
		<Filter />
		<HomeSlider />
		<HomeDiscount />
		<HomePopular />
		<HomeMap />
		<HomeLinks />
		<HomePremium />
		<HomeInfo />
	</div>

	<div v-else>
		<HomeMobileTop />
		<div class="add-advert">+ Разместить объявление</div>
		<HomeMobileSearch />
		<HomeMobileCatalog />
		<HomeMobileServices />
		<HomeMobileAdvert />
		<HomeMobileLinks />
		<HomeMobileAdvertsLocation />
		<HomeMobileFooter />
	</div>
</template>

<style lang="scss" scoped>
	.add-advert {
		font-weight: 700;
		font-size: 1.6rem;
		line-height: 2rem;
		margin-top: 5rem;
		padding: 0 2rem;
		color: $green-color;
	}
	.mobile-container {
		padding: 0 2rem;
	}
</style>
