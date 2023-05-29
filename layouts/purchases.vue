<template>
  <div v-if="width > 1000">
    <Header />
    <main>
      <slot />
    </main>
  </div>
  <div v-else>
    <HeaderNav class="mobile" v-if="route.name !== 'chat-user'"/>
    <slot />
  </div>
</template>

<script setup>
import {useWindowSize} from "@vueuse/core";
const {width} = useWindowSize()
const route = useRoute()

</script>

<style scoped lang="scss">
</style>
