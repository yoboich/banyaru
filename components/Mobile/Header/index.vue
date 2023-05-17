<template>
  <header class="header header-mobile">
    <div class="container">
      <nuxt-link to="/">
        <div class="header__logo">
          <img src="~/assets/img/logo-with-text.svg" alt="" />
        </div>
      </nuxt-link>
      <div class="header__btns">
        <div class="header__location">
          <CitySelect />
        </div>
        <UIButton class="header__btn">
          <img src="~/assets/img/icon/plus-symbol.svg" alt="" />
        </UIButton>
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
  &-mobile {
    margin: 20px 0;
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  &__btns {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    .btn {
      padding: 12px;
      width: 40px;
      height: 40px;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
