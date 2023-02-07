<script setup>
import img1 from "~/assets/img/promotions/1.jpg";
import img2 from "~/assets/img/promotions/2.jpg";
import img3 from "~/assets/img/promotions/3.jpg";

const relatedProduct = ref([
  {
    type: "Сауны",
    name: "Сауна Дионис-СПА",
    img: img1,
    metro: "Павелецкая",
    walk: "13 мин пешком",
    price: "22 300",
  },
  {
    type: "Сауны",
    name: "Сауна Дионис-СПА",
    img: img2,
    metro: "Павелецкая",
    walk: "13 мин пешком",
    price: "22 300",
  },
  {
    type: "Сауны",
    name: "Гостевые домики Сан-Поль",
    img: img3,
    metro: "Павелецкая",
    walk: "13 мин пешком",
    price: "22 300",
  },
  {
    type: "Сауны",
    name: "Мини-отель Беседка",
    img: img1,
    metro: "Павелецкая",
    walk: "13 мин пешком",
    price: "22 300",
  },
  {
    type: "Сауны",
    name: "Баня-сауна отеля Катюша",
    img: img2,
    metro: "Павелецкая",
    walk: "13 мин пешком",
    price: "22 300",
  },
]);
</script>

<template>
  <section class="discount">
    <div class="discount__nav nav">
      <h2 class="nav__title">Выгодные предложения и акции</h2>
      <ul class="nav__list">
        <li class="nav__item">Бани и сауны</li>
        <li class="nav__item nav__item_active">Номера</li>
        <li class="nav__item">Услуги</li>
        <li class="nav__item">Предбанник</li>
      </ul>
      <div class="nav__button">
        <UISwiperButton />
      </div>
    </div>
    <div class="discount__inner">
      <ProductCardRelatedRequest
        v-for="item in relatedProduct"
        :img="item.img"
        :metro="item.metro"
        :type="item.type"
        :name="item.name"
        :walk="item.walk"
        :price="item.price"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.discount {
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  &__inner {
    display: flex;
    gap: 2rem;
  
  }
  &__cart{
    background: $default-color;
    border-radius: 23px;
    padding: 1rem 2rem 2rem 2rem;
  }
}
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5rem;
  &__title {
    font-family: "Gilroy";
    font-size: 2.6rem;
    line-height: 2.6rem;
  }
  &__list {
    display: flex;
    gap: 7.5rem;
  }
  &__item {
    &_active {
      position: relative;
      font-size: 1.6rem;
      color: $green-color;
      &::after {
        content: "";
        width: 100%;
        height: 0.4rem;
        position: absolute;
        top: 3rem;
        left: 0;
        right: 0;
        opacity: 1;
        background: $green-color;
        border-radius: 2px 2px 0px 0px;
      }
    }
  }
}
</style>
