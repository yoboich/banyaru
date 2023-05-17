<template>
  <div class="interesting">
    <h1 class="interesting-title">Полезные ссылки</h1>
    <div class="interesting__items">
      <div class="interesting__item" v-for="i of 3" :key="i">
        <nuxt-link class="interesting__item-image" to="#"
          ><img src="~/assets/img/promotions/2.jpg" alt=""
        /></nuxt-link>
        <h1 class="interesting__item-title">Популярные бани</h1>
        <ul class="interesting__links">
          <li class="interesting__links-item" v-for="i of 3" :key="i">
            <nuxt-link to="#"
              ><span class="title">Бани</span>
              <span class="amount">34 220</span></nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.interesting {
  margin-bottom: 30px;

  &-title,
  &__item-title {
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    margin-bottom: 20px;
  }

  &__items {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;

    @media (max-width: 670px) {
      grid-template-columns: 1fr;
    }
  }

  &__item {
    &-image {
      height: 100px;
      display: block;
      border-radius: 10px;
      margin-bottom: 20px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
  }

  &__links {
    &-item {
      position: relative;

      & > a {
        display: block;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;
      }

      // &:not(:last-of-type) {
      //   margin-bottom: 10px;
      // }

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: $secondary-color;
        opacity: 0.2;
      }

      .title {
        color: $green-color;
        font-weight: 500;
        font-size: 16px;
        line-height: 18px;
      }

      .amount {
        color: $secondary-color;
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
      }
    }
  }
}
</style>
