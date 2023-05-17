<template>
  <div class="booking-page__reviews">
    <h1 class="booking-page__title booking-page__reviews-title">Отзывы</h1>
    <div class="booking-page__reviews-new">
      <div class="booking-page__reviews-rate flex">
        <h2>4,6</h2>
        <div class="booking-page__reviews-preview">
          <div class="flex">
            <img
              :src="
                getLocalUrl(`img/icon/star-${i !== 5 ? 'green' : 'gray'}.svg`)
              "
              v-for="i of 5"
              :key="i"
              alt=""
            />
          </div>
          <span>112 оценок</span>
        </div>
      </div>
      <img src="~/assets/img/order/user.png" alt="" />
      <span>Оцените и напишите отзыв</span>
      <div class="booking-page__reviews-rates">
        <img
          src="~/assets/img/icon/star-gray.svg"
          v-for="i of 5"
          :key="i"
          alt=""
        />
      </div>
    </div>
    <h2 class="booking-page__reviews-heading">Ваш отзыв</h2>
    <BookingReviewsItem
      moderation
      :data="{ author: 'Name', text: 'Отличные бани. Цена-качество,уровнь!' }"
    />
    <h2 class="booking-page__reviews-heading">112 отзывов</h2>
    <div class="booking-page__reviews-items">
      <BookingReviewsItem
        v-for="review of reviews"
        :key="review.text"
        :data="review"
      />
    </div>
    <button class="booking-page__more-btn">
      <span>Смотреть все</span>
      <img src="~/assets/img/icon/arrow-green.svg" alt="" />
    </button>
  </div>
</template>

<script setup>
const reviews = [
  {
    author: "Ангелина",
    text: "Неизменное место, всегда собираемся тут попариться с друзьями.  Если думаете идти или нет, то однозначно идите, не пожалеете. Все классно и на высшем уровне!!!",
  },
  {
    author: "ID:42313",
    images: true,
    text: "Отличные бани. Цена-качество,уровнь!",
    rating: 21,
  },
];
</script>

<style lang="scss">
.booking-page__reviews {
  &.p-x {
    padding: 0 20px 35px !important;
  }

  &-title {
    margin-bottom: 10px;
  }

  &-heading {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 15px;
  }

  &-rate {
    position: absolute;
    left: 20px;
    top: 30px;

    align-items: center;
    gap: 10px;

    h2 {
      font-weight: 700;
      font-size: 38px;
      line-height: 100%;
    }
  }

  &-preview {
    span {
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
    }

    .flex {
      gap: 2px;
      margin-top: 5px;

      img {
        width: 14px;
        object-fit: contain;
      }
    }
  }

  &-new {
    height: 220px;
    padding: 30px 20px;
    border-radius: 25px;
    border: 1px solid $light-gray-color;
    position: relative;

    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    margin-bottom: 40px;
    cursor: pointer;

    & > img {
      width: 62px;
      height: 62px;
      object-fit: cover;
      object-position: center;
      border-radius: 50%;
    }

    span {
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      color: $secondary-color;
    }
  }

  &-rates {
    display: flex;
    gap: 3px;
  }

  &-items {
    & > div:last-of-type {
      margin-bottom: 15px;
    }
  }
}
</style>
