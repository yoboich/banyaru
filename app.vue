<template>
  <div class="app full-screen-div" :class="{ mobile: width <= 1000 }">
    <VitePwaManifest />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useWindowSize } from "@vueuse/core";
const { width } = useWindowSize();

useHead({
  meta: [
    {
      name: 'viewport',
      content: `width=device-width, initial-scale=${width.value < 375 ? (width.value > 350 ? '0.95' : '0.8') : '1'} maximum-scale=1.0, user-scalable=no`
    }
  ]
})

const route = useRoute()

watch(() => route.name, () => {
  const body = document.querySelector('body')
  if (route.name === 'search') {
    body.style['overscroll-behavior'] = 'contain'
  } else {
    body.style['overscroll-behavior'] = 'auto'
  }
})
</script>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
