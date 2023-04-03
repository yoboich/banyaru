<script setup>
import img1 from "~/assets/img/promotions/1.jpg";
import img3 from "~/assets/img/promotions/3.jpg";
import img4 from "~/assets/img/promotions/6.png";

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
  <section class="discount">
    <div class="discount__nav nav">
      <h1 class="nav__title">Популярные услуги</h1>
      <div class="nav">
        <div class="nav__inner">
          <div
              @click="activeTab = 1"
              :class="[activeTab == 1 ? 'nav__item_active' : '']"
              class="nav__item"
          >
            Все
          </div>
          <div
              @click="activeTab = 2"
              :class="[activeTab == 2 ? 'nav__item_active' : '']"
              class="nav__item"
          >
            Услуги
          </div>
          <div
              @click="activeTab = 3"
              :class="[activeTab == 3 ? 'nav__item_active' : '']"
              class="nav__item"
          >
            Банщики
          </div>
        </div>
      </div>
      <div class="nav__button">
        <UISwiperButton />
      </div>
    </div>
    <div class="wrap">
    <div class="discount__inner">
      <ProductCardRelatedPopular
          v-for="item in relatedProduct"
          :img="item.img"
          :metro="item.metro"
          :type="item.type"
          :name="item.name"
          :walk="item.walk"
          :price="item.price"
      />
    </div>
    <div class="populars">
      <div class="popular__adv adv">
        <div class="adv__text">
          <span>Реклама</span>
          <h3>Гостевые домики Сан-Поль</h3>
        </div>
        <div class="adv__price">22 300 руб.</div>
      </div>
      <div class="popular__adv adv2 adv">
        <div class="adv__text">
          <span>Реклама</span>
          <h3>Гостевые домики Сан-Поль</h3>
        </div>
        <div class="adv__price">22 300 руб.</div>
      </div>
    </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.popular__adv {
  background-image: url("../../assets/img/promotions/8.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  width: 244px;
  height: 342px;
  padding: 60px 65px;
  display: flex;
}
.adv2 {
  background-image: url("../../assets/img/promotions/7.png")!important;
  padding: 60px 31px!important;
  transform: translateX(37px);
}
.wrap {
  display: flex;
  justify-content: space-between;
}
.adv__text {
  font-family: 'Lato', sans-serif;
  color: #FFFFFF;
  span {
    font-weight: 500;
    font-size: 14px;
  }
  h3 {
    font-weight: 700;
    font-size: 16px;
    margin: 23px 0;
  }
}
.adv__price {
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 28px;
  text-align: right;
  color: #32BD1B;
  display: flex;
  align-items: flex-end;
}
.popular {
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  &__inner {
    display: flex;
    gap: 2rem;
  }
  &__cart {
    background: $default-color;
    border-radius: 23px;
    padding: 1rem 2rem 2rem 2rem;
  }
}
.discount {
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border-radius: 23px;
  height: auto;
  padding: 30px;
  &__inner {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
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
</style>
