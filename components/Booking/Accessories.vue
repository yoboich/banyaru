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
        maxHeight: isOpen ? el?.scrollHeight + 'px' : initialHeight + 'px',
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
import {useWindowSize} from "@vueuse/core";

const {width} = useWindowSize()

const el = ref();
const initialHeight = computed(() => (el.value?.scrollHeight / 12) * (width.value > 1000 ? 3 : 2) * 2)

const isOpen = ref(false);
</script>

<style lang="scss" scoped></style>
