<template>
  <div class="booking-page__room">
    <h3 class="booking-page__room-name">Зал: <span>Горячий сруб</span></h3>
    <div
      class="booking-page__room-items"
      :class="{ open: isOpen }"
      ref="el"
      :style="{
        maxHeight: isOpen ? scrollHeight + 'px' : '250px',
      }"
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
  </div>
</template>

<script setup>
const selectedRoom = ref(1);
const isOpen = ref(false);

const el = ref();

const scrollHeight = ref(0);

onMounted(() => {
  scrollHeight.value = el.value.scrollHeight;
});

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

const collapseBtn = ref(rooms.value.length > 10 ? 10 : null);

const changeRoom = (room) => {
  if (room === 3 || room === collapseBtn.value) return;
  selectedRoom.value = room;
};

watch(isOpen, () => {
  collapseBtn.value = isOpen.value ? rooms.value.length : 10;
});
</script>

<style lang="scss">
.booking-page__room {
  margin-bottom: 30px;

  &-name {
    font-weight: 500;
    font-size: 20px;
    line-height: 100%;
    margin-bottom: 15px;

    span {
      font-weight: bold;
    }
  }

  &-items {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px 35px;
    transition: all 0.3s;
    overflow: hidden;
  }

  &-item {
    cursor: pointer;

    &:not(.unavailable):not(&--expand):hover,
    &.active {
      .booking-page__room-image {
        border-color: $green;

        img {
          transform: scale(0.9);
        }
      }
    }

    &--expand {
      &:hover {
        .booking-page__room-image {
          background: rgba($color: $gray, $alpha: 0.7);
        }
      }

      &.open {
        .booking-page__room-image {
          transform: rotate(90deg);
        }
      }

      .booking-page__room-image {
        background: $light-gray;
        display: flex;
        justify-content: center;
        align-items: center;

        padding: 25px 25px 25px 20px;
        transform: rotate(-90deg);
        // margin-right: 0;
        // margin-left: 10px;
        border-radius: 50%;
      }
    }

    &:not(&--expand) {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 50%;
        transition: all 0.2s;
      }
    }

    &.unavailable {
      cursor: default;
      .booking-page__room-price {
        color: #fd404d;
      }
    }
  }

  &-image {
    border-radius: 50%;
    margin-bottom: 10px;
    overflow: hidden;
    aspect-ratio: 1;
    border: 2px solid transparent;
    transition: all 0.2s;
  }

  &-price {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
  }
}
</style>
