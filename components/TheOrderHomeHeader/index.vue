<script setup>
let isActive = ref(false);
const btn1 = ref(true);
const btn2 = ref(true);
const btn3 = ref(true);
const btn4 = ref(true);
const btn5 = ref(true);
const btn6 = ref(true);
const btn7 = ref(true);
const btn8 = ref(true);
const btn9 = ref(true);

const deletes = () => {
  btn1.value = false
  btn2.value = false
  btn3.value = false
  btn4.value = false
  btn5.value = false
  btn6.value = false
  btn7.value = false
  btn8.value = false
  btn9.value = false
}

const delete_item = () => {
  btn1.value = false
};

const delete_item2 = () => {
  btn3.value = false
};

const delete_item3 = () => {
  btn6.value = false
};

const delete_item4 = () => {
  btn7.value = false
}

let activeMenu = ref(0);
</script>

<template>
  <header class="header">
    <div class="container">
       <div class="headers">
         <div class="header-wrapper">
           <div class="form">
             <input type="text" placeholder="Поиск Баня.ру">
             <img src="../../assets/img/order/input-icon.png" alt="input-icon">
           </div>
           <nuxt-link to="/">
             <div class="close">
               <button>
                 <img src="../../assets/img/order/close.png" alt="close">
               </button>
             </div>
           </nuxt-link>
         </div>
         <div class="header-main">
           <div class="text">
             <h4>1 936 объявлений</h4>
             <img src="../../assets/img/order/filter.png" alt="filter">
           </div>
           <div class="filter-selected">
             <img src="../../assets/img/order/filter-selected.png" alt="filter-selected">
           </div>
         </div>
         <div class="header-main-btn">
           <div class="first-btn">
             <img src="../../assets/img/order/close.png" alt="close" @click="deletes">
             <button class="active" v-if="btn1">
               Баня
               <img src="../../assets/img/order/delete.png" alt="delete" @click="delete_item">
             </button>
             <button v-if="btn2">
               Сауна
             </button>
             <button class="active" v-if="btn3">
               Хаммам
               <img src="../../assets/img/order/delete.png" alt="delete" @click="delete_item2">
             </button>
             <button v-if="btn4">
               Баня по-черному
             </button>
             <img src="../../assets/img/order/next.png" alt="next">
           </div>
           <div class="first-btn" v-if="btn5">
             <button class="active" v-if="btn6">
               2500 ₽
               <img src="../../assets/img/order/delete.png" alt="delete" @click="delete_item3">
             </button>
             <button class="active" v-if="btn7">
               10 чел.
               <img src="../../assets/img/order/delete.png" alt="delete" @click="delete_item4">
             </button>
             <button v-if="btn8">
               Массаж
             </button>
             <button v-if="btn9">
               Аквазона
             </button>
           </div>
         </div>
       </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
* {
  box-sizing: content-box!important;
}
.form {
  position: relative;
}
.paddings{
  padding: 0!important;
}
.closes {
  border: none;
  background: none;
  cursor: pointer;
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
.headers {
  font-family: 'Lato', sans-serif;
  .header-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .form {
      display: flex;
      align-items: center;
      & input {
        height: 47px;
        outline: none;
        background: #FFFFFF;
        border: 2px solid #DCE1F0;
        border-radius: 100px;
        font-family: 'Lato', sans-serif;
        font-weight: 500;
        font-size: 24px;
        color: #8F99BA;
        padding: 0 20px ;

        &::placeholder {
          font-family: 'Lato', sans-serif;
          font-weight: 500;
          font-size: 24px;
          color: #8F99BA;
        }
      }
      & img {
        position: absolute;
        right: 0;
        transform: translateX(-13px);
      }
    }
    .close {
      & button {
        border: none;
        background: none;
        outline: none;
        cursor: pointer;
      }
    }
  }
  .header-main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5px 0;
    .text {
      display: flex;
      align-items: center;
      & h4 {
        font-family: 'Lato', sans-serif;
        font-weight: 700;
        font-size: 24px;
        color: #3E3E51;
        margin-right: 20px;
      }
    }
  }
  .header-main-btn {
    margin-top: 15px;
    .first-btn {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      .first-btn {
        display: flex;
        align-items: center;
      }
      .first {
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 0;
      }
      & button {
        height: 35px;
        background: #fff;
        border: 2px solid #DCE1F0;
        border-radius: 100px;
        padding: 5px 8px;
        margin-right: 10px;
        font-family: 'Lato', sans-serif;
        font-weight: 500;
        font-size: 18px;
        color: #3E3E51;
        cursor: pointer;
      }
      & img {
        margin-right: 10px;
        cursor: pointer;
      }
      .active {
        background: #32BD1B;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        border: none;
        color: #F1F3F9;
        & img {
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
