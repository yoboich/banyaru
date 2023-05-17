<template>
  <button class="btn-close">
    <IconClose class="hover-green" />
  </button>
</template>

<style lang="scss">
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

  transition: background 0.2s;

  &:hover {
    background: #32bd1b;
    svg.icon-close {
      stroke: #fff;
    }
  }
}
</style>
