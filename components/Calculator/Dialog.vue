<template>
  <dialog class="calculator-dialog" ref="dialog">
    <h2 class="calculator-dialog__title">Калькулятор бронирования</h2>
    <p class="calculator-dialog__text">
      Быстро и точно рассчитайте свой заказ.
      Дополнительные услуги и товары в расчет не входят (пока).

      При поддержке в объявлении функции Бронирования, гарантируется безопасная он-лайн оплата и резерв времени четко
      под Вас.
    </p>
    <button type="button" class="calculator-dialog__btn" @click="close">
      Понятно
    </button>
  </dialog>
</template>

<script setup>
const dialog = ref()

const close = () => dialog.value.close()

defineExpose({
  dialog
})
</script>

<style lang="scss" scoped>
.calculator-dialog {
  padding: 25px;
  box-shadow: 0px 4px 24px rgba(166, 175, 203, 0.32);
  border-radius: 25px;
  background: #fff;
  margin: 0;
  border: none;
  width: 80vw;
  max-width: 400px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  &__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    color: $purple;
    margin-bottom: 30px;
  }

  &__text {
    font-size: 14px;
    line-height: 24px;
    color: $gray;
    margin-bottom: 20px;
  }

  &__btn {
    width: 100%;
    box-shadow: 0px 6px 21px rgba(166, 175, 205, 0.22);
    border-radius: 25px;
    background: $green;
    color: white;
    font-size: 20px;
    line-height: 100%;
    padding: 15px;
    cursor: pointer;
  }
}
</style>