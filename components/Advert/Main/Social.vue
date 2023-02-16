<template>
  <div class="social">
    <div class="social__title">Объект в интернете</div>
    <div class="social__subtitle">Если есть</div>
    <div class="social__inner">
      <div class="social__item">
        <div class="social__name">
          Официальный сайт
        </div>
        <input placeholder="Сайт" type="text">
      </div>
      <div class="social__item">
        <div class="social__name">
          Вк
        </div>
        <input placeholder="Ссылка" type="text">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.social {
  margin-top: 7.2rem;
  padding-bottom: 5.9rem;
  border-bottom: 1px solid rgba(143, 153, 186, 0.2);
  &__title {
    font-weight: 700;
    font-size: 2rem;
    line-height: 130%;
    margin-bottom: 1.1rem;
  }
  &__subtitle{
    color: $secondary-color;
    margin-bottom: 2.7rem;
  }
  &__inner{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 6rem;
  }
  &__item{
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }
}
</style>
