<template>
  <nav class="header__nav">
    <ul class="header__nav-list">
      <li
        class="header__nav-item"
        :class="[
          `header__nav-item--${key}`,
          isRoute(routeData.link) ? 'active' : '',
        ]"
        v-for="(routeData, key) of routes"
        :key="key"
      >
        <button class="header__nav-btn">
          <nuxt-link :to="routeData.link" class="header__nav-link">
            <img :src="routeData.iconPath" alt="" />
          </nuxt-link>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const route = useRoute();

const routes = {
  home: {
    iconPath: getLocalUrl("/icons/logo-icon-gray.svg"),
    link: "/",
  },
  search: {
    iconPath: getLocalUrl("/icons/search-gray.svg"),
    link: "/search",
  },
  favorite: {
    iconPath: getLocalUrl("/icons/nav-favorite-gray.svg"),
    link: "/favorite",
  },
  chat: {
    iconPath: getLocalUrl("/icons/chat-gray.svg"),
    link: "/chat",
  },
  profile: {
    iconPath: getLocalUrl("/icons/profile-gray.svg"),
    link: "/profile",
  },
};

const isRoute = (name) => {
  if (name === "/search") {
    return ["booking", "booking-slug", "search", "search-filter"].includes(
      route.name
    );
  } else if (name === "/") {
    return ["index", "news", "news-slug"].includes(route.name);
  } else {
    return name.substring(1) === route.name;
  }
};
</script>

<style lang="scss" scoped>
@mixin setImage($path) {
  &:hover,
  &.active {
    button {
      background: url($path);
    }
  }
}

.header__nav {
  background: #ffffff;
  box-shadow: 0px 6px 50px rgba(166, 175, 203, 0.28);
  border-radius: 100px;
  padding: 6px;

  max-width: 490px;
  width: 100%;

  &.mobile {
    max-width: 400px;
    width: calc(100% - 30px);
    margin: 0 auto;

    position: fixed;
    z-index: 900;

    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
    box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);

    ul {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 5px;
    }

    .header__nav-item {
      width: auto;
      height: auto;
      aspect-ratio: 1;
    }
  }

  &-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  &-item {
    @include flex-center-all;

    margin: 0;
    padding: 0;

    width: 70px;
    height: 70px;
    border-radius: 50%;

    cursor: pointer;
    transition: all 0.2s;

    &--home {
      @include setImage("~/assets/icons/logo-icon-white.svg");
    }

    &--search {
      @include setImage("~/assets/icons/search-white.svg");
    }

    &--favorite {
      @include setImage("~/assets/icons/nav-favorite-white.svg");
    }

    &--chat {
      @include setImage("~/assets/icons/chat-white.svg");
    }

    &--profile {
      @include setImage("~/assets/icons/profile-white.svg");
    }

    &:hover,
    &.active {
      background: $green;

      img {
        opacity: 0;
      }
    }
  }

  &-btn {
    background: transparent;
    background-repeat: no-repeat !important;
    background-position: center !important;
  }

  &-link,
  &-btn {
    @include flex-center-all;

    width: 100%;
    height: 100%;
    border-radius: 50%;

    cursor: pointer;
  }
}
</style>
