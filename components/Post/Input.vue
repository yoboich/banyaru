<template>
  <label class="post-input" :class="{ error }">
    <input
      :id="inputId"
      :type="props.type"
      :placeholder="props.placeholder"
      v-model="modelValue"
    />
    <div class="error" v-show="error">
      <div class="triangle"></div>
      {{ error?.message }}
    </div>
  </label>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: () => "text",
  },
  inputId: String,
  placeholder: String,
  error: Object,
});

const modelValue = defineModel();
</script>

<style lang="scss" scoped>
@mixin triangle($direction: up, $width: 12px, $color: red) {
  width: 0;
  height: 0;
  border: $width solid transparent;

  @if ($direction == left) {
    border-right-color: $color;
  } @else if($direction == right) {
    border-left-color: $color;
  } @else if($direction == down) {
    border-top-color: $color;
  } @else {
    border-bottom-color: $color;
  }
}

.post-input {
  position: relative;
  display: block;

  &.error {
    input {
      border-color: $red;

      &:focus {
        & + .error {
          opacity: 1;
        }
      }
    }
  }

  input {
    width: 100%;
    background: #ffffff;
    border: 2px solid #dadeec;
    border-radius: 100px;
    padding: 10px 12px;

    &[type="time"] {
      width: 110px;

      text-align: center;
      &::-webkit-calendar-picker-indicator {
        display: none;
      }
      &::-webkit-inner-spin-button {
        display: none;
      }
    }
  }

  .error {
    box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.05);
    border-radius: 15px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(calc(100% + 20px), -50%);
    padding: 10px 30px;
    background: $red;
    color: #f1f3f9;
    opacity: 0;
    transition: all 0.2s;

    .triangle {
      display: block;
      height: 15px;
      width: 15px;
      background-color: $red;
      border: $red;
      position: absolute;
      bottom: -10px;
      left: calc(50% - 10px);
      clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
      border-radius: 0 0 0 0.25em;

      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(-25%, -50%) rotate(45deg);
    }
  }
}
</style>
