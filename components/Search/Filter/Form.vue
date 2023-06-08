<template>
  <form class="search-filter__form">
    <div class="search-filter__header">
      <div class="search-filter__searchbox">
        <UISearchInput
            ref="searchInput"
            v-model="searchTerm"
            placeholder="Поиск по г. Москва"
            hint
            @focus="emits('focus')"
        />
        <UIButtonClose type="button" @click="resetSearch"/>
      </div>
      <SwitchBlock :tabs="pageTabs" @tab-changed="onTabChange"/>
    </div>
    <div class="search-filter__categories" v-if="activeSwitchTab === 0">
      <nuxt-link
          to="#"
          class="search-filter__category"
          v-for="i of 14"
          :key="i"
      >
        <div class="search-filter__category-image">
          <img
              :src="getLocalUrl(`/images/icons/categories/cat-${i}.svg`)"
              alt=""
          />
        </div>
        <h4 class="search-filter__category-name">Категория</h4>
      </nuxt-link>
    </div>
    <div class="search-filter__tabs" v-else>
      <ProfileTabs class="search-filter__tabs-items" :tabs="tabs"/>
      <div class="search-filter__tabs-inner">
        <div class="search-filter__tabs-location">
          <span>Где:</span>
          <div class="city" @click="toggleModal">
            <span>{{ selectedCity }}</span>
            <IconBase icon="arrow-left" color="green"/>
          </div>
          <Teleport to="body">
            <CitySelectModal
                v-show="isModalOpen"
                @close-modal="toggleModal"
                @change-city="changeCity"
                :cities="cities"
                :selectedCity="selectedCity"
            />
          </Teleport>
        </div>
        <label for="address" class="search-filter__tabs-address">
          <input
              type="text"
              id="address"
              placeholder="Метро, район, улица, название"
          />
          <div class="address-icon">
            <IconBase icon="geolocation" color="green"/>
          </div>
        </label>
        <div class="search-filter__block">
          <h2 class="search-filter__block-title">Место отдыха</h2>
          <SwitchBlock :tabs="placeTabs" @tab-changed="onPlaceTabChange"/>
        </div>
        <div v-if="activeSwitchPlaceTab === 0">
          <div class="search-filter__block bath-type">
            <h2 class="search-filter__block-title">Вид парной</h2>
            <ul class="search-filter__list">
              <li class="search-filter__list-item" v-for="tag of tagList" :key="tag" @click="toggleTag(tag)"
                  :class="{active: activeTags.includes(tag)}"
              >
                <span>{{ tag }}</span>
                <IconBase icon="close" color="white"/>
              </li>
            </ul>
          </div>
        </div>
        <div v-else>
          <div class="search-filter__block">
            <h2 class="search-filter__block-title">Время</h2>
            <SwitchBlock :tabs="timeTabs"/>
          </div>
          <div class="search-filter__block">
            <h2 class="search-filter__block-title">Количество гостей</h2>
            <div class="counter">
              <button
                  class="counter__btn"
                  type="button"
                  @click="counter > 1 ? counter-- : 1"
              >
                <IconBase icon="decrement" color="green"/>
              </button>
              <span class="counter__count">{{ counter }}</span>
              <button class="counter__btn" type="button" @click="counter++">
                <IconBase icon="increment" color="green"/>
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
                <input type="text" v-model="minPrice" id="min-price"/>
              </label>
              <label
                  for="max-price"
                  :class="{ filled: maxPrice }"
                  class="search-filter__block-input"
              >
                <input type="text" v-model="maxPrice" id="max-price"/>
              </label>
            </div>
            <div class="search-filter__block-checkbox">
              <label for="elite-apartments">
                <img src="~/assets/images/icons/crown.png" alt=""/>
                <span>Элитные аппартаменты</span>
              </label>
              <label class="checkbox-label" for="elite-apartments">
                <input type="checkbox" id="elite-apartments"/>
                <IconBase icon="filter-check" color="green"/>
              </label>
            </div>
          </div>
          <div class="search-filter__block search-filter__block--price">
            <h2 class="search-filter__block-title">Цена</h2>
            <button type="button" class="search-filter__price-btn">
              <IconBase icon="favorite" color="red"/>
              <span>18+</span>
              <IconBase
                  class="search-filter__price-arrow"
                  icon="arrow-left"
                  color="green"
              />
            </button>
            <button type="button" class="search-filter__price-btn btn-more">
              <span>Еще фильтры</span>
              <IconBase icon="arrow-left" color="green"/>
            </button>
          </div>
        </div>
        <div class="flex search-filter__controls">
          <UIButton>Очистить</UIButton>
          <UIButton class="green">
            Показать 120 объявлений
          </UIButton>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
const searchTerm = ref("");
const resetSearch = () => (searchTerm.value = "");

const emits = defineEmits(['focus'])

const pageTabs = ["Категории", "Фильтр"];
const activeSwitchTab = ref(0);
const activeSwitchPlaceTab = ref(0);

const placeTabs = ["Баня / Сауна", "Номер"];
const timeTabs = ["На час", "На ночь", "На сутки"];

const tabs = ["Снять", "Услуги", "Купить"];

