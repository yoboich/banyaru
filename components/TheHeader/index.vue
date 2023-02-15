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
        <transition name="fade">
          <TheHeaderCitySelect />
        </transition>
        <div class="menu-items">
          <ul class="nav">
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
              <img src="@/assets/img/icon/messages.png" alt="" />
            </li>
            <li class="nav-icons__item">
              <img src="@/assets/img/icon/favorite.png" alt="" />
            </li>
            <li class="nav-icons__item">
              <img src="@/assets/img/icon/cart.png" alt="" />
              <span class="counter">3</span>
            </li>
          </ul>
        </div>
        <div class="nav-btns">
          <button class="btn btn-green">Разместить объявление</button>
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
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background-color: $default-color;
  box-shadow: 0px 6px 50px rgba(166, 175, 203, 0.16);

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

.menu-items {
  display: flex;
  align-items: center;
  gap: 13.8rem;
  margin: 0 auto;
}
.nav {
  display: flex;
  gap: 2.8rem;
  align-items: center;
  &__item {
    cursor: pointer;
    position: relative;
    &_active {
      &::after {
        content: "";
        width: 100%;
        height: 0.4rem;
        position: absolute;
        top: 4.7rem;
        left: 0;
        right: 0;
        opacity: 1;
        background: $green-color;
        border-radius: 2px 2px 0px 0px;
      }
    }
  }
}
.nav-icons {
  display: flex;
  align-items: center;
  gap: 2.9rem;

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
    font-size: 1.6rem;
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
