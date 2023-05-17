<template>
  <div class="adverts">
    <div class="adverts__title">Объявления по всей России</div>
    <div class="adverts__inner">
      <div class="adverts__item">
        <div class="adverts__name">Москва</div>
        <img src="@/assets/img/icon/select-green.svg" alt="" />
      </div>
      <div class="adverts__item">
        <div class="adverts__name">Санкт-Петербург</div>
        <img src="@/assets/img/icon/select-green.svg" alt="" />
      </div>
      <div class="adverts__item">
        <div class="adverts__name">Адыгея</div>
        <img src="@/assets/img/icon/select-green.svg" alt="" />
      </div>
      <div class="adverts__item">
        <div class="adverts__name">Алтай (Республика)</div>
        <img src="@/assets/img/icon/select-green.svg" alt="" />
      </div>
      <div class="adverts__item">
        <div class="adverts__name">Алтайский край</div>
        <img src="@/assets/img/icon/select-green.svg" alt="" />
      </div>
      <div class="adverts__item">
        <div class="adverts__name">Показать все регионы</div>
        <img src="@/assets/img/icon/select-green.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.adverts {
  padding: 0 2rem;
  margin-top: 5rem;
  &__title {
    font-weight: 700;
    font-size: 2.6rem;
    line-height: 100%;
    margin-bottom: 2.2rem;
    padding-right: 1rem;
  }
  &__inner {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 5rem;
  }
  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1.1rem;
    border-bottom: 0.1rem solid rgba(143, 153, 186, 0.2);
    & img {
      transform: rotate(-90deg);
    }
  }
  &__name {
    color: #32BD1B;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.8rem;
  }
}
</style>
