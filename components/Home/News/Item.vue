<template>
  <div class="news__item">
    <div class="news__item-header">
      <h1 class="news__item-title">
        <nuxt-link to="/news/test-item">Новые бани в Москве</nuxt-link>
      </h1>
      <div class="news__item-stats">
        <div class="reviews">
          <IconBase icon="comment" color="gray" />
          <span>2</span>
        </div>
        <div class="spacer"></div>
        <div class="views">
          <IconBase icon="views" color="gray" />
          <span>124</span>
        </div>
        <div class="spacer"></div>
        <span class="date"> 20.03.2023 </span>
      </div>
    </div>
    <nuxt-link to="/news/test-item">
      <div class="news__item-image">
        <img src="~/assets/images/preview/slider-girl.jpg" alt="" />
      </div>
    </nuxt-link>
    <div class="news__item-description">
      Бани краткое описание, что входит, отдых
    </div>
    <div class="news__item-footer">
      <nuxt-link to="/profile/user">
        <div class="author">
          <img src="~/assets/images/preview/banyaru.png" alt="" />
          <span>Баня.ру</span>
        </div>
      </nuxt-link>
      <div class="likes">
        <span>3</span>
        <button class="likes__btn">
          <IconBase icon="like" color="gray" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.news__item {
  padding: 40px 0;
  border-bottom: 1px solid rgba(143, 153, 186, 0.2);

  &:first-child {
    padding-top: 0;
  }

  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;

    margin-bottom: 30px;
  }

  &-title {
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
  }

  &-stats {
    display: flex;
    align-items: center;
    gap: 12px;
    color: #8f99ba;

    .spacer {
      height: 10px;
      width: 1px;
      background: rgba(143, 153, 186, 0.2);
    }

    .reviews,
    .views,
    .date {
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
    }

    .reviews,
    .views {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .reviews svg {
      width: 20px;
    }
  }

  &-image {
    height: 420px;
    border-radius: 20px;
    overflow: hidden;

    margin-bottom: 30px;

    @media (max-width: 1400px) {
      height: 250px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  &-description {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 15px;
  }

  &-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .author {
      display: flex;
      align-items: center;
      gap: 10px;

      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }

    .likes {
      display: flex;
      align-items: center;
      gap: 25px;

      span {
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
      }

      &__btn {
        cursor: pointer;

        &:hover {
          svg {
            --icon-color: #{$green};
          }
        }
      }
    }
  }
}
</style>
