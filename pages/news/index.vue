<template>
  <section class="news">
    <div class="container">
      <div class="news__header">
        <h1 class="news__title">Новости</h1>
        <ul class="news__header-tabs">
          <div
            class="line"
            :style="{ width: lineWidth + 'px', left: lineLeft + 'px' }"
          ></div>
          <li
            ref="tabs"
            class="news__header-tab"
            v-for="(tab, i) of tabLabels"
            :key="tab"
            :class="{ active: i === activeTab }"
            @click="changeTab(i)"
          >
            {{ tab }}
          </li>
        </ul>
      </div>
      <div class="news__items">
        <NewsItem v-for="i of 6" :key="i" />
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
  changeTab(0);
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

    &-tabs {
      display: flex;
      align-items: center;
      gap: 50px;
      position: relative;

      .line {
        position: absolute;
        background: $green;
        border-radius: 3px;
        height: 3px;
        bottom: 0;
        transition: all 0.2s;
      }
    }

    &-tab {
      font-size: 16px;
      line-height: 18px;
      transition: all 0.2s;
      cursor: pointer;
      padding: 0 10px 10px;

      &:hover,
      &.active {
        color: $green;
      }
    }
  }

  &__items {
    padding: 0 120px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }

  .container {
    padding: 35px;
    background: #ffffff;
    border-radius: 25px;
  }
}
</style>
