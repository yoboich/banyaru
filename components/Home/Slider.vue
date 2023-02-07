<template>
  <div class="slider">
    <div class="slider__wrapper">
    <div class="slider__inner">
      <div class="slider__titles">
        <h1 class="slider__title">Название бани</h1>
        <h2 class="slider__subtitle">Любая полезна инфа про баню</h2>
      </div>
      <div class="slider__thumbs thumbs">
        <div class="thumbs__titles">
          <h3 class="thumbs__title">Элитная сауна в центре</h3>
          <h4 class="thumbs__subtitle">
            Да прибудет с вами легкий Очаковский пар!
          </h4>
        </div>
        <div class="thumbs__images">
          <img src="@/assets/img/product-card/1.png" alt="" />
          <img src="@/assets/img/product-card/2.png" alt="" />
          <img src="@/assets/img/product-card/3.png" alt="" />
          <img src="@/assets/img/product-card/4.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div class="pagination"></div>
  </div>
</template>

<style lang="scss" scoped>
.pagination {
  height: 43rem;
  width: 5%;
  background: #ffffff;
  border-radius: 0px 23px 23px 0px;
}
.slider {
  display: flex; 
  align-items:center;
  margin-top: 4.6rem;
  &__wrapper {
    width: 95%;
    background-image: url(@/assets/img/home/Slider.png);
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0px 18px 38px rgba(123, 129, 148, 0.4);
    border-radius: 6px;
  }
  &__inner {
    display: grid;
    align-items: start;
    grid-template-columns: 50% 50%;
    color: $default-color;
  }
  &__titles {
    display: flex;
    flex-direction: column;
    color: $default-color;
    padding: 7.2rem 0 0 11.4rem;
    gap: 1rem;
  }
  &__title {
    font-family: "Gilroy";
    font-size: 6.5rem;
    line-height: 6.5rem;
    text-transform: uppercase;
    margin-top: -0.59rem;
  }
  &__subtitle {
    font-weight: 700;
  }
  .thumbs {
    display: grid;
    grid-template-columns: 20rem 10rem;
    margin-left: auto;
    padding: 7.3rem 7rem 7rem 0;
    gap: 3.5rem;
    &__titles {
      display: flex;
      flex-direction: column;
      color: $default-color;
      margin-left: auto;
      text-align: right;
      gap: 1.1rem;
    }
    &__title {
      font-weight: 700;
      font-size: 2rem;
      line-height: 2rem;
    }
    &__images {
      display: flex;
      flex-direction: column;
      gap: 4rem;
      & img {
        max-width: 5rem;
        width: 100%;
        height: auto;
        margin-left: auto;
        border: 4px solid #ffffff;
        filter: drop-shadow(0px 6px 50px #000000);
        border-radius: 5px;
      }
      & img:nth-child(1) {
        max-width: 10.5rem;
      }
    }
  }
}
</style>
