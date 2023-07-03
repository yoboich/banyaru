<template>
  <nuxt-link to="#" class="news__ad-item">
    <img src="~/assets/images/preview/ad.png" alt="" />
  </nuxt-link>
</template>

<script setup></script>

<style lang="scss" scoped>
.news__ad-item {
  width: 100%;
  height: 300px;
  border-radius: 20px;
  overflow: hidden;
  display: block;
  @media (max-width: 768px) {
    height: 160px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background: #f5f5f5;
    object-position: center;
  }
}
</style>
