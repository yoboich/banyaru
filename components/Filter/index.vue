<script setup>
let activeTab = ref(1);
let isActive = ref(false)

</script>

<template>
  <section class="filter">
    <div class="nav">
      <div class="container flexs">
        <div class="nav__inner">
          <div
              @click="activeTab = 1"
              :class="[activeTab == 1 ? 'nav__item_active' : '']"
              class="nav__item"
          >
            Снять
          </div>
          <div
              @click="activeTab = 2"
              :class="[activeTab == 2 ? 'nav__item_active' : '']"
              class="nav__item"
          >
            Услуги
          </div>
          <div
              @click="activeTab = 3"
              :class="[activeTab == 3 ? 'nav__item_active' : '']"
              class="nav__item"
          >
            Купить
          </div>
        </div>
        <div class="nav__buttons">
          <button class="btn nav__buttons_cart">Показать на карте</button>
          <button class="btn btn-green nav__buttons_search">Найти</button>
        </div>
      </div>
      </div>

    <div class="filter-wrapper">
      <div class="container">
        <div class="filter-form">
          <FilterTakeOff v-if="activeTab == 1" />
          <FilterServices v-if="activeTab == 2" />
          <FilterBuy v-if="activeTab == 3" />
          <div @click="isActive = !isActive" class="filter-form__button">
              <span>Еще фильтры</span>
              <img src="@/assets/img/icon/select-green.svg" alt="">
          </div>
          <transition name="fade">
            <FilterDropdown  @close="() => (isActive = false)" v-if="isActive"/>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
//styles for select
.multiselect {
  max-width: 17rem;
  &::after {
    content: "";
    position: absolute;
    width: 0.1rem;
    height: 50%;
    top: 25%;
    right: -2.4rem;
    background: #e1e5f2;
  }
  width: auto;
  &--active {
    width: 17rem;
  }
  &__content-wrapper {
    width: 30rem;
    border: none;
  }
  &__select {
    &::before {
      position: relative;
      right: 0;
      top: 65%;
      color: #8f99ba;
      margin-top: 4px;
      border-style: solid;
      border-width: 5px 5px 0 5px;
      border-color: #8f99ba transparent transparent transparent;
      content: "";
      width: 4rem;
      height: 3.8rem;
    }
  }
  &__input {
    font-size: 1.4rem;
  }

  &__tags {
    font-size: 1.4rem;
    padding: 1rem 4rem 0 .8rem;
    border: none;
  }

  &:nth-child(1) &__placeholder {
    color: $mainFontColor;
  }
  &__placeholder {
    color: #8f99ba;
    display: inline-block;
    margin-bottom: 0;
    padding-top: 0;
  }
}
</style>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  transform: translateY(-2rem);
  opacity: 0;
}
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
.filter {
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 70px auto 0;
}
.flexs{
  display: flex;
  align-items: center;
}
.nav {
  display: flex;
  align-items: center;
  background: #FFFFFF;
  box-shadow: 0px 11px 48px rgba(178, 188, 221, 0.15);
  border-radius: 0px;
  padding: 18px 0 1px;
  .nav__inner {
    display: flex;
  }
  &__item {
    cursor: pointer;
    padding: 2rem 3.4rem 1rem;
    border-top: 1px solid rgb(56%, 60%, 73%, 0.15);
    border-right: 1px solid rgb(56%, 60%, 73%, 0.15);
    border-radius: 6px 6px 0px 0px;
    &:nth-child(1) {
      border-left: 1px solid rgb(56%, 60%, 73%, 0.15);
    }
    &_active {
      color: $green-color;
      padding: 2rem 3.4rem 1rem;
      border: none;
      background: #ffffff;
      box-shadow: 0px -12px 15px rgba(136, 152, 206, 0.19);
      border-radius: 6px 6px 0px 0px;
    }
  }
  &__buttons {
    display: flex;
    gap: 2.5rem;
    margin-left: auto;
    &_cart {
      background: #FFFFFF;
      box-shadow: 0px 4px 24px rgba(166, 175, 203, 0.32);
      border-radius: 100px;
      font-family: 'Lato', sans-serif;
      font-weight: 500;
      font-size: 15px;
      text-align: center;
      color: #3E3E51;
      height: 40px;
    }
    &_search {
      font-size: 1.6rem;
      padding: .8rem 3.5rem;
      background: #32BD1B;
      box-shadow: 0px 4px 24px rgba(166, 175, 203, 0.32);
      border-radius: 100px;
      font-family: 'Lato', sans-serif;
      font-weight: 500;
      text-align: center;
      color: #FFFFFF;
    }
  }
}
.filter-wrapper {
  background-color: $default-color;
  box-shadow: 0px 0px 24px rgba(166, 175, 203, 0.16);
  border-radius: 0px 0px 23px 23px;
  padding: 0 20px 0;
}

.filter-form {
  display: flex;
  padding: 2.6rem 0;
  &__button {
    display: flex;
    align-items: center;
    color: $green-color;
    gap: 1.2rem;
    cursor: pointer;
    margin-left: auto;
  }
  &__select {
    display: flex;
    gap: 4.8rem;
    width: 90%;
  }
  &__input {
    flex: 1 1 auto;
    align-items: center;
    display: flex;

    & input {
      max-width: 40rem;
      width: 100%;
      border: none;
      min-height: 2.4rem;
    }
  }
  &__checkbox {
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 2.4rem;
    & label {
      color: $vip-color;
    }
    &::after {
      content: "";
      position: absolute;
      width: 0.1rem;
      height: 50%;
      top: 25%;
      right: -2.4rem;
      background: #e1e5f2;
    }
  }
}

</style>
