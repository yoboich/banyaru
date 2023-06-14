<template>
    <YandexMap :settings="settings" :coordinates="[55.751244, 37.618423]" :controls="[]" :options="options" ></YandexMap>
</template>

<script setup>
import {YandexMap} from 'vue-yandex-maps'

const settings = {
  apiKey: '45e08e04-037c-40ef-b64d-c6d7b0d3f929', // Индивидуальный ключ API
  lang: 'ru_RU', // Используемый язык
  coordorder: 'latlong', // Порядок задания географических координат
  debug: false, // Режим отладки
  version: '2.1', // Версия Я.Карт
}

const options = {
  suppressMapOpenBlock: true
}
</script>

<style lang="scss" scoped>
.yandex-container {
  width: 100%;
  height: 100%;
}
</style>
