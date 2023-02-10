<script setup>
	// Import Swiper Vue.js components
	import { Swiper, SwiperSlide } from 'swiper/vue';
	// import { useSwiper } from 'swiper/vue';
	// const sr = useSwiper();
	// sr.value.slideTo()

	// Import Swiper styles
	import 'swiper/css';

	import 'swiper/css/thumbs';
	import 'swiper/css/pagination';
	import 'swiper/css/navigation';

	// import required modules
	import { Pagination, Navigation, Thumbs } from 'swiper';

	import img1 from '~/assets/img/product-card/1.png';
	import img2 from '~/assets/img/product-card/2.png';
	import img3 from '~/assets/img/product-card/3.png';
	import img4 from '~/assets/img/product-card/4.png';
	import img5 from '~/assets/img/product-card/5.png';
	import img6 from '~/assets/img/product-card/6.png';
	import img7 from '~/assets/img/product-card/6.png';

	defineProps({
		premium: {
			type: Boolean,
			default: false,
		},
	});

	const images = ref([img1, img2, img3, img4, img5, img6, img7]);

	// swiper

	const swiperBtn = ref(null);
	const thumbsSwiper = ref(null);
	function getRef(swiperInstance) {
		swiperBtn.value = swiperInstance;
	}

	function next() {
		swiperBtn.value.slideNext();
	}
	function prev() {
		swiperBtn.value.slidePrev();
	}
	function setThumbsSwiper(swiper) {
		thumbsSwiper.value = swiper;
	}
	function slideTo(idx) {
		swiperBtn.value.slideTo(idx);
	}
	const modules = [Pagination, Navigation, Thumbs];
</script>

<template>
	<div class="product-card-swiper">
		<swiper @swiper="getRef" :modules="modules" class="product-swiper">
			<swiper-slide v-for="item in 7">
				<div class="product-card-swiper__main">
					<img
						class="product-card-swiper__bg"
						src="~/assets/img/product-card/card-swiper.jpg"
						alt=""
					/>

					<img
						src="~/assets/img/product-card/logo.png"
						alt=""
						class="product-card-swiper__logo pos"
					/>
					<div class="product-card-swiper__play pos" v-if="premium">
						<img src="~/assets/img/product-card/play.svg" alt="" />
					</div></div
			></swiper-slide>
			<div
				class="product-card-swiper__arrow arrow-left pos"
				v-if="premium"
				@click="prev"
			>
				<IconArrow class="fill" />
			</div>
			<div
				class="product-card-swiper__arrow arrow-right pos"
				@click="next"
				v-if="premium"
			>
				<IconArrow />
			</div>
			<UISliderButton
				:current="swiperBtn?.realIndex + 1"
				:max="swiperBtn?.snapGrid?.length"
				class="product-card-swiper__count pos"
				v-if="premium"
			/>
		</swiper>

		<swiper
			@swiper="setThumbsSwiper"
			:spaceBetween="5"
			:watchSlidesProgress="true"
			:modules="modules"
			class="product-card-swiper-small"
		>
			<swiper-slide v-for="(item, idx) in 7" v-if="premium">
				<div class="product-card-swiper__thumbnail">
					<img
						@click="slideTo(idx)"
						:src="images[idx]"
						alt=""
						:class="{
							active: idx === swiperBtn?.realIndex,
						}"
					/>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>

<style lang="scss">
	.product-swiper {
		max-width: 81rem;
	}
	.product-card-swiper-small {
		overflow: visible;
		& .swiper-slide {
			max-width: 11rem;
		}
	}

	.pos {
		position: absolute;
		z-index: 1;
		top: 0;
		left: 0;
	}
	.product-card-swiper {
		&__main {
			position: relative;
		}

		&__bg {
			border-radius: 2.8rem;
			width: 100%;
			height: 100%;
			object-fit: cover;
			max-height: 45rem;
		}

		&__logo {
			top: 2rem;
			right: 2rem;
			left: auto;
		}

		&__play {
			background: rgba($color: #000000, $alpha: 0.4);

			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			padding: 2rem;
			cursor: pointer;
		}

		&__arrow {
			background: $default-color;
			box-shadow: 1px 4px 12px #a6afcd;
			border-radius: 50%;
			padding: 1rem;
			display: flex;
			justify-content: center;
			align-items: center;

			top: 50%;
			left: 2rem;
			cursor: pointer;
			transform: translateY(-50%);
			& svg {
				width: 3.5rem;
				height: 3rem;
			}
		}

		&__count {
			top: auto;
			bottom: 1.5rem;
			left: 50%;
			transform: translateX(-50%);
		}

		&__thumbnail {
			max-width: 11rem;
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 1.6rem;
			gap: 1.6rem;

			& img {
				width: 100%;
				border: 2px solid transparent;
				transition: all 0.2s linear;
				border-radius: 12px;
				cursor: pointer;

				&.active {
					border: 2px solid #17a300;
					filter: drop-shadow(0px 7px 23px rgba(118, 130, 168, 0.55));
					border-radius: 12px;
					transform: scale(1.1);
				}
			}
		}
	}
	.arrow-left {
		transform: translateY(-50%) rotate(180deg);
	}
	.arrow-right {
		left: auto;
		right: 2rem;
	}
</style>
