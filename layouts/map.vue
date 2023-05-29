<template>
  <div class="map-page">
    <Map />
    <HeaderNav :class="{mobile: width <= 1000}" class="map-page__nav" />
    <div
      class="map-page__inner"
      :class="{
        'search-only':
          width > 1000 && !isSearchFocused && ['search', 'search-filter'].includes(route.name),
      }"
    >
      <div class="scrollbar" ref="scrollbarElement">
        <div
          id="scroll-content"
          class="scrollbar__content"
          :style="{ height: scrollHeight + 'px' }"
        ></div>
      </div>
      <div class="map-page__content" :class="{hide: toBottom}" ref="contentElement">
        <slot />
      </div>
    </div>
    <HeaderBtn />
  </div>
</template>

<script setup>
import {toRefs, useScroll} from '@vueuse/core'
import {useWindowSize} from "@vueuse/core";

const {width} = useWindowSize()

const contentElement = ref();
const scrollbarElement = ref();
const route = useRoute();
const isSearchFocused = useState("searchFocused");

const triggerScrollUpdate = useState("triggerScrollUpdate", () => false);

const {directions} = useScroll(contentElement)
const {top: toTop, bottom: toBottom} = toRefs(directions)

function firstElScroll(e) {
  contentElement.value.scrollTop = scrollbarElement.value.scrollTop;
}
function secondElScroll(e) {
  scrollbarElement.value.scrollTop = contentElement.value.scrollTop;
}

const scrollHeight = ref(0);

onMounted(async () => {
  scrollbarElement.value.addEventListener("scroll", firstElScroll, false);
  contentElement.value.addEventListener("scroll", secondElScroll, false);

  await waitForElementConnected(contentElement.value);
  scrollHeight.value = contentElement.value.scrollHeight;

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") isSearchFocused.value = false;
  });
});

watch(triggerScrollUpdate, () => {
  scrollHeight.value = contentElement.value?.scrollHeight;
});

watch(isSearchFocused, () => {
  setTimeout(() => {
    triggerScrollUpdate.value = !triggerScrollUpdate.value;
  });
});

watch(route, () => {
  contentElement.value.scrollTop = 0;
  scrollHeight.value = contentElement.value.scrollHeight;
});
</script>

<style lang="scss">
$pageHeight: calc(100vh - 40px);

.mobile {
  .header__btn {
    display: none;
  }

  .map-page {
    &__inner {
      left: 0;
      bottom: 0;
      top: auto;
      width: 100vw;
      max-width: none;
      height: 70vh;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
}

.map-page {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;

  .p-x {
    padding: 0 15px;
  }

  .header__btn {
    position: absolute;
    top: 20px;
    right: 20px;
    height: 58px;
    font-size: 16px;
    line-height: 18px;
    padding: 20px 10px;
  }

  &__nav {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: 1800px) {
      right: 20px;
      left: auto;
      transform: none;
    }
  }

  &__inner {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 35vw;
    max-width: 600px;
    height: $pageHeight;
    background: #fff;
    border-radius: 25px;
    border: 1px solid #dadeec;
    box-shadow: 0px 11px 48px rgba(178, 188, 221, 0.15);
    @media (max-width: 1400px) {
      width: 45vw;
    }

    &.search-only {
      max-height: 90px;
      box-shadow: none;
      border: none;
      background: transparent;
      overflow: hidden;
      width: 385px;

      .btn-close {
        opacity: 0;
      }

      .search-filter__tabs {
        display: none;
      }

      .switch {
        display: none;
      }

      .search-filter__searchbox {
        margin-bottom: 0;
      }

      .search-filter__header {
        background: transparent;
      }

      .scrollbar {
        opacity: 0;
        pointer-events: none;
      }

      .map-page__content {
        overflow: hidden;
        width: 100%;

        .search-form__searchbox {
          background: transparent;
          border-color: transparent;
          width: 385px;
          padding-right: 0;

          label {
            width: 365px;
          }

          #search-input {
            border-color: transparent;
            box-shadow: 0px 11px 48px rgba(178, 188, 221, 0.15);
          }

          .btn {
            // display: none;
            opacity: 0;
            pointer-events: none;
            position: absolute;
          }
        }
      }
    }

    .scrollbar {
      width: 14px;
      height: 100%;
      position: absolute;
      right: -20px;
      top: 0;
      border-radius: 5px;
      overflow-y: auto;

      &::-webkit-scrollbar {
        width: 12px;
      }

      &::-webkit-scrollbar-track {
        background: #fff;
        border-radius: 10px;
      }

      &::-webkit-scrollbar-thumb {
        background: $gray;
        border-radius: 10px;
        border: 4px solid #fff;
        background-clip: content-box;
      }

      &__content {
        height: 20000px;
        opacity: 0;
      }
    }
  }

  &__content {
    border-radius: 25px;
    // width: 600px;
    height: calc(100% - 20px);
    border-radius: 25px 25px 0 0;
    min-height: calc(100% - 20px);
    overflow-y: auto;
    // height: 100%;
    margin: 10px 0;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
