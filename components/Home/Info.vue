<script setup>
  const data = [
    {
      name:'Царь-баня на дровах',
      quantity:'3 объектов',
      src:'/product'
    },
    {
      name:'Сауна Остров на Симоновском',
      quantity:'2 объектов',
      src:'/product'
    },
    {
      name:'Сауна Цветы',
      quantity:'2 объектов',
      src:'/product'
    },
    {
      name:'Сауна на Шаболовке',
      quantity:'5 объектов',
      src:'/product'
    },
    {
      name:'Сауна Фламинго',
      quantity:'9 объектов',
      src:'/product'
    },
    {
      name:'Банька на Декабристов',
      quantity:'3 объектов',
      src:'/product'
    },
    {
      name:'Сауна Пандок',
      quantity:'2 объектов',
      src:'/product'
    },
  ]
</script>

<template>
  <section class="info">
    <div class="left">
      <h2 class="left__title">Портал о банях и саунах России - Баня.ру</h2>
      <div class="left__text">
        <p>
          Понравившиеся вам заведения вы можете добавить в Избранное, чтобы
          иметь к ним постоянный и быстрый доступ. Вся база нашего портала
          регулярно проверяется нашими менеджерами, таким образом вы можете быть
          уверены в актуальности представленной информации. Мы регулярно
          проводим проверки качества услуг заведений и используем в работе
          отзывы наших посетителей, благодаря чему можем рекомендовать вам бани
          и сауны с наилучшим сервисом и ценой (отмечены в каталоге значком
          VIP).
        </p>
        <p>
          БАНЯ.РУ — крупнейший в России каталог бань и саун, услуг, товаров и
          готовых бань. Использование сайта означает согласие с Пользовательским
          соглашением и Политикой конфиденциальности. Оплачивая лицензионный
          платеж, вы принимаете Лицензионное соглашение.
        </p>
      </div>
      <div class="information">
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
    </div>
    <div class="right">
      <div class="right__title">Банные сети</div>
      <div class="right__inner">
        <div v-for="item in data" class="right__item item">
          <img src="@/assets/img/home/circle-img.png" alt="" />
          <nuxt-link :to="item.src" class="item__info">
            <div class="item__name">{{ item.name }}</div>
            <div class="item__quantity">{{ item.quantity }}</div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.information {
  margin-top: 4.8rem;
  max-width: 54rem;
  width: 100%;
  & img {
    max-width: 10.7rem;
    max-height: 3rem;
  }
  &__logo {
    display: flex;
    gap: 3rem;
    margin-bottom: 1.8rem;
  }
  &__text {
    font-weight: 400;
    color: $secondary-color;
  }
}
.info {
  gap: 14rem;
  margin-top: 11.8rem;
  display: flex;
  margin-bottom: 9rem;
}
.left {
  width: 80%;
  &__title {
    font-family: "Gilroy";
    font-size: 2.6rem;
    margin-bottom: 6.5rem;
  }
  &__text {
    display: flex;
    flex-direction: column;
    gap: 6.5rem;
    color: $secondary-color;
  }
}
.right {
  width: 22%;
  display: flex;
  flex-direction: column;
  &__title {
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 3rem;
  }
  &__inner {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  &__item {
    display: flex;
    align-items:center;
    gap: 1.3rem
  }
}
.item {
  cursor: pointer;
  &__info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  &__quantity {
    color: #8f99ba;
    font-size: 1.1rem;
  }
}
</style>
