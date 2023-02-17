<script setup>
	import productItemData from '~~/composables/productItemData';
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
		<ProductCardTop badje="book" badjeText="Бронь" />
		<div class="card__content">
			<div class="card__left">
				<ProductBookFirst />
				<ProductBookSecond />
			</div>
			<div class="card__right">
				<ProductCardSwiper :premium="true" />
			</div>
		</div>
		<div class="card-desc">
			<div class="card-desc__left">
				<ProductBookThird />
			</div>
			<div class="card-desc__right">
				<iframe
					width="100%"
					height="100%"
					class="absolute inset-0"
					frameborder="0"
					title="map"
					marginheight="0"
					marginwidth="0"
					scrolling="yes"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114111.50283511227!2d37.46580264053963!3d55.73366918983649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1675549894887!5m2!1sru!2sru"
					loading="lazy"
					style="filter: opacity(0.7)"
				></iframe>
			</div>
		</div>
		<div class="card-bottom-btn">
			<div class="card-bottom-btn__left">
				<button class="btn btn-green">Позвонить</button>
				<button class="btn btn-green">Написать</button>
			</div>
			<div class="card-bottom-btn__right">
				<button class="btn btn-white">Построить маршрут</button>
				<button class="btn btn-white">Вызвать такси</button>
			</div>
		</div>
	</div>
	<MobileCard v-if="!mobile.isLargeScreen" />
	<ProductBookPrice class="card-under" />
	<ProductBookSales class="card-under" />
	<ProductBookDetail class="card-under" />
	<ProductBookItems
		class="card-hall"
		title="Залы"
		:items="productItemData.halls"
	/>
	<ProductBookItems
		class="card-service"
		title="Услуги"
		:items="productItemData.services"
	/>
	<ProductBookItems
		class="card-bath"
		title="Банные принадлежности"
		:items="productItemData.bath"
	/>
	<ProductCardService class="no-box" />
	<ProductCardReview class="no-box" />
	<ProductCardRelated class="no-box" />
</template>

<style lang="scss">
	.card-hall {
		z-index: 5;
	}
	.card-service {
		z-index: 4;
	}
	.card-bath {
		z-index: 3;
	}

	.card-desc {
		padding-top: 3.5em;
		display: flex;
		gap: 1rem;
		&__left {
			width: 100%;
			max-width: 54rem;
		}

		&__right {
			width: 100%;
		}
	}
</style>
