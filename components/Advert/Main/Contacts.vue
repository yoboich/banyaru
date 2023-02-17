<template>
  <div class="contacts">
    <div class="contacts__title">Контакты</div>
    <div class="contacts__subtitle">Если есть</div>
    <div class="contacts__inner">
      <div class="contacts__item">
        <div class="contacts__name">Номер телефона объекта</div>
        <input class="input" placeholder="+7" type="text" />
      </div>
      <div class="contacts__item">
        <div class="contacts__name">Номер владельца | управляющего</div>
        <input class="input" placeholder="+7" type="text" />
      </div>
      <div class="contacts__item">
        <div class="contacts__name">Номер для оповещений WhatsApp</div>
        <input class="input" placeholder="+7" type="text" />
      </div>
      <div class="contacts__item">
        <div class="contacts__name">Эл. почта владельца | управляющего</div>
        <input class="input" placeholder="Ссылка" type="text" />
      </div>
      <div class="contacts__item">
        <div class="contacts__name">Номер администратора</div>
        <input class="input" placeholder="+7" type="text" />
      </div>
      <div class="contacts__item">
        <div class="contacts__name">Юридическое название организации</div>
        <input class="input" placeholder="Название" type="text" />
      </div>
      <div class="contacts__item">
        <div class="contacts__name">Электронная почта объекта</div>
        <input class="input" placeholder="Ссылка" type="text" />
      </div>
      <div class="contacts__item">
        <div class="contacts__name">ИНН</div>
        <input class="input" placeholder="инн" type="text" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contacts {
  margin-top: 7.2rem;
  padding-bottom: 5.9rem;
  border-bottom: 1px solid rgba(143, 153, 186, 0.2);
  &__title {
    font-weight: 700;
    font-size: 2rem;
    line-height: 130%;
    margin-bottom: 1.1rem;
  }
  &__subtitle {
    color: $secondary-color;
    margin-bottom: 2.7rem;
  }
  &__inner {
    max-width: 74rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 6rem;
    row-gap: 2rem;
  }
  &__item {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }
}
</style>
