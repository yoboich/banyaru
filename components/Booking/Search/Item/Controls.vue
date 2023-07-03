<template>
  <div class="booking__item-controls">
    <button class="booking__item-btn more">
      <IconBase icon="more" color="gray" />
    </button>
    <button class="booking__item-btn">
      <IconBase icon="favorite" color="gray" />
    </button>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.booking__item-btn {
  display: flex;
  justify-content: center;
  align-items: center;

  background: transparent;
  cursor: pointer;
  padding: 0;

  &.more {
    max-width: 20px;
  }

  &:hover {
    svg {
      --icon-color: #{$green};
    }
  }
}
.booking__item-controls {
  display: flex;
  align-items: center;
  gap: 15px;
}
</style>
