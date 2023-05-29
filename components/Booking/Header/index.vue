<template>
  <div class="booking-page__header">
    <nuxt-link
      class="booking-page__action booking-page__action--back"
      to="/booking"
    >
      <IconBase icon="arrow-left" color="gray" />
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
      <button class="booking-page__action">
        <IconBase icon="share" color="green" />
      </button>
      <button class="booking-page__action">
        <IconBase icon="favorite" color="green" />
      </button>
      <button class="booking-page__action btn-more">
        <IconBase icon="more" color="green" />
      </button>
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
  width: 100%;
  max-width: 600px;
  border-radius: 25px 25px 0 0;
  padding: 15px 20px;
  border: 1px solid #dadeec;
  border-bottom: none;

  @media (max-width: 1000px) {
    max-width: 100%;
  }

  & .booking-page__last-online {
    font-weight: 500;
    font-size: 11px;
    line-height: 13px;
    color: $gray;
  }

  & .booking-page__preview {
    display: flex;
    align-items: center;
    gap: 11px;

    &-image {
      width: 96px;
      height: 76px;
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

      @media (max-width: 500px) {
        font-size: 14px;
      }
    }

    &-price {
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      
      @media (max-width: 500px) {
        font-size: 14px;
      }
    }
  }

  & .booking-page__actions {
    display: flex;
    align-items: center;
    gap: 20px;

    margin-left: auto;



    @media (max-width: 500px) {
      gap: 10px;
    }
  }

  & .booking-page__action {
    display: flex;
    background: transparent;
    padding: 0;
    cursor: pointer;

    &.btn-more {
      max-width: 24px;

      @media (max-width: 1000px) {
        display: none;
      }
    }
    // height: 24px;
    // aspect-ratio: 1;

    &--back {
      &:hover {
        svg {
          --icon-color: #{$green};
        }
      }
    }
  }
}
</style>
