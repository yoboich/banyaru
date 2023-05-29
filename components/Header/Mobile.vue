<template>
  <header class="header header-mobile">
    <div class="container">
      <nuxt-link to="/">
        <div class="header__logo">
          <img src="/logo.svg" alt="" />
        </div>
      </nuxt-link>
      <div class="header__btns">
        <div class="header__location">
          <CitySelect />
        </div>
        <nuxt-link to="/create-post">
          <UIButton class="header__btn">
            <IconBase icon="plus" color="white" />
          </UIButton>
        </nuxt-link>
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
  &-mobile {
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0;
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
