<template>
  <section class="home__slider">
    <Slider
      :slidesPerView="width > 1000 ? 1.2 : 1.05"
      :spaceBetween="width > 1000 ? 40 : 10"
      :navigation="width > 1000"
      pagination
    >
      <swiper-slide v-for="i of 4" :key="i">
        <div class="home__slider slider__content">
          <h1 class="slider__content-title">Баня.ру</h1>
          <h2 class="slider__content-suptitle">С нами теплее</h2>
          <UIButton>Смотреть</UIButton>
        </div>
        <img src="@/assets/img/home/Slider.png" alt="" />
      </swiper-slide>
    </Slider>
  </section>
</template>

<script setup>
import { SwiperSlide } from "swiper/vue";
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize();
</script>

<style lang="scss">
.home__slider {
  margin-bottom: 20px;
  position: relative;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }

  & .slider {
    height: 460px;

    @media (max-width: 1400px) {
      height: 350px;
    }

    @media (max-width: 768px) {
      height: 250px;

      .swiper-pagination-bullets {
        bottom: 8px !important;
      }
    }

    @media (max-width: 450px) {
      height: 180px;
    }

    &__content {
      padding: 60px 60px 40px;
      height: 100%;
      // height: 460px;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      // opacity: 0;
      // transform: scaleX(0);
      transition: all 0.3s;

      @media (max-width: 768px) {
        padding: 25px;
      }

      .btn {
        margin-top: auto;
        position: relative;
        z-index: 2;

        @media (max-width: 768px) {
          padding: 10px 20px;
        }
      }

      &-title {
        font-weight: 900;
        font-size: 58px;
        line-height: 100%;
        text-transform: uppercase;
        margin-bottom: 8px;
        position: relative;
        z-index: 2;

        @media (max-width: 1400px) {
          font-size: 48px;
        }

        @media (max-width: 768px) {
          font-size: 29px;
        }
      }

      &-suptitle {
        font-weight: 700;
        font-size: 24px;
        line-height: 130%;
        position: relative;
        z-index: 2;

        @media (max-width: 1400px) {
          font-size: 24px;
        }

        @media (max-width: 768px) {
          font-size: 15px;
        }
      }
    }

    & .swiper {
      & .swiper-slide {
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.36),
            rgba(0, 0, 0, 0.36)
          ),
          url(image.png);
        border-radius: 23px;
        overflow: hidden;
        position: relative;
        color: #fff;

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;

          position: absolute;
          z-index: -1;
          left: 0;
          top: 0;
        }

        // &-active {
        //   .slider__content {
        // transform: scaleX(1);
        // opacity: 1;
        //   }
        // }
      }
    }
  }
}
</style>
