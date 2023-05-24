<template>
  <div class="p-x booking-page__accessories">
    <h1 class="booking-page__title booking-page__accessories-title">
      Банные пренадлежности
    </h1>
    <div
      class="booking-page__accessories-items"
      :class="{ open: isOpen }"
      ref="el"
      :style="{
        maxHeight: isOpen ? scrollHeight + 'px' : '520px',
      }"
    >
      <BookingCardItem v-for="i of 12" :key="i" />
    </div>
    <button class="booking-page__more-btn" @click="isOpen = !isOpen">
      <span>Смотреть все</span>
      <IconBase icon="arrow-left" color="green" />
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
