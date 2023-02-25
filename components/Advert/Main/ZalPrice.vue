<template>
  <div class="price">
    <div class="price__title">Цена</div>
    <div class="price__inner">
      <div class="price__item">
        <div class="price__light">
          <div class="price__radio">
            <div>
              <input type="radio" />
            </div>
            <div class="price__desc">
              <label for="">Простая - Постоянная</label>
              <div class="price__desc-text">
                <span>Цена за 1 час</span>
                <span
                  >не меняется в зависимости от дня недели, времени суток и
                  праздников</span
                >
              </div>
            </div>
          </div>
          <div class="price__input">
            <input placeholder="1000 Р" class="input" type="text" />
            <label for="">1ч.</label>
          </div>
        </div>
        <div class="price__light">
          <div class="price__radio">
            <div>
              <input type="radio" />
            </div>
            <div class="price__desc">
              <label for="">Простая - Количественная</label>
              <div class="price__desc-text">
                <span>Цена за 1 час</span>
                <span
                  >не меняется в зависимости от дня недели, времени суток и
                  праздников, но меняется от количества гостей</span
                >
              </div>
            </div>
          </div>
          <div class="price__input-inner">
            <div class="price__input">
              <input placeholder="1000 Р" class="input" type="text" />
              <label for="">1ч.</label>
            </div>
            <div class="price__input">
              <input placeholder="2" class="input" type="text" />
              <label for="">чел.</label>
            </div>
          </div>
          <div class="price__input-inner">
            <div class="price__input">
              <input placeholder="1000 Р" class="input" type="text" />
              <label for="">1ч.</label>
            </div>
            <div class="price__input">
              <input placeholder="2" class="input" type="text" />
              <label for="">чел.</label>
            </div>
          </div>
          <div class="price__input-inner">
            <div class="price__input">
              <input placeholder="1000 Р" class="input" type="text" />
              <label for="">1ч.</label>
            </div>
            <div class="price__input">
              <input placeholder="2" class="input" type="text" />
              <label for="">чел.</label>
            </div>
          </div>
        </div>
      </div>
      <div class="price__item">
        <div class="price__radio">
          <div>
            <input type="radio" />
          </div>
          <div class="price__desc">
            <label for="">Средняя</label>
            <div class="price__desc-text">
              <span>Цена за 1 час</span>
              <span>
                изменяется в зависимости от будней, выходных и праздников</span
              >
            </div>
          </div>
        </div>
        <div class="price__input">
          <input placeholder="1000 Р" class="input" type="text" />
          <label for="">24ч.будни </label>
        </div>
        <div class="price__input">
          <input placeholder="1000 Р" class="input" type="text" />
          <label for="">24ч. выходные</label>
        </div>
        <div class="price__input">
          <input placeholder="1000 Р" class="input" type="text" />
          <label for="">24ч. праздники</label>
        </div>
      </div>
      <div class="price__item">
        <div class="price__item">
          <div class="price__radio">
            <div>
              <input type="radio" />
            </div>
            <div class="price__desc">
              <label for="">Сложная</label>
              <div class="price__desc-text">
                <span>Цена за 1 час</span>
                <span>
                  Цена изменяется в зависимости от дней недели, времени суток и
                  праздников</span
                >
              </div>
            </div>
          </div>
          <div class="price__input">
            <input placeholder="1000 Р" class="input" type="text" />
            <label for=""> 1ч. будни утро</label>
          </div>
          <div class="price__input">
            <input placeholder="1000 Р" class="input" type="text" />
            <label for="">1ч. будни вечер</label>
          </div>
          <div class="price__input">
            <input placeholder="1000 Р" class="input" type="text" />
            <label for="">1ч. выходные утро</label>
          </div>
          <div class="price__input">
            <input placeholder="1000 Р" class="input" type="text" />
            <label for="">1ч. выходные вечер</label>
          </div>
          <div class="price__input">
            <input placeholder="1000 Р" class="input" type="text" />
            <label for="">1ч. праздники</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
input {
  max-width: 13rem;
  width: 100%;
}

.price {
  margin-top: 7.2rem;
  padding-bottom: 5.9rem;
  border-bottom: 1px solid rgba(143, 153, 186, 0.2);
  &__title {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 130%;
    margin-bottom: 5rem;
  }
  &__inner {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 5rem;
  }
  &__item {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }
  &__desc {
    display: flex;
    flex-direction: column;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2rem;
    margin-bottom: 1.6rem;
    & label {
      margin-bottom: 0.9rem;
    }
  }
  &__desc-text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: $secondary-color;
  }
  &__input {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  &__input-inner {
    display: flex;
    align-items: center;
    gap: 3rem;
    margin-bottom: 0.5rem;
  }
  &__radio {
    display: flex;
    gap: 1.4rem;
    align-items: flex-start;
    margin-bottom: 1rem;
    & label {
      font-weight: 700;
      font-size: 1.6rem;
      line-height: 2rem;
    }
  }
}
</style>
