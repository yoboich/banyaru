<script setup>
  const products = [
    {
      title: "9 000 ₽",
      description: " 1ч./мин.3ч. пн-вс 24ч. 800 ₽"
    },
    {
      title: "800 ₽",
      description: " +1чел./ч. свыше 17"
    },
    {
      title: "50 000 ₽",
      description: " депозит /ночь с 0:00"
    },
    {
      title: "9 000 ₽",
      description: " 1ч./мин.3ч. пн-вс 24ч. 800 ₽"
    },
    {
      title: "800 ₽",
      description: " +1чел./ч. свыше 17"
    },
    {
      title: "50 000 ₽",
      description: " депозит /ночь с 0:00"
    },
  ]
  const catalog = [
    {
      title: "15 %",
      description: "На всю банную продукцию"
    },
    {
      title: "10 %",
      description: "На все услуги бани при предъявлении промокода"
    },
    {
      title: "15 %",
      description: "На Большой зал от 9 000 ₽"
    },
  ]
</script>

<template>
 <div class="price-content">
   <div class="price-btn">
     <div class="title">
       <h4>Цены</h4>
     </div>
     <div class="wrappers">
       <div class="price-wrap">
         <div class="price-menu" v-for="item in products" :key="item">
           <h4 class="h4-width">{{ item.title }}</h4>
           <img src="../../assets/img/order/line.png" alt="line">
           <h4 class="text-h4">{{ item.description }}</h4>
         </div>
       </div>
     </div>
   </div>
   <div class="price-btn mr btns">
     <button>
       Смотреть все
       <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path
             d="M13.6212 0.365951C14.1263 0.853862 14.1263 1.64492 13.6212 2.13283L7.92593 7.63407C7.42081 8.12198 6.60185 8.12198 6.09674 7.63407C5.59162 7.14616 5.59162 6.35509 6.09674 5.86718L11.792 0.365952C12.2971 -0.12196 13.116 -0.121961 13.6212 0.365951Z"
             fill="#32BD1B"/>
         <path
             d="M0.378838 0.365934C0.883955 -0.121978 1.70291 -0.121978 2.20803 0.365933L7.90326 5.86716C8.40838 6.35508 8.40838 7.14614 7.90326 7.63405C7.39815 8.12196 6.57919 8.12196 6.07407 7.63405L0.378839 2.13282C-0.126279 1.64491 -0.12628 0.853845 0.378838 0.365934Z"
             fill="#32BD1B"/>
       </svg>
     </button>
   </div>
   <div class="footer-price">
     <div class="title">
       <h4>Скидки</h4>
     </div>
     <div class="wrappers">
       <div class="price-wrap">
         <div class="price-menu" v-for="item in catalog" :key="item">
           <h4 class="h4-width">{{ item.title }}</h4>
           <img src="../../assets/img/order/line.png" alt="line">
           <h4 class="text-h4">{{ item.description }}</h4>
         </div>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  name: "Price"
}
</script>

<style scoped lang="scss">
  .price-content  {
    .title {
      & h4 {
        font-family: 'Lato', sans-serif;
        font-weight: 700;
        font-size: 24px;
        color: #3E3E51;
      }
    }
  }
  .price-menu {
    display: flex;
    align-items: flex-end;
    margin-top: 30px;
    & h4 {
      font-family: 'Lato', sans-serif;
      font-weight: 700;
      font-size: 16px;
      @media(max-width: 600px) {
        font-size: 13px;
      }
    }
    .text-h4 {
      color: #8F99BA;
    }
    & img {
      width: 250px;
      height: 1px;
      margin: 0 20px 0;
      transform: translateY(-5px);
    }
  }
  .h4-width {
    width: 70px;
  }
  .price-btn {
    margin: 40px 0;
    & button {
      border: none;
      background: none;
      font-family: 'Lato', sans-serif;
      font-weight: 500;
      font-size: 16px;
      color: #32BD1B;
      display: flex;
      align-items: center;
      & svg {
        margin: 0 20px 0;
      }
    }
  }
  .footer-price {
    margin: 30px 0;
  }
  .btns {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>