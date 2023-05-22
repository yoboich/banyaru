<template>
  <div
    v-if="isCollapseBtn"
    class="booking-page__room-item booking-page__room-item--expand"
    @click="emits('open')"
  >
    <Icon
      class="booking-page__room-image"
      tag="i"
      icon="arrow-left"
      color="white"
      :hover="false"
    />
    <div class="booking-page__room-price">Все</div>
  </div>

  <div
    v-else
    class="booking-page__room-item"
    :class="{ active: props.active, unavailable: props.unavailable }"
  >
    <div class="booking-page__room-image">
      <img src="~/assets/images/preview/room.jpg" alt="" />
    </div>
    <div class="booking-page__room-price">
      {{ props.unavailable ? "Недоступно" : "от 2 000 ₽/ч." }}
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(["open"]);
const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
  unavailable: {
    type: Boolean,
    default: false,
  },
  isCollapseBtn: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss"></style>
