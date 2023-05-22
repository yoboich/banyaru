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
                getLocalUrl(`/icons/star-${i !== 5 ? 'green' : 'gray'}.svg`)
              "
              v-for="i of 5"
              :key="i"
              alt=""
            />
          </div>
          <span>112 оценок</span>
        </div>
      </div>
      <img src="~/assets/images/preview/user.png" alt="" />
      <span>Оцените и напишите отзыв</span>
      <div class="booking-page__reviews-rates">
        <img
          src="~/assets/icons/star-gray.svg"
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
    <div
      class="booking-page__reviews-items"
      :class="{ open: isOpen }"
      ref="el"
      :style="{
        maxHeight: isOpen ? scrollHeight + 'px' : '360px',
      }"
    >
      <BookingReviewsItem
        v-for="review of reviews"
        :key="review.text"
        :data="review"
      />
    </div>
    <button class="booking-page__more-btn" @click="isOpen = !isOpen">
      <span>Смотреть все</span>
      <Icon tag="i" icon="arrow-left" color="green" :hover="false" />
    </button>
  </div>
</template>

<script setup>
const reviews = ref([
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
  {
    author: "Ден",
    text: "Неизменное место, всегда собираемся тут попариться с друзьями.  Если думаете идти или нет, то однозначно идите, не пожалеете. Все классно и на высшем уровне!!!",
  },
  {
    author: "ID:42313",
    images: true,
    text: "Отличные бани. Цена-качество,уровнь!",
    rating: 10,
  },
]);

const el = ref();
const isOpen = ref(false);
const scrollHeight = ref(0);

onMounted(() => {
  scrollHeight.value = el.value.scrollHeight;
});
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
      margin-bottom: 5px;

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
    border: 1px solid $light-gray;
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
      color: $gray;
    }
  }

  &-rates {
    display: flex;
    gap: 3px;
  }

  &-items {
    overflow: hidden;
    transition: all 0.3s;
    & > div:last-of-type {
      margin-bottom: 15px;
    }

    &.open + .booking-page__more-btn {
      img {
        transform: rotate(90deg);
      }
    }
  }
}
</style>
