<template>
  <div class="news home__news">
    <h1 class="news-title">
      <nuxt-link to="/news">Новости</nuxt-link>
    </h1>
    <div class="news__items">
      <HomeNewsItem v-for="i of 3" :key="i" />
    </div>
    <HomeNewsAdItem v-if="props.ads" />
  </div>
</template>

<script setup>
const props = defineProps({
  ads: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.news {
  border-radius: 20px;
  background: #fff;
  padding: 40px 30px 40px;

  &-title {
    font-weight: 700;
    font-size: 28px;
    line-height: 100%;
    margin-bottom: 40px;
  }

  &.mobile {
    background: transparent;
    padding: 0;
    margin-bottom: 50px;

    .news-title {
      font-weight: 700;
      font-size: 28px;
      line-height: 100%;
      display: block;
      margin-bottom: 35px;
    }
    .news__item {
      padding-top: 0;

      display: flex;
      flex-direction: column;

      padding-bottom: 30px;

      &:not(:last-of-type) {
        margin-bottom: 40px;
      }
    }

    :deep(.news__item) {
      & > a {
        margin-bottom: 15px;
      }

      .news__item-title {
        font-weight: 500;
        font-size: 20px;
        line-height: 100%;
      }

      .news__item-image {
        height: 250px;
        margin-bottom: 0;

        @media (max-width: 768px) {
          height: 160px;
        }
      }

      .news__item-header {
        order: 2;
        margin-bottom: 20px;

        @media (max-width: 768px) {
          flex-direction: column-reverse;
          align-items: flex-start;
          gap: 5px;
        }
      }

      .news__item-description {
        order: 3;
      }

      .news__item-footer {
        order: 4;

        .author {
          font-size: 14px;
        }

        .likes {
          @media (max-width: 768px) {
            display: none;
          }
        }
      }
    }
  }

  &__item {
    &:last-of-type {
      border-bottom: none;
    }
  }
}
</style>
