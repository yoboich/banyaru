<template>
  <div>
    <aside class="search__sidebar" v-if="width > 1000">
      <ScrollArea ref="scrollArea">
        <div class="search__sidebar-content">
          <slot/>
        </div>
      </ScrollArea>
    </aside>
    <!--    <SearchMobile @close="emits('close')" v-else>-->
    <!--      <div>-->
    <!--        <slot/>-->
    <!--      </div>-->
    <!--    </SearchMobile>-->
    <BottomSheet v-else @close="emits('close')">
      <slot/>
    </BottomSheet>
  </div>
</template>

<script setup>
import {useWindowSize} from "@vueuse/core";

const {width} = useWindowSize()
const emits = defineEmits(['close'])
</script>

<style lang="scss" scoped>

</style>