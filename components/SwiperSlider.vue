<template>
  <div class="slider">
    <button
      class="slider__arrow prev"
      ref="arrowPrev"
      v-show="props.navigation"
    >
      <IconBase icon="arrow-left" :color="arrowColor" />
    </button>

    <button
      class="slider__arrow next"
      ref="arrowNext"
      v-show="props.navigation"
    >
      <IconBase icon="arrow-left" :color="arrowColor" />
    </button>
    <div class="slider__counter" v-if="props.counter" :key="currentSlide">
      <span>{{ currentSlide }} </span> |
      <span>{{ slidesAmount }}</span>
    </div>
    <client-only>
      <swiper
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :free-mode="props.freeMode"
        :loop="props.loop"
        :slides-per-view="props.slidesPerView"
        :centered-slides="props.centeredSlides"
        :space-between="props.spaceBetween"
        :modules="modules"
        :grid="grid"
        :slides-per-group="slidesPerGroup"
        :thumbs="thumbs"
        :navigation="
          props.navigation && {
            nextEl: arrowNext,
            prevEl: arrowPrev,
          }
        "
        :pagination="props.pagination && { clickable: true }"
        class="slider__swiper"
      >
        <slot />
      </swiper>
    </client-only>
  </div>
</template>

<script setup>
import { Swiper } from "swiper/vue";
import { Pagination, Navigation, Grid, Thumbs } from "swiper";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

const props = defineProps({
  slidesPerView: {
    type: [Number, String],
  },
  spaceBetween: {
    type: [Number, String],
    default: 40,
  },
  grid: {
    type: Object
  },
  slidesPerGroup: {
    default: 1,
  },
  centeredSlides: Boolean,
  navigation: {
    type: Boolean,
    default: false,
  },
  pagination: {
    type: Boolean,
    default: false,
  },
  freeMode: {
    type: Boolean,
    default: false,
  },
  loop: {
    type: Boolean,
    default: false,
  },
  counter: {
    type: Boolean,
    default: false,
  },
  arrowColor: {
    type: String,
    default: "black",
  },
  arrowHoverColor: {
    type: String,
    default: "white",
  },
  thumbs: {
    type: Object
  }
});

const modules = [Pagination, Navigation, Grid, Thumbs];

const arrowNext = ref();
const arrowPrev = ref();

const swiperInstance = ref();

const slidesAmount = ref();
const currentSlide = ref(1);

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
  slidesAmount.value =
    swiperInstance.value.el.querySelectorAll(".swiper-slide").length;
};

const onSlideChange = () => {
  currentSlide.value = swiperInstance.value.realIndex + 1;
};

defineExpose({
  swiperInstance,
});
</script>

<style lang="scss">
.slider {
  position: relative;

  &.width-auto {
    .swiper-slide {
      width: fit-content;
    }
  }

  &__counter {
    padding: 5px 20px;
    border-radius: 25px;

    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;

    background: rgba($color: #fff, $alpha: 0.6);
    color: #fff;

    span:first-of-type {
      color: #3e3e51;
    }
  }

  .swiper-pagination-bullets {
    @include flex-center-all;
    gap: 5px;

    width: fit-content;
    left: 50%;
    bottom: 15px !important;
    transform: translateX(-50%);

    & .swiper-pagination-bullet {
      margin: 0;
      width: 5px;
      height: 5px;
      background: #ffffff !important;
      opacity: 0.7;
      border-radius: 100px;

      transition: all 0.3s;

      &:hover {
        opacity: 1;
      }

      &-active {
        width: 15px;
        opacity: 1;
      }
    }
  }
  .swiper {
    height: inherit;
  }

  &__arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;

    width: 40px;
    height: 40px;
    padding: 10px 12px 10px 8px;

    border-radius: 20px;
    background: rgba(255, 255, 255, 0.6);
    transition: all 0.3s;

    cursor: pointer;

    &:hover {
      background: $green;
      svg {
        --icon-color: white;
      }
    }

    &.next {
      transform: rotate(180deg) translateY(50%);
      right: 60px;
    }

    &.prev {
      left: 60px;
    }
  }
}
</style>
