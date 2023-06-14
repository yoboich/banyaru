<template>
  <div class="search">
    <Map class="search__map" />
    <UISearchInput placeholder="Поиск Баня.ру" v-if="step === 0" v-model="searchTerm" hint @click="changeStep"/>
    <MapSidebar v-else @close="resetStep">
      <SearchFilterForm v-if="step === 1" @focus="changeStep"/>
      <SearchForm v-else ref="searchForm" />
    </MapSidebar>
    <HeaderNav :class="{left: step === 0}" />
    <HeaderButton v-if="width > 1000" />
    <UIButton v-show="step === 0" v-else class="search__btn--create green" to="/create-post">
      <IconBase icon="nav-plus" color="white" />
    </UIButton>
  </div>
</template>

<script setup>
import {useWindowSize} from "@vueuse/core";

const {width} = useWindowSize()

definePageMeta({
  layout: "empty",
});

const searchTerm = ref('')
const step = ref(0)

const changeStep = () => {
  if (step.value < 0) {
    step.value++
  } else {
    step.value++
  }
}

const resetStep = () => step.value = 0
</script>

<style lang="scss" scoped>
.search {

  .header__nav {
    position: absolute;
    bottom: 20px;
    right: 20px;

    &.left {
      left: 20px;
      right: auto;

      @media (max-width: 1000px) {
        left: 50%;
        transform:  translateX(-50%);

        width: calc(100% - 40px);
      }
    }

    @media (max-width: 1000px) {
      &:not(.left) {
        display: none;
      }
    }
  }

  .header-btn {
    position: absolute;
    top: 20px;
    right: 20px;

    @media (max-width: 1000px) {
      display: none;
    }
  }

  &-input {
    position: absolute;
    left: 20px;
    top: 20px;
    max-width: 490px;
    width: 100%;

    @media (max-width: 1000px) {
      max-width: calc(100% - 40px);
      width: 100%;
    }

    & :deep(input) {
      border: none;
    }
  }
}
</style>
