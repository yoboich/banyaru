<template>
  <div class="booking-page__room">
    <h3 class="booking-page__room-name">Зал: <span>Горячий сруб</span></h3>
    <BookingIntroRoomSlider/>
    <BookingIntroRoomSlider/>
  </div>
</template>

<script setup>
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

    & + div {
      margin-bottom: 10px;
    }
  }

  &-items {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px 35px;
    transition: all 0.3s;
    overflow: hidden;

    @media (max-width: 1500px) {
      gap: 20px 10px;
    }
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
        @include flex-center-all;
        background: $light-gray;

        transform: rotate(-90deg) scale(0.95);
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
    border: 3px solid transparent;
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
