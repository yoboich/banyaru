<template>
  <div class="cart-item">
    <img
      src="~/assets/images/preview/venik.png"
      alt=""
      class="cart-item__image"
    />
    <div class="cart-item__content">
      <div class="cart-item__header">
        <h5 class="cart-item__name">Дубовый веник</h5>
        <button class="cart-item__btn">
          <IconBase icon="close" color="gray" />
        </button>
      </div>
      <h4 class="cart-item__price">22 300 ₽</h4>
      <div class="cart-item__counter">
        <button class="cart-item__counter-btn">
          <IconBase icon="decrement" color="green" />
        </button>
        <span class="cart-item__counter-amount">2</span>
        <button class="cart-item__counter-btn">
          <IconBase icon="increment" color="green" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.cart-item {
  display: flex;
  gap: 30px;
  margin-bottom: 30px;

  &__btn {
    cursor: pointer;
    &:hover {
      svg {
        --icon-color: #{$red};
      }
    }
  }

  &__image {
    width: 120px;
    height: 120px;
    border-radius: 15px;
    object-fit: cover;
    object-position: center;
  }

  &__content {
    min-width: 200px;
  }

  &__header {
    display: flex;
    justify-content: space-between;
  }

  &__name {
    margin-bottom: 5px;
  }

  &__price {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 30px;
  }

  &__counter {
    display: flex;
    align-items: center;
    gap: 15px;

    height: 35px;
    background: #fff;
    border: 2px solid #dadeec;
    border-radius: 100px;
    width: fit-content;

    &-btn {
      @include flex-center-all;
      width: 35px;
      height: 35px;
      cursor: pointer;
    }
  }
}
</style>
