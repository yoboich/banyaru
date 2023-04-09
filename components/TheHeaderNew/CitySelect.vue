<script lang="ts" setup>
let isActive = ref(false);
let selectCity = ref("Москва");
let search = ref("");

const filteredData = computed(() => {
  return data.filter(({ city }) =>
    [city].some((val) => val.toLowerCase().includes(search.value))
  );
});
const data = [
  {
    city: "Москва",
  },
  {
    city: "Санкт-Петербург",
  },
  {
    city: "Новосибирск",
  },
  {
    city: "Екатеринбург",
  },
  {
    city: "Казань",
  },
  {
    city: "Нижний Новгород",
  },
  {
    city: "Челябинск",
  },
  {
    city: "Самара",
  },
  {
    city: "Омск",
  },
  {
    city: "Ростов-на-Дону",
  },
  {
    city: "Уфа",
  },
  {
    city: "Красноярск",
  },
  {
    city: "Воронеж",
  },
  {
    city: "Пермь",
  },
  {
    city: "Волгоград",
  },
  {
    city: "Краснодар",
  },
  {
    city: "Саратов",
  },
  {
    city: "Тольятти",
  },
  {
    city: "Тюмень",
  },
  {
    city: "Ижевск",
  },
  {
    city: "Барнаул",
  },
  {
    city: "Ульяновск",
  },
  {
    city: "Иркутск",
  },
  {
    city: "Хабаровск",
  },
  {
    city: "Ярославль",
  },
  {
    city: "Владивосток",
  },
  {
    city: "Махачкала",
  },
  {
    city: "Оренбург",
  },
  {
    city: "Томск",
  },
  {
    city: "Кемерово",
  },
  {
    city: "Новокузнецк",
  },
  {
    city: "Рязань",
  },
  {
    city: "Набережные Челны",
  },
  {
    city: "Астрахань",
  },
  {
    city: "Пенза",
  },
  {
    city: "Киров",
  },
  {
    city: "Липецк",
  },
  {
    city: "Калининград",
  },
  {
    city: "Чебоксары",
  },
  {
    city: "Тула",
  },
];
</script>

<template>
  <div @click="isActive = !isActive" class="city-select">
    <img src="@/assets/img/icon/geo.svg" alt="" />
    <span>{{ selectCity }}</span>
    <span
      :class="[isActive ? 'city-select__icon_active' : '']"
      class="city-select__icon"
    ></span>
  </div>
  <div
    v-if="isActive"
    @click="isActive = !isActive"
    class="city-dropdown__overlay"
  ></div>
  <div :class="[isActive ? 'active' : '']" class="city-dropdown">
    <div class="city-dropdown__title">Выбор города</div>
    <span class="city-dropdown__info"
      >10 578 пунктов выдачи в 1 154 городах</span
    >
    <input placeholder="Поиск" type="search" v-model="search" />
    <div class="city-dropdown__inner">
      <p
        class="city-dropdown__item"
        @click="selectCity = city.city"
        :class="[selectCity === city.city ? 'active' : '']"
        v-for="city in filteredData"
      >
        {{ city.city }}
      </p>
      <p v-if="!filteredData.length">Город не найден</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.city-select {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 3.1rem;
  padding: 1rem 1rem;
  max-width: 20rem;
  width: 100%;
  box-shadow: 1px 7px 21px rgba(166, 175, 205, 0.22);
  border-radius: $mainBorderRadius;
  border: 2px solid #DCE1F0;
  & span {
    font-weight: 700;
    font-family: 'Lato', sans-serif;
    font-size: 14px;
    color: #3E3E51!important;
  }
  &__icon {
    position: relative;
    width: 2.4rem;
    height: 2.4rem;
    box-shadow: 1px 4px 12px rgba(166, 175, 205, 0.36);
    border-radius: 2rem;
    transition: all 0.2s;
    &::after {
      content: "";
      width: 1.4rem;
      height: 0.8rem;
      position: absolute;
      left: 20%;
      top: 40%;
      background-size: cover;
      background-repeat: no-repeat;
      // background-image: url("@/assets/img/icon/select.svg");
      mask: url("@/assets/img/icon/select.svg") no-repeat center;
      background-color: $secondary-color;
      transition: all 0.2s;
    }
    &_active {
      &::after {
        background-color: $green-color;
        transition: all 0.2s;
      }
    }
  }
}
.city-dropdown {
  max-width: 68rem;
  width: 100%;
  position: absolute;
  padding: 3.3rem 4rem 4.2rem 3.7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  top: 9rem;
  z-index: 1002;
  background: $default-color;
  box-shadow: 0px 7px 27px rgba(136, 152, 206, 0.35);
  border-radius: 1.2rem;
  opacity: 0;
  transform: translateY(-2rem);
  transition: all 0.2s ease;
  visibility: hidden;
  &.active {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.5s ease;
    visibility: visible;
  }
  &__title {
    font-size: 2rem;
    line-height: 2rem;
    font-weight: 700;
    margin-bottom: 1.9rem;
  }
  &__info {
    color: $secondary-color;
    margin-bottom: 3.5rem;
  }
  & input {
    max-width: 32rem;
    width: 100%;
    padding: 1.1rem 1.5rem;
    border: 0.1rem solid #8f99ba;
    border-radius: 10rem;
    margin-bottom: 5.2rem;
    &::placeholder {
      color: $secondary-color;
    }
  }
  &__overlay {
    content: "";
    position: absolute;
    width: 100vw;
    height: 100vh;
    margin-left: calc(-50vw + 50%);
    top: 9rem;
    left: 0;
  }
  &__inner {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 10rem;
    row-gap: 1.5rem;
  }
  &__item {
    cursor: pointer;
    &:hover {
      color: $green-color;
      transition: all 0.2s ease;
    }
    &.active {
      color: $green-color;
    }
  }
}

@media screen and (max-width: 768px) {
  .city-select {
    position: relative;
    max-width: none;
    width: 94%;
    margin-left: 0;
    margin-top: 2.8rem;
  }
  .city-dropdown {
    top: 22rem;
    max-width: 100%;
    width: 100%;
    position: absolute;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: 0;
    z-index: 1002;
    background: $default-color;
    box-shadow: 0px 7px 27px rgba(136, 152, 206, 0.35);
    border-radius: 1.2rem;
    opacity: 0;
    display: none;
    transform: translateY(-2rem);
    transition: all 0.2s ease;
    visibility: hidden;
    &__inner {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 1rem;
      row-gap: 1rem;
    }
    &.active {
      opacity: 1;
      transform: translateY(0);
      transition: all 0.5s ease;
      visibility: visible;
      display: block;
    }
  }
}
</style>
