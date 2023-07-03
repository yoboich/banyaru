<template>
  <div class="advert">
    <div class="advert__title">Реклама</div>
    <div class="advert__subtitle">Любая полезная инфа про баню</div>
  </div>
</template>

<style lang="scss" scoped>
.advert {
  margin-top: 3.6rem;
  margin-bottom: 5rem;
  height: 10rem;
  width: 90vw;
  margin-left: auto;
  margin-right: auto;
  background-image: url(@/assets/img/home/Slider.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0px 18px 38px rgba(123, 129, 148, 0.4);
  border-radius: 12px;
  &__title {
    font-family: "Gilroy";
    font-size: 2.6rem;
    line-height: 100%;
    margin-bottom: 0.6rem;
    padding-top: 2.4rem;
    padding-left: 3.4rem;
    color: $default-color;
    text-transform: uppercase;
  }
  &__subtitle {
    padding-left: 3.4rem;
    color: $default-color;
  }
}
</style>
