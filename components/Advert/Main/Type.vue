<template>
  <section class="type">
    <div class="type__title">Тип объявления</div>
    <div class="type__inner">
      <div class="type__item">
        <div class="type__name">Тип сдлелки</div>
        <div class="type__tab">
          <span class="type__tab-item active">Сдать</span>
          <span class="type__tab-item">Услуги</span>
          <span class="type__tab-item">Продать</span>
        </div>
      </div>
      <div class="type__item">
        <div class="type__name">Сдать</div>
        <div class="type__tab">
          <span class="type__tab-item active">Баня</span>
          <span class="type__tab-item">Номер</span>
        </div>
      </div>
      <div class="type__item">
        <div class="type__name">Расчет</div>
        <div class="type__tab">
          <span class="type__tab-item">Час</span>
          <span class="type__tab-item">Сутки</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.type {
  padding: 5.5rem;
  &__title {
    font-weight: 700;
    font-size: 2rem;
    line-height: 130%;
    margin-bottom: 4.6rem;
  }
  &__inner {
    display: flex;
    flex-direction: column;
    gap: 2.6rem;
  }
  &__item {
    display: flex;
    flex-direction: column;
    gap: 2.2rem;
  }
  &__name {
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 2rem;
  }
  &__tab {
    display: flex;
    justify-content: flex-start;
    background: #ffffff;
    box-shadow: inset 0px 0px 8px rgba(136, 152, 206, 0.46);
    border-radius: 100px;
    padding: 0.4rem;
    align-self: self-start;
  }
  &__tab-item {
    padding: 1.1rem 5.5rem;
    &.active {
      background: $default-color;
      box-shadow: 0px 6px 21px rgba(166, 175, 205, 0.22);
      border-radius: 100px;
      font-weight: 700;
    }
  }
}
</style>
