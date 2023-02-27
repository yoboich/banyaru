<template>
  <div class="total">
    <div class="total__title">Залы</div>
    <div class="total__inner">
      <div class="total__item">
        <div class="total__name">Горячий сруб</div>
        <button class="btn btn-white">Редактировать</button>
        <input type="checkbox" class="switch" />
        <div class="total__icon">
          <img src="@/assets/img/icon/select.svg" alt="" />
          <img src="@/assets/img/icon/select-green.svg" alt="" />
        </div>
      </div>
      <button class="total__button btn btn-white">+ Добавить зал</button>
    </div>

    <div class="total__title">Услуги</div>
    <div class="total__inner">
      <!-- <div class="total__item">
        <div class="total__name">Горячий сруб</div>
        <button class="btn btn-white">Редактировать</button>
        <input type="checkbox" class="switch" />
      </div> -->
      <button class="total__button btn btn-white">+ Добавить услугу</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.total {
  padding-bottom: 5.9rem;
  border-bottom: 1px solid rgba(143, 153, 186, 0.2);
  &__title {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 130%;
    margin-bottom: 3.2rem;
    margin-top: 6.2rem;
  }
  &__item {
    background: #ffffff;
    box-shadow: 0px 11px 48px rgba(178, 188, 221, 0.15);
    border-radius: 23px;
    padding: 2.4rem 2rem 2.4rem 3.4rem;
    display: flex;
    align-items: center;
    gap: 3.5rem;
    margin-bottom: 3.5rem;
    & button {
      padding: 0.75rem 1.8rem;
    }
  }
  &__name {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 130%;
    flex: 1;
  }
  &__button {
    font-weight: 500;
    font-size: 2rem;
    line-height: 100%;
    color: $green-color;
    max-width: 30rem;
    width: 100%;
  }
  &__icon {
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
    & img:nth-child(1) {
      transform: rotate(180deg);
    }
  }
}
</style>
