<script setup>

</script>

<template>
 <div class="product-container">
   <div class="product-container__first" v-for="i in 2">
     <img src="../../assets/img/order/product-users.png" alt="product-users" class="img">
     <div class="text">
       <div class="text__header">
         <h4>Сауна цветы</h4>
         <div class="header-flex">
           <img src="../../assets/img/order/editables.png" alt="edit">
           <img src="../../assets/img/order/hearts.png" alt="heart">
         </div>
       </div>
       <h2>от 2 000 ₽/час </h2>
       <h4>Баня на дровах  •  Сауна</h4>
       <h4>Хаммам</h4>
       <img src="../../assets/img/order/productcard-image.png" alt="productcard-image" class="image">
       <div class="btn-wrapper">
         <button>+7 999 333 14 ...</button>
         <button>
           <img src="../../assets/img/order/message.png" alt="message">
         </button>
       </div>
     </div>
   </div>
 </div>
</template>

<style scoped lang="scss">
  .product-container {
    &__first {
      display: flex;
      align-items: center;
      margin-top: 30px;
      & .img {
        width: 220px;
        height: 221px;
      }
      .text {
        margin-left: 30px;
        & h4 {
          font-weight: 700;
          font-size: 17px;
          color: #3E3E51;
        }
        & h2 {
          font-weight: 700;
          font-size: 24px;
          color: #3E3E51;
        }
        & .image {
          width: 312px;
          margin: 20px 0 8px;
        }
        &__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .header-flex {
            display: flex;
            align-items: center;
            & img {
              margin-left: 10px;
            }
          }
        }
        .btn-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          & button {
            background: #32BD1B;
            box-shadow: 0px 4px 21px rgba(143, 153, 186, 0.7);
            border-radius: 100px;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            &:nth-child(1) {
              width: 270px;
              height: 50px;
              font-weight: 500;
              font-size: 20px;
              color: #FFFFFF;
            }
            &:nth-child(2) {
              width: 50px;
              height: 50px;
              font-weight: 500;
              font-size: 20px;
              color: #FFFFFF;
              margin: 0 20px 0;
              & img {
                width: 25px;
                height: 23px;
              }
            }
          }
        }
      }
    }
  }
</style>