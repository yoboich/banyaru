<script setup>
	import { Swiper, SwiperSlide } from 'swiper/vue';
	import { EffectFade } from 'swiper';

	import 'swiper/css';

	import img1 from '~/assets/img/product-card/1.png';
	import img2 from '~/assets/img/product-card/2.png';
	import img3 from '~/assets/img/product-card/3.png';
	import img4 from '~/assets/img/product-card/4.png';
	import img5 from '~/assets/img/product-card/5.png';
	import img6 from '~/assets/img/product-card/6.png';
	import img7 from '~/assets/img/product-card/6.png';

	import bigIm1 from '~/assets/img/promotions/1.jpg';
	import bigIm2 from '~/assets/img/promotions/2.jpg';
	import bigIm3 from '~/assets/img/promotions/3.jpg';

	defineProps({
		premium: {
			type: Boolean,
			default: false,
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
	const images = ref([img1, img2, img3, img4, img5, img6, img7]);

	const modalVisible = ref(false);

	// swiper

	const swiperBtn = ref(null);

	const totalImg = computed(() => images.value.length);
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
	<div class="product-card-swiper">
		<Teleport to="body">
			<PreviewModal :visible="modalVisible" @close-modal="closeModal" />
		</Teleport>
		<swiper
			@swiper="getRef"
			:modules="modules"
			:effect="'fade'"
			draggable="false"
			class="product-swiper"
		>
			<swiper-slide>
          <div class="product-card-swiper__main">
            <nuxt-img
                class="product-card-swiper__bg"
                src="/promotions/order-background.png"
                sizes="sm:100vw md:50vw lg:900px"
                quality="90"
            />
          </div
          >
      </swiper-slide>
			<swiper-slide>
				<div class="product-card-swiper__main">
					<nuxt-img
						class="product-card-swiper__bg"
            src="/promotions/4.png"
						quality="90"
					/></div
			></swiper-slide>
			<swiper-slide>
				<div class="product-card-swiper__main">
					<nuxt-img
						class="product-card-swiper__bg"
            src="/promotions/order-background.png"
						sizes="sm:100vw md:50vw lg:900px"
						quality="90"
					/></div
			></swiper-slide>
			<swiper-slide>
				<div class="product-card-swiper__main">
					<nuxt-img
						class="product-card-swiper__bg"
            src="/promotions/order-background.png"
						sizes="sm:100vw md:50vw lg:900px"
						quality="90"
					/></div
			></swiper-slide>
			<swiper-slide>
				<div class="product-card-swiper__main">
					<nuxt-img
						class="product-card-swiper__bg"
            src="/promotions/order-background.png"
						sizes="sm:100vw md:50vw lg:900px"
						quality="90"
					/></div
			></swiper-slide>
      <swiper-slide>
        <div class="product-card-swiper__main">
          <nuxt-img
              class="product-card-swiper__bg"
              src="/promotions/order-background.png"
              sizes="sm:100vw md:50vw lg:900px"
              quality="90"
          />
        </div
        ></swiper-slide>
      <swiper-slide>
        <div class="product-card-swiper__main">
          <nuxt-img
              class="product-card-swiper__bg"
              src="/promotions/order-background.png"
              sizes="sm:100vw md:50vw lg:900px"
              quality="90"
          /></div
        ></swiper-slide>
      <swiper-slide>
        <div class="product-card-swiper__main">
          <nuxt-img
              class="product-card-swiper__bg"
              src="/promotions/order-background.png"
              sizes="sm:100vw md:50vw lg:900px"
              quality="90"
          /></div
        ></swiper-slide>
      <swiper-slide>
        <div class="product-card-swiper__main">
          <nuxt-img
              class="product-card-swiper__bg"
              src="/promotions/order-background.png"
              sizes="sm:100vw md:50vw lg:900px"
              quality="90"
          /></div
        ></swiper-slide>
      <swiper-slide>
        <div class="product-card-swiper__main">
          <nuxt-img
              class="product-card-swiper__bg"
              src="/promotions/order-background.png"
              sizes="sm:100vw md:50vw lg:900px"
              quality="90"
          /></div
        ></swiper-slide>
      <swiper-slide>
        <div class="product-card-swiper__main">
          <nuxt-img
              class="product-card-swiper__bg"
              src="/promotions/order-background.png"
              sizes="sm:100vw md:50vw lg:900px"
              quality="90"
          />
        </div
        ></swiper-slide>
      <swiper-slide>
        <div class="product-card-swiper__main">
          <nuxt-img
              class="product-card-swiper__bg"
              src="/promotions/order-background.png"
              sizes="sm:100vw md:50vw lg:900px"
              quality="90"
          /></div
        ></swiper-slide>
      <swiper-slide>
        <div class="product-card-swiper__main">
          <nuxt-img
              class="product-card-swiper__bg"
              src="/promotions/order-background.png"
              sizes="sm:100vw md:50vw lg:900px"
              quality="90"
          /></div
        ></swiper-slide>
      <swiper-slide>
        <div class="product-card-swiper__main">
          <nuxt-img
              class="product-card-swiper__bg"
              src="/promotions/order-background.png"
              sizes="sm:100vw md:50vw lg:900px"
              quality="90"
          /></div
        ></swiper-slide>
      <swiper-slide>
        <div class="product-card-swiper__main">
          <nuxt-img
              class="product-card-swiper__bg"
              src="/promotions/order-background.png"
              sizes="sm:100vw md:50vw lg:900px"
              quality="90"
          /></div
        ></swiper-slide>
      <swiper-slide>
        <div class="product-card-swiper__main">
          <nuxt-img
              class="product-card-swiper__bg"
              src="/promotions/order-background.png"
              sizes="sm:100vw md:50vw lg:900px"
              quality="90"
          />
        </div
        ></swiper-slide>
      <swiper-slide>
        <div class="product-card-swiper__main">
          <nuxt-img
              class="product-card-swiper__bg"
              src="/promotions/order-background.png"
              sizes="sm:100vw md:50vw lg:900px"
              quality="90"
          /></div
        ></swiper-slide>
      <swiper-slide>
        <div class="product-card-swiper__main">
          <nuxt-img
              class="product-card-swiper__bg"
              src="/promotions/order-background.png"
              sizes="sm:100vw md:50vw lg:900px"
              quality="90"
          /></div
        ></swiper-slide>
      <swiper-slide>
        <div class="product-card-swiper__main">
          <nuxt-img
              class="product-card-swiper__bg"
              src="/promotions/order-background.png"
              sizes="sm:100vw md:50vw lg:900px"
              quality="90"
          /></div
        ></swiper-slide>
      <swiper-slide>
        <div class="product-card-swiper__main">
          <nuxt-img
              class="product-card-swiper__bg"
              src="/promotions/order-background.png"
              sizes="sm:100vw md:50vw lg:900px"
              quality="90"
          /></div
        ></swiper-slide>
			<div
				class="product-card-swiper__arrow arrow-left pos opacity-background"
				v-if="premium"
				@click="prev"
			>
				<IconArrow :class="{ fill: currentImg != 1 }" />
			</div>
			<div
				class="product-card-swiper__arrow arrow-right pos"
				@click="next"
				v-if="premium"
			>
				<IconArrow :class="{ fill: currentImg != totalImg }" />
			</div>
			<UISliderButton
				:current="currentImg"
				:max="totalImg"
				class="product-card-swiper__count pos"
				v-if="premium"
			/>
		</swiper>
	</div>
</template>

<style lang="scss">
.product-swiper {
  max-width: 100%!important;
  margin-top: 21px;
}
.opacity-background {
  box-shadow: none;
  background: #FFFFFF60;
}
.product-card-swiper__arrow svg {
  width: 3rem;
  height: 3rem;
}
.product-card-swiper__bg {
  max-height: 71vh!important;
}
</style>
