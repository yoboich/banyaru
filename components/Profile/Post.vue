<template>
  <div class="post" :class="getClasslist()">
    <div class="post-image">
      <div class="post__type">
        <span>{{ typeLabels[props.data.type] }}</span>
        <IconBase icon="info" color="gray" />
      </div>
      <nuxt-link to="/search/post">
        <img src="~/assets/images/preview/slider-girl.jpg" alt="" />
      </nuxt-link>
    </div>
    <div class="post__content">
      <div class="post__header" v-if="props.controls">
        <span class="post__status">{{ statusLabels[props.data.status] }}</span>
        <IconBase icon="more" color="black" />
      </div>
      <span class="post__tag">Сауны</span>
      <nuxt-link to="/search/post">
        <span class="post__name">Сауна Дионис-СПА</span>
      </nuxt-link>
      <h5 class="post__price">22 300 ₽</h5>
      <span class="post__location">ул. Тимирязьева, м. Могилевская</span>
      <div class="post__stats">
        <div class="post__stats-item item-views">
          <IconBase icon="views" />
          <span>0</span>
        </div>
        <div class="post__stats-item item-favorite">
          <IconBase icon="favorite" />
          <span>0</span>
        </div>
        <div class="post__stats-item">
          <span>Залы</span>
          <span>5</span>
        </div>
        <div class="post__stats-item">
          <span>Услуги</span>
          <span>12</span>
        </div>
      </div>
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
  active: "Активно",
  pending: "Проверяется",
  archived: "Неактивно",
  inactive: "Отклонено",
});

const props = defineProps({
  data: Object,
  controls: {
    type: Boolean,
    default: () => false,
  },
});

const getClasslist = () => {
  const data = props.data;
  const list = [data.type];

  switch (data.status) {
    case "active":
      list.push("active");
      break;
    case "inactive":
      list.push("inactive");
      break;
    case "pending":
      list.push("pending");
      break;
    default:
      list.push("archive");
  }

  return list;
};
</script>

<style lang="scss" scoped>
.post {
  display: flex;
  gap: 30px;

  &.free {
    .post__type {
      span {
        color: $gray;
      }
    }
  }

  &.book {
    .post__type {
      span {
        color: $purple;
      }
      svg {
        --icon-color: #{$purple};
      }
    }
  }

  &.pay {
    .post__type {
      span {
        color: $green;
      }
      svg {
        --icon-color: #{$green};
      }
    }
  }

  &.vip {
    .post__type {
      span {
        color: $yellow;
      }
      svg {
        --icon-color: #{$yellow};
      }
    }
  }

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

  &-image {
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
    justify-content: space-between;
  }

  &__header {
    display: flex;
    justify-content: space-between;

    svg {
      width: 20px !important;
    }
  }

  &.active {
    & .post__status::after {
      background: $green;
    }
  }

  &.inactive {
    & .post__status::after {
      background: $red;
    }
  }

  &.pending {
    & .post__status::after {
      background: $yellow;
    }
  }

  &.archive {
    & .post__status::after {
      background: $gray;
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

  &__stats {
    display: flex;
    justify-content: space-between;
    font-size: 11px;
    line-height: 13px;
    color: $gray;

    &-item {
      display: flex;
      align-items: center;
      gap: 5px;

      svg {
        width: 13px !important;
      }

      &.item-favorite {
        svg {
          height: 13px !important;
        }
      }
    }
  }
}
</style>
