<template>
  <div class="booking-page__preview-image">
    <nuxt-link to="#user"
      ><img
        class="booking-page__owner"
        src="~/assets/images/preview/user.png"
        alt=""
    /></nuxt-link>
    <nuxt-link to="#">
      <img src="~/assets/images/preview/slider-girl.jpg" alt="" />
    </nuxt-link>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.booking-page__owner {
  width: 35px;
  height: 35px;

  border-radius: 50%;
  border: 3px solid #ffffff;
  position: absolute;
  top: 0;
  left: 0;

  object-fit: cover;
  object-position: center;

  transform: translate(-5px, -5px);
}

.booking-page__preview-image {
  width: 96px;
  // overflow: hidden;
  position: relative;
  border-radius: 10px;

  img:not(.booking-page__owner) {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}
</style>
