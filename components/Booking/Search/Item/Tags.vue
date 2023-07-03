<template>
  <ul class="item__tags">
    <li v-for="(tagName, i) of tags" :key="i" class="item__tags-item">
      {{ tagName }}
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  tags: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss">
.item__tags {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;

  list-style: disc;

  &-item {
    list-style: disc;

    font-weight: 700;
    font-size: 17px;
    line-height: 20px;

    &:first-of-type {
      list-style: none;
    }
  }
}
</style>
