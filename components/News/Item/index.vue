<template>
  <div class="news__item">
    <nuxt-link to="/news/test">
      <img
        class="news__item-image"
        src="~/assets/images/preview/room.jpg"
        alt=""
      />
    </nuxt-link>
    <div class="news__item-details">
      <h3 class="news__item-title">
        <nuxt-link to="/news/test">Новые бани в Москве</nuxt-link>
      </h3>
      <p class="news__item-text">
        В Москве открылась новая сеть банных омплексов в районе метро ВДНХ...
      </p>
      <div class="news__item-footer">
        <span class="news__item-date">20.03.2023</span>
        <div class="news__item-stats">
          <span class="news__item-comments">
            <IconBase icon="comment" />
            1
          </span>
          <span class="news__item-views">
            <IconBase icon="views" />
            0
          </span>
          <span class="news__item-likes">
            <IconBase icon="like" />
            1
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.news__item {
  &-image {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 25px;
    margin-bottom: 20px;
  }

  &-details {
    padding-left: 20px;
  }

  &-title {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 15px;
  }

  &-text {
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 15px;
  }

  &-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-date {
    font-weight: 500;
    font-size: 11px;
    line-height: 13px;
    color: $gray;
  }

  &-stats {
    display: flex;

    & > span {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 0 10px;
      color: $gray;
      font-size: 11px;
      line-height: 13px;

      &:not(:last-of-type) {
        border-right: 1px solid rgba($color: $gray, $alpha: 0.2);
      }

      i {
        height: 10px;
      }
    }
  }
}
</style>
