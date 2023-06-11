<template>
  <form @submit.prevent="" class="calculator" id="calculator">
    <CalculatorDialog ref="dialog" />
    <h1 class="booking-page__title calculator-title">
      <span>Калькулятор заказа </span>
      <button type="button" @click="dialog?.dialog.showModal()">
        <span>i</span>
      </button>
    </h1>
    <CalculatorParams :isTimeCalendar="isTimeCalendar"/>
    <Calendar @change-calendar-type="onCalendarTypeChange"/>
  </form>
</template>

<script setup>
const calculatorData = useState("calculatorData", () => ({
  guests: 1,
  receiver: "",
}));

const isTimeCalendar = ref(false);

const onCalendarTypeChange = (calendarType) => {
  isTimeCalendar.value = calendarType === "time";
};

const dialog = ref()
</script>

<style lang="scss" scoped>
.calculator {
  &.p-x {
    padding: 0 15px 30px;
  }

  &-title {
    color: #8e58ff;
    margin-bottom: 30px;
    display: flex;
    align-items: flex-end;
    gap: 10px;

    button {
      @include flex-center-all;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      color: $green;
      border: 1px solid #DADEEC;
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      cursor: pointer;
    }
  }
}
</style>
