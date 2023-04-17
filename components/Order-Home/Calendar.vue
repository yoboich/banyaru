<script setup>
 const catalog = [
   {
     image: "icon1.png",
     title: "Свободно"
   },
   {
     image: "icon2.png",
     title: "Проверяется"
   },
   {
     image: "icon3.png",
     title: "Ваш заказ"
   },
   {
     image: "icon4.png",
     title: "Занято"
   },
   {
     image: "icon5.png",
     title: "Недоступно"
   },
 ]
</script>

<template>
 <div class="calendar">
   <div class="calendar__first">
     <button>0:00</button>
     <button>0:30</button>
     <button>1:00</button>
     <button>1:30</button>
     <button>2:00</button>
   </div>
   <div class="calendar__last">
     <button>
       <span>2:30</span>
       <span>4:30</span>
     </button>
   </div>
   <div class="calendar__second">
     <button>
       <span>5:00</span>
     </button>
     <button>
       <span>5:30</span>
       <span class="btn-middle">
         <img src="../../assets/img/order/time.png" alt="time">
         <span>04:59</span>
       </span>
       <span>7:00</span>
     </button>
   </div>
   <div class="calendar__fourth">
     <button>7:30</button>
     <div class="middle-btn">
         <img src="../../assets/img/order/watch.png" alt="watch">
         <h4>02:30</h4>
     </div>
     <button>9:30</button>
   </div>
   <div class="calendar__fifth">
     <button>10:00</button>
     <button>10:30</button>
     <button>11:00</button>
     <button>11:30</button>
     <button>12:00</button>
   </div>
   <div class="calendar__fifth">
     <button>13:30</button>
     <button>14:00</button>
     <button>14:30</button>
     <button>15:00</button>
     <button>15:30</button>
   </div>
   <div class="calendar__fifth">
     <button>16:00</button>
     <button>16:30</button>
     <button>17:00</button>
     <button>17:30</button>
     <button>18:00</button>
   </div>
   <div class="calendar__last">
     <button>
       <span>18:30</span>
       <span>20:30</span>
     </button>
   </div>
   <div class="calendar__second">
     <button>
       <span>21:00</span>
     </button>
     <button class="start">
       <span>21:30</span>
       <span class="btn-middle">
         <img src="../../assets/img/order/time.png" alt="time">
         <span>04:59</span>
       </span>
     </button>
   </div>
   <div class="calendar__footer">
     <div class="calendar__footer__content" v-for="item in catalog">
       <img :src="'/_nuxt/assets/img/order/' + item.image" alt="icon">
       <h4>{{ item.title }}</h4>
     </div>
   </div>
 </div>
</template>

<style scoped lang="scss">
  .calendar {
    cursor: pointer;
    margin-top: 30px;
    &__first {
      display: flex;
      align-items: center;
      justify-content: space-between;
      & button {
        background: #FFFFFF;
        box-shadow: 0px 4px 12px rgba(166, 175, 203, 0.25);
        border-radius: 8px;
        width: 112px;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-family: 'Lato', sans-serif;
        font-weight: 500;
        font-size: 14px;
        color: #3E3E51;
        cursor: pointer;
        &:nth-child(1), &:nth-child(2) {
          color: #8F99BA!important;
        }
      }
    }
    &__last {
      margin-top: 5px;
      button {
        background: #FF858C;
        border-radius: 8px;
        width: 100%;
        height: 58px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 40px 0;
        cursor: pointer;
        & span {
          font-family: 'Lato', sans-serif;
          font-weight: 500;
          font-size: 14px;
          color: #3E3E51;
        }
      }
    }
    &__second {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 5px;
      & button {
        width: 112px;
        height: 56px;
        background: #FFFFFF;
        box-shadow: 0px 4px 12px rgba(166, 175, 203, 0.25);
        border-radius: 8px;
        border: none;
        font-family: 'Lato', sans-serif;
        font-weight: 500;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        cursor: pointer;
        color: #3E3E51;
        &:nth-child(2) {
          background: #FFDF8E;
          border-radius: 8px;
          width: 464px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 35px 0;
          margin-left: 20px;
          & .btn-middle {
            display: flex;
            align-items: center;
            & span {
              margin: 0 10px 0;
            }
          }
        }
      }
    }
    &__fourth {
      margin-top: 5px;
      background: #99DF8D;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 56px;
      & button {
        width: 112px;
        height: 56px;
        background: #32BD1B;
        box-shadow: 0px 4px 12px rgba(166, 175, 203, 0.25);
        border-radius: 8px;
        border: none;
        font-family: 'Lato', sans-serif;
        font-weight: 500;
        font-size: 14px;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        color: #FFFFFF;
        cursor: pointer;
      }
      .middle-btn {
        display: flex;
        align-items: center;
        & h4 {
          font-family: 'Lato', sans-serif;
          font-weight: 500;
          font-size: 14px;
          color: #3E3E51;
          margin: 0 10px 0;
        }
      }
    }
    &__fifth {
      margin-top: 5px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      & button {
        background: #FFFFFF;
        box-shadow: 0px 4px 12px rgba(166, 175, 203, 0.25);
        border-radius: 8px;
        width: 112px;
        height: 56px;
        font-family: 'Lato', sans-serif;
        font-weight: 500;
        font-size: 14px;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        color: #3E3E51;
        cursor: pointer;

        &:nth-child(2) {
          color: #8F99BA!important;
          background: #FFFFFF;
          opacity: 0.5;
          box-shadow: none;
          background: none;
        }
      }
    }
    &__footer {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin: 30px 0;
      cursor: pointer;
      &__content {
        display: flex;
        align-items: center;
        & img {
          width: 12px;
          height: 12px;
        }
        & h4 {
          font-family: 'Lato', sans-serif;
          font-weight: 500;
          font-size: 14px;
          color: #3E3E51;
          margin: 0 10px 0;
        }
      }
    }
  }
  .start {
    justify-content: start!important;
    .btn-middle {
      margin: 0 60px 0;
      cursor: pointer;
    }
  }
</style>