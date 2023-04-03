<script setup>
import img1 from "~/assets/img/promotions/1.jpg";
import img3 from "~/assets/img/promotions/3.jpg";
import img4 from "~/assets/img/promotions/6.png";
import message from "~/assets/img/promotions/icon1.png";
import eye from "~/assets/img/promotions/icon2.png";
import line from "~/assets/img/promotions/line.png";
import home from "~/assets/img/promotions/home.png";
import like from "~/assets/img/promotions/like.png";
import logo from "~/assets/img/promotions/logo.png";
import big_line from "~/assets/img/promotions/big-line.png";
import sauna from "~/assets/img/promotions/sauna.png";
import down from "~/assets/img/promotions/down.png";

let activeTab = ref(1);
const relatedProduct = ref([
  {
    name: "Сауна Дионис-СПА",
    img: img1,
    metro: "Павелецкая",
    walk: "13 мин пешком",
    price: "от 22 300 ₽",
  },
  {
    name: "Сауна Дионис-СПА",
    img: img1,
    metro: "Павелецкая",
    walk: "13 мин пешком",
    price: "от 22 300 ₽",
  },
  {
    name: "Сауна Дионис-СПА",
    img: img3,
    metro: "Павелецкая",
    walk: "13 мин пешком",
    price: "от 22 300 ₽",
  },
  {
    name: "Сауна Дионис-СПА",
    img: img4,
    metro: "Павелецкая",
    walk: "13 мин пешком",
    price: "от 22 300 ₽",
  },
  {
    name: "Сауна Дионис-СПА",
    img: img1,
    metro: "Павелецкая",
    walk: "13 мин пешком",
    price: "от 22 300 ₽",
  },
  {
    name: "Сауна Дионис-СПА",
    img: img3,
    metro: "Павелецкая",
    walk: "13 мин пешком",
    price: "от 22 300 ₽",
  },
]);
</script>

<template>
  <section class="page">
    <section class="discount">
      <div class="discount__nav nav">
        <h1 class="nav__title">Новости</h1>
      </div>
      <div class="discount__nav nav wrappers">
        <h1 class="nav__title" style="font-size: 20px">Новые бани в Москве</h1>
        <div class="flex-wrap df">
          <div class="child-wrap df">
            <img :src="message" alt="message" class="wrap-image">
            <span>2</span>
          </div>
          <img :src="line" alt="line">
          <div class="child-wrap df">
            <span>124</span>
            <img :src="eye" alt="message" class="wrap-images">
          </div>
          <img :src="line" alt="line">
          <div class="child-wrap">
            <span>20.03.2023</span>
          </div>
        </div>
      </div>
      <div class="main-wrap">
        <img :src="home" alt="home">
        <h2>Бани краткое описание, что входит, отдых</h2>
        <div class="main-wrap__main-wrap-footer">
          <div class="first main-wrap-child">
            <img :src="logo" alt="logo">
            <h4>Баня.ру</h4>
          </div>
          <div class="first main-wrap-child">
            <h4>3</h4>
            <img :src="like" alt="like">
          </div>
        </div>
      </div>
      <div class="border">
        <img :src="big_line" alt="big-line">
      </div>
      <div class="discount__nav nav wrappers">
        <h1 class="nav__title" style="font-size: 20px">Новые бани в Москве</h1>
        <div class="flex-wrap df">
          <div class="child-wrap df">
            <img :src="message" alt="message" class="wrap-image">
            <span>2</span>
          </div>
          <img :src="line" alt="line">
          <div class="child-wrap df">
            <span>124</span>
            <img :src="eye" alt="message" class="wrap-images">
          </div>
          <img :src="line" alt="line">
          <div class="child-wrap">
            <span>20.03.2023</span>
          </div>
        </div>
      </div>
      <div class="main-wrap">
        <img :src="home" alt="home">
        <h2>Бани краткое описание, что входит, отдых</h2>
        <div class="main-wrap__main-wrap-footer">
          <div class="first main-wrap-child">
            <img :src="logo" alt="logo">
            <h4>Баня.ру</h4>
          </div>
          <div class="first main-wrap-child">
            <h4>3</h4>
            <img :src="like" alt="like">
          </div>
        </div>
      </div>
    </section>
    <section class="discount-content">
      <div class="discount__nav nav">
        <h1 class="nav__title">Реклама</h1>
      </div>
      <div class="discount-product">
        <img :src="home" alt="home" class="home-image">
        <h4>Баня в  москве</h4>
        <p>В Москве открылась новая сеть банных<br> омплексов<br>
          в районе метро ВДНХ...</p>
        <img :src="big_line" alt="big-line" class="line-big">
      </div>
      <div class="discount-product">
        <img :src="home" alt="home" class="home-image">
        <h4>Баня в  москве</h4>
        <p>В Москве открылась новая сеть банных<br> омплексов<br>
          в районе метро ВДНХ...</p>
      </div>
      <div class="sauna-image">
        <img :src="sauna" alt="sauna-image">
      </div>
      <div class="down-image">
        <img :src="down" alt="down-image">
      </div>
    </section>
  </section>
