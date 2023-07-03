<template>
  <div class="services">
    <SwiperSlider
      :freeMode="true"
      slidesPerView="auto"
      class="width-auto"
      :spaceBetween="10"
      :loop="false"
    >
      <swiper-slide v-for="(service, i) of services" :key="i">
        <nuxt-link to="/search">
          <div class="service" :class="{ active: i == 0 }">
            <IconBase :icon="service.icon" subpath="/home" />
            <div class="service__content">
              <h3 class="service-title">{{ service.title }}</h3>
            </div>
          </div>
        </nuxt-link>
      </swiper-slide>
    </SwiperSlider>
  </div>
</template>

<script setup>
import { SwiperSlide } from "swiper/vue";

const services = ref([
  {
    title: "Все сервисы",
    icon: 'menu'
  },
  {
    title: "Подбор Бани Сауны",
   icon: 'bath'
  },
  {
    title: "Праздники и корпаративы",
    icon: "party-hat",
  },
  {
    title: "Подбор Бани Сауны",
    icon: 'bath'
  },
  {
    title: "Праздники и корпаративы",
    icon: "party-hat",
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

    text-align: center;

    h3 {
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
    }

    &.active {
      background: $green;
      color: #fff;

      .service__content {
        max-width: 60px;
      }
    }

    &__content {
      max-width: 85px;
    }

    svg {
      //height: 25px !important;
    }
  }
}
</style>
