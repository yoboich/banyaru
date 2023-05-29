<template>
  <InlineSvg
    class="icon-base"
    :src="getLocalUrl(`/images/icons${subpath}/${props.icon}.svg`)"
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
  purple: '#8e58ff'
};

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  subpath: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: "gray",
  },
  subcolor: String
});

const color = colors[props.color];
const subcolor = colors[props.subcolor];
</script>

<style lang="scss">
.icon-base {
  transition: all 0.2s;
  --icon-color: v-bind(color);
  --icon-subcolor: v-bind(subcolor);
}
</style>
