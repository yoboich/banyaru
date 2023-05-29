<template>
  <div class="item" :class="{ wide: props.wide }">
    <SwiperSlider
      v-if="props.wide"
      class="item-preview"
      navigation
      :slidesPerView="1.3"
      :spaceBetween="10"
    >
      <swiper-slide v-for="i of 3" :key="i">
        <nuxt-link to="/booking/test-slug"
          ><div class="item-preview__content">
            <img src="~/assets/images/preview/slider-girl.jpg" alt="" /></div
        ></nuxt-link>
      </swiper-slide>
    </SwiperSlider>
    <div class="item-preview" v-else>
      <nuxt-link to="/booking/test-slug">
        <img src="~/assets/images/preview/slider-girl.jpg" alt="" />
      </nuxt-link>
    </div>
    <div class="item__content">
      <div class="item__content-top" v-if="props.wide">
        <WorkTime :time="'9:00'" />
        <div class="item__hint">Этот баннер привлекает внимание!</div>
        <BookingSearchItemControls />
      </div>
      <div class="item__details">
        <div class="item__details-info">
          <div>
            <h4 class="item-title">
              <nuxt-link to="/booking/item"> Сауна цветы </nuxt-link>
            </h4>
            <h3 class="item-price">от 2 000 ₽/час</h3>
          </div>
          <BookingSearchItemControls v-if="!props.wide" />
        </div>
        <BookingSearchItemTags :tags="firstTags" />
        <BookingSearchItemTags :tags="secondTags" />
      </div>
      <div class="item__content-bottom">
        <div class="item__content-info">
          <BookingSearchItemLocation place="Пражская" time="13 мин" />
          <WorkTime v-if="!props.wide" :time="'9:00'" />
          <BookingSearchItemRate rate="4,2" />
          <Reviews text="11 отзывов" />
        </div>
        <div class="item__contact-btns">
          <UIButton>+7 999 333 14 ...</UIButton>
          <UIButton class="chat-btn">
            <IconBase icon="message" color="white" />
          </UIButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { SwiperSlide } from "swiper/vue";

const props = defineProps({
  wide: {
    type: Boolean,
    default: false,
  },
});

const firstTags = ref(["Баня на дровах", "Сауна", "Хаммам"]);
const secondTags = ref(["Залы 3", "Бассейн", "до 15 чел."]);
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: 1400px) {
    flex-direction: column;
  }

  .spacer {
    width: 1px;
    height: 20px;
    background: $light-gray;
  }

  &__hint {
    padding: 5px 20px;
    border-radius: 100px;
    background: #faba17;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;

    @media (max-width: 1400px) {
      order: -1;
      width: 100%;
    }
  }

  &.wide {
    display: block;

    .item__tags {
      margin-bottom: 10px;

      &:last-of-type {
        margin-bottom: 15px;
      }
    }

    &:deep(.item-preview) {
      height: 220px;
      margin-bottom: 20px;
      border-radius: 10px;
      overflow: hidden;

      .item-preview__content {
        border-radius: 10px;
        overflow: hidden;
        height: 100%;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
      }
      & .slider__arrow {
        &.prev {
          left: 10px;
        }

        &.next {
          right: 10px;
        }
      }
    }

    .item__content-bottom {
      display: grid;
      grid-template-columns: 1fr 1fr;

      @media (max-width: 1400px) {
        grid-template-columns: 1fr;
      }
    }
  }

  &:not(.wide) {
    & .item-preview {
      width: 220px;
      border-radius: 10px;
      overflow: hidden;
      flex-shrink: 0;

      @media (max-width: 1400px) {
        width: 100%;
        max-height: 200px;
      }

      & > a {
        display: block;
        width: 100%;
        height: 100%;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }

    .item__contact-btns .btn {
      &:not(.chat-btn) {
        width: 150px;
      }
    }

  }

  &-title {
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    margin-bottom: 5px;
  }

  &-price {
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    margin-bottom: 5px;
  }

  &__contact-btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    .btn {
      padding: 15px 20px;

      &:not(.chat-btn) {
        flex-grow: 1;
      }

      &.chat-btn {
        width: 50px;
        height: 50px;
        padding: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  &__content {
    &-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-bottom: 10px;

      @media (max-width: 1400px) {
        gap: 10px;
      }
    }

    &-info {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      // gap: 0 8px;

      margin-bottom: 10px;

      & > *:not(.location):not(.reviews) {
        padding-right: 8px;
        margin-right: 8px;

        border-right: 1px solid $light-gray;
      }

      .location {
        width: 100%;
      }
    }

    .location {
      margin-bottom: 10px;
    }
  }

  &__details {
    &-info {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
  }

  &__tags {
    margin-bottom: 5px;

    &:last-of-type {
      margin-bottom: 10px;
    }
  }
}
</style>
