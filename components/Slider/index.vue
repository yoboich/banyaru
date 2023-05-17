<template>
  <div class="slider">
    <div v-show="props.navigation" ref="arrowPrev" class="slider-arrow prev">
      <IconArrow />
    </div>
    <div v-show="props.navigation" ref="arrowNext" class="slider-arrow next">
      <IconArrow />
    </div>
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
        :space-between="props.spaceBetween"
        :modules="modules"
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
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";

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

const props = defineProps({
  slidesPerView: {
    type: [Number, String],
  },
  spaceBetween: {
    type: [Number, String],
    default: 40,
  },
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
});

const modules = [Pagination, Navigation];

const arrowNext = ref();
const arrowPrev = ref();
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
    display: flex;
    justify-content: center;
    align-self: center;
    gap: 5px;

    width: fit-content;
    left: 50%;
    transform: translateX(-50%);
    bottom: 15px !important;

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

    // &-slide {
    //   img {
    //     width: 100%;
    //     height: 100%;
    //   }
    // }
  }

  &-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;

    width: 40px;
    height: 40px;
    padding: 10px;

    border-radius: 20px;
    background: rgba(255, 255, 255, 0.6);

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    transition: all 0.3s;

    svg.icon-arrow {
      fill: #3e3e51;
    }

    &:hover {
      background: #32bd1b;

      svg {
        fill: white;
      }
    }

    &.prev {
      left: 60px;

      svg {
        transform: translateX(-10%);
      }
    }

    &.next {
      right: 60px;
      svg {
        transform: translateX(10%) rotate(180deg);
      }
    }
  }
}
</style>
