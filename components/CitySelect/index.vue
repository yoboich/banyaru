<template>
  <div @click="toggleModal" class="city-select">
    <span>{{ selectedCity }}</span>
  </div>
  <CitySelectModal
    v-show="isModalOpen"
    @close-modal="toggleModal"
    @change-city="changeCity"
    :cities="cities"
    :selectedCity="selectedCity"
  />
</template>

<script setup>
// let isActive = ref(false);
const selectedCity = ref("Москва");
const isModalOpen = ref(false);

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
};

const changeCity = (city) => {
  selectedCity.value = city;
  toggleModal();
};
// let search = ref("");

// const filteredData = computed(() => {
//   return data.filter(({ city }) =>
//     [city].some((val) => val.toLowerCase().includes(search.value))
//   );
// });

const cities = getCities();
</script>

<style lang="scss" scoped>
.city-select {
  display: flex;
  align-items: center;
  gap: 8px;

  cursor: pointer;

  span {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;

    position: relative;
    transition: all 0.2s;

    &::after {
      content: "";
      width: 100%;
      height: 1px;
      background: $green;
      border-radius: 2px;

      position: absolute;
      bottom: -2px;
      left: 0;

      transform: scaleX(0);
      transition: all 0.2s;
    }
  }

  &:hover {
    span {
      color: $green;
      &::after {
        transform: scaleX(1);
      }
    }
  }
}
// .city-select {
//   cursor: pointer;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   gap: 8px;

//   img {
//   }

//   & span {
//     font-weight: 500;
//     font-size: 14px;
//     line-height: 18px;
//   }

//   &__icon {
//     // position: relative;
//     // width: 2.4rem;
//     // height: 2.4rem;
//     // box-shadow: 1px 4px 12px rgba(166, 175, 205, 0.36);
//     // border-radius: 2rem;
//     // transition: all 0.2s;

//     // &::after {
//     //   content: "";
//     //   width: 1.4rem;
//     //   height: 0.8rem;
//     //   position: absolute;
//     //   left: 20%;
//     //   top: 40%;
//     //   background-size: cover;
//     //   background-repeat: no-repeat;
//     //   // background-image: url("@/assets/img/icon/select.svg");
//     //   mask: url("@/assets/img/icon/select.svg") no-repeat center;
//     //   background-color: $gray;
//     //   transition: all 0.2s;
//     // }

//     &_active {
//       &::after {
//         background-color: $green;
//         transition: all 0.2s;
//       }
//     }
//   }
// }
// .city-dropdown {
//   max-width: 68rem;
//   width: 100%;
//   position: absolute;
//   padding: 3.3rem 4rem 4.2rem 3.7rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   left: 0;
//   top: 9rem;
//   z-index: 1002;
//   background: $default-color;
//   box-shadow: 0px 7px 27px rgba(136, 152, 206, 0.35);
//   border-radius: 1.2rem;
//   opacity: 0;
//   transform: translateY(-2rem);
//   transition: all 0.2s ease;
//   visibility: hidden;
//   &.active {
//     opacity: 1;
//     transform: translateY(0);
//     transition: all 0.5s ease;
//     visibility: visible;
//   }
//   &__title {
//     font-size: 2rem;
//     line-height: 2rem;
//     font-weight: 700;
//     margin-bottom: 1.9rem;
//   }
//   &__info {
//     color: $gray;
//     margin-bottom: 3.5rem;
//   }
//   & input {
//     max-width: 32rem;
//     width: 100%;
//     padding: 1.1rem 1.5rem;
//     border: 0.1rem solid #8f99ba;
//     border-radius: 10rem;
//     margin-bottom: 5.2rem;
//     &::placeholder {
//       color: $gray;
//     }
//   }
//   &__overlay {
//     content: "";
//     position: absolute;
//     width: 100vw;
//     height: 100vh;
//     margin-left: calc(-50vw + 50%);
//     top: 9rem;
//     left: 0;
//   }
//   &__inner {
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     column-gap: 10rem;
//     row-gap: 1.5rem;
//   }
//   &__item {
//     cursor: pointer;
//     &:hover {
//       color: $green;
//       transition: all 0.2s ease;
//     }
//     &.active {
//       color: $green;
//     }
//   }
// }

// @media screen and (max-width: 768px) {
//   .city-select {
//     position: relative;
//     max-width: none;
//     width: 94%;
//     margin-left: 0;
//     margin-top: 2.8rem;
//   }
//   .city-dropdown {
//     top: 22rem;
//     max-width: 100%;
//     width: 100%;
//     position: absolute;
//     padding: 2rem;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     left: 0;
//     z-index: 1002;
//     background: $default-color;
//     box-shadow: 0px 7px 27px rgba(136, 152, 206, 0.35);
//     border-radius: 1.2rem;
//     opacity: 0;
//     display: none;
//     transform: translateY(-2rem);
//     transition: all 0.2s ease;
//     visibility: hidden;
//     &__inner {
//       display: grid;
//       grid-template-columns: repeat(2, 1fr);
//       column-gap: 1rem;
//       row-gap: 1rem;
//     }
//     &.active {
//       opacity: 1;
//       transform: translateY(0);
//       transition: all 0.5s ease;
//       visibility: visible;
//       display: block;
//     }
//   }
// }
</style>
