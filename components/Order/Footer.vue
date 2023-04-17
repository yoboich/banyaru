<script setup>

</script>

<template>
  <div class="footer-container">
    <div class="logo">
      <img src="../../assets/img/order/logo.png" alt="logo">
    </div>
    <div class="footer-text">
      <p>Ведущий тематический портал о банях и саунах России, банных услугах и товарах*<br>
        * По данным сервиса SimilarWeb на февраль 2021 года</p>
      <p>Banya.ru — достоверная база данных об аренде и продаже бань и саун, услуг и товаров<br> для бань</p>
      <p>БАНЯ.РУ — крупнейший в России каталог бань и саун, услуг, товаров и готовых бань.<br> Использование сайта означает согласие с Пользовательским соглашением и Политикой<br> конфиденциальности. Оплачивая лицензионный платеж, вы принимаете Лицензионное соглашение.</p>
    </div>
    <div class="footer-form">
      <p>Подпишитесь на новые объявления и новости Баня.ру</p>
      <input type="text" placeholder="Адрес электроной почты">
      <button>Подписаться</button>
    </div>
    <div class="footer-icon">
      <div class="icon">
        <img src="../../assets/img/order/Слой_x0020_1-1.png" alt="icon1">
        <img src="../../assets/img/order/Слой_x0020_1-2.png" alt="icon2">
        <img src="../../assets/img/order/Слой_x0020_1-3.png" alt="icon3">
        <img src="../../assets/img/order/Слой_x0020_1-4.png" alt="icon4">
        <img src="../../assets/img/order/Слой_x0020_1-5.png" alt="icon5">
      </div>
      <div class="number-box">18+</div>
    </div>
    <div class="footer-p">
      <p>2022 © ООО "Баня.ру" - Бани и сауны  ОГРН 1187746492120  Предложения и условия не являются публичной афертой</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .footer-container {
    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      & img {
        width: 108px;
        height: 31px;
      }
    }
    .footer-text {
      margin: 30px 0;
      & p {
        font-family: 'Lato', sans-serif;
        font-weight: 500;
        font-size: 14px;
        color: #8F99BA;
        margin-bottom: 50px;
      }
    }
    .footer-form {
      font-family: 'Lato', sans-serif;
      & p {
        font-weight: 500;
        font-size: 14px;
        color: #3E3E51;
      }
      & input {
        width: 92%;
        height: 35px;
        background: #FFFFFF;
        box-shadow: inset 0px 0px 8px rgba(136, 152, 206, 0.46);
        border-radius: 100px;
        outline: none;
        padding: 0 20px;
        font-weight: 500;
        font-size: 14px;
        color: #8F99BA;
        margin: 20px 0;
        border: none;
        display: block;
        &::placeholder {
          font-weight: 500;
          font-size: 14px;
          color: #8F99BA;
        }
      }
      & button {
        width: 99%;
        height: 35px;
        background: #FFFFFF;
        border: 2px solid #DCE1F0;
        border-radius: 100px;
        cursor: pointer;
        font-weight: 500;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #3E3E51;
        margin: 10px 0;
      }
    }
    .footer-icon {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 60px;

      .icon {
        display: flex;
        align-items: center;
        & img {
          width: 21px;
          height: 21px;
          margin-right: 20px;
        }
      }
      .number-box {
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        font-size: 11.5px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #3E3E51;
        border: 3px solid #3E3E51;
      }
    }
    .footer-p {
      margin: 20px 0;
      & p {
        font-family: 'Lato', sans-serif;
        font-weight: 500;
        font-size: 14px;
        color: #8F99BA;
      }
    }
  }
</style>