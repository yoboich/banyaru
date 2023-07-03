<template>
  <div class="profile-settings">
    <div class="profile-mobile__header">
      <button class="profile-mobile__header-btn">
        <nuxt-link to="/profile">
          <IconBase icon="arrow-left" color="green"/>
        </nuxt-link>
      </button>
    </div>
    <label for="avatar" class="profile-settings__image">
      <input id="avatar" type="file">
      <img src="~/assets/images/preview/user.png" alt="">
    </label>
    <span class="profile-settings__id">ID 80968765</span>
    <div class="profile-settings__block">
      <h2 class="profile-settings__block-title">Имя</h2>
      <label for="" class="profile-settings__input">
        <input value="Светлана" type="text">
        <IconBase icon="pen"/>
      </label>
    </div>
    <div class="profile-settings__block">
      <h2 class="profile-settings__block-title">Контакты</h2>
      <div class="profile-settings__item">
        <IconBase icon="envelope" subpath="/profile"/>
        <span>mail@mail.ru</span>
      </div>
      <div class="profile-settings__item">
        <IconBase icon="mobile-phone" subpath="/profile"/>
        <span>+7 989 345-23-03</span>
      </div>
    </div>
    <div class="profile-settings__block">
      <h2 class="profile-settings__block-title">Профиль</h2>
      <div class="profile-settings__item remove">
        <IconBase icon="trash" subpath="/profile"/>
        <span>Удалить</span>
        <IconBase icon="arrow-left" color="black"/>
      </div>
    </div>
    <button class="profile-settings__btn">Выйти</button>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.profile-settings {
  padding: 20px;

  &__image {
    display: flex;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto 15px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    input {
      display: none;
    }
  }

  &__id {
    width: 100%;
    text-align: center;
    display: block;
    margin-bottom: 100px;
  }

  &__block {
    &-title {
      font-weight: 700;
      font-size: 28px;
      line-height: 100%;
      margin-bottom: 20px;
    }

    &:not(:last-of-type) {
      margin-bottom: 30px;
    }
  }

  &__input {
    position: relative;
    display: flex;

    .icon-base {
      position: absolute;
      top: 50%;
      right: 12px;
      transform: translateY(-50%);
    }

    input {
      width: 100%;
      border: 2px solid #DADEEC;
      border-radius: 100px;
      padding: 12px 35px 12px 12px;
    }
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 20px;

    font-size: 16px;
    line-height: 18px;

    &.remove {
      margin-bottom: 40px;

      .icon-base:last-of-type {
        margin-left: auto;
        transform: rotate(180deg);
        height: 14px;
      }
    }

    &:not(:last-of-type) {
      margin-bottom: 20px;
    }
  }

  &__btn {
    width: 100%;
    border-radius: 25px;
    background: #FFE0E0;
    padding: 15px;
    font-size: 20px;
    line-height: 100%;
  }
}
</style>