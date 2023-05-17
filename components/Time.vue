<template>
  <div class="work-time">
    <img
      :src="getLocalUrl(`img/icon/time-${props.closed ? 'red' : 'green'}.svg`)"
      alt=""
    />
    <span
      >{{ props.closed ? "Откроется в" : "Открыто до" }} {{ props.time }}</span
    >
  </div>
</template>

<script setup>
const props = defineProps({
  time: {
    type: String,
    required: true,
  },
  closed: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.work-time {
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
  }
}
</style>
