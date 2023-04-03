<template>
  <div class="home-footer">
    <div class="home-footer__title">За банями - на Баня.ру</div>
    <div class="home-footer__text">
      Портал BANYA.RU – это единая площадка, на которой встречаются любители
      лёгкого пара со всей страны. У нас вы можете быстро подобрать близкое для
      вас заведение на карте или при помощи удобного фильтра. Мы поможем
      подобрать профессионального банщика или массажиста, номер на час,
      необходимые для похода в сауну товары.
    </div>
    <div class="home-footer__link">
      <span>Читать далее</span>
    </div>
    <div class="home-footer__inner">
      <div class="home-footer__copyright">©2023 Баня.ру</div>
      <button class="btn btn-white">Установить приложение</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-footer {
  &__title {
    font-weight: 700;
    font-size: 2.6rem;
    line-height: 100%;
    margin-bottom: 1.4rem;
    padding: 0 2rem;
  }
  &__text {
    padding: 0 2rem;
    color: $secondary-color;
    font-weight: 500;
    font-size: 1.1rem;
    line-height: 1.3rem;
    margin-bottom: 1.3rem;
  }
  &__link {
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
    & span {
      color: $green-color;
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 1.8rem;
    }
    & img {
      transform: rotate(-90deg);
    }
  }
  &__inner {
    padding: 0;
    margin-top: 4.9rem;
    padding: 1.4rem 3.9rem 3rem 3.9rem;
    background: #ffffff;
    box-shadow: 0px 6px 50px rgba(166, 175, 203, 0.16);
    border-radius: 23px 23px 0 0;
    & button {
      display: flex;
      justify-content: center;
      width: 100%;
      max-width: 31rem;
      font-weight: 500;
      font-size: 2rem;
      line-height: 100%;

    }
  }
  &__copyright {
    text-align: center;
    font-weight: 500;
    font-size: 1.1rem;
    line-height: 1.5rem;
    margin-bottom: 1rem;
  }
}
</style>
