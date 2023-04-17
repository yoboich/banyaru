<script setup>
  const count = ref(21)

  const like = () => {
    count.value++
  };
  const dislike = () => {
    count.value--
  };
</script>

<template>
  <div class="reviews-container">
    <h4>Отзывы</h4>
    <div class="reviews-container__content">
      <div class="reviews-container__content__header">
        <h2>4,6</h2>
        <div class="box-wrapper">
          <img src="../../assets/img/order/ratings.png" alt="ratings">
          <h4>112 оценок</h4>
        </div>
      </div>
      <div class="reviews-container__content__middle">
        <div class="reviews-container__content__middle__content">
          <img src="../../assets/img/order/user.png" alt="user" class="user">
          <h4>Оцените и напишите отзыв</h4>
          <img src="../../assets/img/order/big-rating.png" alt="rating" class="rating">
        </div>
      </div>
    </div>
    <div class="reviews-container__last">
      <h4>Ваш отзыв</h4>
      <div class="reviews-container__last__content">
        <img src="../../assets/img/order/user.png" alt="user">
        <div class="reviews-container__last__content__box">
          <h4>ID:42313</h4>
          <div class="reviews-container__last__content__box__flex">
            <img src="../../assets/img/order/ratings.png" alt="ratings">
            <span>06.09.2021</span>
          </div>
          <span>Отличные бани. Цена-качество,уровнь!</span>
          <button>На модерации</button>
        </div>
      </div>
    </div>
    <div class="reviews-container__last">
      <h4>112 отзывов</h4>
      <div class="reviews-container__last__content">
        <img src="../../assets/img/order/user2.png" alt="user">
        <div class="reviews-container__last__content__box">
          <h4>Ангелина</h4>
          <div class="reviews-container__last__content__box__flex">
            <img src="../../assets/img/order/ratings.png" alt="ratings">
            <span>06.09.2021</span>
          </div>
          <span>Неизменное место, всегда собираемся тут попариться с друзьями.  Если думаете идти или нет, то однозначно идите, не пожалеете. Все классно и на высшем уровне!!!</span>
        </div>
      </div>
    </div>
    <div class="reviews-container__last">
      <div class="reviews-container__last__content">
        <img src="../../assets/img/order/user3.png" alt="user">
        <div class="reviews-container__last__content__box">
          <h4>ID:42313</h4>
          <div class="reviews-container__last__content__box__flex">
            <img src="../../assets/img/order/ratings.png" alt="ratings">
            <span>06.09.2021</span>
          </div>
          <span>Отличные бани. Цена-качество,уровнь!</span>
          <div class="product-image">
            <img src="../../assets/img/order/product1.png" alt="product-image">
            <img src="../../assets/img/order/product2.png" alt="product-image">
            <img src="../../assets/img/order/product3.png" alt="product-image">
            <img src="../../assets/img/order/product1.png" alt="product-image">
          </div>
          <div class="counter">
            <div class="counter__box">
              <button @click="like">
                <img src="../../assets/img/order/like.png" alt="like">
                <h4>{{ count }}</h4>
              </button>
            </div>
            <button @click="dislike">
              <img src="../../assets/img/order/dislike.png" alt="dislike">
            </button>
          </div>
        </div>
      </div>
      <div class="footer-btn">
        <button>
          <span>Смотреть все 26 отзывов</span>
          <img src="../../assets/img/order/down.png" alt="down">
        </button>
      </div>
      <div class="footer-product">
        <div class="footer-product__box">
          <button>Объявление</button>
        </div>
        <div class="footer-product__flex">
          <button>
            <img src="../../assets/img/order/right.png" alt="btn-image">
            Предыдущее
          </button>
          <button>
            Следующееs
            <img src="../../assets/img/order/left.png" alt="btn-image">
          </button>
        </div>
      </div>
      <div class="announcement">
        <h4>Объявление</h4>
        <div class="menu">
          <ul>
            <li>№ объявления</li>
            <li>Дата размещения</li>
            <li>Дата обновления</li>
            <li>Количество показов</li>
          </ul>
          <ul>
            <li>123654657</li>
            <li>12.10.21</li>
            <li>10.10.21</li>
            <li>1434</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
</template>

