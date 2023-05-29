<template>
  <div class="profile-tabs" ref="tabs">
    <div
      class="profile-tabs__item"
      :class="{ active: activeTab === i }"
      v-for="(tab, i) of props.tabs"
      :key="i"
      @click="changeTab(i)"
    >
      {{ tab }}
    </div>
    <div
      class="line"
      :style="{ width: lineWidth + 'px', left: lineLeft + 'px' }"
    ></div>
  </div>
</template>

<script setup>
const props = defineProps({
  tabs: Array,
});

const lineWidth = ref(0);
const lineLeft = ref(0);

const tabElements = ref();
const tabs = ref()
const activeTab = ref(0);

onMounted(() => {
  tabElements.value = tabs.value.querySelectorAll('.profile-tabs__item')
  changeTab(0);
});

const changeTab = (i) => {
  activeTab.value = i;

  lineWidth.value = tabElements.value[i].offsetWidth;
  lineLeft.value = tabElements.value[i].offsetLeft;
};
</script>

<style lang="scss" scoped>
.profile-tabs {
  display: flex;
  position: relative;
  width: fit-content;

  .line {
    position: absolute;
    bottom: 0;
    width: 20px;
    height: 3px;
    background: $green;
    z-index: 2;
    transform: translateY(calc(100% / 6));
    border-radius: 3px;
    transition: all 0.2s;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: $light-gray;
    border-radius: 2px;
  }

  &__item {
    padding: 0 25px 10px;
    font-size: 16px;
    line-height: 18px;
    cursor: pointer;
    transition: all 0.2s;

    &.active,
    &:hover {
      color: $green;
    }
  }
}
</style>
