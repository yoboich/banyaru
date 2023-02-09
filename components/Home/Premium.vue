<script setup>
import img1 from "~/assets/img/promotions/1.jpg";
import img2 from "~/assets/img/promotions/2.jpg";
import img3 from "~/assets/img/promotions/3.jpg";

const product = ref([
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
]);
</script>

<template>
  <section class="premium">
    <div class="premium__nav nav">
      <h2 class="nav__title">Премиум сауны</h2>
      <ul class="nav__list">
        <li class="nav__item">Бани и сауны</li>
        <li class="nav__item nav__item_active">Номера</li>
        <li class="nav__item">Услуги</li>
        <li class="nav__item">Предбанник</li>
      </ul>
      <nuxt-link class="nav__button btn btn-green" to="/search"
        >Показать все сауны</nuxt-link
      >
    </div>
    <div class="premium__inner">
      <div v-for="item in product" class="premium__item">
        <div class="premium__desc">
          <div class="premium__title">{{ item.name }}</div>
          <div class="premium__text">
            Портал BANYA.RU – это единая площадка, на которой встречаются
            любители лёгкого пара со всей страны. У нас вы можете быстро
            подобрать близкое для вас заведение на карте или при помощи удобного
            фильтра.
          </div>
        </div>
        <nuxt-link to="/product/vip" class="premium__card">
          <HomePremiumCard
            :img="item.img"
            :metro="item.metro"
            :type="item.type"
            :name="item.name"
            :walk="item.walk"
            :price="item.price"
          />
        </nuxt-link>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.premium {
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  &__inner {
    display: flex;
    flex-direction: column;
    gap: 6.9rem;
  }
  &__item {
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
    gap: 5rem;
    &::after {
      content: "";
      position: absolute;
      height: 0.1rem;
      width: 45%;
      bottom: -25%;
      left: 1%;
      background-color: #e1e5f2;
    }
    &:last-child::after {
      height: 0;
    }
  }
  &__desc {
    position: relative;
  }
  &__title {
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 2.6rem;
  }
  &__text {
    color: $secondary-color;
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
  &__button {
    font-size: 1.6rem;
    font-weight: 700;
    padding: 1.5rem 2.2rem;
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
