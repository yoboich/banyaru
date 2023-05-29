<template>
  <div class="search-item" :class="{small: props.type === 'third'}">
    <div class="search-item__preview thumbs" v-if="props.type === 'first'">
      <SwiperSlider class="main-slider thumbs" ref="mainSlider" :thumbs="{swiper: thumbsSlider?.swiperInstance}">
        <swiper-slide v-for="i of 10" :key="i" >
          <nuxt-link to="/booking/test">
            <img src="~/assets/images/preview/room.jpg" alt="">
          </nuxt-link>
        </swiper-slide>
      </SwiperSlider>
      <SwiperSlider class="thumbs-slider" slides-per-view="3" ref="thumbsSlider" space-between="10">
        <swiper-slide v-for="i of 10" :key="i">
          <img src="~/assets/images/preview/room.jpg" alt="">
        </swiper-slide>
      </SwiperSlider>
    </div>
    <div class="search-item__preview" v-else-if="props.type === 'second'">
      <SwiperSlider class="main-slider" :slides-per-view="1.5" :space-between="10" >
        <swiper-slide v-for="i of 10" :key="i" >
          <nuxt-link to="/booking/test">
            <img src="~/assets/images/preview/room.jpg" alt="">
          </nuxt-link>
        </swiper-slide>
      </SwiperSlider>
    </div>
    <div class="search-item__preview" v-else>
      <nuxt-link to="/booking/test">
        <img src="~/assets/images/preview/room.jpg" alt="">
      </nuxt-link>
    </div>
    <div class="search-item__info">
      <div class="search-item__header">
        <h2 class="search-item__name">Сауна цветы</h2>
        <div class="search-item__header-controls">
          <button class="search-item__icon-btn">
            <IconBase icon="more" color="gray"/>
          </button>
          <button class="search-item__icon-btn">
            <IconBase icon="favorite" color="gray"/>
          </button>
        </div>
      </div>
      <h1 class="search-item__price">от 2 000 ₽/час </h1>
      <ul class="search-item__tags">
        <li class="search-item__tags-item" v-for="tag of tags" :key="tag">{{ tag }}</li>
      </ul>
      <h2 class="search-item__hint" v-if="props.type === 'first'">Этот баннер привлекает внимание!</h2>
    </div>
    <BookingSearchItemLocation class="search-item__location" place="Пражская" time="9:00"/>
    <div class="flex">
      <WorkTime time="9:00"/>
      <BookingSearchItemRate rate="4,2"/>
      <div class="search-item__reviews">11 отзывов</div>
    </div>
    <div class="search-item__actions">
      <button class="search-item__actions-btn">
        <IconBase icon="phone" color="white"/>
        Звонок
      </button>
      <button class="search-item__actions-btn" v-if="props.booking">
        <IconBase icon="booking" color="white" subcolor="green"/>
        Бронировать
      </button>
      <button class="search-item__actions-btn">
        <IconBase icon="message" color="white"/>
        Чат
      </button>
    </div>
  </div>
</template>

<script setup>
import {SwiperSlide} from "swiper/vue";

const tags = ref(['Баня на дровах', 'Сауна', 'Хаммам', 'Залы 3', 'Бассейн', 'до 15 чел.'])

if (props.type === 'third') {
  tags.value = tags.value.slice(0, 3)
}

const mainSlider = ref()
const thumbsSlider = ref()

const props = defineProps({
  type: String
})
</script>

<style scoped lang="scss">
.search-item {
  &.small {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0 15px;

    .search-item__preview {
      width: 130px;
      height: 130px;
      margin-bottom: 0;

      img {
        border-radius: 15px;
      }
    }

    .search-item__price {
      margin-bottom: 5px;
    }

    .search-item__tags {
      gap: 5px 30px;
      margin: 0;
    }

    .search-item__info {
      width: calc(100% - 145px);
    }

    .search-item__location {
      margin-top: 15px;
      margin-bottom: 10px;
    }

    .flex {
      margin-bottom: 10px;
    }
  }

  &__preview {
    margin-bottom: 24px;

    a {
      height: 100%;
      display: block;
    }

    .main-slider {
      height: 190px;
      margin-bottom: 10px;
    }

    .thumbs-slider {
      height: 60px;

      img {
        border-radius: 15px;
      }

    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 25px;
    }
  }

  &__name {
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
  }

  &__icon-btn {
    &:hover {
      svg {
        --icon-color: #{$green};
      }
    }
  }

  &__header {
    display: flex;
    justify-content: space-between;

    &-controls {
      display: flex;
      align-items: center;
      gap: 15px;
    }
  }

  &__price {
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    margin-bottom: 15px;
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px 30px;
    margin-bottom: 20px;
    max-width: 300px;

    &-item {
      font-weight: 700;
      font-size: 17px;
      line-height: 20px;
      position: relative;

      &:not(:last-of-type):not(:nth-of-type(3)) {
        &::after {
          content: '•';
          position: absolute;
          top: 50%;
          right: -15px;
          transform: translate(50%, -50%);
        }
      }
    }
  }

  &__hint {
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    margin-bottom: 15px;
  }

  &__location {
    margin-bottom: 20px;
  }

  .flex {
    gap: 20px;
    margin-bottom: 25px;

    & > *:not(:last-of-type) {
      position: relative;

      &::after {
        content: '';
        width: 1px;
        height: 100%;
        background: #E1E5F2;
        right: -10px;
        position: absolute;
        transform: translateX(-50%);
      }
    }
  }

  &__reviews {
    font-size: 16px;
    line-height: 18px;
  }

  &__actions {
    display: grid;
    width: 100%;
    grid-template-columns: 3fr 2fr;
    max-width: 400px;
    gap: 10px;

    &-btn {
      @include flex-center-all;
      gap: 15px;
      height: 50px;
      background: $green;
      border-radius: 25px;
      padding: 10px 20px;
      color: #fff;
      font-size: 20px;
      line-height: 100%;
    }
  }
}
</style>