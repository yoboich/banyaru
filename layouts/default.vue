<script setup>
import { useWindowSize } from "@vueuse/core";

const { width, height } = useWindowSize();
</script>

<template>
  <ClientOnly fallback-tag="span" fallback="Loading comments...">
    <div class="wrapper">
      <TheHeader v-if="width > 1000" />
      <!-- <Filter v-if="isLarge" /> -->
      <MobileHeader v-else />
      <!-- <div class="wrapper-content"> -->
      <slot />
      <!-- </div> -->

      <!-- <TheFooter v-if="width > 1000" /> -->
      <Footer v-if="width > 1000" />
    </div>
  </ClientOnly>
</template>

<style scoped lang="scss">
.wrapper-content {
  @media screen and (max-width: 768px) {
    margin: 0;
  }
}
</style>
