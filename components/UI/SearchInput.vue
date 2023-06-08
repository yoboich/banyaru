<template>
  <label
    for="search-input"
    class="search-input"
    :class="{ 'with-hint': props.hint }"
  >
    <input
      id="search-input"
      @input="(event) => emits('update:modelValue', event.target.value)"
      type="text"
      :placeholder="props.placeholder"
      :value="props.modelValue"
      @focus="emits('focus')"
      @blur="emits('blur')"
      autocomplete="off"
      ref="searchInput"
    />
    <button type="button" v-if="props.hint" class="hint-btn">плюс</button>
  </label>
</template>

<script setup>
import { useFocus } from '@vueuse/core'
const emits = defineEmits(["update:modelValue", "focus", "blur"]);

const props = defineProps({
  hint: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: "Поиск",
  },
  modelValue: {
    type: String,
  },
});

const searchInput = ref()
const { focused } = useFocus(searchInput, { initialValue: false })

defineExpose({
  setFocus() {
    focused.value = true
  },
  setBlur() {
    focused.value = false
  }
})
</script>

<style lang="scss" scoped>
.search-input {
  width: 100%;
  position: relative;
  display: block;

  &.with-hint {
    input {
      padding: 15px 90px 15px 25px;
    }
  }

  .hint-btn {
    padding: 5px 8px;
    background: #ed197f;

    border-radius: 12px;

    color: #fff;
    text-transform: uppercase;
    font-size: 12px;

    position: absolute;
    top: 50%;
    right: 25px;
    transform: translateY(-50%);

    transition: all 0.2s;
  }

  input {
    border: 2px solid #dadeec;
    border-radius: 100px;
    transition: all 0.2s;

    width: 100%;
    padding: 15px 25px;

    font-weight: 500;
    font-size: 24px;
    line-height: 130%;
    color: #3e3e51;

    @media (max-width: 1000px) {
      font-size: 16px;
      line-height: 18px;
    }

    &::placeholder {
      color: #8f99ba;
    }

    &:focus {
      outline: none;
    }
  }
}
</style>
