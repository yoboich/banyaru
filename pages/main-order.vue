<script setup>
import {useWindowSize} from '@vueuse/core';
import TheFooter from "../components/TheFooter";

const isLarge = ref(true);

const {width} = useWindowSize();
watchEffect(() => {
  if (width.value <= 768) {
    isLarge.value = false;
  } else {
    isLarge.value = true;
  }
});
onMounted(() => {
  if (width.value <= 768) {
    isLarge.value = false;
  }
});
definePageMeta({
  layout: 'main-order',
});
useHead({title: 'Баня.ру – портал о банях и саунах России'});
</script>
<template>
  <nuxt-link to="/order">
    <section class="map">
      <div class="map__content">
        <iframe
            width="100%"
            height="100%"
            class="absolute inset-0"
            frameborder="0"
            title="map"
            marginheight="0"
            marginwidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114111.50283511227!2d37.46580264053963!3d55.73366918983649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1675549894887!5m2!1sru!2sru"
            loading="lazy"
            style="filter: opacity(0.7); border-radius: 30px"
        ></iframe>
      </div>
    </section>
  </nuxt-link>
  <section class="page">
    <TheHeaderCity />
    <button>
      +  Разместить объявление
    </button>
  </section>
  <section class="page_1">
    <MainOrderHeader/>
  </section>
  <div class="body">
    <div class="container">
      <TheOrderHomeHeader/>
      <div class="slider">
        <ProductCardOrderSwiper/>
      </div>
      <div class="swiper-sliders">
        <ProductCardOrderSlider/>
      </div>
      <div class="main-swiper">
        <OrderSwiper-Slider/>
      </div>
      <div class="product-card">
        <OrderProductCard/>
      </div>
    </div>
  </div>
  <footer>
    <TheFooter/>
  </footer>
</template>
<style lang="scss" scoped>
.map {
  height: 82vh;
  overflow: hidden;

  &__title {
    font-family: "Gilroy";
    font-size: 2.6rem;
    margin-bottom: 5.4rem;
  }

  &__content {
    height: 85vh;
    width: 100%;
    position: fixed;
  }
}
.swiper-sliders {
  margin: 35px 0;
}
.active-width {
  width: 101px !important;
  height: 92px !important;
}

.body {
  background: #FFFFFF !important;
  box-shadow: 0px 4px 63px rgba(0, 0, 0, 0.25);
  border-radius: 23px;
  width: 35%;
  margin: 12px 12px 0;
  position: absolute;
  top: 0;
  padding: 10px 35px;
  @media(max-width: 1500px) {
    width: 47% !important;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #F5F5F5;
    border-radius: 10px;
  }

  &::-webkit-scrollbar {
    width: 7px;
    background-color: #F5F5F5;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #8F99BA;
    box-shadow: 1px 4px 12px rgba(166, 175, 205, 0.36);
    border-radius: 6px;
  }

}

.add-advert {
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2rem;
  margin-top: 5rem;
  padding: 0 2rem;
  color: $green-color;
}

.mobile-container {
  padding: 0 2rem;
}

.order-btn {
  width: 100%;
  height: 50px;
  background: #FABA17;
  border-radius: 100px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #3E3E51;
  margin: 20px auto;
}

.product-content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}

.product-content-wrap {
  margin: 0 auto;
  text-align: center;
  cursor: pointer;

  & img {
    padding: 2px;
    width: 86px;
    height: 86px;
    border-radius: 12px;
  }

  & h4 {
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #3E3E51;
    padding: 10px;
  }
}

.width {
  width: 80px !important;
  height: 68px !important;
  margin-bottom: 20px;
}

.text-active {
  margin: 0 16px 0;
}

.products {
  & h4 {
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #3E3E51;
    margin-bottom: 30px;

    & span {
      font-weight: 700 !important;
      margin-left: 5px;
    }
  }
}

.description {
  margin: 40px 0;
}

.actives {
  border: 3px solid #32BD1B;
  border-radius: 44px !important;
}

.swiper {
  margin: 20px 0;
}

.page_1 {
  height: 135vh;
  display: flex;
  justify-content: center;
  transform: translateX(187px) translateY(-111px);
}

.page {
  display: flex;
  justify-content: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  text-align: center;
  left: 36%;
  margin: 20px 0;
  width: 63%;
  @media(max-width: 1500px) {
    left: 48%;
    width: 50%;
  }
  & button {
    width: 285px;
    height: 58px;
    background: #32BD1B;
    box-shadow: 0px 4px 24px rgba(166, 175, 203, 0.32);
    border-radius: 100px;
    border: none;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
  }
}
</style>
