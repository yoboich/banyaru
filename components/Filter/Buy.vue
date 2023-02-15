<script setup>
import Multiselect from "vue-multiselect";
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
  </div>
</template>
<style lang="scss" scoped>
.filter-form {
  display: flex;
  padding: 2.6rem 0;
  &__button {
    display: flex;
    align-items: center;
    color: $green-color;
    gap: 1.2rem;
    cursor: pointer;
    margin-left: auto;
  }
  &__select {
    display: flex;
    gap: 4.8rem;
    width: 90%;
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