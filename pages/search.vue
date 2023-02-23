<script setup>
const breadcrumbs = ref(["Главная", "Бани в городе Москва"]);
const isLarge = ref(true);

function enableCustomLayout() {
  setPageLayout(false);
}
definePageMeta({ layout: "default" });
onMounted(() => {
  if (window.innerWidth <= 768) {
    isLarge.value = false;
		enableCustomLayout()
  }
});
</script>

<template>
  <div class="search-page" v-if="isLarge">
    <div class="container">
      <Filter />
    </div>
    <div class="search">
      <div class="search__inner">
        <div class="search__left">
          <UIBreadcrumbs class="search__bread" :items="breadcrumbs" />
          <div class="search__info">
            <div class="search__title h1">Русская баня в г. Москва</div>
            <div class="search__text h4">
              Сауны бани с массажем - мы нашли для вас 550 саун и бань <br />
              в городе Москва
            </div>
          </div>
          <SearchFound v-if="true" />
          <!-- <SearchNotFound v-if="true" /> -->
        </div>
        <div class="search__right">
          <iframe
            width="100%"
            height="100%"
            class="absolute inset-0"
            frameborder="0"
            title="map"
            marginheight="0"
            marginwidth="0"
            scrolling="yes"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114111.50283511227!2d37.46580264053963!3d55.73366918983649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1675549894887!5m2!1sru!2sru"
            loading="lazy"
            style="filter: opacity(0.7)"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
  <MobileSearch v-else />
</template>

<style lang="scss" scoped>
.search-page {
  width: 100%;
}
.search {
  padding-left: 2rem;
  padding-bottom: 4.5rem;

  width: 100%;

  &__inner {
    display: flex;
    gap: 2rem;
  }

  &__left {
    padding-top: 3.5rem;
    width: 60%;
  }

  &__right {
    flex: 1;
  }

  &__recomend,
  &__bread,
  &__info {
    padding-left: 3rem;
  }

  &__info {
    padding-top: 3.2rem;
    margin-bottom: 4rem;
  }

  &__title {
    margin-bottom: 1.7rem;
    color: $mainFontColor;
  }

  &__text {
    color: $secondary-color;
  }

  &__row {
  }
}
</style>
