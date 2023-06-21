<template>
  <div class="scroll-area" >
    <div class="scroll-area__scrollbar" ref="scrollbarElement" v-show="scrollHeight > windowHeight">
      <div
          id="scroll-content"
          class="scrollbar__content"
          :style="{ height: scrollHeight + 'px' }"
      ></div>
    </div>
    <div class="scroll-area__content" ref="contentWrapper">
      <slot />
    </div>
  </div>
</template>

<script setup>
const contentWrapper = ref()
const contentElement = ref()
const scrollbarElement = ref()
const scrollHeight = ref()
const windowHeight = ref()
const windowHeightStyle = computed(() => windowHeight.value + 'px')

const route = useRoute()

function firstElScroll(e) {
  contentWrapper.value.scrollTop = scrollbarElement.value.scrollTop;
}
function secondElScroll(e) {
  scrollbarElement.value.scrollTop = contentWrapper.value.scrollTop;
}

onMounted(async () => {
  contentElement.value = contentWrapper.value.children[0]
  scrollbarElement.value.addEventListener("scroll", firstElScroll, false);
  contentWrapper.value.addEventListener("scroll", secondElScroll, false);

  windowHeight.value = (window.innerHeight - 40)

  const resizeObserver = new ResizeObserver(function() {
    scrollHeight.value = contentElement.value?.scrollHeight;
    if (contentWrapper.value && route.name === 'search') {
      contentWrapper.value.scrollTop = 0
    }
  });

  resizeObserver.observe(contentElement.value);
});

defineExpose({
  el: contentWrapper
})
</script>

<style lang="scss" scoped>

.scroll-area {
  background: #fff;
  border-radius: 25px;
  border: 1px solid #dadeec;
  box-shadow: 0px 11px 48px rgba(178, 188, 221, 0.15);
  position: relative;

  @media (max-width: 1000px) {
    height: 100vh;
    border-radius: 0;
  }

  &__content {
    border-radius: 25px 25px 0 0;
    overflow-y: auto;
    height: v-bind(windowHeightStyle);

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__scrollbar {
    width: 14px;
    height: v-bind(windowHeightStyle);
    position: absolute;
    right: -20px;
    top: 0;
    overflow-y: auto;
    border: 1px solid #dadeec;
    border-radius: 25px;

    &::-webkit-scrollbar {
      width: 12px;
    }

    &::-webkit-scrollbar-track {
      background: #fff;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: $gray;
      border-radius: 10px;
      border: 4px solid #fff;
      background-clip: content-box;
    }

    &__content {
      height: 20000px;
      opacity: 0;
    }

    @media (max-width: 1000px) {
      display: none;
    }

  }
}
</style>