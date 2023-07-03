<template>
  <div>
    <aside class="search__sidebar" v-if="width > 1000">
      <ScrollArea ref="scrollArea">
        <div class="search__sidebar-content">
          <slot/>
        </div>
      </ScrollArea>
    </aside>
    <BottomSheet @close="emits('close')" v-else >
      <slot/>
    </BottomSheet>
  </div>
</template>

<script setup>
import {useWindowSize} from "@vueuse/core";

const {width} = useWindowSize()
const emits = defineEmits(['close'])
</script>

<style lang="scss">
.no-drag-icon {
  .sheet {
    .drag-line {
      display: none;
    }

    &__content {
      padding-top: 0;
    }
  }
}
</style>