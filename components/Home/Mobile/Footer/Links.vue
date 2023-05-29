<template>
  <div class="footer__links">
    <h2 class="footer__links-title">Объявления по всей россии</h2>
    <ul class="footer__links-items">
      <li class="footer__links-item" v-for="region of regions" :key="region">
        <nuxt-link to="/search/filter">
          <span>{{ region }}</span>
          <IconBase icon="arrow-left" color="green" />
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
const regions = ref([
  "Москва",
  "Санкт-Петербург",
  "Адыгея",
  "Алтай (Республика)",
  "Алтайский край",
  "Показать все регионы",
]);
</script>

<style lang="scss" scoped>
.footer__links {
  margin-bottom: 50px;
  &-title {
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    margin-bottom: 40px;
  }

  &-items {
  }

  &-item {
    a {
      display: block;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;

      border-bottom: 1px solid rgba(143, 153, 186, 0.2);
    }

    svg {
      transform: rotate(180deg);
      height: 14px;
    }

    span {
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;
      color: $green;
    }
  }
}
</style>
