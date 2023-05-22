<template>
  <section class="booking">
    <div class="booking-page flex">
      <BookingHeader />
      <div class="booking-page__content">
        <BookingIntro />
        <BookingDescription />
        <BookingPrices />
        <BookingDiscounts />
        <!-- CALCULATOR -->
        <Calculator class="p-x" />
        <!-- ROOMS -->
        <BookingRooms />
        <!-- SERVICES -->
        <BookingServices />
        <!-- ACCESSORIES -->
        <BookingAccessories />
        <!-- SIMILAR -->
        <BookingSimilar />
        <!-- RECENTS -->
        <div class="p-x booking-page__recents">
          <h1 class="booking-page__title booking-page__recents-title">
            Похожие объявления
          </h1>
          <SwiperSlider
            class="booking-page__recents-slider"
            slidesPerView="3"
            :spaceBetween="10"
            navigation
          >
            <swiper-slide v-for="i of 12" :key="i">
              <BookingCardItem favorite />
            </swiper-slide>
          </SwiperSlider>
        </div>
        <!-- REVIEWS -->
        <BookingReviews class="p-x" />
        <!-- ANNOUNCE -->
        <div class="p-x booking-page__announce">
          <button class="booking-page__announce-btn">Объявление</button>
          <div class="booking-page__announce-controls">
            <button class="booking-page__announce-control">
              <Icon tag="i" icon="arrow-left" color="green" :hover="false" />
              Предыдущее
            </button>
            <button class="booking-page__announce-control">
              Следующее
              <Icon tag="i" icon="arrow-left" color="green" :hover="false" />
            </button>
          </div>
        </div>
        <!-- INFO -->
        <div class="p-x booking-page__info">
          <h1 class="booking-page__title booking-page__info-title">
            Объявление
          </h1>
          <div class="booking-page__items">
            <div
              class="booking-page__info-item"
              v-for="{ label, text } of infoItems"
              :key="label"
            >
              <div class="booking-page__info-label">{{ label }}</div>
              <div class="booking-page__info-text">{{ text }}</div>
            </div>
          </div>
        </div>
        <!-- <OrderFooter /> -->
        <Footer class="mobile" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { SwiperSlide } from "swiper/vue";

definePageMeta({
  layout: "map",
});

const infoItems = ref([
  {
    label: "№ объявления",
    text: "123654657",
  },
  {
    label: "Дата размещения",
    text: "12.10.21",
  },
  {
    label: "Дата обновления",
    text: "10.10.21",
  },
  {
    label: "Количество показов",
    text: "1434",
  },
]);
</script>

