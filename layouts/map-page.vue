<template>
  <div class="map-page">
    <Map />
    <TheHeaderNav class="map-page__nav" />
    <UIButton class="header__btn">
      <img src="~/assets/img/icon/plus-symbol.svg" alt="" />
      <span>Разместить объявление</span>
    </UIButton>
    <div
      class="map-page__scroll-area"
      :class="{ 'show-search': showSearch }"
      ref="scrollArea"
    >
      <div class="map-page__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "main-order",
});

const scrollArea = ref();
const showSearch = useState("showSearch");
const route = useRoute();

watch(route, () => {
  scrollArea.value.scrollTop = 0;
});

useHead({ title: "Баня.ру – портал о банях и саунах России" });
</script>

<style lang="scss">
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
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    padding: 20px 30px;
  }

  &__nav {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }

  &__content {
    border-radius: 25px;
    box-shadow: 0px 11px 48px rgba(178, 188, 221, 0.15);
    width: 600px;
    border-radius: 25px 25px 0 0;
    position: relative;
    z-index: 10;
    min-height: 100%;

    &::after {
      content: "";
      width: 600px;
      height: 25px;
      border-radius: 0 0 25px 25px;
      background: #fff;
      position: fixed;
      bottom: 20px;
      left: 20px;
      z-index: 20;

      border: 1px solid #dadeec;
      border-top: none;
    }
  }

  &__scroll-area {
    height: calc(100% - 40px);
    padding-right: 10px;
    border-radius: 25px;
    position: absolute;
    top: 20px;
    left: 20px;
    overflow-y: auto;

    &::after {
      content: "";
      width: 600px;
      height: calc(100% - 40px);
      background: #fff;
      position: fixed;
      left: 20px;
      top: 20px;
      border-radius: 25px 25px;
      border: 1px solid #dadeec;
    }

    &::-webkit-scrollbar {
      // position: absolute;
      // left: 0;
      width: 12px;
      padding-left: 10px;
    }

    &::-webkit-scrollbar-track {
      background: #fff;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: $secondary-color;
      border-radius: 10px;
      border: 4px solid #fff;
      background-clip: content-box;
    }

    & .booking-search {
      box-shadow: none;
    }

    & :deep(.item) {
      &.wide {
        .item__content-top {
          .work-time {
            order: 2;
          }

          .controls {
            order: 3;
          }

          .item__hint {
            order: 1;
            width: 100%;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
}
</style>
