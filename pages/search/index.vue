<template>
  <div class="search" ref="searchContent" @touchmove.passive="onMove" @touchend.passive="onMoveEnd">
    <Map class="search__map"/>
    <div v-show="isSearch">
      <UISearchInput placeholder="Поиск Баня.ру" v-if="step === 0" v-model="searchTerm" hint @click="changeStep"/>
      <MapSidebar v-else @close="hideSearchPanel">
        <SearchFilterForm v-if="step === 1" @focus="changeStep"/>
        <SearchForm v-else ref="searchForm"/>
      </MapSidebar>
      <HeaderNav :class="{left: step === 0}"/>
      <HeaderButton v-if="width > 1000"/>
      <UIButton v-show="step === 0" v-else class="search__btn--create green" to="/create-post">
        <IconBase icon="nav-plus" color="white"/>
      </UIButton>
    </div>
    <div v-show="!isSearch">
      <MapSidebar @close="hideSearchPanel" ref="scrollArea">
        <section class="booking">
          <div class="booking-search p-x">
            <div class="booking-search__header" :class="{'show-filter': showFilter}">
              <div class="booking-search__searchbox">
                <UISearchInput v-model="searchTerm" placeholder="Поиск Баня.ру" hint/>
                <UIButtonClose @click="resetSearch"/>
              </div>
              <div class="booking-search__filter" v-show="showFilter">
                <div class="booking-search__filter-info">
                  <div class="booking-search__filter-found">
                    <span>1 936 объявлений</span>
                    <button class="booking-search__sort-btn">
                      <IconBase icon="sort" color="gray"/>
                    </button>
                  </div>
                  <nuxt-link class="booking-search__filter-more" to="/search">
                    <div
                        class="count"
                        v-show="selectedFilters.length && selectedFilters.length < 10"
                    >
                      {{ selectedFilters.length }}
                    </div>
                    <IconBase icon="filter" color="black"/>
                  </nuxt-link>
                </div>
                <div
                    class="booking-search__filter-tags custom-scrollbar custom-scrollbar--horizontal"
                    data-filter="first"
                >
                  <button class="booking-search__filter-btn slide-left">
                    <IconBase icon="arrow-left" color="gray"/>
                  </button>
                  <button
                      class="booking-search__filter-btn clear"
                      @click="resetFilters"
                  >
                    <IconBase icon="close" color="gray"/>
                  </button>
                  <BookingSearchFormTag
                      v-for="(tagName, i) of BookingSearchTagsFirst"
                      :key="i"
                      :name="tagName"
                      :class="{ active: selectedFilters.includes(tagName) }"
                      @click="toggleTag(tagName)"
                  />
                </div>
                <div
                    class="booking-search__filter-tags custom-scrollbar custom-scrollbar--horizontal"
                    data-filter="second"
                >
                  <BookingSearchFormTag
                      v-for="(tagName, i) of BookingSearchTagsSecond"
                      :key="i"
                      :name="tagName"
                      :class="{ active: selectedFilters.includes(tagName) }"
                      @click="toggleTag(tagName)"
                  />
                </div>
              </div>
            </div>
            <div class="booking-search__results">
              <BookingSearchItem v-for="i of 7" :wide="i < 3" :key="i"/>
            </div>
          </div>
        </section>
      </MapSidebar>
    </div>
  </div>
</template>

<script setup>
import {useWindowSize} from "@vueuse/core";

const {width} = useWindowSize()

const isSearch = useState('isSearch', () => true)

definePageMeta({
  layout: "empty",
});

const searchTerm = ref('')
const step = useState('step', () => 0)

const changeStep = () => {
  if (step.value < 1) {
    step.value++
  } else {
    step.value++
  }
}

watch(step, () => {
  console.log(step.value)
})


// Booking
const selectedFilters = ref([]);
const scrollArea = ref()

const BookingSearchTagsFirst = ref([
  "Баня",
  "Сауна",
  "Хаммам",
  "Тег",
  "Баня по-черному",
]);

const BookingSearchTagsSecond = ref([
  "2500 руб.",
  "10 чел.",
  "Массаж",
  "Аквазона",
  "Тег",
]);

const resetSearch = () => {
  searchTerm.value = "";
};

const resetFilters = () => {
  selectedFilters.value = [];
};

const toggleTag = (tagName) => {
  if (selectedFilters.value.includes(tagName)) {
    selectedFilters.value = selectedFilters.value.filter(
        (tag) => tag !== tagName
    );
  } else {
    selectedFilters.value.push(tagName);
  }
};

const prevScrollTop = ref(0)
const showFilter = ref(true)


</script>

<style lang="scss" scoped>
.search {
  height: 100%;
  overflow: hidden;

  &__list-btn {
    position: absolute;

  }

  &::-webkit-scrollbar {
    display: none;
  }

  &__map {
    width: 100vw;
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


.booking {
  height: 100%;
}


@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.booking-search {
  border-radius: 20px;
  box-shadow: 0px 11px 48px rgba(178, 188, 221, 0.15);
  display: flex;
  flex-direction: column;
  background: #fff;
  height: 100%;

  &.p-x {
    padding: 0 15px;
  }

  &__header {
    background: #fff;
    position: sticky;
    top: -1px;
    left: 0;
    padding: 20px 15px;
    max-width: 600px;
    width: 100%;
    z-index: 20;

    &.show-filter {
      .booking-search__filter {
      }
    }
  }

  &__searchbox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }

  &__sort-btn {
    cursor: pointer;

    &:hover {
      svg {
        --icon-color: #{$green};
      }
    }
  }

  &__filter {
    transition: all .4s ease-out;
    margin-top: 20px;
    overflow: hidden;

    &-info {
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin-bottom: 20px;
    }

    &-found {
      display: flex;
      align-items: center;
      gap: 10px;

      span {
        font-weight: 700;
        font-size: 24px;
        line-height: 130%;
        color: #3e3e51;
      }
    }

    &-more {
      position: relative;
      display: flex;

      cursor: pointer;

      .count {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%, -50%);

        width: 22px;
        height: 22px;
        background: $green;
        border: 1px solid #ffffff;
        border-radius: 50%;

        color: #fff;
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;

        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    &-tags {
      display: flex;
      align-items: center;
      gap: 10px;

      overflow-x: scroll;

      padding-bottom: 15px;
      margin-bottom: 20px;

      &:last-of-type {
        margin-bottom: 0;
      }

      & > * {
        flex-shrink: 0;
      }
    }

    &-btn {
      width: 35px;
      height: 35px;
      padding: 0;

      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 50%;
      border: 2px solid #dadeec;
      background-color: #fff;
      transition: background-color 0.2s border-color 0.2s;

      cursor: pointer;

      // &--slide-left {
      // }

      &.slide-left {
        &:hover {
          svg {
            --icon-color: white;
          }
        }

        svg {
          transform: translateX(-10%);
        }
      }

      &.clear {
        &:hover {
          svg {
            --icon-color: white;
          }
        }
      }

      &:hover {
        background-color: $green;
        border-color: $green;
      }
    }
  }

  &__results {
    padding-bottom: 50px;

    &::-webkit-scrollbar {
      display: none;
    }

    & > div {
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
}
</style>
