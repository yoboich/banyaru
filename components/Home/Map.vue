<script setup></script>

<template>
  <section class="map">
    <div class="map__content">
      <div class="search-hint">
        <h2 class="search-hint__title">Поиск на карте</h2>
        <p class="search-hint__suptitle">Бани и сауны рядом с вами</p>
        <UIButton class="gray search-hint__btn" to="/search">
          Показать на карте
        </UIButton>
      </div>

      <iframe
        src="https://api-maps.yandex.ru/frame/v1/-/CCU6uPTyoA?controls=TrafficControl"
        width="100%"
        height="400"
        frameborder="0"
      ></iframe>
    </div>
  </section>
</template>

<style lang="scss">
.map {
  &__content {
    position: relative;
    border-radius: 20px;
    overflow: hidden;

    .city-select {
      position: absolute;
      right: 15px;
      top: 25px;
      background: #fff;
    }

    .search-hint {
      position: absolute;
      padding: 25px 30px;
      background: #fff;
      box-shadow: 0px 11px 48px rgba(178, 188, 221, 0.15);
      border-radius: 20px;
      text-align: center;

      &__title {
        font-weight: 700;
        font-size: 28px;
        line-height: 100%;
        margin-bottom: 10px;
      }

      &__suptitle {
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        margin-bottom: 20px;
      }

      &__btn {
        padding: 30px 50px;
      }
    }
  }
}
</style>
