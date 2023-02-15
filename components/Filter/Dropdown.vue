<script setup>
const data = [
  {
    title: "Кухня",
    filters: [
      {
        name: "Бар",
      },
      {
        name: "Свои продукты-напитки",
      },
      {
        name: "Достваква",
      },
      {
        name: "Ресторан",
      },
      {
        name: "Кальян",
      },
      {
        name: "Мангал",
      },
    ],
  },
  {
    title: "Услуги",
    filters: [
      {
        name: "Spa-Терапия",
      },
      {
        name: "Банные принадлежности",
      },
      {
        name: "Кальян",
      },
      {
        name: "Массажное кресло",
      },
      {
        name: "Семейный день",
      },
      {
        name: "Чайная церемония",
      },
      {
        name: "Ароматерапия",
      },
      {
        name: "Массаж",
      },
      {
        name: "Стрип-шоу",
      },
      {
        name: "Банщик",
      },
      {
        name: "Ледяная купель",
      },
      {
        name: "Обливное ведро",
      },
      {
        name: "Банщик",
      },
      {
        name: "Солярий",
      },
      {
        name: "Ароматы для парной",
      },
      {
        name: "Веники",
      },
      {
        name: "Парения",
      },
    ],
  },
];
</script>

<template>
  <div class="filter-dropdown">
    <div class="filter-dropdown__content">
      <div class="filter-dropdown__top">
        <div class="filter-dropdown__title">Доп.фильтры</div>
        <div @click="$emit('close')" class="filter-dropdown__hide">
          <span>Спрятать фильтры</span>
          <img src="@/assets/img/icon/select-green.svg" alt="" />
        </div>
      </div>
      <div v-for="item in data" class="filters">
        <div class="filters__title">{{ item.title }}</div>
        <div class="filters__inner">
          <div v-for="filter in item.filters" class="filters__item">
            <input id="" type="checkbox" class="checkbox" />
            <label for="">{{ filter.name }}</label>
          </div>
        </div>
      </div>
      <div class="filter-dropdown__buttons">
        <button class="btn btn-white">Сбросить фильтр</button>
        <button class="btn btn-green">Применить</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filter-dropdown {
  max-width: 140rem;
  position: absolute;
  width: 100%;
  height: 59rem;
  background: $default-color;
  top: 10rem;
  z-index: 100;
  border-radius: 2.3rem;
  overflow-y: scroll;
  &__content {
    display: flex;
    flex-direction: column;
    padding: 5rem 5.7rem 1.8rem 4rem;
  }
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__title {
    font-weight: 700;
    font-size: 2rem;
    line-height: 130%;
  }
  &__hide {
    display: flex;
    align-items: center;
    color: $green-color;
    gap: 1.2rem;
    cursor: pointer;
    & img {
      transform: rotate(180deg);
    }
  }
  &__buttons {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: flex-end;
    margin-top: 4rem;
    & button {
      padding: 1.5rem 3.8rem;
      font-weight: 500;
      font-size: 2rem;
      box-shadow: 0px 6px 21px rgba(166, 175, 205, 0.22);
    }
  }
}
.filters {
  &__title {
    margin-top: 4.5rem;
    margin-bottom: 3rem;
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 2rem;
  }
  &__inner {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 3rem;
    column-gap: 1.5rem;
  }
  &__item {
    display: flex;
    gap: 1.2rem;
    align-items: center;
    & input[type="checkbox"] {
      &:not(.switch) {
        max-width: 2.6rem;
        width: 100%;
      }
    }
  }
}
</style>
