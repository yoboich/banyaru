<template>
  <form class="search-filter__form">
    <div class="search-filter__header">
      <div class="search-filter__searchbox">
        <UISearchInput
          v-model="searchTerm"
          placeholder="Поиск по г. Москва"
          hint
          @focus="isSearchFocused = true"
        />
        <UIButtonClose type="button" @click="resetSearch" />
      </div>
      <SwitchBlock :tabs="pageTabs" @tab-changed="onTabChange" />
    </div>
    <div class="search-filter__categories" v-if="activeSwitchTab === 0">
      <nuxt-link
        to="#"
        class="search-filter__category"
        v-for="i of 14"
        :key="i"
      >
        <div class="search-filter__category-image">
          <img :src="getLocalUrl(`/icons/categories/cat-${i}.svg`)" alt="" />
        </div>
        <h4 class="search-filter__category-name">Категория</h4>
      </nuxt-link>
    </div>
    <div class="search-filter__tabs" v-else>
      <div class="search-filter__tabs-items">
        <button
          v-for="(tab, i) of tabs"
          :key="tab"
          class="search-filter__tabs-item"
          :class="{ active: activeTab === i }"
          type="button"
          @click="activeTab = i"
        >
          {{ tab }}
        </button>
      </div>
      <div class="search-filter__tabs-inner">
        <div class="search-filter__tabs-location">
          <span>Где:</span>
          <div class="city" @click="toggleModal">
            <span>{{ selectedCity }}</span>
            <Icon tag="i" icon="arrow-left" color="green" />
          </div>
          <CitySelectModal
            v-show="isModalOpen"
            @close-modal="toggleModal"
            @change-city="changeCity"
            :cities="cities"
            :selectedCity="selectedCity"
          />
        </div>
        <label for="address" class="search-filter__tabs-address">
          <input
            type="text"
            id="address"
            placeholder="Метро, район, улица, название"
          />
          <!-- <img src="~/assets/img/search/location-green.svg" alt="" /> -->
          <Icon tag="i" icon="geolocation" color="green" />
        </label>
        <div class="search-filter__block">
          <h2 class="search-filter__block-title">Место отдыха</h2>
          <SwitchBlock :tabs="placeTabs" />
        </div>
        <div class="search-filter__block">
          <h2 class="search-filter__block-title">Время</h2>
          <SwitchBlock :tabs="timeTabs" />
        </div>
        <div class="search-filter__block">
          <h2 class="search-filter__block-title">Количество гостей</h2>
          <div class="counter">
            <button
              class="counter__btn"
              type="button"
              @click="counter > 1 ? counter-- : 1"
            >
              <!-- <img src="~/assets/img/icon/decrement.svg" alt="" /> -->
              <Icon tag="i" icon="decrement" color="green" />
            </button>
            <span class="counter__count">{{ counter }}</span>
            <button class="counter__btn" type="button" @click="counter++">
              <Icon tag="i" icon="increment" color="green" />
              <!-- <img src="~/assets/img/icon/increment.svg" alt="" /> -->
            </button>
          </div>
        </div>
        <div class="search-filter__block">
          <h2 class="search-filter__block-title">Цена</h2>
          <div class="flex">
            <label
              for="min-price"
              :class="{ filled: minPrice }"
              class="search-filter__block-input"
            >
              <input type="text" v-model="minPrice" id="min-price" />
            </label>
            <label
              for="max-price"
              :class="{ filled: maxPrice }"
              class="search-filter__block-input"
            >
              <input type="text" v-model="maxPrice" id="max-price" />
            </label>
          </div>
          <div class="search-filter__block-checkbox">
            <label for="elite-apartments">
              <img src="~/assets/icons/crown.png" alt="" />
              <span>Элитные аппартаменты</span>
            </label>
            <label class="checkbox-label" for="elite-apartments">
              <input type="checkbox" id="elite-apartments" />
              <Icon tag="i" icon="filter-check" color="green" />
              <!-- <img src="~/assets/img/search/check-green.svg" alt="" /> -->
            </label>
          </div>
        </div>
        <div class="search-filter__block search-filter__block--price">
          <h2 class="search-filter__block-title">Цена</h2>
          <button type="button" class="search-filter__price-btn">
            <!-- <img src="~/assets/img/icon/heart-red.svg" alt="" /> -->
            <Icon tag="i" icon="favorite" color="red" :hover="false" />
            <span>18+</span>
            <!-- <img
              class="search-filter__price-arrow"
              src="~/assets/img/icon/arrow-green.svg"
              alt=""
            /> -->
            <Icon
              class="search-filter__price-arrow"
              tag="i"
              icon="arrow-left"
              color="green"
            />
          </button>
          <button
            type="button"
            class="search-filter__price-btn search-filter__price-btn--more"
          >
            <span>Еще фильтры</span>
            <!-- <img src="~/assets/img/icon/arrow-green.svg" alt="" /> -->
            <Icon tag="i" icon="arrow-left" color="green" />
          </button>
        </div>
        <div class="flex search-filter__controls">
          <button
            type="button"
            class="search-filter__btn search-filter__btn--clear"
          >
            Очистить
          </button>
          <button
            type="button"
            class="search-filter__btn search-filter__btn--show"
          >
            Показать 120 объявлений
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
const searchTerm = ref("");
const resetSearch = () => (searchTerm.value = "");
const isSearchFocused = useState("searchFocused", () => false);

