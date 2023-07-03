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
          <IconBase
            icon="star"
            :color="i !== 5 ? 'green' : 'light-gray'"
            v-for="i of 5"
            :key="i"
          />
        </div>
        <div class="booking-page__review-date">06.09.2021</div>
      </div>

      <p class="booking-page__review-text">
        {{ props.data.text }}
      </p>

      <div class="booking-page__review-images" v-if="props.data.images">
        <div class="booking-page__review-image" v-for="i of 3" :key="i">
          <img src="~/assets/images/preview/room.jpg" alt="" />
        </div>
      </div>

      <div
        class="booking-page__review-rating"
        v-if="!props.moderation && props.data.rating"
      >
        <UIButton class="booking-page__review-like custom">
          <IconBase icon="like" color="gray" />
        </UIButton>
        <span>{{ props.data.rating }}</span>
        <UIButton class="booking-page__review-like custom">
          <IconBase icon="like" color="gray" />
        </UIButton>
      </div>

      <UIButton class="booking-page__review-btn custom" v-if="props.moderation"
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
    color: $gray;
  }

  &-text {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: $gray;
  }

  &-rate {
    gap: 3px;

    svg {
      max-width: 14px;
    }
  }

  &-btn {
    font-size: 14px;
    line-height: 18px;
    background: $gray;
    border-color: $gray;
    pointer-events: none;
    color: #fff;
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
    // color: $green;
    margin-top: 10px;
  }

  &-like {
    padding: 0;
    height: fit-content;
    border: none;

    &:hover {
      svg {
        --icon-color: #{$green};
      }
    }
    &:last-of-type {
      transform: rotate(180deg);
    }
  }
}
</style>
