<template>
  <div class="calculator__params-item receiver">
    <div class="calculator__param-label">
      <h2 class="calculator__param-title">На кого заказ</h2>
      <span class="calculator__param-suptitle"></span>
    </div>
    <input
      class="receiver-input"
      placeholder="Имя"
      v-model="calculatorData.receiver"
    />
  </div>
</template>

<script setup>
const calculatorData = useState("calculatorData");
</script>

<style lang="scss" scoped>
.receiver {
  h2 {
    margin-bottom: 0;
  }

  &-input {
    border: 2px solid #dadeec;
    border-radius: 100px;
    filter: drop-shadow(0px 4px 24px rgba(166, 175, 203, 0.32));
    background: transparent;

    max-width: 200px;
    padding: 8px 20px;

    font-weight: 600;
    font-size: 14px;
    line-height: 20px;

    &::placeholder {
      color: #8f99ba;
    }

    &:focus {
      outline: none;
    }
  }
}
</style>
