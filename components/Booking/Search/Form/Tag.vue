<template>
  <button class="booking-tag">
    <span>{{ name }}</span>
    <IconBase class="icon-close" icon="close" color="white" />
  </button>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.booking-tag {
  //   padding: 6px 10px;
  padding: 6px 17.5px;

  border: 2px solid #dadeec;
  border-radius: 100px;
  background: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  font-weight: 500;
  font-size: 20px;
  line-height: 100%;

  transition: all 0.2s;
  cursor: pointer;

  .icon-close {
    // display: none;
    width: 0;
    transition: all 0.2s;
  }

  &:hover {
    color: #f1f3f9;
    background: $green;
    border-color: $green;
  }

  &.active {
    background: $green;
    border-color: $green;
    color: #f1f3f9;
    padding: 6px 10px;

    .icon-close {
      width: 15px;
    }
  }
}
</style>
