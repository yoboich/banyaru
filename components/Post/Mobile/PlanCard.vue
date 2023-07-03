<template>

  <div class="mobile-plan">
    <h3 class="mobile-plan__title">{{ props.data.title }}</h3>
    <p class="mobile-plan__text">{{ props.data.text }}
    </p>
    <ul class="mobile-plan__list">
      <li class="mobile-plan__list-item" v-for="(item, i) of props.data.items" :key="i">
        <label :for="`plan-${id}-${i}`" class="mobile-plan__item-info">
          <span class="mobile-plan__item-title">{{ item.title }}</span>
          <span class="mobile-plan__item-text">
            {{ item.text }}
            <span class="discount" v-if="item.discount">{{ item.discount }}</span>
          </span>
        </label>
        <UIRadioButton v-model="activeBtn" :input-id="`plan-${id}-${i}`" :name="`plan-${id}-${i}`"/>
      </li>
    </ul>
    <div class="mobile-plan__subtext" v-if="props.data.subtext">
      {{ props.data.subtext }}
      <br>
      <br>
    </div>
    <div class="mobile-plan__old-price" v-if="props.data.oldPrice">{{ props.data.oldPrice }}</div>
    <div class="mobile-plan__price">{{ props.data.price }}</div>
  </div>
</template>

<script setup>
import { v4 as uuidv4 } from "uuid";
const id = uuidv4()

const activeBtn = ref(`plan-${id}-0`)

const props = defineProps({
  data: Object
})
</script>

<style lang="scss" scoped>
.mobile-plan {
  padding: 20px;
  border: 3px solid #fff;
  box-shadow: 0px 11px 48px rgba(178, 188, 221, 0.15);
  background: #fff;
  border-radius: 25px;
  transition: all .2s;
  height: 100%;
  display: flex;
  flex-direction: column;

  &__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    margin-bottom: 20px;
  }

  &__text {
    margin-bottom: 20px;
  }

  &__list {
    margin-bottom: 30px;

    &-item {
      padding: 20px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &:not(:last-of-type) {
        border-bottom: 1px solid rgba($color: $gray, $alpha: .2);
      }

      &:last-of-type {
        padding-bottom: 0;
      }
    }
  }

  &__item {
    &-info {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    &-title {
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
    }

    &-text {
      color: gray;
      position: relative;

      .discount {
        height: 25px;
        background: $red;
        padding: 2px;
        border-radius: 5px;
        color: #fff;
        margin-left: 20px;
      }
    }
  }

  &__price, &__old-price, &__subtext {
    font-size: 16px;
    line-height: 18px;
    margin-top: auto;
  }

  &__old-price {
    color: $red;
    text-decoration: line-through;
  }

}
</style>