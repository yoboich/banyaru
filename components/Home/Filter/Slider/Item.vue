<template>
  <div class="filter-item">
    <nuxt-link to="#" class="filter-item__image">
      <img src="~/assets/images/preview/place-image.png" alt="" />
      <button class="play">
        <IconBase icon="play" color="white" />
      </button>
    </nuxt-link>
    <div class="filter-item__info">
      <div class="filter-item__info-top">
        <div class="filter-item__rating">
          <BookingSearchItemRate rate="4,2" />
          <span class="spacer"></span>
          <div class="reviews">
            <span>11</span>
            <IconBase icon="comment" color="green" />
          </div>
        </div>
        <button class="favorite">
          <IconBase icon="favorite" color="black" />
        </button>
      </div>
      <div class="filter-item__info-main">
        <h3 class="title"><nuxt-link to="#">Сауна Дионис-СПА</nuxt-link></h3>
        <div class="location">
          <div class="location__dot"></div>
          <span>Павелецкая</span>
        </div>
        <div class="price"><span>22 300</span> ₽/час</div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.filter-item {
  &__rating {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;

    .spacer {
      height: 20px;
      width: 1px;
      background: #e1e5f2;
    }

    .rate,
    .reviews {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 5px;

      cursor: pointer;

      svg {
        max-width: 16px;
      }
    }

    .rate span {
      padding: 0 5px;
      background: #32bd1b;
      border-radius: 5px;

      color: #fff;
      font-weight: 600;
      font-size: 12px;
    }

    .reviews span {
      color: #32bd1b;
      font-weight: 500;
      font-size: 11px;
    }
  }

  &__info {
    &-top {
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin-bottom: 10px;

      .favorite {
        svg {
          max-width: 20px;
        }

        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          svg {
            --icon-color: #{$red};
          }
        }
      }
    }

    &-main {
      text-align: left;

      .title {
        font-weight: 700;
        font-size: 14px;
        line-height: 14px;
        margin-bottom: 5px;
      }

      .location {
        display: flex;
        align-items: center;
        gap: 5px;

        margin-bottom: 5px;

        &__dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #8f99ba;
        }

        span {
          font-weight: 500;
          font-size: 11px;
          line-height: 13px;
        }
      }

      .price {
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
      }
    }
  }

  &__image {
    position: relative;
    display: flex;
    margin-bottom: 20px;

    img {
      width: 100%;
      object-fit: cover;
      object-position: center;
      aspect-ratio: 1;
    }

    .play {
      width: 30px;
      height: 30px;
      padding: 8px;

      background: rgba(0, 0, 0, 0.4);
      border-radius: 50%;

      position: absolute;
      top: 10px;
      right: 10px;

      display: flex;
      justify-content: center;
      align-items: center;

      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        background: rgba(0, 0, 0, 0.6);
      }

      svg {
        object-fit: contain;
        transform: translateX(10%);
      }
    }
  }
}
</style>
