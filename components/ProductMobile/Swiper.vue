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
		type: {
			type: String,
		},
	});

	const mainImages = ref([
		bigIm1,
		bigIm2,
		bigIm3,
		bigIm2,
		bigIm1,
		bigIm3,
		bigIm1,
	]);
	const swiperBtn = ref(null);
	const totalImg = computed(() => mainImages.value.length);
	const currentImg = computed(() => swiperBtn.value?.realIndex + 1);
	function getRef(swiperInstance) {
		swiperBtn.value = swiperInstance;
	}
	const modules = [EffectFade];

	const modalVisible = ref(false);
	const openModal = () => {
		modalVisible.value = true;

		document.body.classList.add('lock');
	};

	const closeModal = () => {
		modalVisible.value = false;

		document.body.classList.remove('lock');
	};
</script>
<template>
	<div class="mobile-card-swiper" v-if="type !== 'free'">
		<teleport to="body">
			<PreviewModal :visible="modalVisible" @close-modal="closeModal" />
		</teleport>
		<swiper
			@swiper="getRef"
			:modules="modules"
			:effect="'fade'"
			class="mobile-swiper"
		>
			<swiper-slide v-for="(item, idx) in 7">
				<div class="mobile-card-swiper__main">
					<img class="product-card-swiper__bg" :src="mainImages[idx]" alt="" />
					<div class="product-card-swiper__play pos" @click="openModal">
						<img src="~/assets/img/product-card/play.svg" alt="" />
					</div></div
			></swiper-slide>
			<UISliderButton
				:current="currentImg"
				:max="totalImg"
				:mobile="true"
				class="mobile-card-swiper__count"
			/>
		</swiper>
	</div>
	<div class="mobile-card-swiper" v-if="type === 'free'">
		<div class="mobile-card-swiper__main">
			<nuxt-img
				class="product-card-swiper__bg"
				src="/promotions/1.jpg"
				quality="80"
			/>
			<div class="product-card-swiper__play pos">
				<img src="~/assets/img/product-card/play.svg" alt="" />
			</div>
		</div>

		<div class="slider-count">
			<UISliderButton
				:current="1"
				:max="20"
				:mobile="true"
				class="mobile-card-swiper__count"
			/>
			<img src="~/assets/img/product-mobile/pr-block.svg" alt="" />
		</div>
	</div>
</template>
<style lang="scss" scoped>
	.mobile-card-swiper {
		padding-bottom: 4rem;
		background-color: $mainFontColor;
		&__main {
			position: relative;
		}
	}
	.mobile-swiper {
	}
	.product-card-swiper {
		&__bg {
		}
		&__play {
		}
	}
	.mobile-card-swiper__count {
		background-color: transparent;
		color: #9da7c7;
	}
	.slider-count {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 1rem;
		margin-top: 6rem;
		padding-right: 2rem;

		& .mobile-card-swiper__count {
			margin-top: 0;
			padding: 0;
		}
	}
</style>
