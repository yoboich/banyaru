<template>
  <div class="type">
    <div class="type__title">Тип заведения</div>
    <div class="type__inner">
      <div class="type__item">
        <label class="type__name">Элитные</label>
        <input type="checkbox" />
      </div>
      <div class="type__item">
        <label class="type__name">Бани</label>
        <input type="checkbox" />
      </div>
      <div class="type__item">
        <label class="type__name">Сауна</label>
        <input type="checkbox" />
      </div>
      <div class="type__item">
        <label class="type__name">Общественная баня</label>
        <input type="checkbox" />
      </div>
      <div class="type__item">
        <label class="type__name">Баня на воде</label>
        <input type="checkbox" />
      </div>
      <div class="type__item">
        <label class="type__name">Семейная баня</label>
        <input type="checkbox" />
      </div>
      <div class="type__item">
        <label class="type__name">Банный комплекс</label>
        <input type="checkbox" />
      </div>
      <div class="type__item">
        <label class="type__name">Гостиничный комплекс</label>
        <input type="checkbox" />
      </div>
      <div class="type__item">
        <label class="type__name">Дом с баней</label>
        <input type="checkbox" />
      </div>
      <div class="type__item">
        <label class="type__name">Баня на колёсах</label>
        <input type="checkbox" />
      </div>
      <div class="type__item">
        <label class="type__name">Бассейн</label>
        <input type="checkbox" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.type {
  margin-top: 7.2rem;
  padding-bottom: 5.9rem;
  border-bottom: 1px solid rgba(143, 153, 186, 0.2);
  &__title {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 130%;
    margin-bottom: 4.1rem;
  }
  &__inner {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 19.6rem;
    row-gap: 1.3rem;
  }
  &__item {
    display: flex;
    justify-content: space-between;
  }
  &__name {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.8rem;
  }
}
</style>
