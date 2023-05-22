<template>
  <div class="booking-page__preview">
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
    <div class="booking-page__preview-info">
      <h3 class="booking-page__preview-place">
        Сауна цветы
        <br />
        Горячий сруб
      </h3>
      <h3 class="booking-page__preview-price">от 2 000 ₽/час</h3>
      <span class="booking-page__last-online">был(а) 15 мин. назад</span>
    </div>
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
.booking-page__last-online {
  font-weight: 500;
  font-size: 11px;
  line-height: 13px;
  color: $gray;
}

.booking-page__preview {
  display: flex;
  gap: 11px;

  &-image {
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

  &-place {
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
  }

  &-price {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
  }
}
</style>
