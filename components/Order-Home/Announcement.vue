<script setup>
  import {onMounted} from "vue";

  const product = [
    {
      image: "girl-image.png",
      description: "По-черному",
      title: "Сибирский сруб",
      price: "22 300 ₽/час"
    },
    {
      image: "girl-image.png",
      description: "По-черному",
      title: "Сибирский сруб",
      price: "22 300 ₽/час"
    },
    {
      image: "girl-image.png",
      description: "По-черному",
      title: "Сибирский сруб",
      price: "22 300 ₽/час"
    }
  ];

  onMounted(() => {
    const product = document.querySelectorAll('.products-content img')
    product.forEach((e) => {
      e.addEventListener('click', () => {
        product.forEach((i) => {
          i.classList.remove('products-content__active')
        })
        e.classList.add('products-content__active')
      })
    })
  })
</script>

<template>
  <div class="product-wrapper">
    <h4>Похожие объявления</h4>
    <div class="products">
      <div class="products-content" v-for="item in product" :key="item">
        <img :src="'/_nuxt/assets/img/order/' + item.image" alt="product-image">
        <div class="products-content__text">
          <p>{{ item.description }}</p>
          <h4>{{ item.title }}</h4>
          <h2>{{ item.price }}</h2>
        </div>
      </div>
    </div>
    <div class="product-wrapper__footer">
      <button>
        Смотреть все
        <img src="../../assets/img/order/down.png" alt="down">
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .product-wrapper {
    margin: 40px 0 0;
    & h4 {
      font-family: 'Lato', sans-serif;
      font-weight: 700;
      font-size: 24px;
      color: #3E3E51;
    }
    .products {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 10px;
      .products-content {
        margin-top: 20px;
        font-family: 'Lato', sans-serif;
        & img {
          width: 186px;
          height: 186px;
          border-radius: 20px;

        }
        &__text {
          & p {
            font-weight: 500;
            font-size: 14px;
            color: #8F99BA;
          }
          & h4 {
            font-weight: 700;
            font-size: 14px;
            color: #3E3E51;
            margin: 2px 0;
            }
          & h2 {
            font-weight: 700;
            font-size: 16px;
            color: #3E3E51;
          }
        }
        &__active {
            border-radius: 20px;
            border: 5px solid #32BD1B;
              padding: 5px;
        }
      }
    }
    &__footer {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 25px;
      & button {
        border: none;
        background: none;
        font-family: 'Lato', sans-serif;
        font-weight: 500;
        font-size: 16px;
        color: #32BD1B;
        & img {
          margin-left: 10px;
        }
      }
    }
  }
</style>