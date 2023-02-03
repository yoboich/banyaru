<script lang="ts" setup>
let isActive = ref(false);
</script>

<template>
  <div @click="isActive = !isActive" class="city-select">
    <img src="@/assets/img/icon/geo.svg" alt="" />
    <span>Москва</span>
    <span
      :class="[isActive ? 'city-select__icon_active' : '']"
      class="city-select__icon"
    ></span>
  </div>
</template>

<style lang="scss" scoped>
.city-select {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 3.1rem;
  padding: 0.8rem 0.9rem;
  max-width: 20rem;
  width: 100%;
  box-shadow: 1px 7px 21px rgba(166, 175, 205, 0.22);
  border-radius: $mainBorderRadius;
  & span {
    color: $green-color;
    font-weight: 700;
  }
  &__icon {
    position: relative;
    width: 2.4rem;
    height: 2.4rem;
    box-shadow: 1px 4px 12px rgba(166, 175, 205, 0.36);
    border-radius: 2rem;
    transition: all 0.2s;
    &::after {
      content: "";
      width: 1.4rem;
      height: 0.8rem;
      position: absolute;
      left: 20%;
      top: 40%;
      background-size: cover;
      background-repeat: no-repeat;
      // background-image: url("@/assets/img/icon/select.svg");
      mask: url("@/assets/img/icon/select.svg") no-repeat center;
      background-color: $secondary-color;
      transition: all 0.2s;
    }
    &_active {
      &::after {
        background-color: $green-color;
        transition: all 0.2s;
      }
    }
  }
}
</style>
