<template>
  <div class="app" :class="{ mobile: width <= 1000 }">
    <VitePwaManifest />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useWindowSize } from "@vueuse/core";
const { width } = useWindowSize();
</script>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
