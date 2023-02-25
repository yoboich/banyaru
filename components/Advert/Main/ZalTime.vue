<template>
  <div class="time">
    <div class="time__title">День и время</div>
    <div class="time__inner">
      <div class="time__item">
        <div class="time__name">Выбор будних дней</div>
        <div class="time__radio">
          <input type="radio" />
          <label for="">пн-ср</label>
        </div>
        <div class="time__radio">
          <input type="radio" />
          <label for="">пн-ср</label>
        </div>
        <div class="time__radio">
          <input type="radio" />
          <label for="">пн-ср</label>
        </div>
      </div>

      <div class="time__item">
        <div class="time__name">Определение времени суток</div>
        <div class="time__input">
          <label class="mr" for="">Утро будни</label>
          с
          <input class="input" type="text" name="" id="" />
          до
          <input class="input" type="text" name="" id="" />
        </div>
        <div class="time__input">
          <label for="">Утро выходные</label>
          с
          <input class="input" type="text" name="" id="" />
          до
          <input class="input" type="text" name="" id="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.time {
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
    display: flex;
    column-gap: 10rem;
    row-gap: 1.3rem;
  }
  &__item {
    display: flex;
    flex-direction: column;
  }
  &__name {
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 2rem;
    margin-bottom: 2.3rem;
  }
  &__radio {
    display: flex;
    align-items: center;
    gap: 1.3rem;
    margin-bottom: 1.6rem;
  }
  &__input {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    gap: 1rem;
    & .mr {
      margin-right: 2.7rem;
    }
    & input {
      max-width: 9rem;
      display: block;
    }
  }
}
</style>
