<template>
  <div class="profile" v-if="width > 1000">
    <Header/>
    <div class="container">
      <div class="profile-inner">
        <aside class="profile__sidebar">
          <h1 class="profile__sidebar-title">Личный кабинет</h1>
          <div class="profile__user">
            <img
                class="profile__user-image"
                src="~/assets/images/preview/user.png"
                alt=""
            />
            <div class="profile__user-info">
              <h3 class="profile__user-name">Светлана</h3>
              <span class="profile__user-phone">+7 985 123 33 34</span>
            </div>
            <button class="profile__user-btn">
              <nuxt-link to="/profile/settings"><IconBase icon="arrow-left" color="green"/></nuxt-link>
            </button>
            <div class="profile__balance">
              <span class="profile__balance-amount">15 300 ₽</span>
              <button class="profile__balance-btn">
                <IconBase icon="increment" color="green"/>
              </button>
            </div>
          </div>
          <div class="profile__subscription">
            <div class="profile__subscription-name">
              <span>плюс</span>
            </div>
            <span class="profile__subscription-description"
            >Привелегии и полный доступ</span
            >
            <span class="profile__subscription-expire">
              Истекает: 21.06.23
            </span>
          </div>
          <div class="profile__tabs">
            <ProfileSidebarItem
                to="/profile/posts"
                icon="image"
                title="Мои объявления"
            >
              <div class="count unread">3</div>
            </ProfileSidebarItem>
            <ProfileSidebarItem
                to="/chat"
                icon="message-help"
                title="Поддержка"
            >
              <div class="count">1</div>
            </ProfileSidebarItem>
            <ProfileSidebarItem icon="download" title="Приложение">
              <div class="count">3</div>
            </ProfileSidebarItem>
            <ProfileSidebarItem icon="ring" title="Уведомления" to="/profile/notifications"/>
            <ProfileSidebarItem icon="lock" title="Конфеденциальность"/>
            <ProfileSidebarItem icon="share" title="Поделиться приложением">
              <button class="btn-download">Установить</button>
            </ProfileSidebarItem>
            <ProfileSidebarItem icon="info" title="О нас"/>
            <ProfileSidebarItem icon="exit" title="Выйти"/>
            <ProfileSidebarItem title="Удалить аккаунт"/>
            <ProfileSidebarItem title="Версия 1.2.3 | 10.11.22">
              <button class="tab-btn">
                <IconBase icon="arrow-left" color="black"/>
              </button>
            </ProfileSidebarItem>
          </div>
        </aside>
        <slot/>
      </div>
    </div>
  </div>
  <div class="profile-mobile" v-else>
    <HeaderNav class="mobile"/>
    <slot/>
    <aside class="profile__sidebar">
      <div class="profile__subscription">
        <div class="profile__subscription-name">
          <span>плюс</span>
        </div>
        <span class="profile__subscription-description"
        >Привелегии и полный доступ</span
        >
        <span class="profile__subscription-expire">
              Истекает: 21.06.23
            </span>
      </div>
      <div class="profile__tabs">
        <ProfileSidebarItem
            to="/profile/posts"
            icon="image"
            title="Мои объявления"
        >
          <div class="count unread">3</div>
        </ProfileSidebarItem>
        <ProfileSidebarItem
            to="/chat"
            icon="message-help"
            title="Поддержка"
        >
          <div class="count">1</div>
        </ProfileSidebarItem>
        <ProfileSidebarItem icon="download" title="Приложение">
          <div class="count">3</div>
        </ProfileSidebarItem>
        <ProfileSidebarItem icon="ring" title="Уведомления" to="/profile/notifications" />
        <ProfileSidebarItem icon="lock" title="Конфеденциальность"/>
        <ProfileSidebarItem icon="share" title="Поделиться приложением">
          <button class="btn-download">Установить</button>
        </ProfileSidebarItem>
        <ProfileSidebarItem icon="info" title="О нас"/>
        <ProfileSidebarItem icon="exit" title="Выйти"/>
        <ProfileSidebarItem title="Удалить аккаунт"/>
        <ProfileSidebarItem title="Версия 1.2.3 | 10.11.22">
          <button class="tab-btn">
            <IconBase icon="arrow-left" color="black"/>
          </button>
        </ProfileSidebarItem>
      </div>
    </aside>

  </div>
</template>

<script setup>
import {useWindowSize} from "@vueuse/core";

const {width} = useWindowSize()
</script>

<style lang="scss">.profile-mobile {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }

  &__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
  }

  .profile-tabs {
    margin: 0 auto 40px;
  }
}

.profile {
  padding-bottom: 50px;

  &-mobile {
    .profile__content {
      padding-bottom: 130px;
      min-height: 100vh;
    }

    .profile__sidebar {
      padding-bottom: 130px;
    }

  }

  &-inner {
    background: #fff;
    box-shadow: 0px 11px 48px rgba(178, 188, 221, 0.15);
    border-radius: 25px;
    display: flex;
  }

  &__sidebar {
    padding: 30px 0;

    &-title {
      font-weight: 700;
      font-size: 28px;
      line-height: 100%;
      margin-bottom: 40px;
      margin-left: 25px;
    }
  }

  &__user {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    margin-left: 25px;
    margin-right: 25px;

    &-image {
      width: 60px;
      height: 60px;
      object-fit: cover;
      object-position: center;
      border-radius: 50%;
      margin-right: 10px;
    }

    &-info {
      margin-right: 15px;
    }

    &-name {
      font-size: 20px;
      line-height: 100%;
      margin-bottom: 5px;
    }

    &-phone {
      font-size: 14px;
      line-height: 18px;
      color: $gray;
    }

    &-btn {
      cursor: pointer;
      transform: rotate(180deg);
      margin-right: 60px;

      a {
        display: flex;
        width: 100%;
        height: 100%;
      }
    }
  }

  &__balance {
    display: flex;
    align-items: center;
    gap: 10px;

    &-amount {
      font-size: 16px;
      line-height: 18px;
    }

    &-btn {
      @include flex-center-all;
      width: 27px;
      height: 27px;
      border-radius: 50%;
      border: 2px solid #dadeec;
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

  &__subscription {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    margin-right: 25px;
    margin-left: 20px;

    &-name {
      @include flex-center-all;
      font-size: 20px;
      line-height: 100%;
      background: $pink;
      border-radius: 15px;
      color: #fff;
      padding: 2px 5px;
      margin-right: 15px;

      span {
        transform: translateY(-10%);
      }
    }

    &-description {
      font-size: 11px;
      line-height: 13px;
      color: $gray;
    }

    &-expire {
      font-size: 11px;
      line-height: 13px;
      margin-left: auto;
    }
  }
}
</style>
