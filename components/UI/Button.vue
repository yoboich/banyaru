<template>
  <button class="btn">
    <slot />
  </button>
</template>

<script setup></script>

<style lang="scss" scoped>
.btn {
  background: #32bd1b;
  border-radius: 100px;
  padding: 20px 45px;
  color: #fff;

  font-weight: 500;
  font-size: 20px;
  line-height: 100%;

  cursor: pointer;
}
</style>
