<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import './style.css';

// import required modules
import { Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>

<template>
  <div class="search">
    <div class="search__inner">
      <div class="search__item">
        <img src="@/assets/img/icon/search.svg" alt="" />
        <div class="search__text">
          <div class="search__title">Найти баню / сауну</div>
          <div class="search__subtitle">Москва</div>
        </div>
      </div>
    </div>
    <swiper
      :slidesPerView="3"
      :spaceBetween="10"
      :freeMode="true"
      class="search__menu menu"
    >
      <swiper-slide class="">
        <div class="menu__item menu__item_active">
          <img src="@/assets/img/home/1.png" alt="" />
          <div class="menu__name">Все сервисы</div>
        </div>
      </swiper-slide>

      <swiper-slide class="">
        <div class="menu__item">
          <img src="@/assets/img/home/2.png" alt="" />
          <div class="menu__name">Подбор Бани Сауны</div>
        </div>
      </swiper-slide>
      <swiper-slide class="">
        <div class="menu__item">
          <img src="@/assets/img/home/3.png" alt="" />
          <div class="menu__name">Праздники и корпаративы</div>
        </div>
      </swiper-slide>
      <swiper-slide class="">
        <div class="menu__item menu__item_active">
          <img src="@/assets/img/home/1.png" alt="" />
          <div class="menu__name">Все сервисы</div>
        </div>
      </swiper-slide>

      <swiper-slide class="">
        <div class="menu__item">
          <img src="@/assets/img/home/2.png" alt="" />
          <div class="menu__name">Подбор Бани Сауны</div>
        </div>
      </swiper-slide>
      <swiper-slide class="">
        <div class="menu__item">
          <img src="@/assets/img/home/3.png" alt="" />
          <div class="menu__name">Праздники и корпаративы</div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: visible;
  max-width: 90vw;
  width: 100%;
  height: auto;
  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    padding: 1rem;
    width: 8rem;
    height: 8rem;
    box-shadow: 1px 7px 22px rgba(166, 175, 205, 0.22);
    border-radius: 23px;
    &_active {
      background: $green-color;
      color: $default-color;
    }
  }
  & img {
  }
  &__name {
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.8rem;
    text-align: center;
  }
}

.search {
  margin-top: 3.5rem;
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
  &__inner {
    display: flex;
  }
  &__item {
    display: flex;
    align-items: center;
    gap: 0.9rem;
    & img {
      padding: 0.6rem;
      background: #ffffff;
      box-shadow: 1px 4px 12px rgba(166, 175, 205, 0.36);
      border-radius: 6px;
    }
  }
}
</style>
