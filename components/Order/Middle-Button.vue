<script setup>
  import {onMounted} from "vue";

  const modal = ref(false)
  const product = [
    {
      title: "Дата",
      description: "12.11.2023"
    },
    {
      title: "Дата",
      description: "12.11.2023"
    },
    {
      title: "Дата",
      description: "12.11.2023"
    },
    {
      title: "Включено человек",
      text: "(7 Максимум)",
      description: "4",
      class: "color-silver"
    },
    {
      title: "Стоимость аренды",
      text: "3ч. 30 мин.",
      description: "32 000 ₽",
    },
    {
      title: "Доп. чел.",
      text: "0 чел.",
      description: "0 ₽",
    },
    {
      title: "Ответственный",
      description: "Владимир"
    },
  ]

  const open = () => {
    modal.value = true
    const popup = document.querySelector('.open')
    const body = document.querySelector('.body')
    popup.addEventListener('click', () => {
      body.style.overflow = 'hidden'
    })
  };

  const close = () => {
    modal.value = false
    const popup = document.querySelector('.open')
    const body = document.querySelector('.body')
    popup.addEventListener('click', () => {
      body.style.overflowY = 'scroll'
    })
  };
</script>

<template>
  <div class="btn-wrappers">
    <div class="middle-btn-wrapper">
      <div class="middle-btn-wrapper__first">
        <button>Очистить</button>
        <button @click="open" class="open">
          Заказать     12 000 ₽
        </button>
      </div>
      <div class="middle-btn-wrapper__last">
        <button>
          <img src="../../assets/img/order/heart.png" alt="heart">
          Добавить баню в избранное
        </button>
      </div>
    </div>
    <div class="popup-container" v-if="modal">
      <div class="popup-content">
        <h4>Детали бронирования:</h4>
        <div class="popup-middle">
          <div class="popup-menu" v-for="item in product" :key="item">
            <div class="popup-menu__wrap">
              <h4>{{ item.title }}</h4>
              <h4 class="middle-text" v-if="item.text">{{ item.text }}</h4>
              <h2>{{ item.description }}</h2>
            </div>
          </div>
        </div>
        <div class="middle-information">
          <h4>Итого</h4>
          <h4>32 000 ₽</h4>
        </div>
        <div class="popup-footer">
          <h2>Отмена бронирования:</h2>
          <h4>ОТ 12 часов - моментальный возврат средств</h4>
          <h4>ДО 12 часов - возврат средств не производится!</h4>
        </div>
        <div class="popup-form">
          <div class="inputs">
            <input type="checkbox" id="checkbox">
            <label for="checkbox">Данные брони мной проверены. С условиями бронирования и публичной офертой согласен(-на)</label>
          </div>
          <div class="form-btn">
            <button @click="close">Назад</button>
            <button>Бронировать</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.btn-wrappers {
  position: relative;
}
  .middle-btn-wrapper {
    &__first {
      height: 80px;
      background: #FFFFFF;
      box-shadow: 0px 4px 24px rgba(166, 175, 203, 0.32);
      border-radius: 100px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px 0;
      margin-top: 30px;
      & button:nth-child(1) {
        width: 219px;
        height: 49.59px;
        border: 2px solid #DCE1F0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        color: #3E3E51;
        border-radius: 100px;
        cursor: pointer;
      }
      button:nth-child(2) {
        width: 334px;
        height: 50px;
        background: #8E58FF;
        box-shadow: 0px 4px 24px rgba(166, 175, 203, 0.32);
        border-radius: 100px;
        border: none;
        font-family: 'Lato', sans-serif;
        font-weight: 500;
        font-size: 20px;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        color: #FFFFFF;
        margin-left: 20px;
        cursor: pointer;
      }
    }
    &__last {
      margin: 40px 0;
      & button {
        width: 578.15px;
        height: 57px;
        background: #FFFFFF;
        box-shadow: 0px 6px 21px rgba(166, 175, 205, 0.22);
        border-radius: 100px;
        border: none;
        font-family: 'Lato', sans-serif;
        font-weight: 500;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: #32BD1B;
        cursor: pointer;
        margin: 0 auto;
        & img {
          margin-right: 10px;
        }
      }
    }
  }
  .popup-container {
    position: fixed;
    overflow: hidden;
    z-index: 2;
    width: 36%;
    height: 100vh;
    background: #fff;
    bottom: 0;
    padding: 0 30px;
    transform: translateX(-34px);
    @media(max-width: 1500px) {
      width: 42%;
    }
    .popup-content {
      font-family: 'Lato', sans-serif;
      margin: 70px 0;
      & h4 {
        font-weight: 700;
        font-size: 16px;
        color: #3E3E51;
        font-family: 'Lato', sans-serif;
      }
      .popup-middle {
        margin-top: 30px;
      }
      .popup-menu {
        border-bottom: 1px solid rgba(225, 229, 242, 0.5);
        padding-bottom: 10px;
        margin-bottom: 10px;
        &__wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;

          & h4 {
            font-family: 'Lato', sans-serif;
            font-weight: 600;
            font-size: 14px;
            color: #8F99BA;
          }
          & h2 {
            font-family: 'Lato', sans-serif;
            font-weight: 600;
            font-size: 14px;
            color: #3E3E51;
          }
        }
      }
    }
  }
  .color-silver {
    color: #8F99BA!important;
  }
  .middle-text {
    transform: translateX(-90px);
  }
  .middle-information {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #E1E5F2;
    border-bottom: 1px solid #E1E5F2;
    padding: 20px 0;
    margin: 70px 0;
    & h4 {
      font-family: 'Lato', sans-serif;
      font-weight: 800;
      font-size: 20px!important;
      color: #3E3E51;
    }
  }
  .popup-footer {
    border-bottom: 1px solid #E1E5F2;
    padding-bottom: 30px;
    font-family: 'Lato', sans-serif;
    & h2 {
      font-weight: 700;
      font-size: 16px;
      color: #3E3E51;
    }
    & h4 {
      font-weight: 600;
      font-size: 14px!important;
      color: #3E3E51;
      margin-top: 10px;
    }
  }
  .popup-form {
    margin: 40px 0;
    .inputs {
      display: flex;
      align-items: center;
      & input {
        width: 26px;
        height: 26px;
        background: #FFFFFF;
        border: 2px solid #DCE1F0;
        border-radius: 6px;
      }
      & label {
        font-family: 'Lato', sans-serif;
        font-weight: 500;
        font-size: 14px;
        color: #3E3E51;
        margin: 0 20px 0;
      }
    }
    .form-btn {
      margin: 30px 0 0;
      display: flex;
      align-items: center;
      justify-content: center;
      & button {
        cursor: pointer;
        &:nth-child(1) {
          width: 265px;
          height: 48px;
          border: 2px solid #DCE1F0;
          filter: drop-shadow(0px 4px 24px rgba(166, 175, 203, 0.32));
          border-radius: 100px;
          font-family: 'Lato', sans-serif;
          font-weight: 500;
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #3E3E51;
        }
        &:nth-child(2) {
          width: 265px;
          height: 48px;
          background: #8E58FF;
          border-radius: 100px;
          border: none;
          font-family: 'Lato', sans-serif;
          font-weight: 500;
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #FFFFFF;
          margin: 0 20px 0;
        }
      }
    }
  }
</style>