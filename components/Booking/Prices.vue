<template>
  <!-- PRICES -->
  <div class="p-x booking-page__prices">
    <h1 class="booking-page__title booking-page__prices-title">Цены</h1>
    <div
      class="booking-page__prices-items"
      :class="{ open: isOpen }"
      ref="el"
      :style="{
        maxHeight: isOpen ? scrollHeight + 'px' : '195px',
      }"
    >
      <div class="booking-page__prices-item" v-for="i of 12" :key="i">
        <div class="booking-page__prices-amount">9 000 ₽</div>
        <div class="booking-page__prices-dots"></div>
        <div class="booking-page__prices-text">1ч./мин.3ч. пн-вс 24ч.</div>
      </div>
    </div>
    <button class="booking-page__more-btn" @click="isOpen = !isOpen">
      <span>Смотреть все</span>
      <Icon tag="i" icon="arrow-left" color="green" :hover="false" />
    </button>
  </div>
</template>

<script setup>
const el = ref();
const isOpen = ref(false);
const scrollHeight = ref(0);

onMounted(() => {
  scrollHeight.value = el.value.scrollHeight;
});
</script>

<style lang="scss" scoped></style>
