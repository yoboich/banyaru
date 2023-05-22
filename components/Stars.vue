<template>
  <div class="card__stars">
    <div class="card__star" v-for="item in 4" :key="item">
      <img src="~/assets/icons/star-green.svg" alt="" />
    </div>
    <div class="card__star">
      <img src="~/assets/icons/star-gray.svg" alt="" />
    </div>
    <span v-if="rate" class="h4">4,2</span>
  </div>
</template>

<script setup>
defineProps({
  rate: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.card {
  &__stars {
    display: flex;
    align-items: center;

    & span {
      color: #9da7c7;
      margin-left: 1rem;
    }
  }

  &__star {
  }
}
</style>
