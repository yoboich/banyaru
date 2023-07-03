<template>
  <div class="search-suggestion">
    <h2 class="search-suggestion__title">
      <IconBase :icon="data.icon" color="gray" />
      {{ data.title }}
    </h2>
    <ul class="search-suggestion__items">
      <div
        class="search-suggestion__item"
        v-for="({ name, address }, i) of data.items"
        :key="i"
      >
        <h3 class="search-suggestion__item-name">{{ name }}</h3>
        <span class="search-suggestion__item-address">{{ address }}</span>
      </div>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  data: Object,
});
</script>

<style lang="scss" scoped>
.search-suggestion {
  margin-left: 40px;
  margin-bottom: 20px;
  padding-top: 20px;

  border-top: 1px solid #dadeec;

  &__title {
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;

    position: relative;

    svg {
      width: 25px;
      position: absolute;
      top: 50%;
      left: -40px;
      transform: translate(0%, -50%);
    }
  }

  &__item {
    padding: 10px 0;
    position: relative;
    cursor: pointer;

    &:hover::after {
      opacity: 1;
    }

    &::after {
      content: "";
      width: calc(100% + 40px);
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;

      border: 2px solid #dadeec;
      border-radius: 100px;
      opacity: 0;
      transition: all 0.2s;
    }

    &:first-of-type {
      margin-top: 10px;
    }

    &-name {
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;

      position: relative;
      z-index: 2;
    }

    &-address {
      font-weight: 500;
      font-size: 11px;
      line-height: 13px;
      color: $gray;

      position: relative;
      z-index: 2;
    }
  }
}
</style>
