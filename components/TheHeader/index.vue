<template>
  <header class="header">
    <div class="container">
      <nuxt-link to="/">
        <div class="header__logo">
          <img src="~/assets/img/logo-with-text.svg" alt="" />
        </div>
      </nuxt-link>
      <TheHeaderNav />
      <UIButton class="header__btn">
        <img src="~/assets/img/icon/plus-symbol.svg" alt="" />
        <span>Разместить объявление</span>
      </UIButton>
    </div>
  </header>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.header {
  margin: 20px 0;
  padding: 0 20px;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__btn {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 14px 20px;
    gap: 5px;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;

    img {
      width: 14px;
      height: 30px;
    }
  }
}
</style>
