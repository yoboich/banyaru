<template>
  <section class="type">
    <div class="type__inner">
      <div class="type__item">
        <div class="type__title">Тип объявления</div>
        <div class="type__checkbox">
          <div class="type__checkbox-item">
            <label for="">Сдать</label>
            <input name="type" type="radio" />
          </div>
          <div class="type__checkbox-item">
            <label for="">Услуги</label>
            <input name="type" type="radio" />
          </div>
          <div class="type__checkbox-item">
            <label for="">Продать</label>
            <input name="type" type="radio" />
          </div>
        </div>
      </div>

      <div class="type__item">
        <div class="type__title">Сдать</div>
        <div class="type__checkbox">
          <div class="type__checkbox-item">
            <label for="">Баня | сауна</label>
            <input name="snyat" type="radio" />
          </div>
          <div class="type__checkbox-item">
            <label for="">Номер</label>
            <input name="snyat" type="radio" />
          </div>
        </div>
      </div>

      <div class="type__item">
        <div class="type__title">Расчет</div>
        <div class="type__checkbox">
          <div class="type__checkbox-item">
            <label for="">Час</label>
            <input name="time" type="radio" />
          </div>
          <div class="type__checkbox-item">
            <label for="">Сутки</label>
            <input name="time" type="radio" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.type {
  &__inner {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12rem;
    padding-bottom: 5.9rem;
    border-bottom: 1px solid rgba(143,153,186,0.2);
  }
  &__item {
    display: flex;
    flex-direction: column;
    gap: 5.9rem;
  }
  &__title {
    font-weight: 700;
    font-size: 2rem;
    line-height: 130%;
  }
  &__checkbox {
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
  }
  &__checkbox-item {
    display: flex;
    justify-content: space-between;
    & label {
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 1.8rem;
    }
  }
}
</style>
