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
          <label for="">Утро будни c</label>
          <input class="input" type="text" name="" id="">
          <input class="input" type="text" name="" id="">
        </div>
        <div class="time__input">
          <label for="">Утро выходные c</label>
          <input class="input" type="text" name="" id="">
          <input class="input" type="text" name="" id="">
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
    font-size: 2rem;
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
}
</style>
