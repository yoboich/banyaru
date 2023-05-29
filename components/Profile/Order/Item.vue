<template>
  <div class="order-item" :class="getClasslist()">
    <div class="order-item__image">
      <img src="~/assets/images/preview/slider-girl.jpg" alt="" />
    </div>
    <div class="order-item__content">
      <div class="order-item__header">
        <span class="order-item__status">{{
          statusLabels[props.data.status]
        }}</span>
        <IconBase icon="more" color="green" />
      </div>
      <span class="order-item__tag">01.22.23 · 18:00 - 22:00</span>
      <span class="order-item__name">Сауна Дионис-СПА</span>
      <span class="order-item__room">Горячий сруб</span>
      <h5 class="order-item__price">22 300 ₽</h5>
      <span class="order-item__location">ул. Тимирязьева, м. Могилевская</span>
    </div>
  </div>
</template>

<script setup>
const typeLabels = ref({
  book: "Бронирование",
  vip: "VIP",
  pay: "Платное",
  free: "Бесплатное",
});

const statusLabels = ref({
  payed: "Оплачен",
  cancelled: "Отменен",
  waiting: "Ждет подтверждения",
  completed: "Исполнен",
});

const props = defineProps({
  data: Object,
});

const getClasslist = () => {
  const data = props.data;
  const list = [data.type, data.status];

  return list;
};
</script>

<style lang="scss" scoped>
.order-item {
  display: flex;
  gap: 30px;

  &__type {
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 5px;

    padding: 2px 2px 2px 6px;
    background: #ffffff;
    box-shadow: 0px 2.54758px 8.91655px rgba(166, 175, 205, 0.22);
    border-radius: 50px;
    position: absolute;
    top: 10px;
    left: 10px;

    span {
      font-weight: 500;
      font-size: 7px;
      line-height: 8px;
      color: $gray;
    }

    svg {
      width: 12px !important;
      height: 12px !important;
    }
  }

  &__image {
    width: 120px;
    height: 120px;
    border-radius: 15px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      border-radius: 15px;
      object-fit: cover;
      object-position: center;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  &__header {
    display: flex;
    justify-content: space-between;

    svg {
      width: 20px !important;
    }
  }

  &.payed {
    & .order-item__status::after {
      background: $green;
    }
  }

  &.cancelled {
    & .order-item__status::after {
      background: $red;
    }
  }

  &.completed {
    & .order-item__status::after {
      background: $yellow;
    }
  }

  &.waiting {
    & .order-item__status::after {
      background: $purple;
    }
  }

  &__status {
    font-size: 11px;
    line-height: 13px;
    padding-left: 15px;
    position: relative;
    margin-bottom: 5px;

    &::after {
      content: "";
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  &__tag,
  &__name {
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 5px;
  }

  &__room {
    font-size: 11px;
    line-height: 13px;
    color: $gray;
    margin-bottom: 5px;
  }

  &__price {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 2px;
  }

  &__location {
    font-size: 11px;
    line-height: 13px;
    color: $gray;
    margin-bottom: 5px;
  }
}
</style>
