<template>
  <form class="calculator">
    <h1 class="booking-page__title calculator-title">Калькулятор заказа</h1>
    <CalculatorParams :isTimeCalendar="isTimeCalendar" />
    <Calendar @change-calendar-type="onCalendarTypeChange" />
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
</script>

<style lang="scss" scoped>
.calculator {
  &.p-x {
    padding: 0 20px 30px;
  }

  &-title {
    color: #8e58ff;
    margin-bottom: 30px;
  }
}
</style>
