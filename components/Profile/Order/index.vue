<template>
  <div class="order">
    <ProfileEmpty title="Пока в заказах ничего нет" v-if="!orders.length" />
    <div v-else>
      <ProfileTabs :tabs="tabs" />
      <div class="order__items" v-if="width > 1000">
        <SwiperSlider
          :slides-per-view="3"
          :space-between="30"
          :grid="{ rows: 4, fill: 'row' }"
        >
          <swiper-slide
            v-for="(item, i) of [...data, ...data, ...data, ...data]"
            :key="i"
          >
            <ProfileOrderItem :data="item" />
          </swiper-slide>
        </SwiperSlider>
      </div>
      <div class="order__items" v-else>
        <ProfileOrderItem v-for="(item, i) of data" :key="i" :data="item" />
      </div>
      <ProfileBtn>Найти баню, услугу, товары</ProfileBtn>
    </div>
  </div>
</template>

<script setup>
import { SwiperSlide } from "swiper/vue";
import {useWindowSize} from "@vueuse/core";
const {width} = useWindowSize()

const orders = ref([123]);
const tabs = ["Активные", "Архив"];

const data = ref([
  {
    type: "book",
    status: "cancelled",
  },
  {
    type: "pay",
    status: "payed",
  },
  {
    type: "free",
    status: "completed",
  },
  {
    type: "vip",
    status: "waiting",
  },
]);
</script>

<style lang="scss" scoped>
.order {
  &__items {
    margin-bottom: 30px;

    @media (max-width: 1000px) {
      .order-item {
        max-width: 400px;
        margin: 0 auto;

        &:not(:last-of-type) {
          margin-bottom: 20px;
        }
      }
    }
  }

  .profile-btn {
    width: 100%;
    margin: 0 auto;
    padding: 15px;
    display: flex;
    text-align: center;
  }

  & :deep(.profile-tabs) {
    margin: 20px auto 50px;

    .profile-tabs__item {
      padding: 0 70px 10px;

      @media (max-width: 700px) {
        padding: 0 40px 10px;
      }
    }
  }
}
</style>
