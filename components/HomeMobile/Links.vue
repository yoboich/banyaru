<template>
  <div class="links">
    <div class="links__title">Быстрые ссылки</div>
    <div class="links__img">
      <img src="@/assets/img/promotions/3.jpg" alt="" />
    </div>
    <div class="links__subtitle">Снять бани</div>
    <div class="links__inner">
      <div class="links__item">
        <div class="links__name">Бани</div>
        <div class="links__quantity">34 220</div>
      </div>
      <div class="links__item">
        <div class="links__name">Сауны</div>
        <div class="links__quantity">19 220</div>
      </div>
      <div class="links__item">
        <div class="links__name">Услуги и товары</div>
        <div class="links__quantity">4 220</div>
      </div>
      <div class="links__item">
        <div class="links__name">Баня в москве с бассейном</div>
        <div class="links__quantity">34 220</div>
      </div>
    </div>
    <div class="links__img">
      <img src="@/assets/img/promotions/2.jpg" alt="" />
    </div>
    <div class="links__subtitle">Снять сауну</div>
    <div class="links__inner">
      <div class="links__item">
        <div class="links__name">Бани</div>
        <div class="links__quantity">34 220</div>
      </div>
      <div class="links__item">
        <div class="links__name">Сауны</div>
        <div class="links__quantity">19 220</div>
      </div>
      <div class="links__item">
        <div class="links__name">Услуги и товары</div>
        <div class="links__quantity">4 220</div>
      </div>
      <div class="links__item">
        <div class="links__name">Баня в москве с бассейном</div>
        <div class="links__quantity">34 220</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.links {
  padding: 0 2rem;
  margin-top: 5rem;
  &__title {
    font-weight: 700;
    font-size: 2.6rem;
    line-height: 100%;
    margin-bottom: 2.3rem;
  }
  &__subtitle {
    font-weight: 700;
    font-size: 2rem;
    line-height: 130%;
    margin-bottom: 2.3rem;
    margin-top: 3rem;
  }
  &__img {
    & img {
      max-height: 10rem;
      height: 100%;
      width: 100%;
      filter: drop-shadow(0px 18px 38px rgba(123, 129, 148, 0.4));
      border-radius: 12px;
      object-fit: cover;
    }
  }
  &__inner {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 3rem;
  }
  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1.2rem;
    border-bottom: 0.1rem solid rgba(143, 153, 186, 0.2);
  }
  &__name {
    color: #32BD1B;
    font-size: 1.6rem;
    line-height: 1.8rem;
  }
  &__quantity {
    color: $secondary-color;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
}
</style>
