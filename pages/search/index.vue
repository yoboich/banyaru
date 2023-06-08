<template>
  <div class="search">
    <Map class="search__map"/>
      <UISearchInput v-if="step === 0" v-model="searchTerm" hint @click="changeStep"/>
      <div v-else>
        <aside class="search__sidebar" v-if="width > 1000">
          <ScrollArea>
            <div class="search__sidebar-content">
              <SearchFilterForm v-if="step === 1" @focus="changeStep"/>
              <SearchForm v-else/>
            </div>
          </ScrollArea>
        </aside>
        <SearchMobile @close="resetStep" v-else >
          <div>
            <SearchFilterForm v-if="step === 1" @focus="changeStep"/>
            <SearchForm v-else ref="searchForm" />
          </div>
        </SearchMobile>
      </div>
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

// watch(step, () => {
//   if (step === 1) {
//     filterForm.value.focus()
//   }
// })
</script>

<style lang="scss" scoped>

.search {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  &__btn--create {
    @include flex-center-all;
    position: absolute;
    right: 20px;
    top: 100px;
    padding: 0;
    width: 50px;
    height: 50px;

    svg {
      width: 16px;
      height: 16px;
    }
  }

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

  &__sidebar {
    max-width: 600px;
    width: 40vw;
    height: calc(100% - 40px);
    position: absolute;
    top: 20px;
    left: 20px;

    &-content {
      min-height: 100%;
      display: flex;
      flex-direction: column;
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
