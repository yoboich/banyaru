<template>
  <div class="content">
    <div class="wrappers">
      <div class="wrappers__box">
        <h4>от 2 000 ₽/час </h4>
        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M13.6212 0.365951C14.1263 0.853862 14.1263 1.64492 13.6212 2.13283L7.92593 7.63407C7.42081 8.12198 6.60185 8.12198 6.09674 7.63407C5.59162 7.14616 5.59162 6.35509 6.09674 5.86718L11.792 0.365952C12.2971 -0.12196 13.116 -0.121961 13.6212 0.365951Z"
              fill="#32BD1B"/>
          <path
              d="M0.378838 0.365934C0.883955 -0.121978 1.70291 -0.121978 2.20803 0.365933L7.90326 5.86716C8.40838 6.35508 8.40838 7.14614 7.90326 7.63405C7.39815 8.12196 6.57919 8.12196 6.07407 7.63405L0.378839 2.13282C-0.126279 1.64491 -0.12628 0.853845 0.378838 0.365934Z"
              fill="#32BD1B"/>
        </svg>
      </div>
      <img src="../../assets/img/chat/vip-image.png" alt="vip-image">
    </div>
    <div class="content-btn">
      <button>Баня на дровах</button>
      <button>Сауна</button>
      <h4>Хаммам</h4>
    </div>
    <img src="../../assets/img/chat/product-item.png" alt="product-item" class="item-image">
    <p class="text-p">г. Москва, ул. Большая Очаковская, 35</p>
    <div class="content-box">
      <img src="../../assets/img/chat/time-item.png" alt="time-item">
      <h4>Откроется в 9:00</h4>
    </div>
    <div class="btn-wrapper">
      <button class="btn-green">
        <img src="../../assets/img/chat/icon-phone.png" alt="icon-phone">
        +7 999 333 14 ...
      </button>
      <button class="middle-btn">
        <img src="../../assets/img/chat/item-message.png" alt="item-message">
      </button>
      <button>
        <img src="../../assets/img/chat/calc.png" alt="calc">
        Калькулятор
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info"
}
</script>

<style scoped lang="scss">
.wrappers {
  display: flex;
  justify-content: space-between;

  &__box {
    display: flex;
    align-items: center;

    & h4 {
      font-family: 'Lato', sans-serif;
      font-weight: 500;
      font-size: 24px;
      color: #3E3E51;
      margin-right: 10px;
    }
  }

  & img {
    width: 43px;
    height: 20px;
  }
}

.content-btn {
  display: flex;
  align-items: center;
}

.content-btn {
  margin-top: 20px;

  & button {
    background: #32BD1B;
    border-radius: 23px;
    padding: 10px 25px;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #FFFFFF;
    margin-right: 15px;
  }

  & h4 {
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #3E3E51;
  }
}
.item-image {
  width: 347px;
  margin: 18px 0 0;
}
.text-p {
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #3E3E51;
}
.content-box {
  display: flex;
  align-items: center;
  margin-top: 5px;
  & img {
    width: 12px;
    height: 12px;
  }
  & h4 {
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #EB5757;
    margin: 0 10px 0;
  }
}
.btn-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  background: #FFFFFF;
  box-shadow: 0px 4px 24px rgba(166, 175, 203, 0.32);
  border-radius: 100px;
  height: 81px;
  padding: 0 20px;
  & button {
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: #FFFFFF;
    padding: 10px 20px;
    background: #32BD1B;
    box-shadow: 0px 4px 21px rgba(143, 153, 186, 0.7);
    border-radius: 100px;
    border: none;
    cursor: pointer;

    & img {
      margin-right: 10px;
    }
  }
  .btn-green {
    width: 281px;
    height: 50px;
  }
  .middle-btn {
    width: 50px;
    height: 50px;
    & img {
      margin: 0!important;
    }
  }
}
</style>