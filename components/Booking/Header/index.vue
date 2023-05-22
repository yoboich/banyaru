<template>
  <div class="booking-page__header">
    <nuxt-link
      class="booking-page__action booking-page__action--back"
      to="/booking"
    >
      <Icon tag="i" icon="arrow-left" />
    </nuxt-link>
    <div class="booking-page__preview">
      <BookingPreviewImage />
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
    <div class="booking-page__actions">
      <Icon class="booking-page__action" icon="share" color="green" />
      <Icon class="booking-page__action" icon="favorite" color="green" />
      <Icon class="booking-page__action" icon="more" color="green" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.booking-page__header {
  display: flex;
  align-items: center;
  gap: 25px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  background: #fff;
  width: 600px;
  border-radius: 25px 25px 0 0;
  padding: 15px 20px;
  border: 1px solid #dadeec;
  border-bottom: none;

  & .booking-page__last-online {
    font-weight: 500;
    font-size: 11px;
    line-height: 13px;
    color: $gray;
  }

  & .booking-page__preview {
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

  & .booking-page__actions {
    display: flex;
    align-items: center;
    gap: 20px;

    margin-left: auto;
  }

  & .booking-page__action {
    display: flex;
    background: transparent;
    padding: 0;
    cursor: pointer;
    height: 24px;
    aspect-ratio: 1;

    &--back {
      height: 24px;
    }
  }
}
</style>
