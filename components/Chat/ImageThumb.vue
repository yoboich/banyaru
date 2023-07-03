<template>
  <div class="chat__item-image" :class="{ online: props.online }">
    <div class="chat__item-user">
      <img src="~/assets/images/preview/user.png" alt="" />
    </div>
    <img src="~/assets/images/preview/girl-bath.png" alt="" />
  </div>
</template>

<script setup>
const props = defineProps({
  online: Boolean,
});
</script>

<style lang="scss" scoped>
.chat__item-user {
  position: absolute;
  padding: 3px;
  background: #fff;
  border-radius: 50%;
  overflow: hidden;
  width: 35px;
  height: 35px;
  transform: translate(-10%, -10%);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
  }
}

.chat__item-image {
  width: 96px;
  height: 76px;
  position: relative;

  &.online {
    &::after {
      opacity: 1;
    }
  }

  &::after {
    content: "";
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 2px solid #fff;
    background: $green;
    position: absolute;
    z-index: 2;
    bottom: 0;
    right: 0;
    transform: translate(15%, 15%);
    opacity: 0;
  }

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
}
</style>
