<template>
  <div class="profile-posts">
    <div class="profile-mobile__header">
      <button class="profile-mobile__header-btn">
        <nuxt-link to="/profile">
          <IconBase icon="arrow-left" color="green"/>
        </nuxt-link>
      </button>
      <h1 class="profile-mobile__title">Мои объявления</h1>
      <button class="profile-mobile__header-btn">
        <IconBase icon="more" color="green"/>
      </button>
    </div>
    <div class="profile-posts__inner">
      <ProfileTabs :tabs="tabs"/>
      <div class="profile-posts__items" v-if="!props.posts?.length">
        <div class="profile-posts__item" v-for="(post, i) of props.posts" :key="i">
          <ProfilePost controls :data="post"/>
          <div class="profile-posts__item-fire">
            <span>0 позиция в поиске по региону</span>
            <button class="profile-posts__item-btn">Поднять</button>
          </div>
        </div>
      </div>
      <div v-else class="profile__content-empty">
        <div class="no-posts__image">
          <img src="~/assets/images/profile/no-posts.svg" alt=""/>
        </div>
        <p class="no-posts__text">Нет активных объявлений</p>
        <button class="no-posts__btn">
          <nuxt-link to="/create-post">Разместить объявление</nuxt-link>
        </button>
      </div>
      <div v-if="!props.posts?.length">
        <ProfileBtn>
          <nuxt-link to="/search">Найти баню, услугу, товары</nuxt-link>
        </ProfileBtn>
        <ProfileBtn>
          <nuxt-link to="/create-post">Разместить объявление</nuxt-link>
        </ProfileBtn>

      </div>
    </div>
  </div>
</template>

<script setup>
const tabs = ref(['Все', 'Активные', 'Архив'])

const props = defineProps(['posts'])
</script>

<style lang="scss" scoped>
.profile-posts {
  height: 100vh;
  display: flex;
  flex-direction: column;

  .profile__content-empty {
    justify-content: flex-start;
    padding-top: 100px;
  }

  &__inner {
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    background: #fff;
    flex-grow: 1;
  }

  &__items {
    flex-grow: 1;
    overflow: auto;
    margin-bottom: 30px;
  }

  & .profile-btn {
    padding: 15px;

    &:first-of-type {
      margin-bottom: 20px;
    }

    &:last-of-type {
      margin-bottom: 110px;
    }
  }

  &__item {
    max-width: 400px;
    margin: 0 auto;

    &-fire {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      background: #E4E7F0;
      border-radius: 100px;
      padding-left: 15px;
      margin-top: 20px;

      span {
        font-size: 11px;
        line-height: 13px;
        color: $gray;
      }
    }

    &:not(:last-of-type) {
      margin-bottom: 30px;
    }

    &-btn {
      @include flex-center-all;
      height: 40px;
      width: 140px;
      border-radius: 25px;
      border: 2px solid #DADEEC;
      background: #fff;
      color: $green;
    }
  }
}
</style>