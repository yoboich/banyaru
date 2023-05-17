<template>
  <div class="top">
    <div class="top__logo">
      <img src="@/assets/img/logomobile.png" alt="">
    </div>
    <div class="top__text">
      <div class="top__title">
        Баня.ру, Поиск бань, услуги и товары
      </div>
      <div class="top__subtitle">
        Открыть в приложении
      </div>
    </div>
    <button class="btn btn-green">Установить</button>
  </div>
</template>

<style lang="scss" scoped>
.top {
  display: flex;
  align-items: center;
  padding: .8rem 2rem .6rem 2.4rem;
  background: #ffffff;
  box-shadow: 0px -6px 22px rgba(166, 175, 203, 0.28);
  border-radius: 0  0 23px 23px;
  & .btn{
    margin-left: .6rem;
    padding: .75rem 2.2rem;
    text-transform: uppercase;
  }
  &__logo{
    max-width: 4.2rem;
    width: 100%;
    margin-right: 1.6rem;
  }
  &__text{
    display: flex;
    flex-direction: column;
  }
  &__title{}
  &__subtitle{
    font-size: 1.1rem;
    color:$secondary-color
  }
}
</style>
