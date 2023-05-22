<template>
  <div class="p-x booking-page__services">
    <h1 class="booking-page__title booking-page__services-title">Услуги</h1>
    <div
      class="booking-page__services-items"
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
