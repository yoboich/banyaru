<template>
  <div class="purchases">
    <div class="container">
      <div class="purchases-inner">
        <h1 class="purchases__title">Покупки</h1>
        <div class="purchases__content">
          <SwitchBlock :tabs="switchItems" ref="switchElement" :activeTab="queries[query.tab]" />
          <ProfileFavorite v-if="switchElement?.activeTab === 0" />
          <ProfileCart v-else-if="switchElement?.activeTab === 1" />
          <ProfileOrder v-else />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

definePageMeta({
  layout: 'purchases'
})

const switchItems = ["Избранное", "Корзина", "Заказы"];
const switchElement = ref();

const route = useRoute()
const query = route.query

const queries = {
  favorite: 0,
  cart: 1,
  orders: 2
}
</script>

<style lang="scss" scoped>
.purchases {
  @media (max-width: 1000px) {
    padding-bottom: 100px;
  }
  &-inner {
    background: #ffffff;
    box-shadow: 0px 11px 48px rgba(178, 188, 221, 0.15);
    border-radius: 25px;
    min-height: 80vh;
    padding: 24px;

    @media (max-width: 1000px) {
      padding: 16px 0 0;
      box-shadow: none;
    }
  }

  &__title {
    font-weight: 700;
    font-size: 28px;
    line-height: 100%;
    margin-bottom: 30px;

    @media (max-width: 1000px) {
      font-size: 24px;
      text-align: center;
    }
  }

  &__content {
    padding: 0 80px 30px;
    
    @media (max-width: 1400px) {
      padding: 0 0 30px;
    }

    & :deep(.switch) {
      max-width: 700px;
      margin: 0 auto 40px;
      .switch__btn {
        font-size: 20px;
      }
    }
  }

  .container {
    padding: 0 15px;
  }
}
</style>
