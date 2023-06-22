<template>
  <div ref="sheet" class="sheet" aria-hidden="true" role="dialog" @touchstart="onDragStart"
       @touchmove="onDragMove" @touchend="onDragEnd" @keyup="onKeyup">
    <div class="sheet__content" :style="{height: sheetHeight + 'vh'}" @click="onClick">
      <div class="drag-line"></div>
      <main class="sheet__content-body" :style="{'overflow-y': sheetHeight  === 100 ? 'auto' : 'hidden'}" ref="content">
        <slot/>
      </main>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'empty'
})

const sheetHeight = ref(0)
const sheet = ref()
const emits = defineEmits(['close'])
const content = ref()

const showMapBtn = useState('showMapBtn')
const step = useState('step')

const onClick = () => {
  if (sheetHeight.value === 50) {
    setSheetHeight(100)
  }
}

const setSheetHeight = (value) => {
  sheetHeight.value = Math.max(0, Math.min(100, value))

  if (sheetHeight.value >= 90) {
    sheet.value.classList.add("fullscreen")
  } else {
    sheet.value.classList.remove("fullscreen")
  }
}

const setIsSheetShown = (isShown) => {
  if (!isShown) emits('close')
  sheet.value.setAttribute("aria-hidden", String(!isShown))
}

const isFocused = element => document.activeElement === element

const onKeyup = (e) => {
  const isSheetElementFocused =
      sheet.value.contains(e.target) && isFocused(e.target)

  if (e.key === "Escape" && !isSheetElementFocused) {
    setIsSheetShown(false)
  }
}

const touchPosition = (event) =>
    event.changedTouches ? event.changedTouches[0] : event

const dragPosition = ref(0)

const onDragStart = (e) => {
  if (content.value.scrollTop > 0) return
  dragPosition.value = touchPosition(e).pageY
  sheet.value.classList.add("not-selectable")
}

const onDragMove = (e) => {
  e.stopPropagation()

  if (content.value.scrollTop === 0 && step.value !== 4) {
    showMapBtn.value = false
  } else {
    showMapBtn.value = true
  }

  const y = touchPosition(e).pageY

  if (sheetHeight.value !== 100 || (y >= dragPosition.value && content.value.scrollTop === 0)) {
    e.preventDefault()
  }

  if (content.value.scrollTop > 0) return
  if (dragPosition.value === undefined) return

  const deltaY = dragPosition.value - y
  const deltaHeight = deltaY / window.screen.availHeight * 100

  setSheetHeight(sheetHeight.value + deltaHeight)
  dragPosition.value = y
}

const onDragEnd = (e) => {
  if (content.value.scrollTop > 0) return
  sheet.value.classList.remove("not-selectable")

  if (sheetHeight.value < 25) {
    setIsSheetShown(false)
    showMapBtn.value = false
  } else if (sheetHeight.value > 75) {
    setSheetHeight(100)
  } else {
    setSheetHeight(50)
    showMapBtn.value = false
  }
}

const close = (vh = 0) => {
  setIsSheetShown(false)
  setSheetHeight(vh)
  console.log('METHOD CLOSED')
}

const open = (vh = 50) => {
  setIsSheetShown(true)
  setSheetHeight(vh)
  console.log('OPENED')
}

const closeSheet = useState('closeSheet', () => close)
const openSheet = useState('openSheet', () => open)

onMounted(() => {
  // if (!sheet.value) {
  //   sheet.value = document.querySelector('.sheet')
  // }

  setTimeout(() => {
    setSheetHeight(0)
    setIsSheetShown(false)
  }, 100)
})
</script>

<style lang="scss">
iframe {
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
}

.sheet {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  visibility: visible;
  transition: opacity 0.5s, visibility 0.5s;

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.5;
  }

  &__content {
    background: #fff;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 24px rgba(166, 175, 203, 0.32);
    border-radius: 25px 25px 0 0;
    overflow: hidden;

    --default-transitions: transform 0s, border-radius 0.5s;
    transition: var(--default-transitions);
    transform: translateY(0);
    -webkit-overflow-scrolling: touch;

    width: 100vw;
    max-height: calc(100vh - 40px);
    height: 30vh;

    box-sizing: border-box;

    padding-top: 20px;
    position: relative;

    &.fullscreen {
      border-radius: 0;
      height: calc(100vh - 40px) !important;
      margin-top: 20px;
    }

    & .drag-line {
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 5px;
      width: 40px;
      background: #DADEEC;
      border-radius: 100px;
    }
  }
}

.sheet[aria-hidden="true"] {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.sheet[aria-hidden="true"] .sheet__contents {
  transform: translateY(100%);
}

.sheet__content-body {
  flex-grow: 1;
  height: 100%;

  display: flex;
  flex-direction: column;

  overflow-y: hidden;
  overflow-x: hidden;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }
}

</style>