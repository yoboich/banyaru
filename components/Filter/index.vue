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
              placeholder="Pick some"
              label="name"
              track-by="name"
            >
              <template v-slot:selection slot-scope="{ values, search, isOpen }"
                ><span
                  class="multiselect__single"
                  v-if="value.length"
                  v-show="!isOpen"
                  >{{ value.length }} options selected</span
                ></template
              >
            </multiselect>
            <multiselect
              v-model="value"
              :options="options"
              :multiple="true"
              :close-on-select="false"
              :clear-on-select="false"
              placeholder="Pick some"
              label="name"
              track-by="name"
            >
              <template v-slot:selection slot-scope="{ values, search, isOpen }"
                ><span
                  class="multiselect__single"
                  v-if="value.length"
                  v-show="!isOpen"
                  >{{ value.length }}</span
                ></template
              >
            </multiselect>
            <multiselect
              v-model="value"
              :options="options"
              :multiple="true"
              :close-on-select="false"
              :clear-on-select="false"
              placeholder="Pick some"
              label="name"
              track-by="name"
            >
              <template v-slot:selection slot-scope="{ values, search, isOpen }"
                ><span
                  class="multiselect__single"
                  v-if="value.length"
                  v-show="!isOpen"
                  >{{ value.length }} options selected</span
                ></template
              >
            </multiselect>
            <multiselect
              v-model="value"
              :options="options"
              :multiple="true"
              :close-on-select="false"
              :clear-on-select="false"
              placeholder="Pick some"
              label="name"
              track-by="name"
            >
              <template v-slot:selection slot-scope="{ values, search, isOpen }"
                ><span
                  class="multiselect__single"
                  v-if="value.length"
                  v-show="!isOpen"
                  >{{ value.length }} options selected</span
                ></template
              >
            </multiselect>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
//styles for select
// .multiselect {
//   display: flex;
//   flex-direction: row-reverse;
//   align-items: center;
//   &__tags {
//     display: flex;
//     align-items: center;
//     border: none;
//     min-height: 2.4rem;
//     padding: 0;
//   }
//   &__placeholder {
//     color: $mainFontColor;
//     margin: 0;
//     padding: 0;
//   }
//   &__select {
//     display: block;
//     padding: 0;
//     position: relative;
//     width: 40px;
//     height: 2.4rem;
//     right: 1px;
//     top: 1px;
//     text-align: center;
//     transition: transform 0.2s ease;
//     &::before {
//       position: relative;
//       right: 0;
//       top: 65%;
//       color: #999;
//       margin-top: 4px;
//       border-style: solid;
//       border-width: 5px 5px 0 5px;
//       border-color: #999 transparent transparent transparent;
//       content: "";
//     }
//   }
//   &__input,
//   &__single {

//   }

//   &__content-wrapper {
//     top: 4rem;
//   }
// }
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
  padding: 3.5rem 0;
  &__select {
    display: flex;
    // max-width: 50rem;
    width: 100%;
  }
}
</style>
