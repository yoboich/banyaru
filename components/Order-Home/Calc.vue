<script setup>
import OrderSlider from "./Slider";

const count = ref(2)
const minus = () => {
  count.value--
}
const plus = () => {
  count.value++
}
</script>

<template>
  <div class="cal-wrapper">
    <div class="cal-wrapper__header">
      <h4>Калькулятор заказа</h4>
      <img src="../../assets/img/order/icon.png" alt="icon">
    </div>
    <div class="cal-wrapper__main">
      <div class="counter">
        <div class="counter-text">
          <h4>Количество гостей</h4>
          <span>Макс. чел: 7</span>
        </div>
        <div class="counter-btn">
          <button @click="minus">-</button>
          <button class="btn-text">{{ count }}</button>
          <button @click="plus">+</button>
        </div>
      </div>
      <div class="form">
        <h4>На кого заказ</h4>
        <input type="text" placeholder="Имя">
      </div>
      <div class="swiper">
        <OrderSlider :premium="true"/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .cal-wrapper {
    font-family: 'Lato', sans-serif;
    &__header {
      display: flex;
      & h4 {
        font-weight: 700;
        font-size: 24px;
        color: #8E58FF;
        margin-right: 20px;
      }
    }
    &__main {
      .counter {
        display: flex;
        align-items: center;
        font-family: 'Lato', sans-serif;
        .counter-text {
          & h4 {
            font-weight: 700;
            font-size: 16px;
            color: #3E3E51;
          }
          & span {
            font-weight: 500;
            font-size: 14px;
            color: #8F99BA;
            margin-top: 5px;
          }
        }
        .counter-btn {
          display: flex;
          align-items: center;
          margin: 20px 30px 0;
          & button {
            width: 36px;
            height: 36px;
            background: #FFFFFF;
            border: 2px solid #DCE1F0;
            border-radius: 20px;
            color: #32BD1B;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            margin-right: 20px;
            font-weight: 500;
            font-size: 29px;
            padding: 10px;
            cursor: pointer;
          }
        }
      }
    }
  }
  .btn-text {
    font-weight: 500;
    font-size: 14px!important;
    color: #3E3E51!important;
    padding: 10px 25px!important;
  }
  .form {
    display: flex;
    align-items: center;
    margin-top: 20px;
     & h4 {
       font-family: 'Lato', sans-serif;
       font-weight: 700;
       font-size: 16px;
       color: #3E3E51;
     }
    & input {
      border: 2px solid #DCE1F0;
      filter: drop-shadow(0px 4px 24px rgba(166, 175, 203, 0.32));
      border-radius: 100px;
      outline: none;
      font-family: 'Lato', sans-serif;
      font-weight: 600;
      font-size: 14px;
      color: #8F99BA;
      padding: 7px 20px;
      margin: 0 70px 0;
      &::placeholder {
        font-weight: 600;
        font-size: 14px;
        color: #8F99BA;
      }
    }
  }
</style>