<template>
  <button class="btn">
    <slot />
  </button>
</template>

<script setup></script>

<style lang="scss">
.btn {
  padding: 20px 10px;
  width: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #fff;

  font-size: 20px;
  line-height: 100%;

  border-radius: 100px;
  border: 1px solid $green;
  background: $green;

  cursor: pointer;
}
</style>
