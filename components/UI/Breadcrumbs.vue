<template>
  <div v-if="breadcrumbs.length" class="breadcrumbs">
    <nuxt-link class="breadcrumbs__item" to="/">
      <Icon icon="logo-icon" :hover="false" />
      <Icon icon="breadcrumb-arrow" :hover="false" />
    </nuxt-link>
    <nuxt-link
      class="breadcrumbs__item"
      :to="route.path"
      v-for="(route, i) of breadcrumbs"
      :key="route"
    >
      <span>{{ translatedRoutes[route.label] || "Страница" }}</span>
      <Icon
        v-if="i !== breadcrumbs?.length - 1"
        icon="breadcrumb-arrow"
        :hover="false"
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

  &__item {
    display: flex;
    align-items: center;
    gap: 10px;
    color: $gray;

    &:first-of-type {
      .icon:first-of-type {
        width: 18px;
      }
    }
  }
}
</style>
