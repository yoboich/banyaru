<template>
  <div class="calculator__params">
    <CalculatorCounter />
    <CalculatorReceiver />
    <CalculatorTimeText v-if="props.isTimeCalendar" />
  </div>
</template>

<script setup>
const props = defineProps({
  isTimeCalendar: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss">
.calculator__params {
  margin-bottom: 40px;

  &-item {
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: 15px;

    margin-bottom: 20px;

    &:last-of-type {
      margin-bottom: 0;
    }

    .calculator__param {
      &-title {
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 5px;
      }

      &-suptitle {
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        color: #8f99ba;
      }
    }
  }
}
</style>
