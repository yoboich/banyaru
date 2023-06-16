<template>
    <div class="search-mobile" :style="{transform: `translateY(${cardY + 'px'})`}" ref="card"
         @click="isMiddle ? openCard() : null"
    >
      <div class="search-mobile__header">
        <div class="line"></div>
      </div>
      <div class="search-mobile__content" :class="{hidden: hideMobileCardScroll}" ref="contentWrapper">
        <slot/>
      </div>
    </div>
</template>

<!--@touchmove.prevent="moveCard($event)"-->
<!--@touchend.prevent="moveEnd($event)"-->

<script setup>
const cardY = ref()
const card = ref()
const contentWrapper = ref()
const contentElement = ref()

const prevY = ref(null)
const diffY = ref()

const emits = defineEmits(['close'])
const limits = ref({})

const isMiddle = computed(() => cardY.value === limits.value.middle)
const route = useRoute()

const mobileSheetHeight = useState('mobileSheetHeight')
const hideMobileCardScroll = useState('hideMobileCardScroll')

const props = defineProps({
  open: Boolean
})

const openCard = () => {
  cardY.value = limits.value.middle
}

const moveEnd = (e) => {
  return null
  prevY.value = null
  const posY = cardY.value
  const config = limits.value

  if (posY > config.min && !props.open) {
    emits('close')
  } else if (posY >= config.middle) {
    cardY.value = config.middle
    if (contentWrapper.value) {
      contentWrapper.value.scrollTop = 0
    }
  } else {
    cardY.value = config.max
  }
}

const moveCard = (e) => {
  return null
  // if (e.touches[0].pageY >= 20) {
  //   cardY.value = e.touches[0].pageY;
  // } else {
  //   cardY.value = 20
  // }
  if (prevY.value) {
    diffY.value = e.touches[0].pageY - prevY.value
    prevY.value = e.touches[0].pageY
    cardY.value += diffY.value
  } else {
    prevY.value = e.touches[0].pageY
  }
}

const cardYStyle = computed(() => cardY.value + 'px')

onMounted(() => {
  const height = card.value.offsetHeight
  contentElement.value = contentWrapper.value.children[0]

  limits.value = {
    max: height * 0.05,
    middle: height * 0.4,
    min: height * 0.8,
  }

  cardY.value = window.screen.height + 30

  mobileSheetHeight.value = height

  if (route.name === 'search') {
    const resizeObserver = new ResizeObserver(function() {
      if (contentWrapper.value) {
        contentWrapper.value.scrollTop = 0
      }
    });

    resizeObserver.observe(contentElement.value);
  }
})

defineExpose({
  el: contentWrapper,
})
</script>

<style lang="scss" scoped>
@keyframes slideTop {
  0% {
    transform: translateY(100%);
  }

  100% {
    transform: translateY(v-bind(cardYStyle));
  }
}

.search-mobile {
  width: 100vw;
  //height: calc(100vh - 20px);
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 25px 25px 0 0;
  background: white;
  display: flex;
  flex-direction: column;
  animation: slideTop .5s forwards;

  &__header {
    @include flex-center-all;
    height: 25px;
    flex-shrink: 0;
    background: #fff;
    border-radius: 25px 25px 0 0;

    .line {
      background: #DADEEC;
      border-radius: 100px;
      width: 40px;
      height: 5px;
      position: absolute;
    }
  }

  &__content {
    padding-bottom: 20px;
    overflow: auto;
    flex-grow: 1;

    &.hidden {
      overflow: hidden;
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }

}
</style>