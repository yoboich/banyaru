<template>
  <div class="favorite-item">
    <img
      src="~/assets/images/preview/girl-bath.png"
      alt=""
      class="favorite-item__image"
    />
    <div class="favorite-item__content">
      <div class="favorite-item__header">
        <span class="favorite-item__tag" v-if="props.status === 'active'"
          >Сауны</span
        >
        <span class="favorite-item__deleted" v-else>Удалено</span>
        <button class="favorite-item__btn">
          <IconBase icon="favorite-filled" color="green" />
        </button>
      </div>
      <span class="favorite-item__name">Сауна Дионис-СПА</span>
      <h5 class="favorite-item__price">22 300 ₽</h5>
      <span class="favorite-item__location"
        >ул. Тимирязьева, м. Могилевская</span
      >
<!--      <div class="favorite-item__stats">-->
<!--        <div class="favorite-item__stat">-->
<!--          <IconBase class="icon-views" icon="views" color="gray" />-->
<!--          <span>0</span>-->
<!--        </div>-->
<!--        <div class="favorite-item__stat">-->
<!--          <IconBase class="icon-favorite" icon="favorite" color="gray" />-->
<!--          <span>0</span>-->
<!--        </div>-->
<!--      </div>-->
      <UIButton class="green favorite-item__btn-cart">В корзину</UIButton>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  status: String,
});

</script>

<style lang="scss" scoped>
.favorite-item {
  display: flex;
  gap: 30px;

  &__deleted {
    color: $red;
  }

  &__image {
    width: 120px;
    height: 120px;
    border-radius: 15px;
  }

  &__tag {
    font-size: 14px;
    line-height: 18px;
  }

  &__name {
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 5px;
  }

  &__price {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 5px;
  }

  &__location {
    font-size: 11px;
    line-height: 13px;
    color: $gray;
    margin-bottom: 5px;
    max-width: 100px;
    display: block;
  }

  &__content {
    flex-grow: 1;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }

  &__btn {
    display: flex;
    svg {
      width: 20px !important;
    }
  }

  &__stats {
    display: flex;
    gap: 15px;
    margin-top: auto;
  }

  &__stat {
    display: flex;
    align-items: center;
    gap: 5px;

    .icon-views {
      width: 13px !important;
    }

    .icon-favorite {
      height: 13px !important;
      width: 13px !important;
    }
  }

  &__btn-cart {
    height: 30px;
    font-size: 14px;
    margin-top: 10px;
    width: 150px;
  }
}
</style>
