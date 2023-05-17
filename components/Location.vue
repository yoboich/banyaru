<template>
  <div class="location">
    <div class="location-place">
      <div class="dot"></div>
      <span>{{ props.place }}</span>
    </div>
    <div class="location-time">
      <img src="~/assets/img/icon/human_run.svg" alt="" />
      <span>{{ props.time }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  place: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.location {
  display: flex;
  align-items: center;
  gap: 5px;

  &-place {
    display: flex;
    align-items: center;
    gap: 8px;

    span {
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;
    }

    .dot {
      width: 12px;
      height: 12px;
      background: $secondary-color;
      border-radius: 50%;
    }
  }

  &-time {
    display: flex;
    align-items: center;
    gap: 5px;

    span {
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;
      color: $secondary-color;
    }
  }
}
</style>
