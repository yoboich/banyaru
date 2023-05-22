<template>
  <button class="btn-close">
    <img src="~/assets/icons/close-gray.svg" alt="" />
  </button>
</template>

<style lang="scss">
.btn-close {
  @include bg-img-fill(15px, center, content-box);
  background-image: none;
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
    background: $green;
    background-image: url(~/assets/icons/close-white.svg);

    img {
      opacity: 0;
    }
  }
}
</style>
