<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <NuxtLink to="/" class="header__logo">
          <img src="@/assets/img/logo.png" alt="Баня" />
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background-color: $default-color ;
  box-shadow: 0px 6px 50px rgba(166, 175, 203, 0.16);

  &__content{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 8rem;
  }
}
</style>
