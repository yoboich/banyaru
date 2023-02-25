<template>
  <div class="zal-book">
    <div class="zal-book__inner">
      <div class="zal-book__item">
        <div class="zal-book__title">Мин. время бронирования</div>
        <div class="checkbox-inner">
          <div class="checkbox-item">
            <span>30 мин</span>
            <input type="radio" />
          </div>
          <div class="checkbox-item">
            <span>1ч.</span>
            <input type="radio" />
          </div>
          <div class="checkbox-item">
            <span>1.5ч</span>
            <input type="radio" />
          </div>
          <div class="checkbox-item">
            <span>2ч</span>
            <input type="radio" />
          </div>
          <div class="checkbox-item">
            <span>2.5ч</span>
            <input type="radio" />
          </div>
          <div class="checkbox-item">
            <span>3ч</span>
            <input type="radio" />
          </div>
          <div class="checkbox-item checkbox-item_icons">
            <div class="icon-plus"></div>
            <div class="icon-minus"></div>
          </div>
        </div>
      </div>
      <div class="zal-book__item">
        <div class="zal-book__title">Обязательный перерыв</div>
        <div class="zal-book__subtitle">
          Время на обязательную уборку или отдых персонала после каждого
          бронирования.
        </div>
        <div class="checkbox-inner">
          <div class="checkbox-item">
            <span>30 мин</span>
            <input type="radio" />
          </div>
          <div class="checkbox-item">
            <span>1ч.</span>
            <input type="radio" />
          </div>
          <div class="checkbox-item">
            <span>1.5ч</span>
            <input type="radio" />
          </div>
          <div class="checkbox-item">
            <span>2ч</span>
            <input type="radio" />
          </div>
          <div class="checkbox-item">
            <span>2.5ч</span>
            <input type="radio" />
          </div>
          <div class="checkbox-item">
            <span>3ч</span>
            <input type="radio" />
          </div>
        </div>
      </div>
    </div>
    <div class="zal-book__inner">
      <div class="zal-book__item">
        <div class="zal-book__title">Минимальное время отмены бронирования</div>
        <div class="checkbox-inner">
          <div class="checkbox-item">
            <span>нет</span>
            <input type="radio" />
          </div>
          <div class="checkbox-item">
            <span>6ч.</span>
            <input type="radio" />
          </div>
          <div class="checkbox-item">
            <span>12ч.</span>
            <input type="radio" />
          </div>
          <div class="checkbox-item">
            <span>24ч.</span>
            <input type="radio" />
          </div>
          <div class="checkbox-item">
            <span>48ч.</span>
            <input type="radio" />
          </div>
          <div class="checkbox-item checkbox-item_icons">
            <div class="icon-plus"></div>
            <div class="icon-minus"></div>
          </div>
        </div>
      </div>
      <div class="zal-book__item">
        <div class="zal-book__title">Опоздание</div>
        <div class="zal-book__subtitle">
          <p>
            Просьба не задерживаться на сеанс. Время вашей задержки входит в
            стоимость бронирования!
          </p>
          <div><input type="checkbox" /></div>
        </div>
      </div>
    </div>
    <div class="zal-book__button">
      <button class="btn btn-green">Далее</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.icon-minus {
  position: relative;
  background: #ffffff;
  box-shadow: 1px 4px 12px rgba(166, 175, 205, 0.36);
  border-radius: 100px;
  padding: 1.7rem;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 32%;
    width: 1.3rem;
    height: 0.3rem;
    border-radius: 3rem;
    background-color: $green-color;
  }
}
.icon-plus {
  position: relative;
  background: #ffffff;
  box-shadow: 1px 4px 12px rgba(166, 175, 205, 0.36);
  border-radius: 100px;
  padding: 1.7rem;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 32%;
    width: 1.3rem;
    height: 0.3rem;
    border-radius: 3rem;
    background-color: $green-color;
  }
  &::after {
    content: "";
    position: absolute;
    top: 35%;
    left: 47%;
    width: 0.3rem;
    height: 1.3rem;
    border-radius: 3rem;
    background-color: $green-color;
  }
}
.zal-book {
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  margin-top: 7.2rem;
  padding-bottom: 10rem;
  border-bottom: 1px solid rgba(143, 153, 186, 0.2);
  &__title {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 130%;
    margin-bottom: 4rem;
    max-width: 42rem;
  }
  &__subtitle {
    color: $secondary-color;
    margin-top: -2.5rem;
    margin-bottom: 3rem;
    display: flex;
    & p {
      max-width: 31rem;
    }
  }
  &__inner {
    display: grid;
    grid-template-columns: 60% 40%;
    column-gap: 1rem;
    row-gap: 1.3rem;
  }
  &__item {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  &__button {
    margin-top: 9rem;
    margin-left: auto;
    & button {
      font-size: 2rem;
      padding: 1.5rem 3.8rem;
    }
  }
  .checkbox-inner {
    display: flex;
    gap: 3rem;
  }
  .checkbox-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    &_icons {
      flex-direction: row;
      align-self: flex-end;
    }
  }
}
</style>
