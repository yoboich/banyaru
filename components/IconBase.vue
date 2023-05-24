<template>
  <InlineSvg
    class="icon-base"
    :src="getLocalUrl(`/images/icons/${props.icon}.svg`)"
  />
</template>

<script setup>
import InlineSvg from "vue-inline-svg";

const colors = {
  black: "#3e3e51",
  gray: "#8f99ba",
  "light-gray": "#e1e5f2",
  green: "#32bd1b",
  white: "#fff",
  red: "#FD404D",
};

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "gray",
  },
});

const color = colors[props.color];
</script>

<style lang="scss">
.icon-base {
  transition: all 0.2s;
  --icon-color: v-bind(color);
}
</style>
