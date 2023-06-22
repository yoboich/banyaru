<template>
  <nav class="header__nav">
    <ul class="header__nav-list">
      <li
          class="header__nav-item"
          :class="[`item-${key}`, isRoute(link) ? 'active' : '']"
          v-for="({ icon, link }, key) of routes"
          :key="key"
      >
        <button class="header__nav-btn">
          <nuxt-link :to="link" class="header__nav-link">
            <IconBase :icon="icon" color="gray"/>
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
    icon: "logo",
    link: "/",
  },
  search: {
    icon: "search",
    link: "/search",
  },
  favorite: {
    icon: "nav-favorite",
    link: "/profile/purchases?tab=favorite",
  },
  chat: {
    icon: "chat",
    link: "/chat",
  },
  profile: {
    icon: "profile",
    link: "/profile",
  },
};

const isRoute = (name) => {
  switch (name) {
    case "/search":
      return ["booking", "booking-slug", "search", "search-filter"].includes(
          route.name
      );
      break;
    case "/":
      return ["index", "news", "news-slug"].includes(route.name);
      break;
    case "/profile":
      return ["profile-posts", 'profile', 'profile-settings', 'profile-notifications'].includes(route.name);
      break;
    case '/profile/purchases?tab=favorite':
      return ['profile-purchases'].includes(route.name)
      break;
    default:
      return name.substring(1) === route.name;
  }
};
</script>

<style lang="scss" scoped>
.header__nav {
  background: #ffffff;
  box-shadow: 0px 6px 50px rgba(166, 175, 203, 0.28);
  border-radius: 100px;
  padding: 6px;

  max-width: 490px;
  width: 100%;

  &.mobile {
    max-width: 400px;
    width: calc(100% - 40px);
    margin: 0 auto;

    position: fixed;
    z-index: 900;

    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
    box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  }

  &-list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 30px;
    margin: 0;
    padding: 0;
    width: 100%;

    @media (max-width: 1000px) {
      gap: 10px;
    }
  }

  &-item {
    @include flex-center-all;

    margin: 0;
    padding: 0;

    aspect-ratio: 1;
    border-radius: 50%;

    cursor: pointer;
    transition: all 0.2s;

    &.item-home {
      svg {
        max-width: 28px;
      }
    }

    &:hover,
    &.active {
      background: $green;

      svg {
        --icon-color: #{white};
      }
    }
  }

  &-btn {
    background: transparent;
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
