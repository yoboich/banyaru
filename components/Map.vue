<template>
  <YandexMap :settings="settings" :coordinates="[55.751244, 37.618423]" :controls="[]" :options="options"
             @click="onClick"
             @created="initHandler"
  />
</template>

<script setup>
import {YandexMap, loadYmap} from 'vue-yandex-maps'

const config = useRuntimeConfig()

const settings = ref({
  apiKey: config.public.YANDEX_API_KEY,
  lang: 'ru_RU',
  coordorder: 'latlong',
  debug: true,
  version: '2.1',
})

const options = {
  suppressMapOpenBlock: true
}

const mapZoomIn = useState('mapZoomIn', () => null)
const mapZoomOut = useState('mapZoomOut', () => null)
const addToMap = useState('addToMap', () => null)

const initHandler = (map) => {
  window.map = map
  mapZoomIn.value = () => {
    map.setZoom(map.getZoom() + 1, {checkZoomRange: true})
  }

  mapZoomOut.value = () => {
    map.setZoom(map.getZoom() - 1, {checkZoomRange: true})
  }

  addToMap.value = (item) => {
    map.getObjects.add(item)
  }
}

const onClick = () => {
  hideSearchPanel()
}

onMounted(async () => {
  await loadYmap()
})
</script>

<style lang="scss" scoped>
.yandex-container {
  width: 100%;
  height: 100%;
}
</style>
