<template>
  <section class="search-form">
    <div class="search-form__searchbox">
      <UISearchInput
          ref="searchInput"
          v-model="searchTerm"
          placeholder="Поиск по г. Москва"
          hint
      />
      <UIButton class="green">Найти</UIButton>
    </div>
    <Transition mode="out-in">
      <div class="search-form__suggestion" v-if="searchTerm.length"  @touchmove="onMove">
        <div class="search-form__tags">
          <button class="search-form__tag">Масла</button>
          <button class="search-form__tag">Массаж</button>
        </div>
        <div class="search-form__suggestion-items">
          <SearchFormSuggestion v-for="item of data" :key="item" :data="item"/>
        </div>
      </div>
      <div class="search-form__history" v-else  @touchmove="onMove">
        <div class="history-item" v-for="i of 50" :key="i">
          <IconBase icon="clock-filled" color="gray"/>
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
    icon: "logo",
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
    icon: "marker",
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
    icon: "phone",
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
    icon: "number",
    title: "Номера Объявлений",
    items: [
      {
        name: "Lorem Ipsum",
        address: "Россия, Москва",
      },
    ],
  },
];

const searchInput = ref()

onMounted(() => {
  searchInput.value.setFocus()
})

const onMove = () => {
  document.activeElement.blur();
}
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
  min-height: 100%;
  padding: 0 20px;
  flex-grow: 1;

  &__searchbox {
    max-width: 600px;
    width: 100%;
    padding: 15px 0;
    background: #fff;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;

    position: sticky;
    top: -1px;
    z-index: 20;

    @media (max-width: 1000px) {
      gap: 10px;
      .btn {
        font-size: 16px;
        line-height: 18px;
      }
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
    &-items {
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  &__history {
    padding-bottom: 25px;

    & .history-item {
      display: flex;
      align-items: center;
      gap: 25px;

      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        color: $green;
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
        color: $gray;
      }

      &:not(:last-of-type) {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
