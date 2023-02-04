<script setup>
import Multiselect from "vue-multiselect";
// import "vue-multiselect/dist/vue-multiselect.css";
let activeTab = ref(1);

let value = ref([]);
let options = ref([
  { name: "Vue.js", language: "JavaScript" },
  { name: "Adonis", language: "JavaScript" },
  { name: "Rails", language: "Ruby" },
  { name: "Sinatra", language: "Ruby" },
  { name: "Laravel", language: "PHP" },
  { name: "Phoenix", language: "Elixir" },
]);
</script>

<template>
  <div class="filter">
    <div class="nav">
      <div class="nav__inner">
        <div
          @click="activeTab = 1"
          :class="[activeTab == 1 ? 'nav__item_active' : '']"
          class="nav__item"
        >
          Снять
        </div>
        <div
          @click="activeTab = 2"
          :class="[activeTab == 2 ? 'nav__item_active' : '']"
          class="nav__item"
        >
          Услуги
        </div>
        <div
          @click="activeTab = 3"
          :class="[activeTab == 3 ? 'nav__item_active' : '']"
          class="nav__item"
        >
          Купить
        </div>
      </div>
      <div class="nav__buttons">
        <button class="btn nav__buttons_cart">Показать на карте</button>
        <button class="btn btn-green nav__buttons_search">Найти</button>
      </div>
    </div>

    <div class="filter-wrapper">
      <div class="container">
        <div class="filter-form">
          <div class="filter-form__select">
            <multiselect
              v-model="value"
              :options="options"
              :multiple="true"
              :close-on-select="false"
              :clear-on-select="false"
              placeholder="Баню/сауну"
              label="name"
              track-by="name"
              selectLabel="Выбрать"
              selectedLabel="Выбрано"
              deselectLabel="Удалить"
            >
              <!-- <template v-slot:selection slot-scope="{ values, search, isOpen }"
                ><span
                  class="multiselect__single"
                  v-if="value.length"
                  v-show="!isOpen"
                  >{{ value.length }} options selected</span
                ></template
              > -->
            </multiselect>
            <multiselect
              v-model="value"
              :options="options"
              :multiple="true"
              :close-on-select="false"
              :clear-on-select="false"
              placeholder="Парная"
              label="name"
              track-by="name"
              selectLabel="Выбрать"
              selectedLabel="Выбрано"
              deselectLabel="Удалить"
            >
              <!-- <template v-slot:selection slot-scope="{ values, search, isOpen }"
                ><span
                  class="multiselect__single"
                  v-if="value.length"
                  v-show="!isOpen"
                  >{{ value.length }}</span
                ></template
              > -->
            </multiselect>
            <multiselect
              v-model="value"
              :options="options"
              :multiple="true"
              :close-on-select="false"
              :clear-on-select="false"
              placeholder="Цена"
              label="name"
              track-by="name"
              selectLabel="Выбрать"
              selectedLabel="Выбрано"
              deselectLabel="Удалить"
            >
              <!-- <template v-slot:selection slot-scope="{ values, search, isOpen }"
                ><span
                  class="multiselect__single"
                  v-if="value.length"
                  v-show="!isOpen"
                  >{{ value.length }} options selected</span
                ></template
              > -->
            </multiselect>
            <multiselect
              v-model="value"
              :options="options"
              :multiple="true"
              :close-on-select="false"
              :clear-on-select="false"
              placeholder="18+"
              label="name"
              track-by="name"
              selectLabel="Выбрать"
              selectedLabel="Выбрано"
              deselectLabel="Удалить"
            >
              <!-- <template v-slot:selection slot-scope="{ values, search, isOpen }"
                ><span
                  class="multiselect__single"
                  v-if="value.length"
                  v-show="!isOpen"
                  >{{ value.length }} options selected</span
                ></template
              > -->
            </multiselect>
            <div class="filter-form__checkbox" style="display: flex">
              <input id="c1" type="checkbox" />
              <label for="c1">Элитные</label>
            </div>
            <div class="filter-form__input">
              <input
                placeholder="Метро, район, улица, название"
                id="input"
                type="text"
              />
              <label for="input"></label>
            </div>
            <div class="filter-form__button">Еще фильтры</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
//styles for select
.multiselect {
  &::after {
    content: "";
    position: absolute;
    width: 0.1rem;
    height: 50%;
    top: 25%;
    right: -2.4rem;
    background: #e1e5f2;
  }
  width: auto;
  &--active {
    width: 20rem;
  }
  &__content-wrapper {
    width: 30rem;
    border: none;
  }
  &__select {
    &::before {
      position: relative;
      right: 0;
      top: 65%;
      color: #8f99ba;
      margin-top: 4px;
      border-style: solid;
      border-width: 5px 5px 0 5px;
      border-color: #8f99ba transparent transparent transparent;
      content: "";
    }
  }
  &__input {
    font-size: 1.4rem;
  }

  &__tags {
    padding: 10px 40px 0px 8px;
    border: none;
  }

  &:nth-child(1) &__placeholder {
    color: $mainFontColor;
  }
  &__placeholder {
    color: #8f99ba;
    display: inline-block;
    margin-bottom: 0;
    padding-top: 0;
  }
}
</style>

<style lang="scss" scoped>
.filter {
  display: flex;
  flex-direction: column;
}
.nav {
  display: flex;
  align-items: flex-start;
  &__inner {
    display: flex;
  }
  &__item {
    cursor: pointer;
    padding: 2.15rem 3.4rem 1.95rem;
    border-top: 1px solid rgb(56%, 60%, 73%, 0.15);
    border-right: 1px solid rgb(56%, 60%, 73%, 0.15);
    border-radius: 6px 6px 0px 0px;
    &:nth-child(1) {
      border-left: 1px solid rgb(56%, 60%, 73%, 0.15);
    }
    &_active {
      color: $green-color;
      padding: 2.35rem 3.4rem 1.95rem;
      border: none;
      background: #ffffff;
      box-shadow: 0px -12px 15px rgba(136, 152, 206, 0.19);
      border-radius: 6px 6px 0px 0px;
    }
  }
  &__buttons {
    display: flex;
    gap: 2.5rem;
    margin-left: auto;
    &_cart {
      background-color: $default-color;
      font-weight: 700;
      font-size: 1.6rem;
      padding: 1.1rem 3.1rem;
      box-shadow: 1px 7px 21px rgba(166, 175, 205, 0.22);
    }
    &_search {
      font-weight: 700;
      font-size: 1.6rem;
      padding: 1.4rem 2.5rem;
    }
  }
}
.filter-wrapper {
  background-color: $default-color;
  box-shadow: 0px 0px 24px rgba(166, 175, 203, 0.16);
  border-radius: 0px 0px 23px 23px;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

.filter-form {
  padding: 2.6rem 0;
  &__button {
    display: flex;
    align-items: center;
    color: $green-color;
  }
  &__select {
    display: flex;
    gap: 4.8rem;
    width: 100%;
  }
  &__input {
    flex: 1 1 auto;
    align-items: center;
    display: flex;

    & input {
      max-width: 40rem;
      width: 100%;
      border: none;
      min-height: 2.4rem;
    }
  }
  &__checkbox {
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 2.4rem;
    & label {
      color: $vip-color;
    }
    &::after {
      content: "";
      position: absolute;
      width: 0.1rem;
      height: 50%;
      top: 25%;
      right: -2.4rem;
      background: #e1e5f2;
    }
  }
}

</style>
