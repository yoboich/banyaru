<template>
  <div>
    <aside class="search__sidebar" v-if="width > 1000">
      <ScrollArea ref="scrollArea">
        <div class="search__sidebar-content">
          <slot />
        </div>
      </ScrollArea>
    </aside>
    <SearchMobile @close="emits('close')" v-else  ref="scrollArea" :open="props.open">
      <div>
        <slot/>
      </div>
    </SearchMobile>
  </div>
</template>

<script setup>
import {useWindowSize} from "@vueuse/core";

const {width} = useWindowSize()
const emits = defineEmits(['close'])

const scrollArea = ref()

const props = defineProps({
  open: Boolean
})

defineExpose({
  el: scrollArea
})
</script>

<style lang="scss" scoped>

</style>