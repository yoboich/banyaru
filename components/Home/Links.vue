<script setup>
const items = [
  {
    title: "Снять сауну",
    links: [
      {
        name: "Spa-терапия",
        quantity: "4000",
        src: "/search",
      },
      {
        name: "Ледяная купель",
        quantity: "2000",
        src: "/search",
      },
      {
        name: "Баня недалеко от метро",
        quantity: "34000",
        src: "/search",
      },
      {
        name: "Банный комплекс повышеной комфортности",
        quantity: "2000",
        src: "/search",
      },
      {
        name: "Ледяная купель",
        quantity: "4000",
        src: "/search",
      },
      {
        name: "Баня недалеко от метро",
        quantity: "34000",
        src: "/search",
      },
      {
        name: "Арендовать сауну на день",
        quantity: "4000",
        src: "/search",
      },
    ],
  },
  {
    title: "Банные комплексы",
    links: [
      {
        name: "Spa-терапия",
        quantity: "4000",
        src: "/search",
      },
      {
        name: "Ледяная купель",
        quantity: "2000",
        src: "/search",
      },
      {
        name: "Баня недалеко от метро",
        quantity: "34000",
        src: "/search",
      },
      {
        name: "Банный комплекс повышеной комфортности",
        quantity: "2000",
        src: "/search",
      },
      {
        name: "Ледяная купель",
        quantity: "4000",
        src: "/search",
      },
      {
        name: "Баня недалеко от метро",
        quantity: "34000",
        src: "/search",
      },
      {
        name: "Арендовать сауну на день",
        quantity: "4000",
        src: "/search",
      },
    ],
  },
  {
    title: "Снять сауну",
    links: [
      {
        name: "Spa-терапия",
        quantity: "4000",
        src: "/search",
      },
      {
        name: "Ледяная купель",
        quantity: "2000",
        src: "/search",
      },
      {
        name: "Баня недалеко от метро",
        quantity: "34000",
        src: "/search",
      },
      {
        name: "Банный комплекс повышеной комфортности",
        quantity: "2000",
        src: "/search",
      },
      {
        name: "Ледяная купель",
        quantity: "4000",
        src: "/search",
      },
      {
        name: "Баня недалеко от метро",
        quantity: "34000",
        src: "/search",
      },
      {
        name: "Арендовать сауну на день",
        quantity: "4000",
        src: "/search",
      },
    ],
  },
  {
    title: "Банные комплексы",
    links: [
      {
        name: "Spa-терапия",
        quantity: "4000",
        src: "/search",
      },
      {
        name: "Ледяная купель",
        quantity: "2000",
        src: "/search",
      },
      {
        name: "Баня недалеко от метро",
        quantity: "34000",
        src: "/search",
      },
      {
        name: "Банный комплекс повышеной комфортности",
        quantity: "2000",
        src: "/search",
      },
      {
        name: "Ледяная купель",
        quantity: "4000",
        src: "/search",
      },
      {
        name: "Баня недалеко от метро",
        quantity: "34000",
        src: "/search",
      },
      {
        name: "Арендовать сауну на день",
        quantity: "4000",
        src: "/search",
      },
    ],
  },
  {
    title: "Снять сауну",
    links: [
      {
        name: "Spa-терапия",
        quantity: "4000",
        src: "/search",
      },
      {
        name: "Ледяная купель",
        quantity: "2000",
        src: "/search",
      },
      {
        name: "Баня недалеко от метро",
        quantity: "34000",
        src: "/search",
      },
      {
        name: "Банный комплекс повышеной комфортности",
        quantity: "2000",
        src: "/search",
      },
      {
        name: "Ледяная купель",
        quantity: "4000",
        src: "/search",
      },
      {
        name: "Баня недалеко от метро",
        quantity: "34000",
        src: "/search",
      },
      {
        name: "Арендовать сауну на день",
        quantity: "4000",
        src: "/search",
      },
    ],
  },
  {
    title: "Банные комплексы",
    links: [
      {
        name: "Spa-терапия",
        quantity: "4000",
        src: "/search",
      },
      {
        name: "Ледяная купель",
        quantity: "2000",
        src: "/search",
      },
      {
        name: "Баня недалеко от метро",
        quantity: "34000",
        src: "/search",
      },
      {
        name: "Банный комплекс повышеной комфортности",
        quantity: "2000",
        src: "/search",
      },
      {
        name: "Ледяная купель",
        quantity: "4000",
        src: "/search",
      },
      {
        name: "Баня недалеко от метро",
        quantity: "34000",
        src: "/search",
      },
      {
        name: "Арендовать сауну на день",
        quantity: "4000",
        src: "/search",
      },
    ],
  },
  {
    title: "Снять сауну",
    links: [
      {
        name: "Spa-терапия",
        quantity: "4000",
        src: "/search",
      },
      {
        name: "Ледяная купель",
        quantity: "2000",
        src: "/search",
      },
      {
        name: "Баня недалеко от метро",
        quantity: "34000",
        src: "/search",
      },
      {
        name: "Банный комплекс повышеной комфортности",
        quantity: "2000",
        src: "/search",
      },
      {
        name: "Ледяная купель",
        quantity: "4000",
        src: "/search",
      },
      {
        name: "Баня недалеко от метро",
        quantity: "34000",
        src: "/search",
      },
      {
        name: "Арендовать сауну на день",
        quantity: "4000",
        src: "/search",
      },
    ],
  },
];
</script>

<template>
  <section class="links">
    <h2 class="links__title">Полезные ссылки</h2>
    <div class="links__inner">
      <nuxt-link to="/search" class="links__item item item_first">
        <h2 class="item__title_first">Каталог Саун</h2>
      </nuxt-link>
      <div v-for="item in items" class="links__item item">
        <h2 class="item__title">{{ item.title }}</h2>
        <div class="item__menu">
          <nuxt-link
            :to="link.src"
            class="item__content"
            v-for="link in item.links"
          >
            <span class="item__name">{{ link.name }}</span>
            <span class="item__quantity">{{ link.quantity }}</span>
          </nuxt-link>
        </div>
      </div>
      <nuxt-link to="search" class="links__item item item_last">
        <h2 class="item__title_last">Загородные сауны</h2>
      </nuxt-link>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.links {
  margin-top: 8.3rem;
  display: flex;
  flex-direction: column;
  gap: 6.2rem;
  margin-bottom: 2rem;
  &__title {
    font-family: "Gilroy";
    font-size: 2.6rem;
  }
  &__inner {
    display: grid;
    gap: 1px;
    grid-template-columns: repeat(3, 1fr);
    gap: 2%;
    margin-bottom: 2rem;
  }
  &__item {
    background-color: $default-color;
    border-radius: 23px;
    padding: 3.2rem 3.3rem;
  }
  .item {
    display: flex;
    flex-direction: column;
    &_first {
      background-image: url("@/assets/img/promotions/3.jpg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    &_last {
      background-image: url("@/assets/img/promotions/2.jpg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    &__title {
      font-size: 1.6rem;
      font-weight: 700;
      margin-bottom: 0.8rem;
      &_first {
        color: $default-color;
        font-family: "Gilroy";
        font-size: 2.6rem;
      }
      &_last {
        color: $default-color;
        font-family: "Gilroy";
        font-size: 2.6rem;
      }
    }
    &__menu {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 0.8rem;
    }
    &__content {
      display: flex;
      gap: 1rem;
    }
    &__name {
      color: $green-color;
    }
    &__quantity {
      color: #8f99ba;
    }
  }
}
</style>
