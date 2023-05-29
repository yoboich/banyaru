<template>
  <div class="profile">
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
        <nuxt-link to="/profile/settings">
          <IconBase icon="arrow-left" color="green"/>
        </nuxt-link>
      </button>
      <div class="profile__balance">
        <span class="profile__balance-amount">15 300 ₽</span>
        <button class="profile__balance-btn">
          <IconBase icon="increment" color="green"/>
        </button>
      </div>
    </div>
    <div class="profile__location">
      <span>Где:</span>
      <div class="city" @click="toggleModal">
        <span>{{ selectedCity }}</span>
        <IconBase icon="arrow-left" color="green"/>
      </div>
      <CitySelectModal
          v-show="isModalOpen"
          @close-modal="toggleModal"
          @change-city="changeCity"
          :cities="cities"
          :selectedCity="selectedCity"
      />
    </div>
    <div class="profile__block">
      <h2 class="profile__block-title">Мои объявления</h2>
      <div class="profile__block-items">
        <ProfilePost :data="posts[0]" />
        <ProfilePost :data="posts[1]" />
      </div>
      <ProfileBtn>
        <nuxt-link to="/profile/posts">
          Все объявления
        </nuxt-link>
      </ProfileBtn>
      <ProfileBtn>
        <nuxt-link to="/create-post">
          Разместить объявление
        </nuxt-link>
      </ProfileBtn>
    </div>
    <div class="profile__block">
      <h2 class="profile__block-title">Заказы</h2>
      <ProfileBtn>
        <nuxt-link to="/search">
          Найти баню, услугу, товары
        </nuxt-link>
      </ProfileBtn>
    </div>
  </div>
</template>

<script setup>

const selectedCity = ref("Москва");
const isModalOpen = ref(false);

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
};

const changeCity = (city) => {
  selectedCity.value = city;
  toggleModal();
};

const cities = getCities();

const props = defineProps(['posts'])
</script>

<style lang="scss" scoped>
.profile {
  padding: 20px ;

  &-btn {
    width: 100%;
    padding: 15px;
  }

  &__user {
    margin: 0 0 40px;
    gap: 10px;

    &-image, &-btn, &-info {
      margin: 0;
    }
  }

  &__balance {
    flex-grow: 1;
    justify-content: flex-end;
  }

  &__location {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 40px;

    & > span {
      font-size: 16px;
      line-height: 20px;
      color: $gray;
    }

    .city {
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      color: $green;
      display: flex;
      align-items: center;
      gap: 5px;

      svg {
        height: 14px;
        transform: rotate(180deg);
        --icon-color: #{$green};
      }
    }
  }

  &__block {
    &:not(:last-of-type) {
      margin-bottom: 40px;
    }

    &-title {
      font-weight: 700;
      font-size: 28px;
      line-height: 100%;
      margin-bottom: 30px;
    }

    &-items {
      margin-bottom: 50px;
      .post {
        &:not(:last-of-type) {
          margin-bottom: 30px;
        }
      }
    }

    .profile-btn {
      &:first-of-type {
        margin-bottom: 20px;
      }

    }
  }
}
</style>