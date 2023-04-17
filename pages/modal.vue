<script setup>
import { useWindowSize } from '@vueuse/core';
const isLarge = ref(true);
const modal = ref(true)

const close = () => {
  modal.value = false
}

const { width } = useWindowSize();
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
  layout: 'modal',
});
</script>

<template>
  <ClientOnly fallback-tag="span" fallback="Loading comments...">
    <div class="wrappers">
      <div class="wrapperr">
        <div class="wrapperr__products">
          <div class="close">
            <nuxt-link :to="'/main-order'"><img class="product-wraps-image" src="../assets/img/product/close.png" alt="close-image"></nuxt-link>
          </div>
          <div class="wrapperr__profile">
            <div class="logo-profiles">
              <img src="../assets/img/product/profile-logo2.png" alt="profile-logo" class="profile__image">
            </div>
            <img src="../assets/img/product/profile-logo.png" alt="profile-logo" class="profile__img">
            <div class="profile-text">
              <h2>Сауна цветы</h2>
              <h2>от 2 000 ₽<br>
                Администратор</h2>
              <span>был(а) 15 мин. назад</span>
            </div>
          </div>
        </div>
        <div class="edit">
          <img src="../assets/img/product/edit.png" alt="edit">
        </div>
      </div>
      <div class="wrap-content">
        <div class="wrap-content-product" v-if="modal">
          <div class="wrap-content-product-header">
            <h2>Раскажите, в чем заключается проблема.</h2>
            <div class="closes" @click="close">
              <img src="../assets/img/product/close2.png" alt="close">
            </div>
          </div>
          <ul>
            <li>Наверное расположение</li>
            <li>Низкое качество</li>
            <li>Порнография или содержание сексуального характера</li>
            <li>Дискриминационные высказывания или проявление ненависти</li>
            <li>Спам</li>
            <li>Контент, запрещенный авторскими правами</li>
          </ul>
        </div>
      </div>
      <div class="wrap-content-footer">
        <button>
          <img src="../assets/img/product/phone.png" alt="phone">
          <span>+7 999 333 14 ...</span>
        </button>
        <button>
          <img src="../assets/img/product/message.png" alt="message">
          <span>Чат</span>
        </button>
        <button>
          <img src="../assets/img/product/count.png" alt="count">
          <span>Расчет брони</span>
        </button>
        <button>
          <img src="../assets/img/product/send.png" alt="send">
          <span>Отправить</span>
        </button>
        <button>
          <img src="../assets/img/product/map.png" alt="map">
          <span>Маршрут</span>
        </button>
        <button>
          <img src="../assets/img/product/taxi.png" alt="map">
          <span>Такси</span>
        </button>
        <img src="../assets/img/product/heart.png" alt="heart" class="heart">
      </div>
    </div>
  </ClientOnly>
</template>

<style scoped lang="scss">
.wrappers {
  background-image: url("../assets/img/product-background.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  .wrapperr {
    display: flex;
    justify-content: space-between;
    padding: 30px 20px;
    &__products {
      display: flex;
      align-items: center;
    }
    .product-wraps-image {
      width: 80px;
      height: 80px;
    }
    &__profile {
      display: flex;
      align-items: center;
      .profile__image {
        width: 100px;
        height: 76px;
      }
      .profile-text {
        margin: 0 10px 0;
        h2 {
          font-family: 'Lato', sans-serif;
          font-weight: 700;
          font-size: 16px;
          color: #FFFFFF;
        }
        span {
          font-family: 'Lato', sans-serif;
          font-weight: 500;
          font-size: 11px;
          color: #FFFFFF;
        }
      }
    }
  }
  .wrap-content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70vh;
    &-product {
      width: 572px;
      height: 365px;
      background: #FFFFFF;
      box-shadow: 0px 20px 56px rgba(123, 129, 148, 0.16);
      border-radius: 23px;
      padding: 30px;
      &-header {
        display: flex;
        img {
          width: 15px;
          height: 15px;
          transform: translateX(15px);
        }
        h2 {
          font-family: 'Lato', sans-serif;
          font-weight: 700;
          font-size: 28px;
          color: #3E3E51;
        }
      }
      ul {
        margin: 25px 0 0;
        li {
          font-family: 'Lato', sans-serif;
          font-weight: 600;
          font-size: 16px;
          color: #3E3E51;
          border-bottom: 1px solid #8F99BA22;
          padding: 12px 0;
        }
      }
    }
  }
  .wrap-content-footer {
    display: flex;
    padding: 30px 30px 0;
    align-items: center;
    button {
      background: rgba(0, 0, 0, 0.3);
      border: 2px solid #FFFFFF;
      box-shadow: 0px 4px 21px rgba(143, 153, 186, 0.7);
      border-radius: 100px;
      padding: 5px 15px;
      height: 40px;
      margin: 0 5px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &:nth-child(1) {
        background: rgba(255, 255, 255, 0.3);
      }
      img {
        width: 20px;
      }
      span {
        font-family: 'Lato', sans-serif;
        font-weight: 500;
        font-size: 18px;
        text-align: center;
        color: #FFFFFF;
        margin: 0 10px;
      }
    }
    .heart {
      width: 70px;
      height: 70px;
    }
  }
}
.edit img {
  width: 80px;
  height: 80px;
}
.logo-profiles img {
  width: 32px!important;
  height: 32px!important;
  transform: translateY(-25px) translateX(25px);
}
.closes{
  cursor: pointer;
}
</style>
