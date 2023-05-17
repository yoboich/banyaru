<template>
  <div class="services">
    <Slider
      :freeMode="true"
      slidesPerView="auto"
      class="width-auto"
      :spaceBetween="10"
      :loop="false"
    >
      <swiper-slide v-for="(service, i) of services" :key="i">
        <nuxt-link to="/search">
          <div class="service" :class="{ active: i == 0 }">
            <img :src="getLocalUrl(service.iconPath)" alt="" />
            <div class="service__content">
              <h3 class="service-title">{{ service.title }}</h3>
            </div>
          </div>
        </nuxt-link>
      </swiper-slide>
    </Slider>
  </div>
</template>

<script setup>
import { SwiperSlide } from "swiper/vue";

const services = ref([
  {
    title: "Все сервисы",
    iconPath: "img/icon/menu.svg",
  },
  {
    title: "Подбор Бани Сауны",
    iconPath: "img/icon/bath.svg",
  },
  {
    title: "Праздники и корпаративы",
    iconPath: "img/icon/party-hat.svg",
  },
  {
    title: "Подбор Бани Сауны",
    iconPath: "img/icon/bath.svg",
  },
  {
    title: "Праздники и корпаративы",
    iconPath: "img/icon/party-hat.svg",
  },
]);
</script>

<style lang="scss" scoped>
.services {
  margin-bottom: 30px;
  .service {
    padding: 15px;
    border-radius: 25px;
    background: #d8ffd1;
    flex-shrink: 0;

    height: 90px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;

    h3 {
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
    }

    &.active {
      background: $green-color;
      color: #fff;

      .service__content {
        max-width: 60px;
      }
    }

    &__content {
      max-width: 85px;
    }

    img {
      width: 25px;
    }
  }
}
</style>
