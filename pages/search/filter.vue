<template>
  <section class="search-filter">
    <SearchFilter />
  </section>
</template>

<script setup>
definePageMeta({
  layout: "map-page",
});

useHead({ title: "Баня.ру – портал о банях и саунах России" });
</script>

<style lang="scss">
.search-filter {
  height: 100%;
  padding: 20px;
}
</style>