<style lang="scss">
.booking-page {
  flex-direction: column;
  height: 100%;
  margin-top: 95px;

  &__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
  }

  &__content {
    & > .p-x {
      padding-bottom: 20px;
      border-bottom: 1px solid #dadeec;
      border-radius: 0 0 25px 25px;
      margin-bottom: 40px;
    }
  }

  &__more-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    padding: 0;
    background: transparent;

    margin: 0 auto;

    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    color: $green;
    cursor: pointer;

    transition: all 0.2s;

    img {
      transform: rotate(-90deg);
    }
  }

  &__price {
    display: flex;
    align-items: center;
    gap: 10px;

    font-weight: 500;
    font-size: 24px;
    line-height: 130%;

    margin-bottom: 10px;

    &-action {
      width: 24px;
      height: 24px;
      border-radius: 50%;

      display: flex;
      justify-content: center;
      align-items: center;

      transition: all 0.2s;
      cursor: pointer;

      &:hover {
        background: rgba($color: #000000, $alpha: 0.05);
      }

      img {
        // width: 14px;
        // height: 8px;
        object-fit: contain;
        object-position: center;
        transform: rotate(-90deg);
      }
    }
  }

  &__place {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;

    display: flex;
    align-items: flex-end;
    gap: 5px;

    img {
      cursor: pointer;
    }
  }

  &__place,
  .rate {
    padding-right: 12px;
    margin-right: 12px;
    border-right: 1px solid #e1e5f2;
  }

  &__paid-hint {
    position: absolute;
    right: 0;
    top: 0;

    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: $green;

    display: flex;
    align-items: center;
    gap: 5px;

    img {
      cursor: pointer;
    }
  }

  &__street {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 20px;
  }

  // DESCRIPTION

  &__description {
    margin-bottom: 25px;
    &.p-x {
      padding: 0 20px 30px !important;
    }

    &-title {
      margin-bottom: 40px;
    }

    &-item {
      display: grid;
      align-items: flex-start;
      grid-template-columns: 2fr 4fr;

      &:not(:last-of-type) {
        margin-bottom: 20px;
      }
    }

    &-label {
      display: flex;
      align-items: center;
      gap: 20px;

      font-weight: 500;
      font-size: 14px;
      line-height: 18px;

      color: $gray;
    }

    &-text {
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
    }
  }

  //   PRICES & DISCOUNTS

  &__prices,
  &__discounts {
    &.p-x {
      padding: 0 20px 30px !important;
    }

    &-title {
      margin-bottom: 40px;
    }

    &-items {
      margin-bottom: 50px;
      overflow: hidden;
      transition: all 0.3s;

      &.open {
        & + .booking-page__more-btn {
          img {
            transform: rotate(90deg);
          }
        }
      }
    }

    &-item {
      display: grid;
      grid-template-columns: auto 3fr auto;
      align-items: flex-end;
      gap: 10px;

      font-weight: 700;
      font-size: 16px;
      line-height: 20px;

      &:not(:last-of-type) {
        margin-bottom: 15px;
      }
    }

    &-dots {
      border-bottom: 1px dashed $gray;
    }

    &-text {
      color: $gray;
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      text-align: right;
    }
  }

  &__prices {
    margin-bottom: 20px;
  }

  &__discounts {
    &-item {
      grid-template-columns: auto 3fr 2fr;
    }

    &-items {
      margin-bottom: 20px;
    }
  }

  // ROOMS

  &__rooms,
  &__services,
  &__accessories {
    &.p-x {
      padding: 0 20px 20px !important;
    }
    &-title {
      margin-bottom: 15px;
    }

    &-items {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px 10px;

      margin-bottom: 30px;
      overflow: hidden;
      transition: all 0.3s;

      &.open + .booking-page__more-btn {
        img {
          transform: rotate(90deg);
        }
      }
    }
  }

  // SIMILAR & RECENTS

  &__similar,
  &__recents {
    &.p-x {
      padding: 0 20px 40px !important;
    }
    &-title {
      margin-bottom: 15px;
    }

    // &-slider {
    //   .slider__arrow {
    //     transform: translateY(-165%);
    //     width: 40px;
    //     height: 40px;
    //     background: rgba($color: #fff, $alpha: 0.6);
    //   }

    //   .slider__arrow.next {
    //     right: 10px;
    //     transform: translateY(-165%) rotate(180deg);
    //   }

    //   .slider__arrow.prev {
    //     left: 10px;
    //   }
    // }
  }
  // ANNOUNCE
  &__announce {
    &.p-x {
      padding: 0 20px 45px !important;
    }

    &-btn {
      padding: 3px 30px;
      font-weight: 700;
      font-size: 14px;
      line-height: 14px;
      color: $gray;
      cursor: pointer;

      background: #ffffff;
      border: 2px solid $light-gray;
      border-radius: 20px;

      display: flex;
      margin: 0 auto 5px;
    }

    &-controls {
      display: flex;
      justify-content: center;
      gap: 50px;
    }

    &-control {
      gap: 10px;
      color: $green;
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;

      background: transparent;

      font-weight: 500;
      font-size: 16px;
      line-height: 18px;

      &:last-of-type i {
        transform: rotate(180deg);
      }
    }
  }
  // INFO
  &__info {
    &.p-x {
      margin-bottom: 0;
      padding: 0 20px 30px !important;
    }

    &-title {
      margin-bottom: 15px;
    }

    &-item {
      display: grid;
      grid-template-columns: 1fr 2fr;
      margin-bottom: 20px;
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;

      &:last-of-type {
        margin-bottom: 0;
      }
    }

    &-label {
      color: $gray;
    }
  }
}
</style>
