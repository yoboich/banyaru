<template>
  <section class="profile__content" v-if="width > 1000" >
    <h1 class="profile__content-title">Настройки</h1>
  </section>
  <ProfileMobileSettings v-else />
</template>

<script setup>
import {useWindowSize} from "@vueuse/core";
const {width} = useWindowSize()

definePageMeta({
  layout: 'profile',
});
</script>

<style lang="scss" scoped>

</style>