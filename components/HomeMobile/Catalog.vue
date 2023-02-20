<template>
  <div class="catalog">
    <div class="catalog__top">
      <div class="catalog__title">Каталог</div>
      <div class="catalog__all">Все</div>
    </div>
    <div class="catalog__inner">
      <div class="catalog__item">
        <img src="@/assets/img/promotions/2.jpg" alt="" />
        <div class="catalog__category">Сауны</div>
        <div class="catalog__name">Сауна Дионис-СПА</div>
        <div class="catalog__price">22 300</div>
      </div>
      <div class="catalog__item">
        <img src="@/assets/img/promotions/2.jpg" alt="" />
        <div class="catalog__category">Сауны</div>
        <div class="catalog__name">Сауна Дионис-СПА</div>
        <div class="catalog__price">22 300</div>
      </div>
      <div class="catalog__item">
        <img src="@/assets/img/promotions/2.jpg" alt="" />
        <div class="catalog__category">Сауны</div>
        <div class="catalog__name">Сауна Дионис-СПА</div>
        <div class="catalog__price">22 300</div>
      </div>
      <div class="catalog__item">
        <img src="@/assets/img/promotions/2.jpg" alt="" />
        <div class="catalog__category">Сауны</div>
        <div class="catalog__name">Сауна Дионис-СПА</div>
        <div class="catalog__price">22 300</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.catalog {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  &__top {
    display: flex;
    justify-content: space-between;
    align-items:center
  }
  &__title {
    font-weight: 700;
    font-size: 2.6rem;
    line-height: 100%;
  }
  &__all {
    color: $green-color;
  }
  &__inner {
    margin-top: 2.4rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
    row-gap: 3.5rem;
  }
  &__item {
    display: flex;
    flex-direction: column;
  }
  &__category {
    color: $secondary-color;
    font-size: 1.4rem;
    line-height: 1.8rem;
    margin-bottom: 0.5rem;
    margin-top: 0.8rem;
  }
  &__price {
    margin-top: 2.6rem;
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 2rem;
  }
  & img {
    max-width: 17rem;
    width: 100%;
    filter: drop-shadow(1px 7px 22px rgba(166, 175, 205, 0.58));
    border-radius: 12px;
  }
}
</style>
