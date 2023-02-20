<script setup>
const isLarge = ref(true);

onMounted(() => {
  if (window.innerWidth <= 768) {
    isLarge.value = false;
  }
});

useHead({ title: "Баня.ру – портал о банях и саунах России" });
</script>

<template>
  <div class="container" v-if="isLarge">
    <Filter />
    <HomeSlider />
    <HomeDiscount />
    <HomePopular />
    <HomeMap />
    <HomeLinks />
    <HomePremium />
    <HomeInfo />
  </div>

  <div v-else>
    <HomeMobileTop />
    <div class="mobile-container">
      <div class="add-advert">+ Разместить объявление</div>
      <HomeMobileSearch/>
      <HomeMobileCatalog/>
      <HomeMobileServices/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.add-advert {
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2rem;
  margin-top: 5rem;
  color:$green-color;
}
.mobile-container{
  padding: 0 2rem;
}
</style>
