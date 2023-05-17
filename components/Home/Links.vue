<template>
  <div class="useful-links">
    <div class="useful-links__item" v-for="(item, i) of items" :key="i">
      <ul class="useful-links__list">
        <h5 class="title">{{ item.title }}</h5>
        <li
          class="useful-links__list-item"
          v-for="(link, j) of item.links"
          :key="j"
        >
          <nuxt-link :to="link.src">
            <span class="name">{{ link.name }}</span>
            <span class="amount">{{ link.quantity }}</span>
          </nuxt-link>
        </li>
      </ul>
      <nuxt-link class="useful-links__single-image" :to="item.src"
        ><img :src="item.image" alt=""
      /></nuxt-link>
    </div>
  </div>
</template>

<script setup>
import image from "~/assets/img/promotions/4.png";

const items = [
  {
    image, // replace to api
    src: "/search",
    title: "Популярные ссылки",
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
        name: "Банный комплекс повыш...",
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
    ],
  },
  {
    image, // replace to api
    src: "/search",
    title: "Популярные ссылки",
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
        name: "Банный комплекс повыш...",
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
    ],
  },
  {
    image, // replace to api
    src: "/search",
    title: "Популярные ссылки",
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
        name: "Банный комплекс повыш...",
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
    ],
  },
];
</script>

<style lang="scss" scoped>
.useful-links {
  &__item {
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media (max-width: 1400px) {
      grid-template-columns: 1fr;
    }

    & > *:first-child {
      order: 2;
    }

    &:nth-child(2n) {
      & > *:first-child {
        order: 2;
      }
    }

    &:not(:last-of-type) {
      margin-bottom: 20px;
    }
  }

  &__list {
    border-radius: 20px;
    padding: 20px 30px 40px;
    background: #fff;

    .title {
      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
      margin-bottom: 20px;
    }

    &-item {
      &:not(:last-of-type) {
        margin-bottom: 15px;
      }

      font-weight: 500;
      font-size: 16px;
      line-height: 18px;

      .name {
        color: #17a300;
        padding-right: 15px;
      }

      .amount {
        color: #8f99ba;
      }
    }
  }

  &__single-image {
    height: 100%;
    width: 100%;
    display: block;
    border-radius: 20px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}
// .links {
//   // margin-top: 8.3rem;
//   // display: flex;
//   // flex-direction: column;~
//   // gap: 6.2rem;
//   // margin-bottom: 2rem;
//   &__title {
//     font-family: "Gilroy";
//     font-size: 2.6rem;
//     margin-bottom: 20px;
//     margin-left: 30px;
//   }

//   &__inner {
//     display: grid;
//     gap: 20px;
//     grid-template-columns: 1fr 1fr;
//   }

//   &__item {
//     background-color: $default-color;
//     border-radius: 23px;
//     padding: 20px 30px;
//   }

//   .item {
//     display: flex;
//     flex-direction: column;
//     &_first {
//       background-image: url("@/assets/img/promotions/4.png");
//       background-position: center;
//       background-repeat: no-repeat;
//       background-size: cover;
//     }
//     &_last {
//       background-image: url("@/assets/img/promotions/2.jpg");
//       background-position: center;
//       background-repeat: no-repeat;
//       background-size: cover;
//     }
//     &__title {
//       font-weight: 700;
//       font-size: 16px;
//       line-height: 20px;
//       margin-bottom: 20px;

//       &_first {
//         color: $default-color;
//         font-family: "Gilroy";
//         font-size: 2.6rem;
//       }
//       &_last {
//         color: $default-color;
//         font-family: "Gilroy";
//         font-size: 2.6rem;
//       }
//     }
//     &__menu {
//       display: flex;
//       flex-direction: column;
//       gap: 1rem;
//       margin-bottom: 0.8rem;
//     }
//     &__content {
//       display: flex;
//       gap: 1rem;
//     }
//     &__name {
//       color: $green-color;
//     }
//     &__quantity {
//       color: #8f99ba;
//     }
//   }
// }
// .links__item:nth-child(5) {
//   background-image: url("@/assets/img/promotions/5.png");
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
// }
</style>
