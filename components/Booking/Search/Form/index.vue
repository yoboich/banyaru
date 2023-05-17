<template>
  <div class="booking-search p-x">
    <div class="booking-search__header">
      <div class="booking-search__searchbox">
        <UISearchInput v-model="searchTerm" placeholder="Поиск Баня.ру" hint />
        <UIButtonClose @click="resetSearch" />
      </div>
      <div class="booking-search__filter">
        <div class="booking-search__filter-info">
          <div class="booking-search__filter-found">
            <span>1 936 объявлений</span>
            <IconRevert />
          </div>
          <nuxt-link class="booking-search__filter-more" to="/search/filter">
            <div
              class="count"
              v-show="selectedFilters.length && selectedFilters.length < 10"
            >
              {{ selectedFilters.length }}
            </div>
            <IconFilter />
          </nuxt-link>
        </div>
        <div
          class="booking-search__filter-tags custom-scrollbar custom-scrollbar--horizontal"
          data-filter="first"
        >
          <button class="booking-search__filter-btn">
            <IconArrow />
          </button>
          <button class="booking-search__filter-btn" @click="resetFilters">
            <IconClose />
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
    <div class="test"></div>
    <div class="booking-search__results">
      <BookingSearchItem v-for="i of 7" :wide="i < 3" :key="i" />
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
.booking {
  .booking-search {
    padding: 305px 15px 0 !important;
    background: transparent;

    &.p-x {
      padding: 0;
    }

    &__header {
      padding: 20px 15px;
      position: fixed;
      z-index: 20;
      top: 20px;
      left: 20px;
      width: 600px;
      border: 1px solid #dadeec;
      border-bottom: none;
    }
  }
}
.booking-search {
  border-radius: 20px;
  box-shadow: 0px 11px 48px rgba(178, 188, 221, 0.15);
  display: flex;
  flex-direction: column;
  overflow: auto;
  background: #fff;
  height: 100%;
  padding: 20px 15px;

  &__header {
    padding: 0 15px 20px;
    background: #fff;
    border-radius: 25px 25px 0 0;
  }

  &__searchbox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    margin-bottom: 20px;
  }

  &__filter {
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

      svg.icon-revert {
        cursor: pointer;

        &:hover {
          fill: #32bd1b;
        }
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
        background: #32bd1b;
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

      // &::-webkit-scrollbar {
      //   height: 4px;
      // }

      // &::-webkit-scrollbar-track {
      //   background: $light-gray-color;
      //   border-radius: 5px;
      // }

      // &::-webkit-scrollbar-thumb {
      //   width: 100px;
      //   background: $secondary-color;
      //   border-radius: 2px;
      // }

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
      background: #fff;

      cursor: pointer;
      transition: all 0.2s;

      svg.icon-arrow {
        transform: translateX(-10%);
      }

      &:hover {
        background: #32bd1b;
        border-color: #32bd1b;
        svg.icon-arrow {
          fill: #fff;
        }
        svg.icon-close {
          stroke: #fff;
        }
      }
    }
  }

  &__results {
    margin-bottom: 30px;

    & > div {
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
}
</style>
