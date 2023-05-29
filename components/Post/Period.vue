<template>
  <div class="post-period">
    с <PostInput type="time" v-model="timeStart" placeholder="9:00" /> до
    <PostInput type="time" v-model="timeEnd" placeholder="18:00" />
  </div>
</template>

<script setup>
const timeStart = ref("09:00");
const timeEnd = ref("18:00");
</script>

<style lang="scss" scoped>
.post-period {
  display: flex;
  align-items: center;
  gap: 10px;
  color: $gray;

  .post-input {
    text-align: center;
    max-width: 110px;
  }
}
</style>
