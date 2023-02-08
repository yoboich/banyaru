<script lang="ts" setup>
defineProps(["type", "name", "img", "metro", "walk", "price"]);
</script>

<template>
  <div class="premium-card">
    <div class="premium-card__info info">
      <div class="info__top">
        <div class="info__action">
          <UIStars />
          <div class="info__feedback">
            11 <img src="~/assets/img/icon/comment.svg" alt="" />
          </div>
          <img class="info__like" src="~/assets/img/icon/like.svg" alt="" />
        </div>
        <div class="info__price">{{ price }} руб.</div>
      </div>
      <div class="info__bottom">
        <div class="info__type">{{ type }}</div>
        <div class="info__name">{{ name }}</div>
        <div class="info__metro">
          <div class="info__metro-text">
            <img src="~/assets/img/icon/metro.svg" alt="" />
            {{ metro }}
          </div>
          <div class="info__walk">{{ walk }}</div>
        </div>
      </div>
    </div>
    <div class="premium-card__image">
      <img :src="img" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.premium-card {
  height: 12.5rem;
  display: flex;
  background-color: $default-color;
  border-radius: 2.3rem;
  align-items: stretch;
  transition: all 0.2s ease;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 6px 56px rgba(123, 129, 148, 0.48);
    transition: all 0.2s ease;
  }
  &__info {
    padding: 0.8rem 0 1.6rem 2.4rem;
  }
  &__image {
    margin-left: auto;
    position: relative;
    width: 22.6rem;
    height: 12.5rem;
    align-self: stretch;
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: drop-shadow(0px 6px 24px rgba(123, 129, 148, 0.48));
      border-radius: 6px;
    }
  }
}
.info {
  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12rem;
    margin-bottom: 0.5rem;
  }
  &__action {
    display: flex;
    align-items: center;
    gap: 1.9rem;
    & img {
      max-width: 2.2rem;
      width: 100%;
      gap: 1.9rem;
    }
  }
  &__price {
    font-size: 1.6rem;
    font-weight: 700;
    color: $green-color;
  }
  &__feedback {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    color: #9da7c7;
    font-size: 1rem;
    font-family: "Montserrat";
    position: relative;
    &::after {
      content: "";
      position: absolute;
      width: 0.1rem;
      height: 70%;
      top: .4rem;
      right: -0.95rem;
      background: #e1e5f2;
    }
    &::before {
      content: "";
      position: absolute;
      width: 0.1rem;
      height: 70%;
      top: .4rem;
      left: -0.95rem;
      background: #e1e5f2;
    }
  }
  &__bottom {
    display: flex;
    flex-direction: column;
  }
  &__type {
    color: #8f99ba;
  }
  &__name {
    margin-bottom: 0.5rem;
    font-size: 1.6rem;
    font-weight: 700;
  }
  &__metro {
    color: #8f99ba;
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }
  &__metro-text {
    color: #8f99ba;
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }
}
</style>
