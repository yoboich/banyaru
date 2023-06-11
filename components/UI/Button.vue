<template>
  <nuxt-link v-if="props.to" class="btn" :to="props.to">
    <slot/>
  </nuxt-link>
  <button class="btn" v-else>
    <slot/>
  </button>
</template>

<script setup>
const props = defineProps({
  to: {
    type: String
  }
})
</script>

<style lang="scss" scoped>
.btn {
  width: fit-content;
  height: 50px;
  padding: 0 15px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  text-align: center;

  color: $green;
  border: 2px solid #DADEEC;
  background: #fff;

  transition: all .2s;
  cursor: pointer;

  &.full {
    width: 100%;
  }

  &:not(.green):not(.purple):not(.gray):not(.custom):not(.disabled):hover {
    background: $green;
    color: #fff;
    border-color: $green;
  }

  &.gray {
    color: $black;
  }

  &.green {
    background: $green;
    border-color: $green;
    color: #fff;
  }

  &.disabled {
    background: #DADEEC;
    color: #fff;
  }

  &.purple {
    background: $purple;
    border-color: $purple;
    color: #fff;
    
    &:hover {
      color: #fff;
    }
  }
}
</style>