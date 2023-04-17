<script lang="ts" setup>
let isActive = ref(false);

let activeMenu = ref(0);
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <NuxtLink to="/" class="header__logo">
          <img src="@/assets/img/logo.png" alt="Баня" />
        </NuxtLink>
        <NuxtLink to="/" class="header__logo plus-logo">
          <img src="@/assets/img/header-plus.jpg" alt="plus" />
        </NuxtLink>
        <transition name="fade">
          <TheHeaderCitySelect />
        </transition>
        <div class="menu-items1">
          <ul class="nav paddings">
            <li
              @click="(activeMenu = 1), (isActive = true)"
              :class="[
                activeMenu == 1 && isActive == true ? 'nav__item_active' : '',
              ]"
              class="nav__item"
            >
              Снять
            </li>
            <li
              @click="(activeMenu = 2), (isActive = true)"
              :class="[
                activeMenu == 2 && isActive == true ? 'nav__item_active' : '',
              ]"
              class="nav__item"
            >
              Услуги
            </li>
            <li
              @click="(activeMenu = 3), (isActive = true)"
              :class="[
                activeMenu == 3 && isActive == true ? 'nav__item_active' : '',
              ]"
              class="nav__item"
            >
              Купить
            </li>
            <li
                @click="(activeMenu = 4), (isActive = true)"
                :class="[
                activeMenu == 4 && isActive == true ? 'nav__item_active' : '',
              ]"
                class="nav__item color"
            >
              Плюс
            </li>
            <transition name="fade">
              <TheHeaderDropdownMenu
                :activeMenu="activeMenu"
                @close="() => (isActive = false)"
                v-if="isActive"
              />
            </transition>
          </ul>
          <ul class="nav-icons">
            <li class="nav-icons__item">
              <img src="@/assets/img/icon/phone.jpg" alt="phone" />
            </li>
            <li class="nav-icons__item">
              <img src="@/assets/img/icon/heart.jpg" alt="heart" />
            </li>
            <li class="nav-icons__item">
              <img src="@/assets/img/icon/cart.jpg" alt="cart" />
              <span class="counter">3</span>
            </li>
          </ul>
        </div>
        <div class="nav-btns">
          <nuxt-link to="/personal-announcement"><button class="btn btn-green">Разместить объявление</button></nuxt-link>
          <div class="btn-login">
            <img src="@/assets/img/icon/avatar.svg" alt="" />
            <span>Вход</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.paddings{
  padding: 0!important;
}
.plus-logo{
  margin: 0 10px 0;
}
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
.color {
  color: #A169F7!important;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background-color: $default-color;
  box-shadow: 0px 11px 48px rgba(178, 188, 221, 0.15);
  border-radius: 23px;
  width: 98%;
  margin: 0 auto 0;

  &__content {
    display: flex;
    align-items: center;
    // justify-content: space-between;
    height: 8rem;
  }
  &__logo {
    & img {
      max-width: 13.3rem;
      width: 100%;
      height: auto;
    }
  }
}

.nav-icons__item{
  width: 26.02px;
  height: 26.25px;
  margin: 0 30px 0 0;
}

.menu-items1 {
  display: flex;
  align-items: center;
  gap: 3.8rem;
  margin: 0 auto;
}
.nav {
  display: flex;
  gap: 2.8rem;
  align-items: center;
  border: 2px solid #DCE1F0;
  border-radius: 100px;
  margin: 0 0 0 45px;
  padding: 13px 0 0;
  &__item {
    cursor: pointer;
    position: relative;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #3E3E51;
    padding: 7px 15px;
    &_active {
      background: #32BD1B;
      border-radius: 100px;
      color: #F1F3F9!important;
    }
  }
}
.nav-icons {
  display: flex;
  align-items: center;
  &__item {
    position: relative;
    & img {
      width: 100%;
      max-width: 2.7rem;
      height: auto;
    }
    &:nth-child(2):after {
      content: "";
      position: absolute;
      width: 0.1rem;
      height: 2.3rem;
      top: 0;
      right: -1.8rem;
      background: #e1e5f2;
    }
    &:nth-child(2):before {
      content: "";
      position: absolute;
      width: 0.1rem;
      height: 2.3rem;
      top: 0;
      left: -1.8rem;
      background: #e1e5f2;
    }
    & .counter {
      position: absolute;
      top: -1rem;
      right: -1rem;
      max-width: 1rem;
      width: 100%;
      max-height: 1rem;
      height: 100%;
      background: $red-color;
      border-radius: 100%;
      font-size: 0.9rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;
      color: $default-color;
    }
  }
}
.nav-btns {
  display: flex;
  margin-left: auto;
  align-items: center;
  gap: 2.3rem;
  & .btn {
    padding: 0.75rem 2rem;
    font-size: 1.4rem;
    width: 222px;
    height: 35px;
    background: #32BD1B;
    box-shadow: 0px 4px 24px rgba(166, 175, 203, 0.32);
    border-radius: 100px;
  }
  & .btn-login {
    cursor: pointer;
    padding: 0.7rem 1.2rem;
    display: flex;
    gap: 1.5rem;
    box-shadow: 0px 6px 21px rgba(166, 175, 205, 0.28);
    border-radius: $mainBorderRadius;
  }
}
</style>
