<template>
  <div class="home-footer">
    <div class="container">
      <HomeMobileFooterLinks />
      <div class="home-footer__title">За банями - на Баня.ру</div>
      <div class="home-footer__text">
        Портал BANYA.RU – это единая площадка, на которой встречаются любители
        лёгкого пара со всей страны. У нас вы можете быстро подобрать близкое
        для вас заведение на карте или при помощи удобного фильтра. Мы поможем
        подобрать профессионального банщика или массажиста, номер на час,
        необходимые для похода в сауну товары.
      </div>
      <button class="home-footer__btn">
        <nuxt-link to="#">
          <span>Читать далее</span>
          <IconBase icon="arrow-left" color="green" />
        </nuxt-link>
      </button>
    </div>
    <div class="home-footer__inner">
      <div class="home-footer__copyright">©2023 Баня.ру</div>
      <button class="home-footer__btn-install" @click="$pwa.install()">Установить приложение</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-footer {
  &__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    margin-bottom: 10px;
  }
  &__text {
    font-weight: 500;
    font-size: 11px;
    line-height: 13px;
    color: $gray;
    margin-bottom: 10px;
  }

  &__btn-install {
    border: 2px solid #DADEEC;
    border-radius: 100px;
    padding: 15px 40px;
    font-size: 20px;
    line-height: 100%;
  }

  &__btn {
    padding: 0;
    background: transparent;
    display: flex;
    margin-left: auto;
    margin-bottom: 50px;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
    & span {
      color: $green;
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;
    }

    svg {
      transform: rotate(180deg);
      height: 14px;
    }
  }
  &__inner {
    padding: 15px 15px 130px;
    box-shadow: 0px 6px 50px rgba(166, 175, 203, 0.16);
    border-radius: 20px 20px 0 0;
    text-align: center;

    .btn {
      padding: 15px 35px;
      border: 2px solid #dadeec;
      background: #fff;
      font-weight: 500;
      font-size: 20px;
      line-height: 100%;
      margin-bottom: 20px;
    }
  }

  &__copyright {
    font-weight: 500;
    font-size: 11px;
    line-height: 15px;
    color: $gray;
    text-align: center;
    margin-bottom: 10px;
  }
}
</style>
