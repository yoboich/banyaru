<template>
  <div class="reviews">
    {{ props.text }}
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.reviews {
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
}
</style>
