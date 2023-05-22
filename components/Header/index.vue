<template>
  <header class="header">
    <div class="container header__container">
      <nuxt-link to="/">
        <img class="header__logo" src="/logo.svg" alt="" />
      </nuxt-link>
      <HeaderNav />
      <HeaderBtn />
    </div>
  </header>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.header {
  padding: 20px;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
