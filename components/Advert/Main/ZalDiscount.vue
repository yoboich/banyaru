<template>
  <div class="discount">
    <div class="discount__inner">
      <div class="discount__item">
        <div class="discount__title">Скидки</div>
        <div class="discount__input">
          <input placeholder="%" type="text" />
          <input placeholder="Описание скидки" type="text" />
        </div>
        <div class="discount__input">
          <input placeholder="%" type="text" />
          <input placeholder="Описание скидки" type="text" />
        </div>
        <div class="discount__input">
          <input placeholder="%" type="text" />
          <input placeholder="Описание скидки" type="text" />
        </div>
      </div>
      <div class="discount__item">
        <div class="discount__title">Вместимость</div>
        <div class="discount__input-quantity">
          <span>Количество гостей, входящих в цену.</span>
          <input placeholder="1" type="text" />
        </div>
        <div class="discount__input-quantity">
          <span>Максимальное допустимое количество гостей для зала.</span>
          <input placeholder="1" type="text" />
        </div>
        <div class="discount__input-quantity">
          <span>Количество комнат отдыха с кроватью.</span>
          <input placeholder="1" type="text" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.discount {
  margin-top: 7.2rem;
  padding-bottom: 5.9rem;
  border-bottom: 1px solid rgba(143, 153, 186, 0.2);
  &__title {
    font-weight: 700;
    font-size: 2rem;
    line-height: 130%;
    margin-bottom: 2rem;
  }
  &__inner {
    display: flex;
    justify-content: flex-start;
    gap: 12rem;
  }
  &__item {
    flex: 1 1 34rem;
    & button {
      width: 100%;
      box-shadow: 0px 6px 21px rgba(166, 175, 205, 0.22);
      border-radius: 10rem;
      color: $green-color;
      font-weight: 500;
    }
  }
  &__input {
    display: flex;
    gap: 2rem;
    align-items:center;
    margin-bottom: 1rem;
  }
  &__input-quantity {
    display: flex;
    gap: 5rem;
    align-items:center;
    margin-bottom: 3rem;
  }
}
</style>
