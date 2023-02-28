<script setup>
import { useWindowSize } from "@vueuse/core";
const isLarge = ref(true);
const { width } = useWindowSize();
watchEffect(() => {
  if (width.value <= 768) {
    isLarge.value = false;
  } else {
    isLarge.value = true;
  }
});
onMounted(() => {
  if (width.value <= 768) {
    isLarge.value = false;
  }
});
</script>

<template>
  <div v-if="isLarge" class="total-price">
    <div class="total-price__inner">
      <div class="total-price__balance">
        <p>Баланс: 0 ₽</p>
        <span>Пополнить</span>
      </div>
      <div class="total-price__price">
        <div class="total-price__text">
          <span>Премиум:</span>
          <p><b>382</b> ₽ на 7 дней</p>
        </div>
        <p class="total-price__total">Итого: 917 ₽</p>
        <p class="total-price__info">
          Недостаточно средств на счету. <span>Пополнить</span>
        </p>
      </div>
    </div>
    <div class="total-price__buttons">
      <button class="btn btn-white">Просмотреть</button>
      <button class="btn btn-white">Сохранить черновик</button>
      <button class="btn btn-green">Разместить объявление</button>
    </div>
  </div>
  <div v-else class="total-price-mobile">
    <div class="total-price-mobile__inner">
      <div class="total-price-mobile__item">
        <span>Платный</span>
        <p>30 000 ₽ / 3 мес.</p>
      </div>
      <div class="total-price-mobile__item">
        <span>Помощь в размещении</span>
        <p>10 000 ₽</p>
      </div>
      <div class="total-price-mobile__item">
        <p>Итого</p>
        <p>40 000 ₽</p>
      </div>
    </div>
    <div class="total-price-mobile__buttons">
      <span></span>
      <button class="btn btn-green">Разместить и оплатить</button>
    </div>
    <div class="total-price-mobile__info">
      <p>Баланс: 0,00 ₽ Недостаточно средств.</p>
      <span>Пополнить баланс</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.total-price-mobile {
  margin-top: 5rem;
  &__inner {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    margin-bottom: 2.4rem;
  }
  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & span {
      color: $secondary-color;
    }
    & p {
      font-weight: 700;
      font-size: 2.4rem;
      line-height: 130%;
    }
  }
  &__buttons {
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    & button {
      padding: 1.5rem 2.8rem;
      font-size: 2rem;
    }
    & span {
      cursor:pointer;
      position: relative;
      display: block;
      width: 5rem;
      height: 5rem;
      background-color: $green-color;
      border-radius: 100rem;
      &::after {
        content: "";
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        mask: url("@/assets/img/icon/eye.svg") no-repeat center;
        background-color: $default-color;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        z-index: 50;
      }
    }
  }
  &__info{
    margin-top: 2.6rem;
    margin-bottom: 3.6rem;
    gap: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items:center;
    & p {
      color:#FF515B
    }
    & span{
      color: $green-color;
    }
  }
}
.total-price {
  margin-top: 2.2rem;
  &__inner {
    display: flex;
    justify-content: space-between;
  }
  &__balance {
    font-size: 1.6rem;
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    justify-content: center;
    & span {
      color: $green-color;
    }
  }
  &__text {
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: flex-end;
    & span {
      color: $secondary-color;
    }
    & p {
      font-size: 2.4rem;
    }
  }
  &__total {
    margin-top: 1.1rem;
    margin-bottom: 2rem;
    font-weight: 700;
    font-size: 2.8rem;
    line-height: 100%;
    text-align: right;
  }
  &__info {
    & span {
      color: $green-color;
    }
  }
  &__buttons {
    margin-top: 4.7rem;
    display: flex;
    justify-content: center;
    gap: 2rem;
    align-items: center;
    margin-bottom: 7rem;
    & button {
      padding: 1.5rem 3.8rem;
      font-size: 2rem;
    }
  }
}
</style>
