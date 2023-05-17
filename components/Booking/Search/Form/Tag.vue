<template>
  <button class="booking-tag">
    <span>{{ name }}</span>
    <IconClose />
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

  svg.icon-close {
    // display: none;
    width: 0;
  }

  &:hover {
    color: #f1f3f9;
    background: #32bd1b;
    border-color: #32bd1b;
  }

  &.active {
    background: #32bd1b;
    border-color: #32bd1b;
    color: #f1f3f9;
    padding: 6px 10px;

    svg.icon-close {
      stroke: #fff;
      //   display: block;
      width: 15px;
    }

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
