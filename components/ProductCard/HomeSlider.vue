<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade } from "swiper";

import "swiper/css";

import img1 from "~/assets/img/product-card/1.png";
import img2 from "~/assets/img/product-card/2.png";
import img3 from "~/assets/img/product-card/3.png";
import img4 from "~/assets/img/product-card/4.png";
import img5 from "~/assets/img/product-card/5.png";
import img6 from "~/assets/img/product-card/6.png";
import img7 from "~/assets/img/product-card/6.png";

import bigIm1 from "~/assets/img/promotions/1.jpg";
import bigIm2 from "~/assets/img/promotions/2.jpg";
import bigIm3 from "~/assets/img/promotions/3.jpg";

defineProps({
  premium: {
    type: Boolean,
    default: false,
  },
});

const mainImages = ref([
  bigIm1,
  bigIm2,
  bigIm3,
  bigIm2,
  bigIm1,
  bigIm3,
  bigIm1,
]);
const images = ref([img1, img2, img3, img4, img5, img6, img7]);

const modalVisible = ref(false);

// swiper

const swiperBtn = ref(null);

const totalImg = computed(() => images.value.length);
const currentImg = computed(() => swiperBtn.value?.realIndex + 1);

function getRef(swiperInstance) {
  swiperBtn.value = swiperInstance;
}

function next() {
  swiperBtn.value.slideNext();
}

function prev() {
  swiperBtn.value.slidePrev();
}

function slideTo(idx) {
  swiperBtn.value.slideTo(idx);
}

const modules = [EffectFade];

const openModal = () => {
  modalVisible.value = true;

  document.body.classList.add("lock");
};

const closeModal = () => {
  modalVisible.value = false;

  document.body.classList.remove("lock");
};
</script>

<template>
  <div class="product-card-swiper">
    <Teleport to="body">
      <PreviewModal :visible="modalVisible" @close-modal="closeModal" />
    </Teleport>
    <swiper
      @swiper="getRef"
      :modules="modules"
      :effect="'fade'"
      draggable="false"
      class="product-swiper"
    >
      <swiper-slide>
        <nuxt-link to="/modal">
          <div class="product-card-swiper__main background">
            <img src="../../assets/img/order/background.png" alt="background" />
          </div>
        </nuxt-link>
      </swiper-slide>
      <swiper-slide>
        <nuxt-link to="/modal">
          <div class="product-card-swiper__main">
            <nuxt-img
              class="product-card-swiper__bg"
              src="/promotions/room2.png"
              sizes="sm:100vw md:50vw lg:900px"
              quality="90"
            />
          </div>
        </nuxt-link>
      </swiper-slide>
      <swiper-slide>
        <nuxt-link to="/modal">
          <div class="product-card-swiper__main">
            <nuxt-img
              class="product-card-swiper__bg"
              src="/promotions/room2.png"
              sizes="sm:100vw md:50vw lg:900px"
              quality="90"
            />
          </div>
        </nuxt-link>
      </swiper-slide>
      <div
        class="product-card-swiper__arrow arrow-left pos opacity-background"
        v-if="premium"
        @click="prev"
      >
        <IconArrow :class="{ fill: currentImg != 1 }" />
      </div>
      <div
        class="product-card-swiper__arrow arrow-right pos"
        @click="next"
        v-if="premium"
      >
        <IconArrow :class="{ fill: currentImg != totalImg }" />
      </div>
    </swiper>
    <div class="swiper-text">
      <div class="swiper-text__first">
        <img src="../../assets/img/order/time.png" alt="time" />
        <h4>Открыто до 23:00</h4>
      </div>
      <div class="swiper-text__last">
        <button>Этот баннер привлекает внимание!</button>
      </div>
      <div class="swiper-text__second">
        <img src="../../assets/img/order/editables.png" alt="edit" />
        <img src="../../assets/img/order/hearts.png" alt="hearts" />
      </div>
    </div>
    <div class="swiper-footer">
      <h4>Сауна цветы</h4>
      <h2>от 2 000 ₽/час</h2>
      <h4>Баня на дровах • Сауна • Хаммам</h4>
      <h4>Залы 3 • Бассейн • до 15 чел.</h4>
      <div class="swiper-footer-box">
        <img
          src="../../assets/img/order/product-images.png"
          alt="product-images"
        />
        <div class="btn-wrappers">
          <button>+7 999 333 14 ...</button>
          <button>
            <img src="../../assets/img/order/message.png" alt="message" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.swiper-text {
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  &__first {
    display: flex;
    align-items: center;
    & h4 {
      font-weight: 500;
      font-size: 16px;
      color: #3e3e51;
      margin-left: 10px;
    }
  }

  &__last {
    & button {
      width: 312px;
      height: 31px;
      background: #faba17;
      border-radius: 100px;
      border: none;
      font-weight: 700;
      font-size: 16px;
      color: #3e3e51;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }
  &__second {
    display: flex;
    align-items: center;
    & img {
      margin-right: 10px;
    }
  }
}
.product-swiper {
  max-width: 100% !important;
  margin-top: 21px;
}
.link {
  display: flex;
  align-items: center;
}
.opacity-background {
  box-shadow: none;
  background: #ffffff60;
}

.product-card-swiper__arrow svg {
  width: 3rem;
  height: 3rem;
}

.product-card-swiper__bg {
  height: 278px;
  @media (max-width: 1900px) {
    height: 230px;
  }
}

.background {
  background-image: url("../../assets/img/promotions/room2.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;
  border-radius: 20px;
  display: flex;

  & img {
    width: 65px;
    height: 59px;
  }
}
.swiper-footer {
  font-family: "Lato", sans-serif;
  margin-top: 5px;
  & h4 {
    font-weight: 700;
    font-size: 17px;
    color: #3e3e51;
  }
  & h2 {
    font-weight: 700;
    font-size: 24px;
    color: #3e3e51;
  }
  .swiper-footer-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    & img {
      width: 200px;
    }
    .btn-wrappers {
      display: flex;
      align-items: center;
      & button {
        font-family: "Lato", sans-serif;
        font-weight: 500;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: #ffffff;
        background: #32bd1b;
        box-shadow: 0px 4px 21px rgba(143, 153, 186, 0.7);
        border-radius: 100px;
        &:nth-child(1) {
          width: 197px;
          height: 50px;
        }
        &:nth-child(2) {
          width: 50px;
          height: 50px;
          margin-left: 10px;
          & img {
            width: 25px;
            height: 23px;
          }
        }
      }
    }
  }
}
</style>
