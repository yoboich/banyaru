<template>
  <button class="profile-btn">
    <slot />
  </button>
</template>

<script setup></script>

<style lang="scss">
.profile-btn {
  padding: 15px 50px;
  border-radius: 100px;
  color: $green;
  font-size: 20px;
  line-height: 100%;
  border: 2px solid #dadeec;
  background: #fff;
  transition: all 0.2s;
  cursor: pointer;
  text-align: center;

  a {
    display: block;
    width: 100%;
    height: 100%;
  }

  &:hover {
    background: $green;
    color: #fff;
  }
}
</style>
