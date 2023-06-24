<template>
  <div class="catalog">
    <div class="catalog__header">
      <h1 class="catalog-title">Каталог</h1>
      <nuxt-link class="catalog-link" to="/search?tab=categories">Все</nuxt-link>
    </div>
    <div class="catalog__content">
      <nuxt-link to="/search?tab=list" class="catalog-item" v-for="({icon, name}, i) of categories" :key="i">
        <IconBase :icon="icon" subpath="/categories"/>
        <span>{{ name }}</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>

const categories = ref([
  {
    "icon": "28bani-sauny",
    "name": "Бани-сауны"
  },
  {
    "icon": "26nomera",
    "name": "Номера"
  },
  {
    "icon": "30massag_m_2",
    "name": "Массаж М 2"
  },
  {"icon": "2banshiki", "name": "Баньщики"}
])
</script>

<style lang="scss" scoped>
.catalog {
  margin-bottom: 30px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }

  &-title {
    font-weight: 700;
    font-size: 28px;
    line-height: 100%;
  }

  &-link {
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    color: #17a300;
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    aspect-ratio: 1;

    background: #ffffff;
    border: 2px solid #dadeec;
    border-radius: 25px;

    span {
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
    }

    svg {
      width: 60px;
      height: 60px;
      --icon-color: #{$green};
    }
  }
}
</style>
