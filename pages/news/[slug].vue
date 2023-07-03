<template>
  <section class="news-item">
    <div class="container">
      <div class="news-item__col">
        <div class="news-item__row">
          <div class="news-item__header">
            <h1 class="news-item__title">Новые бани в Москве</h1>
            <div class="news-item__details">
              <span class="news-item__comments">
                <IconBase icon="comment" color="gray"/>
                2
              </span>
              <span class="news-item__views">
                124
                <IconBase icon="views" color="gray"/>
              </span>
              <span class="news-item__date">12.12.2020</span>
            </div>
          </div>
          <img
              src="~/assets/images/preview/room.jpg"
              alt=""
              class="news-item__image"
          />
          <div class="news-item__description">
            <h3>Основные выводы</h3>
            <p>
              Существует несколько типов криптокошельков, включая аппаратные,
              программные и кастодиальные. При выборе кошелька следует учитывать
              четыре ключевых фактора: безопасность, удобство, совместимость и
              возможности контроля. Всегда проводите собственное исследование.
              Остерегайтесь подозрительных платформ и выбирайте надежные
              кошелькиљ
            </p>
            <p>
              Всем, кто работает с криптовалютой, особенно новичкам, следует
              разобраться, какие способы ее хранения доступны. Кошельки можно
              разделить на аппаратные, программные и кастодиальные. Какой же
              выбрать? Мы в Binance считаем, что на этот вопрос нет однозначного
              ответа. Каждый из кошельков имеет свои преимущества и недостатки.
              Например, многие наши пользователи предпочитают удобство
              централизованной биржи, в то время как другим лучше подходит
              автономное решение, защищенное от кибератак — так называемый
              аппаратный кошелек.
            </p>
          </div>
          <div class="news-item__footer">
            <div class="news-item__author">
              <span>Автор: </span>
              <nuxt-link class="news-item__username" to="#">
                <span>Баня.ру</span>
                <img
                    class="news-item__avatar"
                    src="~/assets/images/preview/user.png"
                    alt=""
                />
              </nuxt-link>
            </div>
            <div class="flex">
              <div class="news-item__share">
                <span>Поделиться:</span>
                <div class="news-item__socials">
                  <a
                      href="#"
                      class="news-item__social"
                      v-for="social of socials"
                      :key="social"
                  >
                    <IconBase :icon="social" color="gray"/>
                  </a>
                </div>
              </div>
              <div class="news-item__like">
                <span>3</span>
                <button class="news-item__like-btn">
                  <IconBase icon="like"/>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="news-item__row">
          <NewsComments/>
        </div>
      </div>
      <div class="news-item__col">
        <h1 class="news-item__suptitle">Популярные темы</h1>
        <div class="news-item__list">
          <NewsItem v-for="i of 8" :key="i"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {useWindowSize} from "@vueuse/core";
import {SwiperSlide} from 'swiper/vue'

const {width} = useWindowSize()

definePageMeta({
  layout: "header-only",
});

const socials = ref(["twitter", "facebook", "vk", "telegram"]);
</script>

<style lang="scss" scoped>
.news-item {

  &__list {
    @media (max-width: 1200px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      align-items: center;

      & :deep(.news__item) {
        padding-top: 0 !important;
      }
    }

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }

  .container {
    display: grid;
    grid-template-columns: 5fr 2fr;
    gap: 20px;

    @media (max-width: 1200px) {
      grid-template-columns: 1fr;
    }
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    @media (max-width: 600px) {
      flex-direction: column;
      gap: 30px;
    }
  }

  &__details {
    display: flex;
    align-items: center;

    & > span {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 0 10px;
      color: $gray;

      &:not(:last-of-type) {
        border-right: 1px solid rgba($color: $gray, $alpha: 0.2);
      }
    }
  }

  &__image {
    width: 100%;
    height: 420px;
    border-radius: 25px;
    object-fit: cover;
    margin-bottom: 40px;

    @media (max-width: 700px) {
      height: 300px;
    }

    @media (max-width: 500px) {
      height: 200px;
    }
  }

  &__description {
    margin-bottom: 70px;

    @media (max-width: 600px) {
      margin-bottom: 40px;
    }

    h3 {
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      margin: 0 0 20px;
    }

    p {
      color: $gray;

      &:not(:last-of-type) {
        margin-bottom: 30px;
      }
    }
  }

  &__row {
    padding: 40px;
    background: #fff;
    border-radius: 25px;

    @media (max-width: 500px) {
      padding: 20px;
    }
  }

  .news-item__suptitle,
  .news-item__title {
    margin: 0;
    font-weight: 700;
    font-size: 28px;
    line-height: 100%;
  }

  .news-item__suptitle {
    margin-bottom: 20px;
  }

  &__col {
    gap: 20px;
    display: flex;
    flex-direction: column;
  }

  &__col:last-of-type {
    padding: 25px 20px;
    background: #fff;
    border-radius: 25px;

    .news__item {
      padding: 20px 0px;
      border-bottom: 1px solid rgba($color: $gray, $alpha: 0.2);

      &:first-of-type {
        padding-top: 0;
      }
    }
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 600px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;

      .flex {
        width: 100%;
        justify-content: space-between;
      }
    }
  }

  &__author,
  &__author a {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  &__author > span {
    color: $gray;
  }

  &__avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .flex {
    align-items: center;

    @media (max-width: 500px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
    }
  }

  &__share {
    display: flex;
    align-items: center;
    margin-right: 40px;

    @media (max-width: 600px) {
      margin-right: 0;
    }

    span {
      color: $gray;
    }
  }

  &__socials {
    margin-left: 20px;
    display: flex;
    align-items: center;
    gap: 15px;
  }

  &__social {
    &:hover {
      svg {
        --icon-color: #{$green};
      }
    }
  }

  &__like {
    display: flex;
    align-items: center;
    gap: 10px;

    &-btn {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 2px solid $light-gray;
      padding: 15px;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        background: $green;

        svg {
          --icon-color: white;
        }
      }
    }
  }
}
</style>
