<template>
    <div class="search-mobile" :style="{transform: `translateY(${cardY + 'px'})`}" ref="card" @click="isMiddle ? openCard() : null">
      <div class="search-mobile__header" @touchmove.prevent="moveCard($event)" @touchend.prevent="moveEnd($event)">
        <div class="line"></div>
      </div>
      <div class="search-mobile__content" :class="{hidden: isMiddle}" ref="contentWrapper">
        <slot/>
      </div>
    </div>
</template>

<script setup>
const cardY = ref()
const card = ref()
const contentWrapper = ref()
const contentElement = ref()

const emits = defineEmits(['close'])
const limits = ref({})

const isMiddle = computed(() => cardY.value === limits.value.middle)

const openCard = () => {
  cardY.value = limits.value.max
}

const moveEnd = (e) => {
  const posY = e.changedTouches[0].clientY
  const config = limits.value

  if (posY > config.min) {
    emits('close')
  } else if (posY >= config.middle) {
    cardY.value = config.middle
    contentWrapper.value.scrollTop = 0
  } else {
    cardY.value = config.max
  }
}

const moveCard = (e) => {
  if (e.touches[0].clientY >= 20) {
    cardY.value = e.touches[0].clientY;
  } else {
    cardY.value = 20
  }
}

const cardYStyle = computed(() => cardY.value + 'px')

onMounted(() => {
  const height = card.value.offsetHeight
  contentElement.value = contentWrapper.value.children[0]

  limits.value = {
    max: height * 0.05,
    middle: height * 0.4,
    min: height * 0.8
  }

  cardY.value = limits.value.max

  const resizeObserver = new ResizeObserver(function() {
    contentWrapper.value.scrollTop = 0
  });

  resizeObserver.observe(contentElement.value);
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
  height: calc(100vh - 20px);
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