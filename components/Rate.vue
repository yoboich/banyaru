<template>
  <div class="rate">
    <img src="~/assets/img/icon/star-green.svg" alt="" />
    <span>
      {{ props.rate }}
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  rate: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.rate {
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;

    background: $green-color;
    color: #fff;
    padding: 0 5px;
    border-radius: 5px;
  }
}
</style>
