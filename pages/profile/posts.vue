<template>
  <section class="profile__content" v-if="width > 1000">
    <h1 class="profile__content-title">Мои объявления</h1>
    <ProfileTabs :tabs="tabs" class="profile__content-tabs"/>
    <div class="profile__content-slider" v-if="posts.length">
      <SwiperSlider
          :slides-per-view="width > 1200 ? 2 : 1"
          space-between="20"
          :grid="{
                rows: 4,
                fill: 'row',
              }"
      >
        <swiper-slide
            v-for="(post, i) of [...posts, ...posts, ...posts, ...posts]"
            :key="i"
        >
          <ProfilePost controls :data="post"/>
        </swiper-slide>
      </SwiperSlider>
    </div>
    <div v-else class="profile__content-empty">
      <div class="no-posts__image">
        <img src="~/assets/images/profile/no-posts.svg" alt=""/>
      </div>
      <p class="no-posts__text">Нет активных объявлений</p>
      <nuxt-link to="/create-post">
        <button class="no-posts__btn">Разместить объявление</button>
      </nuxt-link>
    </div>
    <div class="profile__controls" v-if="posts.length">
      <UIButton to="/search">
        Найти баню, услугу, товары
      </UIButton>
      <UIButton to="/create-post">
        Разместить объявление
      </UIButton>
    </div>
  </section>
  <ProfilePosts :posts="posts" v-else/>
</template>

<script setup>
import {SwiperSlide} from "swiper/vue";
import {useWindowSize} from "@vueuse/core";

const {width} = useWindowSize()

definePageMeta({
  layout: 'profile',
});

const tabs = ["Все", "Активные", "Архив"];

const posts = ref([
  {
    type: "book",
    status: "pending",
  },
  {
    type: "pay",
    status: "inactive",
  },
  {
    type: "free",
    status: "archived",
  },
  {
    type: "vip",
    status: "active",
  },
]);
</script>

<style lang="scss">
.profile {

  &__content {
    box-shadow: 0px 11px 48px rgba(178, 188, 221, 0.15);
    border-radius: 25px;
    padding: 30px 40px 50px;
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;

    &-title {
      font-weight: 700;
      font-size: 24px;
      line-height: 120%;
      margin-bottom: 40px;
    }

    &-tabs {
      margin-bottom: 40px;
    }

    &-slider {
      margin-bottom: 30px;

      .slider {
        overflow: hidden;
      }
    }

    &-empty {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      flex-grow: 1;

      .no-posts__image {
        width: 160px;
        height: 160px;
        border-radius: 50%;
        background: #f1f3f9;
        margin-bottom: 10px;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
        }
      }

      .no-posts__text {
        font-size: 20px;
        line-height: 100%;
        color: $gray;
        margin-bottom: 60px;
      }

      .no-posts__btn {
        padding: 15px 40px;
        border-radius: 100px;
        font-size: 20px;
        line-height: 100%;
        color: #fff;
        background: $green;
        cursor: pointer;
      }
    }
  }

  &__controls {
    display: flex;
    align-items: center;
    gap: 40px;
    margin-top: auto;

    @media (max-width: 1600px) {
      flex-direction: column;
      gap: 20px;

      //.profile-btn {
      //  width: 100%;
      //}
    }
  }
}
</style>
