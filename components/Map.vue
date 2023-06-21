<template>
    <YandexMap ref="map" :settings="settings" :coordinates="[55.751244, 37.618423]" :controls="[]" :options="options" @click="onClick" ></YandexMap>
</template>

<script setup>
import {YandexMap} from 'vue-yandex-maps'

const config = useRuntimeConfig()

const settings = ref({
  apiKey: config.public.YANDEX_API_KEY, // Индивидуальный ключ API
  lang: 'ru_RU', // Используемый язык
  coordorder: 'latlong', // Порядок задания географических координат
  debug: false, // Режим отладки
  version: '2.1', // Версия Я.Карт
})

const options = {
  suppressMapOpenBlock: true
}

const onClick = () => {
  hideSearchPanel()
}
</script>

<style lang="scss" scoped>
.yandex-container {
  width: 100%;
  height: 100%;
}
</style>
