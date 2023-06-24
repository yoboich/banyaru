<template>
  <div
    class="switch"
    :class="{
      active: activeTab,
    }"
    ref="btnElements"
  >
    <button
      type="button"
      class="switch__btn"
      :class="{active: activeTab === i}"
      v-for="(tab, i) of tabs"
      :key="tab"
      @click="selectTab(i)"
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
  activeTab: {
    type: Number,
    default: () => 0
  },
});

const emits = defineEmits(["tabChanged"]);
const btnElements = ref();

const btns = ref()

onMounted(() => {
  btns.value = btnElements.value.querySelectorAll('.switch__btn')
})

const activeTab = ref(props.activeTab);

const btnWidth = 100 / props.tabs.length;

const left = computed(() =>
  activeTab.value ? btnWidth * activeTab.value + "%" : '2.5px'
);

const width = btnWidth + "%";

const selectTab = (i) => {
  activeTab.value = i;
  emits("tabChanged", activeTab.value);
};

defineExpose({
  activeTab,
});
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
      left: v-bind(left) !important;
    }
  }


  &::after {
    content: "";
    position: absolute;
    left: 2.5px;
    top: 50%;
    transform: translate(0, -50%);
    width: calc(v-bind(width) - 2.5px);
    height: calc(100% - 5px);
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

    &.active {
      font-weight: bold;
    }
  }
}
</style>
