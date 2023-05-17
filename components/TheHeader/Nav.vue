<template>
  <nav class="header__nav">
    <ul>
      <li
        class="header__nav-item header__nav-item--logo"
        :class="{ active: route.fullPath === '/' }"
      >
        <nuxt-link to="/">
          <button>
            <TheHeaderIconLogo style="fill: #8f99ba" />
          </button>
        </nuxt-link>
      </li>
      <li
        class="header__nav-item"
        :class="{
          active: [
            'search',
            'search-filter',
            'booking-slug',
            'booking',
          ].includes(route.name),
        }"
      >
        <nuxt-link to="/search">
          <button>
            <TheHeaderIconSearch style="stroke: #8f99ba" />
          </button>
        </nuxt-link>
      </li>
      <li class="header__nav-item">
        <button>
          <TheHeaderIconHeart style="stroke: #8f99ba" />
        </button>
      </li>
      <li
        class="header__nav-item header__nav-item--chat"
        :class="{ active: route.fullPath === '/chat' }"
      >
        <nuxt-link to="/chat">
          <button>
            <TheHeaderIconChat style="stroke: #8f99ba" />
          </button>
        </nuxt-link>
      </li>
      <li
        class="header__nav-item"
        :class="{ active: route.fullPath === '/personal-order' }"
      >
        <nuxt-link to="/personal-order">
          <button>
            <TheHeaderIconProfile style="stroke: #8f99ba" />
          </button>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const route = useRoute();
</script>

<style lang="scss" scoped>
.header__nav {
  background: #ffffff;
  box-shadow: 0px 6px 50px rgba(166, 175, 203, 0.28);
  border-radius: 100px;
  padding: 6px;

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

  ul {
    display: flex;
    align-items: center;
    gap: 0 30px;
  }

  &-item {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s;

    a {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    button {
      width: 100%;
      height: 100%;
      padding: 0;
      border-radius: 50%;
      background: transparent;
      cursor: pointer;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    svg {
      width: 24px;
      height: 24px;
      transition: all 0.3s;
    }

    &--chat {
      svg {
        fill: #8f99ba;
      }
    }

    &:hover,
    &.active {
      background: #32bd1b;

      &.header__nav-item--logo {
        svg {
          fill: #fff !important;
          stroke: none !important;
        }
      }

      &.header__nav-item--chat {
        svg {
          stroke: #fff !important;
          fill: #fff !important;
        }
      }

      svg {
        stroke: #fff !important;
      }
    }
  }
}
</style>
