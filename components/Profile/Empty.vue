<template>
  <div class="empty" v-if="!items">
    <h1 class="empty-title">{{ props.title }}</h1>
    <p class="empty-text">
      Вы можете начать свой выбор с
      <nuxt-link to="/">главной страницы</nuxt-link>
      или выбрать
      <nuxt-link to="/search/filter">категорию</nuxt-link>
    </p>
    <ProfileSlider title="Недавно вы смотрели"/>
    <ProfileSlider title="Избранное"/>
    <nuxt-link to="/search">
      <ProfileBtn>
        Найти баню, услугу, товары
      </ProfileBtn>
    </nuxt-link>
  </div>
</template>

<script setup>

const props = defineProps({
  title: String,
});
</script>

<style lang="scss" scoped>
.empty {

  @media (max-width: 1000px) {
    .profile-btn {
      padding: 15px;
      width: 100%;
      max-width: 400px;
    }
  }

  &-title {
    text-align: center;
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    margin-bottom: 10px;

    @media (max-width: 1000px) {
      text-align: left;
    }
  }

  &-text {
    font-size: 14px;
    line-height: 18px;
    color: $gray;
    max-width: 300px;
    margin: 0 auto 30px;
    text-align: center;

    @media (max-width: 1000px) {
      text-align: left;
      margin: 0;
    }

    a {
      color: $black;
    }
  }
}
</style>
