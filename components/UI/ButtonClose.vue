<template>
  <button class="btn-close">
    <IconBase icon="close" color="gray" />
  </button>
</template>

<style lang="scss" scoped>
.btn-close {
  width: 35px;
  height: 35px;
  padding: 0;

  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  background: #fff;
  border: 2px solid #dadeec;

  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    background: $red;
    border-color: white;
    svg {
      --icon-color: white;
    }
  }
}
</style>
