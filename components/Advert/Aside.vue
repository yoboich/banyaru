<script lang="ts" setup>
const data = [
  {
    title: "Баня",
    items: [
      {
        name: "Тип объявления",
      },
      {
        name: "Расположение",
      },
      {
        name: "Тип здания",
      },
      {
        name: "Название",
      },
      {
        name: "Режим работы",
      },
      {
        name: "Удобства",
      },
      {
        name: "Парковка",
      },
      {
        name: "Фото бани/лого",
      },
      {
        name: "Объект в интернете",
      },
      {
        name: "Контакты",
      },
      {
        name: "Залы",
      },
      {
        name: "Услуги",
      },
      {
        name: "Оплата",
      },
    ],
  },
  {
    title: "Зал",
    items: [
    {
        name: "Тип объявления",
      },
      {
        name: "Расположение",
      },
      {
        name: "Тип здания",
      },
      {
        name: "Название",
      },
      {
        name: "Режим работы",
      },
      {
        name: "Удобства",
      },
      {
        name: "Парковка",
      },
      {
        name: "Фото бани/лого",
      },
      {
        name: "Объект в интернете",
      },
      {
        name: "Контакты",
      },
      {
        name: "Залы",
      },
      {
        name: "Услуги",
      },
      {
        name: "Оплата",
      },
    ],
  },
];
</script>

<template>
  <div class="advert-aside">
    <div v-for="item in data" class="advert-aside__inner">
      <div class="advert-aside__title">{{ item.title }}</div>
      <div v-for="name in item.items" class="advert-aside__item">
        <IconMark class="advert-aside__mark"/>
        <div class="advert-aside__name">{{ name.name }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.advert-aside {
  padding: 3.6rem 2.8rem;
  background: #ffffff;
  box-shadow: 0px 11px 48px rgba(123, 129, 148, 0.15);
  border-radius: 23px;
  max-width: 28rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6.7rem;
  align-self: flex-start;

  &__inner {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  &__item {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  &__title {
    font-weight: 700;
    font-size: 2rem;
    line-height: 130%;
  }
  &__name {
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 2rem;
    color: $secondary-color;
    &.active{
      color:$mainFontColor;
    }
  }
}
</style>
