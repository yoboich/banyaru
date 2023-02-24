<script setup>
	// Import Swiper Vue.js components
	import { Swiper, SwiperSlide } from 'swiper/vue';
	import { EffectFade } from 'swiper';

	// Import Swiper styles
	import 'swiper/css';

	import bigIm1 from '~/assets/img/promotions/1.jpg';
	import bigIm2 from '~/assets/img/promotions/2.jpg';
	import bigIm3 from '~/assets/img/promotions/3.jpg';

	defineProps({
		visible: {
			type: Boolean,
			default: false,
		},
	});
	definePageMeta({
		layout: 'slider',
	});
	const emit = defineEmits('closeModal');

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

	const isLarge = ref(true);
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

	const itemLink = ref([
		{
			text: 'Видео',
			active: true,
		},
		{
			text: '3D-тур',
			active: false,
		},
	]);

	const activeLink = item => {
		if (item.active === true) {
			return;
		}
		itemLink.value.forEach(i => (i.active = false));
		item.active = true;
	};

	const closeModal = () => {
		emit('closeModal');
	};

	onMounted(() => {
		if (window.innerWidth <= 768) {
			isLarge.value = false;
		}
	});
</script>

<template>
	<div class="preview-page" v-if="visible">
		<div class="container">
			<div class="preview-page__inner">
				<div class="preview-page__top">
					<div class="preview-page__left">
						<div class="preview-page__title h1">Очаковские бани</div>
						<div class="preview-page__hall h1">Зал №3</div>
					</div>
					<div class="preview-page__right">
						<ul class="nav">
							<li
								class="nav__item h3"
								:class="{
									active: item.active,
								}"
								v-for="item in itemLink"
								:key="item.text"
								@click="activeLink(item)"
							>
								{{ item.text }}
							</li>
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
							@click="closeModal"
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
						<swiper-slide>
							<div class="preview-card-swiper__main product-card-swiper__main">
								<nuxt-img
									class="preview-card-swiper__bg product-card-swiper__bg"
									src="/promotions/1.jpg"
									width="100vw"
									quality="80"
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
						<swiper-slide>
							<div class="preview-card-swiper__main product-card-swiper__main">
								<nuxt-img
									class="preview-card-swiper__bg product-card-swiper__bg"
									src="/promotions/2.jpg"
									width="100vw"
									quality="80"
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
						<swiper-slide>
							<div class="preview-card-swiper__main product-card-swiper__main">
								<nuxt-img
									class="preview-card-swiper__bg product-card-swiper__bg"
									src="/promotions/3.jpg"
									width="100vw"
									quality="80"
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
						<swiper-slide>
							<div class="preview-card-swiper__main product-card-swiper__main">
								<nuxt-img
									class="preview-card-swiper__bg product-card-swiper__bg"
									src="/promotions/2.jpg"
									width="100vw"
									quality="80"
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
						<swiper-slide>
							<div class="preview-card-swiper__main product-card-swiper__main">
								<nuxt-img
									class="preview-card-swiper__bg product-card-swiper__bg"
									src="/promotions/1.jpg"
									width="100vw"
									quality="80"
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
						<swiper-slide>
							<div class="preview-card-swiper__main product-card-swiper__main">
								<nuxt-img
									class="preview-card-swiper__bg product-card-swiper__bg"
									src="/promotions/3.jpg"
									width="100vw"
									quality="80"
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
						<swiper-slide>
							<div class="preview-card-swiper__main product-card-swiper__main">
								<nuxt-img
									class="preview-card-swiper__bg product-card-swiper__bg"
									src="/promotions/1.jpg"
									width="100vw"
									quality="80"
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
						<swiper-slide>
							<div class="preview-card-swiper__main product-card-swiper__main">
								<nuxt-img
									class="preview-card-swiper__bg product-card-swiper__bg"
									src="/promotions/2.jpg"
									width="100vw"
									quality="80"
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
						<swiper-slide>
							<div class="preview-card-swiper__main product-card-swiper__main">
								<nuxt-img
									class="preview-card-swiper__bg product-card-swiper__bg"
									src="/promotions/2.jpg"
									width="100vw"
									quality="80"
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
						<swiper-slide>
							<div class="preview-card-swiper__main product-card-swiper__main">
								<nuxt-img
									class="preview-card-swiper__bg product-card-swiper__bg"
									src="/promotions/2.jpg"
									width="100vw"
									quality="80"
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
							class="product-card-swiper__arrow arrow-left pos preview-card-swiper__arrow"
							@click="prev"
						>
							<IconArrow class="fill" />
						</div>
						<div
							class="product-card-swiper__arrow arrow-right pos preview-card-swiper__arrow"
							@click="next"
						>
							<IconArrow />
						</div>
						<UISliderButton
							:max="10"
							:current="currentImg"
							class="product-card-swiper__count pos preview-card-swiper__count"
						/>
					</swiper>

					<div class="preview-card-swiper__thumbnail" v-if="isLarge">
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

					@media screen and (max-width: 768px) {
						bottom: -3rem;
					}
				}
			}
		}
	}
	.preview-page {
		padding: 2.6rem 0;
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		z-index: 100;
		background-color: $default-color;
		overflow-y: scroll;

		&__inner {
			@media screen and (max-width: 768px) {
				margin-top: 5rem;
			}
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

			@media screen and (max-width: 768px) {
				flex-direction: column;
			}
		}

		&__left {
			display: flex;
			gap: 7.7rem;
			align-items: center;

			@media screen and (max-width: 768px) {
				gap: 3rem;
			}
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

			@media screen and (max-width: 768px) {
				flex-direction: column-reverse;
				gap: 3rem;
				margin-top: 3rem;
			}
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

		&__close {
			@media screen and (max-width: 768px) {
				position: absolute;
				top: -5rem;
				right: 0.5rem;
			}
		}
	}

	.preview-swiper {
		max-width: 100%;
		margin-bottom: 2rem;
	}
	.preview-card-swiper {
		&__main {
		}

		&__bg {
			max-height: 75rem;
		}

		&__logo {
			@media screen and (max-width: 768px) {
				width: 3.5rem;
				height: 3.5rem;
			}
		}

		&__play {
			width: 8rem;
			height: 8rem;

			@media screen and (max-width: 768px) {
				width: 3rem;
				height: 3rem;
			}
			& img {
				width: 50px;

				@media screen and (max-width: 768px) {
					width: 3rem;
				}
			}
		}

		&__arrow {
			@media screen and (max-width: 768px) {
				width: 1.5rem;
				height: 1.5rem;
			}
		}

		&__count {
			@media screen and (max-width: 768px) {
				padding: 0.3rem 1.6rem !important; 
			}
		}

		&__thumbnail {
			display: flex;
			gap: 2.5rem;
			margin-bottom: 5rem;

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
