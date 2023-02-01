<template>
  <footer class="footer">
    <div class="container">
      <ul class="nav">
        <li class="nav__item">
          <nuxt-link class="nav__link" to="/1">Бани и&nbsp;сауны</nuxt-link>
        </li>
        <li class="nav__item">
          <nuxt-link class="nav__link" to="/">Номера</nuxt-link>
        </li>
        <li class="nav__item">
          <nuxt-link class="nav__link" to="/3">Услуги</nuxt-link>
        </li>
        <li class="nav__item">
          <nuxt-link class="nav__link" to="/4">Предбанник</nuxt-link>
        </li>
      </ul>

      <div class="information">
        <div class="information__item">
          <div class="information__logo">
            <img src="@/assets/img/logo2.png" alt="" />
            <p class="information__text">
              Ведущий тематический портал о&nbsp;банях и&nbsp;саунах России,
              банных услугах и&nbsp;товарах* <br />
              * По&nbsp;данным сервиса SimilarWeb на&nbsp;февраль 2021 года
            </p>
          </div>

          <p class="information__text">
            <b>Banya.ru</b>&nbsp;&mdash; достоверная база данных об&nbsp;аренде
            и&nbsp;продаже бань и саун, услуг и&nbsp;товаров для бань
          </p>
        </div>

        <div class="information__item">
          <p class="information__text">
            <span class="information__text information__text_black"
              >БАНЯ.РУ</span
            >
            &mdash;&nbsp;крупнейший в&nbsp;России каталог бань и&nbsp;саун,
            услуг, товаров и&nbsp;готовых бань. Использование сайта означает
            согласие с&nbsp; <b>Пользовательским соглашением</b> и&nbsp;<b>Политикой
            конфиденциальности</b>. Оплачивая лицензионный платеж,
            вы&nbsp;принимаете <b>Лицензионное соглашение</b>.
          </p>
          <div class="subscribe">
            <p>Подпишитесь на&nbsp;новые объявления и&nbsp;новости Баня.ру</p>
            <div class="subscribe__item">
              <input placeholder="Адрес электронной почты" type="text" />
              <button class="btn btn-green">Подписаться</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <div class="container">
        <div class="copyright__content">
          <p class="copyright__text">
            2022&nbsp;&copy; ООО &laquo;Баня.ру&raquo;&nbsp;&mdash; Бани
            и&nbsp;сауны ОГРН 1187746492120
            <span class="copyright__text copyright__text_small">
              Предложения и условия не&nbsp;являются публичной афертой
            </span>
          </p>

          <img src="@/assets/img/partners/halva.png" alt="" />
          <div class="copyright__social-links">
            <img src="@/assets/img/social/vk.svg" alt="" />
            <img src="@/assets/img/social/facebook.svg" alt="" />
            <img src="@/assets/img/social/instagram.svg" alt="" />
            <img src="@/assets/img/social/youtube.svg" alt="" />
            <img src="@/assets/img/social/dzen.svg" alt="" />
            <img src="@/assets/img/social/twitter.svg" alt="" />
          </div>
          <div class="copyright__icon">18+</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: $default-color;
  padding-top: 1.6rem;
  margin-top: 2rem;
  box-shadow: 0px -6px 50px rgba(166, 175, 203, 0.16);
}
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5.6rem;
  margin-bottom: 7rem;
  &__item {
    position: relative;
    &::after{
      content: '';
      position:absolute;
      width: .1rem;
      height: 100%;
      top: 0;
      right: -2.4rem;
      background: #E1E5F2;
    }
  &:last-child::after{
    width: 0;
  }
  }
  &__link {
  }
}
.router-link-active{
  color: $green-color;
  font-size: 1.6rem;
  font-family: "Lato-Bold";
}
.information {
  display: flex;
  justify-content: center;
  gap: 15.9rem;
  & img {
    max-width: 10.7rem;
    max-height: 3rem;
  }
  &__item:nth-child(1) {
    max-width: 54rem;
    width: 100%;
  }
  &__item:nth-child(2) {
    max-width: 68.1rem;
    width: 100%;
  }
  &__logo {
    display: flex;
    gap: 3rem;
    margin-bottom: 1.8rem;
  }
  &__text {
    font-family: "Lato-Regular";
    color: $secondary-color;
  }
  &__text_black {
    color: $mainFontColor;
  }
}
.subscribe {
  display: flex;
  flex-direction: column;
  gap: 1.9rem;
  & p {
    padding: 1.9rem 0 0 1.9rem;
  }
  &__item {
    display: flex;
    gap: 3.1rem;
  }
  & input {
    max-width: 39.6rem;
    width: 100%;
    padding: 0.5rem 1.5rem;
    border: 0.1rem solid #8f99ba;
    border-radius: 10rem;
    &::placeholder {
      color: $secondary-color;
    }
  }
}

.copyright {
  font-family: "Lato-Regular";
  margin-top: 4.4rem;
  padding: 2rem 0 2rem 9rem;
  box-shadow: 0px -6px 50px rgba(166, 175, 203, 0.16);
  &__content {
    display: flex;
    align-items: center;
  }
  &__text {
    margin-right: 2.7rem;
    color: $secondary-color;
    &_small {
      font-size: 1.3rem;
    }
  }
  &__social-links {
    display: flex;
    margin-left: 9.2rem;
    margin-right: 8.9rem;
    gap: 1.2rem;
  }
  &__icon {
    font-size: 1.15rem;
    padding: 0.4rem;
    border: 0.3rem solid $mainFontColor;
  }
}
</style>
