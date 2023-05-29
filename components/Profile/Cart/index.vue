<template>
  <div class="cart">
    <div v-if="cart.length">
      <div class="cart__items">
        <ProfileCartItem v-for="i of 3" :key="i"/>
      </div>
      <div class="cart__result">
        <h3 class="cart__result-title">Итого</h3>
        <div class="cart__result-details">
          <h5 class="cart__result-price">32 000 ₽</h5>
          <span class="cart__result-amount">25 шт.</span>
        </div>
      </div>
      <div class="cart__controls">
        <nuxt-link to="/search">
          <ProfileBtn>
            Найти баню, услугу, товары
          </ProfileBtn>
        </nuxt-link>
        <ProfileBtn class="btn-pay">Оплатить</ProfileBtn>
      </div>
    </div>
    <ProfileEmpty title="Пока в корзине ничего нет" v-else/>
  </div>
</template>

<script setup>
const cart = ref([1, 2]);
</script>

<style lang="scss" scoped>
.cart {
  &__items {
    margin-bottom: 30px;
  }

  .profile-btn {
    padding: 15px;
  }

  &__result {
    border-top: 1px solid rgba($color: $gray, $alpha: 0.2);
    border-bottom: 1px solid rgba($color: $gray, $alpha: 0.2);
    margin-bottom: 30px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: right;

    padding: 20px 0;

    &-title {
      font-weight: 800;
      font-size: 20px;
      line-height: 100%;
    }

    &-price {
      font-weight: 800;
      font-size: 20px;
      line-height: 100%;
      margin-bottom: 10px;
    }

    &-amount {
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;
    }
  }

  &__controls {
    display: flex;
    justify-content: space-between;

    @media (max-width: 700px) {
      flex-direction: column;
      gap: 20px;
    }

    .btn-pay {
      background: $green;
      color: #fff;
    }
  }

  &-item {
    &:last-of-type {
      margin-bottom: 0;
    }
  }
}
</style>
