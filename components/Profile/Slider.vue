<template>
  <div class="favorite__slider">
    <div class="favorite__slider-header">
      <h5 class="favorite__slider-title">{{ props.title }}</h5>
      <div class="favorite__slider-controls">
        <button ref="arrowPrev" class="favorite__slider-btn prev">
          <IconBase icon="arrow-left" color="gray"/>
        </button>
        <div class="favorite__slider-line"></div>
        <button ref="arrowNext" class="favorite__slider-btn next">
          <IconBase icon="arrow-left" color="gray"/>
        </button>
      </div>
    </div>
    <client-only>
      <swiper
          :slides-per-view="width > 1000 ? 5: 2"
          :space-between="30"
          :navigation="{
          nextEl: arrowNext,
          prevEl: arrowPrev,
        }"
          :modules="[Navigation]"
      >
        <swiper-slide v-for="i of 10" :key="i">
          <HomeFilterSliderItem/>
        </swiper-slide>
      </swiper
      >
    </client-only>
  </div>
</template>

<script setup>
import {Swiper, SwiperSlide} from "swiper/vue";
import {Navigation} from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import {useWindowSize} from "@vueuse/core";

const {width} = useWindowSize()

const arrowPrev = ref();
const arrowNext = ref();

const props = defineProps({
  title: String,
});
</script>

<style lang="scss" scoped>
.favorite__slider {
  margin-bottom: 30px;

  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  &-title {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
  }

  &-controls {
    padding: 18px 28px;
    background: #ffffff;
    box-shadow: 1px 7px 21px rgba(166, 175, 205, 0.16);
    border-radius: 100px;
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &-btn {
    cursor: pointer;

    &:last-of-type {
      svg {
        transform: rotate(180deg);
      }
    }

    &:hover {
      svg {
        --icon-color: #{$green};
      }
    }
  }

  &-line {
    background: $gray;
    width: 3px;
    height: 12px;
    border-radius: 3px;
  }
}
</style>
