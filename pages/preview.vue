<script setup>
	// Import Swiper Vue.js components
	import { Swiper, SwiperSlide } from 'swiper/vue';
	import { EffectFade } from 'swiper';

	// Import Swiper styles
	import 'swiper/css';

	import bigIm1 from '~/assets/img/promotions/1.jpg';
	import bigIm2 from '~/assets/img/promotions/2.jpg';
	import bigIm3 from '~/assets/img/promotions/3.jpg';

	const img = ref([
		bigIm1,
		bigIm2,
		bigIm3,
		bigIm1,
		bigIm2,
		bigIm3,
		bigIm1,
		bigIm2,
		bigIm3,
		bigIm1,
	]);

	definePageMeta({
		layout: 'slider',
	});

	const swiperBtn = ref(null);
	const currentImg = computed(() => swiperBtn.value?.realIndex + 1);
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
	<div class="preview-page">
		<div class="container">
			<div class="preview-page__inner">
				<div class="preview-page__top">
					<div class="preview-page__left">
						<div class="preview-page__title h1">Очаковские бани</div>
						<div class="preview-page__hall h1">Зал №3</div>
					</div>
					<div class="preview-page__right">
						<ul class="nav">
							<li class="nav__item h3 active">Видео</li>
							<li class="nav__item h3">3D-тур</li>
						</ul>
						<div class="preview-page__action">
							<img
								class="user-action__item"
								src="~/assets/img/icon/like.svg"
								alt=""
							/>
							<button class="preview-page__btn btn btn-green">
								+7 498 289 89 ...
							</button>
						</div>
						<img
							class="preview-page__close"
							src="~/assets/img/icon/close.svg"
							alt=""
						/>
					</div>
				</div>
				<div class="preview-page__content">
					<swiper
						@swiper="getRef"
						:modules="modules"
						:effect="'fade'"
						class="preview-swiper product-swiper"
					>
						<swiper-slide v-for="item in img">
							<div class="preview-card-swiper__main product-card-swiper__main">
								<img
									class="preview-card-swiper__bg product-card-swiper__bg"
									:src="item"
									alt=""
								/>

								<img
									src="~/assets/img/product-card/logo.png"
									alt=""
									class="preview-card-swiper__logo product-card-swiper__logo pos"
								/>
								<div
									class="preview-card-swiper__play product-card-swiper__play pos"
								>
									<img src="~/assets/img/preview/play.svg" alt="" />
								</div></div
						></swiper-slide>
						<div
							class="product-card-swiper__arrow arrow-left pos"
							@click="prev"
						>
							<IconArrow class="fill" />
						</div>
						<div
							class="product-card-swiper__arrow arrow-right pos"
							@click="next"
						>
							<IconArrow />
						</div>
						<UISliderButton
							:max="10"
							:current="currentImg"
							class="product-card-swiper__count pos"
						/>
					</swiper>

					<div class="preview-card-swiper__thumbnail">
						<img
							@click="slideTo(idx)"
							v-for="(item, idx) in 10"
							:class="{
								active: idx === swiperBtn?.realIndex,
							}"
							src="~/assets/img/product-card/card-swiper.jpg"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
	.user-action__item {
		cursor: pointer;
	}
	.nav {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 5.6rem;

		&__item {
			cursor: pointer;
			color: $mainFontColor;
			&.active {
				font-size: 1.6rem;
				color: $green-color;
				position: relative;

				&::before {
					content: '';
					position: absolute;
					height: 0.6rem;
					width: 9rem;
					background-color: $green-color;
					left: 50%;
					border-radius: 0px 2px 2px 0px;
					bottom: -4rem;
					transform: translateX(-50%);
				}
			}
		}
	}
	.preview-page {
		padding: 5.6rem 0;
		width: 100%;
		&__inner {
		}

		&__close {
			cursor: pointer;
			width: 3rem;
			height: 3rem;
		}

		&__top {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 2.8rem;
		}

		&__left {
			display: flex;
			gap: 7.7rem;
			align-items: center;
		}

		&__title {
			color: $mainFontColor;
		}

		&__hall {
			color: $mainFontColor;
			position: relative;

			&::before {
				content: '';
				position: absolute;
				height: 2.3rem;
				width: 3px;
				background-color: $green-color;
				top: 50%;
				left: -2rem;
				transform: translateY(-50%);
			}
		}

		&__right {
			display: flex;
			align-items: center;
		}

		&__action {
			display: flex;
			align-items: center;
			gap: 4rem;
			margin-left: 8rem;
			margin-right: 2.8rem;
		}

		&__content {
		}

		&__btn {
			padding-top: 1.5rem;
			padding-bottom: 1.5rem;
		}
	}

	.preview-swiper {
		max-width: 100%;
		margin-bottom: 4rem;
	}
	.preview-card-swiper {
		&__main {
		}

		&__bg {
			max-height: 100%;
		}

		&__logo {
		}

		&__play {
			width: 10rem;
			height: 10rem;

			& img {
				width: 50px;
			}
		}

		&__arrow {
		}

		&__count {
		}

		&__thumbnail {
			display: flex;
			gap: 2.5rem;

			& img {
				cursor: pointer;
				flex: 1;
				width: 100%;
				border-radius: 2rem;

				&.active {
					border: 2px solid #17a300;
					filter: drop-shadow(0px 7px 23px rgba(118, 130, 168, 0.55));
					border-radius: 12px;
					transform: scale(1.1);
				}
			}
		}
	}
</style>
