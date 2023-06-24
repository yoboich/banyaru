<template>
  <div class="booking-card__item">
    <nuxt-link to="/search/item">
      <div class="booking-card__item-image">
        <img src="~/assets/images/preview/girl-bath.png" alt=""/>
      </div>
    </nuxt-link>
    <div class="flex">
      <span class="booking-card__item-tag">По-черному</span>
      <button class="booking-card__item-favorite"
              v-if="props.favorite"
      >
        <IconBase
            icon="favorite"
            color="gray"
        />
      </button>
    </div>
    <h3 class="booking-card__item-name">
      <nuxt-link to="/search/item">Сибирский сруб</nuxt-link>
    </h3>
    <p class="booking-card__item-price">22 300 ₽/час</p>
  </div>
</template>

<script setup>
const props = defineProps({
  favorite: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.booking-card__item {
  text-align: left;

  &-image {
    aspect-ratio: 1;
    border-radius: 10px;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid transparent;

    margin-bottom: 10px;
    transition: all 0.2s;

    &:hover {
      border-color: $green;

      img {
        transform: scale(0.95);
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 10px;
      transition: all 0.2s;
    }
  }

  & > .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-tag {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: $gray;
    margin-bottom: 5px;
  }

  &-favorite {
    cursor: pointer;
    &:hover {
      svg {
        --icon-color: #{red};
      }
    }
  }

  &-name {
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    margin-bottom: 5px;
  }

  &-price {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
  }
}
</style>
