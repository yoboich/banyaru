<template>
  <div>
    <Header />
    <main>
      <slot />
    </main>
    <Footer v-if="width > 1000" />

    <!-- <TheHeader v-if="width > 1000" /> -->
    <!-- <MobileHeader v-else /> -->
  </div>
</template>

<script setup>
import { useWindowSize } from "@vueuse/core";
const { width } = useWindowSize();
</script>

<style scoped lang="scss"></style>
