<template>
  <component :is="tag" class="icon" :class="{ hover: props.hover }">
    <img :src="getLocalUrl(`/icons/${icon}-${color}.svg`)" alt="" />
  </component>
</template>

<script setup>
const props = defineProps({
  tag: {
    type: String,
    default: "button",
    validates: (tag) => ["i", "button", "div"].includes(tag),
  },
  icon: {
    type: String,
    required: true,
  },
  hover: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: "gray",
    validates: (color) =>
      ["green", "gray", "black", "red", "white"].includes(color),
  },
  hoverColor: {
    type: String,
    default: "green",
    validates: (color) =>
      ["green", "gray", "black", "red", "white"].includes(color),
  },
});

const hoverPath = computed(
  () => `url(${getLocalUrl(`/icons/${props.icon}-${props.hoverColor}.svg`)})`
);
</script>

<style lang="scss" scoped>
.icon {
  @include flex-center-all;
  background-repeat: no-repeat !important;
  background-position: center !important;
  background-size: contain !important;
  background-origin: content-box !important;
  // background: transparent;
  cursor: pointer;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  &.hover:hover {
    background-image: v-bind(hoverPath);

    img {
      opacity: 0;
    }
  }
}
</style>
