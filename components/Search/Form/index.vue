<template>
  <section class="search-form show">
    <div class="search-form__searchbox">
      <UISearchInput
        v-model="searchTerm"
        placeholder="Поиск по г. Москва"
        hint
      />
      <UIButton class="btn">Найти</UIButton>
    </div>
    <Transition mode="out-in">
      <div class="search-form__suggestion" v-if="searchTerm.length">
        <div class="search-form__tags">
          <button class="search-form__tag">Масла</button>
          <button class="search-form__tag">Массаж</button>
        </div>
        <div class="search-form__suggestion-items">
          <SearchFormSuggestion v-for="item of data" :key="item" :data="item" />
        </div>
      </div>
      <div class="search-form__history" v-else>
        <div class="history-item" v-for="i of 5" :key="i">
          <img src="~/assets/img/icon/clock-gray-filled.svg" alt="" />
          <div class="history-item__content">
            <h3 class="history-item__name">Маркса 3</h3>
            <span class="history-item__address">Россия, Москва</span>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup>
const searchTerm = ref("");

const data = [
  {
    icon: "logo-gray",
    title: "Названия объекта",
    items: [
      {
        name: "Lorem Ipsum",
        address: "Россия, Москва",
      },
      {
        name: "Lorem Ipsum",
        address: "Россия, Москва",
      },
    ],
  },
  {
    icon: "marker-gray",
    title: "Адреса",
    items: [
      {
        name: "Lorem Ipsum",
        address: "Россия, Москва",
      },
      {
        name: "Lorem Ipsum",
        address: "Россия, Москва",
      },
    ],
  },
  {
    icon: "phone-gray",
    title: "Номера телефонов",
    items: [
      {
        name: "Lorem Ipsum",
        address: "Россия, Москва",
      },
      {
        name: "Lorem Ipsum",
        address: "Россия, Москва",
      },
      {
        name: "Lorem Ipsum",
        address: "Россия, Москва",
      },
      {
        name: "Lorem Ipsum",
        address: "Россия, Москва",
      },
      {
        name: "Lorem Ipsum",
        address: "Россия, Москва",
      },
      {
        name: "Lorem Ipsum",
        address: "Россия, Москва",
      },
      {
        name: "Lorem Ipsum",
        address: "Россия, Москва",
      },
      {
        name: "Lorem Ipsum",
        address: "Россия, Москва",
      },
    ],
  },
  {
    icon: "number-gray",
    title: "Номера Объявлений",
    items: [
      {
        name: "Lorem Ipsum",
        address: "Россия, Москва",
      },
    ],
  },
];
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.search-form {
  height: 100%;
  display: flex;
  flex-direction: column;

  &.show {
    .search-form__suggestion {
      display: block;
    }
    .search-form__history {
      display: block;
    }

    .search-form__searchbox {
      .btn {
        display: block;
      }
    }
  }

  &__searchbox {
    width: 600px;
    padding: 15px 20px;
    background: #fff;
    border-radius: 25px 25px 0 0;
    margin-bottom: 15px;
    border: 1px solid #dadeec;
    border-bottom: none;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;

    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 20;

    label {
      max-width: 430px;
    }

    .btn {
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;
      padding: 15px 30px;
      display: none;
    }
  }

  &__tags {
    display: flex;
    align-items: center;
    gap: 10px;

    margin-bottom: 15px;
  }

  &__tag {
    border: 2px solid #dadeec;
    border-radius: 100px;
    background: transparent;
    padding: 10px 12px;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;

    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      background: #f7f7f7;
    }
  }

  &__suggestion {
    display: none;
    margin-top: 80px;

    &-items {
      overflow: auto;
      flex: 1 1 auto;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  &__history {
    margin-top: 80px;
    padding-bottom: 25px;
    display: none;

    & .history-item {
      display: flex;
      align-items: center;
      gap: 25px;

      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        color: $green-color;
      }

      &__name {
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
      }

      &__address {
        font-weight: 500;
        font-size: 11px;
        line-height: 13px;
        color: $secondary-color;
      }

      &:not(:last-of-type) {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