const tagList = ref(['Баня', 'Сауна', 'Баня по-черному', 'Тег 1', 'Тег 2', 'Тег 3', 'Тег 4'])
const activeTags = ref([])

const toggleTag = (tag) => {
  if (activeTags.value.includes(tag)) {
    activeTags.value = activeTags.value.filter(t => t !== tag)
  } else {
    activeTags.value.push(tag)
  }
}

const onTabChange = (tabIdx) => {
  activeSwitchTab.value = tabIdx;
  activeSwitchPlaceTab.value = 0
};

const onPlaceTabChange = (tabIdx) => {
  activeSwitchPlaceTab.value = tabIdx;
}

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
  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    &-item {
      @include flex-center-all;
      padding: 8px 19px;
      border: 2px solid #DADEEC;
      border-radius: 25px;
      font-size: 16px;
      line-height: 18px;
      transition: all .2s;
      cursor: pointer;

      @media (max-width: 1000px) {
        font-size: 14px;
        line-height: 16px;
      }

      &.active {
        background: $green;
        border-color: $green;
        color: #fff;
        padding: 8px 12px;

        svg {
          width: 14px;
        }
      }

      svg {
        width: 0;
        margin-left: 5px;
      }
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    position: relative;
    min-height: 100%;
    flex-grow: 1;

    & > .switch {
      margin-bottom: 30px;

      @media (max-width: 1000px) {
        margin-bottom: 20px;
      }
    }
  }

  &__header {
    width: 100%;
    background: #fff;
    position: sticky;
    top: 0;
    z-index: 20;
    padding: 20px 0;

    & :deep(.switch) {
      .switch__btn {
        font-size: 20px;

        @media (max-width: 1000px) {
          font-size: 16px;
          line-height: 18px;
        }
      }
    }

    @media (max-width: 1000px) {
      max-width: 100%;
    }
  }

  &__searchbox {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;

    @media (max-width: 1000px) {
      margin-bottom: 20px;
    }
  }

  &__categories {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 80px 40px;
    padding-bottom: 20px;

    @media (max-width: 1400px) {
      //grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }

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
      @include flex-center-all;
      aspect-ratio: 1;
      border-radius: 50%;
      box-shadow: 0px 11px 48px rgba(178, 188, 221, 0.15);
      margin-bottom: 10px;
      transition: all 0.2s;
      border: 3px solid transparent;

      img {
        width: 70%;
        height: 70%;
        object-fit: contain;
        object-position: center;
      }
    }

    &-name {
      font-weight: 500;
      font-size: 20px;
      line-height: 100%;
      text-align: center;

      @media (max-width: 1400px) {
        font-size: 16px;
      }

      @media (max-width: 1000px) {
        font-size: 12px;
      }
    }
  }

  &__tabs {
    padding-bottom: 10px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    &-inner {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }

    &-items {
      margin-bottom: 40px;
      width: 100% !important;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      text-align: center;


      @media (max-width: 1000px) {
        margin-bottom: 20px;

        & :deep(.profile-tabs__item) {
          font-size: 14px;
          line-height: 16px;
        }
      }
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
      margin-bottom: 20px;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;

      display: flex;
      align-items: center;
      gap: 5px;

      @media (max-width: 1000px) {
        font-size: 14px;
        line-height: 16px;
      }

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

        @media (max-width: 1000px) {
          font-size: 14px;
          line-height: 16px;
        }

        svg {
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
      border-bottom: 1px solid rgba(225, 229, 242, 0.5);

      input {
        width: 100%;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        padding: 20px 70px 20px 0;
        border: none;

        @media (max-width: 1000px) {
          font-size: 14px;
          line-height: 16px;
        }

        &::placeholder {
          color: $gray;
        }

        &:focus {
          outline: none;
        }
      }

      .address-icon {
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

    &.bath-type {
      border-bottom: none;
    }

    & :deep(.switch) {
      .switch__btn {
        font-size: 20px;

        @media (max-width: 1000px) {
          font-size: 16px;
          line-height: 18px;
        }
      }
    }

    &--price {
      border-bottom: none;

      .search-filter__block-title {
        font-weight: 800;
        font-size: 20px;
        line-height: 100%;
        margin-bottom: 40px;

        @media (max-width: 1000px) {
          font-size: 16px;
          line-height: 18px;
        }
      }
    }

    &-title {
      font-weight: 700;
      font-size: 24px;
      line-height: 130%;
      margin-bottom: 15px;

      @media (max-width: 1000px) {
        font-size: 16px;
        line-height: 18px;
      }
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

        svg {
          opacity: 0;
          transition: all 0.2s;
        }

        input {
          //   display: none;
          opacity: 0;
          position: absolute;
          z-index: -1;

          &:checked + svg {
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

    &.btn-more {
      justify-content: center;
      color: $green;

      svg {
        transform: rotate(-90deg);
      }
    }
  }

  &__price-arrow {
    margin-left: auto;
    transform: rotate(-90deg);
  }

  &__controls {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 10px;

    padding-bottom: 20px;
    margin-top: auto;

    .btn {
      width: auto;

      @media (max-width: 1200px) {
        font-size: 18px;
      }

      @media (max-width: 1000px) {
        font-size: 16px;
        line-height: 18px;
      }
    }
  }
}
</style>
