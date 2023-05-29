<template>
  <div class="search-services">
    <SwiperSlider
      :freeMode="true"
      slidesPerView="auto"
      class="width-auto"
      :spaceBetween="10"
    >
      <swiper-slide v-for="(service, i) of services" :key="i">
        <nuxt-link to="/search">
          <div class="search-service">
            <IconBase :icon="service.icon" subpath="/home" />
            <div class="search-service__content">
              <h3 class="service-title">{{ service.title }}</h3>
              <span class="service-suptitle">{{ service.suptitle }}</span>
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
    title: "Найти баню / сауну",
    suptitle: "Москва",
    icon: "search",
  },
  {
    title: "Массаж",
    suptitle: "Релакс",
    icon: "hand",
  },
]);

services.value = services.value.concat(services.value);
</script>

<style lang="scss" scoped>
.search-services {
  margin-bottom: 30px;
  .search-service {
    padding: 15px 40px 15px 10px;
    border-radius: 25px;
    border: 2px solid #dadeec;
    text-align: left;

    flex-shrink: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    &__content {
      display: flex;
      flex-direction: column;
    }

    h3,
    span {
      font-size: 16px;
      font-size: 16px;
      line-height: 20px;
    }

    h3 {
      font-weight: 700;
    }

    span {
      font-weight: 500;
    }

    svg {
      width: 25px;
    }
  }
}
</style>
