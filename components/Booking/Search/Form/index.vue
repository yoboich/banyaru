<template>
  <div class="booking-search p-x">
    <div class="booking-search__header">
      <div class="booking-search__searchbox">
        <UISearchInput v-model="searchTerm" placeholder="Поиск Баня.ру" hint/>
        <UIButtonClose @click="resetSearch"/>
      </div>
      <div class="booking-search__filter">
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
</template>

<script setup>
const searchTerm = ref();
const selectedFilters = ref([]);
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
</script>

<style lang="scss" scoped>
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
    // padding: 0 15px 20px;
    background: #fff;
    border-radius: 25px 25px 0 0;
    margin-bottom: 20px;
    position: absolute;
    top: 0;
    left: 0;
    padding: 20px 15px;
    max-width: 600px;
    width: 100%;
    z-index: 20;
  }

  &__searchbox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    margin-bottom: 20px;
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
    transition: all .2s;

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
    padding-top: 310px;
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
