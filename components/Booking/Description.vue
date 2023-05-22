<template>
  <!-- DESCRIPTION -->
  <div class="p-x booking-page__description">
    <h1 class="booking-page__title booking-page__description-title">
      Описание
    </h1>
    <div class="booking-page__description-items">
      <div
        class="booking-page__description-item"
        v-for="item of descriptionItems"
        :key="item.label"
      >
        <div class="booking-page__description-label">
          <img :src="getLocalUrl(`img/icon/${item.icon}.svg`)" alt="" />
          <span>{{ item.label }}</span>
        </div>
        <div class="booking-page__description-text">
          {{ item.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const descriptionItems = ref([
  {
    icon: "steam",
    label: "Вид парной",
    text: "Русская баня на дровах / Банный Чан",
  },
  {
    icon: "aqua-zone",
    label: "Аквазона",
    text: "Бассейн / Купель ледяная / Обливное устройство",
  },
  {
    icon: "sizes",
    label: "Размер бассейна",
    text: "до 15%",
  },
  {
    icon: "users",
    label: "Вместимость",
    text: "9",
  },
  {
    icon: "room",
    label: "Комнаты отдыха",
    text: "Русская баня, Сауна / Финская",
  },
  {
    icon: "shop",
    label: "Магазин",
    text: "Банные пренадлежности",
  },
  {
    icon: "services",
    label: "Услуги",
    text: "SPA-терапия / Ароматерапия / Банщик / Веники / Массаж / Парения / Банные принадлежности / Обливное ведро / Чайная церемония / Ароматы для парной / Ледяная купель",
  },
  {
    icon: "cutlery",
    label: "Кухня",
    text: "Бар / Ресторан",
  },
  {
    icon: "sport",
    label: "Спорт",
    text: "Бильярд русский / Бильярд американский / Аэро-хоккей / Шахматы / Шашки",
  },
  {
    icon: "comfort",
    label: "Удобства",
    text: "Беседка летняя / Беседка теплая / Отель / Гостевые номера / Парковка / Выход к водоему / Можно с детьми",
  },
  {
    icon: "service",
    label: "Сервис",
    text: "9",
  },
  {
    icon: "exclusive",
    label: "Эксклюзив",
    text: "Русская баня, Сауна / Финская",
  },
]);
</script>

<style lang="scss" scoped></style>
