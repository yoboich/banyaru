<template>
  <label :for="inputId" class="post-textarea" :class="{ counter: !!counter }">
    <textarea
      v-model="modelValue"
      id="inputId"
      :placeholder="props.placeholder"
      :maxlength="counter"
    ></textarea>
    <div v-if="!!counter" class="counter">
      {{ modelValue.length }} / {{ counter }}
    </div>
  </label>
</template>

<script setup>
const props = defineProps({
  placeholder: String,
  inputId: String,
  counter: Number,
});

const modelValue = defineModel();
</script>

<style lang="scss" scoped>
.post-textarea {
  display: flex;
  background: #ffffff;
  position: relative;

  .counter {
    position: absolute;
    right: 15px;
    bottom: 10px;
    font-size: 11px;
    line-height: 13px;
    color: $gray;
    background: #fff;
  }

  textarea {
    padding: 10px 15px 30px 15px;
    width: 100%;
    height: 100%;
    min-height: 130px;
    resize: none;
    border-radius: 25px;
    border: 2px solid #dadeec;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
