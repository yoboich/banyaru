<template>
  <div class="favorite">
    <ProfileTabs :tabs="tabs" />
    <ProfileEmpty title="Пока в избранном ничего нет" v-if="!items.length" />
    <div class="favorite__content" v-else>
      <div class="favorite__items" v-if="width > 1000">
        <SwiperSlider
          :slides-per-view="width > 1200 ? 3 : 2"
          :space-between="30"
          :grid="{ rows: 4, fill: 'row' }"
        >
          <swiper-slide v-for="i of 20" :key="i">
            <ProfileFavoriteItem :status="i === 3 ? 'deleted' : 'active'" />
          </swiper-slide>
        </SwiperSlider>
      </div>
      <ProfileMobileFavorite v-else />
      <ProfileBtn>Найти баню, услугу, товары</ProfileBtn>
    </div>
  </div>
</template>

<script setup>
import { SwiperSlide } from "swiper/vue";
import {useWindowSize} from "@vueuse/core";
const {width} = useWindowSize()

const tabs = ["Все", "Снять", "Услуги", "Товары"];
const items = ref([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 21, , 33, 2, 32]);
</script>

<style lang="scss" scoped>
.favorite {
  & :deep(.profile-tabs) {
    margin: 0 auto 50px;
    
    .profile-tabs__item {
      padding: 0 80px 10px;

      @media (max-width: 1400px) {
        padding: 0 20px 10px;
      }
    }
  }

  .profile-btn {
    padding: 15px !important;
    width: 100%;
  }

  &__items {
    margin-bottom: 50px;
  }
}
</style>
