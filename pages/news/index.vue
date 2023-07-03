<template>
  <section class="news">
    <div class="container">
      <div class="news__header">
        <h1 class="news__title">Новости</h1>
        <ProfileTabs :tabs="tabLabels" class="news__header-tabs"/>
        <!--        <ul class="news__header-tabs">-->
        <!--          <div-->
        <!--              class="line"-->
        <!--              :style="{ width: lineWidth + 'px', left: lineLeft + 'px' }"-->
        <!--          ></div>-->
        <!--          <li-->
        <!--              ref="tabs"-->
        <!--              class="news__header-tab"-->
        <!--              v-for="(tab, i) of tabLabels"-->
        <!--              :key="tab"-->
        <!--              :class="{ active: i === activeTab }"-->
        <!--              @click="changeTab(i)"-->
        <!--          >-->
        <!--            {{ tab }}-->
        <!--          </li>-->
        <!--        </ul>-->
      </div>
      <div class="news__items">
        <NewsItem v-for="i of 6" :key="i"/>
      </div>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  layout: "header-only",
});

const tabs = ref();
const tabLabels = ref(["Новости", "Выставки", "Анекдоты"]);
const activeTab = ref(0);

const lineWidth = ref();
const lineLeft = ref();

onMounted(() => {
  // changeTab(0);
});

const changeTab = (tabIdx) => {
  activeTab.value = tabIdx;

  const tab = tabs.value[activeTab.value];

  lineWidth.value = tab.offsetWidth;
  lineLeft.value = tab.offsetLeft;
};
</script>

<style lang="scss" scoped>
.news {

  &__title {
    font-weight: 700;
    font-size: 28px;
    line-height: 100%;
  }

  &__header {
    display: flex;
    align-items: center;
    gap: 60px;
    margin-bottom: 80px;

    @media (max-width: 700px) {
      flex-direction: column;
      gap: 20px;
      margin-bottom: 40px;
    }

    & :deep(.profile-tabs) {
      .profile-tabs__item {
        padding: 0 15px 10px;
      }
    }

    &-tabs {
      &::after {
        display: none;
      }
    }
  }

  &__items {
    padding: 0 120px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;

    @media (max-width: 1200px) {
      padding: 0;
    }

    @media (max-width: 900px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }

  .container {
    padding: 35px;
    background: #ffffff;
    border-radius: 25px;
  }
}
</style>
