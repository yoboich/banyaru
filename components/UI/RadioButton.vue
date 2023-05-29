<template>
  <label class="radio" :for="inputId">
    <input
      v-model="modelValue"
      :name="props.name"
      :id="props.inputId"
      :value="props.inputId"
      type="radio"
    />
    <div class="dot"></div>
  </label>
</template>

<script setup>
const props = defineProps({
  inputId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const modelValue = defineModel();
</script>

<style lang="scss" scoped>
.radio {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 2px solid #dadeec;
  background: #fff;
  position: relative;
  display: block;
  cursor: pointer;

  &:hover {
    .dot {
      transform: translate(-50%, -50%) scale(1);
    }
  }

  & .dot {
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: $green;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: all 0.2s;
  }

  input {
    display: none;

    &:checked + .dot {
      transform: translate(-50%, -50%) scale(1);
    }
  }
}
</style>