</template>

<style lang="scss" scoped>
.page {
  display: flex;
  margin-top: 11rem;
}
.main-wrap {
  img {
    width: 100%;
    margin-top: 20px;
  }
  h2 {
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #3E3E51;
    padding-top: 35px;
  }
  &__main-wrap-footer {
    display: flex;
    justify-content: space-between;
    .main-wrap-child {
      display: flex;
      align-items: center;
      img {
        width: 100px;
      }
      h4 {
        font-family: 'Lato', sans-serif;
        font-weight: 500;
        font-size: 14px;
        color: #3E3E51;
        padding: 15px 0 0;
      }
    }
  }
}
.sauna-image {
  margin: 40px 0 0;
}
.border  img {
  width: 100%;
  margin: 30px 0;
}
.df {
  display: flex;
  align-items: center;
}
.child-wrap {
  margin: 0 10px;
}
.wrap-image{
  margin: 0 20px;
}
.wrap-images {
  margin: 0 3px 0 14px;
}
.discount {
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border-radius: 23px;
  height: auto;
  padding: 30px;
  width: 66%;
  &__inner {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    max-width: 80%;
  }
  &__cart{
    background: $default-color;
    border-radius: 23px;
    padding: 1rem 2rem 2rem 2rem;
  }
}
.nav {
  &__inner {
    display: flex;
    align-items: center;
    &__item {
      color: #3E3E51;
      padding: 2.35rem 3.4rem 1.95rem;
      border: none;
      background: #ffffff;
      box-shadow: 0px -12px 15px rgba(136, 152, 206, 0.19);
      border-radius: 6px 6px 0px 0px;
      &_active {
        color: #17A300;
        padding: 2.35rem 3.4rem 1.95rem;
        border: none;
        background: #ffffff;
        box-shadow: 0px -12px 15px rgba(136, 152, 206, 0.19);
        border-radius: 6px 6px 0px 0px;
      }
    }
  }
}
.nav {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.nav__inner {
  display: flex;
  align-items: center;
}
.nav__item {
  color: #3E3E51;
  padding: 2.35rem 3.4rem 1.95rem;
  background: #fff;
  border-radius: 6px 6px 0px 0px;
  box-shadow: 0px -12px 15px rgba(136, 152, 206, 0.19);
  border-left: rgba(143, 153, 186, 0.15);
  border-bottom: rgba(143, 153, 186, 0.15);
  opacity: .15;
  &_active {
    color: #17A300;
    padding: 2.35rem 3.4rem 1.95rem;
    border: none;
    background: #ffffff;
    box-shadow: 0px -12px 15px rgba(136, 152, 206, 0.19);
    border-radius: 6px 6px 0px 0px;
    opacity: 1;
  }
}
.wrappers {
  margin-top: 20px;
}
.discount-content {
  background: #FFFFFF;
  border-radius: 23px;
  width: 30%;
  height: 1400px;
  padding: 25px;
  margin: 0 30px 0;
  position: relative;
  .discount-product {
    h4 {
      font-family: 'Lato', sans-serif;
      color: #3E3E51;
      font-weight: 700;
      font-size: 16px;
      margin: 15px 0 0;
    }
    p {
      font-family: 'Lato', sans-serif;
      color: #8F99BA;
      font-weight: 500;
      font-size: 14px;
      margin: 15px 0;
    }
    .home-image {
      width: 300px;
      height: 180px;
    }
    .line-big {
      width: 100%;
      margin: 25px 0;
    }
  }
}
.down-image {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
