<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from 'swiper';

const modules = [Navigation];

onMounted(() => {
  let btn1 = document.querySelector('.btn15')
  let btn2 = document.querySelector('.btn16')
  let btn3 = document.querySelector('.btn17')
  let btn4 = document.querySelector('.btn18')

  let product1 = document.querySelector('.hover15')
  let product2 = document.querySelector('.hover16')
  let product3 = document.querySelector('.hover17')
  let product4 = document.querySelector('.hover18')

  product1.addEventListener('mouseover', () => {
    btn1.classList.toggle('hover-active')
    btn2.classList.remove('hover-active')
    btn3.classList.remove('hover-active')
  })
  product2.addEventListener('mouseover', () => {
    btn2.classList.toggle('hover-active')
    btn1.classList.remove('hover-active')
    btn3.classList.remove('hover-active')
  })
  product3.addEventListener('mouseover', () => {
    btn3.classList.toggle('hover-active')
    btn1.classList.remove('hover-active')
    btn2.classList.remove('hover-active')
  })
  product4.addEventListener('mouseover', () => {
    btn4.classList.add('hover-active')
    btn1.classList.remove('hover-active')
    btn2.classList.remove('hover-active')
    btn3.classList.remove('hover-active')
  })
  product1.addEventListener('mouseout', () => {
    btn1.classList.remove('hover-active')
    btn2.classList.remove('hover-active')
    btn3.classList.remove('hover-active')
  })
  product2.addEventListener('mouseout', () => {
    btn2.classList.remove('hover-active')
    btn1.classList.remove('hover-active')
    btn3.classList.remove('hover-active')
  })
  product3.addEventListener('mouseout', () => {
    btn3.classList.remove('hover-active')
    btn1.classList.remove('hover-active')
    btn2.classList.remove('hover-active')
  })
  product4.addEventListener('mouseout', () => {
    btn4.classList.remove('hover-active')
    btn1.classList.remove('hover-active')
    btn2.classList.remove('hover-active')
    btn3.classList.remove('hover-active')
  })
})

</script>

<template>
  <swiper :navigation="true" :modules="modules" class="mySwiper">
    <swiper-slide>
      <nuxt-link to="/order">
        <div class="swiper-image backgrounds hover15">
          <img src="../../assets/img/order/background.png" alt="room">
        </div>
      </nuxt-link>
    </swiper-slide>
    <swiper-slide>
      <nuxt-link to="/order">
        <div class="swiper-image hover16">
          <img src="../../assets/img/promotions/product-image.png" alt="room">
        </div>
      </nuxt-link>
    </swiper-slide>
    <swiper-slide>
      <nuxt-link to="/order">
        <div class="swiper-image hover17">
          <img src="../../assets/img/promotions/room2.png" alt="room">
        </div>
      </nuxt-link>
    </swiper-slide>
    <swiper-slide>
      <nuxt-link to="/order">
        <div class="swiper-image hover18">
          <img src="../../assets/img/promotions/room2.png" alt="room">
        </div>
      </nuxt-link>
    </swiper-slide>
    <swiper-slide>
      <nuxt-link to="/order">
        <div class="swiper-image">
          <img src="../../assets/img/promotions/product-image.png" alt="room">
        </div>
      </nuxt-link>
    </swiper-slide>
    <swiper-slide>
      <nuxt-link tp="/order">
        <div class="swiper-image">
          <img src="../../assets/img/promotions/room2.png" alt="room">
        </div>
      </nuxt-link>
    </swiper-slide>
  </swiper>
  <nuxt-link to="/order">
    <div class="map-btns1">
      <button class="btn15">2200 ₽</button>
      <button class="btn16">1100 ₽</button>
      <button class="btn17">7000 ₽</button>
      <button class="btn18">8000 ₽</button>
    </div>
  </nuxt-link>
  <div class="swiper-text">
    <div class="swiper-text__first">
      <img src="../../assets/img/order/time.png" alt="time">
      <h4>Открыто до 23:00</h4>
    </div>
    <div class="swiper-text__last">
      <button>Этот баннер привлекает внимание!</button>
    </div>
    <div class="swiper-text__second">
      <img src="../../assets/img/order/editables.png" alt="edit">
      <img src="../../assets/img/order/hearts.png" alt="hearts">
    </div>
  </div>
  <div class="swiper-footer">
    <h4>Сауна цветы</h4>
    <h2>от 2 000 ₽/час  </h2>
    <h4>Баня на дровах  •  Сауна  •  Хаммам</h4>
    <h4>Залы 3  •  Бассейн  •  до 15 чел.</h4>
    <div class="swiper-footer-box">
      <img src="../../assets/img/order/product-images.png" alt="product-images">
      <div class="btn-wrappers">
        <button>+7 999 333 14 ...</button>
        <button>
          <img src="../../assets/img/order/message.png" alt="message">
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#app {
  height: 100%;
}

html,
body {
  position: relative;
  height: 100%;
}
.swiper-slides {
  width: 281px !important;
}
body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  width: 269px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.swiper-image {
  margin-right: 20px;

  & img {
    width: 220px;
    height: 221px;
    border-radius: 20px;
  }
}
.hover-active {
  transition: .2s ease-in-out;
  background: #32BD1B!important;
  color: #fff!important;
}
.backgrounds {
  background-image: url("../../assets/img/promotions/room2.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 220px;
  height: 221px;
  border-radius: 20px;
  text-align: start;
  & img {
    width: 60px;
    height: 60px;
  }
}
.swiper-text{
  font-family: 'Lato', sans-serif;
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
      color: #3E3E51;
      margin-left: 10px;
    }
  }
  &__last {
    & button {
      width: 312px;
      height: 31px;
      background: #FABA17;
      border-radius: 100px;
      border: none;
      font-weight: 700;
      font-size: 16px;
      color: #3E3E51;
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
.swiper-footer {
  font-family: 'Lato', sans-serif;
  margin-top: 5px;
  & h4 {
    font-weight: 700;
    font-size: 17px;
    color: #3E3E51;
  }
  & h2 {
    font-weight: 700;
    font-size: 24px;
    color: #3E3E51;
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
        font-family: 'Lato', sans-serif;
        font-weight: 500;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: #FFFFFF;
        background: #32BD1B;
        box-shadow: 0px 4px 21px rgba(143, 153, 186, 0.7);
        border-radius: 100px;
        &:nth-child(1) {
          width: 240px;
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
.map-btns1 {
  position: fixed;
  transform: translateX(1200px) translateY(-1054px) !important;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media(max-width: 1500px) {
    transform: translateX(761px) translateY(-1064px) !important;
  }
  & button {
    background: #ffff;
    box-shadow: 0px 4px 21px rgba(143, 153, 186, 0.7);
    color: #000;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    border-radius: 100px;
    width: 80px;
    height: 35px;
    margin: 20px;
    cursor: pointer;
    padding: 5px;

    &:hover {
      transition: .2s ease-in-out;
      background: #32BD1B;
      color: #fff;
    }
  }
}
</style>