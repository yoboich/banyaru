<template>
  <div class="contacts">
    <div class="contacts__title">Объект в интернете</div>
    <div class="contacts__subtitle">Если есть</div>
    <div class="contacts__inner">
      <div class="contacts__item">
        <div class="contacts__name">
          Номер телефона для объявления
        </div>
        <input placeholder="+7" type="text">
      </div>
      <div class="contacts__item">
        <div class="contacts__name">
          Номер владельца (cкрыт)
        </div>
        <input placeholder="+7" type="text">
      </div>
      <div class="contacts__item">
        <div class="contacts__name">
          Номер для оповещений WhatsApp (cкрыт)
        </div>
        <input placeholder="+7" type="text">
      </div>
      <div class="contacts__item">
        <div class="contacts__name">
          Электронная почта объекта (cкрыта)
        </div>
        <input placeholder="Ссылка" type="text">
      </div>
      <div class="contacts__item">
        <div class="contacts__name">
          Номер администратора (cкрыт) 
        </div>
        <input placeholder="+7" type="text">
      </div>
      <div class="contacts__item">
        <div class="contacts__name">
          Эл. почта владельца (cкрыта)
        </div>
        <input placeholder="Ссылка" type="text">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contacts {
  margin-top: 7.2rem;
  padding-bottom: 5.9rem;
  &__title {
    font-weight: 700;
    font-size: 2rem;
    line-height: 130%;
    margin-bottom: 1.1rem;
  }
  &__subtitle{
    color: $secondary-color;
    margin-bottom: 2.7rem;
  }
  &__inner{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 6rem;
    row-gap: 2rem;
  }
  &__item{
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }
}
</style>