const pageTabs = ["Категории", "Фильтр"];
const activeSwitchTab = ref(0);

const placeTabs = ["Баня / Сауна", "Номер"];
const timeTabs = ["На час", "На ночь", "Посуточно"];

const tabs = ["Снять", "Услуги", "Купить"];
const activeTab = ref(0);

const onTabChange = (tabIdx) => {
  activeSwitchTab.value = tabIdx;
};

const selectedCity = ref("Москва");
const isModalOpen = ref(false);

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
};

const changeCity = (city) => {
  selectedCity.value = city;
  toggleModal();
};

const cities = getCities();
const minPrice = ref();
const maxPrice = ref();
const counter = ref(1);
</script>

<style lang="scss" scoped>
.search-filter {
  &__form {
    height: 100%;
    display: flex;
    flex-direction: column;

    & > .switch {
      margin-bottom: 30px;
    }
  }

  &__header {
    width: 600px;
    background: #fff;
    border-radius: 25px 25px 0 0;
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 20;
    padding: 20px;
  }

  &__searchbox {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
  }

  &__categories {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 80px 40px;
    padding-bottom: 100px;
    margin-top: 180px;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__category {
    &:hover {
      .search-filter__category-image {
        border-color: $green;
      }
    }

    &-image {
      aspect-ratio: 1;
      border-radius: 50%;
      box-shadow: 0px 11px 48px rgba(178, 188, 221, 0.15);
      padding: 20px;
      margin-bottom: 10px;
      transition: all 0.2s;
      border: 3px solid transparent;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
      }
    }

    &-name {
      font-weight: 500;
      font-size: 20px;
      line-height: 100%;
      text-align: center;
    }
  }

  &__tabs {
    height: 100%;
    margin-top: 180px;
    padding-bottom: 10px;

    &-items {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;
    }

    &-item {
      padding: 10px 20px;
      font-weight: 500;
      font-size: 20px;
      line-height: 100%;
      background: transparent;
      cursor: pointer;
      transition: all 0.2s;
      position: relative;

      &::after {
        content: "";
        width: 100%;
        height: 3px;
        border-radius: 3px;
        position: absolute;
        bottom: 0;
        left: 0;
        background: $green;
        transform: scaleX(0);
        transition: all 0.2s;
      }

      &.active,
      &:hover {
        color: $green;

        &::after {
          transform: scaleX(1);
        }
      }
    }

    &-location {
      margin-bottom: 40px;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;

      display: flex;
      align-items: center;
      gap: 5px;

      & > span {
        color: $gray;
      }

      .city {
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        display: flex;
        align-items: center;
        gap: 5px;
        color: $green;
        cursor: pointer;

        i {
          transform: rotate(180deg) scale(0.7);
        }

        span {
          border-bottom: 2px solid transparent;
        }

        &:hover {
          span {
            border-color: $green;
          }
        }
      }
    }

    &-address {
      display: block;
      position: relative;
      padding-bottom: 10px;
      border-bottom: 1px solid rgba(225, 229, 242, 0.5);

      input {
        width: 100%;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        padding: 10px 0;
        border: none;
        padding-right: 70px;

        &::placeholder {
          color: $gray;
        }

        &:focus {
          outline: none;
        }
      }

      i {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        padding-left: 30px;
        border-left: 1px solid #e1e5f2;
        cursor: pointer;
      }
    }
  }

  &__block {
    padding: 30px 0;
    border-bottom: 1px solid rgba(225, 229, 242, 0.5);

    &--price {
      border-bottom: none;

      .search-filter__block-title {
        font-weight: 800;
        font-size: 20px;
        line-height: 100%;
        margin-bottom: 40px;
      }
    }

    &-title {
      font-weight: 700;
      font-size: 24px;
      line-height: 130%;
      margin-bottom: 15px;
    }

    .flex {
      gap: 50px;
      margin-bottom: 30px;
    }

    &-input {
      position: relative;

      &.filled {
        input {
          color: #3e3e51;
        }

        &::before,
        &::after {
          color: #3e3e51;
        }
      }

      &:first-of-type {
        &::before {
          content: "От";
          left: 12px;
        }
      }

      &:last-of-type {
        &::before {
          content: "До";
          left: 12px;
        }
      }

      input {
        width: 140px;
        padding: 8px 30px 8px 35px;
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        background: #ffffff;
        border: 2px solid #dadeec;
        border-radius: 100px;
        color: $gray;

        &:focus {
          outline: none;
        }
      }

      &::after,
      &::before {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        color: $gray;
      }

      &::after {
        content: "₽";
        right: 12px;
      }
    }

    &-checkbox {
      display: flex;
      align-items: center;
      gap: 15px;

      span {
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        cursor: pointer;
      }

      & > label:not(.checkbox-label) {
        display: flex;
        align-items: center;
        gap: 15px;

        & > i {
          cursor: pointer;
        }
      }

      .checkbox-label {
        width: 25px;
        height: 25px;
        background: #ffffff;
        border: 2px solid #32bd1b;
        border-radius: 5px;
        margin-left: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        position: relative;

        i {
          opacity: 0;
          transition: all 0.2s;
        }

        input {
          //   display: none;
          opacity: 0;
          position: absolute;
          z-index: -1;

          &:checked + i {
            opacity: 1;
          }
        }
      }
    }

    .counter {
      display: flex;
      align-items: center;
      gap: 10px;

      &__btn {
        background: transparent;
        width: 36px;
        height: 36px;
        border: 2px solid #dadeec;
        border-radius: 20px;

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background: rgba(0, 0, 0, 0.05);
        }
      }

      &__count {
        padding: 8px 20px;
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        border: 2px solid #dadeec;
        border-radius: 100px;
      }
    }
  }

  &__price-btn {
    width: 100%;
    height: 50px;
    padding: 20px;
    background: #ffffff;
    border: 2px solid #dadeec;
    border-radius: 100px;

    display: flex;
    align-items: center;
    gap: 10px;

    font-weight: 700;
    font-size: 16px;
    line-height: 20px;

    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }

    &:not(:last-of-type) {
      margin-bottom: 10px;
    }

    &--more {
      justify-content: center;
      color: $green;

      i {
        transform: rotate(-90deg);
      }
    }
  }

  &__price-arrow {
    margin-left: auto;
    transform: rotate(-90deg);
  }

  &__controls {
    justify-content: space-between;
    padding-bottom: 30px;
  }

  &__btn {
    padding: 15px 25px;
    border-radius: 100px;
    font-weight: 500;
    font-size: 20px;
    line-height: 100%;
    transition: all 0.2s;
    cursor: pointer;

    &--clear {
      width: 40%;
      background: #fff;
      border: 2px solid #dadeec;
      color: $green;

      &:hover {
        background: rgba(0, 0, 0, 0.05);
      }
    }

    &--show {
      width: 55%;
      color: #fff;
      background: $green;

      &:hover {
        background: rgba($color: $green, $alpha: 0.7);
      }
    }
  }
}
</style>
