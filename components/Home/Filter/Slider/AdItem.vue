<template>
  <nuxt-link class="ad filter-ad" to="#">
    <div>
      <h4 class="ad-suptitle">Реклама</h4>
      <h3 class="ad-title">Гостевые домики Сан-Поль</h3>
      <div class="ad-price">
        22 300 <br />
        руб.
      </div>
      <img src="~/assets/images/preview/place-ad.png" alt="" class="ad-image" />
    </div>
  </nuxt-link>
</template>

<script setup></script>

<style lang="scss" scoped>
.ad {
  padding: 35px 20px 20px;
  border-radius: 15px;
  position: relative;
  text-align: left;
  overflow: hidden;
  display: block;

  & > div {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  &-title {
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
  }
  &-suptitle {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #fff;
    margin-bottom: 15px;
  }

  &-price {
    font-weight: 700;
    font-size: 28px;
    line-height: 100%;
    text-align: right;
    color: #32bd1b;
    margin-top: auto;
  }

  &-image {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    object-position: center;
    z-index: -1;
    top: 0;
    left: 0;
  }
}
</style>
