<template>
  <!-- DISCOUNTS -->
  <div class="p-x booking-page__discounts">
    <h1 class="booking-page__title booking-page__discounts-title">Скидки</h1>
    <div class="booking-page__discounts-items">
      <div
        class="booking-page__discounts-item"
        v-for="item of discountItems"
        :key="item.text"
      >
        <div class="booking-page__discounts-amount">{{ item.label }}</div>
        <div class="booking-page__discounts-dots"></div>
        <div class="booking-page__discounts-text">
          {{ item.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const discountItems = ref([
  {
    label: "15 %",
    text: "На всю банную продукцию",
  },
  {
    label: "10 %",
    text: "На все услуги бани при предъявлении промокода",
  },
  {
    label: "15 %",
    text: "На Большой зал от 9 000 ₽",
  },
]);
</script>

<style lang="scss" scoped></style>
