<script setup>
import {useWindowSize} from '@vueuse/core';

const isLarge = ref(true);
const {width} = useWindowSize();
watchEffect(() => {
  if (width.value <= 768) {
    isLarge.value = false;
  } else {
    isLarge.value = true;
  }
});
onMounted(() => {
  if (width.value <= 768) {
    isLarge.value = false;
  }
});
</script>

<template>
  <ClientOnly fallback-tag="span" fallback="Loading comments...">
        <slot/>
  </ClientOnly>
</template>

<style scoped lang="scss">
.wrapper-content {
  @media screen and (max-width: 768px) {
    margin: 0;
  }
}
</style>