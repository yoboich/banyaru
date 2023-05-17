<template>
  <footer class="footer">
    <div class="container">
      <ul class="footer__nav">
        <li
          class="footer__nav-item"
          v-for="(name, i) of buttons"
          :class="{ active: activeBtn === i }"
          @click="activeBtn = i"
          :key="i"
        >
          <button class="footer__nav-btn">{{ name }}</button>
        </li>
      </ul>
      <div class="footer__inner">
        <div class="footer__inner-col">
          <div class="flex">
            <img src="~/assets/img/logo-gray-text.svg" alt="" />
            <p class="footer__text">
              Ведущий тематический портал о банях и саунах России, банных
              услугах и товарах* * По данным сервиса SimilarWeb на февраль 2021
              года
            </p>
          </div>
          <p class="footer__text">
            Banya.ru — достоверная база данных об аренде и продаже бань и саун,
            услуг и товаров для бань
          </p>
        </div>
        <div class="footer__inner-col">
          <p class="footer__text">
            БАНЯ.РУ — крупнейший в России каталог бань и саун, услуг, товаров и
            готовых бань. Использование сайта означает согласие с
            Пользовательским соглашением и Политикой конфиденциальности.
            Оплачивая лицензионный платеж, вы принимаете Лицензионное
            соглашение.
          </p>
          <div class="footer__subscribe">
            <h3 class="footer__subscribe-title">
              Подпишитесь на новые объявления и новости Баня.ру
            </h3>
            <form action="" class="footer__subscribe-form flex">
              <input
                class="footer__subscribe-input"
                type="text"
                placeholder="Адрес электроной почты"
              />
              <button type="button" class="footer__subscribe-btn">
                Подписаться
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="container flex">
        <span class="footer__bottom-copyright"
          >2022 © ООО "Баня.ру" - Бани и сауны ОГРН 1187746492120 Предложения и
          условия не являются публичной афертой</span
        >
        <div class="footer__bottom-socials">
          <a
            :href="link"
            class="footer__bottom-social"
            v-for="{ icon, link } of socials"
            :key="icon"
          >
            <img :src="getLocalUrl(`img/socials/${icon}.svg`)" alt="" />
          </a>
        </div>
        <div class="footer__bottom-age">18+</div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const buttons = ["Бани и сауны", "Номера", "Услуги", "Предбанник"];

const activeBtn = ref(0);

const socials = [
  {
    icon: "vk",
    link: "#",
  },
  {
    icon: "fb",
    link: "#",
  },
  {
    icon: "inst",
    link: "#",
  },
  {
    icon: "yt",
    link: "#",
  },
  {
    icon: "dzen",
    link: "#",
  },
  {
    icon: "twitter",
    link: "#",
  },
];
</script>

<style lang="scss" scoped>
.footer {
  padding-top: 20px;
  background: #fff;
  border: 1px solid #dadeec;
  border-radius: 25px;
  margin: 15px 15px 80px;
  position: relative;

  &__nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    margin-bottom: 65px;

    @media (max-width: 1000px) {
      display: none;
    }

    &-item {
      position: relative;

      &.active {
        .footer__nav-btn {
          color: $green-color;
        }

        &::before {
          opacity: 1;
        }
      }

      &::before {
        content: "";
        width: 100%;
        height: 3px;
        background: $green-color;
        border-radius: 3px;

        position: absolute;
        bottom: -10px;
        left: 0;
        opacity: 0;
        transition: all 0.2s;
      }

      &::after {
        content: "";
        width: 1px;
        height: 100%;
        background: #e1e5f2;
        position: absolute;
        right: -10px;
        transform: translateX(50%);
        pointer-events: none;
      }

      &:last-of-type {
        &::after {
          display: none;
        }
      }
    }

    &-btn {
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;

      padding: 0 20px;
      background: transparent;

      transition: all 0.2s;
      cursor: pointer;

      &:focus {
        outline: none;
      }
    }
  }

  & > .container {
    padding-bottom: 40px;

    @media (max-width: 1300px) {
      padding-bottom: 60px;
    }
  }

  &__inner {
    display: flex;
    justify-content: space-between;
    // flex-wrap: wrap;
    gap: 30px;

    @media (max-width: 1000px) {
      width: fit-content;
      margin: 0 auto;
      flex-wrap: wrap;
      gap: 0;
    }

    &-col {
      &:first-of-type {
        width: 100%;
        max-width: 500px;

        .flex {
          gap: 30px;

          img {
            height: 30px;
          }

          .footer__text:first-of-type {
            margin-bottom: 20px;
          }
        }

        .footer__text {
          @media (max-width: 1300px) {
            margin-bottom: 20px;
          }
        }
      }

      &:last-of-type {
        max-width: 700px;
        width: 100%;

        .footer__text {
          margin-bottom: 20px;
        }
      }
    }
  }

  &__text {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: $secondary-color;
  }

  &__subscribe {
    &-title {
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 20px;
    }

    .flex {
      align-items: center;
      gap: 25px;
    }

    &-input {
      background: #ffffff;
      border: 2px solid #dadeec;
      border-radius: 100px;
      padding: 8.5px 40px;
      max-width: 340px;
      width: 100%;
      height: 35px;

      &:focus {
        outline: none;
      }
    }

    &-btn {
      padding: 5px 70px;
      height: 35px;
      background: #ffffff;
      border: 2px solid #dadeec;
      border-radius: 100px;
      font-weight: 500;
      font-size: 20px;
      line-height: 100%;
      cursor: pointer;
    }
  }

  &__bottom {
    width: calc(100% - 40px);

    padding: 25px 20px;
    background: #fff;
    border: 1px solid #dadeec;
    border-radius: 25px;

    transform: translate(-50%, 60px);
    position: absolute;
    left: 50%;
    bottom: 0;

    .container {
      justify-content: space-between;
      align-items: center;
      gap: 85px;
    }

    &-copyright {
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: $secondary-color;
    }

    &-socials {
      display: flex;
      align-items: center;
      gap: 10px;

      margin-left: auto;
    }

    &-social {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      padding: 0;
      //   background: #3e3e51;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
      }
    }

    &-age {
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
      border: 3px solid #3e3e51;
      padding: 1px;
    }
  }
}
</style>
