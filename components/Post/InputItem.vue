<template>
  <div class="input-item">
    <label :for="inputId"><slot /></label>
    <PostInput :input-id="inputId" :placeholder="props.placeholder" />
  </div>
</template>

<script setup>
const props = defineProps({
  placeholder: String,
  inputId: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.input-item {
  & > label {
    display: block;
    margin-bottom: 15px;
  }

  & :deep(.post-input) {
    width: 340px;
  }
}
</style>
