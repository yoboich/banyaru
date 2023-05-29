<template>
  <section class="booking">
    <BookingSearchForm v-if="width > 1000" class="p-x"/>
    <BookingMobileSearchForm v-else />
  </section>
</template>

<script setup>
import {useWindowSize} from "@vueuse/core";

const {width} = useWindowSize()

definePageMeta({
  layout: "map",
});
</script>

<style lang="scss">
.booking {
  height: 100%;
}
</style>
