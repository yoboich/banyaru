<template>
  <div class="booking-search">
    <div class="booking-search__header">
      <div class="booking-search__searchbox">
        <UISearchInput v-model="searchTerm" placeholder="Поиск Баня.ру" hint/>
        <button class="booking-search__filter">
          <IconBase icon="filter" color="black"/>
        </button>
      </div>
      <div class="booking-search__info">
        <h3 class="booking-search__info-text">1 936 объявлений</h3>
        <button class="booking-search__info-revert">
          <IconBase icon="sort" color="gray"/>
        </button>
      </div>
      <SwiperSlider class="booking-search__tags" :slides-per-view="3.1" :space-between="5">
        <swiper-slide class="booking-search__tags-item">
          Найти баню
        </swiper-slide>
        <swiper-slide class="booking-search__tags-item">
          Банщики
        </swiper-slide>
        <swiper-slide class="booking-search__tags-item">
          Массаж
        </swiper-slide>
        <swiper-slide class="booking-search__tags-item">
          Массаж
        </swiper-slide>
      </SwiperSlider>
    </div>
    <div class="booking-search__results">
      <BookingMobileSearchItem type="first"/>
      <BookingMobileSearchItem type="second"/>
      <BookingMobileSearchItem type="third"/>
    </div>
  </div>
</template>

<script setup>
import {SwiperSlide} from "swiper/vue";
const searchTerm = useState('searchTerm')

const tags = ref(['Найти баню', 'Банщики', 'Массаж', 'Банщики', 'Массаж'])

</script>

<style lang="scss" scoped>

.booking-search {
  position: relative;
  padding-top: 190px;

  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;

  &__header {
    padding-top: 20px;
    padding-bottom: 5px;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    background: #fff;
  }

  &__searchbox {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    gap: 30px;
    margin-bottom: 10px;
  }

  &__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    &-text {
      font-weight: 700;
      font-size: 24px;
      line-height: 120%;
    }

    &-revert {
      &:hover {
        svg {
          --icon-color: #{$green};
        }
      }
    }
  }

  &__tags {
    padding: 0 20px;

    &-item {
      padding: 8px 10px;
      border: 2px solid #DADEEC;
      border-radius: 25px;
    }
  }

  &__results {
    padding: 0 20px;
    overflow: scroll;
    flex-grow: 1;

    & > div:not(:last-of-type) {
      margin-bottom: 20px;
    }
  }
}
</style>