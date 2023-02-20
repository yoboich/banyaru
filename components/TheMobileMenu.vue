<template>
  <div class="menu">
    <div class="menu__inner">
      <NuxtLink to="/" class="menu__logo">
        <img src="@/assets/img/logomobile2.png" alt="" />
      </NuxtLink>
      <div class="menu__item">
        <img src="@/assets/img/icon/search.svg" alt="" />
        <div class="menu__name">Поиск</div>
      </div>
      <div class="menu__item">
        <img src="@/assets/img/icon/favorite_border.png" alt="" />
        <div class="menu__name">Избранное</div>
      </div>
      <div class="menu__item">
        <img src="@/assets/img/icon/messages.png" alt="" />
        <div class="menu__name">Чаты</div>
      </div>
      <div class="menu__item">
        <img src="@/assets/img/icon/avatar.svg" alt="" />
        <div class="menu__name">Кабинет</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  z-index: 9999;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 9rem;
  background: #ffffff;
  box-shadow: 0px 6px 50px rgba(166, 175, 203, 0.28);
  border-radius: 2.3rem 2.3rem 0 0;
  &__inner {
    padding: 0 1.5rem;
    height: 9rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.4rem;
  }
  &__logo{
    display: flex;
    justify-content: center;
    cursor: pointer;
    & img{
      max-width: 6.2rem;
    }
  }
  &__item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    gap: .8rem;
    cursor: pointer;
    & img{
      width: 100%;
      object-fit: fill;
      max-width: 2.3rem;
    }
  }
  &__name {
    font-size: 1.1rem;
    line-height: 1.4rem;
    color:$secondary-color
  }
}
</style>
