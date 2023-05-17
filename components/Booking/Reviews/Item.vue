<template>
  <div class="booking-page__review">
    <img
      class="booking-page__review-avatar"
      src="https://loremflickr.com/40/40"
      alt=""
    />
    <div class="booking-page__review-content">
      <h2 class="booking-page__review-author">{{ props.data.author }}</h2>

      <div class="flex">
        <div class="booking-page__review-rate">
          <img
            :src="getLocalUrl(`img/icon/star${i !== 5 ? '-green' : ''}.svg`)"
            v-for="i of 5"
            :key="i"
            alt=""
          />
        </div>
        <div class="booking-page__review-date">06.09.2021</div>
      </div>

      <p class="booking-page__review-text">
        {{ props.data.text }}
      </p>

      <div class="booking-page__review-images" v-if="props.data.images">
        <div class="booking-page__review-image" v-for="i of 3" :key="i">
          <img src="~/assets/img/order/room.png" alt="" />
        </div>
      </div>

      <div
        class="booking-page__review-rating"
        v-if="!props.moderation && props.data.rating"
      >
        <img src="~/assets/img/order/like-green.svg" />
        <span>{{ props.data.rating }}</span>
        <img src="~/assets/img/order/like-gray.svg" />
      </div>

      <UIButton class="booking-page__review-btn" v-if="props.moderation"
        >На модерации</UIButton
      >
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  moderation: {
    type: Boolean,
    default: false,
  },
  data: Object,
});
</script>

<style lang="scss" scoped>
.booking-page__review {
  display: flex;
  gap: 10px;
  margin-bottom: 45px;

  &-avatar {
    width: 40px;
    height: 40px;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
  }

  &-content {
    & > .flex {
      gap: 10px;
      align-items: center;
      margin-bottom: 5px;
    }
  }

  &-author {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 15px;
  }

  &-date {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: $secondary-color;
  }

  &-text {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: $secondary-color;
  }

  &-rate {
    gap: 3px;

    img {
      width: 14px;
      object-fit: contain;
    }
  }

  &-btn {
    padding: 5px 15px !important;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    background: $secondary-color;
    pointer-events: none;

    margin-top: 15px;
  }

  &-images {
    display: flex;
    flex-wrap: wrap;
    gap: 0 10px;
    margin-top: 15px;
  }

  &-image {
    width: 80px;
    height: 80px;
    border-radius: 10px;
    filter: drop-shadow(0px 7px 19px rgba(123, 129, 148, 0.2));
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 10px;
    }
  }

  &-rating {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: $green-color;
    margin-top: 10px;

    img {
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        opacity: 0.7;
      }
    }
  }
}
</style>
