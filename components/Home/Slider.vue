<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, Thumbs, EffectFade } from "swiper";
import img1 from "~/assets/img/product-card/1.png";
import img2 from "~/assets/img/product-card/2.png";
import img3 from "~/assets/img/product-card/3.png";
import img4 from "~/assets/img/product-card/4.png";
import img5 from "~/assets/img/product-card/5.png";
import img6 from "~/assets/img/product-card/6.png";
import img7 from "~/assets/img/product-card/6.png";

import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const images = ref([img1, img2, img3, img4]);
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
const modules = [Pagination, Navigation, Thumbs, EffectFade];
</script>

<template>
  <section class="slider">
    <div class="slider__titles">
      <h1 class="slider__title">Баня.ру</h1>
      <h2 class="slider__subtitle">С нами теплее</h2>
    </div>
    <swiper
      @swiper="getRef"
      :direction="'vertical'"
      :modules="modules"
      :effect="'fade'"
      class="home-swiper"
    >
      <swiper-slide >
        <img src="@/assets/img/home/Slider.png" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://www.banya.ru/include/ajax/image.php?id=412138&width=1000&height=700&exact=Y" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://www.banya.ru/include/ajax/image.php?id=412140&width=1000&height=700&exact=Y" alt="" />
      </swiper-slide>
      <swiper-slide >
        <img src="@/assets/img/home/Slider.png" alt="" />
      </swiper-slide>
    </swiper>
    <div class="slider__thumbs thumbs">
      <div class="thumbs__titles">
        <h3 class="thumbs__title">Справочник бань, саун и услуг</h3>
        <h4 class="thumbs__subtitle">
          Найти легко!
        </h4>
      </div>
    </div>
    <swiper
      @swiper="setThumbsSwiper"
      :spaceBetween="50"
      :watchSlidesProgress="true"
      :modules="modules"
      :slidesPerView="4"
      :direction="'vertical'"
      class="home-swiper_small"
    >
      <swiper-slide v-for="(item, idx) in images.length">
        <div class="home-swiper__thumbnail">
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

    <div class="pagination">
      <div class="pagination__inner">
        <div class="pagination__arrow">
          <IconArrow
            @click="prev"
            :class="[swiperBtn?.realIndex !== 0 ? 'active-black' : '']"
            class="swiper-btn__arr"
          />
          <div class="pagination__dots">
            <span
              :class="{
                active: idx === swiperBtn?.realIndex,
              }"
              v-for="(item, idx) in images.length"
              class="dot"
            ></span>
          </div>
          <IconArrow
            :class="[
              swiperBtn?.realIndex !== images.length - 1 ? 'active-black' : '',
            ]"
            class="swiper-btn__arr"
            @click="next"
          />
        </div>
        <div class="pagination__counter">0{{ swiperBtn?.realIndex + 1 }}</div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.home-swiper {
  height: 46.5rem;
  &_small {
    position: absolute;
    right: 11%;
    top: 20%;
    overflow: visible;
    z-index: 5;
    & .swiper-slide {
      max-width: 10rem;
      max-height: 4rem;
    }
  }
  &__thumbnail {
    max-width: 5rem;
    display: flex;
    flex-direction: column;
    gap: 3.9rem;

    & img {
      width: 100%;
      transition: all 0.2s linear;
      border: 2px solid #ffffff;
      filter: drop-shadow(0px 6px 50px #000000);
      border-radius: 5px;
      cursor: pointer;

      &.active {
        filter: drop-shadow(0px 7px 23px rgba(118, 130, 168, 0.55));
        border-radius: 5px;
        transform: scale(2);
        margin-left: -2.5rem;
      }
    }
  }
}
.swiper-slide {
  height: 100%;
  & img {
    border-radius: 6px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.swiper-btn__arr {
  &:nth-child(1) {
    transform: rotate(-90deg);
  }
  &:nth-child(2) {
    transform: rotate(90deg);
  }
}
.pagination {
  height: 43rem;
  width: 5%;
  background: #ffffff;
  border-radius: 0px 23px 23px 0px;
}
.slider {
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 4.6rem;
  &__wrapper {
    width: 94%;
    // background-image: url(@/assets/img/home/Slider.png);
    // background-repeat: no-repeat;
    // background-size: cover;
    // box-shadow: 0px 18px 38px rgba(123, 129, 148, 0.4);
    border-radius: 6px;
  }
  &__inner {
    display: grid;
    align-items: start;
    grid-template-columns: 50% 50%;
    color: $default-color;
  }
  &__titles {
    display: flex;
    flex-direction: column;
    color: $default-color;
    padding: 7.2rem 0 0 11.4rem;
    gap: 1rem;
    position: absolute;
    z-index: 3;
    top: 0;
    left: 0;
  }
  &__title {
    font-family: "Gilroy";
    font-size: 6.5rem;
    line-height: 6.5rem;
    text-transform: uppercase;
    margin-top: -0.59rem;
  }
  &__subtitle {
    font-weight: 700;
  }
  .thumbs {
    display: grid;
    margin-left: auto;
    padding: 7.3rem 7rem 7rem 0;
    gap: 3.5rem;
    position: absolute;
    z-index: 3;
    top: 0;
    right: 16%;
    &__titles {
      display: flex;
      flex-direction: column;
      color: $default-color;
      margin-left: auto;
      text-align: right;
      gap: 1.1rem;
    }
    &__title {
      font-weight: 700;
      font-size: 2.5rem;
      line-height: 2rem;
    }
    &__subtitle {
      font-weight: 700;
      font-size: 2rem;
    }
    &__images {
      display: flex;
      flex-direction: column;
      gap: 4rem;
      max-width: 5rem;
      width: 100%;
      & img {
        max-width: 5rem;
        width: 100%;
        height: auto;
        margin-left: auto;
        border: 4px solid #ffffff;
        filter: drop-shadow(0px 6px 50px #000000);
        border-radius: 5px;
      }
      & img:nth-child(1) {
        max-width: 10.5rem;
      }
    }
  }
}
.pagination {
  &__inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5.2rem 2.5rem 3.2rem 2rem;
    height: 36rem;
  }
  &__dots {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    & .dot {
      width: 0.6rem;
      height: 0.6rem;
      background-color: #9da7c7;
      border-radius: 100%;
      &.active {
        transform: scale(2);
        background: $green-color;
        box-shadow: 1px 7px 14px #98a0bb;
      }
    }
  }
  &__arrow {
    display: flex;
    flex-direction: column;
    gap: 2.6rem;
    justify-content: center;
  }
  &__counter {
    margin-top: auto;
    font-size: 2.6rem;
    color: $green-color;
    font-weight: 700;
  }
}
.swiper-btn__arr {
  &:nth-child(1) {
    transform: rotate(-90deg);
  }
  &:last-child {
    transform: rotate(90deg);
  }
}
</style>
