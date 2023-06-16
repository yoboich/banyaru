<template>
  <div class="search" ref="searchContent" @touchmove.passive="onMove" @touchend.passive="onMoveEnd">
    <Map class="search__map"/>
    <UISearchInput placeholder="Поиск Баня.ру" v-if="step === 0" v-model="searchTerm" hint @click="changeStep"/>
    <MapSidebar v-else @close="resetStep">
      <SearchFilterForm v-if="step === 1" @focus="changeStep"/>
      <SearchForm v-else ref="searchForm"/>
    </MapSidebar>
    <HeaderNav :class="{left: step === 0}"/>
    <HeaderButton v-if="width > 1000"/>
    <UIButton v-show="step === 0" v-else class="search__btn--create green" to="/create-post">
      <IconBase icon="nav-plus" color="white"/>
    </UIButton>
  </div>
</template>

<script setup>
import {useWindowSize, useScroll} from "@vueuse/core";

const {width} = useWindowSize()

const searchContent = ref()
const {y, directions} = useScroll(searchContent, {behavior: 'smooth'})

definePageMeta({
  layout: "empty",
});

const searchTerm = ref('')
const step = ref(0)

const changeStep = () => {
  if (step.value < 1) {
    step.value++
  } else {
    step.value++
  }
}

const mobileSheetHeight = useState('mobileSheetHeight', () => 0)
const hideMobileCardScroll = useState('hideMobileCardScroll', () => true)

watch(mobileSheetHeight, () => {
  searchContent.value.scrollTop = window.screen.height * 0.55
})

watch(step, async () => {
  await nextTick().then(() => {
    searchContent.value.scrollTop = window.screen.height * 0.55
  })
})

const onMove = (e) => {
  const screen = window.screen.height

  if (y.value > screen - 80) {
    hideMobileCardScroll.value = false
  } else {
    hideMobileCardScroll.value = true
  }
}

const onMoveEnd = (e) => {
  searchContent.value.style.scrollBehavior = 'smooth';
  const screen = window.screen.height

  if (y.value > screen - 80) {
    searchContent.value.scrollTop = screen
  } else if (y.value < screen * 0.2) {
    searchContent.value.scrollTop = 0

    if (step.value) {

      setTimeout(() => {
        resetStep()
      }, 300)

    }
  } else {
    searchContent.value.scrollTop = screen * 0.55
  }
}
const resetStep = () => step.value = 0
</script>

<style lang="scss" scoped>
.search {

  &::-webkit-scrollbar {
    display: none;
  }

  &__map {
    position: sticky;
    top: 0;
    left: 0;
    height: 100vh;
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
        transform: translateX(-50%);

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
