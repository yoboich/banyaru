<template>
  <label :for="inputId" class="checkbox">
    <input :id="inputId" type="checkbox" />
    <IconBase icon="new-post-check" color="green" />
  </label>
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
.checkbox {
  width: 25px;
  height: 25px;
  background: #fff;
  border: 2px solid #dadeec;
  border-radius: 5px;
  position: relative;
  display: block;
  cursor: pointer;

  .icon-base {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }

  input {
    display: none;

    &:checked {
      & + .icon-base {
        opacity: 1;
      }
    }
  }
}
</style>
