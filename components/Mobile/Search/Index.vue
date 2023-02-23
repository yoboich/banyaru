<script setup>
	import { Swiper, SwiperSlide } from 'swiper/vue';
	import { EffectFade } from 'swiper';

	import 'swiper/css';
	import 'swiper/css/effect-fade';

	const cardActive = ref(false);

	const swiperBtn = ref(null);
	function getRef(swiperInstance) {
		swiperBtn.value = swiperInstance;
	}
	function next() {
		swiperBtn.value.slideNext();
	}
	function prev() {
		swiperBtn.value.slidePrev();
	}
	function slideTo(idx) {
		swiperBtn.value.slideTo(idx);
	}
	const modules = [EffectFade];
</script>

<template>
	<div class="search-mobile-page">
		<div class="search__container container">
			<div class="search-mobile-page__inner">
				<iframe
					width="100%"
					height="100%"
					class="absolute inset-0 search-mobile-page__map"
					frameborder="0"
					title="map"
					marginheight="0"
					marginwidth="0"
					scrolling="yes"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114111.50283511227!2d37.46580264053963!3d55.73366918983649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1675549894887!5m2!1sru!2sru"
					loading="lazy"
					style="filter: opacity(0.7)"
				></iframe>
				<div class="search-mobile-page__btn btn btn-white">Сохранить поиск</div>
				<div class="search-mobile-page__setting btn btn-white">
					<img src="~/assets/img/search-moble/setting.png" alt="" />
				</div>
				<div
					class="search-mobile-page__list btn btn-white"
					@click="cardActive = true"
				>
					<div class="search-mobile-page__burger">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					Список
				</div>
			</div>
			<div class="search-mobile-page__card" :class="{ active: cardActive }">
				<div class="search-mobile-page__top">
					<div class="search-mobile-page__how h2">1 936 объявлений</div>
					<span class="search-mobile-page__info" @click="cardActive = false">
						<img src="~/assets/img/search-moble/hide.svg" alt="" />
					</span>
				</div>
				<div class="search-mobile-page__name h4">
					<img src="~/assets/img/product-card/logo.png" alt="" /> Сауна цветы
				</div>
				<swiper
					@swiper="getRef"
					:modules="modules"
					:effect="'fade'"
					class="search-swiper"
				>
					<swiper-slide>
						<nuxt-img src="/promotions/1.jpg" quality="90" />
					</swiper-slide>
					<swiper-slide>
						<nuxt-img src="/promotions/2.jpg" quality="90" />
					</swiper-slide>
					<swiper-slide>
						<nuxt-img src="/promotions/3.jpg" quality="90" />
					</swiper-slide>
					<div class="product-card-swiper__arrow arrow-left pos" @click="prev">
						<IconArrow :class="{ fill: swiperBtn?.realIndex + 1 != 1 }" />
					</div>
					<div class="product-card-swiper__arrow arrow-right pos" @click="next">
						<IconArrow :class="{ fill: swiperBtn?.realIndex + 1 != 3 }" />
					</div>
				</swiper>
				<div class="search-mobile-page__thumbnail">
					<nuxt-img
						@click="slideTo(0)"
						src="/promotions/1.jpg"
						quality="90"
					/><nuxt-img
						@click="slideTo(1)"
						src="/promotions/2.jpg"
						quality="90"
					/><nuxt-img
						@click="slideTo(2)"
						src="/promotions/3.jpg"
						quality="90"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.search__container {
		position: relative;
	}
	.search-swiper {
		max-width: 32rem;

		& img {
			width: 100%;
			border-radius: 1.2rem;
		}
	}
	.search-mobile-page {
		overflow-x: hidden;
		width: 100%;
		padding: 2rem;
		box-sizing: border-box;
		&__inner {
			min-height: 95vh;
			position: relative;
			overflow: hidden;
		}

		&__map {
			height: 125%;
			position: absolute;
			margin-top: -8rem;
		}

		&__thumbnail {
			max-width: 32rem;
			margin: 0 auto;
			display: flex;
			align-items: center;
			gap: 1rem;
			& img {
				width: 100%;
				border-radius: 1.2rem;
			}
		}

		&__card {
			background: #ffffff;
			box-shadow: 0px 11px 48px rgba(123, 129, 148, 0.4);
			border-radius: 2.3rem;
			padding-bottom: 1rem;
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			overflow: hidden;
			visibility: hidden;

			&.active {
				overflow: visible;
				visibility: visible;
			}
		}

		&__info {
			cursor: pointer;
		}

		&__top {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 2.2rem 2.5rem 0;
		}

		&__name {
			display: flex;
			color: $secondary-color;
			align-items: center;
			gap: 2rem;
			margin-bottom: 0.7rem;
			padding: 0 2.5rem 0;
		}

		&__info {
			width: 3.5rem;
			height: 3.5rem;
			box-shadow: 0px 4px 10px rgba(143, 153, 186, 0.31);
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 50%;
		}

		&__btn {
			position: absolute;
			top: 1rem;
			left: 1rem;
		}

		&__setting {
			position: absolute;
			top: 1rem;
			right: 1rem;
			padding: 1rem 0.5rem;
			border-radius: 12px;
		}

		&__list {
			position: absolute;
			bottom: 1rem;
			left: 1rem;
		}

		&__burger {
		}
	}
</style>
