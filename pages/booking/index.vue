<template>
  <section class="booking">
    <BookingSearchForm class="p-x" />
  </section>
</template>

<script setup>
definePageMeta({
  layout: "map-page",
});

useHead({ title: "Баня.ру – портал о банях и саунах России" });
</script>

<style lang="scss">
.booking {
  height: 100%;
}
</style>
