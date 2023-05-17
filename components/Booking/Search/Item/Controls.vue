<template>
  <div class="controls">
    <button>
      <IconMore />
    </button>
    <button>
      <IconHeart />
    </button>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.controls {
  display: flex;
  align-items: center;
  gap: 15px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    background: transparent;
    cursor: pointer;
    padding: 0;

    &:hover {
      svg.icon-more {
        fill: $green-color;
      }
      svg.icon-heart {
        fill: red;
        stroke: red;
      }
    }
  }
}
</style>
