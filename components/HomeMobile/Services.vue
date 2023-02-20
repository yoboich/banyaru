<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Grid, Pagination],
    };
  },
};
</script>

<template>
  <div class="services">
    <div class="services__title">Сервисы</div>
    <swiper
      :slidesPerView="4"
      :grid="{
        rows: 2,
      }"
      :spaceBetween="0"
      :modules="modules"
      class="services__inner"
    >
      <swiper-slide v-for="idx in 10" class="">
        <div class="services__item">
          <img src="@/assets/img/icon/search.svg" alt="" />
          <div class="services__name">Акции и скидки</div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style>
.swiper-grid-column .swiper-wrapper {
  flex-direction: row !important;
}
</style>

<style lang="scss" scoped>
swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc((100% - 30px) / 2) !important;
  gap: 1rem;
}
.services {
  margin-top: 6.5rem;
  overflow: hidden;
  &__title {
    font-weight: 700;
    font-size: 2.6rem;
    line-height: 100%;
    padding: 0 2rem;
  }
  &__inner {
    width: 100%;
    height: 100%;
    overflow: visible;
    width: 90vw;
    margin-left: calc(-50vw + 50%);
    z-index: 50;
    padding-left: 2rem;
    height: auto;
  }
  &__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    margin-top: 2.8rem;
    margin-right: 2rem;
    & img {
      padding: 1.7rem;
      background: #ffffff;
      box-shadow: 1px 4px 12px rgba(166, 175, 205, 0.36);
      border-radius: 6px;
    }
  }
  &__name {
    color: $secondary-color;
  }
}
</style>
