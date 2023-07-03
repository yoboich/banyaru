<template>
  <li class="post-check">
    <label :for="props.inputId" class="name"><slot /></label>
    <UICheckbox :input-id="props.inputId" />
  </li>
</template>

<script setup>
const props = defineProps({
  inputId: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.post-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  .name {
    cursor: pointer;
  }
}
</style>
