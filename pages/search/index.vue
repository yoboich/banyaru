<template>
  <section class="search">
    <SearchForm />
  </section>
</template>

<script setup>
definePageMeta({
  layout: "map-page",
});

useHead({ title: "Баня.ру – портал о банях и саунах России" });
</script>

<style lang="scss">
.search {
  height: 100%;
  padding: 20px 25px;
}
</style>
