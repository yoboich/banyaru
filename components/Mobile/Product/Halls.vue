<script setup>
	// Import Swiper Vue.js components
	import { Swiper, SwiperSlide } from 'swiper/vue';
	// Import Swiper styles
	import 'swiper/css';

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
</script>

<template>
	<div class="card card-under card-mobile-halls">
		<div class="card-mobile-halls__top">
			<swiper @swiper="getRef" class="mobile-swiper-hall">
				<swiper-slide v-for="(item, idx) in 7">
					<div class="card-mobile-halls__info">
						<div class="card-mobile-halls__title h1">Горячий сруб</div>
						<div class="card-mobile-halls__text h4">Баня на дровах</div>
					</div></swiper-slide
				>
			</swiper>
			<UISliderButton
				:current="currentImg"
				:max="7"
				class="mobile-card-swiper__count"
			/>
		</div>
		<div class="book-card-first__btns card-mobile-halls__btns">
			<button class="btn book-card-first__announc">Зал</button>
			<div class="btn next-prev-btn">
				<button
					class="next-prev-btn__item h3-lite next-prev-btn__prev"
					@click="prev"
				>
					<IconArrow class="green" /> Предыдущее
				</button>
				<button
					class="next-prev-btn__item h3-lite next-prev-btn__next"
					@click="next"
				>
					Следующее <IconArrow class="green" />
				</button>
			</div>
		</div>
		<div class="card-bottom-btn__left">
			<button class="card-mobile-halls__btn btn btn-green">Позвонить</button>
			<button class="card-mobile-halls__btn btn btn-green">Написать</button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.card-mobile-halls {
		margin-top: -3rem;
		z-index: 13;
		&__top {
			display: flex;
			margin-bottom: 3rem;
		}

		&__info {
		}

		&__title {
			margin-bottom: 1rem;
			color: $mainFontColor;
		}

		&__text {
			color: $mainFontColor;
		}

		&__btns {
			margin-bottom: 3rem;
		}

		&__btn {
			flex: 1;
		}
	}
	.mobile-swiper-hall {
	}
</style>
