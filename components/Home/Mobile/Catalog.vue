<template>
  <div class="catalog">
    <div class="catalog__header">
      <h1 class="catalog-title">Каталог</h1>
      <nuxt-link class="catalog-link" to="#">Все</nuxt-link>
    </div>
    <div class="catalog__content">
      <nuxt-link to="#" class="catalog-item" v-for="i of 4" :key="i">
        <img src="~/assets/img/icon/hand-green.svg" alt="" />
        <span>Массаж</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.catalog {
  margin-bottom: 30px;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }

  &-title {
    font-weight: 700;
    font-size: 28px;
    line-height: 100%;
  }

  &-link {
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    color: #17a300;
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    aspect-ratio: 1;

    background: #ffffff;
    border: 2px solid #dadeec;
    border-radius: 25px;

    span {
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
    }

    img {
      width: 40px;
    }
  }
}
</style>
