<template>
  <header class="header" v-if="width > 1000">
    <div class="container header__container">
      <nuxt-link to="/">
        <img class="header__logo" src="/logo.svg" alt="" />
      </nuxt-link>
      <HeaderNav />
      <HeaderButton />
    </div>
  </header>
  <HeaderMobile v-else />
</template>

<script lang="ts" setup>
import { useWindowSize } from "@vueuse/core";
const { width } = useWindowSize();
</script>

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
