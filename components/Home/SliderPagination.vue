<template>
  <div class="pagination__inner">
    <div class="pagination__arrow">
      <IconArrow class="swiper-btn__arr active-black" />
      <div class="pagination__dots">
        <span class="dot"></span>
        <span class="dot active"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
      <IconArrow class="swiper-btn__arr" />
    </div>
    <div class="pagination__counter">02</div>
  </div>
</template>

<style lang="scss" scoped>
.pagination {
  &__inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    padding: 5.2rem 2.5rem 3.2rem 2rem;
    height: 36rem;
  }
  &__dots{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    gap: 1.5rem;
    & .dot{
      width: .6rem;
      height: .6rem;
      background-color: #9DA7C7;
      border-radius: 100%;
      &.active{
        transform: scale(2);
        background: $green-color;
        box-shadow: 1px 7px 14px #98A0BB;
        
      }
    }
  }
  &__arrow{
    display: flex;
    flex-direction: column;
    gap: 2.6rem;
    justify-content: center;
  }
  &__counter {
    margin-top: auto;
    font-size: 2.6rem;
    color: $green-color;
    font-weight: 700;
  }
}
.swiper-btn__arr {
  &:nth-child(1) {
    transform: rotate(-90deg);
  }
  &:last-child {
    transform: rotate(90deg);
  }
}
</style>
