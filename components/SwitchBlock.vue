<template>
  <div
    class="switch"
    :class="{
      active: activeTab,
    }"
  >
    <button
      type="button"
      class="switch__btn"
      v-for="(tab, i) of tabs"
      :key="tab"
      @click="selectTab(i)"
      ref="btnElements"
    >
      {{ tab }}
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  tabs: {
    type: Array,
    required: true,
  },
});

const emits = defineEmits(["tabChanged"]);
const btnElements = ref();

const activeTab = ref(0);

const btnWidth = 100 / props.tabs.length;

const left = computed(() =>
  activeTab.value ? btnWidth * activeTab.value + "%" : "5px"
);

const width = btnWidth + "%";

const selectTab = (i) => {
  activeTab.value = i;
  emits("tabChanged", activeTab.value);
};
</script>

<style lang="scss" scoped>
.switch {
  width: 100%;
  padding: 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #f1f3f9;
  border-radius: 100px;

  position: relative;

  &.active {
    &::after {
      left: v-bind(left);
    }
  }

  &::after {
    content: "";
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translate(0, -50%);
    width: calc(v-bind(width) - 5px);
    height: calc(100% - 10px);
    border-radius: 100px;
    background: #fff;
    transition: all 0.2s;
    box-shadow: 0px 6px 21px rgba(166, 175, 205, 0.22);
  }

  &__btn {
    background: transparent;
    width: v-bind(width);
    padding: 10px 0;
    position: relative;
    z-index: 2;

    font-weight: 500;
    font-size: 24px;
    line-height: 130%;
    cursor: pointer;
  }
}
</style>
