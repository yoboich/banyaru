<template>
  <div class="profile-user">
    <Teleport to="body">
      <Call ref="callElement"/>
    </Teleport>
    <div class="container">
      <div class="profile-user__inner">
        <div class="profile-mobile__header" v-if="width <= 1000">
          <nuxt-link class="profile-mobile__header-btn" to="/profile">
            <IconBase icon="arrow-left" color="green"/>
          </nuxt-link>
          <h1 class="profile-mobile__title">Профиль</h1>
          <nuxt-link class="profile-mobile__header-btn" to="/profile">
            <IconBase icon="more" color="green"/>
          </nuxt-link>
        </div>
        <h1 class="profile-user__title" v-else>Профиль</h1>
        <div class="profile-user__header">
          <img
              class="profile-user__image"
              src="~/assets/images/preview/user.png"
              alt=""
          />
          <div class="profile-user__info">
            <div class="profile-user__info-head">
              <h3 class="profile-user__name">Анатолий</h3>
              <span class="profile-user__status">в сети</span>
            </div>
            <span class="profile-user__date">На Баня.ру с декабря 2015</span>
            <div class="profile-user__stats">
              <div class="profile-user__rate">
                <div class="profile-user__rate-stars">
                  <IconBase icon="star" color="green" v-for="i of 4" :key="i"/>
                  <IconBase icon="star" color="light-gray"/>
                </div>
                <div class="profile-user__rate-num">4,2</div>
              </div>
              <div class="profile-user__reviews">11 отзывов</div>
            </div>
          </div>
          <div class="profile-user__controls">
            <button
                class="profile-user__control"
                :class="{ active: activeControl === i }"
                v-for="({ title, count }, i) of controls"
                :key="i"
                @click="activeControl = i"
            >
              <span class="title">{{ title }}</span>
              <span class="count">{{ count }}</span>
            </button>
          </div>
          <div class="profile-user__actions">
            <UIButton class="profile-user__action action-call green" @click="callUser">
              {{ width > 1200 ? 'Позвонить' : 'Вызов' }}
            </UIButton>
            <UIButton class="profile-user__action action-chat gray">
              <IconBase icon="message" color="gray"/>
              <span>Чат</span>
            </UIButton>
            <UIButton class="profile-user__action action-share gray">
              <IconBase icon="share" color="black"/>
            </UIButton>
          </div>
        </div>
        <div class="profile-user__content">
          <div class="profile-user__content-slider" v-if="posts.length">
            <SwiperSlider
                v-if="width > 1000"
                slides-per-view="3"
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
                <ProfilePost :data="post"/>
              </swiper-slide>
            </SwiperSlider>
            <div class="profile-user__items" v-else>
              <ProfilePost v-for="(post, i) of [...posts, ...posts, ...posts, ...posts]" :key="i" :data="post"/>
            </div>
          </div>
          <div v-else class="profile-user__content-empty">
            <div class="no-posts__image">
              <img src="~/assets/images/profile/no-posts.svg" alt=""/>
            </div>
            <p class="no-posts__text">Нет активных объявлений</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {SwiperSlide} from "swiper/vue";
import {useWindowSize} from "@vueuse/core";

const {width} = useWindowSize()

definePageMeta({
  layout: 'purchases'
})

const activeControl = ref(0);
const controls = ref([
  {
    title: "Активных",
    count: 22,
  },
  {
    title: "Завершенных",
    count: 42,
  },
]);

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

const callElement = ref()
const callUser = () => callElement.value?.dialog.showModal()

</script>

<style lang="scss" scoped>
.profile-user {
  .profile-mobile__header {
    padding-left: 0;
    padding-right: 0;
  }

  &__items {
    .post {
      &:not(:last-of-type) {
        margin-bottom: 20px;
      }
    }
  }

  &__header {
    display: flex;
    align-items: center;
    margin-bottom: 60px;

    @media (max-width: 1000px) {
      flex-wrap: wrap;
      margin-bottom: 20px;
    }
  }

  &__inner {
    padding: 40px 20px;
    background: #fff;
    box-shadow: 0px 11px 48px rgba(178, 188, 221, 0.15);
    border-radius: 25px;

    @media (max-width: 1000px) {
      box-shadow: none;
      padding: 0 0 100px;
    }
  }

  &__actions {
    display: flex;
    gap: 20px;
    margin-left: auto;

    @media (max-width: 1000px) {
      width: 100%;
      order: 2;
      margin-top: 35px;

      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;

      .profile-user__action {
        width: auto;
      }
    }
  }

  &__action {
    padding: 10px 15px;
    border-radius: 100px;
    font-size: 20px;
    line-height: 100%;
    cursor: pointer;

    //&.action-call {
    //  background: $green;
    //  color: #fff;
    //}

    &.action-chat {
      gap: 10px;
      //border: 2px solid #dadeec;
      //width: 150px;
    }

    &.action-share {
      width: 50px;
      border-radius: 50%;
      padding: 0;

      @media (max-width: 1000px) {
        display: none;
      }

      svg {
        width: 25px !important;
      }
    }
  }

  &__title {
    font-weight: 700;
    font-size: 28px;
    line-height: 100%;
    margin-bottom: 40px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    margin-right: 60px;

    @media (max-width: 1000px) {
      margin-right: 0;
    }

    &-head {
      display: flex;
      align-items: flex-end;
      gap: 15px;
      margin-bottom: 5px;
    }
  }

  &__name {
    font-size: 20px;
    line-height: 100%;
  }

  &__status {
    color: $green;
  }

  &__date {
    font-size: 14px;
    line-height: 18px;
    color: $gray;
    margin-bottom: 5px;
  }

  &__stats {
    display: flex;
  }

  &__rate {
    display: flex;
    align-items: center;
    padding-right: 12px;

    &-stars {
      margin-right: 5px;
      display: flex;
      align-items: center;

      svg {
        width: 14px !important;
      }
    }

    &-num {
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #fff;
      background: $green;
      border-radius: 5px;
      padding: 0 5px;
    }
  }

  &__reviews {
    font-size: 14px;
    line-height: 18px;
    color: $green;
    padding-left: 12px;

    border-left: 1px solid #e1e5f2;
  }

  &__image {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 10px;
  }

  &__controls {
    display: flex;
    gap: 15px;

    @media (max-width: 1000px) {
      width: 100%;
      order: 3;
      margin-top: 40px;
      justify-content: center;
    }
  }

  &__control {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    cursor: pointer;
    position: relative;
    padding: 0 10px 10px;

    &::after {
      content: "";
      position: absolute;
      height: 3px;
      width: 100%;
      border-radius: 3px;
      background: $green;
      bottom: 0;
      left: 0;
      transition: all 0.2s;
      opacity: 0;
    }

    &.active,
    &:hover {
      color: $green;

      &::after {
        opacity: 1;
      }

      .title {
        font-size: 700;
      }
    }

    .title {
      margin-right: 5px;
      transition: all 0.2s;
    }

    .count {
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      color: $gray;
    }
  }

  &__content {
    padding-left: 60px;

    @media (max-width: 1000px) {
      padding-left: 0;
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

      a {
        display: flex;
        width: 100%;
        height: 100%;
      }

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
    }
  }
}
</style>
