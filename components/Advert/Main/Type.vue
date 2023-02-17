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
      <div class="arrow">
        <IconArrow />
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
      <div class="arrow">
        <IconArrow />
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
.arrow {
  max-width: 4.8rem;
  width: 100%;
  margin-top: 125%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: -45%;
    left: 45%;
    width: .1rem;
    height: 3.6rem;
    background-color: rgba(143,153,186, 0.2) ;
  }
  &::before {
    content: "";
    position: absolute;
    bottom: -10%;
    left: 45%;
    width: .1rem;
    height: 3.6rem;
    background-color: rgba(143,153,186, 0.2) ;
  }
}
.type {
  &__inner {
    display: grid;
    grid-template-columns: 3fr 1fr 3fr 1fr 3fr;
    gap: 5rem;
    padding-bottom: 5.9rem;
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
