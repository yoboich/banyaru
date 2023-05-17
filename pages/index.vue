<script setup>
import { useWindowSize } from "@vueuse/core";
const { width } = useWindowSize();

const isMobile = computed(() => width.value <= 1000);

useHead({ title: "Баня.ру – портал о банях и саунах России" });
</script>

<template>
  <div>
    <div v-if="isMobile">
      <TheHeaderNav class="mobile" />
      <div class="container container-mobile">
        <HomeSlider />
        <HomeMobileSearchServices />
        <HomeMobileServices />
      </div>
      <div class="container">
        <HomeMobileCatalog />
        <HomeMobileLinks />
        <HomeFilterSliderPlace class="mobile" title="Популярные бани" />
        <HomeFilterSliderPlace class="mobile" title="Популярные услуги" />
        <HomeFilterSliderRecentPlace
          class="mobile"
          title="Недавно вы смотрели"
        />
        <HomeNews class="mobile" ads />
      </div>
      <HomeMobileFooter />
    </div>
    <div class="container" v-else>
      <HomeSlider />
      <main class="home__content">
        <div class="home__content-column">
          <BookingSearchForm />
        </div>
        <div class="home__content-column">
          <HomeMap />
          <HomeLinks />
          <HomeFilterSliderPlace title="Популярные бани" />
          <HomeFilterSliderPlace title="Популярные услуги" ads />
          <HomeFilterSliderRecentPlace title="Недавно вы смотрели" />
          <HomeNews />
        </div>
      </main>

      <!-- <HomeMap /> -->
      <!-- <HomeDiscount /> -->
      <!-- <HomePopular /> -->
      <!-- <HomePremium /> -->
      <!-- <HomeInfo /> -->
    </div>

    <!-- <div v-if="false">
    <HomeMobileTop />
    <div class="add-advert">+ Разместить объявление</div>
    <HomeMobileSearch />
    <HomeMobileCatalog />
    <HomeMobileServices />
    <HomeMobileAdvert />
    <HomeMobileLinks />
    <HomeMobileAdvertsLocation />
    <HomeMobileFooter />
  </div> -->
  </div>
</template>

<style lang="scss" scoped>
.add-advert {
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2rem;
  margin-top: 5rem;
  padding: 0 2rem;
  color: $green-color;
}
// .mobile-container {
//   padding: 0 2rem;
// }

.container-mobile {
  padding-left: 20px;
  padding-right: 0;
}

.home__content {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 20px;

  @media (max-width: 1375px) {
    grid-template-columns: 1fr 1fr;
  }

  &-column {
    display: flex;
    flex-direction: column;
    gap: 20px;
    min-width: 0;
  }
}
</style>
