<script setup>
const props = defineProps(["activeMenu"]);
console.log(props.activeMenu);
const takeOffMenuData = [
  {
    title: "Бани",
    links: [
      {
        name: "Баня",
        src: "/asd",
      },
      {
        name: "Сауна",
        src: "/asd",
      },
      {
        name: "Хаммам",
        src: "/",
      },
      {
        name: "Баня на дровах",
        src: "/asd",
      },
      {
        name: "Баня по-черному",
        src: "/asd",
      },
      {
        name: "Японская / афуро",
        src: "/asd",
      },
      {
        name: "Банный чан",
        src: "/asd",
      },
      {
        name: "Кедровая бочка",
        src: "/asd",
      },
      {
        name: "Инфракрасная",
        src: "/asd",
      },
      {
        name: "Римские / Термы",
        src: "/asd",
      },
      {
        name: "Общественные бани",
        src: "/asd",
      },
      {
        name: "Автобаня",
        src: "/asd",
      },
      {
        name: "Баня на воде",
        src: "/asd",
      },
    ],
  },
  {
    title: "Номера",
    links: [
      {
        name: "На час",
        src: "/asd",
      },
      {
        name: "На ночь",
        src: "/asd",
      },
      {
        name: "Посуточно",
        src: "/asd",
      },
    ],
  },
];

const ServicesMenuData = [
  {
    title: "Title",
    links: [
      {
        name: "Item",
        src: "/asd",
      },
      {
        name: "Item",
        src: "/asd",
      },
      {
        name: "Item",
        src: "/asd",
      },
      {
        name: "Item",
        src: "/asd",
      },
      {
        name: "Item",
        src: "/asd",
      },
      {
        name: "Item",
        src: "/asd",
      },
    ],
  },
  {
    title: "Title",
    links: [
      {
        name: "Item",
        src: "/asd",
      },
      {
        name: "Item",
        src: "/asd",
      },
      {
        name: "Item",
        src: "/asd",
      },
      {
        name: "Item",
        src: "/asd",
      },
      {
        name: "Item",
        src: "/asd",
      },
      {
        name: "Item",
        src: "/asd",
      },
    ],
  },
  {
    title: "Title",
    links: [
      {
        name: "Item",
        src: "/asd",
      },
      {
        name: "Item",
        src: "/asd",
      },
      {
        name: "Item",
        src: "/asd",
      },
      {
        name: "Item",
        src: "/asd",
      },
      {
        name: "Item",
        src: "/asd",
      },
      {
        name: "Item",
        src: "/asd",
      },
      {
        name: "Item",
        src: "/asd",
      },
      {
        name: "Item",
        src: "/asd",
      },
      {
        name: "Item",
        src: "/asd",
      },
    ],
  },
];
</script>

<template>
  <div class="dropdown-menu">
    <div @click="$emit('close')" class="dropdown-menu__overlay"></div>
    <div class="container">
      <div class="menu">
        <div
          v-if="activeMenu == 1"
          v-for="item in takeOffMenuData"
          class="menu__item"
        >
          <ul class="nav">
            <h4 class="nav__title">{{ item.title }}</h4>
            <li v-for="link in item.links" class="nav__item">
              <nuxt-link class="nav__link" :to="link.src">{{
                link.name
              }}</nuxt-link>
            </li>
          </ul>
        </div>

        <div
          v-if="activeMenu == 2"
          v-for="item in ServicesMenuData"
          class="menu__item"
        >
          <ul class="nav">
            <h4 class="nav__title">{{ item.title }}</h4>
            <li v-for="link in item.links" class="nav__item">
              <nuxt-link class="nav__link" :to="link.src">{{
                link.name
              }}</nuxt-link>
            </li>
          </ul>
        </div>

        <div
          v-if="activeMenu == 3"
          v-for="item in ServicesMenuData"
          class="menu__item"
        >
          <ul class="nav">
            <h4 class="nav__title">{{ item.title }}</h4>
            <li v-for="link in item.links" class="nav__item">
              <nuxt-link class="nav__link" :to="link.src">{{
                link.name
              }}</nuxt-link>
            </li>
          </ul>
        </div>

        <div class="menu__banner">
          <div class="menu__banner banner">
            <div class="banner__text">
              <h2 class="banner__title">Рекламный баннер</h2>
              <h5 class="banner__subtitle">Рекламный текст</h5>
            </div>
          </div>
          <button class="btn btn-green">Перейти</button>
        </div>
      </div>
      <div class="footer">
        <nuxt-link class="footer__link">Поиск по карте</nuxt-link>
        <nuxt-link class="footer__link"> Помощь</nuxt-link>
        <nuxt-link class="footer__link"> О проекте</nuxt-link>
        <nuxt-link class="footer__link"> Договор оферта</nuxt-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dropdown-menu {
  position: absolute;
  width: 98vw;
  display: flex;
  justify-content: center;
  margin-left: calc(-49vw + 50%);
  left: 0;
  top: 9rem;
  z-index: 1001;
  background: $default-color;
  box-shadow: 0px 7px 27px rgba(136, 152, 206, 0.35);
  border-radius: 1.2rem;

  &__overlay {
    content: "";
    position: absolute;
    width: 100vw;
    height: 100vh;
    margin-left: calc(-50vw + 50%);
    top: 9rem;
    left: 0;
  }
}
.menu {
  display: flex;
  gap: 8rem;
  padding: 3rem 0;
  &__banner {
    position: relative;
    margin-left: auto;
    max-width: 40rem;
    width: 100%;
    max-height: 22rem;
    height: 100%;
    height: auto;
    background-image: url("@/assets/img/promotions/3.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 12px;
    & button {
      bottom: 1.3rem;
      right: 1.2rem;
      position: absolute;
      font-size: 2rem;
      font-weight: 500;
      padding: 1.4rem 3.8rem;
    }
  }
}
.nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  &__title {
    font-weight: 700;
    font-size: 1.6rem;
  }
  &__item {
  }
  &__link {
    transition: all 0.3s ease;
    &:hover {
      transition: all 0.3s ease;
      color: $green-color;
    }
  }
}
.banner {
  color: $default-color;
  position: relative;
  &__text {
    padding: 3rem 2.8rem;
  }
  &__title {
    font-weight: 700;
    font-size: 2rem;
  }
  &__subtitle {
    font-size: 1.1rem;
  }
}
.footer {
  display: flex;
  gap: 2.5rem;
  padding-bottom: 3rem;
  &__link {
    font-size: 1.1rem;
    color: #9da7c7;
  }
}
.router-link-active {
  color: $green-color;
  font-size: 1.6rem;
  font-weight: 700;
}
</style>
