<script lang="ts" setup>
let isActive = ref(false);

let activeMenu = ref(0);
</script>

<template>
  <header class="header">
    <div class="container">
       <div class="headers">
         <div class="header-wrapper">
           <nuxt-link to="/main-order">
             <img src="../../assets/img/chat/chat-right.png" alt="chat-right">
           </nuxt-link>
           <img src="../../assets/img/chat/girl-chat.png" alt="girl-chat" class="order-image">
           <div class="headers-text">
             <h4>Сауна цветы</h4>
             <h4>Горячий сруб</h4>
             <h2>от 2 000 ₽/час</h2>
             <p>был(а) 15 мин. назад</p>
           </div>
         </div>
         <div class="header-btn">
           <img src="../../assets/img/chat/import.png" alt="importas">
           <img src="../../assets/img/chat/heart-chat.png" alt="importas">
           <img src="../../assets/img/chat/chat-editable.png" alt="editable">
         </div>
       </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
* {
  box-sizing: content-box!important;
}
.paddings{
  padding: 0!important;
}
.plus-logo{
  margin: 0 10px 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  transform: translateY(-2rem);
  opacity: 0;
}
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
.color {
  color: #A169F7!important;
}
.header {
  background-color: $default-color;
  border-radius: 23px;
  padding: 5px 0;
  &__content {
    display: flex;
    align-items: center;
    // justify-content: space-between;
    height: 8rem;
  }
  &__logo {
    & img {
      max-width: 13.3rem;
      width: 100%;
      height: auto;
    }
  }
}

.nav-icons__item{
  width: 26.02px;
  height: 26.25px;
  margin: 0 30px 0 0;
}

.menu-items1 {
  display: flex;
  align-items: center;
  gap: 3.8rem;
  margin: 0 auto;
}
.nav {
  display: flex;
  gap: 2.8rem;
  align-items: center;
  border: 2px solid #DCE1F0;
  border-radius: 100px;
  margin: 0 0 0 45px;
  padding: 13px 0 0;
  &__item {
    cursor: pointer;
    position: relative;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #3E3E51;
    padding: 7px 15px;
    &_active {
      background: #32BD1B;
      border-radius: 100px;
      color: #F1F3F9!important;
    }
  }
}
.nav-icons {
  display: flex;
  align-items: center;
  &__item {
    position: relative;
    & img {
      width: 100%;
      max-width: 2.7rem;
      height: auto;
    }
    &:nth-child(2):after {
      content: "";
      position: absolute;
      width: 0.1rem;
      height: 2.3rem;
      top: 0;
      right: -1.8rem;
      background: #e1e5f2;
    }
    &:nth-child(2):before {
      content: "";
      position: absolute;
      width: 0.1rem;
      height: 2.3rem;
      top: 0;
      left: -1.8rem;
      background: #e1e5f2;
    }
    & .counter {
      position: absolute;
      top: -1rem;
      right: -1rem;
      max-width: 1rem;
      width: 100%;
      max-height: 1rem;
      height: 100%;
      background: $red-color;
      border-radius: 100%;
      font-size: 0.9rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;
      color: $default-color;
    }
  }
}
.nav-btns {
  display: flex;
  margin-left: auto;
  align-items: center;
  gap: 2.3rem;
  & .btn {
    padding: 0.75rem 2rem;
    font-size: 1.4rem;
    width: 222px;
    height: 35px;
    background: #32BD1B;
    box-shadow: 0px 4px 24px rgba(166, 175, 203, 0.32);
    border-radius: 100px;
  }
  & .btn-login {
    cursor: pointer;
    padding: 0.7rem 1.2rem;
    display: flex;
    gap: 1.5rem;
    box-shadow: 0px 6px 21px rgba(166, 175, 205, 0.28);
    border-radius: $mainBorderRadius;
  }
}
.header-btn {
  display: flex;
  align-items: center;

  & img {
    margin-right: 20px
  }
}
.headers {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Lato', sans-serif;
  .header-wrapper {
    display: flex;
    align-items: center;
    & img {
      margin-right: 25px;
    }
  }
  .headers-text {
    margin-left: 20px;
    & h4 {
      font-weight: 500;
      font-size: 16px;
      color: #3E3E51;
    }
    & h2 {
      font-weight: 700;
      font-size: 16px;
      color: #3E3E51;
    }
  }
}
.order-image {
  width: 96px;
  height: 76px;
  margin: 0!important;
}
</style>
