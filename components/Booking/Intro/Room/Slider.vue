<template>
  <div>
    <div
        class="booking-page__room-items"
        :class="{ open: isOpen }"
        ref="el"
        :style="{
        maxHeight: isOpen ? el?.scrollHeight + 'px' : (el?.scrollHeight / 5 * 1.25) + 'px',
      }"
        v-if="width > 1700"
    >
      <BookingIntroRoomItem
          v-for="room of rooms"
          :class="{ open: isCollapseBtn(room) && isOpen }"
          :key="room"
          @click="changeRoom(room)"
          @open="isOpen = !isOpen"
          :unavailable="isUnavailable(room)"
          :active="selectedRoom === room"
          :isCollapseBtn="isCollapseBtn(room)"
      />
    </div>
    <div class="booking-page__room-slider" v-else>
      <SwiperSlider :slides-per-view="width > 700 ? 5 : 3.5" :space-between="20">
        <swiper-slide v-for="room of rooms" :key="room">
          <BookingIntroRoomItem
              @click="changeRoom(room)"
              :unavailable="isUnavailable(room)"
              :active="selectedRoom === room"
          />
        </swiper-slide>
      </SwiperSlider>
    </div>
  </div>
</template>

<script setup>
import {SwiperSlide} from "swiper/vue";
import {useWindowSize} from "@vueuse/core";

const {width} = useWindowSize()

const selectedRoom = ref(1);
const isOpen = ref(false);

const el = ref();

const rooms = ref(
    Array(20)
        .fill("")
        .map((_, i) => i + 1)
);

const isCollapseBtn = (room) => {
  return collapseBtn.value && collapseBtn.value === room;
};

const isUnavailable = (room) => {
  return room === 3;
};

const collapseBtn = ref(rooms.value.length > 5 ? 5 : null);

const changeRoom = (room) => {
  if (room === 3 || room === collapseBtn.value) return;
  selectedRoom.value = room;
};

watch(isOpen, () => {
  collapseBtn.value = isOpen.value ? rooms.value.length : 5;
});
</script>

<style lang="scss" scoped>

</style>