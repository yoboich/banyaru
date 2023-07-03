<template>
  <div class="filter place-filter">
    <h1 class="filter-title">{{ props.title }}</h1>
    <div class="filter__controls">
      <div class="filter__controls-tabs" ref="tabsEl">
        <span
          class="line"
          :style="{
            width: lineWidth + 'px',
            left: lineLeft + 'px',
          }"
        ></span>
        <div
          class="filter__controls-tab"
          :class="{ active: i === activeTab }"
          v-for="(tab, i) of tabs"
          :key="i"
          @click="moveLine($event, i)"
        >
          {{ tab.name }}
        </div>
      </div>
      <div class="filter__controls-arrows">
        <button ref="arrowPrev" class="filter__controls-arrow prev">
          <IconBase icon="arrow-left" color="gray" />
        </button>
        <button ref="arrowNext" class="filter__controls-arrow next">
          <IconBase icon="arrow-left" color="gray" />
        </button>
      </div>
    </div>
    <div class="filter__items">
      <div class="loading" :class="{ visible: isLoading }" v-show="isLoading">
        <img src="~/assets/images/icons/spinner-gray.svg" alt="" />
      </div>
      <client-only>
        <swiper
          :modules="modules"
          :spaceBetween="30"
          :slides-per-view="width <= 678 ? 2 : 3"
          :space-between="30"
          :slides-per-group="width <= 678 ? 2 : 3"
          :navigation="{
            nextEl: arrowNext,
            prevEl: arrowPrev,
          }"
          :grid="{
            rows: 2,
            fill: 'row',
          }"
        >
          <swiper-slide
            v-for="(num, i) of content[tabs[activeTab].filter]"
            :key="i"
          >
            <HomeFilterSliderAdItem v-if="(i + 1) % 3 == 0 && ads" />
            <HomeFilterSliderItem v-else />
          </swiper-slide>
        </swiper>
      </client-only>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, Grid } from "swiper";
import { useWindowSize } from "@vueuse/core";

import "swiper/css";
import "swiper/css/grid";

import "swiper/css/pagination";
import "swiper/css/navigation";

const { width } = useWindowSize();

const arrowNext = ref();
const arrowPrev = ref();

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  ads: {
    type: Boolean,
    default: false,
  },
});

const modules = [Pagination, Navigation, Grid];

const content = {
  f1: [0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6],
  f2: [0, 1, 2, 3, 4, 5, 6],
  f3: [0, 1, 2, 3, 4],
  f4: [0, 1, 2, 3, 4, 1, 2, 3],
};

const isLoading = ref(false);
const tabsEl = ref();

onMounted(() => {
  const tab = tabsEl.value.querySelector(".filter__controls-tab");
  lineWidth.value = tab.offsetWidth;
  lineLeft.value = tab.offsetLeft;
});

const activeTab = ref(0);
const tabs = ref([
  {
    name: "Все",
    filter: "f1",
  },
  {
    name: "Снять",
    filter: "f2",
  },
  {
    name: "Услуги",
    filter: "f3",
  },
  {
    name: "Товары",
    filter: "f4",
  },
]);

const lineWidth = ref(0);
const lineLeft = ref(0);

const lastTimeout = ref(null);

const moveLine = (e, tabIdx) => {
  if (lastTimeout.value) {
    clearTimeout(lastTimeout.value);
  }

  isLoading.value = true;
  const tab = e.target.closest(".filter__controls-tab");

  lineWidth.value = tab.offsetWidth;
  lineLeft.value = tab.offsetLeft;
  activeTab.value = tabIdx;

  lastTimeout.value = setTimeout(() => {
    isLoading.value = false;
  }, 200);
};
</script>

<style lang="scss" scoped>
.place-filter {
  padding: 20px 30px 30px;
  background: #fff;
  border-radius: 20px;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.filter {
  &.mobile {
    background: transparent;
    padding: 0;
    margin-bottom: 30px;

    .filter-title {
      font-size: 24px;
      line-height: 130%;
      margin-bottom: 35px;
    }

    .filter__controls {
      display: none;
    }
  }

  &-title {
    margin-bottom: 50px;
    font-weight: 700;
    font-size: 28px;
    line-height: 100%;

    @media (max-width: 1400px) {
      margin-bottom: 30px;
    }
  }

  &__items {
    position: relative;

    .swiper-slide {
      display: flex;
      height: auto;
    }

    .loading {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.5);
      opacity: 0.3;
      border-radius: 10px;
      z-index: 10;

      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 100px;
        height: 100px;
        object-fit: contain;
        object-position: center;
      }

      &.visible {
        img {
          animation: rotate 2s linear infinite;
        }

        & ~ .swiper {
          filter: blur(2px);
        }
      }
    }
  }

  &__controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;

    @media (max-width: 1400px) {
      margin-bottom: 30px;
    }

    &-arrows {
      padding: 20px 25px;
      border: 2px solid #dadeec;
      border-radius: 100px;

      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 40px;

      position: relative;

      @media (max-width: 1400px) {
        padding: 10px 15px;
      }

      &::after {
        content: "";
        background: #9da7c7;
        border-radius: 2px;
        width: 3px;
        height: 14px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }

    &-arrow {
      border: none;
      background: transparent;
      padding: 0;

      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;

      &:hover {
        svg {
          --icon-color: #{$green};
        }
      }

      &:last-of-type {
        transform: rotate(180deg);
      }
    }

    &-tabs {
      display: flex;
      gap: 60px;
      align-items: center;
      padding-bottom: 10px;
      position: relative;

      @media (max-width: 1400px) {
        gap: 10px;
      }

      .line {
        width: 50px;
        height: 3px;
        border-radius: 5px;
        background: #32bd1b;
        position: absolute;
        bottom: 0;
        transition: all 0.2s;
      }
    }

    &-tab {
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      padding: 0 15px;
      cursor: pointer;
      transition: all 0.2s;

      @media (max-width: 1400px) {
        padding: 0 10px;
      }

      &.active,
      &:hover {
        color: #32bd1b;
      }
    }
  }
}
</style>
