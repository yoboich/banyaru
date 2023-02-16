<template>
  <div class="worktime">
    <div class="worktime__title">Название</div>
    <div class="worktime__inner">
      <div class="worktime__item">
        <div class="worktime__radio">
          <label for="">Круглосуточно</label>
          <input type="radio" />
        </div>
      </div>
      <div class="worktime__item">
        <div class="worktime__radio">
          <label for="">Ежедневно</label>
          <input type="radio" />
        </div>
        <div class="worktime__input">
          <input placeholder="c 9:00" type="text" />
          <input placeholder="до 18:00" type="text" />
        </div>
      </div>
      <div class="worktime__item">
        <div class="worktime__radio">
          <label for="">Свой график</label>
          <input type="radio" />
        </div>
        <div class="worktime__input-inner">
          <div class="worktime__input">
            <span>Пн</span>
            <input placeholder="c 9:00" type="text" />
            <input placeholder="до 18:00" type="text" />
          </div>
          <div class="worktime__input">
            <span>Вт</span>
            <input placeholder="c 9:00" type="text" />
            <input placeholder="до 18:00" type="text" />
          </div>
          <div class="worktime__input">
            <span>Ср</span>
            <input placeholder="c 9:00" type="text" />
            <input placeholder="до 18:00" type="text" />
          </div>
          <div class="worktime__input">
            <span>Чт</span>
            <input placeholder="c 9:00" type="text" />
            <input placeholder="до 18:00" type="text" />
          </div>
          <div class="worktime__input">
            <span>Пт</span>
            <input placeholder="c 9:00" type="text" />
            <input placeholder="до 18:00" type="text" />
          </div>
          <div class="worktime__input">
            <span>Сб</span>
            <input placeholder="c 9:00" type="text" />
            <input placeholder="до 18:00" type="text" />
          </div>
          <div class="worktime__input">
            <span>Вс</span>
            <input placeholder="c 9:00" type="text" />
            <input placeholder="до 18:00" type="text" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
input {
  max-width: 10rem;
}
.worktime {
  margin-top: 7.2rem;
  padding-bottom: 5.9rem;
  border-bottom: 1px solid rgba(143, 153, 186, 0.2);
  &__title {
    font-weight: 700;
    font-size: 2rem;
    line-height: 130%;
    margin-bottom: 0.6rem;
  }
  &__inner {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 34.5rem;
  }
  &__item {
  }
  &__radio {
    display: flex;
    justify-content: space-between;
    gap: 4.3rem;
    width: 100%;
    & label{
      margin-bottom: 2rem;
    }
  }
  &__input-inner {
    display: flex;
    flex-direction: column;
    align-items:center;
    gap: 1rem;
  }
  &__input {
    display: flex;
    gap: 2rem;
    & span{
      margin-right: 7rem;
    }
  }
}
</style>
