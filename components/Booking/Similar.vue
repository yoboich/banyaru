<template>
  <div class="p-x booking-page__similar">
    <h1 class="booking-page__title booking-page__similar-title">
      Похожие объявления
    </h1>
    <SwiperSlider
      class="booking-page__similar-slider"
      slidesPerView="3"
      :spaceBetween="10"
      navigation
    >
      <swiper-slide v-for="i of 12" :key="i">
        <BookingCardItem favorite />
      </swiper-slide>
    </SwiperSlider>
  </div>
</template>

<script setup>
import { SwiperSlide } from "swiper/vue";
</script>

<style lang="scss" scoped></style>
