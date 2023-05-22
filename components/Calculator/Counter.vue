<template>
  <div class="calculator__params-item counter">
    <div class="calculator__param-label">
      <h2 class="calculator__param-title">Количество гостей</h2>
      <span class="calculator__param-suptitle">Макс. чел: 7</span>
    </div>
    <div class="counter__controls">
      <button type="button" class="counter__controls-btn" @click="decrement">
        <img src="~/assets/icons/decrement-green.svg" alt="" />
      </button>
      <span class="counter__controls-count">
        {{ calculatorData.guests }}
      </span>
      <button type="button" class="counter__controls-btn" @click="increment">
        <img src="~/assets/icons/increment-green.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script setup>
const calculatorData = useState("calculatorData");

const increment = () => {
  calculatorData.value.guests += 1;
};
const decrement = () => {
  if (calculatorData.value.guests === 1) return;
  calculatorData.value.guests -= 1;
};
</script>

<style lang="scss" scoped>
.counter {
  &__controls {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10px 15px;

    background: #fff;
    border: 2px solid #dadeec;
    border-radius: 100px;

    max-width: 120px;

    &-count {
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
    }

    &-btn {
      background: transparent;
      display: flex;
      padding: 0;
      cursor: pointer;
    }
  }
}
</style>