<style scoped lang="scss">
.reviews-container {
  font-family: 'Lato', sans-serif;
  margin-top: 40px;

  & h4 {
    font-weight: 700;
    font-size: 24px;
    color: #3E3E51;
  }

  &__content {
    height: 220px;
    background: #FFFFFF;
    box-shadow: 0px 4px 24px rgba(166, 175, 203, 0.32);
    border-radius: 23px;
    padding: 20px;
    margin: 15px 0;

    &__header {
      display: flex;
      align-items: center;

      & h2 {
        font-weight: 700;
        font-size: 38px;
        color: #3E3E51;
      }

      .box-wrapper {
        margin-left: 10px;

        & h4 {
          font-weight: 500;
          font-size: 14px;
          color: #3E3E51;
        }
      }
    }

    &__middle {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;

      &__content {
        .user {
          width: 62px;
          height: 62px;
          border-radius: 50px;
        }

        & h4 {
          font-family: 'Lato', sans-serif;
          font-weight: 500;
          font-size: 14px;
          color: #8F99BA;
          margin: 10px 0;
        }

        .rating {
          width: 130.42px;
          height: 22.9px;
        }
      }
    }
  }

  &__last {
    margin: 30px 0;
    font-family: 'Lato', sans-serif;

    h4 {
      font-weight: 700;
      font-size: 16px;
      color: #3E3E51;
    }

    &__content {
      display: flex;
      margin: 15px 0;

      & img {
        width: 50px;
        height: 50px;
        border-radius: 50px;
      }

      &__box {
        margin: 0 20px 0;

        h4 {
          font-weight: 700;
          font-size: 16px;
          color: #121212;
        }

        &__flex {
          display: flex;
          align-items: center;
          margin: 10px 0;

          & img {
            width: 74.16px;
            height: 13.04px;
          }

          & span {
            font-weight: 400;
            font-size: 12px;
            color: #8F99BA;
            margin-left: 15px;
          }
        }

        & span {
          font-weight: 500;
          font-size: 14px;
          color: #8F99BA;
        }

        & button {
          width: 127px;
          height: 30px;
          background: #8F99BA;
          border-radius: 23px;
          border: none;
          font-weight: 500;
          font-size: 14px;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 20px 0;
        }
        .product-image {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 20px 0;
          transform: translateX(-15px);
          & img {
            width: 81px;
            height: 81px;
          }
        }
        .counter {
          display: flex;
          align-items: center;
          .counter__box {
            display: flex;
            margin-right: 20px;
            & button {
              width: 72px;
              border: none;
              cursor: pointer;
              background: none;
              display: flex;
              justify-content: flex-start;
              padding: 0;
              & img {
                width: 25px;
                height: 26px;
              }
              & h4 {
                font-weight: 500;
                font-size: 14px;
                color: #32BD1B;
                margin-left: 15px;
              }
            }
          }
          & button {
            width: 72px;
            border: none;
            cursor: pointer;
            background: none;
            display: flex;
            justify-content: flex-start;
            padding: 0;
            & img {
              width: 25px;
              height: 26px;
            }
          }
        }
      }
    }
    .footer-btn {
      margin: 20px auto;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      & button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background: none;
        width: 100%;
        & span {
          font-family: 'Lato', sans-serif;
          font-weight: 500;
          font-size: 16px;
          color: #32BD1B;
        }
        & img {
          margin-left: 20px;
          width: 14px;
          height: 8px;
        }
      }
    }
    .footer-product {
      margin: 70px 0;
      .footer-product__box {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px 0;
        & button {
          cursor: pointer;
          background: #FFFFFF;
          box-shadow: 0px 4px 8px rgba(143, 153, 186, 0.16);
          border-radius: 100px;
          width: 142px;
          height: 17px;
          font-family: 'Lato', sans-serif;
          font-weight: 700;
          font-size: 14px;
          color: #8F99BA;
        }
      }
      .footer-product__flex {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        & button {
          cursor: pointer;
          border: none;
          background: none!important;
          display: flex;
          align-items: center;
          font-family: 'Lato', sans-serif;
          font-weight: 500;
          font-size: 16px;
          color: #32BD1B;
          margin-right: 20px!important;
          & img {
            margin: 0 20px;
          }
        }
      }
    }
    .announcement {
      & h4 {
        font-family: 'Lato', sans-serif;
        font-weight: 700;
        font-size: 24px!important;
        color: #3E3E51;
      }
      .menu {
        display: flex;
        align-items: center;
        & ul {
          list-style: none;
          font-family: 'Lato', sans-serif;
          margin-top: 30px;
          & li {
            padding: 10px 0;
          }
          &:nth-child(1) {
             & li {
               font-weight: 500;
               font-size: 14px;
               color: #8F99BA;
             }
          }
          &:nth-child(2) {
            margin: 0 30px;
            transform: translateY(-20px);
            & li {
              font-weight: 500;
              font-size: 14px;
              color: #3E3E51;
            }
          }
        }
      }
    }
  }
}

</style>