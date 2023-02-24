<script setup>
let activeTab = ref(1);
let isActive = ref(false);
</script>

<template>
  <div class="mobile-filter">
    <div class="mobile-filter__container">
      <div class="mobile-filter__top">
        <div @click="$emit('close')" class="mobile-filter__close">
          <img src="@/assets/img/icon/close.svg" alt="" />
        </div>
        <div class="mobile-filter__logo">
          <img src="@/assets/img/logo2.png" alt="" />
        </div>
        <p>Очистить</p>
      </div>

      <div class="nav">
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
      <Transition name="fade">
        <TheHeaderCitySelect class="city-select" />
      </Transition>
      <div class="search-input">
        <input placeholder="Метро, район, улица, название" class="" type="" />
      </div>
      <div class="place-tab">
        <div class="place-tab__title">Место отдыха</div>
        <div class="place-tab__inner">
          <div class="place-tab__item active">
            <span>Баня / Сауна</span>
          </div>
          <div class="place-tab__item">
            <span>Номер</span>
          </div>
        </div>
      </div>
      <div class="filter">
        <div class="filter__title">Вид Парной</div>
        <div class="filter__inner">
          <div class="filter__item">Баня на дровах</div>
          <div class="filter__item">Хаммам</div>
          <div class="filter__item">Сауна</div>
          <div class="filter__item">Сауна в центре</div>
          <div class="filter__item">Сауна с бассейном</div>
          <div class="filter__item">Баня</div>
          <div class="filter__item">Баня на дровах</div>
          <div class="filter__item">Хаммам</div>
          <div class="filter__item">Сауна</div>
          <div class="filter__item">Сауна в центре</div>
          <div class="filter__item">Сауна с бассейном</div>
        </div>
      </div>
      <button class="btn btn-green">Показать 120 объявлений</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  transform: translateY(100%);
  opacity: 0.5;
}
.mobile-filter {
  z-index: 50;
  position: absolute;
  left: 0;
  bottom: 0;
  top: 6rem;
  background: #ffffff;
  box-shadow: 0px 6px 50px rgba(166, 175, 203, 0.28);
  border-radius: 23px;
  height: 100%;
  width: 100%;
  &__container {
    background: #ffffff;
    box-shadow: 0px 6px 50px rgba(166, 175, 203, 0.28);
    border-radius: 23px;
    padding: 2rem;
  }
  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & p {
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 1.8rem;
      color: $green-color;
    }
  }
  &__logo {
    margin-left: 4rem;
  }
  &__close {
    cursor: pointer;
    & img {
      max-width: 1.3rem;
    }
  }
  & button {
    padding: 1.5rem 4.9rem;
    font-weight: 500;
    font-size: 2rem;
    line-height: 100%;
    width: 100%;
  }

  .nav {
    display: flex;
    margin-top: 3rem;
    &__item {
      cursor: pointer;
      padding: 1.5rem 3.3rem;
      border-top: 1px solid rgb(56%, 60%, 73%, 0.15);
      border-right: 1px solid rgb(56%, 60%, 73%, 0.15);
      border-radius: 6px 6px 0px 0px;
      &:nth-child(1) {
        border-left: 1px solid rgb(56%, 60%, 73%, 0.15);
      }
      &_active {
        color: $green-color;
        padding: 1.5rem 3.3rem;
        border: none;
        background: #ffffff;
        box-shadow: 0px -12px 15px rgba(136, 152, 206, 0.19);
        border-radius: 6px 6px 0px 0px;
      }
    }
  }
  .city-select {
    position: relative;
    margin-top: 2.8rem;
    width: 100%;
  }
  .search-input {
    margin-top: 3rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(225, 229, 242, 0.5);
    & input {
      width: 90%;
      border: none;
      padding: 1rem;
    }
  }
  .place-tab {
    padding-bottom: 4rem;
    border-bottom: 1px solid rgba(225, 229, 242, 0.5);
    &__title {
      font-weight: 700;
      font-size: 2rem;
      line-height: 130%;
      margin-top: 2rem;
      margin-bottom: 1.4rem;
    }
    &__inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #ffffff;
      box-shadow: inset 0px 0px 8px rgba(136, 152, 206, 0.46);
      border-radius: 100px;
      padding: 0.5rem;
    }
    &__item {
      text-align: center;
      padding: 1.1rem 3rem;
      width: 50%;
      & span {
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 2rem;
      }
      &.active {
        background: #ffffff;
        box-shadow: 0px 6px 21px rgba(166, 175, 205, 0.22);
        border-radius: 100px;
        & span {
          font-weight: 700;
          font-size: 1.6rem;
          line-height: 2rem;
        }
      }
    }
  }
  .filter {
    &__title {
      font-weight: 700;
      font-size: 2rem;
      line-height: 130%;
      margin-top: 2rem;
      margin-bottom: 1.4rem;
    }
    &__inner {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      column-gap: 1rem;
      row-gap: 2.2rem;
      margin-bottom: 4.3rem;
    }
    &__item {
      background: #ffffff;
      box-shadow: 1px 7px 21px rgba(166, 175, 205, 0.22);
      border-radius: 100px;
      padding: 0.6rem 1.2rem;
    }
  }
}
</style>
