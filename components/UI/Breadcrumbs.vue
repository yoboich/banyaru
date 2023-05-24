<template>
  <div v-if="breadcrumbs.length" class="breadcrumbs">
    <nuxt-link class="breadcrumbs__item" to="/">
      <IconBase class="icon-logo" icon="logo" color="gray" />
      <IconBase icon="breadcrumb-arrow" color="light-gray" />
    </nuxt-link>
    <nuxt-link
      class="breadcrumbs__item"
      :to="route.path"
      v-for="(route, i) of breadcrumbs"
      :key="route"
    >
      <span>{{ translatedRoutes[route.label] || "Страница" }}</span>
      <IconBase
        v-if="i !== breadcrumbs?.length - 1"
        icon="breadcrumb-arrow"
        color="light-gray"
      />
    </nuxt-link>
  </div>
</template>

<script setup>
const route = useRoute();

const breadcrumbs = computed(() => {
  return getBreadcrumbs(route.path);
});

function getBreadcrumbs(fullpath) {
  const breadcrumbs = [];
  const pathArray = fullpath.split("/");
  let path = "";

  for (let i = 0; i < pathArray.length; i++) {
    if (pathArray[i] !== "") {
      path += "/" + pathArray[i];
      breadcrumbs.push({ label: pathArray[i], path: path });
    }
  }
  return breadcrumbs;
}

const translatedRoutes = ref({
  news: "Новости",
  booking: "Бронирование",
  chat: "Чат",
});
</script>

<style lang="scss" scoped>
.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 10px;

  position: absolute;
  left: 20px;
  top: 0;

  .icon-logo {
    width: 18px;

    &:hover {
      --icon-color: #{$green};
    }
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 10px;
    color: $gray;

    span {
      transition: all 0.2s;

      &:hover {
        color: $green;
      }
    }

    &:first-of-type {
      .icon:first-of-type {
        width: 18px;
      }
    }
  }
}
</style>
